import React from "react";
import Image from "next/image";
import { ChevronRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  photo?: string;
}

interface NewsCardProps extends NewsItem {
  onClick?: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, category, description, photo, onClick }) => (
  <div
    className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-all duration-200"
    onClick={onClick}
  >
    {/* Image on top */}
    <div className="w-full h-40 relative">
      {photo ? (
        <Image src={photo} alt={title} fill className="object-cover" />
      ) : (
        <div className="bg-gray-200 w-full h-full"></div>
      )}
    </div>

    {/* Content below image */}
    <div className="p-4 flex flex-col justify-between">
      {/* Title, date, and category */}
      <div className="mb-3">
        <h3 className="font-bold text-[var(--text)] text-sm mb-1 break-words">{title}</h3>
        <div className="flex items-center text-xs text-[var(--text-secondary)] mb-2">
          <span className="mr-1">📅</span>
          <span>{date}</span>
        </div>
        <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#FFC757] to-[#EB5E55] text-[var(--text-white)] text-xs font-semibold">
          {category}
        </div>
      </div>

      {/* Separator */}
      <hr className="border-gray-200 mb-3" />

      {/* Description */}
      <p className="text-[var(--text-secondary)] text-xs line-clamp-3 break-words">{description}</p>
    </div>
  </div>
);

interface NewsPreviewProps {
  heading?: string;
  news?: NewsItem[];
  onNewsClick?: (item: NewsItem) => void;
}

const NewsPreview: React.FC<NewsPreviewProps> = ({
  heading = "Fake News Alerts",
  news = [],
  onNewsClick = () => {},
}) => {
  const defaultNews: NewsItem[] = [
    {
      id: 1,
      title: "Disinformation networks exploit West Philippine Sea tensions for profit",
      date: "November 26, 2024",
      category: "Misinfo",
      description:
        "MANILA, Philippines — Violent confrontations between Chinese and Philippine vessels in the West Philippine Sea are being manipulated online by disinformation networks for ...more",
      photo: "/images/news/1.jpg",
    },
    {
      id: 2,
      title: "Philippine government ramps up cybersecurity measures",
      date: "November 25, 2024",
      category: "Malinfo",
      description:
        "MANILA, Philippines — In response to recent cyber attacks targeting government agencies, the Department of Information and Communications Technology has implemented new security protocols ...more",
      photo: "/images/news/2.jpg",
    },
  ];

  const displayNews = news.length > 0 ? news : defaultNews;

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold text-[var(--text)]">{heading}</h2>
          <ChevronRight className="w-5 h-5 text-[var(--text-orange)] ml-2" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {displayNews.map((item) => (
          <NewsCard key={item.id} {...item} onClick={() => onNewsClick(item)} />
        ))}
      </div>
    </div>
  );
};

export default NewsPreview;
