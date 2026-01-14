import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import { FiTag } from "react-icons/fi";

import OrderSuccessModal from "../../components/checkoutmodal/OderSuccess";

import { getCart } from "../../utils/cartUtils";

export default function Checkout() {
  const [sortOpen, setSortOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Select Country");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const cartItems = getCart();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = cartItems.length > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="w-full font-poppins bg-white  sm:px-6 lg:px-20 xl:px-30 2xl:px-40 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center px-4 text-sm text-[#00000099] mb-4">
        <Link to="/shop" className="hover:text-black">
          Shop
        </Link>
        <span className="mx-2">&gt;</span>
        <Link to="/cart" className="hover:text-black">
          Cart
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-[#000000]"> Checkout </span>
      </nav>

      <div className="w-full px-4   grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT: Billing Details */}
        <div className="lg:col-span-2 w-full md:full lg:w-2/3 xl:w-2/3">
          <h2 className="text-4xl font-bold text-[#000000] mb-6">
            Billing Details
          </h2>

          <form className="space-y-3">
            {/* First Name */}
            <div>
              <label className="text-sm font-medium">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="mt-1 w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-[#4A4A4A] text-sm outline-none"
              />
            </div>

            {/* Country */}
            <div className="relative" ref={dropdownRef}>
              <label className="text-sm font-medium">
                Country
              </label>

              <div
                onClick={() => setIsOpen(!isOpen)}
                className="mt-1 w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-[#4A4A4A] text-sm outline-none cursor-pointer flex items-center justify-between"
              >
                <span>{selectedCountry}</span>
                <VscTriangleDown
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  } text-[#000000]`}
                />
              </div>

              {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div
                    onClick={() => {
                      setSelectedCountry("Select Country");
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Select Country
                  </div>
                  <div
                    onClick={() => {
                      setSelectedCountry("Pakistan");
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Pakistan
                  </div>
                  <div
                    onClick={() => {
                      setSelectedCountry("USA");
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    USA
                  </div>
                </div>
              )}
            </div>

            {/* Street Address */}
            <div>
              <label className="text-sm  font-medium">
                Street Address<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="House no."
                className="mt-1 w-full rounded-md text-[#4A4A4A] bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
              />
            </div>

            {/* Apartment */}
            <div>
              <label className="text-sm font-medium">
                Apartment, floor, etc. (optional)
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Apartment/floor"
                className="w-full rounded-md text-[#4A4A4A] bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
              />
            </div>

            {/* Town / City */}
            <div>
              <label className="text-sm font-medium">
                Town / City<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter City"
                className="mt-1 w-full text-[#4A4A4A]  bg-[#F0F0F0] rounded-md px-4 py-2 text-sm outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="+123456789"
                className="mt-1 w-full text-[#4A4A4A] rounded-md bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="rimel111@gmail.com"
                className="mt-1 w-full rounded-md text-[#4A4A4A] bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
              />
            </div>

            {/* Save Info */}
            <div className="flex items-center gap-2 pt-2">
              <input type="checkbox" className="accent-[#FF3333]" />
              <p className="text-xs text-[#000000]">
                Save this information for faster check-out next time
              </p>
            </div>
          </form>
        </div>

        {/* RIGHT – ORDER SUMMARY */}
        <div className=" w-full border border-[#0000001A] mt-18 rounded-xl p-4 h-fit bg-white shadow-sm">
          <h2 className="font-bold text-xl mb-4 border-b border-[#0000001A] pb-4">
            Order Summary
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-[#00000099]">Subtotal</span>
              <span className="text-[#000000] font-bold">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-[#FF3333] ">
              <span className="text-[#00000099]">Discount (-20%)</span>
              <span className=" font-bold">- ${discount.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#00000099]">Delivery Fee</span>
              <span className="text-[#000000] font-bold">
                ${deliveryFee.toFixed(2)}
              </span>
            </div>

            <hr className="border-[#0000001A]" />

            <div className="flex text-[#000000] justify-between text-lg">
              <span className="font-medium">Total</span>
              <span className="font-bold">${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Promo Code */}
          <div className="flex items-center gap-2 mt-4">
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

          {/* Payment Methods */}
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="payment" />
                Bank
              </label>
              <div className="flex gap-2 text-2xl items-center">
                <img
                  src="/checkoutimages/visa.png"
                  alt="Visa image"
                  className="w-10 h-8"
                />
                <img
                  src="/checkoutimages/mastercard.png"
                  alt="MasterCard Image"
                  className="w-10 h-7"
                />
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="payment" defaultChecked />
              Cash on delivery
            </label>
          </div>

          {/* Checkout */}
          <button
            onClick={() => setShowSuccess(true)}
            className="w-full mt-4 bg-black text-white py-3 rounded-full text-xs flex items-center justify-center cursor-pointer gap-4"
          >
            Place Order <FaArrowRight className="text-lg" />
          </button>
        </div>

        {/* SUCCESS MODAL */}
        {showSuccess && (
          <OrderSuccessModal onClose={() => setShowSuccess(false)} />
        )}
      </div>
    </div>
  );
}
