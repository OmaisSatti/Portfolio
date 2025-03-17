"use client";

import { FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

export default function Contact() {
  return (
    <div
      className={`flex flex-col md:flex-row justify-center items-center md:items-center p-5 md:p-10 gap-10 bg-background text-foreground`}
    >
      {/* Contact Form */}
      <div className={"border rounded-xl p-6 md:p-10 w-full md:w-2/3 shadow-md transition duration-300 bg-background border-primary"}>
        <h2 className={"text-2xl font-bold text-primary"}>Let's work together</h2>
        <p className={"mt-2 text-foreground"}>
          Let's connect and bring your ideas to life! Drop me a message below.
        </p>

        <form className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 h-[48px] w-full rounded focus:outline-none focus:ring-0 transition bg-background text-foregroun border-border focus:border-primary"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 h-[48px] w-full rounded focus:outline-none focus:ring-0 transition bg-background text-foreground border-border focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <input
              type="email"
              placeholder="Email Address"
              className="border p-2 h-[48px] w-full rounded focus:outline-none focus:ring-0 transition bg-background text-foreground border-border focus:border-primary"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border p-2 h-[48px] w-full rounded focus:outline-none focus:ring-0 transition bg-background text-foreground border-border focus:border-primary"
            />
          </div>

          <select
            className="border p-2 h-[48px] w-full mt-4 rounded transition bg-background border-border text-foreground 
                      focus:border-primary focus:ring-2 focus:ring-primary outline-none placeholder:text-gray-200"
          >
            <option className="bg-background text-foreground">Select a service</option>
            <option className="bg-background text-foreground">Mobile App Development</option>
            <option className="bg-background text-foreground">Web Development</option>
            <option className="bg-background text-foreground">Frontend Development</option>
            <option className="bg-background text-foreground">Backend Development</option>
          </select>



          <textarea
            placeholder="Type your message here."
            className="border p-2 w-full mt-4 h-32 rounded focus:outline-none focus:ring-0 transition bg-background text-foreground border-border focus:border-primary"
          ></textarea>

          <button
            className="px-4 py-2 mt-4 rounded transition font-medium bg-primary text-white hover: hover:bg-accent"
          >
            Send message
          </button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="w-full md:w-1/3">
        <h2 className={`text-2xl font-bold text-primary`}>Get In Touch</h2>
        <div className="mt-4 space-y-10">
          {/* Phone Section */}
          <div className="flex items-center space-x-5">
            <div className="p-3 rounded transition text-white bg-primary">
              <FaPhone size={24} />
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-gray-500">Phone</p>
              <p className="text-foreground">(+92) 340 8149083</p>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex items-center space-x-5">
            <div className="p-3 rounded transition text-white bg-primary">
              <FiMail size={24} />
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-gray-500">Email</p>
              <p className="text-foreground">omaissatti42@gmail.com</p>
            </div>
          </div>

          {/* Location Section */}
          <div className="flex items-center space-x-5">
            <div className="p-3 rounded transition bg-primary text-white">
              <MdLocationOn size={24} />
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-gray-500">Address</p>
              <p className={"text-foreground"}>Rawalpindi, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
