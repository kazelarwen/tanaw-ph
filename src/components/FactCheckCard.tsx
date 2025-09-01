// components/ToolCard.tsx
import React from 'react';
import Image from 'next/image';

interface ToolCardProps {
  title: string;
  description: string;
  icon?: string; // path to image
  size?: 'small' | 'medium' | 'large' | 'wide';
  className?: string;
  onClick?: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ 
  title, 
  description, 
  icon, 
  size = 'medium', 
  className = '',
  onClick
}) => {
  const sizeClasses = {
    small: 'h-48',
    medium: 'h-56', 
    large: 'h-80',
    wide: 'h-56'
  };

  return (
    <div 
      className={`${sizeClasses[size]} ${className} overflow-hidden relative group hover:scale-105 transition-transform duration-300 cursor-pointer rounded-2xl bg-gradient-to-r from-[#FFC757] to-[#EB5E55]`}
      onClick={onClick}
    >
      {/* Image Area - Full width, no borders/margins */}
      {icon ? (
        <div className="absolute inset-0">
          <Image
            src={icon}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      ) : (
        // Fallback gradient background when no image
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFC757] to-[#EB5E55]" />
      )}

      {/* Content Area Overlay - Positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#FFC757] to-[#EB5E55] p-4">
        <h3 className="text-lg font-bold mb-1 text-white leading-tight">
          {title}
        </h3>
        <p className="text-sm text-white opacity-90 leading-snug line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ToolCard;