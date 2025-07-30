// React hooks for analytics tracking
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { 
  trackPageView, 
  trackEvent, 
  trackScrollDepth,
  trackTimeOnPage,
  initializeScrollTracking 
} from './index';

// Hook to track page views
export const usePageView = () => {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      trackPageView({
        url: pathname,
        title: document.title,
        referrer: prevPathname.current,
      });
      prevPathname.current = pathname;
    }
  }, [pathname]);
};

// Hook to track component visibility
export const useTrackVisibility = (
  elementRef: React.RefObject<HTMLElement>,
  eventName: string,
  eventCategory: string,
  eventLabel?: string
) => {
  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackEvent({
              action: eventName,
              category: eventCategory,
              label: eventLabel,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, eventName, eventCategory, eventLabel]);
};

// Hook to track time spent on page
export const useTimeOnPage = (pageName: string) => {
  const startTime = useRef(Date.now());

  useEffect(() => {
    const handleUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      trackTimeOnPage(pageName, timeSpent);
    };

    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, [pageName]);
};

// Hook to track form field interactions
export const useFormTracking = (formName: string) => {
  const startedRef = useRef(false);
  const fieldsInteracted = useRef(new Set<string>());

  const trackFieldInteraction = (fieldName: string) => {
    if (!startedRef.current) {
      trackEvent({
        action: 'form_start',
        category: 'form_interaction',
        label: formName,
      });
      startedRef.current = true;
    }

    if (!fieldsInteracted.current.has(fieldName)) {
      fieldsInteracted.current.add(fieldName);
      trackEvent({
        action: 'form_field_interaction',
        category: 'form_interaction',
        label: `${formName}_${fieldName}`,
      });
    }
  };

  const trackFormSubmit = (success: boolean = true) => {
    trackEvent({
      action: success ? 'form_submit_success' : 'form_submit_error',
      category: 'form_interaction',
      label: formName,
      value: fieldsInteracted.current.size,
    });
  };

  const trackFormAbandon = () => {
    if (startedRef.current) {
      trackEvent({
        action: 'form_abandon',
        category: 'form_interaction',
        label: formName,
        value: fieldsInteracted.current.size,
      });
    }
  };

  useEffect(() => {
    return () => {
      trackFormAbandon();
    };
  }, []);

  return {
    trackFieldInteraction,
    trackFormSubmit,
    trackFormAbandon,
  };
};

// Hook to track scroll depth
export const useScrollTracking = () => {
  useEffect(() => {
    initializeScrollTracking();
  }, []);
};

// Hook to track external link clicks
export const useExternalLinkTracking = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href && !link.href.startsWith(window.location.origin)) {
        trackEvent({
          action: 'external_link_click',
          category: 'outbound',
          label: link.href,
        });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
};

// Hook to track FAQ interactions
export const useFAQTracking = () => {
  const trackFAQOpen = (question: string, category: string) => {
    trackEvent({
      action: 'faq_expand',
      category: 'faq_interaction',
      label: `${category}: ${question}`,
    });
  };

  return { trackFAQOpen };
};

// Hook to track calculator interactions
export const useCalculatorTracking = (calculatorName: string) => {
  const trackCalculation = (inputs: Record<string, any>, result: any) => {
    trackEvent({
      action: 'calculator_complete',
      category: 'calculator',
      label: calculatorName,
      value: typeof result === 'number' ? Math.round(result) : undefined,
    });
  };

  const trackInputChange = (fieldName: string, value: any) => {
    trackEvent({
      action: 'calculator_input_change',
      category: 'calculator',
      label: `${calculatorName}_${fieldName}`,
    });
  };

  return { trackCalculation, trackInputChange };
};

// Hook to track video engagement
export const useVideoTracking = (videoTitle: string) => {
  const trackVideoPlay = () => {
    trackEvent({
      action: 'video_play',
      category: 'video_engagement',
      label: videoTitle,
    });
  };

  const trackVideoComplete = () => {
    trackEvent({
      action: 'video_complete',
      category: 'video_engagement',
      label: videoTitle,
    });
  };

  const trackVideoProgress = (percentage: number) => {
    trackEvent({
      action: 'video_progress',
      category: 'video_engagement',
      label: videoTitle,
      value: percentage,
    });
  };

  return { trackVideoPlay, trackVideoComplete, trackVideoProgress };
};