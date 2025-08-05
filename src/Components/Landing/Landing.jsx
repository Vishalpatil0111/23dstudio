import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import 'swiper/css';
import 'swiper/css/autoplay';

function Landing() {
  const [showSlider, setShowSlider] = useState(false);
  const [animating, setAnimating] = useState(false);
  const circleRef = useRef(null);

  const handleClick = () => {
    if (showSlider || animating) return;
    setAnimating(true);

    gsap.fromTo(
      circleRef.current,
      {
        rotate: 0,
        scale: 1,
        backgroundColor: '#60a5fa',
      },
      {
        rotate: 360,
        scale: 0.9,
        backgroundColor: '#34d399',
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          setShowSlider(true);
          setAnimating(false);
        },
      }
    );
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex flex-col items-center justify-center px-4"
      style={{ backgroundImage: 'url(/images/yourbg.jpg)' }}
    >
      {/* Centered Text */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light drop-shadow-lg">
          Aesthetic Storytelling, Powered By
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold drop-shadow-lg">
          Smart tech
        </h1>
      </div>

      {/* Circle Button */}
      <div
        ref={circleRef}
        onClick={handleClick}
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full cursor-pointer 
                   flex items-center justify-center text-white font-semibold text-sm sm:text-base md:text-lg bg-blue-400 shadow-lg"
      >
        {!showSlider && 'Click Me'}
      </div>

      {/* Slider */}
      <AnimatePresence>
        {showSlider && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="w-full mt-4 z-10"
          >
            <div className="overflow-hidden">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                spaceBetween={10}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                }}
                speed={3000}
                allowTouchMove={false}
                breakpoints={{
                  320: { slidesPerView: 1.5 },
                  480: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={`/images/showcase${i + 1}.jpg`}
                      className="h-40 w-full object-cover rounded-md"
                      alt={`slide${i + 1}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Landing;
