import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

function Landing() {
  const textRef = useRef(null);
  const subRef = useRef(null);

  useGSAP(() => {
    let clutter = '';
    const splittedText = textRef.current.textContent.split('');

    splittedText.forEach((e) => {
      clutter += `<span>${e}</span>`; // Corrected closing tag
    });

    textRef.current.innerHTML = clutter;

    gsap.from(textRef.current.querySelectorAll('span'), {
      y: 100,
      opacity: 0,
      delay: 0.7,
      stagger: 0.08,
    });

    gsap.to(subRef.current, {
      opacity: 1,
      delay: 1.9,
      duration: 0.6,
    });
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black">
      <div className="flex flex-col justify-center items-center px-2 sm:px-4">
        <h1
          ref={textRef}
          className="whitespace-nowrap leading-none text-[#f7efcd] text-4xl sm:text-7xl md:text-[15vh] lg:text-[24vh] font-bold uppercase text-center"
        >
          23DStudio
        </h1>
      </div>

      <h3
        ref={subRef}
        className="opacity-0 mt-4 text-sm sm:text-base md:text-lg px-3 sm:px-6 md:px-8 bg-zinc-100 text-black text-center rounded-md"
      >
        Design Is Everywhere — We Make It Exceptional
      </h3>
    </div>
  );
}

export default Landing;
