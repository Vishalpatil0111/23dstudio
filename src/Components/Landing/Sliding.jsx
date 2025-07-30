import React, { useRef, useState, useEffect } from 'react';
import Button from '../../assets/Button';

function Sliding() {
  const containerRef = useRef(null);
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



  const current = slides[activeIndex];

  return (
    <div  className="w-full h-screen relative overflow-hidden">
      <img
        src={current.image}
        alt="Slide"
        className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700"
      />

      <div
        className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-black/60 text-white p-4 rounded-lg max-w-lg transition-opacity duration-700"
      >
        <h1 className="text-lg text-end md:text-xl font-semibold mb-2">
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
