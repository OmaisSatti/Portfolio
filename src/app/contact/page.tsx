"use client";

import { FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { useState, useRef, useEffect } from "react";

const SERVICE_OPTIONS = [
  "Mobile App Development",
  "Web Development",
  "Frontend Development",
  "Backend Development",
];

export default function Contact() {
  // 🔹 State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔹 Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.service || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert("Email sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-center p-5 md:p-10 gap-10 bg-background text-foreground">

      {/* Contact Form */}
      <div className="border rounded-xl p-6 md:p-10 w-full md:w-2/3 shadow-md transition duration-300 bg-background border-borderinput">
        <h2 className="text-2xl font-bold text-primary">Let&rsquo;s work together</h2>
        <p className="mt-2 text-foreground">Let&rsquo;s connect and bring your ideas to life! Drop me a message below.</p>


        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input required type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="border p-2 h-[48px] w-full rounded focus:outline-none focus:ring-0 transition bg-background text-foreground border-borderinput focus:border-primary" />
            <input required type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="border p-2 h-[48px] w-full rounded focus:outline-none focus:ring-0 transition bg-background text-foreground border-borderinput focus:border-primary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <input required type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="border p-2 h-[48px] w-full rounded focus:outline-none focus:ring-0 transition bg-background text-foreground border-borderinput focus:border-primary" />
            <input required type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="border p-2 h-[48px] w-full rounded focus:outline-none focus:ring-0 transition bg-background text-foreground border-borderinput focus:border-primary" />
          </div>

          <div ref={dropdownRef} className="relative mt-4">
            <button
              type="button"
              onClick={() => setDropdownOpen((o) => !o)}
              className="border p-2 h-[48px] w-full rounded focus:outline-none focus:ring-0 transition bg-background text-foreground border-borderinput focus:border-primary text-left flex items-center justify-between pr-10 bg-no-repeat bg-[length:1rem] bg-[position:right_0.75rem_center] [background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')]"
            >
              <span className={formData.service ? "" : "text-[var(--placeholder)]"}>{formData.service || "Select a service"}</span>
            </button>
            {dropdownOpen && (
              <ul
                className="absolute z-20 top-full left-0 right-0 mt-1 rounded border border-borderinput bg-background text-foreground shadow-lg max-h-48 overflow-y-auto py-1"
                role="listbox"
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <li key={opt} role="option" aria-selected={formData.service === opt}>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, service: opt }));
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 hover:bg-primary/10 focus:bg-primary/10 focus:outline-none text-foreground transition"
                    >
                      {opt}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <textarea required name="message" placeholder="Type your message here." value={formData.message} onChange={handleChange} className="border p-2 w-full mt-4 h-32 rounded focus:outline-none focus:ring-0 transition bg-background text-foreground border-borderinput focus:border-primary"></textarea>

          <button type="submit" className="px-4 py-2 mt-4 rounded transition font-medium bg-primary text-white hover:bg-accent" disabled={loading}>
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="w-full md:w-1/3">
        <h2 className="text-2xl font-bold text-primary">Get In Touch</h2>
        <div className="mt-4 space-y-10">
          <div className="flex items-center space-x-5">
            <div className="p-3 rounded transition text-white bg-primary">
              <FaPhone size={24} />
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-gray-500">Phone</p>
              <p className="text-foreground">(+92) 340 8149083</p>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <div className="p-3 rounded transition text-white bg-primary">
              <FiMail size={24} />
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-gray-500">Email</p>
              <p className="text-foreground">omaissatti42@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <div className="p-3 rounded transition bg-primary text-white">
              <MdLocationOn size={24} />
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-gray-500">Address</p>
              <p className="text-foreground">Rawalpindi, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

