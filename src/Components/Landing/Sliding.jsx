import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedButton from '../AnimatedButton';


gsap.registerPlugin(ScrollTrigger);

function Sliding() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const mobileRefs = useRef([]); // for scroll reveal animation on mobile

  const slides = [
    {
      image: '/images/showcase5.jpg',
      heading: 'Architectural Visualization',
      text: 'Transforming blueprints into stunning, photorealistic 3D visuals',
      route: '/services',
    },
    {
      image: '/images/showcase1.jpg',
      heading: 'Product Visualization',
      text: 'Crafting inspiring interior spaces with elegance and function.',
      route: '/about',
    },
    {
      image: '/images/showcase6.jpg',
      heading: 'Event & Exhibition Design ',
      text: 'From concept to prototype — functional, aesthetic solutions.',
      route: '/work',
    },
    {
      image: '/images/showcase2.jpg',
      heading: 'Brand & Identity Design',
      text: 'Transforming blueprints into stunning, photorealistic 3D visuals',
      route: '/services',
    },
    {
      image: '/images/menuproduct.jpg',
      heading: 'Marketing & Promotional Design',
      text: 'Crafting inspiring interior spaces with elegance and function.',
      route: '/about',
    },
  ];

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop: GSAP horizontal scroll
  useLayoutEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      const container = containerRef.current;
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

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, [isMobile]);

  // Mobile: 
  useLayoutEffect(() => {
    if (!isMobile) return;

    const ctx = gsap.context(() => {
      mobileRefs.current.forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      });
    });

    return () => ctx.revert();
  }, [isMobile]);

  // Mobile View: 
  if (isMobile) {
    return (
      <div className="w-full min-h-screen  flex flex-col items-center gap-6 p-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={(el) => (mobileRefs.current[index] = el)}
            className="w-full h-[70vh] relative rounded-lg overflow-hidden shadow-lg"
          >
            <img src={slide.image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            <div className="absolute bottom-4 right-4 bg-black/60 text-white p-3 rounded max-w-sm">
              <h1 className="text-base font-semibold mb-2 text-end">{slide.heading}</h1>
              <p className="text-xs text-end mb-3">{slide.text}</p>
              <div className="flex justify-end">
                <AnimatedButton label="Learn More" route={slide.route} textColor="#ffffff" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Desktop View: 
  return (
    <div ref={containerRef} className="w-full h-screen overflow-hidden relative ">
      <div
        ref={sliderRef}
        className="flex w-max h-full items-center gap-x-4 p-2"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-[80vw] h-full flex-shrink-0 relative  overflow-hidden shadow-lg"
          >
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/60 text-white p-4 rounded max-w-md">
              <h1 className="text-xl font-semibold mb-2 text-end">{slide.heading}</h1>
              <p className="text-base text-end mb-4">{slide.text}</p>
              <div className="flex justify-end">
                <AnimatedButton label="Learn More" route={slide.route} textColor="#ffffff" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sliding;
