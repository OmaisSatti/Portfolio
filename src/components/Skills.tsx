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
    </section>
  );
};

export default Skills;

