import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate, useLocation } from "react-router-dom";

import Profile from "./Profile";
import AddressBook from "./AddressBook";
import PaymentOptions from "./PaymentOptions";
import ActiveSubscriptions from "./ActiveSubscriptions";
import PausedSubscriptions from "./PausedSubscription";
import CancelledSubscriptions from "./CancelledSubscriptions";

export default function MyAccount() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active page based on the current URL path
  const activePage = 
      location.pathname === "/address" ? "address" 
    : location.pathname === "/payment" ? "payment" :
    location.pathname === "/subscription-active" ? "subscription-active"
    : location.pathname === "/subscription-paused" ? "subscription-paused"
    : location.pathname === "/subscription-cancelled" ? "subscription-cancelled"
    : "profile";

  const renderContent = () => {
    switch (activePage) {
      case "profile":
        return <Profile />;
      case "address":
        return <AddressBook />;
      case "payment":
        return <PaymentOptions />;
        case "subscription-active":
          return <ActiveSubscriptions />;
          case "subscription-paused":
          return <PausedSubscriptions />;
          case "subscription-cancelled":
          return <CancelledSubscriptions />;

      default:
        return <Profile />;
    }
  };

  return (
    <div className="w-full flex flex-col font-poppins bg-white px-4 sm:px-6 lg:px-10 py-8">
      {/* Breadcrumb */}
      <p className="text-md text-[#00000099] mb-6">
        Home &nbsp;&gt;&nbsp; <span className="text-[#000000]">My Account</span>
      </p>

      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="flex items-center gap-2 text-[#000000] font-semibold"
        >
          {isSidebarOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          <span>{isSidebarOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* ===== STATIC SIDEBAR ===== */}
        <aside
          className={`lg:col-span-1 ${
            isSidebarOpen ? "block" : "hidden"
          } lg:block`}
        >
          <div className="space-y-6">
            {/* Manage Account */}
            <div>
              <h4 className="text-sm text-[#000000] font-semibold mb-2">
                Manage My Account
              </h4>

              <ul className="space-y-1 text-sm">
                <li
                  onClick={() => {
                    navigate("/profile");
                    setIsSidebarOpen(false);
                  }}
                  className={`cursor-pointer ${
                    activePage === "profile"
                      ? "text-[#D8A85B] font-medium"
                      : "text-[#4A4A4A]"
                  }`}
                >
                  My Profile
                </li>

                <li
                  onClick={() => {
                    navigate("/address");
                    setIsSidebarOpen(false);
                  }}
                  className={`cursor-pointer ${
                    activePage === "address"
                      ? "text-[#D8A85B] font-medium"
                      : "text-[#4A4A4A]"
                  }`}
                >
                  Address Book
                </li>

                <li
                  onClick={() => {
                    navigate("/payment");
                    setIsSidebarOpen(false);
                  }}
                  className={`cursor-pointer ${
                    activePage === "payment"
                      ? "text-[#D8A85B] font-medium"
                      : "text-[#4A4A4A]"
                  }`}
                >
                  My Payment Options
                </li>
              </ul>
            </div>

            {/* Subscriptions */}
            <div>
              <h4 className="text-sm font-medium text-[#000000] mb-2">
                My Subscriptions
              </h4>
              <ul className="space-y-1 text-sm text-[#4A4A4A] cursor-pointer">
                <li  onClick={() => {
                    navigate("/subscription-active");
                    setIsSidebarOpen(false);
                  }}
                  className={`cursor-pointer ${
                    activePage === "subscription-active"
                      ? "text-[#D8A85B] font-medium"
                      : "text-[#4A4A4A]"
                  }`}>Active</li>

                <li onClick={() => {
                    navigate("/subscription-paused");
                    setIsSidebarOpen(false);
                  }}
                  className={`cursor-pointer ${
                    activePage === "subscription-paused"
                      ? "text-[#D8A85B] font-medium"
                      : "text-[#4A4A4A]"
                  }`} >Paused</li>

                <li onClick={() => {
                  navigate("/subscription-cancelled");
                  setIsSidebarOpen(false);
                }} className={`cursor-pointer ${
                  activePage === "subscription-cancelled"
                    ? "text-[#D8A85B] font-medium"
                    : "text-[#4A4A4A]"
                }`}>Cancelled</li>
              </ul>
            </div>
          </div>
        </aside>

        {/* ===== DYNAMIC MAIN CONTENT ===== */}
        <main className="lg:col-span-3 w-full xl:max-w-6xl px-4 sm:px-6 lg:px-10">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
