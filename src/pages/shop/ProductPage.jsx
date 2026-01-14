import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/card/ProductCard";
import products from "../../data/products";
import ReviewsSection from "../../components/reviewcomp/Reviews";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  // Fallback thumbnails if data doesn't provide them
  const thumbnails = product ? [
    "/purchaisingpic/image2.png",
    "/purchaisingpic/image5.png", // keeping some fallback styling images as per user request to keep styling
    "/purchaisingpic/image6.jpg"
  ] : [];

  const [displayImage, setDisplayImage] = useState("/purchaisingpic/image1.png");
  const [qty, setQty] = useState(1);

  // Update display image if product changes
  React.useEffect(() => {
    if (product) {
      setDisplayImage("/purchaisingpic/image1.png");
    }
  }, [product]);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/shop" className="mt-4 text-[#D8A85B] hover:underline">Return to Shop</Link>
      </div>
    );
  }

  // Calculate some dummy original price for UI consistency
  const originalPrice = (product.price * 1.3).toFixed(2);
  const discount = 20; // Hardcoded discount as per original UI logic


  return (
    <section className="w-full mx-auto font-poppins px-15 py-10">

      {/* BREADCRUMB */}
      <nav className="flex items-center text-sm text-[#00000099] mb-6">
        <Link to="/shop" className="hover:text-black">Shop</Link>
        <span className="mx-2">&gt;</span>
        <span className="text-[#000000] text-sm">
          {product.title}
        </span>
      </nav>


      {/* =================== PRODUCT =================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT – IMAGE GALLERY */}
        <div className="flex flex-col-reverse lg:flex-row items-start gap-4">

          {/* THUMBNAILS */}
          <div className="w-full  p-4">
            <div className="flex flex-col-reverse lg:flex-row gap-4 items-start">

              {/* LEFT SIDE THUMBNAILS */}
              <div className="flex lg:flex-col gap-3 w-full lg:w-[120px]">
                {thumbnails.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setDisplayImage(img)}
                    className={`cursor-pointer rounded-2xl overflow-hidden border 
                ${displayImage === img ? "border-[#D89F3D]" : "border-[#E6E6E6]"}`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-24 sm:h-28 lg:h-30   object-fit"
                    />
                  </div>
                ))}
              </div>

              {/* MAIN IMAGE */}
              <div className="flex-1 rounded-xl py-2   overflow-hidden border border-[#E6E6E6]">
                <img
                  src={displayImage}
                  alt="Selected"
                  className="w-full h-[300px] sm:h-[380px] md:h-[380px] lg:h-[370px] object-fit object-contain rounded-xl bg-white"
                />
              </div>

            </div>
          </div>



        </div>


        {/* RIGHT – PRODUCT INFO */}
        <div className="space-y-5">
          <h1 className="text-2xl sm:text-3xl font-bold">
            {product.title}
          </h1>

          <div className="flex items-center gap-2 text-yellow-500 text-2xl">
            ★★★★☆ <span className="text-[#000000] text-sm">{product.rating || "4.5"}/ <span className="text-[#0000004D] text-sm">5</span> </span>
          </div>


          <div className="flex gap-4 items-center" >
            <p className=" items-center gap-2 text-2xl font-semibold">${product.price} <span className="text-[#0000004D] line-through text-2xl">${originalPrice}</span> </p><span className=" py-2 px-4 bg-[#FF33331A] rounded-full text-center text-sm text-[#FF3333]">-{discount}%</span>
          </div>

          <p className="text-[#00000099] leading-relaxed">
            Our Scientifically formulated Allergy Soft Chews are designed to help dosgs struggle with seasonal allergies. Packed wight Omega-3s and Colostrum, they support a healthy immune system and maintain normal histamine levels.

          </p>

          <p className="text-[#000000] font-400">Key Ingredients</p>
          <div className="flex gap-4 items-center text-[12px]">
            <p className="bg-[#D8A85B] text-white rounded-full py-1 px-2">Salmon Oil</p>
            <p className="bg-[#D8A85B] text-white rounded-full py-1 px-2">Enzymes</p>
            <p className="bg-[#D8A85B] text-white rounded-full py-1 px-2">Fibers</p>
            <p className="bg-[#D8A85B] text-white rounded-full py-1 px-2">Protein</p>
          </div>

          <div className="space-y-3 bg-[#D8A85B1A] rounded-xl p-2">

            {/* SUBSCRIBE & SAVE */}
            <label className="flex cursor-pointer items-start justify-between rounded-xl border border-[#FF3333] bg-[#FFF1F1] p-4">
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  name="purchase"
                  defaultChecked
                  className="mt-1 h-4 w-4 accent-[#FF3333]"
                />

                <div>
                  <p className="font-semibold text-sm">
                    Subscribe & Save 15%
                  </p>
                  <p className="text-xs text-gray-600">
                    Delivered every 30 days. Cancel anytime
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm font-semibold text-[#FF3333]">${product.price}</p>
                <p className="text-xs line-through text-gray-400">${originalPrice}</p>
              </div>
            </label>

            {/* ONE TIME PURCHASE */}
            <label className="flex cursor-pointer items-center justify-between    p-4">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="purchase"
                  className="h-4 w-4 accent-black"
                />
                <p className="font-semibold text-sm">
                  One-time purchase
                </p>
              </div>

              <p className="text-sm font-semibold">${originalPrice}</p>
            </label>

          </div>




          {/* QUANTITY */}
          <div className="flex items-center  gap-6">

            <div className="flex bg-[#F0F0F0]  rounded-[62px]">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-2">−</button>
              <span className="px-4 py-2 ">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-4 py-2">+</button>
            </div>

            <button
              onClick={() => navigate("/subscription-active")}
              className="bg-black text-white py-2 px-6 rounded-full w-2/3 cursor-pointer  transition"
            >
              Start Subscription
            </button>



          </div>
          {/* BUTTONS */}

        </div>
      </div>

      {/* =================== REVIEWS =================== */}
      <div className="mt-16">
        <ReviewsSection />
      </div>

      {/* =================== RELATED =================== */}
      <div className="mt-20">
        <h2 className="text-2xl text-center font-semibold mb-8">You might also like</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
