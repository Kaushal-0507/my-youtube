import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLock, FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";

const SignInRequired = () => {
  const navigate = useNavigate();
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  return (
    <div
      className={`flex flex-col items-center justify-center md:mx-auto min-h-screen  p-6 text-center ${
        isDarkTheme ? "bg-black" : "bg-gray-50"
      }`}
    >
      <div
        className={` p-8 rounded-xl shadow-lg max-w-md w-full ${
          isDarkTheme ? "bg-white/10 text-white" : "bg-white text-black"
        }`}
      >
        <div className="text-4xl text-red-500 mb-4 flex justify-center">
          <FaLock />
        </div>

        <h1 className="text-[20px] font-bold mb-2">
          Hold Up, Digital Explorer!
        </h1>

        <p className="text-gray-600 mb-6 text-[18px]">
          This treasure chest requires a secret handshake (aka signing in).
          <br />
          No peeking until you're officially part of the club!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-[18px] justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <FaHome size={25} /> Take Me Home
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          P.S. We promise it's worth the effort. Pinky swear.
        </p>
      </div>
    </div>
  );
};

export default SignInRequired;
