"use client";

import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

// Replace with your own SVG files placed in /public/icons/
const navItems = [
  { name: "Government", icon: "/icons/government.svg", href: "/government" },
  { name: "MIL", icon: "/icons/mil.svg", href: "/mil" },
  { name: "Fact Check", icon: "/icons/fact-check.svg", href: "/fact-check" },
  { name: "Youth", icon: "/icons/youth.svg", href: "/youth" },
];

export default function SecondaryNav() {
  return (
    <div className="w-full bg-[#FFFCF7] ">
      {/* Navigation links */}
      <div className="flex justify-center gap-8 py-3">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-2 text-[#212429] font-medium hover:bg-gradient-to-r hover:from-[#FFC757] hover:to-[#EB5E55] hover:bg-clip-text transition"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Search bar */}
      <div className="flex justify-center py-3">
        <div className="relative w-[80%] max-w-lg">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#585858]" />
          <input
            type="text"
            placeholder="Find verified information"
            className="w-full rounded-full border border-[#e5e5e5] py-2 pl-10 pr-4 text-[#212429] placeholder-[#585858] focus:outline-none focus:ring-2 focus:ring-[#FFC757]"
          />
        </div>
      </div>
    </div>
  );
}
