import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { RiCloseLargeFill } from '@remixicon/react';
import { NavLink } from 'react-router-dom';
import {
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa6';

function MenuPage(props) {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/work', label: 'Work' },
    { to: '/work-flow', label: 'WorkFlow' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/career', label: 'Career' },
    { to: '/contact', label: 'Contact' },
  ];

  const menuRef = useRef(null);
  const closeRef = useRef(null);
  const linksRef = useRef([]); // for NavLinks animation

  useGSAP(() => {
    if (props.menu) {
      gsap.to(menuRef.current, { left: 0, duration: 0.5, ease: 'power2.out' });
      gsap.fromTo(closeRef.current, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.4 });

      gsap.fromTo(
        linksRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    } else {
      gsap.to(closeRef.current, { opacity: 0, y: -20, duration: 0.2 });
      gsap.to(menuRef.current, { left: '100%', duration: 0.4 });
    }
  }, [props.menu]);

  return (
    <div
      ref={menuRef}
      className='w-full h-full fixed left-full z-50 overflow-hidden'
    >
      {/* Background Image */}
      <div className='absolute inset-0 bg-amber-400'>
        <img src="/images/menubg.png" alt="Menu Background" className='w-full h-full object-cover' />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Logo */}
      <div className='absolute top-4 left-4 z-10 w-12 h-12 sm:w-14 sm:h-14'>
        <img src="/images/logoblack.jpg" alt="Logo" className='w-full h-full object-cover' />
      </div>

      {/* Nav Links */}
      <div
        className='absolute inset-0 flex flex-col justify-center items-center z-10 space-y-6'
        onClick={() => props.setMenu(false)}
      >
        {navLinks.map(({ to, label }, i) => (
          <NavLink
            key={to}
            to={to}
            ref={el => (linksRef.current[i] = el)}
            className={({ isActive }) =>
              `text-2xl sm:text-3xl md:text-4xl font-bold transition-all duration-200 
               ${isActive ? 'text-orange-500' : 'text-white'} underline-hover`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Close Button */}
      <button
        ref={closeRef}
        onClick={() => props.setMenu(false)}
        className='text-white absolute top-6 right-4 cursor-pointer z-10 p-2'
      >
        <RiCloseLargeFill size={28} />
      </button>

      {/* Social Icons at Bottom Center */}
      <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-4 text-xl sm:text-2xl text-white'>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FaXTwitter />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="https://wa.me/917620703298" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
          <FaWhatsapp />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
}

export default MenuPage;
