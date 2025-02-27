"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className={`flex justify-between items-center p-4 shadow-md transition duration-300
      ${darkMode ? "bg-gray-900 text-white shadow-gray-700" : "bg-white text-black shadow-gray-300"}
    `}>
      <Link href="/">
        <Image
          src="/images/logo1.svg" // Path to logo image
          alt="Omais Satti Logo"
          width={120} // Adjust as needed
          height={90} // Adjust as needed
          priority // Ensures faster loading
          className="ml-36"
        />
      </Link>

      {/* Navigation Links */}
      <ul className="flex gap-8 ml-auto">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <Link
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`transition font-medium
                ${pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                  ? "text-teal-500 border-teal-500 border-b-2 "
                  : darkMode ? "text-gray-300 hover:text-teal-400" : "text-black hover:text-teal-700"
                }`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Dark Mode Toggle & Hire Me Button */}
      <div className="flex gap-6 items-center mx-10">
        <button onClick={toggleDarkMode} className="transition">
          {darkMode ?
            <MdOutlineLightMode size={30} className="text-yellow-400" />
            :
            <MdOutlineDarkMode size={30} className="text-gray-800" />
          }
        </button>

        <button
          className={`px-3 py-1 border rounded-lg flex items-center gap-6 transition
            ${darkMode ? "border-teal-400 bg-teal-600 text-white hover:bg-teal-700"
              : "border-teal-700 bg-teal-700 text-white hover:bg-teal-800"}
          `}
        >
          <Link href="/contact" className="px-3 py-2 font-medium">
            Hire me
          </Link>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
