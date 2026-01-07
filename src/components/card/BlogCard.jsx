import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ item }) {
  return (
    <div className="group">
      <div className="w-full h-[220px] overflow-hidden ">
        <img
          src={item.img}
          alt="blog"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="flex items-center mt-4 space-x-2">
        <img
          src={item.authorImg}
          alt="author"
          className="w-6 h-6 rounded-full object-cover"
        />
        <p className="text-xs text-gray-600">Author {item.date}</p>
      </div>

      <h3 className="mt-2 text-[15px] font-semibold text-gray-900 line-clamp-1 hover:underline cursor-pointer">
        {item.title}
      </h3>

      <p className="text-sm text-gray-500 mt-2 line-clamp-2">{item.desc}</p>

      <Link to={`/blog/${item.slug}`} className="mt-4 inline-flex items-center text-xs font-semibold border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-100 transition">
        READ MORE <span className="ml-2">›</span>
      </Link>
    </div>
  );
}
