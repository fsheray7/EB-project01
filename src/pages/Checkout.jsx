import React, { useState } from "react";
import {  FaArrowRight } from "react-icons/fa";
import { FiTag } from "react-icons/fi";
import Visa from "../assets/images/checkoutimages/visa.png";
import MasterCard from "../assets/images/checkoutimages/mastercard.png";
import OrderSuccessModal from "../components/checkoutmodal/OderSuccess";





export default function Checkout() {
    const [showSuccess, setShowSuccess] = useState(false);


    return (
        <div className="w-full font-poppins bg-white  sm:px-6 lg:px-20 xl:px-30 2xl:px-40 py-10">
            {/* Breadcrumb */}
            <p className="text-xs text-[#00000099] mb-6">
                Shop &nbsp;&gt;&nbsp; Cart &nbsp;&gt;&nbsp; <span className="text-[#000000]"> Checkout </span>
            </p>

            <div className="w-full   grid grid-cols-1 px-8 lg:grid-cols-3 gap-10">
                {/* LEFT: Billing Details */}
                <div className="lg:col-span-2 px-4 w-full md:full lg:w-2/3 xl:w-2/3">
                    <h2 className="text-4xl font-bold text-[#000000] mb-6">Billing Details</h2>

                    <form className="space-y-4">
                        {/* First Name */}
                        <div>
                            <label className="text-sm font-medium">
                                First Name<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="mt-1 w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
                            />
                        </div>

                        {/* Country */}
                        <div>
                            <label className="text-sm font-medium">
                                Country<span className="text-red-500">*</span>
                            </label>
                            <select className="mt-1 w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-sm outline-none">
                                <option>Select Country</option>
                                <option>Pakistan</option>
                                <option>USA</option>
                            </select>
                        </div>

                        {/* Street Address */}
                        <div>
                            <label className="text-sm font-medium">
                                Street Address<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="House no."
                                className="mt-1 w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
                            />
                        </div>

                        {/* Apartment */}
                        <div>
                             <label className="text-sm font-medium">
                                Apartment, floor, etc. (optional)<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Apartment/floor"
                                className="w-full rounded-md bg-#F0F0F0 px-4 py-2 text-sm outline-none"
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
                                className="mt-1 w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
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
                                className="mt-1 w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
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
                                className="mt-1 w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
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
                <div className=" w-full border border-[#0000001A] mt-18 rounded-xl p-6 h-fit">
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

                    {/* Payment Methods */}
                    <div className="mt-5 space-y-3">
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 text-sm">
                                <input type="radio" name="payment" />
                                Bank
                            </label>
                            <div className="flex gap-2 text-2xl items-center">
                               <img src={Visa} alt="Visa image" className="w-10 h-8" />
                               <img src={MasterCard} alt="MasterCard Image" className="w-10 h-7" />
                            </div>
                        </div>

                        <label className="flex items-center gap-2 text-sm">
                            <input type="radio" name="payment" defaultChecked />
                            Cash on delivery
                        </label>
                    </div>

                    {/* Checkout */}
                    <button  onClick={() => setShowSuccess(true)} className="w-full mt-5 bg-black text-white py-3 rounded-full text-xs flex items-center justify-center cursor-pointer gap-4">
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


