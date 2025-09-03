"use client";

import { useState } from "react";
import { Type, Volume2, Globe, Moon, Bot } from "lucide-react";
import Image from "next/image";

export default function TawiAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Menu */}
      {open && (
        <div className="mb-4 flex flex-col items-center gap-3">
          <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition">
            <Image src="/icons/fontsize-icon.svg" alt="Font Size" width={20} height={20} />
          </button>
          <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition">
            <Image src="/icons/texttospeech-icon.svg" alt="Volume" width={20} height={20} />
          </button>
          <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition">
            <Image src="/icons/dialect-icon.svg" alt="Globe" width={20} height={20} />
          </button>
          <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition">
            <Image src="/icons/darkmode-icon.svg" alt="Moon" width={20} height={20} />
          </button>
          <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition">
            <Image src="/icons/chatbot-icon.svg" alt="Bot" width={20} height={20} />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#FFC757] to-[#EB5E55] shadow-lg flex items-center justify-center text-white hover:scale-105 transition"
      >
        <Image src="/icons/tawi-icon.svg" alt="Tawi-icon" width={35} height={20} />   
      </button>
      <span className="absolute -top-1 -right-1 bg-white text-xs font-bold text-[#EB5E55] rounded-full px-1.5 py-0.5 shadow">
            <Image src="/icons/aistar-icon.svg" alt="Bot" width={15} height={15} />
      </span>
    </div>
  );
}
