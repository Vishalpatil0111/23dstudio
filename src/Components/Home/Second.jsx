import React, { useState, useEffect } from "react";

export default function Second() {
  const slides = [
    {
      title: "Creativity",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi laboriosam dolorum veniam excepturi nisi at fuga.",
    },
    {
      title: "Innovation",
      desc: "We push boundaries to create designs that inspire and engage, setting new standards of visual storytelling.",
    },
    {
      title: "Precision",
      desc: "Attention to detail ensures every project reflects our dedication to quality and excellence.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="w-full z-10 shadow-sm flex flex-col py-10 md:py-14 justify-center items-center gap-6 font-[bituml] px-4 sm:px-6 lg:px-12">
    
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight bg-[#FFEFAE] mt-10 text-center">
        We Are 23D Studio
      </h1>

      {/* Subheading */}
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] flex items-center justify-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide uppercase text-center leading-snug">
          Crafting bold designs that tell your story
          <br />
          with impact and elegance.
        </h3>
      </div>

      <div className="w-full sm:w-[80%] md:w-[70%] h-0.5 bg-black"></div>

    
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] text-base sm:text-lg md:text-xl mb-4 h-auto flex flex-col gap-4">
        
        {/* Slide Content */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 transition-all duration-500">
          <div className="w-full md:w-1/3">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              {slides[current].title}
            </h1>
          </div>
          <div className="w-full md:w-2/3">
            <p className="leading-relaxed">{slides[current].desc}</p>
          </div>
        </div>

        {/* Pagination Circles */}
        <div className=" justify-center hidden md:flex mt-2 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? "bg-black scale-110" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
