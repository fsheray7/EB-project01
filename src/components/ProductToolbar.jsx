import React, { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

export default function ProductToolbar({
  query,
  setQuery,
  onSort,
}) {
  const [open, setOpen] = useState(false);
  const [sortType, setSortType] = useState("latest"); // 
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSortType(value);
    onSort(value); // 🔥 trigger sorting
  };

  return (
    <div className="mt-8 px-3 flex flex-col  md:flex-row gap-4 sm:items-center sm:justify-between">
      {/* SEARCH */}
      <div className="relative  md:w-2/3 w-full">
        <input
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-full bg-gray-100 px-10 py-2 text-sm focus:outline-none"
        />
        <span className="absolute left-3 top-2 text-[22px] text-[#00000066]">
          <CiSearch />
        </span>
      </div>

      {/* RIGHT CONTROLS */}
      <div className="flex items-center justify-end mt-2 gap-2 relative" ref={dropdownRef}>
        <select
          value={sortType}
          onChange={handleSelectChange}
          className="rounded-full bg-black px-4 py-1 md:py-2 text-white text-sm focus:outline-none"
        >
          <option value="latest">Latest</option>
          <option value="popular">Popular</option>
        </select>

        {/* FILTER BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full bg-black flex items-center justify-center"
        >
          <img
            src="/filterimg.png"
            alt="filter"
            className="md:w-10 md:h-9 w-8 h-8 p-2"
          />
        </button>

        {/* PRICE DROPDOWN */}
        {open && (
          <div className="absolute right-0 top-12 w-48 bg-white border rounded-lg shadow-lg z-50">
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
    </div>
  );
}
