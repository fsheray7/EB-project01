import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/images/logo.png";
import cartImage from "../assets/images/cartImage.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-dashed border-blue-300">
      <div className="mx-auto px-[clamp(1rem,4vw,10rem)]">
        <div className="h-[clamp(60px,8vw,100px)] flex items-center justify-between">

          {/* Logo */}
          <div className="cursor-pointer">
            <img src={logo} alt="logo image" className="h-[clamp(30px,6vw,60px)]" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-[clamp(1rem,3vw,3rem)] text-[clamp(0.9rem,1.5vw,1.5rem)] font-medium text-gray-700">
            <li className="hover:text-orange-500 cursor-pointer">HOME</li>
            <li className="hover:text-orange-500 cursor-pointer">SHOP</li>
            <li className="hover:text-orange-500 cursor-pointer">BLOGS</li>
            <li className="hover:text-orange-500 cursor-pointer">CONTACT US</li>
          </ul>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-[clamp(0.5rem,2vw,2rem)]">
            <button className="px-[clamp(1rem,2vw,2rem)] py-[clamp(0.5rem,1vw,1rem)] text-[clamp(0.85rem,1.5vw,1.25rem)] rounded-full bg-teal-400 text-white font-medium hover:bg-teal-500 transition cursor-pointer">
              SIGN IN
            </button>
            <img
              src={cartImage}
              alt="cart image"
              className="w-[clamp(1.5rem,3vw,3rem)] h-[clamp(1.5rem,3vw,3rem)] cursor-pointer"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[clamp(1.5rem,4vw,3rem)]"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex justify-between lg:hidden border-t bg-white py-2">
          <ul className="flex flex-col gap-[clamp(0.5rem,2vw,1.5rem)] px-[clamp(1rem,4vw,2rem)] py-[clamp(1rem,2vw,2rem)] text-[clamp(0.9rem,1.5vw,1.2rem)] font-medium text-gray-700">
            <li>HOME</li>
            <li>SHOP</li>
            <li>BLOGS</li>
            <li>CONTACT US</li>

            <button className="mt-[clamp(1rem,2vw,2rem)] w-fit px-[clamp(1rem,2vw,2rem)] py-[clamp(0.5rem,1vw,1rem)] rounded-full bg-teal-400 text-white text-[clamp(0.9rem,1.5vw,1.2rem)] font-medium">
              SIGN IN
            </button>
          </ul>
            <img
              src={cartImage}
              alt="cart image"
              className=" mr-3 w-[clamp(1.5rem,3vw,3rem)] h-[clamp(1.5rem,3vw,3rem)] cursor-pointer"
            />
        </div>
      )}
    </nav>
  );
}
