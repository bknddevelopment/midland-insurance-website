'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView, initializeScrollTracking, trackTimeOnPage } from '@/lib/analytics';

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Track page view on route change
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
    trackPageView({
      url: url,
      title: document.title,
      referrer: document.referrer,
    });
    
    // Initialize scroll tracking
    initializeScrollTracking();
    
    // Track time on page
    const startTime = Date.now();
    
    return () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      if (timeOnPage > 3) { // Only track if user spent more than 3 seconds
        trackTimeOnPage(document.title, timeOnPage);
      }
    };
  }, [pathname, searchParams]);
  
  return <>{children}</>;
}