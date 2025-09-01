"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[var(--background)] shadow-sm">
      {/* Align with footer by using a container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={140} height={40} />
        </Link>

        {/* Right side: Login & Register buttons */}
        <div className="flex items-center gap-4">
          {/* Login Button */}
          <Link
            href="/login"
            className="px-4 py-2 bg-white text-[var(--foreground)] shadow-md rounded-lg font-medium hover:shadow-lg transition"
          >
            Login
          </Link>

          {/* Register Button */}
          <Link
            href="/register"
            className="px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-[#FFC757] to-[#EB5E55] hover:opacity-90 transition shadow-md"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
