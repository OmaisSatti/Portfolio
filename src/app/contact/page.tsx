"use client";

import { FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { useState } from "react";

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

  // 🔹 Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ✅ Client-side validation (custom required checks)
    if (!formData.firstName || !formData.email || !formData.service || !formData.message) {
      alert("Please fill in all required fields.");
      return; // ⛔ Don’t proceed further
    }

    setLoading(true); // ✅ Only set loading after validation passed

    try {
      const response = await fetch("http://localhost:50001/send-email", {
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
      <div className="border rounded-xl p-6 md:p-10 w-full md:w-2/3 shadow-md transition duration-300 bg-background border-primary">
        <h2 className="text-2xl font-bold text-primary">Let&rsquo;s work together</h2>
        <p className="mt-2 text-foreground">Let&rsquo;s connect and bring your ideas to life! Drop me a message below.</p>


        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input required type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="border p-2 h-[48px] w-full rounded focus:outline-none focus:ring-0 transition bg-background text-foreground border-border focus:border-primary" />
            <input required type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="border p-2 h-[48px] w-full rounded focus:outline-none focus:ring-0 transition bg-background text-foreground border-border focus:border-primary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <input required type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="border p-2 h-[48px] w-full rounded focus:outline-none focus:ring-0 transition bg-background text-foreground border-border focus:border-primary" />
            <input required type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="border p-2 h-[48px] w-full rounded focus:outline-none focus:ring-0 transition bg-background text-foreground border-border focus:border-primary" />
          </div>

          <select required name="service" value={formData.service} onChange={handleChange} className="border p-2 h-[48px] w-full mt-4 rounded transition bg-background border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary outline-none">
            <option value="">Select a service</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="Web Development">Web Development</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
          </select>

          <textarea required name="message" placeholder="Type your message here." value={formData.message} onChange={handleChange} className="border p-2 w-full mt-4 h-32 rounded focus:outline-none focus:ring-0 transition bg-background text-foreground border-border focus:border-primary"></textarea>

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

