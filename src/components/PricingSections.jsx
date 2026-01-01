import React from "react";
import { FaCheck } from "react-icons/fa";

const plans = [
  { title: "Monthly Plan", price: "$29/Month" },
  { title: "Quarterly Plan", price: "$79/Month" },
  { title: "Annual Plan", price: "$279/Month" },
];

function PricingSection() {
  return (
    <section className="w-full bg-[#0B0F1A] py-20 px-4">
      <div className="max-w-7xl mx-auto">

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="
                relative
                w-[320px]
                h-[400px]
                md:w-[250px]
                md:h-[350px]
                lg:w-[320px]
                lg:h-[400px]
                w-[320px]
                h-[400px]
                rounded-[28px]
                bg-gradient-to-b from-[#B894FF] via-[#9C79F2] to-[#6A3FC6]
                px-8
                pt-15
                flex flex-col
                items-center
                text-center
                
              "
            >
              {/* Title */}
              <h3 className="text-white font-semibold text-2xl">
                {plan.title}
              </h3>

              {/* Price */}
              <p className="mt-3 text-white text-xl font-medium">
                {plan.price}
              </p>

              {/* Features */}
              <ul className="mt-15 space-y-4 w-full text-left ml-10 ">
                <li className="flex items-center gap-3 text-white text-lg">
                  <FaCheck className="text-white text-xl" />
                  Exclusive Discounts
                </li>
                <li className="flex items-center gap-3 text-white text-lg">
                  <FaCheck className="text-white text-xl" />
                  Free shipping
                </li>
                <li className="flex items-center gap-3 text-white text-lg">
                  <FaCheck className="text-white text-xl" />
                  Cancel Anytime
                </li>
              </ul>

              {/* Button */}
              <button
                className="
                  absolute
                  -bottom-6
                  left-1/2
                  -translate-x-1/2
                  bg-[#E2B35E]
                  text-black
                  font-semibold
                  text-xs
                  md:text-sm
                  lg:text-sm
                  xl:text-sm
                  w-30
                  py-3
                  md:w-40
                  lg:w-50
                  xl:w-50
                  
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
    </section>
  );
}

export default PricingSection;
