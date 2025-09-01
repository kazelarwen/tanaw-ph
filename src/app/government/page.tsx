'use client';

import React from 'react';
import OfficialsPreview from '@/components/OfficialCard'; // make sure path is correct

interface Official {
  id: number;
  name: string;
  title: string;
  level: string;
  term: string;
  photo?: string; // added photo prop
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

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <OfficialsPreview 
        officials={sampleOfficials}
        onOfficialClick={handleOfficialClick}
      />
    </div>
  );
};

export default OfficialsPage;
