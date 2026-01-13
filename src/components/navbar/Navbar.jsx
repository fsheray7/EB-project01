import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { Icon } from "@iconify/react";

import { FaRegUser } from "react-icons/fa6";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check login status on mount
    const checkLogin = () => {
      setIsLoggedIn(localStorage.getItem("loggedIn") === "true");
    };
    checkLogin();

    // Listen for custom auth change event
    window.addEventListener("authChange", checkLogin);
    return () => window.removeEventListener("authChange", checkLogin);
  }, []);

  const handleLogin = () => {
    navigate("/login");
    setOpen(false); // mobile menu close
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("authChange"));
    navigate("/login");
    setOpen(false);
    setShowDropdown(false);
  };

  // Profile
  const handleProfile = () => {
    navigate("/profile");
    setOpen(false); // mobile menu close
    setShowDropdown(false);
  };

  // Active state helpers
  const isShopActive =
    location.pathname === "/shop" ||
    location.pathname.startsWith("/product/") ||
    location.pathname === "/cart" ||
    location.pathname === "/checkout";

  const isBlogActive =
    location.pathname === "/blog" ||
    location.pathname.startsWith("/blog/");

  const isContactActive = location.pathname === "/contact";
  const isHomeActive = location.pathname === "/";

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow">
      <div className="flex items-center justify-between py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-16 w-full mx-auto">

        {/* LOGO */}
        <img
          src="/logo.png"
          alt="logo"
          onClick={() => navigate("/")}
          className="w-[80px] h-[35px] lg:w-[90px] lg:h-[32px] cursor-pointer"
        />

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center  gap-6 lg:gap-8 text-md text-gray-700">
          <li onClick={() => navigate("/")} className={`cursor-pointer ${isHomeActive ? "text-[#D8A85B]" : "text-gray-700 hover:text-[#D8A85B]"}`}>HOME</li>
          <li
            onClick={() => navigate("/shop")}
            className={`cursor-pointer ${isShopActive ? "text-[#D8A85B]" : "text-gray-700 hover:text-[#D8A85B]"}`}
          >
            SHOP
          </li>
          <li
            onClick={() => navigate("/blog")}
            className={`cursor-pointer ${isBlogActive ? "text-[#D8A85B]" : "text-gray-700 hover:text-[#D8A85B]"}`}
          >
            BLOGS
          </li>
          <li
            onClick={() => navigate("/contact")}
            className={`cursor-pointer ${isContactActive ? "text-[#D8A85B]" : "text-gray-700 hover:text-[#D8A85B]"}`}
          >
            CONTACT US
          </li>
        </ul>

        {/* DESKTOP RIGHT */}
        <div className="hidden lg:flex justify-center items-center gap-4">
          {!isLoggedIn ? (
            <button onClick={handleLogin} className="px-8 py-2 text-sm rounded-full bg-[#4C9E84] text-white font-medium hover:bg-teal-600 transition">
              SIGN IN
            </button>
          ) : (
            <div className="relative">
              <FaRegUser
                onClick={() => setShowDropdown(!showDropdown)}
                className="cursor-pointer text-gray-700 w-6 h-6 hover:text-[#D8A85B] transition"
              />
              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute top-10 right-0 bg-white shadow-lg rounded-md w-40 py-2 border border-gray-100 flex flex-col z-50">
                  <button
                    onClick={handleProfile}
                    className="text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#D8A85B] transition"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-500 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          <Icon
            icon="solar:cart-broken"
            className="cursor-pointer text-gray-700 w-7 h-7 hover:text-[#D8A85B] transition"
            width="28"
            onClick={() => navigate("/cart")}
          />

        </div>

        {/* MOBILE TOGGLE */}
        <button className="lg:hidden text-2xl sm:text-3xl" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden flex justify-between items-start py-2 border-t bg-white">
          <ul className="flex flex-col gap-3 sm:gap-4 px-4 sm:px-6  sm:py-5 text-sm sm:text-base font-medium text-gray-700">
            <li onClick={() => { navigate("/"); setOpen(false); }} className={`cursor-pointer ${isHomeActive ? "text-[#D8A85B]" : "text-gray-700"}`}>HOME</li>
            <li onClick={() => { navigate("/shop"); setOpen(false); }} className={`cursor-pointer ${isShopActive ? "text-[#D8A85B]" : "text-gray-700"}`}>SHOP</li>

            <li onClick={() => { navigate("/blog"); setOpen(false); }} className={`cursor-pointer ${isBlogActive ? "text-[#D8A85B]" : "text-gray-700"}`}>BLOGS</li>

            <li onClick={() => { navigate("/contact"); setOpen(false); }} className={`cursor-pointer ${isContactActive ? "text-[#D8A85B]" : "text-gray-700"}`}>CONTACT US</li>
            {!isLoggedIn && (
              <button onClick={handleLogin} className="mt-4 sm:mt-5 w-fit px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-teal-400 text-white text-xs sm:text-sm font-medium">
                SIGN IN
              </button>
            )}
            {/* Mobile Logout (only if logged in) */}
            {isLoggedIn && (
              <li onClick={handleLogout} className="cursor-pointer text-red-500 font-medium">LOGOUT</li>
            )}
          </ul>

          <div className="flex items-center gap-4 px-4 ">
            <Icon
              icon="solar:cart-broken"
              className="cursor-pointer text-gray-700 w-6 h-6 hover:text-[#D8A85B] transition"
              width="28"
              onClick={() => { navigate("/cart"); setOpen(false); }}
            />
            {isLoggedIn && <FaRegUser onClick={handleProfile} className="cursor-pointer text-gray-700 w-6 h-6 hover:text-[#D8A85B] transition" />}
          </div>
        </div>
      )}
    </nav>
  );
}
