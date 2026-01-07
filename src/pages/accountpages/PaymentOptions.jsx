import React from "react";


export default function PaymentOptions() {

  return (
    <div className="lg:col-span-3 w-full xl:max-w-6xl   px-4 sm:px-6 lg:px-10 xl:px-10 2xl:px-10">
      <div className="border shadow-md border-[#0000001A] rounded-xl px-10 py-6">
        <h3 className="text-sm font-semibold text-[#D8A85B] mb-6">
          Edit Your Address
        </h3>

        <form className="space-y-4">
          {/* Card  */}
          <div>
            <label className="text-sm font-medium text-[#000000]">
              Card
            </label>
            <select className="mt-1 w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-sm text-[#4A4A4A] outline-none">
              <option>Select Country</option>
              <option>Pakistan</option>
              <option>USA</option>
            </select>
          </div>
          {/* Name on Card */}
          <div>
            <label className="text-sm font-medium">
              Name on Card
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="mt-1 w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="text-sm font-medium">
              Card Number
            </label>
            <input
              type="number"
              placeholder="78945-45456"
              className="w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
            />
          </div>

          {/* Date */}
          <div className="grid grid-cols-2 gap-4">

          <div className="flex flex-col ">
           
              
            <label className="text-sm font-medium">
              Expire Date
            </label>
            <input
              type="text"
              placeholder="08/24"
              className="mt-1 w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
              />
              </div>
          
          {/* CVC */}
          <div className="flex flex-col">
            <label className="text-sm font-medium">
             CVC
            </label>
            <input
              type="number"
              placeholder="9254"
              className="mt-1 w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
              />
          </div>
            </div>
          
          {/* Actions */}
          <div className="flex justify-end items-center gap-6 pt-6">
            <button
              type="button"
              className="text-sm text-[#000000]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-[#D8A85B] hover:bg-[#D8A85B] transition text-white text-sm px-6 py-2 rounded-md"
            >
              Add Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
