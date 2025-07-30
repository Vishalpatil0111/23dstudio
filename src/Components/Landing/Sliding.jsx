import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Button from '../../assets/Button';

gsap.registerPlugin(ScrollTrigger);

function Sliding() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);  // For animating text/image
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: './images/1.png',
      heading: 'Architectural Visualization',
      text: 'Transforming blueprints into stunning, photorealistic 3D visuals',
      route: '/services',
    },
    {
      image: './images/2.png',
      heading: 'Interior Design',
      text: 'Crafting inspiring interior spaces with elegance and function.',
      route: '/about',
    },
    {
      image: './images/3.jpg',
      heading: 'Product Design',
      text: 'From concept to prototype — functional, aesthetic solutions.',
      route: '/work',
    },
  ];

  useGSAP(() => {
    const triggers = [];

    slides.forEach((_, index) => {
      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: `${index * 100}% top`,
        end: `${(index + 1) * 100}% top`,
        onEnter: () => animateToIndex(index),
        onEnterBack: () => animateToIndex(index),
      });
      triggers.push(trigger);
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: `+=${slides.length * 100}%`,
      pin: true,
      scrub: true,
    });

    return () => triggers.forEach(t => t.kill());
  }, []);

  // Smooth animation when index changes
  const animateToIndex = (index) => {
    gsap.to(contentRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.4,
      ease: 'power1.out',
      onComplete: () => {
        setActiveIndex(index);
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
        );
      }
    });
  };

  const current = slides[activeIndex];

  return (
    <div ref={containerRef} className="w-full h-screen relative overflow-hidden">
      <img
        src={current.image}
        alt="Slide"
        className="w-full h-full object-cover"
      />

      <div
        ref={contentRef}
        className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-black/60 text-white p-4 rounded-lg max-w-lg"
      >
        <h1 className="text-lg md:text-xl font-semibold mb-2">
          {current.heading}
        </h1>
        <p className="text-sm text-end md:text-base mb-4">
          {current.text}
        </p>
        <div className="flex justify-end">
          <Button label="Learn More" route={current.route} textColor="#ffffff" />
        </div>
      </div>
    </div>
  );
}

export default Sliding;
