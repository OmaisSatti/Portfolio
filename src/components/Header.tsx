"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  const pathname = usePathname();
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  return (
    <header className={`py-8 xl:py-10 ${darkMode ? "bg-[#020817]" : "bg-white"}`}>
      <div className={`container flex justify-between items-center mx-auto px-4 xl:px-10
      ${darkMode ? "text-white" : " text-black"}
    `}>
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="Omais Satti Logo"
            className="w-[120px] h-20"
          />
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          {/* Navigation Links */}
          <nav className="flex gap-10">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`transition font-semibold
                ${pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                    ? "text-teal-700 border-teal-700 border-b-2 "
                    : darkMode ? "text-gray-300 hover:text-teal-700" : "text-black hover:text-teal-700"
                  }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Dark Mode Toggle & Hire Me Button */}
          <div className="flex gap-8">
            <button onClick={toggleDarkMode} className="transition">
              {darkMode ?
                <MdOutlineLightMode size={25} className="text-white" />
                :
                <MdOutlineDarkMode size={25} className="text-gray-800" />
              }
            </button>

            <button
              className={`px-3 py-1 border rounded-lg flex items-center gap-6 transition
            ${darkMode ? "border-teal-700 bg-teal-700 text-white hover:bg-teal-400"
                  : "border-teal-700 bg-teal-700 text-white hover:bg-teal-800"}
          `}
            >
              <Link href="/contact" className="px-3 py-2 font-medium">
                Hire me
              </Link>
            </button>

          </div>
        </div>
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose /> : <CiMenuFries />}
        </button>

      </div>
    </header>
  );
};

export default Header;
