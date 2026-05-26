import { useNavigate } from "react-router-dom";
import { FiAlertTriangle, FiHome } from "react-icons/fi";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-black
      flex items-center justify-center
      px-4"
    >
      <div
        className="max-w-lg w-full
        bg-zinc-900 border border-zinc-800
        rounded-3xl p-10 text-center
        shadow-2xl"
      >
        {/* Icon */}
        <div
          className="flex justify-center
          text-red-400 text-6xl mb-5"
        >
          <FiAlertTriangle />
        </div>

        {/* 404 */}
        <h1
          className="text-7xl font-bold
          text-red-400"
        >
          404
        </h1>

        {/* Message */}
        <h2
          className="text-white
          text-2xl font-semibold
          mt-4"
        >
          Page Not Found
        </h2>

        <p
          className="text-zinc-400
          mt-4 leading-7"
        >
          The page you are looking for does not exist or has been moved.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-8 inline-flex items-center
          gap-2 bg-cyan-600 hover:bg-cyan-700
          px-6 py-3 rounded-xl
          text-white font-semibold
          transition-all duration-300
          hover:scale-105 cursor-pointer"
        >
          <FiHome />
          Go Home
        </button>
      </div>
    </div>
  );
}
