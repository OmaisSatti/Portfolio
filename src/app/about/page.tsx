"use client";

import Skills from "@/components/Skills";
import experiences from "@/data/experiences.json";
import { BackgroundGradient } from "@/components/ui/background-gradient";
export default function About() {

  return (
    <>
      <Skills />
      <section className="w-full py-10 transition duration-300 bg-background text-foreground">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold mb-12 transition duration-300 text-foreground">
          Work <span className="text-primary">Experience</span>
        </h2>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 md:px-5 lg:px-10">
          {experiences.map((exp, index) => (
            <BackgroundGradient key={index} className="rounded-xl">
              <div key={index}
                className="rounded-xl w-full shadow-lg xl:p-10 xl:px-6 p-5 flex items-center gap-4 lg:gap-6 border 
                         transition-transform transform hover:scale-105 duration-300 bg-background border-border
                          text-foreground">
                {/* Experience Image */}
                <img src={exp.image} alt={exp.title} className="w-20 h-20 flex-shrink-0" />

                {/* Experience Details */}
                <div>
                  <h3 className="xl:text-xl text-lg font-bold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-semibold mt-2 text-base md:text-lg">{exp.company}</p>
                  <p className="text-gray-500 mt-2">{exp.duration}</p>
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>

      </section>

    </>
  );
}