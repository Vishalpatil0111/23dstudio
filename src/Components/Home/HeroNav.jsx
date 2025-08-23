import React, { useRef, useEffect, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import gsap from 'gsap';
import { sections } from '../Data/sectionsData';
import { Link } from 'react-router-dom';

function HeroNav() {
    const linesRef = useRef([]);
    const serviceRefs = useRef([]);
    const imgRef = useRef(null);
    const [hoverImg, setHoverImg] = useState(null);

    useEffect(() => {
        // Left headline animation
        gsap.from(linesRef.current, {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
        });

        // Right service items animation
        const isMobile = window.innerWidth < 768;
        gsap.to(serviceRefs.current, {
            opacity: 1,
            y: isMobile ? 0 : 20, // no vertical shift on mobile
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
            delay: 1,
        });
    }, []);

    useEffect(() => {
        // Hover image fade in/out
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

    return (
        <div className="relative w-full font-[bitum] overflow-hidden min-h-screen flex flex-col
             md:flex-row items-center justify-between px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-12  sm:gap-6 md:gap-8 max-w-screen-xl mx-auto">

            {/* Hover Image Preview - Hidden on mobile */}
            <div className="absolute inset-0 md:right-0 md:w-1/2 md:h-full hidden bg-green-50 md:block pointer-events-none z-0">
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
            <div className="w-full md:w-1/2 h-fit bg-red-300 flex flex-col justify-center z-10">
                {["BLENDING", "CREATIVE", "VISION", "WITH", "INNOVATIVE THINKING."].map((line, i) => (
                    <h1
                        key={i}
                        ref={(el) => (linesRef.current[i] = el)}
                        className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight ${
                            line.includes("INNOVATIVE") ? "text-blue-600" : "text-black"
                        }`}
                    >
                        {line}
                    </h1>
                ))}
            </div>

            {/* Right - Service List */}
            <div className="w-full md:w-1/2 flex flex-col divide-y bg-yellow-200 divide-gray-300 z-10">
                {sections.map((service, index) => (
                    <Link
                        key={index}
                        to={`services/work/${service.id}`}
                        onClick={() => window.scrollTo(0, 0)}
                        ref={(el) => (serviceRefs.current[index] = el)}
                        className="flex items-center justify-between py-3 sm:py-4 md:py-5 group hover:bg-gray-50 px-2 cursor-pointer transition"
                        onMouseEnter={() => setHoverImg(service.image)}
                        onMouseLeave={() => setHoverImg(null)}
                    >
                        <span className="text-base sm:text-lg font-medium text-gray-800">
                            {service.title}
                        </span>
                        <div className="w-8 h-8 flex items-center justify-center rounded-full border border-black group-hover:bg-black group-hover:text-white transition">
                            <FiArrowUpRight className="text-lg" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default HeroNav;
