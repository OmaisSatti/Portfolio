"use client";

import Skills from "@/components/Skills";
import experiences from "@/data/experiences.json";
import {ExperienceCard } from "@/components/ui/moving-border";

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
            <ExperienceCard
              key={index}
              exp={{
                image: exp.image,
                title: exp.title,
                company: exp.company,
                duration: exp.duration,
              }}
              borderRadius="1.75rem"
              className="bg-background text-foreground border-border"
              duration={7000}
            />
          ))}
        </div>
      </section>

    </>
  );
}