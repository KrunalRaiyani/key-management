"use client";
import { useState } from "react";
import PasswordCard from "@/components/PasswordCard";
import { RxCross1 } from "react-icons/rx";

export default function Home() {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      id: 1,
      platform: "Google Account",
      email: "rahulornob@gmail.com",
      icon: "/google-logo.png",
    },
    {
      id: 2,
      platform: "Netflix Personal",
      email: "rahulornob@gmail.com",
      icon: "/netflix-logo.png",
    },
    {
      id: 3,
      platform: "Twitter",
      email: "rahulornob@gmail.com",
      icon: "/twitter-logo.png",
    },
    {
      id: 4,
      platform: "Dribbble Pro",
      email: "rahulornob@gmail.com",
      icon: "/dribbble-logo.png",
    },
  ];

  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
  };

  const handleClose = () => {
    setActiveCard(null);
  };

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
            Recent Used
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cards.map((card) => (
              <PasswordCard
                key={card.id}
                platform={card.platform}
                email={card.email}
                icon={card.icon}
                isActive={activeCard === card.id}
                onClick={() => handleCardClick(card.id)}
              />
            ))}
          </div>
        </section>

        {activeCard && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={handleClose}
          >
            <div className="relative bg-white p-6 w-96 rounded-lg shadow-lg transform transition-transform duration-300 scale-100">
              <div>
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  onClick={handleClose}
                >
                  <RxCross1 />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
