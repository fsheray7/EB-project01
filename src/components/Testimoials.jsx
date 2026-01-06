import React, { useState, useEffect } from "react";



const testimonials = [
  { id: 1, name: "Jack", text: "WellFetch's AI vet helped me pick the right probiotic. The delivery is always on time. Highly recommend.", avatar: "testimonialImages/testImg1" },
  { id: 2, name: "Jaydon Bator", text: "The subscription model is a lifesaver. I never run out of the allergy chews, and Alfie has stopped scratching completely!", avatar: "testimonialImages/testImg2.png" },
  { id: 3, name: "Jenny Doe", text: "Fantastic quality and fast shipping. My dog absolutely loves the chews!", avatar: "/testimonialImages/testImg3.png" },
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
    <section className="relative bg-[#1f243d] py-12 font-poppins overflow-visible">
      {/* Background Pattern */}
      <div
        className="absolute w-full inset-0 bg-[#1f243d] bg-repeat opacity-50"
        style={{
          backgroundImage: `url("testimonialImages/paws.png")`,
          backgroundSize: "1600px auto",
          backgroundPosition: "fit",
        }}
      />
      <div className="w-full  flex flex-col justify-center px-14 items-center   relative z-10">
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
         
       <div className="mt-[clamp(4rem,6vw,7rem)]   relative   ">
  <div
    className={` grid gap-12 ${
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
          flex items-center justify-center
          w-full
          w-[260px]
          sm:w-[180px]
          md:w-[320px]
          lg:w-[300px]        
          xl:w-[300px]        
          2xl:w-[400px]        
          h-[250px]
          md:h-[230px]
          lg:h-[230px]
          xl:h-[230px]
          2xl:h-[300px]
          rounded-[13px]
          bg-[linear-gradient(175deg,#8E919C_0.1%,#4A4D59_50%)]
          border-3 border-[#b3b7c3]
          px-6
         
          text-white
          
        "
      >
        {/* Avatar (NO CUT) */}
        <div
          className="
            absolute
            -top-[36px]
            left-[38px]
            w-[65px]
            h-[65px]
            rounded-full
            
            
            z-30
          "
        >
           <div
    className="
      absolute
      -bottom-[4px]
      left-1/2
      -translate-x-1/2
      w-[73px]
      h-[36px]
      bg-[#b3b7c3]
      rounded-b-full
      z-10
    "
  />
          <img
            src={item.avatar}
            alt={item.name}
            className="w-full h-full rounded-full object-cover
            relative
      z-20
      w-full
      h-full
      rounded-full
      object-cover"
          />
        </div>




        {/* Quotation Mark (LOCKED POSITION) */}
        <div className="absolute bottom-[6px] left-[1px] pointer-events-none z-0">
          <img
            src="/testimonialImages/commas.png"
            alt="quotation mark"
            className=" w-[70px] md:w-[60px] md:h-auto lg:w-[80px] opacity-100
            onject-cover "
          />
        </div>

        {/* Text */}
        <p
          className="
          font-poppins
            relative
            z-10
            bottom-6
            md:bottom-6
            lg:bottom-4
            xl:bottom-4
            2xl:bottom-4
            text-center
            text-[10px]
            sm:text-[14px]
            md:text-[10px]
            lg:text-[12px]
            xl:text-[14px]
            2xl:text-[16px]
            text-[#FFFFFF]
          "
        >
          {item.text}
        </p>

        {/* Name */}
        <p
          className="
            absolute
            left-8
            md:left-4
            lg:left-4
            xl:left-4
            2xl:left-4
            bottom-8
            md:bottom-4
            lg:bottom-4
            xl:bottom-4
            2xl:bottom-4
            text-[10px]
            md:text-[12px]
            lg:text-[14px]
            xl:text-[14px]
            2xl:text-[16px]
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
      className=" rounded-full  flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg border border-white/20 text-[clamp(1rem,1.5vw,5rem)]"
      aria-label="Previous testimonial"
    >
     <img src="/leftarrow.png" alt="" className="w-[clamp(3rem,4.5vw,4rem)] h-[clamp(3rem,4.5vw,4rem)]"/>
    </button>
    <button
      onClick={nextSlide}
      className=" rounded-full text-black flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg border border-white/20 text-[clamp(1rem,1.5vw,5rem)]"
      aria-label="Next testimonial"
    >
       <img src="/rightarrow.png" alt="" className="w-[clamp(3rem,4.5vw,4rem)] h-[clamp(3rem,4.5vw,4rem)]"/>
    </button>
  </div>
</div>



      </div>

    </section>
  );
}

export default Testimonials;
