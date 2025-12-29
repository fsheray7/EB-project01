import React from "react";
import dog from "../assets/images/dogpic2.png";
import bone from "../assets/images/bone.png";

function DogCard() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* Title */}
            <h2
              className="
                text-[#E6A23C]
                font-semibold
                leading-tight
                text-[clamp(1.75rem,4.8vw,7.5rem)]
              "
            >
              Why Choose Us ?
            </h2>

            {/* Subtitle */}
            <p
              className="
                mt-4
                text-gray-500
                leading-relaxed
                text-[clamp(0.95rem,1.8vw,3rem)]
              "
            >
              Your pet’s health and well-being are our top priority.
            </p>

            {/* FEATURES GRID */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">

              {/* Feature */}
              <div className="flex items-start gap-4">
                <img
                  src={bone}
                  alt=""
                  className="
                    w-[clamp(1.5rem,2vw,4rem)]
                    h-[clamp(1.5rem,2vw,4rem)]
                  "
                />
                <div>
                  <h4
                    className="
                      font-semibold text-gray-900
                      text-[clamp(0.95rem,1.6vw,3rem)]
                    "
                  >
                    EASE ALLERGIES
                  </h4>
                  <p
                    className="
                      mt-2 text-gray-500
                      text-[clamp(0.85rem,1.4vw,2.4rem)]
                    "
                  >
                    Provides relief from environmental triggers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img
                  src={bone}
                  alt=""
                  className="
                    w-[clamp(1.5rem,2vw,4rem)]
                    h-[clamp(1.5rem,2vw,4rem)]
                  "
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-[clamp(0.95rem,1.6vw,3rem)]">
                    NATURAL INGREDIENTS
                  </h4>
                  <p className="mt-2 text-gray-500 text-[clamp(0.85rem,1.4vw,2.4rem)]">
                    Carefully selected, naturally nutritious ingredients.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img
                  src={bone}
                  alt=""
                  className="
                    w-[clamp(1.5rem,2vw,4rem)]
                    h-[clamp(1.5rem,2vw,4rem)]
                  "
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-[clamp(0.95rem,1.6vw,3rem)]">
                    REDUCE ITCHING
                  </h4>
                  <p className="mt-2 text-gray-500 text-[clamp(0.85rem,1.4vw,2.4rem)]">
                    Soothes skin irritation and discomfort.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img
                  src={bone}
                  alt=""
                  className="
                    w-[clamp(1.5rem,2vw,4rem)]
                    h-[clamp(1.5rem,2vw,4rem)]
                  "
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-[clamp(0.95rem,1.6vw,3rem)]">
                    ENZYME BLENDS
                  </h4>
                  <p className="mt-2 text-gray-500 text-[clamp(0.85rem,1.4vw,2.4rem)]">
                    Supports healthy digestion and nutrient absorption.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src={dog}
              alt="Dog"
              className="
                w-[clamp(16rem,32vw,75rem)]
                object-contain
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default DogCard;
