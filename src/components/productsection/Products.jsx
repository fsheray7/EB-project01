import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import ProductCard from "../card/ProductCard";
import products from "../../data/products";
import { Link } from "react-router-dom";



export default function Products({ limit }) {
  const [query, setQuery] = useState("");
  const [view, setView] = useState("grid");
  const [sortedProducts, setSortedProducts] = useState(products);

  const filtered = sortedProducts
    .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
    .slice(0, limit || sortedProducts.length);

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
    <section className="mx-auto px-6 py-12">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2
          className=" 
            font-semibold text-[#D8A85B]
            text-[25px]
            md:text-[30px]
          "
        >
          Featured Product
        </h2>

        <Link
          to="/shop"
          className="
            flex items-center gap-1
            text-[#000000] font-semibold
            text-[14px]
          "
        >
          View all →
        </Link>
      </div>

      {/* Cards */}


      <div
        className={`mt-8 grid gap-6 ${view === "grid"
          ? "xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4"
          : "grid-cols-1"
          }`}
      >
        {filtered.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
