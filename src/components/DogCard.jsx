import React from "react";
import dog from "../assets/images/dogpic2.png";
import bone from "../assets/images/bone.png";

function DogCard() {
  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="w-full  px-4 sm:px-6 lg:px-8">
        
        {/* MAIN ROW */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-12 ">

          {/* LEFT CONTENT */}
          <div className="flex-1 min-w-0">
            
            <h1 className="text-[#D8A85B] text-[28px] md:text-[40px] lg:text-[50px] font-semibold">
              Why Choose Us ?
            </h1>

            <p className="mt-2 text-[#000000]leading-relaxed text-[clamp(0.8rem,1.8vw,1.1rem)]">
              Your pet's health and well-being are our top priority.
            </p>

            {/* FEATURES */}
            <div className="mt-6 font-semibold sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-10 lg:gap-x-12 gap-y-6 sm:gap-y-8 lg:gap-y-10">
              
              {[ 
                ["EASE ALLERGIES", "Provides relief from environmental triggers."],
                ["NATURAL INGREDIENTS", "Carefully selected, naturally nutritious ingredients."],
                ["REDUCE ITCHING", "Soothes skin irritation and discomfort."],
                ["ENZYME BLENDS", "Supports healthy digestion and nutrient absorption."]
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <img
                    src={bone}
                    alt=""
                    className="w-[clamp(1.5rem,3vw,2.5rem)] h-[clamp(1.5rem,3vw,2.5rem)] flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-semibold text-[#000000] text-[clamp(0.9rem,1.8vw,1rem)]">
                      {item[0]}
                    </h4>
                    <p className="mt-2 text-[#9A9A9A] text-[clamp(0.8rem,1.5vw,0.95rem)]">
                      {item[1]}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-shrink-0 w-full sm:w-[clamp(12rem,35vw,28rem)]">
            <img
              src={dog}
              alt="Dog"
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default DogCard;
