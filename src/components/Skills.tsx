"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext"; // Import ThemeContext
import skills from '@/data/skills.json';
import { HoverEffect } from "./ui/card-hover-effect";

const Skills = () => {
  const { darkMode } = useTheme(); // Get dark mode state

  return (
    <section className={`pt-20 transition duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className={`text-3xl font-bold transition duration-300 ${darkMode ? "text-white" : "text-gray-800"}`}>
          Technical <span className="text-teal-700">skills</span>
        </h2>
      </div>

      {/* Skills Grid */}

      <HoverEffect skills={skills} darkMode={darkMode}/>
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-10 justify-center items-center px-10">
      
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 rounded-lg shadow-sm transition-transform transform hover:scale-105 duration-300 
              ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}
            `}
          >
            <Image src={skill.src} alt={skill.name} width={50} height={50} />
            <p className="mt-3 font-medium">{skill.name}</p>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Skills;

