import React from "react";
import allergyChews from "../assets/images/product1.png";
import probioticChews from "../assets/images/product2.png";
import { FaEye } from "react-icons/fa";

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
          className=" 
            font-semibold text-[#D8A85B]
            text-[25px]
            md:text-[30px]
          "
        >
          Featured Product
        </h2>

        <a
          href="#"
          className="
            flex items-center gap-1
            text-[#000000] font-semibold
            text-[14px]
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
                text-md
              "
            >
              {product.title}
            </h3>

            {/* Price */}
            <p
              className="
                mt-1 font-bold text-[#4A4A4A]
                text-[16px]
              "
            >
              {product.price}
            </p>

            {/* Button */}
            <button
              className="
                mt-4 px-4
                border border-[#A37E65]
                text-[#A37E65]
                rounded-full
                hover:bg-[#f0a23a]
                hover:text-white
                transition
                font-bold
                py-2
                text-[14px]
              "
            >
              Add to cart
            </button>

            {/* View Details */}
            <a
              href="#"
              className=" flex items-center justify-center gap-2 
                mt-3 block
                text-[#000000] hover:text-gray-700
                  text-[12px]
              "
            >
              View Details <span ><FaEye /></span>
            </a>
          </div>
        ))}

      </div>
    </section>
  );
}
