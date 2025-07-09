
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
        <defs>
          <linearGradient id="saarthiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B4513" />
            <stop offset="50%" stopColor="#D2691E" />
            <stop offset="100%" stopColor="#F4A460" />
          </linearGradient>
        </defs>
        
        {/* Outer circle with compass points */}
        <circle cx="50" cy="50" r="45" fill="url(#saarthiGradient)" stroke="#5D4037" strokeWidth="2"/>
        
        {/* Compass points */}
        <polygon points="50,5 52,15 48,15" fill="#5D4037"/>
        <polygon points="95,50 85,48 85,52" fill="#5D4037"/>
        <polygon points="50,95 48,85 52,85" fill="#5D4037"/>
        <polygon points="5,50 15,52 15,48" fill="#5D4037"/>
        
        {/* Inner design - woman silhouette */}
        <g transform="translate(50, 50)">
          {/* Woman silhouette */}
          <path
            d="M -15 -10 Q -18 -15 -15 -20 Q -10 -25 0 -20 Q 10 -25 15 -20 Q 18 -15 15 -10 Q 12 -8 8 -5 L 8 5 Q 8 15 5 20 L -5 20 Q -8 15 -8 5 L -8 -5 Q -12 -8 -15 -10 Z"
            fill="#F5E6D3"
          />
          
          {/* Hair */}
          <path
            d="M -15 -20 Q -20 -25 -10 -30 Q 0 -35 10 -30 Q 20 -25 15 -20 Q 10 -15 5 -12 Q 0 -15 -5 -12 Q -10 -15 -15 -20 Z"
            fill="#5D4037"
          />
          
          {/* Heart symbol */}
          <path
            d="M 8 -5 Q 10 -8 13 -5 Q 16 -8 18 -5 Q 18 -2 13 3 Q 10 6 8 3 Q 6 6 3 3 Q -2 -2 -2 -5 Q 0 -8 3 -5 Q 6 -8 8 -5 Z"
            fill="#FF6B6B"
          />
        </g>
      </svg>
    </div>
  );
};

export default SaarthiLogo;
