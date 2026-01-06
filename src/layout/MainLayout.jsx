import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]"> {/* navbar fixed hai is liye spacing */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
