import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const content = [
  {
    headline: "Next-generation visuals and animations for e-commerce, real estate",
    subheadline: "& visionary brands.",
    title: "Collaboration",
    description: "We believe great ideas are born through meaningful partnerships."
  },
  {
    headline: "Smart solutions for immersive digital experiences",
    subheadline: "crafted with precision.",
    title: "Innovation",
    description: "Technology and design come together to create unique value."
  },
  {
    headline: "Crafting bold designs that tell your story",
    subheadline: "with impact and elegance.",
    title: "Creativity",
    description: "We blend creativity with strategy to build memorable brands."
  }
];

function Second() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat flex flex-col justify-between 
                 items-center text-center px-4 sm:px-8 md:px-12 
                 min-h-[80vh] sm:min-h-[90vh] md:h-screen"
      style={{ backgroundImage: 'url(/images/yourbg.jpg)' }}
    >
      {/* Top Section - Headline */}
      <div className="flex flex-col items-center justify-center pt-12 sm:pt-16 md:pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black drop-shadow-sm">
              {content[activeIndex].headline}
            </h1>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black drop-shadow-sm mt-1">
              {content[activeIndex].subheadline}
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Middle Section - Title and Description */}
      <div className="flex flex-col md:flex-row items-center justify-between md:w-full md:px-20  gap-4 my-8">
        <AnimatePresence mode="wait">
          <motion.h1
            key={`title-${activeIndex}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl font-semibold text-blue-500"
          >
            {content[activeIndex].title}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${activeIndex}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-base sm:text-lg md:text-lg lg:text-xl font-semibold 
                       text-black text-center md:text-left max-w-lg"
          >
            {content[activeIndex].description}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="flex justify-end items-end w-full px-4 sm:px-8 pb-6 z-10 md:mb-15">
        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-3 py-2 shadow-sm">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`w-3.5 h-3.5 rounded-full border border-black 
                          ${activeIndex === index ? 'bg-blue-600' : 'bg-transparent'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Second;
