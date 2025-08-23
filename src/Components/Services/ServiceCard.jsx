import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonN from "../../Utils/ButtonN";
import { sections } from "../Data/sectionsData";

export default function ServiceCard() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl w-full py-14 px-6 space-y-12">
        {/* First row (3 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sections.slice(0, 3).map((service) => (
            <Card key={service.id} service={service} navigate={navigate} />
          ))}
        </div>

        {/* Second row (2 cards centered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 justify-center max-w-4xl mx-auto">
          {sections.slice(3).map((service) => (
            <Card key={service.id} service={service} navigate={navigate} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ service, navigate }) {
  return (
    <div className="relative group flex flex-col overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="w-full h-60 overflow-hidden">
        <img
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          src={service.image}
          alt={service.title}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h1 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {service.title}
        </h1>
        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
          {service.desc}
        </p>
      </div>

      {/* Button */}
      <div className="px-6 pb-6 inline-block group">
        <ButtonN
          text="View Work"
          color="simple"
          variant="primary"
          onClick={() => navigate(`/services/work/${service.id}`)}
        />
      </div>
    </div>
  );
}
