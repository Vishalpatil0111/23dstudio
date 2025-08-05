import React, { useRef, useEffect, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import gsap from 'gsap';

const services = [
  {
    title: "Architectural Visualization",
    img: "/images/showcase1.jpg",
  },
  {
    title: "Product Visualization",
    img: "/images/showcase2.jpg",
  },
  {
    title: "Event & Exhibition Design & Visualization",
    img: "/images/showcase3.jpg",
  },
  {
    title: "Branding & Identity Design",
    img: "/images/showcase4.jpg",
  },
  {
    title: "Marketing & Promotional Design",
    img: "/images/showcase5.jpg",
  }
];

function WorkPage() {
  const linesRef = useRef([]);
  const [hoverImg, setHoverImg] = useState(null);
  const imgRef = useRef(null);
  const serviceRefs = useRef([]);


  useEffect(() => {
    // Animate left text lines one by one
    gsap.from(linesRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });
    gsap.to(serviceRefs.current, {
    opacity: 100,
    x: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out',
    delay: 1,
    clearProps: 'all',
  });
  }, []);

  useEffect(() => {
    if (hoverImg) {
      gsap.to(imgRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      gsap.to(imgRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, [hoverImg]);

  useEffect(() => {
    // Animate service list items from right to left with fade-in
    gsap.from(serviceRefs.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
      delay: 1, // starts after left side animation
    });
  }, []);


  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 md:px-20 py-16 bg-white gap-12">
      {/* Hover Image Preview */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full pointer-events-none z-0">
        {hoverImg && (
          <img
            ref={imgRef}
            src={hoverImg}
            alt="Preview"
            className="w-full h-full object-cover opacity-0 transition duration-500"
          />
        )}
      </div>

      {/* Left - Animated Headline */}
      <div className="w-full md:w-1/2 flex flex-col justify-center z-10">
        {["BLENDING", "CREATIVE", "VISION", "WITH", "INNOVATIVE THINKING."].map((line, i) => (
          <h1
            key={i}
            ref={(el) => (linesRef.current[i] = el)}
            className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${line.includes("INNOVATIVE") ? "text-blue-600" : "text-black"
              }`}
          >
            {line}
          </h1>
        ))}
      </div>

      {/* Right - Service List */}
      <div className="w-full md:w-1/2 flex flex-col divide-y divide-gray-300 z-10">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (serviceRefs.current[index] = el)} // Attach ref here
            className="flex items-center justify-between py-5 group hover:bg-gray-50 px-2 cursor-pointer transition"
            onMouseEnter={() => setHoverImg(service.img)}
            onMouseLeave={() => setHoverImg(null)}
          >
            <span className="text-base sm:text-lg font-medium text-gray-800">
              {service.title}
            </span>
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-black group-hover:bg-black group-hover:text-white transition">
              <FiArrowUpRight className="text-lg" />
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default WorkPage;
