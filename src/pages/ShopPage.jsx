import React, { useState } from "react";
import ProductCard from "../components/card/ProductCard.jsx";
import ProductToolbar from "../components/ProductToolbar";
import products from "../data/products";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Products() {
  const [query, setQuery] = useState("");
  const [view, setView] = useState("grid");
  const [sortedProducts, setSortedProducts] = useState(products);

  const filtered = sortedProducts.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSort = (type) => {
    const sorted = [...sortedProducts].sort((a, b) => {
      if (type === "low") return a.price - b.price;
      if (type === "high") return b.price - a.price;

      if (type === "latest") {
        return new Date(b.date || 0) - new Date(a.date || 0);
      }

      if (type === "popular") {
        return (b.rating || 0) - (a.rating || 0);
      }

      return 0;
    });

    setSortedProducts(sorted);
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-16 py-10 font-poppins">
      {/* HEADER */}
      <div className="text-center max-full mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D8A85B] py-2">
          Our Products
        </h2>
        <p className="mt-2 px-20 text-sm text-[#000000]">
          From allergy relief to tasty treats, explore our range of vet-formulated soft chews designed to
          support your dog’s health.
        </p>
      </div>

      {/* TOOLBAR */}
      <ProductToolbar
        query={query}
        setQuery={setQuery}
        view={view}
        setView={setView}
        onSort={handleSort}
      />

      {/* PRODUCTS GRID */}
      <div
        className={`mt-8 grid gap-6 ${
          view === "grid"
            ? "grid-cols-1 sm:grid-cols-3 lg:grid-cols-4"
            : "grid-cols-1"
        }`}
      >
        {filtered.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="mt-10 flex items-center  justify-between text-sm px-4 gap-4 text-gray-600">
        <button className="flex text-[#000000] border border-gray-200 p-2 md:px-4 md:py-2 rounded-lg items-center gap-2 hover:text-black">
          <FaArrowLeft /> Previous
        </button>

        <div className="flex items-center gap-4">
          <span className="font-medium bg-gray-200 px-3 py-1 rounded text-black">1</span>
          <span>2</span>
          <span className="hidden md:block">3</span>
          <span>…</span>
          <span className="hidden md:block">8</span>
          <span className="hidden md:block">9</span>
          <span className="hidden md:block">10</span>
        </div>

        <button className="flex items-center border border-gray-200 px-4 py-2 rounded-lg text-[#000000] gap-2 hover:text-black">
          Next <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
