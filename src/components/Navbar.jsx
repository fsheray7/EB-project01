import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

import logo from "../assets/images/logo.png";
import cartImage from "../assets/images/cartImage.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
    setOpen(false); // mobile menu close
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow">
      <div className="flex items-center justify-between py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-16 w-full mx-auto">

        {/* LOGO */}
        <img
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
          className="w-[80px] h-[35px] lg:w-[90px] lg:h-[32px] cursor-pointer"
        />

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center font-semibold gap-6 lg:gap-8 text-sm text-gray-700">
          <li onClick={() => navigate("/")} className="text-[#D8A85B] hover:text-[#D8A85] cursor-pointer">HOME</li>
          <li className="hover:text-[#D8A85B] cursor-pointer">SHOP</li>
          <li className="hover:text-[#D8A85B] cursor-pointer">BLOGS</li>
          <li className="hover:text-[#D8A85B] cursor-pointer">CONTACT US</li>
        </ul>

        {/* DESKTOP RIGHT */}
        <div className="hidden lg:flex justify-center items-center gap-2 lg:gap-4">
          <button onClick={handleLogin} className="px-8 py-2 text-sm rounded-full bg-[#4C9E84] text-white font-medium hover:bg-teal-600 transition">
            SIGN IN
          </button>
          <img src={cartImage} alt="cart" className="w-5 h-5 cursor-pointer" />
        </div>

        {/* MOBILE TOGGLE */}
        <button className="lg:hidden text-2xl sm:text-3xl" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden flex justify-between py-2 border-t bg-white">
          <ul className="flex flex-col gap-3 sm:gap-4 px-4 sm:px-6  sm:py-5 text-sm sm:text-base font-medium text-gray-700">
            <li onClick={() => { navigate("/"); setOpen(false); }} className="cursor-pointer">HOME</li>
            <li className="cursor-pointer">SHOP</li>
            <li className="cursor-pointer">BLOGS</li>
            <li className="cursor-pointer">CONTACT US</li>
            <button onClick={handleLogin} className="mt-4 sm:mt-5 w-fit px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-teal-400 text-white text-xs sm:text-sm font-medium">
              SIGN IN
            </button>
          </ul>
          <img src={cartImage} alt="cart" className="mr-3 mb-4 w-6 h-6 sm:w-7 sm:h-7 cursor-pointer" />
        </div>
      )}
    </nav>
  );
}
