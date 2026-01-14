import React, { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";

export default function ProductToolbar({ query, setQuery, onSort }) {
  const [open, setOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const [sortType, setSortType] = useState("latest"); //
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="mt-8 px-3  flex flex-row   gap-4 sm:items-center sm:justify-between">
      {/* SEARCH */}
      <div className="relative  md:w-[100%] w-full">
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
      <div
        className="flex md:w-[30%] w-full items-center justify-end gap-2 relative"
        ref={dropdownRef}
      >
        {/* SORT DROPDOWN BUTTON */}
        <div className="relative">
          <button
            onClick={() => {
              setSortOpen(!sortOpen);
              setOpen(false);
            }}
            className="rounded-full bg-black px-4 py-2 text-white text-sm focus:outline-none flex items-center gap-2"
          >
            <span>{sortType === "latest" ? "Latest" : "Popular"}</span>
            <FaAngleDown
              className={`transition-transform duration-300 ${
                sortOpen ? "rotate-[180deg]" : "rotate-0"
              }`}
            />
          </button>

          {sortOpen && (
            <div className="absolute right-0 top-10 w-28 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <button
                onClick={() => {
                  setSortType("latest");
                  onSort("latest");
                  setSortOpen(false);
                }}
                className="w-full text-left px-6 py-2 text-sm hover:bg-gray-200"
                value="latest"
              >
                Latest
              </button>

              <button
                onClick={() => {
                  setSortType("popular");
                  onSort("popular");
                  setSortOpen(false);
                }}
                className="w-full text-left px-6 py-2 text-sm hover:bg-gray-200"
                value="popular"
              >
                Popular
              </button>
            </div>
          )}
        </div>

        {/* FILTER BUTTON */}
        <button
          onClick={() => {
            setOpen(!open);
            setSortOpen(false);
          }}
          className="rounded-full bg-black flex items-center justify-center"
        >
          <img
            src="/filterimg.png"
            alt="filter"
            className="md:w-10 md:h-10 w-8 h-8 p-2"
          />
        </button>

        {/* PRICE DROPDOWN */}
        {open && (
          <div className="absolute right-0 top-12 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <button
              onClick={() => {
                onSort("low");
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm rounded-lg hover:bg-gray-100"
            >
              Price: Low to High
            </button>

            <button
              onClick={() => {
                onSort("high");
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm rounded-lg hover:bg-gray-100"
            >
              Price: High to Low
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
