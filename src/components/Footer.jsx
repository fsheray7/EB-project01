import React from 'react'
import { FaFacebookF,  FaWhatsapp , FaAmazon } from "react-icons/fa";



export default function Footer() {
  return (
    <footer className=" mt-4 w-full bg-[url({bgImg})] bg-cover bg-center bg-no-repeatpx-4 py-10 px-8"
    style={{ backgroundImage: `url("/images/footer-bg.png")`}}>
      
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
      
        <div className="flex mt-12 flex-col gap-6 lg:flex-row md:flex-row lg:items-center lg:justify-between">
          
          <h3 className="w-full  font-bold 
           text-[clamp(1rem,1.5vw,2rem)]
           md:text-[clamp(1.5rem,1vw,2rem)]
           lg:text-[clamp(2rem,1.5vw,4rem)]
           xl:text-[clamp(2rem,1.5vw,4rem)]
             text-white">
            Get 10% off your first order plus expert dog health tips.
          </h3>

          <div className= " border border-white relative mt-10 flex w-full  text-[clamp(1rem,1.5vw,2rem)] items-center rounded-[18px] border-[2px solid white] bg-white/20 px-4  sm:py-4 md:py-4 lg:py-4 xl:py-4 backdrop-blur">
          <h2 className='absolute 
           text-lg
           2xl:text-2xl
           
          bottom-10
          sm:bottom-18
          md:bottom-20
          lg:bottom-25
          xl:bottom-25
           2xl:bottom-30 z-100 font-bold text-white' >Join The Pack</h2>
          <p 
      className="absolute hidden md:block lg:block xl:block 2xl:block top-[-clamp(1rem,1vw,2.2rem)] left-[clamp(1rem,2vw,2rem)] text-[clamp(0.75rem,1vw,1rem)] 2xl:text-[clamp(0.75rem,1vw,1rem)] bottom-12
       sm:bottom-13
       md:bottom-12
       lg:bottom-12
       xl:bottom-16
       2xl:bottom-16
        text-white  uppercase"
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
