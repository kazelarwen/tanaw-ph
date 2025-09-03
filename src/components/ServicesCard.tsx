import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; //  now it's a string path to your SVG
  iconBg: string;
}

interface ServicesCardProps {
  services?: Service[];
  onServiceClick?: (serviceId: number) => void;
  onViewAllClick?: () => void;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  services = [
    {
      id: 1,
      title: "Government Help",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      icon: "/icons/GovHelp.svg", // svg file
      iconBg: "bg-orange-100",
    },
    {
      id: 2,
      title: "E-Services",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      icon: "/icons/E-services.svg", // svg file
      iconBg: "bg-red-100",
    },
    {
      id: 3,
      title: "Election Information",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      icon: "/icons/Election.svg", // svg file
      iconBg: "bg-orange-100",
    }
  ],
  onServiceClick,
  onViewAllClick
}) => {
  const handleServiceClick = (serviceId: number) => {
    if (onServiceClick) {
      onServiceClick(serviceId);
    } else {
      console.log(`Service ${serviceId} clicked`);
    }
  };

  const handleViewAllClick = () => {
    if (onViewAllClick) {
      onViewAllClick();
    } else {
      console.log('View all services clicked');
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center cursor-pointer" onClick={handleViewAllClick}>
          <h2 className="text-xl font-semibold text-[var(--text)]">Services</h2>
          <ChevronRight className="w-5 h-5 text-[var(--text-orange)] ml-2" />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => handleServiceClick(service.id)}
            className="bg-[var(--background)] border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start space-x-4">
              {/* Icon Container */}
              <div
                className={`flex-shrink-0 w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center`}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
