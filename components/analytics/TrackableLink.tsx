'use client';

import React from 'react';
import Link from 'next/link';
import { trackCTAClick, trackPhoneClick } from '@/lib/analytics';

interface TrackableLinkProps {
  href: string;
  trackingLabel: string;
  trackingLocation: string;
  isPhoneNumber?: boolean;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export default function TrackableLink({
  href,
  trackingLabel,
  trackingLocation,
  isPhoneNumber = false,
  children,
  className,
  target,
  rel,
}: TrackableLinkProps) {
  const handleClick = () => {
    if (isPhoneNumber) {
      trackPhoneClick(href.replace('tel:', ''), trackingLocation);
    } else {
      trackCTAClick(trackingLabel, trackingLocation, href);
    }
  };

  // For external links or phone numbers, use regular anchor
  if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={className}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  // For internal links, use Next.js Link
  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}