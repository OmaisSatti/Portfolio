"use client";

import { LuDownload } from "react-icons/lu";
import { socialLinks } from "@/data/social";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/document/Omais-Satti-Resume.pdf";
    link.download = "Omais-Satti-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main
      className={`flex flex-col items-center justify-center md:px-16 lg:px-32 shadow-lg shadow-teal-700/15 pb-9 transition duration-300 bg-background text-foreground`}
    >
      {/* Container for Image & Text */}
      <div className="container flex flex-col md:flex-row items-center justify-between h-full mx-auto xl:pb-10 xl:pt-8">
        {/* Left - Intro Section */}
        <div className="text-center xl:text-left order-2 xl:order-none mt-10 xl:mt-0">
          <p
            className={`text-xl uppercase font-medium tracking-wide transition duration-300 text-foreground`}
          >
            React Native Mobile App Developer
          </p>

          <h1
            className={`text-5xl mb-6 font-bold xl:text-8xl leading-tight transition duration-300 text-foreground`}
          >
            Hello I&rsquo;m <br />
            <span className="text-primary">Omais Satti</span>
          </h1>

          <p className="max-w-[500px] mb-9 text-foreground/80 transition duration-300 text-foreground/80">
            Passionate developer crafting efficient and scalable solutions with
            expertise in modern technologies and frameworks.
          </p>

          {/* Buttons & Icons */}
          <div className="flex flex-col xl:flex-row items-center gap-6 mt-6">
            <button
              onClick={downloadCV}
              className={`px-6 py-3 border rounded-lg font-semibold flex items-center gap-2 transition duration-300
                                border-primary text-foreground hover:bg-primary hover:text-foreground`}
              aria-label="Download CV"
            >
              <span>Download CV</span>
              <LuDownload className="text-lg transition duration-300 text-foreground" />
            </button>

            {/* Social Icons */}
            <div className="flex gap-4 text-2xl transition duration-300">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300
                                    border-primary text-primary hover:bg-primary hover:text-white`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Image Section */}
        <div className="relative flex justify-center items-center order-1">
          {/* Profile Image - object-[50%_20%] positions image to show full head */}
          <Image
            src="/images/pngs/omais.png"
            alt="Omais Satti"
            width={400}
            height={400}
            className="relative z-10 w-[298px] xl:w-[400px] h-[298px] xl:h-[400px] rounded-full object-cover object-[50%_20%] shadow-lg transition duration-300"
          />

          {/* Animated Circle Around Image - positioned behind */}
          <motion.svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] xl:w-[430px] xl:h-[430px] z-0 pointer-events-none"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#0f766e"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </div>
      </div>

      {/* Stats */}
      <Stats />
    </main>
  );
}