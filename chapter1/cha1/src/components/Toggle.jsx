import { useState } from "react";

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="p-6 border border-gray-200 rounded-xl shadow-lg bg-white w-72 text-center transition-all duration-300 hover:shadow-xl">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Conditional Rendering
      </h2>

      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
      >
        {isVisible ? "Hide" : "Show"} Message
      </button>

      {/* Smoothly Animated Message */}
      <div
        className={`mt-4 text-gray-700 text-sm transition-all duration-300 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        🎉 You toggled the message!
      </div>
    </div>
  );
}
