import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blogs.js";

import { CiInstagram } from "react-icons/ci";
import {  FaXTwitter } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";

import { AiOutlineFacebook } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  

  return (
    <main className="w-full font-poppins px-6 md:px-20 lg:px-20 xl:px-20 2xl:px-20 py-15">
      {/* Author + Date */}
      <div className="flex items-center gap-2 space-x-2">
        <img src={blog.authorImg} className="w-8 h-8 rounded-full" alt="Avatar Image" />
        <p className="text-sm   md:text-sm lg:text-base xl:text-base 2xl:text-xl text-[#D8A85B]">
          Author <span className="text-[#757575] px-2">{blog.date}</span>
        </p>
      </div>

      {/* Title */}
      <h1 className="text-md md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-semibold mt-3 text-[#212121]">
        {blog.title}
      </h1>

      {/* Read Time and Icons */}

      <div className="flex items-center bg-[#F4F4F4] px-4 py-2 rounded-xl justify-between mt-4 space-x-2">

      {/* Read Time */}
      <span className="  text-xs   py-1  font-medium text-[#757575]">
        {blog.readTime}
      </span>

      {/* ICONS */}
      <div className="flex text-[#757575] text-xl gap-2 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4">

      <CiInstagram  />
      {/* Facebook Icon */}
        <AiOutlineFacebook   />

        <RiTwitterXFill  />

        <IoIosLink  />
      </div>
      
      </div>

      {/* Feature Image */}
      <div className="w-full mt-6 rounded-xl overflow-hidden">
        <img src={blog.blogimg} className="w-full h-fit object-cover" alt="Blog Image" />
      </div>

      {/* Article */}
      <div className="mt-6 text-[#212121] text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg leading-relaxed  whitespace-pre-line">
        {blog.article}
      </div>

      {/* Content */}
      <div className="mt-6 flex items-center gap-6 font-semibold text-[#212121] text-sm leading-relaxed  whitespace-pre-line">
        <img src="/blogs/verticle.png" alt="verticle image"  className="h-10 md:h-6 lg:h-6 xl:h-6 2xl:h-6 mt-5 "/>
        {blog.content}
      </div>
    </main>
  );
}
