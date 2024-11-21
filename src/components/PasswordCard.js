import { FaClipboard } from "react-icons/fa";

const PasswordCard = ({
  platform,
  email,
  icon,
  isActive,
  onClick,
  isFullscreen,
}) => {
  return (
    <div
      className={`relative flex items-center justify-between bg-white p-4 shadow-md rounded-lg transform transition-transform duration-300 ${
        isFullscreen
          ? "w-full h-auto flex-col items-start gap-4"
          : "hover:scale-105 cursor-pointer"
      }`}
      onClick={!isFullscreen ? onClick : null}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
          <img src={icon} alt={`${platform} logo`} className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">{platform}</h3>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>

      {!isFullscreen && (
        <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
          <FaClipboard className="w-5 h-5 text-gray-500" />
        </button>
      )}

      {isFullscreen && (
        <div className="mt-4">
          <p className="text-gray-600">
            Manage and store your {platform} login credentials securely here.
          </p>
        </div>
      )}
    </div>
  );
};

export default PasswordCard;
