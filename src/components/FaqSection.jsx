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
    <section className="w-full bg-white py-16 font-poppins">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2
            className="
              font-semibold text-gray-900 leading-tight
              text-[clamp(1.6rem,3.2vw,4.5rem)]
            "
          >
            Everything You Need to <br className="hidden sm:block" />
            Know About Us
          </h2>

          <p
            className="
              mt-4 mx-auto text-gray-500
              max-w-[clamp(30rem,55vw,75rem)]
              text-[clamp(0.9rem,1.5vw,2.2rem)]
            "
          >
            We’ve gathered the most common questions to help you
            understand how Wellfetch works
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-[clamp(0.75rem,1.2vw,2rem)]">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`
                rounded-lg border transition-all duration-300
                ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-[#d83b64] to-[#b8325a] text-white border-transparent"
                    : "bg-white border-gray-200"
                }
              `}
            >
              {/* QUESTION */}
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? -1 : index)
                }
                className="
                  w-full flex justify-between items-center text-left
                  px-[clamp(1rem,2vw,3rem)]
                  py-[clamp(0.8rem,1.6vw,2.5rem)]
                "
              >
                <span
                  className="
                    font-medium
                    text-[clamp(0.9rem,1.5vw,2.3rem)]
                  "
                >
                  {item.question}
                </span>

                <span
                  className={`
                    flex items-center justify-center rounded-full border
                    transition
                    w-[clamp(1.4rem,2vw,3rem)]
                    h-[clamp(1.4rem,2vw,3rem)]
                    text-[clamp(1rem,1.4vw,2rem)]
                    ${
                      activeIndex === index
                        ? "border-white text-white"
                        : "border-gray-400 text-gray-600"
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
                    px-[clamp(1rem,2vw,3rem)]
                    pb-[clamp(0.8rem,1.6vw,2.5rem)]
                    text-white/90
                    text-[clamp(0.85rem,1.4vw,2.1rem)]
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
