import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import image1 from "../assets/images/heroImage.png";
import image2 from "../assets/images/image2.png";

const slides = [
  { id: 1, image: image1, alt: "Hero image" },
  { id: 2, image: image2, alt: "Second slide" },
];

function CarouselCard() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6F6F6]">
      <div
        className="
          w-full
         h-auto
        "
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="w-full h-full "
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.image}
                alt={slide.alt}
                className="
                  w-full h-full
                  object-fit object-center
                  transition-transform duration-500
                  hover:scale-105
                "
                loading="lazy"
              />

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default CarouselCard;
