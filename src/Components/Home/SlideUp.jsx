import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function SlideUp() {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);

  useEffect(() => {
    
    const lenis = new Lenis({
      duration: 1.5,
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const slides = slidesRef.current;
    gsap.set(slides, { zIndex: (i) => slides.length - i });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${slides.length * 250}vh`, // more scroll
        scrub: true,
        pin: true,
      },
    });

    slides.forEach((slide, i) => {
      if (i !== slides.length - 1) {
        let pause = i === 1 ? "+=2" : "+=0"; // EXTRA pause after 2nd slide
        tl.to(slide, {
          yPercent: -100,
          scale: 0.9,
          opacity: 0.5,
          z: -50,
          ease: "expo.inOut",
          duration: 5,
        }, i * 2)
        .addPause(i * 2 + 0.5, null, null, pause) // Pause timeline if needed
        .fromTo(slides[i + 1], {
          scale: 1.05,
          opacity: 0.9,
          z: 30,
        }, {
          scale: 1,
          opacity: 1,
          z: 0,
          ease: "expo.inOut",
          duration: 5,
        }, i * 2);
      }
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);

  const data = [
    {
      img: "/images/showcase4.jpg",
      title: "London Dairy",
      desc: "A premium ice cream experience, crafted with the finest ingredients."
    },
    {
      img: "/images/showcase6.jpg",
      title: "Cafe Brebella",
      desc: "Sleek coffee shop UI with warm, inviting tones and smooth scrolling."
    },
    {
      img: "/images/showcase8.jpg",
      title: "QuickCart",
      desc: "Next.js powered e-commerce platform with lightning-fast performance."
    },
    {
      img: "/images/showcase10.jpg",
      title: "Nature Escapes",
      desc: "Immersive travel landing page with cinematic transitions."
    },
  ];

  return (
    <div ref={containerRef} className="relative w-full h-screen font-[bitum] overflow-hidden">
      {data.map((slide, i) => (
        <div
          key={i}
          ref={(el) => (slidesRef.current[i] = el)}
          className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-white"
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Text container */}
          <div
            className="
              absolute bg-yellow-100 p-4 shadow-lg max-w-sm
              md:bottom-6 md:left-6
              md:translate-x-0 md:translate-y-0
              bottom-1/2 left-1/2 translate-x-[-50%] translate-y-[50%]
              text-center
            "
          >
            <h1 className="text-2xl md:text-4xl font-bold">{slide.title}</h1>
            <p className="mt-2 text-sm md:text-base">{slide.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
