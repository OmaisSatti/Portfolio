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
        <main className={`flex flex-col items-center px-10 md:px-20 lg:px-40 min-h-full transition duration-300 
            ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>

            {/* Container for Image & Text */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full my-10">

                {/* Left - Intro Section */}
                <div className="max-w-xl">
                    <p className={`uppercase font-medium tracking-wide transition duration-300 
                        ${darkMode ? "text-white" : "text-black"}
                    `}>
                        React Native Mobile App Developer
                    </p>
                    <h1 className={`text-8xl md:text-8xl font-bold mt-2 leading-tight transition duration-300 
                        ${darkMode ? "text-white" : "text-black"}
                    `}>
                        Hello I'm <br />
                        <span className="text-teal-700">Omais Satti</span>
                    </h1>
                    <p className={`mt-4 text-lg leading-relaxed transition duration-300 
                        ${darkMode ? "text-gray-300" : "text-gray-600"}
                    `}>
                        Passionate developer crafting efficient and scalable solutions with expertise in
                        modern technologies and frameworks.
                    </p>

                    {/* Buttons & Icons */}
                    <div className="flex items-center gap-6 mt-6">
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
                <div className="relative flex justify-center items-center">
                    {/* Profile Image */}
                    <img
                        src="/images/omais.jpeg"
                        alt="Omais Satti"
                        className="w-96 md:w-96 h-96 md:h-96 rounded-full object-cover shadow-lg transition duration-300"
                    />

                    {/* Animated Circle Around Image */}
                    <motion.svg
                        className="absolute w-[300px] h-[300px] md:w-[506px] md:h-[506px]"
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
