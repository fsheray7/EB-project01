import React from "react";

const plans = [
  {
    title: "Monthly Plan",
    price: "$29/Month",
  },
  {
    title: "Quarterly Plan",
    price: "$79/Month",
  },
  {
    title: "Annual Plan",
    price: "$279/Month",
  },
];

function PricingSection() {
  return (
    <section className="w-full bg-[#0B0F1A] py-16 px-4">
      <div className="w-full  ">
        {/* Heading */}
      <div className="text-center mb-12">
          <h2
            className="
              text-white font-semibold leading-tight
              text-[clamp(1.6rem,3.5vw,4.5rem)]
            "
          >
            Get Monthly Deliveries and
            <br className="hidden sm:block" /> Save More
          </h2>

          <p
            className="
              mt-3 mx-auto text-gray-400
              max-w-[clamp(28rem,45vw,70rem)]
              text-[clamp(0.9rem,1.4vw,2.2rem)]
            "
          >
            Never run out of your dog’s essentials again. Convenient, reliable,
            and delivered right to your door.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  ">
          {plans.map((plan, index) => (
            <div
              key={index}
              className=" relative mx-auto w-full max-w-xl
                h-[clamp(22rem,28vw,34rem)]
                rounded-2xl
                bg-gradient-to-b from-[#8F73FF] to-[#7A5CFF]
                flex flex-col items-center text-center
                px-[clamp(1.5rem,2.5vw,3rem)] pt-[clamp(2rem,3vw,4rem)]
                transition-transform duration-500
                
                cursor-pointer"
            >
              {/* Content */}
              <h3 className="text-white font-semibold text-2xl 2xl:text-4xl">
                {plan.title}
              </h3>
              <p className="text-white 2xl:text-3xl text-xl mt-2">{plan.price}</p>

              <ul className="mt-8 space-y-5 text-white 2xl:text-3xl">
                <li className="flex justify-center gap-2 ">
                  <span>✓</span> Exclusive Discounts
                </li>
                <li className="flex justify-center gap-2">
                  <span>✓</span> Free Shipping
                </li>
                <li className="flex justify-center gap-2">
                  <span>✓</span> Cancel Anytime
                </li>
              </ul>

              {/* Button */}
              <button className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[60%]
                                 bg-[#F5C15B] text-black font-semibold text-md
                                 2xl:text-2xl
                                 py-3
                                 hover:p-[13px]
                                 
                                 rounded-full hover:opacity-90
                                 cursor-pointer
                                 hover:text-white transition">
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
