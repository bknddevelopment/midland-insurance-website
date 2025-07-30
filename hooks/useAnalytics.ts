import { useCallback } from 'react';
import { 
  trackEvent, 
  trackCTAClick, 
  trackPhoneClick, 
  trackFormInteraction,
  trackToolUsage,
  trackContentEngagement,
  trackConversion,
  ANALYTICS_EVENTS 
} from '@/lib/analytics';

export const useAnalytics = () => {
  // Track CTA button clicks
  const trackCTA = useCallback((ctaText: string, location: string, destination: string) => {
    trackCTAClick(ctaText, location, destination);
  }, []);
  
  // Track phone number clicks
  const trackPhone = useCallback((phoneNumber: string, location: string) => {
    trackPhoneClick(phoneNumber, location);
    // Also track as a conversion
    trackConversion('phone_click', 1);
  }, []);
  
  // Track form interactions
  const trackForm = useCallback((formName: string, action: 'start' | 'complete' | 'abandon', fieldName?: string) => {
    trackFormInteraction(formName, action, fieldName);
    if (action === 'complete') {
      trackConversion(`form_${formName}`, 1);
    }
  }, []);
  
  // Track tool usage
  const trackTool = useCallback((toolName: string, action: string, value?: any) => {
    trackToolUsage(toolName, action, value);
  }, []);
  
  // Track content engagement
  const trackContent = useCallback((contentType: string, contentTitle: string, action: string) => {
    trackContentEngagement(contentType, contentTitle, action);
  }, []);
  
  // Track generic events
  const track = useCallback((action: string, category: string, label?: string, value?: number) => {
    trackEvent({ action, category, label, value });
  }, []);
  
  return {
    trackCTA,
    trackPhone,
    trackForm,
    trackTool,
    trackContent,
    track,
    EVENTS: ANALYTICS_EVENTS,
  };
};