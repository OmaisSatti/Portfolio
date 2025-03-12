"use client";

import { useTheme } from "@/context/ThemeContext"; // Import ThemeContext
import Skills from "@/components/Skills";
import experiences from "@/data/experiences.json";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { MovingBorder } from "@/components/ui/moving-border";
export default function About() {
  const { darkMode } = useTheme(); // Get dark mode state

  return (
    <>
      <Skills />
      <section className={` bg-blue-200 w-full py-10 transition duration-300 ${darkMode ? "bg-[#020817] text-white" : "bg-white text-black"}`}>
        {/* Heading */}
        <h2 className={`text-center text-3xl font-bold mb-12 transition duration-300 ${darkMode ? "text-white" : "text-gray-900"}`}>
          Work <span className="text-teal-700">Experience</span>
        </h2>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 md:px-5 lg:px-10">
          {experiences.map((exp, index) => (
            <BackgroundGradient key={index} className="rounded-xl">
              <div
                key={index}
                className={`rounded-xl shadow-lg xl:p-10 xl:px-8 p-5 flex items-start justify-between border transition-transform transform hover:scale-105 duration-300 
                ${darkMode ? "bg-[#050B22] border-[#182660] text-white" : "bg-white border-gray-200 text-black"}
              `}
              >
                <img src={exp.image} alt={exp.title} className="w-20 h-20" />
                <div>
                  <h3 className={`xl:text-xl text-lg font-bold transition duration-300 ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {exp.title}
                  </h3>
                  <p className="text-teal-700 font-semibold my-3 text-base md:text-lg">{exp.company}</p>
                  <p className={`text-foreground/30 transition duration-300 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    {exp.duration}
                  </p>
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </section>
    </>
  );
}