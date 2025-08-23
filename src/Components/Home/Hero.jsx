import React, { useState, useEffect } from "react";

export default function Hero({ images = [], caption  }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden ">
      {/* Background Images */}
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`slide-${index}`}
         
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Caption */}
       {caption && (
        <div className="absolute bottom-15 md:bottom-20 font-bold tracking-wide left-5 md:left-15 
         font-[bituml]  text-4xl drop-shadow-lg">
          {caption}
        </div>
      )}
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current ? "bg-white scale-110" : "bg-gray-800"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
