import { FiMoreVertical } from "react-icons/fi";

const PasswordCard = ({ platform, email, icon, isActive, onClick }) => {
  return (
    <div
      className={`relative flex flex-col items-center bg-white p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 ${
        isActive ? "ring-2 ring-blue-500" : "hover:shadow-lg"
      } cursor-pointer`}
      onClick={onClick}
    >
      {/* Three Dots Menu */}
      <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
        <FiMoreVertical size={20} />
      </button>

      {/* Logo Section */}
      <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
        <img src={icon} alt={`${platform} logo`} className="w-8 h-8" />
      </div>

      {/* Text Content */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800">{platform}</h3>
        <p className="text-sm text-gray-500">{email}</p>
      </div>
    </div>
  );
};

export default PasswordCard;
