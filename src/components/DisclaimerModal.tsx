"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(true);

  // ✅ Only show once per session
  useEffect(() => {
    const seenDisclaimer = sessionStorage.getItem("seenDisclaimer");
    if (seenDisclaimer) {
      setIsOpen(false);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("seenDisclaimer", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full mx-4 p-6 relative text-center">
        {/* Illustration */}
        <div className="flex justify-center mb-4">
          <Image
            src="/icons/disclaimer-bird.svg"
            alt="Disclaimer"
            width={120}
            height={120}
          />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold mb-4">Under Development</h2>

        {/* Message */}
        <p className="text-sm text-gray-700 mb-4">
          This is the beta test of the website. Any information displayed may not
          be real, verified, or still in progress.
        </p>
        <p className="text-sm text-gray-700 mb-6">
          This is a submitted project to UNESCO Hackathon.
        </p>

        {/* Confirm Button */}
        <button
            onClick={handleClose}
            className="gradient-btn text-sm"
        >
            I understand
        </button>

      </div>
    </div>
  );
}
