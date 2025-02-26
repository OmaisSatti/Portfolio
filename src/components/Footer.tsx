"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaRegClone, FaClone, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "OmaisSatti42@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <footer className="bg-teal-700 text-white text-center p-6">
      <h2 className="text-4xl font-semibold">
        Elevate <span className="text-primary text-teal-300">your</span> digital presence <br /> and stand out from the crowd!
      </h2>
      <p className="mt-2">Let’s connect and explore how I can help bring your vision to life.</p>


      {/* Centered Copy Email Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleCopy}
          className="px-6 py-3 border rounded-lg flex items-center gap-2"
        >
          {copied ? (
            <>
              <FaClone /> Email address copied!
            </>
          ) : (
            <>
              <FaRegClone /> Copy my email address
            </>
          )}
        </button>

      </div>

      {/* Social Links & Copyright in One Row */}
      <div className="mt-6 flex justify-between items-center gap-6 flex-wrap mx-20">
        <p className="text-gray-300 text-sm">© 2024 Omais Satti | All rights reserved</p>
        <div className="flex gap-4">
          <a href="https://github.com/OmaisSatti" target="_blank">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://linkedin.com/in/omais-satti-3845b8208" target="_blank">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/mrsatti502?igsh=OTMyZWtsNjNpNHQ1" target="_blank">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://www.facebook.com/omais.satti.3" target="_blank">
            <FaFacebook className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

