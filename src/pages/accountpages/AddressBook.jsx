import React from "react";


export default function AddressBook() {

  return (
    <div className="lg:col-span-3 w-full xl:max-w-6xl   px-4 sm:px-6 lg:px-10 xl:px-10 2xl:px-10">
          <div className="border shadow-md border-[#0000001A] rounded-xl px-10 py-6">
            <h3 className="text-sm font-semibold text-[#D8A85B] mb-6">
              Edit Your Address
            </h3>

            <form className="space-y-4">
              {/* First Name */}
              <div>
                            <label className="text-sm font-medium text-[#000000]">
                                Country<span className="text-[#FF3333]">*</span>
                            </label>
                            <select className="mt-1 w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-sm text-[#4A4A4A] outline-none">
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
                                Apartment, floor, etc. (optional)<span className="text-[#FF3333]">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Apartment/floor"
                                className="w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
                            />
                        </div>

                        {/* Town / City */}
                        <div>
                            <label className="text-sm font-medium">
                                Town / City<span className="text-[#FF3333]">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter City"
                                className="mt-1 w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
                            />
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
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
  );
}
