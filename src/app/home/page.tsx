"use client";

import { LuDownload } from "react-icons/lu";
import { useTheme } from "@/context/ThemeContext";
import stats from '@/data/stats.json'
import { socialLinks } from "@/data/social";

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
        <main className={`flex flex-col border-b-2 pb-5 items-center px-10 md:px-20 lg:px-40 min-h-full transition duration-300 
            ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>

            {/* Container for Image & Text */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full my-20">

                {/* Left - Intro Section */}
                <div className="max-w-xl">
                    <p className={`uppercase font-medium tracking-wide transition duration-300 
                        ${darkMode ? "text-teal-400" : "text-black"}
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
                                ${darkMode ? "border-teal-400 text-teal-400 hover:bg-teal-600 hover:text-white" : "border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white"}
                            `}
                            aria-label="Download CV"
                        >
                            <span>Download CV</span>
                            <LuDownload className={`text-lg transition  duration-300  ${darkMode ? "text-white" : "text-black"}`} />
                        </button>

                        {/* Social Icons */}
                        <div className="flex gap-4 text-2xl transition duration-300">
                            {socialLinks.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300
                                        ${darkMode ? "border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900"
                                            : "border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white"}`}
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Right - Image Section */}
                <div className="relative mt-12 md:mt-0 flex justify-center">
                    <img
                        src="/images/omais.jpeg"
                        alt="Omais Satti"
                        className="w-96 md:w-96 h-96 md:h-96 rounded-lg object-cover shadow-lg transition duration-300"
                    />
                </div>
            </div>

            {/* Stats */}
            <div className="flex justify-between items-center w-full">
                {stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <span className={`text-6xl font-extrabold transition duration-300 
                            ${darkMode ? "text-white" : "text-black"}`}>
                            {stat.value}
                        </span>
                        <p className={`text-lg font-medium leading-tight max-w-[120px] transition duration-300 
                            ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </main>
    )
}
