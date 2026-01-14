import React from 'react'
import { FaFacebookF, FaWhatsapp, FaAmazon } from "react-icons/fa";



export default function Footer() {
  return (
    <footer className="w-full font-poppins bg-[url({bgImg})] bg-cover bg-center bg-no-repeatpx-4 py-10 px-8"
      style={{ backgroundImage: `url("/footer/gradientBg.png")` }}>

      {/* MAIN FOOTER CARD */}
      <div className="font-poppins w-full rounded-3xl bg-white px-4 py-5 sm:py-6 md:py-6 lg:py-7">
        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 lg:gap-10 w-full">

          {/* LOGO + DESC */}
          <div className="flex flex-col items-start gap-2">
            <img src="/logo.png" alt="Logo image" className="w-24 h-10 sm:w-28 sm:h-11 md:w-24 md:h-9 lg:w-32 lg:h-12 xl:w-36 xl:h-14 object-contain" />
            <p className="text-[#000000] text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-base leading-tight">
              Premium, vet-formulated supplements for dogs. Keeping tails wagging since 2025.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col items-start gap-2">
            <h4 className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-base font-semibold uppercase text-[#4A4A4A]">
              Quick Links
            </h4>
            <ul className="text-[#000000] space-y-2 text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg">
              <li className="cursor-pointer hover:text-[#D9A441] transition">Home</li>
              <li className="cursor-pointer hover:text-[#D9A441] transition">Shop</li>
              <li className="cursor-pointer hover:text-[#D9A441] transition">Allergy Chews</li>
              <li className="cursor-pointer hover:text-[#D9A441] transition">Probiotic Chews</li>
              <li className="cursor-pointer hover:text-[#D9A441] transition">Blogs</li>
            </ul>
          </div>

          {/* HELP */}
          <div className="flex flex-col items-start gap-2">
            <h4 className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-base font-semibold uppercase text-[#4A4A4A]">
              Help
            </h4>
            <ul className="text-[#000000] space-y-1 text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-base">
              <li className="cursor-pointer hover:text-[#D9A441] transition">Manage Subscription</li>
              <li className="cursor-pointer hover:text-[#D9A441] transition">Contact Us</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col items-start gap-2">
            <button className="px-3 sm:px-4 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-1.5 lg:py-2 text-xs sm:text-xs md:text-xs lg:text-xs rounded-lg bg-black text-white font-medium hover:bg-gray-700 transition cursor-pointer whitespace-nowrap">
              Request a call
            </button>

            <div className="space-y-1 text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-base text-[#000000]">
              <p className="cursor-pointer hover:text-[#D9A441] transition">+1 (999) 999-99-99</p>
              <p className="cursor-pointer hover:text-[#D9A441] transition">info@wellfetch.com</p>
              <p className="cursor-pointer hover:text-[#D9A441] transition leading-relaxed">
                Pet Store Ltd, 123 High Street<br />
                Manchester, M1 2AB United Kingdom
              </p>
            </div>
            {/* SOCIAL ICONS */}
            <div className="flex py-3 items-start justify-center gap-2">
              {[FaAmazon, FaWhatsapp, FaFacebookF].map((Icon, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center px-1.5 py-1.5 rounded-full border border-black text-white cursor-pointer hover:bg-[#e29301] bg-[#D8A85B] transition text-xs"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>

      {/* GRADIENT STRIP */}

      <div className="flex mt-12 items-center justify-center  flex-col gap-6 lg:flex-row md:flex-row lg:items-center lg:justify-between">

        <h3 className="w-full  font-bold 
           text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl
             text-white">
          Get 10% off your first order plus expert dog health tips.
        </h3>

        <div className="relative mt-10 w-full  ">

          {/* OUTER GRADIENT BORDER */}
          <div className="absolute inset-0 rounded-[18px] bg-[#FFFFFF]"></div>

          {/* INNER WHITE CARD */}
          <div className="relative flex items-center bg-white/15 backdrop-blur-md rounded-[18px] border border-white px-4 ">

            {/* TITLE LEFT */}
            <h2 className="absolute -top-[1.8rem] left-1 text-white 
      text-sm tracking-wide">
              Join the pack
            </h2>

            {/* LABEL ABOVE INPUT */}
            <p className="absolute bottom-10 left-4 text-[10px] tracking-widest uppercase font-semibold text-[#4A4A4A]">
              Your Email
            </p>

            {/* INPUT */}
            <input
              type="email"
              placeholder="@gmail.com"
              className="w-full mt-6 bg-transparent text-[#000000] placeholder-[#000000] text-[clamp(0.9rem,1vw,1.1rem)] outline-none"
            />

            {/* SEND BUTTON */}
            <button className="ml-2 mt-6 text-[#000000] text-[clamp(1.4rem,2vw,2.2rem)] font-light">
              →
            </button>

          </div>
        </div>

      </div>

      <div className="mt-[clamp(2rem,4vw,2rem)] flex  gap-[clamp(0.5rem,1vw,1rem)] text-[clamp(0.8rem,1.2vw,3rem)] text-white/80  justify-between ">
        <span>© 2025 — Copyright</span>
        <span>Privacy</span>
      </div>

    </footer>
  );
}
