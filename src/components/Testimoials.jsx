import React, { useState, useEffect } from "react";
import pawsPattern from "../assets/images/Paws.png";

const testimonials = [
  { id: 1, name: "Jack", text: "WellFetch's AI vet helped me pick the right probiotic. The delivery is always on time. Highly recommend.", avatar: "https://i.pravatar.cc/100?img=12" },
  { id: 2, name: "Jaydon Bator", text: "The subscription model is a lifesaver. I never run out of the allergy chews, and Alfie has stopped scratching completely!", avatar: "https://i.pravatar.cc/100?img=32" },
  { id: 3, name: "Jenny Doe", text: "Fantastic quality and fast shipping. My dog absolutely loves the chews!", avatar: "https://i.pravatar.cc/100?img=45" },
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
        <div className="text-center w-full mx-auto mb-[clamp(2rem,5vw,6rem)]">
          <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-bold text-white mb-[clamp(1rem,2vw,2rem)]">
            Testimonials
          </h2>
          <p className="text-[clamp(1rem,2vw,1.5rem)] text-gray-300 leading-relaxed">
            See real experiences and feedback from our clients as they share how our products have helped them and their furry friends.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[clamp(2rem,6vw,7rem)] relative">
          <div className={`grid gap-[clamp(1.2rem,2.5vw,3.5rem)] ${cardsPerView === 1 ? 'grid-cols-1' :
              cardsPerView === 2 ? 'grid-cols-2' :
                cardsPerView === 3 ? 'lg:grid-cols-3' :
                  '2xl:grid-cols-4'
            }`}>
            {getVisibleCards().map(item => (
              <div
                key={item.id}
                className="relative rounded-2xl p-[clamp(2rem,3vw,3.5rem)] pt-[clamp(4rem,5vw,6.5rem)] min-h-[clamp(300px,30vw,420px)] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 text-gray-200 transition-all duration-500 hover:scale-[1.03] hover:border-white/30 hover:shadow-2xl group"
              >
                {/* Avatar */}
                <div className="absolute -top-[clamp(2.5rem,4vw,5rem)] left-[clamp(2.5rem,4vw,3.5rem)] w-[clamp(5rem,6.5vw,6.5rem)] h-[clamp(5rem,6.5vw,6.5rem)] rounded-full border-3 border-white bg-white p-[clamp(0.3rem,0.5vw,0.4rem)] group-hover:scale-110 transition-transform duration-300">
                  <img src={item.avatar} alt={item.name} className="w-full h-full rounded-full object-cover" />
                </div>

                {/* Quote Mark */}
                <div className="absolute bottom-[clamp(1.5rem,2.5vw,3rem)] right-[clamp(1.5rem,2.5vw,3rem)] text-[clamp(5.5rem,7vw,7.5rem)] text-white/5 group-hover:text-white/10 transition-colors duration-300">
                  "
                </div>

                {/* Text */}
                <p className="text-[clamp(1.1rem,2vw,1.6rem)] leading-relaxed mb-[clamp(1.5rem,3vw,2.5rem)] line-clamp-4">
                  "{item.text}"
                </p>

                {/* Name */}
                <div className="mt-[clamp(1.5rem,2.5vw,2rem)] pt-[clamp(0.6rem,1vw,1.2rem)] border-t border-white/10">
                  <p className="text-[clamp(1.2rem,2vw,1.6rem)] font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="text-[clamp(1rem,1.5vw,1.3rem)] text-gray-400 mt-[clamp(0.3rem,0.5vw,0.5rem)]">
                    Happy Pet Parent
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-[clamp(2.5rem,4vw,6rem)] mt-[clamp(3rem,4vw,4.5rem)]">
            <button
              onClick={prevSlide}
              className="w-[clamp(3.5rem,4.5vw,5.5rem)] h-[clamp(3.5rem,4.5vw,5.5rem)] rounded-full bg-white hover:bg-gray-300 text-black flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg border border-white/20
              text-[clamp(1rem,1.5vw,5rem)]"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="w-[clamp(3.5rem,4.5vw,5.5rem)] h-[clamp(3.5rem,4.5vw,5.5rem)] rounded-full bg-white hover:bg-gray-300 text-black flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg border border-white/20 text-[clamp(1rem,1.5vw,5rem)]"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>


      </div>

    </section>
  );
}

export default Testimonials;
