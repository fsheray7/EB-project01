import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/loginsection/SocialLoginHandle";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { toast } from "react-toastify";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // NEW STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(""); // This state is no longer used with the new handleSubmit

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("loggedIn", "true");
    window.dispatchEvent(new Event("authChange")); // Notify other components
    toast.success("Successfully logged in");
    navigate("/");
  };

  // The original handleLogin function is replaced by handleSubmit
  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   const savedUser = JSON.parse(localStorage.getItem("user"));

  //   // No user stored
  //   if (!savedUser) {
  //     setMsg("No account found. Please sign up first.");
  //     return;
  //   }

  //   // Validate credentials
  //   if (email === savedUser.email && password === savedUser.password) {
  //     setMsg("Login successful. Redirecting...");
  //     localStorage.setItem("loggedIn", "true");

  //     setTimeout(() => {
  //       navigate("/");
  //     }, 1000);
  //   } else {
  //     setMsg("Invalid email or password.");
  //   }
  // };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="min-h-screen font-poppins w-full bg-gray-10 flex flex-col">
        {/* TOP BAR */}
        <header className="w-full bg-[#e6b978] flex justify-center py-3 sm:py-4 md:py-5">
          <img src="/login/logo2.png" alt="Logo" className="h-8 sm:h-10 md:h-12 lg:h-14 object-contain" />
        </header>

        {/* CENTER AREA */}
        <main className="flex flex-1 items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-8 md:py-10 2xl:px-10 2xl:py-14">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg 2xl:max-w-xl lg:max-w-lg bg-gray-10 hover:shadow-lg transition-shadow duration-300">
            <div className="w-full bg-gray-10 text-start px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 2xl:px-10 2xl:py-14">

              {/* HEADINGS */}
              <h1 className="text-xl sm:text-2xl md:text-5xl 2xl:text-5xl text-gray-900">Hello,</h1>
              <h2 className="mt-1 sm:mt-2 text-xl sm:text-2xl md:text-5xl 2xl:text-5xl text-gray-900">Welcome Back!</h2>

              {/* FORM */}
              <form
                className="space-y-4 sm:space-y-5 md:space-y-6 2xl:space-y-10 text-left"
                onSubmit={handleSubmit}
              >
                {/* EMAIL */}
                <div>
                  <label className="block mb-2 text-xs sm:text-sm text-gray-900 2xl:text-2xl font-bold">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="lorem@gmail.com"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-2 border border-gray-300 rounded-md sm:rounded-lg text-xs sm:text-sm md:text-base 2xl:text-2xl bg-gray-50 placeholder-[#CBD1D8] focus:outline-none focus:ring-2 focus:ring-[#e6b978] focus:border-transparent transition"
                  />
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="block mb-2 text-xs sm:text-sm 2xl:text-2xl text-gray-900 font-bold">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Please Enter Your Password"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-2 pr-10 sm:pr-12 border border-gray-300 rounded-[12px] sm:rounded-lg text-xs sm:text-sm md:text-base 2xl:text-2xl placeholder-[#CBD1D8] bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#e6b978] focus:border-transparent transition"
                    />
                    <span
                      className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 text-sm sm:text-base 2xl:text-2xl hover:text-gray-700 transition"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>

                {/* LOGIN BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-[#DDB370] text-white py-2 sm:py-2.5 md:py-3 rounded-md sm:rounded-lg text-xs sm:text-sm 2xl:text-2xl md:text-base font-semibold hover:bg-[#d4a862] active:scale-95 transition-all duration-200"
                >
                  Login
                </button>
              </form>

              {msg && <p className="mt-4 font-medium text-center text-red-700">{msg}</p>}

              {/* OTHER SECTIONS UNCHANGED */}
              <div className="flex items-center my-4">
                <hr className="flex-1 border-[#7E8B9E]" />
                <span className="px-2 sm:px-3 text-xs 2xl:text-2xl sm:text-sm text-[#7E8B9E] font-medium">OR</span>
                <hr className="flex-1 border-[#7E8B9E]" />
              </div>

              <SocialLogin mode="login" />

              <div className="text-center mt-8 text-xs sm:text-md text-gray-500">
                Don't have an account?
                <Link to="/signup" className="text-[#e6b978] font-medium hover:underline cursor-pointer">
                  Sign Up here!
                </Link>
              </div>

            </div>
          </div>
        </main>
      </div>
    </GoogleOAuthProvider>
  );
}
