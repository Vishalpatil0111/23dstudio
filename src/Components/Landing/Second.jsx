import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Button from '../../assets/Button';

gsap.registerPlugin(ScrollTrigger);

function Second() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1.2,
        transformOrigin: 'center top',
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );

    
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    
    <div ref={sectionRef} className='w-full min-h-screen px-6 py-10  flex flex-col items-center justify-center text-center'>
      <div className='w-px h-20 bg-orange-500 mb-6' ref={lineRef}></div>

      
      <div ref={textRef} className='max-w-3xl'>
        <h2 className='uppercase text-sm font-semibold tracking-widest mb-4'>A Design Vision</h2>
        
        <h1 className='text-xl sm:text-2xl font-medium mb-6 '>
          At 23Dstudio, we create bold, functional, and elegant design experiences across product, interior, and visual mediums.
        </h1>

        <p className='text-lg text-gray-700 leading-relaxed'>
          Whether designing a home, a brand, or a digital product, our team blends creativity with precision to deliver exceptional, timeless results.
          From concept to execution, 23Dstudio is driven by a passion for detail, innovation, and impactful design.
        </p>
        <div className='mt-5'>
           <Button label="About us" route="/about"/>

        </div>
 
       
      </div>
    </div>
  );
}

export default Second;
