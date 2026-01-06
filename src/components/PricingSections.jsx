import React from "react";
import { FaCheck } from "react-icons/fa";

const plans = [
  { title: "Monthly Plan", price: "$29/Month" },
  { title: "Quarterly Plan", price: "$79/Month" },
  { title: "Annual Plan", price: "$279/Month" },
];

function PricingSection() {
  return (
    <section className="w-full bg-[#191A20] py-20 px-8">
      <div className="w-full ">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-white  text-[clamp(1.8rem,3vw,3.2rem)]">
            Get Monthly Deliveries and <br /> Save More
          </h2>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Never run out of your dog’s essentials again. Convenient, reliable,
            and delivered right to your door.
          </p>
        </div>

        {/* Cards */}
        <div className="flex relative justify-center items-center">
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8  w-full px-4 sm:px-6 lg:px-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="
                relative
                flex flex-col
                justify-center
                items-center
                text-center 
                border border-[#8E64EB]
                w-full
                h-auto
                md:h-[300px]
                lg:h-[400px]
                xl:h-[380px]
                rounded-[28px]
                bg-gradient-to-b from-[#3F3357]  to-[#080510]
                px-4 sm:px-6
                py-8 sm:py-10 md:py-6 lg:py-8
              "
            >
              {/* Title */}
              <h3 className="text-white mt-0 font-semibold
              text-xl
              sm:text-2xl
              md:text-lg
              lg:text-2xl
              xl:text-3xl
              2xl:text-4xl
              ">
                {plan.title}
              </h3>

              {/* Price */}
              <p className="mt-3 sm:mt-4 md:mt-3 lg:mt-4 text-white font-medium
              text-lg
              sm:text-xl
              md:text-base
              lg:text-lg
              xl:text-xl
              2xl:text-2xl
              ">
                {plan.price}
              </p>

              {/* Features */}
              <ul className="mt-4 sm:mt-6 md:mt-3 lg:mt-6 flex flex-col space-y-2 w-full text-left pl-6 sm:pl-8 md:pl-4 lg:pl-6
              ">
                <li className="flex items-center gap-2 sm:gap-3 text-white
                text-sm
                sm:text-base
                md:text-sm
                lg:text-base
                xl:text-lg
                2xl:text-xl">
                  <FaCheck className="text-white flex-shrink-0 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl" />
                  Exclusive Discounts
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-white font-poppins
              text-sm
              sm:text-base
              md:text-sm
              lg:text-base
              xl:text-lg
              2xl:text-xl">
                  <FaCheck className="text-white flex-shrink-0 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl" />
                  Free shipping
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-white
              text-sm
              sm:text-base
              md:text-sm
              lg:text-base
              xl:text-lg
              2xl:text-xl">
                  <FaCheck className="text-white flex-shrink-0
            text-sm
                sm:text-base
                md:text-sm
                lg:text-base
                xl:text-lg
                2xl:text-xl" />
                  Cancel Anytime
                </li>
              </ul>

              {/* Button */}
              <button
                className=" absolute
                  -bottom-4 sm:mt-8 md:mt-4 lg:mt-8
                  bg-[#D8A85B]
                  font-poppins
                  
                  text-[#000000]
                  font-bold
                  text-xs
                  sm:text-sm
                  md:text-xs
                  lg:text-sm
                  xl:text-base
                  2xl:text-lg
                  px-10 sm:px-8 md:px-8 lg:px-10 xl:px-10
                  py-2 sm:py-3 md:py-2 lg:py-3
                  rounded-full
                  shadow-md
                  hover:opacity-90
                  transition
                "
              >
                Choose Plan
              </button>
            </div>
          ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default PricingSection;
