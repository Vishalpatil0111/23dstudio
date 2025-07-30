import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../../assets/Button'; // Adjust path if needed

gsap.registerPlugin(ScrollTrigger);

function Sliding() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  const slides = [
    {
      image: '/images/1.png',  // ✅ Use leading slash for hosted site
      heading: 'Architectural Visualization',
      text: 'Transforming blueprints into stunning, photorealistic 3D visuals',
      route: '/services',
    },
    {
      image: '/images/2.png',
      heading: 'Interior Design',
      text: 'Crafting inspiring interior spaces with elegance and function.',
      route: '/about',
    },
    {
      image: '/images/3.jpg',
      heading: 'Product Design',
      text: 'From concept to prototype — functional, aesthetic solutions.',
      route: '/work',
    },
  ];

  useLayoutEffect(() => {
    const slider = sliderRef.current;
    const container = containerRef.current;

    const updateScroll = () => {
      const scrollAmount = slider.scrollWidth - container.offsetWidth;

      gsap.to(slider, {
        x: -scrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: `+=${scrollAmount}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();  // ✅ Recalculate positions after load/resize
    };

    // Ensure scroll calculations after images are loaded
    window.addEventListener('load', updateScroll);
    window.addEventListener('resize', updateScroll);

    return () => {
      window.removeEventListener('resize', updateScroll);
      ScrollTrigger.kill(); // ✅ Clean up triggers
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen overflow-hidden relative box-border">
      <div
        ref={sliderRef}
        className="flex w-max h-full items-center gap-x-6 md:gap-x-8 px-4 md:px-10"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-[95vw] md:w-[80vw] h-[75vh] md:h-[90vh] flex-shrink-0 relative rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-black/60 text-white p-3 md:p-4 rounded-lg max-w-sm md:max-w-md">
              <h1 className="text-base md:text-xl font-semibold mb-2 text-end">
                {slide.heading}
              </h1>
              <p className="text-xs md:text-base text-end mb-3 md:mb-4">
                {slide.text}
              </p>
              <div className="flex justify-end">
                <Button label="Learn More" route={slide.route} textColor="#ffffff" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sliding;
