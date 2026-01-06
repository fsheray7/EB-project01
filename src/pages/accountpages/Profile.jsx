import React from "react";


export default function MyProfile() {

  return (
    <div className="lg:col-span-3 w-full xl:max-w-6xl   px-4 sm:px-6 lg:px-10 xl:px-10 2xl:px-10">
          <div className="border shadow-md border-[#0000001A] rounded-xl px-10 py-6">
            <h3 className="text-sm font-semibold text-[#D8A85B] mb-6">
              Edit Your Profile
            </h3>

            <form className="space-y-4">
              {/* First Name */}
              <div>
                <label className="text-xs font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="mt-1 w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@gmail.com"
                  className="mt-1 w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-xs font-medium">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+123456789"
                  className="mt-1 w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
                />
              </div>

              {/* Password Section */}
              <div className="pt-2">
                <label className="text-xs font-medium block mb-2">
                  Password Changes
                </label>

                <div className="space-y-3">
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
                  />

                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
                  />

                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="w-full rounded-md bg-[#F0F0F0] px-4 py-2 text-sm outline-none"
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
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
  );
}
