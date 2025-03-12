"use client";

import { LuDownload } from "react-icons/lu";
import { useTheme } from "@/context/ThemeContext";
import { socialLinks } from "@/data/social";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";

export default function Home() {
    const { darkMode } = useTheme();

    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = "/images/Omais-Satti-Resume.pdf"; // Path to CV in public folder
        link.download = "Omais_Satti_CV.pdf"; // File name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <main className={`flex flex-col items-center justify-center border-b-4 md:px-16 lg:px-32 shadow-lg shadow-black/35 pb-9 transition duration-300 
            ${darkMode ? "bg-[#020817] text-white" : "bg-white text-black"}`} >

            {/* Container for Image & Text */}
            <div className="container flex flex-col md:flex-row items-center justify-between h-full mx-auto xl:pb-10 xl:pt-8">

                {/* Left - Intro Section */}
                <div className="text-center xl:text-left order-2 xl:order-none mt-10 xl:mt-0">
                    <p className={`text-xl uppercase font-medium tracking-wide transition duration-300 
                        ${darkMode ? "text-white" : "text-black"}
                    `}>
                        React Native Mobile App Developer
                    </p>
                    <h1 className={`text-5xl mb-6 font-bold xl:text-8xl leading-tight transition duration-300 
                        ${darkMode ? "text-white" : "text-black"}
                    `}>
                        Hello I'm <br />
                        <span className="text-teal-700">Omais Satti</span>
                    </h1>
                    <p className={`max-w-[500px] mb-9 text-foreground/80 transition duration-300 
                        ${darkMode ? "text-gray-300" : "text-gray-600"}
                    `}>
                        Passionate developer crafting efficient and scalable solutions with expertise in
                        modern technologies and frameworks.
                    </p>

                    {/* Buttons & Icons */}
                    <div className="flex flex-col xl:flex-row items-center gap-6 mt-6">
                        <button
                            onClick={downloadCV}
                            className={`px-6 py-3 border rounded-lg font-semibold flex items-center gap-2 transition duration-300
                                ${darkMode ? "border-teal-700 text-white hover:bg-teal-600 hover:text-white" : "border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white"}
                            `}
                            aria-label="Download CV"
                        >
                            <span>Download CV</span>
                            <LuDownload className={`text-lg transition  duration-300 ${darkMode ? "text-white" : "text-black"}`} />
                        </button>

                        {/* Social Icons */}
                        <div className="flex gap-4 text-2xl transition duration-300">
                            {socialLinks.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300
                                        ${darkMode ? "border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white"
                                            : "border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white"}`}
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Right - Image Section */}
                <div className="relative flex justify-center items-center order-1">
                    {/* Profile Image */}
                    <img
                        src="/images/omais.jpeg"
                        alt="Omais Satti"
                        className="w-[298px] xl:w-[400px] h-[298px] xl:h-[400px] rounded-full object-cover shadow-lg transition duration-300"
                    />

                    {/* Animated Circle Around Image */}
                    <motion.svg
                        className="absolute w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"
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
                                rotate: [120, 360], // Rotate the circle
                            }}
                            transition={{
                                duration: 20, // Slow smooth rotation
                                repeat: Infinity,
                                repeatType: 'reverse'
                            }}
                        />
                    </motion.svg>
                </div>
            </div>

            {/* Stats */}
            <Stats darkMode={darkMode} />
        </main>
    )
}
