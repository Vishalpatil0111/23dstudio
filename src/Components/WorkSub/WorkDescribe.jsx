import React from "react";
import { useParams } from "react-router-dom";
import { sections } from "../Data/sectionsData";

export default function WorkDescribe() {
  const { id } = useParams();
  const section = sections.find((s) => s.id === id);

  if (!section) return <div className="p-10">Work not found</div>;

  return (
    <div className="w-full min-h-screen px-6 md:px-16 pt-28 font-[bituml]">
      {/* Section Header */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {section.title}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          {section.desc}
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-24">
        {section.projects.map((project, idx) => (
          <div
            key={idx}
            className="border-l-4 border-yellow-200 pl-6 md:pl-10 space-y-8"
          >
            {/* Project Header */}
            <div>
              <span className="inline-block bg-yellow-100 px-4 py-1 rounded-lg text-sm font-semibold mb-3">
                Project {idx + 1}
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold">
                {project.name}
              </h2>
              <p className="text-md text-gray-500 mt-2">{project.shortDesc}</p>
            </div>

            {/* Project Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {project.images.map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden shadow-md group"
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
