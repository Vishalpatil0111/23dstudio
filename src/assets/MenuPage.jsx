import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { RiCloseLargeFill } from '@remixicon/react';
import { NavLink } from 'react-router-dom';

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
      className='w-full h-full fixed left-full flex flex-col md:flex-row pl-5 md:pl-20 z-50 overflow-y-auto md:overflow-hidden'
    >
      {/* Mobile Background Image */}
      <div className='block md:hidden absolute inset-0 z-0'>
        <img src="./images/menuproduct.jpg" alt="Menu BG" className='w-full h-full object-cover' />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* NavLinks Section */}
      <div
        className='w-full md:w-full h-screen relative p-5 flex flex-col justify-center items-start space-y-4 z-10'
        onClick={() => props.setMenu(false)}
      >
        {navLinks.map(({ to, label }, i) => (
          <NavLink
            key={to}
            to={to}
            ref={el => (linksRef.current[i] = el)}
            className={({ isActive }) =>
              `text-2xl md:text-4xl  font-bold transition-all duration-200 
               relative 
               ${isActive ? 'text-orange-500' : 'text-white'} 
               underline-hover`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Desktop Image + Close Button */}
      <div className='hidden md:block w-full md:w-2/3 h-screen bg-cover bg-center bg-[url("./images/menuproduct.jpg")]'>
        <button
          ref={closeRef}
          onClick={() => props.setMenu(false)}
          className='text-white absolute top-4 right-4 cursor-pointer z-10 p-2'
        >
          <RiCloseLargeFill size={28} />
        </button>
      </div>
    </div>
  );
}

export default MenuPage;
