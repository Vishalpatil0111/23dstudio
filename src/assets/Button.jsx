import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useNavigate } from 'react-router-dom';

function Button({
  label = "Click Me",
  route = "/",
  borderColor = "#ea580c",   // default: Tailwind orange-500
  bgColor = "#ea580c",
  textColor = "#ea580c",
  hoverTextColor = "#ffffff"
}) {
  const btnRef = useRef(null);
  const bgRef = useRef(null);
  const textRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(() => {
    const btn = btnRef.current;
    const bg = bgRef.current;
    const text = textRef.current;

    const hoverIn = () => {
      gsap.to(bg, {
        width: '100%',
        duration: 0.6,
        ease: 'power2.out',
      });
      gsap.to(text, {
        color: hoverTextColor,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const hoverOut = () => {
      gsap.to(bg, {
        width: '0%',
        duration: 0.6,
        ease: 'power2.out',
      });
      gsap.to(text, {
        color: textColor,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    btn.addEventListener('mouseenter', hoverIn);
    btn.addEventListener('mouseleave', hoverOut);

    return () => {
      btn.removeEventListener('mouseenter', hoverIn);
      btn.removeEventListener('mouseleave', hoverOut);
    };
  }, []);

  return (
    <button
      onClick={() => navigate(route)}
      ref={btnRef}
      className='relative cursor-pointer overflow-hidden uppercase  px-6 py-2 text-sm font-semibold'
      style={{
        border: `1px solid ${borderColor}`,
      }}
    >
      {/* Animated BG */}
      <span
        ref={bgRef}
        className='absolute left-0 top-0 h-full z-0'
        style={{ width: '0%', backgroundColor: bgColor, transition: 'none' }}
      ></span>

      {/* Dynamic Text */}
      <span ref={textRef} className='relative z-10' style={{ color: textColor }}>
        {label}
      </span>
    </button>
  );
}

export default Button;
