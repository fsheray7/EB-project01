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
    <nav className="w-full  bg-white relative z-50">
      <div className="mx-auto px-[clamp(1rem,4vw,10rem)]">
        <div className="h-[clamp(60px,8vw,100px)] flex items-center justify-between">

          {/* LOGO */}
          <div
            className="cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="logo"
              className="h-[clamp(30px,6vw,60px)]"
            />
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-[clamp(1rem,3vw,3rem)] text-[clamp(0.9rem,1.5vw,1.5rem)] font-medium text-gray-700">
            <li
              onClick={() => navigate("/")}
              className="hover:text-orange-500 cursor-pointer"
            >
              HOME
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              SHOP
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              BLOGS
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              CONTACT US
            </li>
          </ul>

          {/* DESKTOP RIGHT */}
          <div className="hidden lg:flex justify-center mb-4 items-center gap-[clamp(0.5rem,1vw,2rem)]">
            <button
              onClick={handleLogin}
              className="px-[clamp(1rem,1.5vw,2rem)] py-[clamp(0.5rem,0.5vw,1rem)]
                         text-[clamp(0.85rem,1vw,1.25rem)]
                         rounded-full bg-teal-400 text-white font-medium
                         hover:bg-teal-500 transition"
            >
              SIGN IN
            </button>

            <img
              src={cartImage}
              alt="cart"
              className="w-[clamp(1.5rem,2vw,3rem)] h-[clamp(1.5rem,2vw,3rem)] cursor-pointer"
            />
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-[clamp(1.5rem,4vw,3rem)]"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t bg-white flex justify-between">
          <ul className="flex flex-col gap-[clamp(0.5rem,2vw,1.5rem)]
                         px-[clamp(1rem,4vw,2rem)]
                         py-[clamp(1rem,2vw,2rem)]
                         text-[clamp(0.9rem,1.5vw,1.2rem)]
                         font-medium text-gray-700">

            <li
              onClick={() => {
                navigate("/");
                setOpen(false);
              }}
              className="cursor-pointer"
            >
              HOME
            </li>

            <li className="cursor-pointer">SHOP</li>
            <li className="cursor-pointer">BLOGS</li>
            <li className="cursor-pointer">CONTACT US</li>

            <button
              onClick={handleLogin}
              className="mt-[clamp(1rem,2vw,2rem)] w-fit
                         px-[clamp(1rem,1vw,1rem)]
                         py-[clamp(0.5rem,0.7vw,1rem)]
                         rounded-full bg-teal-400 text-white
                         text-[clamp(0.9rem,1vw,1.2rem)]
                         font-medium"
            >
              SIGN IN
            </button>
          </ul>

          <img
            src={cartImage}
            alt="cart"
            className="mr-3 mt-4 w-[clamp(1.5rem,2vw,3rem)]
                       h-[clamp(1.5rem,3vw,3rem)] cursor-pointer"
          />
        </div>
      )}
    </nav>
  );
}
