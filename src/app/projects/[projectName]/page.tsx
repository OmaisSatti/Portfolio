'use client'
import Image from "next/image";
import { notFound } from "next/navigation";
import projects from "@/data/projects.json";
import { useTheme } from "@/context/ThemeContext";

export default function ProjectPage({ params }: { params: { projectName: string } }) {
    const { darkMode } = useTheme(); // Get dark mode state

    // Find project by title (case insensitive)
    const project = projects.find(
        (p) => p.title.toLowerCase() === decodeURIComponent(params.projectName.toLowerCase())
    );

    // If project not found, show 404
    if (!project) {
        console.error(`Project not found: ${params.projectName}`);
        return notFound();
    }

    return (
        <div className={`flex items-center justify-center min-h-screen px-6 md:px-20 transition-all duration-300 
            ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}`}>

            <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl">
                {/* Left Side - Text */}
                <div>
                    <h1 className={`text-4xl font-bold ${darkMode ? "text-teal-400" : "text-teal-800"}`}>
                        {project.title}
                    </h1>
                    <p className={`mt-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        This project showcases a cutting-edge solution designed to
                        streamline workflows and enhance productivity. Built with modern frameworks,
                        it ensures high performance and scalability. The intuitive user interface makes
                        navigation seamless, providing an excellent user experience.
                        Security and efficiency are at the core, making it a reliable choice for businesses.
                    </p>

                    {/* Dummy Fixed Info */}
                    <ul className={`mt-6 space-y-3 text-lg ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
                        <li>✅ Built with modern technologies</li>
                        <li>🔹 Highly scalable and efficient</li>
                        <li>🚀 Optimized for performance and speed</li>
                        <li>🛠️ Easy customization and integration</li>
                        <li>📱 Fully responsive design</li>
                    </ul>
                </div>

                {/* Right Side - Image */}
                <div className="relative w-full">
                    <Image
                        src={project?.image}
                        alt={project.title}
                        width={800}
                        height={500}
                        className="rounded-lg shadow-lg"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
