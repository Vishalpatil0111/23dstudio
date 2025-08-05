import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaLinkedin } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const formRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.from(formRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: formRef.current,
        start: 'top 80%',
      },
    });

    cardRefs.current.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        delay: i * 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
        },
      });
    });
  }, []);

  return (
    <div className="min-h-screen w-full bg-white px-4 sm:px-8 md:px-16 py-15 flex flex-col md:flex-row gap-10 items-start">
      {/* Left - Contact Form */}
      <div ref={formRef} className="w-full md:w-1/2  p-6 sm:p-8 rounded-2xl shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
        <p className="text-gray-500 text-sm">
          We'd love to hear from you! Whether it's a new project or just a hello.
        </p>

        <form onSubmit={(e) => {
          e.preventDefault();
          alert('Message sent! (Not implemented)');
        }} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
            Send Message
          </button>
        </form>
      </div>

      {/* Right - Bento Cards */}
      <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          {
            title: 'Email',
            icon: <FaEnvelope className="text-blue-500 text-xl" />,
            info: 'studio@example.com',
            link: 'mailto:studio@example.com',
          },
          {
            title: 'Phone',
            icon: <FaPhoneAlt className="text-green-500 text-xl" />,
            info: '+1 234 567 890',
            link: 'tel:+1234567890',
          },
          {
            title: 'Instagram',
            icon: <FaInstagram className="text-pink-500 text-xl" />,
            info: '@yourstudio',
            link: 'https://instagram.com/yourstudio',
          },
          {
            title: 'LinkedIn',
            icon: <FaLinkedin className="text-blue-700 text-xl" />,
            info: '/company/yourstudio',
            link: 'https://linkedin.com/company/yourstudio',
          },
        ].map((card, i) => (
          <a
            key={i}
            ref={el => cardRefs.current[i] = el}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-800 hover:bg-zinc-900 transition p-5 rounded-xl flex flex-col gap-2 shadow-sm"
          >
            <div>{card.icon}</div>
            <h3 className="text-lg font-medium text-zinc-100">{card.title}</h3>
            <p className="text-zinc-100 text-sm break-words">{card.info}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
