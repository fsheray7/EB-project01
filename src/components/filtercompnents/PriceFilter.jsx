import React, { useState, useRef, useEffect } from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

export default function PriceFilter({ onSort }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* ICON BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white transition"
      >
        <HiAdjustmentsHorizontal className="text-lg" />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg z-50">
          <button
            onClick={() => {
              onSort("low");
              setOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            Price: Low to High
          </button>

          <button
            onClick={() => {
              onSort("high");
              setOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            Price: High to Low
          </button>
        </div>
      )}
    </div>
  );
}
