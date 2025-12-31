import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo2.png";
import SocialLogin from "../components/SocialLoginHandle";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="min-h-screen w-full bg-gray-10 flex flex-col">
        {/* TOP BAR */}
        <header className="w-full bg-[#e6b978] flex justify-center py-3 sm:py-4 md:py-5">
          <img src={logo} alt="Logo" className="h-8 sm:h-10 md:h-12 lg:h-14 object-contain" />
        </header>

        {/* CENTER AREA */}
        <main className="flex flex-1 items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 2xl:px-10 2xl:py-14">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl 2xl:max-w-4xl bg-gray-10 hover:shadow-lg transition-shadow duration-300">
            <div className="w-full bg-gray-10 text-start px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 2xl:px-10 2xl:py-14">
              {/* HEADINGS */}
              <h1 className="text-base sm:text-lg md:text-4xl 2xl:text-5xl font-semibold text-gray-900">Hello,</h1>
              <h2 className="mt-1 sm:mt-2 text-lg sm:text-2xl md:text-3xl 2xl:text-5xl font-bold text-gray-900">Welcome Back!</h2>
              <p className="mt-3 sm:mt-4 mb-6 sm:mb-8 text-xs sm:text-sm md:text-base 2xl:text-3xl text-gray-500">
                We are very happy to see you back!
              </p>

              {/* FORM */}
              <form className="space-y-4 sm:space-y-5 md:space-y-6 2xl:space-y-10 text-left">
                {/* EMAIL */}
                <div>
                  <label className="block mb-2 text-xs sm:text-sm text-gray-700 2xl:text-2xl font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="lorem@gmail.com"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-md sm:rounded-lg text-xs sm:text-sm md:text-base 2xl:text-2xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e6b978] focus:border-transparent transition"
                  />
                </div>

                {/* PASSWORD */}
                <div className="relative">
                  <label className="block mb-2 text-xs sm:text-sm 2xl:text-2xl text-gray-700 font-medium">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Please Enter Your Password"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 pr-10 sm:pr-12 border border-gray-300 rounded-md sm:rounded-lg text-xs sm:text-sm md:text-base 2xl:text-2xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e6b978] focus:border-transparent transition"
                  />
                  <span
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 text-sm sm:text-base 2xl:text-2xl hover:text-gray-700 transition"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  <p className="mt-2 text-right text-xs sm:text-sm 2xl:text-xl text-blue-500 hover:underline cursor-pointer font-medium">
                    Forgot Password
                  </p>
                </div>

                {/* LOGIN BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-[#e6b978] text-white py-2 sm:py-2.5 md:py-3 rounded-md sm:rounded-lg text-xs sm:text-sm 2xl:text-2xl md:text-base font-semibold hover:bg-[#d4a862] active:scale-95 transition-all duration-200"
                >
                  Login
                </button>
              </form>

              {/* DIVIDER */}
              <div className="flex items-center my-6 sm:my-8 md:my-10 2xl:my-12">
                <hr className="flex-1 border-gray-300" />
                <span className="px-2 sm:px-3 text-xs 2xl:text-2xl sm:text-sm text-gray-400">OR</span>
                <hr className="flex-1 border-gray-300" />
              </div>

              {/* SOCIAL LOGIN */}
              <SocialLogin mode="login" />

              {/* FOOTER */}
              <div className="text-center mt-6 sm:mt-8 md:mt-10 text-lg sm:text-md text-gray-500">
                <p className="mt-6 sm:mt-8 md:mt-10 text-md sm:text-sm text-center 2xl:text-2xl text-gray-500">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-[#e6b978] font-medium hover:underline cursor-pointer">
                    Sign Up here!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </GoogleOAuthProvider>
  );
}
