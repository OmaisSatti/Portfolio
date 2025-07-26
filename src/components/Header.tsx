"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <header className="py-8 xl:py-10 bg-background relative">
      <div className="container flex justify-between items-center mx-auto px-4 xl:px-10 text-foreground">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Omais Satti Logo"
            width={120}
            height={80}
            className="w-[120px] h-20"
          />
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <nav className="flex gap-10">
            {navItems.map((item, index) => {
              const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = pathname === href;
              return (
                <Link
                  key={index}
                  href={href}
                  className={`transition font-semibold border-b-2 ${isActive
                      ? "text-primary border-primary"
                      : "text-foreground hover:text-primary border-none"
                    }`}
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          <div className="flex gap-8">
            <button onClick={toggleDarkMode} className="transition">
              {darkMode ? (
                <MdOutlineLightMode size={25} className="text-white" />
              ) : (
                <MdOutlineDarkMode size={25} className="text-gray-800" />
              )}
            </button>
            <Link href="/contact">
              <button className="px-3 py-1 border rounded-lg flex items-center gap-6 text-white bg-primary border-primary hover:border-teal-500 hover:bg-teal-500">
                <span className="px-3 py-2 font-medium">Hire me</span>
              </button>
            </Link>
          </div>
        </div>

        <button className="xl:hidden text-primary" onClick={() => setIsOpen(true)}>
          <CiMenuFries size={35} />
        </button>
      </div>

      {isOpen && (
        <div
          role="dialog"
          className="fixed top-0 right-0 h-full w-[80%] sm:w-80 bg-background z-50 p-4 transition-transform transform translate-x-0"
        >
          <div className="flex w-full items-center justify-between py-10 px-5">
            <button onClick={toggleDarkMode} className="transition flex items-center">
              {darkMode ? (
                <MdOutlineLightMode size={25} className="text-white" />
              ) : (
                <MdOutlineDarkMode size={25} className="text-gray-800" />
              )}
            </button>
            <button className="text-2xl" onClick={() => setIsOpen(false)}>
              <IoClose className="text-foreground" />
            </button>
          </div>

          <div className="flex justify-center items-center w-full py-10">
            <Image
              src="/images/logo.png"
              alt="Omais Satti Logo"
              width={140}
              height={100}
              className="w-[140px] h-30"
            />
          </div>

          <nav className="flex flex-col gap-8 items-center my-10">
            {navItems.map((item, index) => {
              const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = pathname === href;
              return (
                <Link
                  key={index}
                  href={href}
                  className={`transition font-semibold text-xl border-b-2 ${isActive
                      ? "text-primary border-primary"
                      : "text-foreground hover:text-primary border-none"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
