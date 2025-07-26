"use client";
import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects.json";
import { FaLocationArrow } from "react-icons/fa";

export default function Projects() {
  return (
    <section className={`py-10 transition-all duration-300 bg-background text-foreground`}>
      {/* Title */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">
          A small selection of{" "}
          <span className="text-primary">recent projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        {projects.map((project, index) => (
          <Link key={index} href={`/projects/${project.title}`} passHref>
            <div
              className="cursor-pointer w-full rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 bg-background border dark:border-[#182660]"
            >
              {/* Project Image */}
              <div className="relative w-full h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className={"text-2xl font-bold text-foreground"}>
                  {project.title}
                </h3>
                <p className={"mt-3 text-base text-foreground"}>
                  {project.description}
                </p>

                {/* Tech Stack Icons */}
                <div className="flex items-center gap-2 mt-4">
                  {project.techStack.map((tech, i) => (
                    <Image key={i} src={tech.icon} alt={tech.name} width={25} height={25} />
                  ))}
                </div>


                {/* View Details Button */}
                <div className="flex justify-end">
                  <span
                    className="p-2 rounded-full transition-all duration-300 flex items-center bg-primary text-white">
                    <FaLocationArrow size={14} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
