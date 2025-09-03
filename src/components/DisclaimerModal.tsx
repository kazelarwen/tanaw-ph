"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(true);

  // Optional: Only show once per session
  useEffect(() => {
    const seenDisclaimer = sessionStorage.getItem("seenDisclaimer");
    if (seenDisclaimer) {
      setIsOpen(false);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("seenDisclaimer", "true"); // Prevent showing again
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full mx-4 p-6 relative text-center">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
        >
          ×
        </button>

        {/* Illustration */}
        <div className="flex justify-center mb-4">
          <Image
            src="/icons/disclaimer-bird.svg" // replace with your uploaded image
            alt="Disclaimer"
            width={120}
            height={120}
          />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold italic mb-4">DISCLAIMER ALERT!</h2>

        {/* Message */}
        <p className="text-sm text-gray-700 mb-4">
          This is the beta test of the website. Any information displayed may not
          be real, verified, or still in progress.
        </p>
        <p className="text-sm text-gray-700 mb-6">
          This is a submitted project to UNESCO Hackathon.
        </p>

        {/* Suggestion link */}
        <Link
          href="/suggestions"
          className="text-sm font-medium gradient-text hover:underline"
        >
          Leave a suggestion!
        </Link>
      </div>
    </div>
  );
}
