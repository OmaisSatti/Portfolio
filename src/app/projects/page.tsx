"use client";
import Image from "next/image";
import projects from "@/data/projects.json";
import { useTheme } from "@/context/ThemeContext";
import { FaLocationArrow } from "react-icons/fa";

export default function Projects() {
  const { darkMode } = useTheme();

  return (
    <section className={`py-10 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      {/* Title */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">
          A small selection of{" "}
          <span className="text-teal-700">recent projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`w-full rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105
        ${darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"}
      `}
          >
            {/* Project Image */}
            <div className="relative w-full h-64">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                {project.title}
              </h3>
              <p className={`mt-3 text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {project.description}
              </p>

              {/* Tech Stack Icons */}
              <div className="flex items-center gap-4 mt-4">
                {project.techStack.map((tech, i) => (
                  <Image key={i} src={tech.icon} alt={tech.name} width={28} height={28} />
                ))}
              </div>

              {/* External Link */}
              <div className="flex justify-end mt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 ${darkMode ? "bg-teal-500 text-white hover:bg-teal-600" : "bg-gray-200 hover:bg-gray-300 text-gray-700"}`}
                >
                  <FaLocationArrow />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>


    </section>
  );
}
