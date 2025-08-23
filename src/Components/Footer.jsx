import React, { useState } from 'react';
import {
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import PrivacyPolicyModal from './Privacy';
import TermsAndConditions from './Terms';


export default function Footer() {
  const navigate = useNavigate();
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openTerms, setOpenTerms] = useState(false)

  return (
    <footer className="w-full font-[bituml] mt-5 md:mt-10 px-6 py-10 ">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img
          className="w-20 h-20 object-contain"
          src="/images/Logob.png"
          alt="logo"
        />
      </div>

      {/* Tagline */}
      <p className="text-center text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
        We transform visionary concepts into impactful realities, combining
        innovation with results-driven strategy at{' '}
        <span className="font-bold text-white">23D Studio</span>.
      </p>

      {/* Contact & Careers */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
        <p
          onClick={() => navigate('/career')}
          className="cursor-pointer hover:scale-125 transition"
        >
          Careers
        </p>
        <div className="text-center sm:text-right space-y-1 text-sm sm:text-base">
          <p className="font-semibold text-white">Nashik, Maharashtra, India</p>
          <p>+91 7620703298 &nbsp; | &nbsp; +91 9021507499</p>
          <p className="break-all">www.23dstudio.com</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-5 text-xl sm:text-2xl mb-6">
        {[
          { Icon: FaLinkedin, href: 'https://www.linkedin.com', color: 'hover:text-blue-500' },
          { Icon: FaXTwitter, href: 'https://twitter.com', color: 'hover:text-gray-200' },
          { Icon: FaFacebook, href: 'https://facebook.com', color: 'hover:text-blue-700' },
          { Icon: FaInstagram, href: 'https://instagram.com', color: 'hover:text-pink-500' },
          { Icon: FaWhatsapp, href: 'https://wa.me/917620703298', color: 'hover:text-green-500' },
          { Icon: FaYoutube, href: 'https://youtube.com', color: 'hover:text-red-500' },
        ].map(({ Icon, href, color }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${color} transition-transform transform hover:scale-125`}
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-700 pt-4">
        <h3 className="text-center sm:text-end text-xs sm:text-sm text-gray-400">
          <button
            onClick={() => setOpenPrivacy(true)}
            className="hover:underline hover:text-gray-800 transition cursor-pointer"
          >
            Privacy Policy
          </button>
          &nbsp; | &nbsp;
          <button
            onClick={() => setOpenTerms(true)}
            className="hover:underline hover:text-gray-800 transition cursor-pointer"
          >
            Terms & Conditions
          </button>
        </h3>
      </div>

      {/* Inject Modal */}
      {openPrivacy && <PrivacyPolicyModal open={openPrivacy} setOpen={setOpenPrivacy} />}
      {openTerms && <TermsAndConditions open={openTerms} setOpen={setOpenTerms} />}
    </footer>
  );
}
