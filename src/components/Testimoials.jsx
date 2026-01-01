import React, { useState, useEffect } from "react";
import pawsPattern from "../assets/images/Paws.png";
import commas from "../assets/images/commas.png"
import leftarrow from "../assets/images/leftarrow.png"
import rightarrow from"../assets/images/rightarrow.png"
import img1 from "../assets/images/testimonialImages/testImg1.png"
import img2 from "../assets/images/testimonialImages/testImg2.png"
import img3 from "../assets/images/testimonialImages/testImg3.png"

const testimonials = [
  { id: 1, name: "Jack", text: "WellFetch's AI vet helped me pick the right probiotic. The delivery is always on time. Highly recommend.", avatar: img1 },
  { id: 2, name: "Jaydon Bator", text: "The subscription model is a lifesaver. I never run out of the allergy chews, and Alfie has stopped scratching completely!", avatar: img2 },
  { id: 3, name: "Jenny Doe", text: "Fantastic quality and fast shipping. My dog absolutely loves the chews!", avatar: img3 },
  { id: 4, name: "Alex Smith", text: "I noticed visible improvements in my dog's digestion within weeks.", avatar: "https://i.pravatar.cc/100?img=18" },
  { id: 5, name: "Sarah Khan", text: "Reliable subscription and great customer support. Highly satisfied.", avatar: "https://i.pravatar.cc/100?img=29" },
  { id: 6, name: "Daniel Brown", text: "Premium ingredients and real results. Worth every penny.", avatar: "https://i.pravatar.cc/100?img=52" },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const nextSlide = () => setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));

  const getVisibleCards = () => testimonials.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section className="relative bg-[#1f243d] py-[clamp(3rem,6vw,6rem)] font-poppins overflow-visible">
      {/* Background Pattern */}
      <div
        className="absolute w-full inset-0 bg-[#1f243d] bg-repeat opacity-50"
        style={{
          backgroundImage: `url(${pawsPattern})`,
          backgroundSize: "1600px auto",
          backgroundPosition: "fit",
        }}
      />
      <div className="w-full px-[clamp(1rem,4vw,6rem)] relative z-10">
        {/* Header */}
        <div className="text-center w-full mx-auto">
          <h1 className="text-[30px] md:text-[45px] lg:text-[55px] xl:text-[35px] font-semibold text-white mb-[clamp(1rem,2vw,2rem)]">
            Testimonials
          </h1>
          <p className="text-[14px] text-gray-300 leading-relaxed">
            See real experiences and feedback from our clients as they share  how our products have helped them.
          </p>
        </div>
        


        {/* Cards */}
         
       <div className="mt-[clamp(4rem,6vw,7rem)] relative  ">
  <div
    className={` grid gap-[clamp(1.2rem,2.5vw,6rem)] ${
      cardsPerView === 1
        ? "grid-cols-1"
        : cardsPerView === 2
        ? "grid-cols-2"
        : cardsPerView === 3
        ? "lg:grid-cols-3"
        : "2xl:grid-cols-4"
    }`}
  >
    {getVisibleCards().map((item) => (
      <div
        key={item.id}
        className="
          relative
          w-full
          w-[380px]
          md:w-[350px]
          lg:w-[380px]
          xl:w-[390px]
          2xl:w-[460px]

          h-[250px]
          md:h-[280px]
          lg:h-[300px]
          xl:h-[300px]
          2xl:h-[420px]
          rounded-[24px]
          bg-[linear-gradient(145deg,#8E919C_0%,#4A4D59_100%)]
          border-2 border-white
          px-8
          pt-[88px]
          text-white
          
        "
      >
        {/* Avatar (NO CUT) */}
        <div
          className="
            absolute
            -top-[36px]
            left-[40px]
            w-[72px]
            h-[72px]
            rounded-full
            
            
            z-30
          "
        >
          <img
            src={item.avatar}
            alt={item.name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        {/* Quotation Mark (LOCKED POSITION) */}
        <div className="absolute bottom-[6px] left-[1px] pointer-events-none z-0">
          <img
            src={commas}
            alt="quotation mark"
            className="md:w-[133px] w-[80px] opacity-100
            onject-cover "
          />
        </div>

        {/* Text */}
        <p
          className="
            relative
            z-10
            pb-14
            text-[16px]
            text-[#FFFFFF]
          "
        >
          {item.text}
        </p>

        {/* Name */}
        <p
          className="
            absolute
            left-10
            bottom-8
            text-[16px]
            mx-auto
            text-white
            z-20
          "
        >
          {item.name}
        </p>
      </div>
    ))}
  </div>

  {/* Pagination */}
  <div className="flex justify-center items-center gap-[clamp(2.5rem,4vw,6rem)] mt-[clamp(3rem,4vw,4.5rem)]">
    <button
      onClick={prevSlide}
      className="w-[clamp(3.5rem,4.5vw,5.5rem)] h-[clamp(3.5rem,4.5vw,5.5rem)] rounded-full  flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg border border-white/20 text-[clamp(1rem,1.5vw,5rem)]"
      aria-label="Previous testimonial"
    >
     <img src={leftarrow} alt="" className="w-[clamp(3.5rem,4.5vw,5.5rem)] h-[clamp(3.5rem,4.5vw,5.5rem)]"/>
    </button>
    <button
      onClick={nextSlide}
      className="w-[clamp(3.5rem,4.5vw,5.5rem)] h-[clamp(3.5rem,4.5vw,5.5rem)] rounded-full text-black flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg border border-white/20 text-[clamp(1rem,1.5vw,5rem)]"
      aria-label="Next testimonial"
    >
       <img src={rightarrow} alt="" className="w-[clamp(3.5rem,4.5vw,5.5rem)] h-[clamp(3.5rem,4.5vw,5.5rem)]"/>
    </button>
  </div>
</div>



      </div>

    </section>
  );
}

export default Testimonials;
