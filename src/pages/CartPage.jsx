import React, { useState } from "react";
import { HiTrash } from "react-icons/hi2"; // adjust path
import { FaArrowRight, } from "react-icons/fa";
import { FiTag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

   const [qty, setQty] = useState(6);
  return (
    <section className="w-full px-4 md:px-10  lg:px-20 xl:px-30 2xl:px-40 py-10 font-poppins">
      {/* Breadcrumb */}
      <p className="text-sm text-[#00000099] mb-4">
        Shop <span className="mx-1 text-[#000000]">› Cart</span> 
      </p>

      {/* Title */}
      <h1 className=" text-start text-4xl font-bold text-[#000000] mb-8">Your cart</h1>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT – CART ITEM */}
        <div className="lg:col-span-2 border border-[#0000001A] rounded-xl   h-auto md:h-40 py-4 px-6">
          <div className="flex items-center gap-4">
            {/* Product Image */}
            <img
              src="/products/product1.png"
              alt="Allergy Soft Chews"
              className="w-30 h-30 object-contain "
            />

            {/* Product Info */}
            <div className="flex-1 ">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-[#000000] ">Allergy Soft Chews</h3>
                <button className="text-[#FF3333] text-2xl">
                  <HiTrash />
                </button>
              </div>

              <p className="text-sm text-[#000000] mt-1">
                Quantity: <span className="text-[#00000099]">08</span>
              </p>

              <p className="text-sm text-[#000000] ">
                Weight: <span className="text-[#00000099]">500g</span>
              </p>

              <div className="flex items-start md:items-center flex-col md:flex-row md:justify-between  mt-4">
                <p className="font-semibold">$565</p>

                {/* Quantity Control */}
                <div className="flex bg-[#F0F0F0]  mt-2   rounded-[62px]">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-2">−</button>
              <span className="px-4 py-2 ">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-4 py-2">+</button>
            </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT – ORDER SUMMARY */}
        <div className="border border-[#0000001A] rounded-xl p-6 h-fit">
          <h2 className="font-semibold mb-4">Order Summary</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-[#00000099]">Subtotal</span>
              <span className="text-[#000000] font-bold">$565</span>
            </div>

            <div className="flex justify-between text-[#FF3333] ">
              <span className="text-[#00000099]">Discount (-20%)</span>
              <span className=" font-bold">- $113</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#00000099]">Delivery Fee</span>
              <span className="text-[#000000] font-bold">$15</span>
            </div>

            <hr className="text-[#0000001A]" />

            <div className="flex text-[#000000] justify-between ">
              <span>Total</span>
              <span className="font-bold">$467</span>
            </div>
          </div>

          {/* Promo Code */}
          <div className="flex items-center gap-2 mt-5">
            <div className="relative flex-1">
              <FiTag className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg text-[#00000066]" />
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full px-6 py-2 pl-12 bg-[#F0F0F0] rounded-full text-sm outline-none"
              />
            </div>
            <button className="px-6 py-2 rounded-full bg-black text-white text-xs">
              Apply
            </button>
          </div>

          {/* Checkout */}
          <button   onClick={handleCheckout}  className="w-full mt-5 bg-black text-white py-3 rounded-full text-xs flex items-center justify-center cursor-pointer gap-4">
            Go to Checkout <FaArrowRight className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}
