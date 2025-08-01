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

  // Autoplay Logic (change every 5s)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  // Manual click handler (resets autoplay timer)
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div className="w-full h-full">
        <img className="absolute w-full h-full object-cover" src="" alt="Background" />
      </div>


      <div className="absolute top-[20%] md:top-[25%] px-4 sm:px-8 md:px-12 flex flex-col text-center items-center w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black drop-shadow-sm">
              {content[activeIndex].headline}
            </h1>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black drop-shadow-sm ">
              {content[activeIndex].subheadline}
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>


      <div className="px-4 sm:px-8 md:px-12 absolute bottom-[35%] flex flex-col md:flex-row justify-between items-center w-full space-y-4 md:space-y-0 md:space-x-4">
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
          <motion.h1
            key={`desc-${activeIndex}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-base sm:text-lg md:text-lg lg:text-xl font-semibold text-center md:text-left 
                    max-w-full md:max-w-none md:whitespace-nowrap text-black"
          >
            {content[activeIndex].description}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Navigation Circles (tight spacing) */}
      <div className='w-fit h-fit bg-white/60 backdrop-blur-sm rounded-full flex items-center gap-x-2 px-3 py-2 absolute right-4 bottom-20 shadow-sm'>
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
  );
}

export default Second;
