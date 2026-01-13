
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-900">
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
          <path d="M12 2V5M12 19V22M2 12H5M19 12H22M4.93 4.93L7.05 7.05M16.95 16.95L19.07 19.07M4.93 19.07L7.05 16.95M16.95 7.05L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <h2 className="text-xl font-medium tracking-tight">{title}</h2>
      </div>
      {subtitle && <p className="text-3xl md:text-4xl font-serif leading-tight max-w-2xl">{subtitle}</p>}
    </div>
  );
};
