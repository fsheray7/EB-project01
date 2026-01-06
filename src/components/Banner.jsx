import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Banner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#A43B5B]">
      {/* Paw Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-110"
        style={{
          backgroundImage: `url("/banner/paws.png")`,
          backgroundRepeat: "repeat",
          backgroundSize: "1400px",
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 

      py-14
        flex items-center justify-between 
         ">

        {/* Desktop Dog Image */}
        <div className="hidden md:block absolute md:bottom-0  left-0">
          <img
            src="/banner/dog.png"
            alt="Dog"
            className="
              object-contain
              w-[clamp(13rem,25vw,22rem)]
            "
          />
        </div>

        {/* Text Content */}
        <div className="w-full text-center md:text-center ">
          <h1
            className="
              font-abeezee
              text-[#F4D06F]
            
              leading-tight
              text-[30px]
              md:text-[40px]
              lg:text-[60px]
              xl:text-[60px]
            "
          >
            Daily wellness,
            <br />
            <span
              className=" text-[#F4D06F] "
            >
              delivered<span className="text-white italic "> monthly.</span>
            </span>
          </h1>

          <p
            className="
              mt-4
              font-poppins
              text-white/90
              text-xs
              sm:text-base
              lg:text-base
              md:text- base
              leading-relaxed
              font-semibold
            "
          >
            Premium, science-backed supplements for your dog.
           
          </p>
          <p
            className="
              
              font-poppins
              text-white/90
              text-xs
              sm:text-base
              lg:text-base
              md:text-base
              leading-relaxed
              font-semibold
            "
          >
            Subscribe today and save 15% on every order.
          </p>

          <button
            className="
              mt-6
              inline-flex items-center gap-2
              bg-white text-[#A43B5B]
              font-semibold
              rounded-full
              hover:bg-gray-100
              transition
              cursor-pointer
              py-[6px]
              px-[20px]
             md:py-[12px]
             md:px-[30px]
             lg:py-[12px]
             lg:px-[30px]
             xl:py-[12px]
             xl:px-[30px]
              text-[clamp(1rem,1vw,1rem)]
              md:text-[clamp(1rem,1.4vw,2rem)]
              lg:text-[clamp(1rem,1.4vw,2.2rem)]
              xl:text-[clamp(1rem,1.4vw,2.2rem)]
            "
          >
            Shop Now <FaArrowRight className="text-lg text-[#D8A85B]" /> 
          </button>
        </div>
      </div>

      {/* Mobile Dog Image (UNCHANGED) */}
      <div className="md:hidden flex justify-center mt-8 pb-0">
        <img
          src="/banner/dog.png"
          alt="Dog"
          className="w-[220px] h-[130px] 
         
          object-contain"
        />
      </div>
    </section>
  );
}

export default Banner;
