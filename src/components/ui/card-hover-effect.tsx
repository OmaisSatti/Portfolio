import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const HoverEffect = ({
  skills,
  className,
}: {
  skills: {
    name: string;
    src: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-center items-center px-10 py-10",
        className
      )}
    >
      {skills.map((skill, idx) => (
        <div
          key={idx}
          className={`relative group flex flex-col border items-center p-5 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 
            text-foreground bg-background border-border`}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Hover Effect */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full rounded-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  backgroundColor:"var(--overlay-color)",
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          {/* Skill Image */}
          <Image
            src={skill.src}
            alt={skill.name}
            width={50}
            height={50}
            className="relative z-10"
          />

          {/* Skill Name */}
          <p className="text-sm mt-3 font-medium relative z-10">{skill.name}</p>
        </div>
      ))}
    </div>
  );
};
