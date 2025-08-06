import React from 'react';
import {
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="w-full px-4 py-6  text-gray-800">

      <div className="flex justify-center mb-4">
        <img className="w-20 h-20 object-contain" src="/images/Logo.png" alt="logo" />
      </div>


      <p className="text-center text-base sm:text-lg mb-6 tracking-wide">
        We transform visionary concepts into impactful realities, combining innovation with results-driven strategy at <br />
        <span className="font-bold">23D Studio</span>
      </p>


      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-4 text-sm sm:text-base">
        <p className="underline cursor-pointer">Careers</p>
        <div className="text-center sm:text-right tracking-wide">
          <p>Nashik, Maharashtra, India</p>
          <p>+91 7620703298 &nbsp; | &nbsp; +91 9021507499</p>
          <p>www.23dstudio.com</p>
        </div>
      </div>


      <div className="flex justify-center gap-4 text-xl sm:text-2xl mb-4">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
          <FaXTwitter />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="https://wa.me/917620703298" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
          <FaWhatsapp />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
          <FaYoutube />
        </a>
      </div>


      <h3 className="text-center sm:text-end text-xs sm:text-sm">
        Privacy Policy &nbsp; | &nbsp; Terms and Conditions
      </h3>
    </footer>
  );
}

export default Footer;
