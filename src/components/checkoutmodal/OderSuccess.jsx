import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";

export default function OrderSuccessModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 font-poppins flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative bg-white w-[90%] h-fit max-w-lg xl:max-w-2xl xl:max-h-4xl  rounded-2xl shadow-xl px-6 py-8 text-center">
        {/* Success Icon */}
        <div className="flex justify-center  mb-4">
          <FaCheck className="bg-[#34C75959] text-green-400  p-2 text-5xl border-2 rounded-full border-[#34C759]" />
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-[#1C1C1C] mb-1">
          Order Confirmed!
        </h2>

        {/* Subtitle */}
        <p className="text-xs text-[#6B6B6B] mb-6">
          Thank you for your purchase. We’ve sent a confirmation email to your
          inbox. Your order is being processed.
        </p>

        {/* Order Info Box */}
        <div className="bg-[#F9F9F9] flex  flex items-center justify-center rounded-xl px-4 py-3 flex items-start gap-6 text-left  mb-6">
          <MdOutlineCalendarToday className="text-red-500 mt-6 text-lg" />
          <div className="text-xs">
            <p className="font-medium mb-2 text-[#4A4A4A]">
              Order #WF-9923
            </p>
            <p className="mb-2 font-semibold text-[#000000]">
              Estimated Delivery:{" "}
              <span className="font-semibold text-[#000000]">
                2–3 Business Days
              </span>
            </p>
            <p className="text-xs text-[#4A4A4A]">
              You’ll receive a tracking number once your order ships.
            </p>
          </div>
        </div>

        {/* Primary Button */}
        <button className="w-full bg-black text-white text-sm py-3 rounded-full mb-3 cursor-pointer">
          Manage Subscription →
        </button>

        {/* Secondary Button */}
        <button
          onClick={onClose}
          className="text-xs text-[#4A4A4A] cursor-pointer hover:underline"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
