import React from "react";

 // adjust path if needed

export default function Contact() {
  return (
    <div className="w-full font-poppins py-10 flex flex-col justify-start items-center px-4 md:px-15 bg-[#FFFFFF] min-h-screen ">
        <div className="w-full text-start px-6">
            <h2 className="text-[#D8A85B] text-2xl md:text-3xl font-bold">
          Contact Us
        </h2>
        <p className="text-gray-500 text-sm mt-1 mb-8">
          We are committed to providing the best information and service to customers.
        </p>
        </div>
      <div className=" w-full bg-[#F9F9FF]  rounded-2xl shadow-md p-6 md:p-10">
        

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* LEFT FORM */}
          <form className="space-y-4 px-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full border border-[#9B9B9B] rounded-xl px-4 py-3 text-sm  bg-[#FFFFFF] outline-none"
                placeholder="Enter Name"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full border border-[#9B9B9B] rounded-xl px-4 py-3 bg-[#FFFFFF] text-sm  outline-none"
                placeholder="+92 300 0000000"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-[#9B9B9B] rounded-xl px-4 py-3 bg-[#FFFFFF] text-sm  outline-none"
                placeholder="example@gmail.com"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <select className="w-full border border-[#9B9B9B] rounded-xl bg-[#FFFFFF] px-4 py-3 text-sm  outline-none">
                <option>Select Country</option>
                <option>Pakistan</option>
                <option>UAE</option>
                <option>USA</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="6"
                className="w-full border border-[#9B9B9B] rounded-xl px-4 py-3 bg-[#FFFFFF] text-sm resize-none  outline-none"
                placeholder="Write message..."
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-[#D8A85B] hover:bg-[#a88423] text-white font-medium text-sm py-3 px-6 rounded-md "
            >
              Submit
            </button>
          </form>

          {/* RIGHT IMAGE */}
          <div className="w-full flex justify-center">
            <img
              src="/dogcard/dogpic2.png"
              alt="Dog"
              className="w-full max-w-sm object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
