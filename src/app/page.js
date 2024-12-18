"use client";
import { useState, useEffect } from "react";
import PasswordCard from "@/components/PasswordCard";
import { RxCross1, RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineLoading } from "react-icons/ai";

export default function Home() {
  const [activeCard, setActiveCard] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [textArea, setTextArea] = useState("");
  const [debouncedValues, setDebouncedValues] = useState({
    password: "",
    textArea: "",
  });
  const [loading, setLoading] = useState(false); // Loading state

  // Handle card click
  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
  };

  // Handle modal close
  const handleClose = () => {
    setActiveCard(null);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValues({ password, textArea });
    }, 500); // 500ms debounce delay

    return () => clearTimeout(handler);
  }, [password, textArea]);

  // Submit function
  const handleSubmit = async () => {
    setLoading(true); // Start loading
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Submitted values:", debouncedValues);
      alert(
        `Submitted values:\nPassword: ${debouncedValues.password}\nText Area: ${debouncedValues.textArea}`
      );
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Handle Ctrl+S keydown
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s" && activeCard) {
        e.preventDefault();
        handleSubmit(); // Trigger submit
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCard, debouncedValues]);

  const companies = [
    {
      name: "Amazon",
      email: "contact@amazon.com",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Google",
      email: "contact@google.com",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Microsoft",
      email: "contact@microsoft.com",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo_%282012%29.svg",
    },
    {
      name: "Apple",
      email: "contact@apple.com",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_%282016%29.svg",
    },
    {
      name: "Facebook",
      email: "contact@facebook.com",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    },
    {
      name: "Twitter",
      email: "contact@twitter.com",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_2012.svg",
    },
    {
      name: "Netflix",
      email: "contact@netflix.com",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Netflix_2015_logo.svg",
    },
    {
      name: "Spotify",
      email: "contact@spotify.com",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Spotify_logo_with_text.svg",
    },
    {
      name: "Tesla",
      email: "contact@tesla.com",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Tesla_Logo.png",
    },
    {
      name: "Adobe",
      email: "contact@adobe.com",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/Adobe_Logo.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-12 lg:px-24">
      <div className="mx-auto">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Password Manager</h1>
          <p className="text-gray-500 mt-2">
            Securely store and manage your passwords.
          </p>
        </header>

        {/* Card Grid */}
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Recently Used
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {companies.map((id) => (
              <PasswordCard
                key={id.name}
                platform={id.name}
                email={id.email}
                icon={id.logo}
                isActive={activeCard === id}
                onClick={() => handleCardClick(id)}
              />
            ))}
          </div>
        </section>

        {/* Modal */}
        {activeCard && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={handleClose}
          >
            <div
              className="relative bg-white p-6 pt-10 w-[600px] h-[400px] rounded-lg shadow-lg flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={handleClose}
              >
                <RxCross1 />
              </button>

              {/* Content */}
              <div className="space-y-6 flex flex-col flex-grow">
                {/* Password Input */}
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="w-full border rounded-md p-2 pl-10 text-gray-800"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <RiLockPasswordLine />
                  </button>
                  <button
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <RxEyeOpen /> : <RxEyeClosed />}
                  </button>
                </div>

                {/* Text Area */}
                <div className="flex-grow">
                  <textarea
                    className="w-full h-full border rounded-md p-2 text-gray-800 resize-none"
                    placeholder="Enter text here"
                    value={textArea}
                    onChange={(e) => setTextArea(e.target.value)}
                  />
                </div>

                {/* Submit Button */}
                {/* Submit Button */}
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 self-end flex items-center justify-center"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  <span className="flex items-center justify-center w-16">
                    {loading ? (
                      <AiOutlineLoading className="animate-spin w-5 h-5" />
                    ) : (
                      "Submit"
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
