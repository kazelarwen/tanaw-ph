"use client";

import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFFCF7] text-[#212429] border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-end">
        {/* Socials on the right */}
        <div className="flex items-center space-x-4">
          <FaFacebook size={24} color="#EB5E55" />
          <FaInstagram size={24} color="#EB5E55" />
          <FaTwitter size={24} color="#EB5E55" />
          <FaTiktok size={24} color="#EB5E55" />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* Bottom row: left + right */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-[#585858]">
          © 2025 TanawPH. All rights reserved.
        </p>
        <h1 className="font-bold text-lg bg-gradient-to-r from-[#FFC757] to-[#EB5E55] text-transparent bg-clip-text">
          TanawPH
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
