import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface Official {
  id: number;
  name: string;
  title: string;
  level: string;
  term: string;
  photo?: string; // New prop for image
}

interface OfficialCardProps extends Official {
  onClick?: () => void;
}

const OfficialCard: React.FC<OfficialCardProps> = ({ name, title, level, term, onClick, photo }) => (
  <div 
    className="bg-[var(--background)] border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-all duration-200"
    onClick={onClick}
  >
    <div className="flex h-32">
      {/* Image Area */}
      <div className="w-24 relative flex-shrink-0">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover rounded-l-lg"
          />
        ) : (
          <div className="bg-gray-200 w-full h-full rounded-l-lg"></div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 p-4 flex flex-col justify-center">
        <h3 className="font-bold text-[var(--text)] text-sm mb-1">{name}</h3>
        <p className="text-[var(--text-secondary)] text-sm mb-2">{title}</p>
        
        <div className="space-y-1">
          <div className="flex items-center text-xs text-[var(--text-secondary)]">
            <span className="mr-1">🏛️</span>
            <span>{level}</span>
          </div>
          <div className="flex items-center text-xs text-[var(--text-secondary)]">
            <span className="mr-1">⏱️</span>
            <span>{term}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface OfficialsPreviewProps {
  officials?: Official[];
  onOfficialClick?: (official: Official) => void;
}

const OfficialsPreview: React.FC<OfficialsPreviewProps> = ({ officials = [], onOfficialClick = () => {} }) => {
  const defaultOfficials: Official[] = [
    {
      id: 1,
      name: "MANUELITO CRUZ",
      title: "President",
      level: "National",
      term: "2022 - 2028",
      photo: "/images/officials/1.jpg"
    },
    {
      id: 2,
      name: "MARIA ELENA DIZON",
      title: "Vice President",
      level: "National",
      term: "2022 - 2028",
      photo: "/images/officials/2.jpg"
    }
  ];

  const displayOfficials = officials.length > 0 ? officials : defaultOfficials;

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold text-[var(--text)]">Officials</h2>
          <ChevronRight className="w-5 h-5 text-[var(--text-orange)] ml-2" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {displayOfficials.map((official) => (
          <OfficialCard
            key={official.id}
            {...official}
            onClick={() => onOfficialClick(official)}
          />
        ))}
      </div>
    </div>
  );
};

export default OfficialsPreview;
