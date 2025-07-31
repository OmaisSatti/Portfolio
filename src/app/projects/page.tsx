"use client";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";

export default function Projects() {
  return (
    <section className="py-10 transition-all duration-300 bg-background text-foreground">
      {/* Title */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">
          A small selection of{" "}
          <span className="text-primary">recent projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {projects.map((project, index) => (
          <Link key={index} href={`/projects/${project.id}`} passHref>
            <div className="cursor-pointer w-full rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 bg-background border dark:border-[#182660]">
              {/* Project Image */}
              <div className="relative w-full h-40"> {/* reduced height */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>

              {/* Project Details */}
              <div className="p-4"> {/* tighter padding */}
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>

                <p className="mt-2 text-sm text-foreground line-clamp-2">
                  {project.overview}
                </p>

                {/* Tech Stack Icons */}
                <div className="flex items-center gap-2 mt-3">
                  {project.techStack.map((tech, i) => (
                    <Image key={i} src={tech.icon} alt={tech.name} width={20} height={20} />
                  ))}
                </div>

                {/* View Details Button */}
                <div className="flex justify-end mt-4">
                  <span className="p-2 rounded-full bg-primary text-white flex items-center justify-center">
                    <FaLocationArrow size={12} />
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
