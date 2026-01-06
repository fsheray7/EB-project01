import React from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoPauseCircleOutline } from "react-icons/io5";
import { MdOutlineCalendarToday } from "react-icons/md";

export default function ActiveSubscriptions() {
  return (
    <div className="w-full bg-white font-poppins">
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-sm font-bold text-[#D8A85B]">
          Active Subscriptions
        </h2>
        <p className="text-xs text-[#000000] mt-1">
          Manage your recurring wellness plans and delivery schedules.
        </p>
      </div>

      {/* SUBSCRIPTION LIST */}
      <div className="space-y-6">
        {/* CARD 1 */}
        <SubscriptionCard
          image="/products/product1.png"
          order="ORDER #WF-9923"
          title="Allergy Soft Chews"
          frequency="Delivery Frequency:"
          date=" 30 Days"
          price="$565"
        />

        {/* CARD 2 */}
        <SubscriptionCard
          image="/products/product2.png"
          order="ORDER #WF-9923"
          title="Probiotic Soft Chews"
          frequency="Delivery Frequency:"
          date="  60 Days"
          price="$700"
        />
      </div>
    </div>
  );
}

/* ===========================
   CARD COMPONENT
=========================== */
function SubscriptionCard({ image, order, title, frequency, date, price }) {
  return (
    <div className=" w-full border  border-[#0000001A] rounded-xl p-5 shadow-sm">
      <div className="flex w-full flex-col  lg:flex-row lg:items-center gap-7">
        {/* PRODUCT IMAGE */}
        <div className="w-30 h-30 flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain rounded-md"
          />

        </div>
        <div >

          {/* CONTENT */}
          <div className="flex justify-between items-center ">
            <div>

              <p className="text-[12px] text-[#9B9B9B] mb-1">
                {order}
              </p>

              <h3 className="text-sm font-bold text-[#000000]">
                {title}
              </h3>

              <p className="text-sm text-[#00000099] mt-1">
                {frequency} <span className="text-[#000000] font-bold">{date}</span>
              </p>
            </div>

            {/* PRICE */}
            <div className="text-right lg:text-center ">
              <p className="text-sm font-semibold text-red-500">
                {price}
              </p>
              <p className="text-[14px] text-[#00000099]">
                Per Delivery
              </p>
            </div>


          </div>
          {/* META INFO */}
          <div className="flex  flew-wrap justify-between gap-4 mt-3 text-xs text-[#00000080]">

            {/* NEXT ORDER */}
            <span className="flex items-center gap-3 bg-[#F0F0F0]  py-3 px-4 rounded-lg justify-start text-left">
              <MdOutlineCalendarToday className="text-[#4A4A4A] text-lg flex-shrink-0" />

              <div className="flex  font-medium flex-col">
                <span className="font-medium">NEXT ORDER DATE </span>
                <strong className="text-black">1 Jan 2026</strong>
              </div>
            </span>

            {/* PAYMENT METHOD */}
            <span className="flex items-center gap-3 bg-[#F0F0F0]  py-3 px-4 rounded-xl justify-start text-left">
              <CiCreditCard1 className="text-[#4A4A4A] text-xl flex-shrink-0" />

              <div className="flex font-medium flex-col">
                <span>PAYMENT METHOD</span>
                <strong className="text-black">VISA •••• 4242</strong>
              </div>
            </span>

          </div>


        </div>


      </div>
          {/* ACTIONS */}
          <div className="flex items-center justify-center flex-wrap gap-2 mt-6">
            <button className="text-xs px-3 py-2 rounded-full border font-semibold border-[#00000033] text-[#9B9B9B]">
              Skip Next Delivery
            </button>

            <button className="flex items-center gap-2 text-xs px-3 py-2 font-semibold rounded-full border border-[#D8A85B] text-[#D8A85B]"> <span><IoPauseCircleOutline className="text-xl " /></span>
              Pause Order
            </button>

            <button className=" flex items-center gap-2 text-xs px-3 py-2 font-semibold  text-xs px-3 py-1 rounded-full border border-[#FF3333] text-[#FF3333]"> <span><IoIosCloseCircleOutline className="text-xl " /> </span>
              Cancel
            </button>
          </div>
    </div>
  );
}
