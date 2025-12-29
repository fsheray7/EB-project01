import React from "react";
import allergyChews from "../assets/images/product1.png";
import probioticChews from "../assets/images/product2.png";

const products = [
  {
    id: 1,
    title: "Allergy Soft Chews",
    price: "$132.93",
    image: allergyChews,
  },
  {
    id: 2,
    title: "Probiotic Soft Chews",
    price: "$132.93",
    image: probioticChews,
  },
  {
    id: 3,
    title: "Allergy Soft Chews",
    price: "$132.93",
    image: allergyChews,
  },
  {
    id: 4,
    title: "Probiotic Soft Chews",
    price: "$132.93",
    image: probioticChews,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="mx-auto px-6 py-12">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2
          className=" px-4
            font-semibold text-[#f0a23a]
            text-[clamp(1.5rem,3vw,4rem)]
          "
        >
          Featured Product
        </h2>

        <a
          href="#"
          className="
            flex items-center gap-1
            text-gray-600 hover:text-gray-900
            text-[clamp(0.85rem,1.4vw,2rem)]
          "
        >
          View all →
        </a>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {products.map((product) => (
          <div
            key={product.id}
            className="
              border border-gray-200 rounded-xl
              text-center
              transition
              hover:shadow-md
              p-[clamp(1rem,1.8vw,2.5rem)]
            "
          >
            {/* Image */}
            <div className="flex justify-center mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="
                  object-contain
                  w-[clamp(8rem,12vw,16rem)]
                  h-[clamp(8rem,12vw,16rem)]
                "
              />
            </div>

            {/* Title */}
            <h3
              className="
                font-medium text-gray-900
                text-[clamp(0.9rem,1.4vw,2.2rem)]
              "
            >
              {product.title}
            </h3>

            {/* Price */}
            <p
              className="
                mt-1 font-semibold text-gray-800
                text-[clamp(0.9rem,1.3vw,2.2rem)]
              "
            >
              {product.price}
            </p>

            {/* Button */}
            <button
              className="
                mt-4 w-full
                border border-[#f0a23a]
                text-[#f0a23a]
                rounded-full
                hover:bg-[#f0a23a]
                hover:text-white
                transition

                py-[clamp(0.45rem,0.8vw,1.2rem)]
                text-[clamp(0.85rem,1.3vw,2rem)]
              "
            >
              Add to cart
            </button>

            {/* View Details */}
            <a
              href="#"
              className="
                mt-3 block
                text-gray-500 hover:text-gray-700
                text-[clamp(0.75rem,1.1vw,1.6rem)]
              "
            >
              View Details →
            </a>
          </div>
        ))}

      </div>
    </section>
  );
}
