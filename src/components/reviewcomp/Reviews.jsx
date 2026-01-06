import React from "react";
import { HiAdjustmentsHorizontal, HiAdjustmentsVertical } from "react-icons/hi2";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
const star = <FaStar />;

const reviews = [
  {
    name: "Samantha D.",
    rating: 5,
    date: "November 14, 2025",
    text: "Lorem ipsum...............",
  },
  {
    name: "Alex M.",
    rating: 5,
    date: "November 15, 2025",
    text: "Lorem ipsum...............",
  },
  {
    name: "Ethan R.",
    rating: 4,
    date: "November 16, 2025",
    text: "Lorem ipsum...............",
  },
  {
    name: "Olivia P.",
    rating: 5,
    date: "November 17, 2025",
    text: "Lorem ipsum...............",
  },
  {
    name: "Liam K.",
    rating: 5,
    date: "November 18, 2025",
    text: "Lorem ipsum...............",
  },
  {
    name: "Ava H.",
    rating: 5,
    date: "November 19, 2025",
    text: "Lorem ipsum...............",
  },
];

export default function ReviewsSection() {
  return (
    <section className="w-full px-4 lg:px-16 py-16">
      {/* HEADER */}
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-lg font-medium text-[#000000] mb-4">
          Rating & Reviews
        </h2>
        <div className="relative w-full flex justify-center">
          <hr className="border-t-2 border-[#0000001A] w-full absolute" />
          <hr className="border-t-2 border-[#000000] w-[30%] relative z-10" />
        </div>
      </div>

      {/* TOP BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <h3 className="text-lg font-semibold">
          All Reviews <span className="text-gray-400">(451)</span>
        </h3>

        <div className="flex items-center gap-3">
          <button className="p-3 rounded-full  bg-[#F0F0F0]">
            <HiAdjustmentsVertical className="text-lg" />
          </button>
            <div className="px-4 py-2 bg-[#F0F0F0] rounded-full  text-sm">

          <select className=" bg-[#F0F0F0] rounded-full text-sm">
            <option>Latest</option>
            <option>Oldest</option>
          </select>
            </div>

          <button className="px-4 py-2 rounded-full bg-black text-white text-sm">
            Write a Review
          </button>
        </div>
      </div>

      {/* REVIEWS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 bg-white"
          >

            {/* TOP */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <span className=" flex text-[#D8A85B] text-sm">
                  {Array(review.rating).fill(star)}
                </span>
              </div>
              <span className="text-gray-400">•••</span>
            </div>

            {/* NAME */}
            <div className="flex items-center gap-2 mb-2">
              <p className="font-bold text-[#000000] text-sm">{review.name}</p>
              <BsCheckCircleFill className="text-[#4C9E84] text-sm" />
            </div>

            {/* TEXT */}
            <p className="text-sm text-gray-600 mb-4">
              {review.text}
            </p>

            {/* DATE */}
            <p className="text-xs text-gray-400">
              Posted on {review.date}
            </p>
          </div>
        ))}
      </div>

      {/* LOAD MORE */}
      <div className="mt-10 flex justify-center">
        <button className="px-6 py-2 rounded-full bg-[#D8A85B] text-white text-sm">
          Load More Reviews
        </button>
      </div>
    </section>
  );
}
