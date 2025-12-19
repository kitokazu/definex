import React from 'react';
import { MessageCircle } from 'lucide-react';

interface CtaButtonProps {
  text?: string;
  subText?: string;
  className?: string;
  animate?: boolean;
}

export const CtaButton: React.FC<CtaButtonProps> = ({ 
  text = "LINEで無料体験を受ける", 
  subText,
  className = "",
  animate = true
}) => {
  return (
    <div className={`flex flex-col items-center group ${className}`}>
      {subText && (
        <span className="text-xs md:text-sm font-bold text-white mb-3 bg-brand-line px-4 py-1 rounded-full shadow-[0_0_10px_rgba(6,199,85,0.5)] border border-white/20 animate-bounce">
          {subText}
        </span>
      )}
      <a
        href="https://line.me/" 
        target="_blank"
        rel="noopener noreferrer"
        className={`
          relative flex items-center justify-center gap-3 w-full max-w-md
          bg-brand-line hover:bg-brand-lineHover text-white 
          font-bold text-lg md:text-xl py-4 px-8 rounded-full 
          shadow-[0_0_20px_rgba(6,199,85,0.3)] hover:shadow-[0_0_30px_rgba(6,199,85,0.5)] 
          transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]
          border-2 border-transparent hover:border-white/20
          ${animate ? 'animate-pulse-slow' : ''}
        `}
      >
        <div className="absolute -inset-1 rounded-full bg-brand-line opacity-20 blur-lg group-hover:opacity-40 transition-opacity"></div>
        <MessageCircle className="w-8 h-8 md:w-8 md:h-8 fill-white relative z-10" />
        <span className="tracking-wide relative z-10">{text}</span>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-full pointer-events-none"></div>
      </a>
      <p className="mt-3 text-xs text-slate-400">
        ※ 無理な勧誘は一切ありません。
      </p>
    </div>
  );
};