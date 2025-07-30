'use client';

import React from 'react';
import { trackCTAClick } from '@/lib/analytics';

interface TrackableButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  trackingLabel: string;
  trackingLocation: string;
  trackingDestination?: string;
  children: React.ReactNode;
}

export default function TrackableButton({
  trackingLabel,
  trackingLocation,
  trackingDestination = 'unknown',
  onClick,
  children,
  ...props
}: TrackableButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    trackCTAClick(trackingLabel, trackingLocation, trackingDestination);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
}