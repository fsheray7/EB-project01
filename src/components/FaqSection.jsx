import React, { useState } from "react";

const faqs = [
  {
    question: "What are enzyme blends, and why are they included?",
    answer:
      "Enzyme blends help break down proteins, fats, and carbohydrates, making it easier for your dog to digest food and absorb nutrients effectively.",
  },
  {
    question: "Are the ingredients in this product natural?",
    answer:
      "Yes, all ingredients are carefully selected and naturally sourced to ensure safety and effectiveness.",
  },
  {
    question: "Is this suitable for dogs of all ages?",
    answer:
      "Absolutely. Our formula is designed to be safe and beneficial for dogs of all ages.",
  },
  {
    question: "Can I use this with my dog’s current food?",
    answer:
      "Yes, the supplement can be easily mixed with your dog’s existing diet.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most pet owners notice improvements within a few weeks of consistent use.",
  },
  {
    question: "Does it contain artificial flavors or preservatives?",
    answer:
      "No, the product is free from artificial flavors, colors, and preservatives.",
  },
];

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full font-poppins bg-[#F6F6F6] py-16 px-8 sm:px-10 md:px-15 lg:px-20 xl:px-40 2xl:px-40 font-poppins">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2
            className=" px-8
               font-abeezee text-[#000000] leading-tight
              text-[25px]
              md:text-[30px]
              lg:text-[30px]
              xl:text-[30px]
              2xl:text-[40px]
            "
          >
            Everything You Need to 
            Know About Us
          </h2>

          <p
            className="
              mt-4 mx-auto text-[#4A4A4A]
              max-w-[clamp(30rem,55vw,75rem)]
              text-[12px]
              md:text-[14px]
              lg:text-[16px]
              xl:text-[16px]
              2xl:text-[16px]
            "
          >
            We’ve gathered the most common questions to help you 
            understand how Wellfetch works
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-2">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`
                rounded-lg border-2 transition-all 
                    2xl:text-14px duration-300
                ${
                  activeIndex === index
                    ? "bg-[#AA335B] text-white text-[8px] sm:text-[8px]    md:text-[14px] lg:text-[14px] xl:text-[14px]         2xl:text-[16px ] border-[#FC0000]"
                    : "bg-white border-[#C9C9C9]"
                }
              `}
            >
              {/* QUESTION */}
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? -1 : index)
                }
                className="
                  w-full flex justify-between  items-center text-left
                  px-[clamp(1px,2vw,60px)]
                  py-[clamp(4px,1.6vw,20px)]
                  

                "
              >
                <span
                  className={`
                    
                    text-[10px]
                    sm:text-[8px]
                    md:text-[10px]
                    lg:text-[12px]
                    xl:text-[14px]
                    2xl:text-[18px]
                    ${activeIndex === index ? "text-[#D8A85B]" : "text-[#000000] border-[#C9C9C9]"}
                  `}
                >
                  {item.question}
                </span>

                <span
                  className={`
                    flex items-center justify-center  border-[#D8A85B]   rounded-full border
                    transition
                    w-[clamp(22px,2vw,48px)]
                    h-[clamp(22px,2vw,48px)]
                    
                    ${
                      activeIndex === index
                        ? " text-[#D8A85B]  text-[20px]"
                        : "border-gray-800   text-[16px] text-white-600"
                    }
                  `}
                >
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              {activeIndex === index && (
                <div
                  className="

                  font-poppins
                    px-[clamp(16px,4vw,48px)]
                    py-2
                    pb-4
                    text-[8px]
                    sm:text-[8px]
                    md:text-[10px]
                    lg:text-[12px]
                    xl:text-[12px]
                    2xl:text-[14px]

                  "
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQSection;
