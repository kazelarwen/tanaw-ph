'use client';

import React from 'react';
import ToolCard from '@/components/FactCheckCard';

export default function FactCheckPage() {
  const handleCardClick = (toolName: string) => {
    console.log(`Clicked on ${toolName}`);
  };

  return (
    <main className="w-full flex flex-col items-center justify-center text-center px-6 py-16 bg-[var(--background)] min-h-screen">
      <div className='w-full flex flex-col items-center'>
        {/* Main Headline */}
        <h1 className="mt-6 text-[40px] font-bold text-[var(--foreground)] leading-tight max-w-3xl">
          Online Tools for quick fact checking
        </h1>

        {/* Subtext
        <p className="mt-4 text-[14px] text-gray-400 max-w-md">
          Access verified tools to fact-check information and combat misinformation online.
        </p> */}

        {/* Tools Row */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 w-full max-w-6xl">
          <ToolCard
            title="Verafiles"
            description="PH-based fact-checking for politics & viral posts."
            icon="/images/emilia.jpg"
            size="medium" // all cards use same size
            className="w-full sm:w-56 md:w-60 lg:w-64"
            onClick={() => handleCardClick('Verafiles')}
          />

          <ToolCard
            title="TinEye"
            description="Check if images are reused or edited."
            icon="/images/emilia.jpg"
            size="medium"
            className="w-full sm:w-56 md:w-60 lg:w-64"
            onClick={() => handleCardClick('TinEye')}
          />

          <ToolCard
            title="Deepware"
            description="Scan & Detect Deepfake Videos"
            icon="/images/emilia.jpg"
            size="medium"
            className="w-full sm:w-56 md:w-60 lg:w-64"
            onClick={() => handleCardClick('Deepware')}
          />

          <ToolCard
            title="AI or Not"
            description="AI-generated images, videos, text, music detection"
            icon="/images/emilia.jpg"
            size="medium"
            className="w-full sm:w-56 md:w-60 lg:w-64"
            onClick={() => handleCardClick('AI or Not')}
          />
        </div>
      </div>

      <div className='w-full flex flex-col items-center mt-20'>
        {/* Main Headline */}
        <h1 className="mt-6 text-[40px] font-bold text-[var(--foreground)] leading-tight max-w-3xl">
          Quick Tips
        </h1>

        {/* Tools Row */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 w-full max-w-6xl">
          <ToolCard
            title="Viewing social media posts"
            description=" "
            icon="/images/emilia.jpg"
            size="medium" // all cards use same size
            className="w-full sm:w-56 md:w-60 lg:w-64"
            onClick={() => handleCardClick('Verafiles')}
          />

          <ToolCard
            title="Viewing news articles"
            description=" "
            icon="/images/emilia.jpg"
            size="medium"
            className="w-full sm:w-56 md:w-60 lg:w-64"
            onClick={() => handleCardClick('TinEye')}
          />

          <ToolCard
            title="Looking at Photos & Memes"
            description=" "
            icon="/images/emilia.jpg"
            size="medium"
            className="w-full sm:w-56 md:w-60 lg:w-64"
            onClick={() => handleCardClick('Deepware')}
          />

          <ToolCard
            title="Forwarded Messages "
            description=" "
            icon="/images/emilia.jpg"
            size="medium"
            className="w-full sm:w-56 md:w-60 lg:w-64"
            onClick={() => handleCardClick('AI or Not')}
          />
        </div>
      </div>
    </main>
  );
}
