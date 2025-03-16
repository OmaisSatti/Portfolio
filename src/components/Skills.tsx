"use client";

import React from "react";
import skills from '@/data/skills.json';
import { HoverEffect } from "./ui/card-hover-effect";

const Skills = () => {

  return (
    <section className={`pt-20 transition duration-300 bg-background text-foreground`}>
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className={`text-3xl font-bold transition duration-300 text-foreground`}>
          Technical <span className="text-primary">skills</span>
        </h2>
      </div>

      {/* Skills Grid */}

      <HoverEffect skills={skills} />
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

