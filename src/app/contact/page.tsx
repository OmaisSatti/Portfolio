"use client";

import { FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { useTheme } from "@/context/ThemeContext";

export default function Contact() {
  const { darkMode } = useTheme(); // Get dark mode state

  return (
    <div className={`flex flex-col md:flex-row justify-center items-center md:items-center p-5 px-0 md:p-10 gap-10 transition duration-300
      ${darkMode ? "bg-[#020817] text-white" : "bg-white text-black"}
    `}>

      {/* Contact Form */}
      <div className={`border rounded-lg p-6 md:p-10 w-full md:w-2/3 shadow-md transition duration-300
        ${darkMode ? "bg-[#050B22] border-[#182660] shadow-gray-700" : "bg-white border-gray-300 shadow-gray-300"}
      `}>
        <h2 className={`text-2xl font-bold ${darkMode ? "text-teal-400" : "text-teal-700"}`}>
          Let's work together
        </h2>
        <p className={`mt-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Let's connect and bring your ideas to life! Drop me a message below.
        </p>

        <form className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className={`border p-2 w-full rounded focus:outline-none focus:ring-0 transition
                ${darkMode ? "bg-[#050B22] text-white border-[#182660] focus:border-teal-400" : "bg-white text-black border-gray-300 focus:border-teal-700"}
              `}
            />
            <input
              type="text"
              placeholder="Last Name"
              className={`border p-2 w-full rounded focus:outline-none focus:ring-0 transition
                ${darkMode ? "bg-[#050B22] text-white border-[#182660] focus:border-teal-700" : "bg-white text-black border-gray-300 focus:border-teal-700"}
              `}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="email"
              placeholder="Email Address"
              className={`border p-2 w-full rounded focus:outline-none focus:ring-0 transition
                ${darkMode ? "bg-[#050B22] text-white border-[#182660] focus:border-teal-400" : "bg-white text-black border-gray-300 focus:border-teal-700"}
              `}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className={`border p-2 w-full rounded focus:outline-none focus:ring-0 transition
                ${darkMode ? "bg-[#050B22] text-white border-[#182660] focus:border-teal-400" : "bg-white text-black border-gray-300 focus:border-teal-700"}
              `}
            />
          </div>

          <select className={`border p-2 w-full mt-4 rounded transition
          ${darkMode ? "bg-[#050B22] text-white border-[#182660] focus:border-teal-700 hover:border-teal-700"
              : "bg-white text-gray-500 border-gray-300 focus:border-teal-700 hover:border-teal-700"}`}>
            <option>Select a service</option>
            <option>Mobile App Development</option>
            <option>Web Development</option>
            <option>Frontend Deve700lopment</option>
            <option>Backend Development</option>
          </select>


          <textarea
            placeholder="Type your message here."
            className={`border p-2 w-full mt-4 h-32 rounded focus:outline-none focus:ring-0 transition
              ${darkMode ? "bg-[#050B22] text-white border-[#182660] focus:border-teal-400" : "bg-white text-black border-gray-300 focus:border-teal-700"}
            `}
          ></textarea>

          <button className={`px-4 py-2 mt-4 rounded transition font-medium
            ${darkMode ? "bg-teal-600 text-white hover:bg-teal-700" : "bg-teal-700 text-white hover:bg-teal-800"}
          `}>
            Send message
          </button>
        </form>

      </div>

      {/* Contact Details */}
      <div className="w-full md:w-1/3 ml-20">
        <h2 className={`text-2xl font-bold ${darkMode ? "text-teal-400" : "text-teal-700"}`}>
          Get In Touch
        </h2>
        <div className="mt-4 space-y-10">

          {/* Phone Section */}
          <div className="flex items-center space-x-5">
            <div className={`p-3 rounded transition
              ${darkMode ? "bg-teal-600 text-white" : "bg-teal-700 text-white"}
            `}>
              <FaPhone size={24} />
            </div>
            <div className="flex flex-col">
              <p className={`font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Phone</p>
              <p className={`${darkMode ? "text-white" : "text-black"}`}>(+92) 340 8149083</p>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex items-center space-x-5">
            <div className={`p-3 rounded transition
              ${darkMode ? "bg-teal-600 text-white" : "bg-teal-700 text-white"}
            `}>
              <FiMail size={24} />
            </div>
            <div className="flex flex-col">
              <p className={`font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Email</p>
              <p className={`${darkMode ? "text-white" : "text-black"}`}>omaissatti42@gmail.com</p>
            </div>
          </div>

          {/* Location Section */}
          <div className="flex items-center space-x-5">
            <div className={`p-3 rounded transition
              ${darkMode ? "bg-teal-600 text-white" : "bg-teal-700 text-white"}
            `}>
              <MdLocationOn size={24} />
            </div>
            <div className="flex flex-col">
              <p className={`font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Address</p>
              <p className={`${darkMode ? "text-white" : "text-black"}`}>Rawalpindi, Pakistan</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
