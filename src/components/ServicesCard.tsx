import React from 'react';
import { ChevronRight, HandHeart, FileText, Vote } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  iconBg: string;
  iconColor: string;
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
      icon: HandHeart,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      id: 2,
      title: "E-Services",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      icon: FileText,
      iconBg: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      id: 3,
      title: "Election Information",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      icon: Vote,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
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
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              className="bg-[var(--background)] border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start space-x-4">
                {/* Icon Container */}
                <div className={`flex-shrink-0 w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center`}>
                  <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
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
          );
        })}
      </div>
    </div>
  );
};

export default ServicesCard;