import { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Hero = () => {
  const { sliderImages } = useAppContext();
  const [current, setCurrent] = useState(0);

  // Next & Previous Slide Functions
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () =>
    setCurrent(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );

  // Auto-play using useEffect
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 sec
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden">
      {/* Slide Content */}
      <div className="relative flex-grow flex items-center justify-center pt-12">
        {" "}
        {/* Added padding-top */}
        <button className="absolute left-4 text-3xl z-10" onClick={prevSlide}>
          <FaChevronCircleLeft className="text-[#D40057] text-lg sm:text-xl md:text-2xl lg:text-3xl" />
        </button>
        <div className="absolute inset-x-0 top-12 w-full h-5/6">
          {" "}
          {/* Moved image slightly higher */}
          <img
            src={sliderImages[current].img}
            alt={`Slide ${current + 1}`}
            className="w-full h-full object-contain"
          />
        </div>
        <button className="absolute right-4 text-3xl z-10" onClick={nextSlide}>
          <FaChevronCircleRight className="text-[#D40057] text-lg sm:text-xl md:text-2xl lg:text-3xl" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {" "}
        {/* Centered dots */}
        {sliderImages.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === index ? "bg-[#D40057]" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
