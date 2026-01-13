import React from "react";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { addToCart } from "../../utils/cartUtils";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product, 1);
    navigate("/cart");
  };

  return (
    <div className="px-2" >


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
          ${product.price}
        </p>

        {/* Button */}
        <button onClick={handleAddToCart}
          className="
                mt-4 px-4
                border border-[#A37E65]
                text-[#A37E65]
                rounded-full
                hover:bg-[#A37E65]
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
        <Link
          to={`/product/${product.id}`}
          className=" flex items-center justify-center gap-2 
                mt-3 block
                text-[#000000] hover:text-gray-700
                  text-[12px]
              "
        >
          View Details <span ><FaEye /></span>
        </Link>
      </div>


    </div>
  );
}
