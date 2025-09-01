'use client';

import React from 'react';
import OfficialsPreview from '@/components/OfficialCard'; // make sure path is correct
import NewsPreview from '@/components/FakeNewsCard'; // import the news component

interface Official {
  id: number;
  name: string;
  title: string;
  level: string;
  term: string;
  photo?: string;
}

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  photo?: string;
}

const OfficialsPage: React.FC = () => {
  const sampleOfficials: Official[] = [
    {
      id: 1,
      name: "MANUELITO CRUZ",
      title: "President",
      level: "National",
      term: "2022 - 2028",
      photo: "/images/emilia.jpg"
    },
    {
      id: 2,
      name: "MARIA ELENA DIZON",
      title: "Vice President",
      level: "National",
      term: "2022 - 2028",
      photo: "/images/emilia.jpg"
    },
    {
      id: 3,
      name: "JUAN DELA CRUZ",
      title: "Senate President",
      level: "National",
      term: "2022 - 2025",
      photo: "/images/emilia.jpg"
    },
    {
      id: 4,
      name: "MARIA SANTOS",
      title: "House Speaker",
      level: "National",
      term: "2022 - 2025",
      photo: "/images/emilia.jpg"
    },
    {
      id: 5,
      name: "PEDRO GARCIA",
      title: "Chief Justice",
      level: "National",
      term: "2020 - 2026",
      photo: "/images/emilia.jpg"
    },
    {
      id: 6,
      name: "ANA RODRIGUEZ",
      title: "Governor",
      level: "Provincial",
      term: "2022 - 2025",
      photo: "/images/emilia.jpg"
    }
  ];

  const handleOfficialClick = (official: Official) => {
    console.log('Clicked official:', official.name);
    // Navigate to full official page here
  };

  const sampleNews: NewsItem[] = [
    {
      id: 1,
      title: "Disinformation networks exploit West Philippine Sea tensions for profit",
      date: "November 26, 2024",
      category: "Misinfo",
      description:
        "MANILA, Philippines — Violent confrontations between Chinese and Philippine vessels in the West Philippine Sea are being manipulated online by disinformation networks for ...more",
      photo: "/images/westphsea.jpg",
    },
    {
      id: 2,
      title: "Philippine government ramps up cybersecurity measures",
      date: "November 25, 2024",
      category: "Malinfo",
      description:
        "MANILA, Philippines — In response to recent cyber attacks targeting government agencies, the Department of Information and Communications Technology has implemented new security protocols ...more",
      photo: "/images/westphsea.jpg",
    },
    {
      id: 3,
      title: "Climate change affects agriculture in Luzon",
      date: "November 24, 2024",
      category: "Disinfo",
      description:
        "FARMERS in Luzon are reporting changes in crop patterns due to extreme weather events. Experts warn that misinformation about climate solutions is spreading online ...more",
      photo: "/images/westphsea.jpg",
    }
  ];

  const handleNewsClick = (news: NewsItem) => {
    console.log('Clicked news:', news.title);
    // Navigate to full news page here
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Officials Section */}
      <OfficialsPreview 
        officials={sampleOfficials}
        onOfficialClick={handleOfficialClick}
      />

      {/* News Section */}
      <div className="mt-12"> {/* Add spacing between sections */}
        <NewsPreview
          news={sampleNews}
          onNewsClick={handleNewsClick}
        />
      </div>
    </div>
  );
};

export default OfficialsPage;
