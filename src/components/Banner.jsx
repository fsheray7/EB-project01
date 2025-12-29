import React from "react";
import dogImage from "../assets/images/Dog.png";
import pawsPattern from "../assets/images/Paws.png";

function Banner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#A43B5B]">
      {/* Paw Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `url(${pawsPattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "1400px",
        }}
      />

      {/* Main Container */}
      <div className="relative z-10  md:min-h-[650px] flex items-center justify-between px-6 lg:px-20">

        {/* Desktop Dog Image */}
        <div className="hidden md:block absolute md:bottom-0  left-0">
          <img
            src={dogImage}
            alt="Dog"
            className="
              object-contain
              w-[clamp(18rem,25vw,38rem)]
            "
          />
        </div>

        {/* Text Content */}
        <div className="w-full text-center md:text-center py-2">
          <h1
            className="
              text-[#F4D06F]
              font-bold
              leading-tight

              text-3xl
              sm:text-4xl
              
              md:text-[clamp(3rem,4.5vw,7rem)]
            "
          >
            Daily wellness,
            <br />
            <span
              className="
                italic text-white font-normal
                text-[clamp(1.5rem,2.8vw,4rem)]
              "
            >
              delivered monthly.
            </span>
          </h1>

          <p
            className="
              mt-4
              text-white/90
              text-sm
              sm:text-base
              md:text-[clamp(1.1rem,1.3vw,1.8rem)]
              leading-relaxed
            "
          >
            Premium, science-backed supplements for your dog.
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
              
              px-6 py-3 text-sm sm:text-base
              md:px-[clamp(2rem,3vw,4.5rem)]
              md:py-[clamp(0.9rem,1.2vw,2rem)]
              md:text-[clamp(1rem,1.4vw,2.2rem)]
            "
          >
            Shop Now <span className="text-lg">→</span>
          </button>
        </div>
      </div>

      {/* Mobile Dog Image (UNCHANGED) */}
      <div className="md:hidden flex justify-center mt-8 pb-0">
        <img
          src={dogImage}
          alt="Dog"
          className="w-44 object-contain"
        />
      </div>
    </section>
  );
}

export default Banner;
