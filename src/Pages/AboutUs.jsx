import React from "react";

import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaCheckCircle,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";
import ButtonN from '../Utils/ButtonN'
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate()
  return (
    <div className="w-full font-[bitum]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/showcase7.jpg"
            alt="About Us"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            We are a design-led studio building experiences that inspire and
            connect.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/images/showcase4.jpg"
            alt="Our Studio"
            className="shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded with a vision to transform ideas into impactful experiences,
            we specialize in delivering innovative solutions that bring value
            and creativity to every project.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our approach blends strategy, design, and technology to create
            solutions that not only look great but also drive results.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50 px-6 md:px-25">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower brands and individuals by delivering designs that
              inspire, communicate, and endure.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <FaLightbulb /> Creativity
              </li>
              <li className="flex items-center gap-2">
                <FaUsers /> Collaboration
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle /> Excellence
              </li>
              <li className="flex items-center gap-2">
                <FaPencilRuler /> Integrity
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Jane Doe",
              role: "Creative Director",
              img: "/images/team1.jpg",
            },
            {
              name: "John Smith",
              role: "Lead Designer",
              img: "/images/team2.jpg",
            },
            {
              name: "Emily Johnson",
              role: "Project Manager",
              img: "/images/team3.jpg",
            },
          ].map((member, i) => (
            <div key={i} className="bg-white shadow-md overflow-hidden group">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-60 object-cover group-hover:scale-105 transition "
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach / Process with Icons */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Approach
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center ">
          {[
            {
              icon: <FaSearch size={30} />,
              step: "Discover",
              desc: "Understanding needs and goals.",
            },
            {
              icon: <FaPencilRuler size={30} />,
              step: "Design",
              desc: "Crafting creative solutions.",
            },
            {
              icon: <FaCode size={30} />,
              step: "Develop",
              desc: "Bringing ideas to life.",
            },
            {
              icon: <FaCheckCircle size={30} />,
              step: "Deliver",
              desc: "Ensuring impactful results.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3"
            >
              <div className="p-4 bg-gray-100 rounded-full transition-transform duration-300 transform hover:rotate-12 hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold">{item.step}</h3>
              <p className="text-gray-600 text-sm max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {[
            { number: "20+", label: "Projects Delivered" },
            { number: "5+", label: "Years Experience" },
            { number: "20+", label: "Global Clients" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-10 bg-gray-100 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-3xl font-bold">{stat.number}</h3>
              <p className="text-base text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s build something great together.
        </h2>
        <div className="group"><ButtonN onClick={() => navigate('/contact')} text="Contact Us" color="white" variant="primary" /></div>
      </section>
    </div>
  );
}
