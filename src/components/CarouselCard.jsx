import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import image1 from "../assets/images/heroImage.png";

const paginationStyles = `
  .carousel-pagination {
    padding-bottom: 50px !important;
  }
  .carousel-pagination .swiper-pagination {
    bottom: 0 !important;
    position: relative !important;
  }
  .carousel-pagination .swiper-pagination-bullet {
    background-color: #000000 !important;
    opacity: 1 !important;
  }
  .carousel-pagination .swiper-pagination-bullet-active {
    background-color: #D8A85B !important;
  }
`;
import image2 from "../assets/images/image2.png";

const slides = [
  { id: 1, image: image1, alt: "Hero image" },
  { id: 2, image: image2, alt: "Second slide" },
  { id: 3, image: image2, alt: "third slide" },
];

function CarouselCard() {
  return (
    <section className="mt-22 w-full overflow-hidden ">
      <style>{paginationStyles}</style>
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
          className="carousel-pagination w-full h-full"
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
                  hover:scale-101
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
