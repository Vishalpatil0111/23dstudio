import { useGSAP } from '@gsap/react'
import { RiCloseLargeFill } from '@remixicon/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'


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

  const menuRef = useRef(null)
  const closeRef = useRef(null);
  const tl = gsap.timeline();

  useGSAP(() => {
    if (props.menu) {
      tl.to(menuRef.current, {
        left: 0

      }).fromTo(closeRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.4 });

    }
    else {
      tl.to(closeRef.current, { opacity: 0, y: -20, duration: 0.2 })
        .to(menuRef.current, { left: '100%', duration: 0.4 });
    }

  }, [props.menu])

  return (

    <div
      ref={menuRef}
      className='w-full h-full fixed left-full flex flex-col md:flex-row bg-black z-50 overflow-y-auto md:overflow-hidden'
    >
      {/* Mobile Background Image */}
      <div className='block md:hidden absolute inset-0 z-0'>
        <img
          src="./images/menuproduct.jpg"
          alt="Menu Background"
          className='w-full h-full object-cover'
        />
        {/* Optional overlay for contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* NavLinks Section */}
      <div
        className='w-full md:w-full h-screen relative p-5 flex flex-col justify-center items-start space-y-4  z-10'
        onClick={() => props.setMenu(false)}
      >
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className="text-xl  md:text-4xl pl-8 font-bold text-white hover:text-orange-500 transition-all duration-200"
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Image Section for Desktop */}
      <div
        className='hidden md:block w-full md:w-2/3 h-screen bg-cover bg-center bg-[url("./images/menuproduct.jpg")]'
      >
        <button
          ref={closeRef}
          onClick={() => props.setMenu(false)}
          className='text-white absolute top-4 right-4 cursor-pointer z-10 p-2'
        >
          <RiCloseLargeFill size={28} />
        </button>
      </div>
    </div>

  )

}

export default MenuPage
