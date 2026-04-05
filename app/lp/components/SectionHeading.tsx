import React from 'react';

interface SectionHeadingProps {
  en: string;
  ja: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ en, ja, align = 'center', light = false }) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const textColor = light ? 'text-white' : 'text-slate-900';
  const subTextColor = light ? 'text-[#00afcc]' : 'text-[#00afcc]';

  return (
    <div className={`mb-16 ${alignClass}`}>
      <span className={`block text-lg font-black italic tracking-tighter uppercase mb-1 ${subTextColor}`}>
        {en}
      </span>
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${textColor}`}>
        {ja}
      </h2>
      {/* Sporty Underline */}
      <div className={`mt-4 h-2 w-24 bg-[#00afcc] transform skew-x-[-20deg] ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;
