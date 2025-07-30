import React from 'react';

interface DividerProps {
  type: 'dark-to-white' | 'white-to-dark' | 'white-to-gray' | 'gray-to-white' | 'gray-to-dark' | 'white-to-primary' | 'primary-to-white';
}

export default function Divider({ type }: DividerProps) {
  const getGradientClass = () => {
    switch (type) {
      case 'dark-to-white':
        return 'bg-gradient-to-b from-slate-900 to-white';
      case 'white-to-dark':
        return 'bg-gradient-to-b from-white to-slate-900';
      case 'white-to-gray':
        return 'bg-gradient-to-b from-white to-gray-50';
      case 'gray-to-white':
        return 'bg-gradient-to-b from-gray-50 to-white';
      case 'gray-to-dark':
        return 'bg-gradient-to-b from-gray-50 to-slate-900';
      case 'white-to-primary':
        return 'bg-gradient-to-b from-white to-blue-600';
      case 'primary-to-white':
        return 'bg-gradient-to-b from-blue-600 to-white';
      default:
        return 'bg-gradient-to-b from-white to-slate-900';
    }
  };

  const getPathConfig = () => {
    switch (type) {
      case 'dark-to-white':
        return { path: "M0,0 L0,80 Q600,120 1200,80 L1200,0 Z", fill: "#0f172a" };
      case 'white-to-dark':
        return { path: "M0,120 L0,40 Q600,0 1200,40 L1200,120 Z", fill: "#ffffff" };
      case 'white-to-gray':
        return { path: "M0,120 L0,40 Q600,0 1200,40 L1200,120 Z", fill: "#ffffff" };
      case 'gray-to-white':
        return { path: "M0,0 L0,80 Q600,120 1200,80 L1200,0 Z", fill: "#f9fafb" };
      case 'gray-to-dark':
        return { path: "M0,0 L0,80 Q600,120 1200,80 L1200,0 Z", fill: "#f9fafb" };
      case 'white-to-primary':
        return { path: "M0,120 L0,40 Q600,0 1200,40 L1200,120 Z", fill: "#ffffff" };
      case 'primary-to-white':
        return { path: "M0,0 L0,80 Q600,120 1200,80 L1200,0 Z", fill: "#2563eb" };
      default:
        return { path: "M0,120 L0,40 Q600,0 1200,40 L1200,120 Z", fill: "#ffffff" };
    }
  };

  const { path, fill } = getPathConfig();

  return (
    <div className={`w-full h-16 ${getGradientClass()}`}>
      <svg 
        className="w-full h-full" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path d={path} fill={fill} />
      </svg>
    </div>
  );
} 