
import React from 'react';

interface SaarthiLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const SaarthiLogo = ({ className = '', size = 'md' }: SaarthiLogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer circle with gradient */}
        <defs>
          <linearGradient id="saarthiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B4513" />
            <stop offset="50%" stopColor="#D2691E" />
            <stop offset="100%" stopColor="#F4A460" />
          </linearGradient>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="100%" stopColor="#FF8E8E" />
          </linearGradient>
        </defs>
        
        {/* Background circle */}
        <circle cx="50" cy="50" r="45" fill="url(#saarthiGradient)" />
        
        {/* Inner design - representing care and guidance */}
        <g transform="translate(50, 50)">
          {/* Stylized 'S' for Saarthi */}
          <path
            d="M -15 -20 Q -20 -25 -10 -25 Q 0 -25 5 -20 Q 10 -15 5 -10 Q 0 -5 -5 -5 Q -10 0 -5 5 Q 0 10 5 10 Q 15 10 20 15 Q 25 20 15 20 Q 5 20 0 15"
            fill="white"
            stroke="none"
          />
          
          {/* Small heart symbol */}
          <path
            d="M 10 -5 Q 12 -8 15 -5 Q 18 -8 20 -5 Q 20 -2 15 3 Q 12 6 10 3 Q 8 6 5 3 Q 0 -2 0 -5 Q 2 -8 5 -5 Q 8 -8 10 -5 Z"
            fill="url(#heartGradient)"
          />
          
          {/* Decorative dots */}
          <circle cx="-25" cy="10" r="2" fill="white" opacity="0.8" />
          <circle cx="25" cy="-10" r="2" fill="white" opacity="0.8" />
          <circle cx="-20" cy="-20" r="1.5" fill="white" opacity="0.6" />
          <circle cx="20" cy="20" r="1.5" fill="white" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
};

export default SaarthiLogo;
