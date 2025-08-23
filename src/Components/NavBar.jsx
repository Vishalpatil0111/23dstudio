import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ButtonN from "../Utils/ButtonN";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActiveLink = (path) => {
    if (path === "/services" && location.pathname.startsWith("/services/work")) {
      return false;
    }
    return location.pathname === path;
  };

  const links = [
    { to: "/", label: "Home" }, 
    { to: "/services", label: "Services" },
    { to: "/work", label: "Work" },
    { to: "/about", label: "About Us" },
    { to: "/career", label: "Career" },
  ];

  const socials = [
    { Icon: FaLinkedin, href: "https://www.linkedin.com", color: "hover:text-blue-500" },
    { Icon: FaXTwitter, href: "https://twitter.com", color: "hover:text-gray-400" },
    { Icon: FaFacebook, href: "https://facebook.com", color: "hover:text-blue-700" },
    { Icon: FaInstagram, href: "https://instagram.com", color: "hover:text-pink-500" },
    { Icon: FaWhatsapp, href: "https://wa.me/917620703298", color: "hover:text-green-500" },
    { Icon: FaYoutube, href: "https://youtube.com", color: "hover:text-red-500" },
  ];

  return (
    <div className="w-full fixed font-[bituml] bg-white top-0 left-0 z-20 px-6 md:px-10 py-3 tracking-wide flex justify-between items-center shadow-sm">
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="md:w-15 md:h-14 w-13 h-13 bg-center bg-cover bg-[url('/images/Logob.png')] cursor-pointer"
      ></div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex w-1/2 cursor-pointer h-fit text-md items-center justify-between">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={`transition-colors ${
              isActiveLink(link.to) ? "text-blue-500 font-bold" : "text-[var(--color-text)]"
            } hover:text-blue-400`}
          >
            {link.label}
          </NavLink>
        ))}
        <NavLink to="/contact">
          <div className="group">
            <ButtonN text="Contact Us" color="black" variant="primary" />
          </div>
        </NavLink>
      </nav>

      {/* Mobile Menu Button (Hamburger) */}
      <button
        className="md:hidden text-3xl text-gray-700 transition-transform duration-500"
        onClick={() => setMenuOpen(true)}
      >
        <HiMenu />
      </button>

      {/* Mobile Dropdown */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-1/2 h-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-30 flex flex-col justify-between ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button with Slide-down Animation */}
        <button
          className={`absolute top-5 right-5 text-3xl text-gray-700 transform transition-all duration-500 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          <HiX />
        </button>

        {/* Menu Links */}
        <div className="flex flex-col items-center gap-6 mt-20 text-2xl font-medium">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`${
                isActiveLink(link.to) ? "text-blue-500 font-bold" : "text-gray-700 font-normal"
              } hover:text-blue-400 transition`}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            <ButtonN text="Contact Us" color="black" variant="primary"/>
          </NavLink>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-10">
          {socials.map(({ Icon, href, color }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl text-gray-600 transition ${color}`}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
