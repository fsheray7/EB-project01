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
      <div className="relative z-10 

       min-h-[300px]
       sm:min-h-[340px]
       md:min-h-[592px]
       lg:min-h-[680px]
       xl:min-h-[650px]
        flex items-center justify-between 
        mt-1
        md:mt-6
        lg:mt-4
        xl:mt-6
         px-10 md:px-4 lg:px-10 xl:px-10">

        {/* Desktop Dog Image */}
        <div className="hidden md:block absolute md:bottom-0  left-0">
          <img
            src={dogImage}
            alt="Dog"
            className="
              object-contain
              w-[clamp(18rem,25vw,28rem)]
            "
          />
        </div>

        {/* Text Content */}
        <div className="w-full text-center md:text-center font-abeezee">
          <h1
            className="
              text-[#F4D06F]
            
              leading-tight
              text-[30px]
              md:text-[50px]
              lg:text-[80px]
              xl:text-[90px]
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
              py-[6px]
              px-[20px]
             md:py-[12px]
             md:px-[30px]
             lg:py-[12px]
             lg:px-[30px]
             xl:py-[12px]
             xl:px-[30px]
              text-[clamp(1rem,1vw,1rem)]
              md:text-[clamp(1rem,1.4vw,2.2rem)]
              lg:text-[clamp(1rem,1.4vw,2.2rem)]
              xl:text-[clamp(1rem,1.4vw,2.2rem)]
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
          className="w-[220px] h-[130px] 
         
          object-contain"
        />
      </div>
    </section>
  );
}

export default Banner;
