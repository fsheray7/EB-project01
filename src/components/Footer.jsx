import React from 'react'
import { FaFacebookF,  FaWhatsapp , FaAmazon } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400  px-4 py-10">
      {/* MAIN FOOTER CARD */}
      <div className="flex w-full rounded-3xl md:justify-space-between bg-white p-6  sm:p-10 2xl:p-18 lg:p-14">
        <div className="grid  mt-10 grid-cols-1 gap-10 sm:grid-cols-2 w-full   lg:grid-cols-4">

          {/* LOGO + DESC */}
          <div>
            <h2 className="text-3xl 2xl:text-5xl font-bold text-[#D9A441]">Wellfetch</h2>
            <p className=" mt-3 mx-auto text-gray-900
              max-w-[clamp(28rem,45vw,70rem)]
              text-[clamp(0.9rem,1.4vw,2.2rem)]">
              Premium, vet-formulated supplements for dogs. Keeping tails wagging since 2025.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className=" 2xl:ml-[40%]">
            <h4 className="mb-4 text-sm  2xl:text-2xl uppercase text-gray-800">
              Quick Links
            </h4>
            <ul className=" mt-3 text-gray-900
              max-w-[clamp(28rem,45vw,70rem)]
              text-[clamp(0.9rem,1.4vw,2rem)]">
              <li className='cursor-pointer'>Home</li>
              <li className='cursor-pointer'>Shop</li>
              <li className='cursor-pointer'>Allergy Chews</li>
              <li className='cursor-pointer'>Probiotic Chews</li>
              <li className='cursor-pointer'>Blogs</li>
            </ul>
          </div>

          {/* HELP */}
          <div className=" 2xl:ml-[40%]">
            <h4 className=" mb-4 text-sm 2xl:text-4xl font-semibold uppercase text-gray-600">
              Help
            </h4>
            <ul className="  text-[clamp(0.9rem,1.4vw,2rem)] text-gray-900">
              <li className='cursor-pointer'>Manage Subscription</li>
              <li className='cursor-pointer'>Contact Us</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className=' lg:flex flex-col items-center gap-[clamp(1rem,2vw,1rem)] py-2'>
            <button className="px-[clamp(1rem,2vw,2rem)] py-[clamp(0.5rem,1vw,1rem)] text-[clamp(0.85rem,1.5vw,1rem)] rounded-xl bg-black text-white font-medium hover:bg-gray-700 transition cursor-pointer">
              Request a call
            </button>

            <p className="  text-[clamp(0.85rem,2vw,1.2rem)]">+1 (999) 999-99-99</p>
            <p className=" text-[clamp(0.85rem,2vw,1.2rem)]">info@wellfetch.com</p>

            <p className="  text-[clamp(0.85rem,1.4vw,1rem)]">
              Pet Store Ltd, 123 High Street<br />
              Manchester, M1 2AB United Kingdom
            </p>

            {/* SOCIAL ICONS */}
            <div className="pt-10 flex gap-3">
              {[FaAmazon, FaWhatsapp, FaFacebookF, ].map((Icon, i) => (
                <div
                  key={i}
                  className="flex px-[clamp(1rem,2vw,1rem)] py-[clamp(1rem,2vw,1rem)] text-[clamp(1rem,1.5vw,1rem)] items-center justify-center rounded-full border border-[black]  text-white cursor-pointer hover:bg-[#e29301] bg-[#D9A441]"
                >
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* GRADIENT STRIP */}
      
        <div className="flex mt-12 flex-col gap-6 lg:flex-row md:flex-row lg:items-center lg:justify-between">
          
          <h3 className="w-full text-2xl font-bold  text-[clamp(2rem,1.5vw,4rem)]  text-white">
            Get 10% off your first order plus <br /> expert dog health tips.
          </h3>

          <div className= " border border-white relative mt-10 flex w-full  text-[clamp(1rem,1.5vw,2rem)] items-center rounded-[18px] border-[2px solid white] bg-white/20 px-4 py-5 backdrop-blur">
          <h2 className='absolute bottom-25 2xl:bottom-30 z-100 font-bold text-white' >Join The Pack</h2>
          <p 
      className="absolute top-[-clamp(1rem,1vw,2.2rem)] left-[clamp(1rem,2vw,2rem)] text-[clamp(0.75rem,1vw,1rem)] 2xl:text-[clamp(0.75rem,1vw,1.5rem)] bottom-12 lg:bottom-16 text-white  uppercase"
    >
      YOUR EMAIL
    </p>
            <input
              type="email"
              placeholder="@gmail.com"

              className="w-full w-[100%] bg-transparent text-white   placeholder-white outline-none"
            />
           <button className="ml-[clamp(0.5rem,1vw,1rem)] text-white text-[clamp(1.5rem,2.5vw,3rem)]">
      →
    </button>
          </div>
        </div>

       <div className="mt-[clamp(2rem,4vw,2rem)] flex  gap-[clamp(0.5rem,1vw,1rem)] text-[clamp(0.8rem,1.2vw,3rem)] text-white/80  justify-between ">
    <span>© 2025 — Copyright</span>
    <span>Privacy</span>
  </div>
      
    </footer>
  );
}
