import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const iconSizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-lg'
  };

  return (
    <div className={`flex items-center -gap-1 ${className}`}>
      {/* Logo Image */}
      <div className={`${iconSizeClasses[size]} relative flex items-center justify-center`}>
        <img 
          src="/lovable-uploads/logo_no_background.png" 
          alt="MIIXED REALITIES Logo"
          className="w-full h-full object-contain filter brightness-110 contrast-110 hover:scale-105 transition-all duration-300 drop-shadow-lg"
        />
      </div>

      {/* Logo Text */}
      <div className={`font-bold text-white ${textSizeClasses[size]} tracking-wider`}>
        <div className="leading-tight">
          <span className="block">MIIXED</span>
          <span className="block">REALITIES</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
