"use client";

import React from "react";

// Infographics data
const infographics = [
  {
    title: "How to spot AI Content",
    image: "/images/infographics1.png",
  },
  {
    title: "How to spot AI Content",
    image: "/images/infographics1.png",
  },
  {
    title: "How to spot AI Content",
    image: "/images/infographics1.png",
  },
  {
    title: "How to spot AI Content",
    image: "/images/infographics1.png",
  },
];

// PPT GAMES DATA
const pptGames = [
  { image: "/images/pptgame1.png" },
  { image: "/images/pptgame1.png" },
  { image: "/images/pptgame1.png" },
  { image: "/images/pptgame1.png" }
];

// Digital Dangers data
const digitalDangers = [
  {
    title: "COVID-19  Infodemic ",
    date: "2020-2022",
    description:
      "Massive spread of fake cures, anti-vaccine disinformation, and conspiracy theories online, leading to public health risks.",
    image: "/images/digidanger-covid19.png",
  },
  {
    title: "COVID-19  Infodemic ",
    date: "2020-2022",
    description:
      "Massive spread of fake cures, anti-vaccine disinformation, and conspiracy theories online, leading to public health risks.",
    image: "/images/digidanger-covid19.png",
  },
  {
    title: "COVID-19  Infodemic ",
    date: "2020-2022",
    description:
      "Massive spread of fake cures, anti-vaccine disinformation, and conspiracy theories online, leading to public health risks.",
    image: "/images/digidanger-covid19.png",
  },
];

export default function MILPage() {
  return (
    <div className="py-12 px-4 md:px-8 lg:px-12 space-y-16">
      <section>
        {/* Title */}
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#EB5E55] to-[#FFC757] bg-clip-text text-transparent">
            Infographic Posters
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-[#EB5E55]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        {/* Infographic Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {infographics.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg group"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Gradient Overlay with Title */}
              <div className="absolute inset-x-0 bottom-0 p-4 h-20 bg-gradient-to-t from-[#EB5E55] via-[#FFC757] to-transparent">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PPT MIL Games */}
      <section>
        {/* Title */}
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#EB5E55] to-[#FFC757] bg-clip-text text-transparent">
            PPT MIL Games
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-[#EB5E55]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        {/* Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {pptGames.map((game, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src={game.image}
                alt={`Game ${index + 1}`}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Digital Dangers Archive */}
      <section>
        {/* Title */}
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#EB5E55] to-[#FFC757] bg-clip-text text-transparent">
            Digital Dangers Archive
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-[#EB5E55]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {digitalDangers.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Left: Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-cover flex-shrink-0"
              />

              {/* Right: Text */}
              <div className="flex flex-col justify-between p-4">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.date}</p>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>


  );
}
