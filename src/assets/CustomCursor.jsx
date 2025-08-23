import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor({ text }) {
  const cursorRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setIsDesktop(mq.matches);

    const handleChange = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", handleChange);

    return () => mq.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);


    const navbar = document.querySelector("nav"); 
    if (navbar) {
      navbar.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          scale: 0.2, 
          opacity: 0.6,
          duration: 0.2,
        });
      });

      navbar.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          scale: 1, // back to normal
          opacity: 1,
          duration: 0.2,
        });
      });
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (navbar) {
        navbar.removeEventListener("mouseenter", () => {});
        navbar.removeEventListener("mouseleave", () => {});
      }
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 w-13 h-13 rounded-full font-[bitum] flex items-center justify-center text-lg font-bold z-[9999] bg-[#FFEFAE] backdrop-blur-md"
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      {text}
    </div>
  );
}
