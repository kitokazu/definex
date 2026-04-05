import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  // Sporty Design: Skewed shape, sharp corners, bold font
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 text-base font-black italic tracking-wider transition-all duration-300 transform skew-x-[-12deg] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group";
  
  const variants = {
    primary: "bg-[#00afcc] text-white hover:bg-[#008fa6] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] active:shadow-none active:translate-y-1",
    outline: "border-2 border-[#00afcc] text-[#00afcc] hover:bg-[#00afcc] hover:text-white shadow-[4px_4px_0px_0px_rgba(0,175,204,0.2)] active:shadow-none active:translate-y-1",
    white: "bg-white text-[#00afcc] hover:bg-gray-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] active:shadow-none active:translate-y-1"
  };

  const widthClass = fullWidth ? "w-full flex" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {/* Un-skew the content so text remains readable */}
      <span className="block transform skew-x-[12deg] flex items-center">
        {children}
      </span>
    </button>
  );
};

export default Button;