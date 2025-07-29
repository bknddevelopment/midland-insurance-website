import React from 'react';

interface DividerProps {
  type: 'dark-to-white' | 'white-to-dark';
}

export default function Divider({ type }: DividerProps) {
  return (
    <div className={`w-full h-16 ${
      type === 'dark-to-white' 
        ? 'bg-gradient-to-b from-slate-900 to-white' 
        : 'bg-gradient-to-b from-white to-slate-900'
    }`}>
      <svg 
        className="w-full h-full" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        {type === 'dark-to-white' ? (
          <path 
            d="M0,0 L0,80 Q600,120 1200,80 L1200,0 Z" 
            fill="#0f172a"
          />
        ) : (
          <path 
            d="M0,120 L0,40 Q600,0 1200,40 L1200,120 Z" 
            fill="#ffffff"
          />
        )}
      </svg>
    </div>
  );
} 