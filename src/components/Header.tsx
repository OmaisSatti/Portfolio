"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  const pathname = usePathname();
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-8 xl:py-10 bg-background relative">
      <div className="container flex justify-between items-center mx-auto px-4 xl:px-10 text-foreground">
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="Omais Satti Logo"
            className="w-[120px] h-20"
          />
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <nav className="flex gap-10">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <Link
                key={index}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`transition font-semibold border-b-2
                  ${pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                    ? "text-primary border-primary"
                    : "text-foreground hover:text-primary border-none"
                  }`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex gap-8">
            <button onClick={toggleDarkMode} className="transition">
              {darkMode ? (
                <MdOutlineLightMode size={25} className="text-white" />
              ) : (
                <MdOutlineDarkMode size={25} className="text-gray-800" />
              )}
            </button>
            <button
              className={`px-3 py-1 border rounded-lg flex items-center gap-6 text-white bg-primary border-primary hover:bg-teal-500`}
            >
              <Link href="/contact" className="px-3 py-2 font-medium">
                Hire me
              </Link>
            </button>
          </div>
        </div>
        <button className="xl:hidden text-primary" onClick={() => setIsOpen(true)}>
          <CiMenuFries size={40}/>
        </button>
      </div>

      {isOpen && (
        <div
          role="dialog"
          className="fixed top-0 right-0 h-full w-[80%] sm:w-80 bg-background z-50 p-4 transition-transform transform translate-x-0"
        >
          <div className="flex w-full items-center justify-between py-10 px-5">
            <button
              onClick={toggleDarkMode}
              className="transition flex items-center"
            >
              {darkMode ? (
                <MdOutlineLightMode size={25} className="text-white" />
              ) : (
                <MdOutlineDarkMode size={25} className="text-gray-800" />
              )}
            </button>
            <button className="text-2xl" onClick={() => setIsOpen(false)}>
              <IoClose className="text-foreground"/>
            </button>
          </div>
          <div className="flex justify-center items-center w-full py-10">
            <img
              src="/images/logo.png"
              alt="Omais Satti Logo"
              className="w-[180px] h-40"
            />
          </div>
          <nav className="flex flex-col gap-8 items-center my-10"> {/* Center the links */}
            {["Home", "About", "Projects", "Contact"].map((item, index) => ( // Changed "About" to "Resume"
              <Link
                key={index}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`transition font-semibold text-xl border-b-2
                  ${pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                    ? "text-primary border-primary"
                    : "text-foreground hover:text-primary border-none"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;