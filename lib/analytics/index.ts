// Analytics tracking utilities - ready for implementation
// This file provides a centralized location for all analytics tracking

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface PageViewData {
  url: string;
  title: string;
  referrer?: string;
}

// Analytics event types for construction insurance website
export const ANALYTICS_EVENTS = {
  // Quote & Lead Generation
  QUOTE_STARTED: 'quote_started',
  QUOTE_COMPLETED: 'quote_completed',
  QUOTE_STEP_COMPLETED: 'quote_step_completed',
  CONTACT_FORM_SUBMITTED: 'contact_form_submitted',
  PHONE_CLICKED: 'phone_number_clicked',
  EMAIL_CLICKED: 'email_clicked',
  
  // Tool Usage
  CALCULATOR_USED: 'premium_calculator_used',
  CALCULATOR_COMPLETED: 'premium_calculator_completed',
  CHECKLIST_DOWNLOADED: 'coverage_checklist_downloaded',
  RISK_ASSESSMENT_COMPLETED: 'risk_assessment_completed',
  CERTIFICATE_LOGIN_ATTEMPTED: 'certificate_login_attempted',
  
  // Content Engagement
  BLOG_POST_READ: 'blog_post_read',
  RESOURCE_DOWNLOADED: 'resource_downloaded',
  VIDEO_PLAYED: 'video_played',
  FAQ_EXPANDED: 'faq_expanded',
  
  // Navigation
  CTA_CLICKED: 'cta_button_clicked',
  NAVIGATION_CLICKED: 'navigation_clicked',
  FOOTER_LINK_CLICKED: 'footer_link_clicked',
  
  // Service Pages
  SERVICE_PAGE_VIEWED: 'service_page_viewed',
  TRADE_PAGE_VIEWED: 'trade_page_viewed',
  LOCATION_PAGE_VIEWED: 'location_page_viewed',
  
  // Conversion Goals
  NEWSLETTER_SIGNUP: 'newsletter_signup',
  CHAT_INITIATED: 'chat_initiated',
  CALLBACK_REQUESTED: 'callback_requested',
};

// Track page views
export const trackPageView = (data: PageViewData): void => {
  if (typeof window !== 'undefined') {
    // Google Analytics 4
    if ((window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_path: data.url,
        page_title: data.title,
        page_referrer: data.referrer,
      });
    }
    
    // Additional analytics platforms can be added here
    console.log('[Analytics] Page View:', data);
  }
};

// Track custom events
export const trackEvent = (event: AnalyticsEvent): void => {
  if (typeof window !== 'undefined') {
    // Google Analytics 4
    if ((window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }
    
    // Additional analytics platforms can be added here
    console.log('[Analytics] Event:', event);
  }
};

// Track conversions
export const trackConversion = (conversionType: string, value?: number): void => {
  trackEvent({
    action: 'conversion',
    category: conversionType,
    value: value,
  });
  
  // Additional conversion tracking (Google Ads, Facebook Pixel, etc.)
  if (typeof window !== 'undefined') {
    // Google Ads conversion tracking
    if ((window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL', // Replace with actual values
        value: value,
        currency: 'USD',
      });
    }
  }
};

// Track form interactions
export const trackFormInteraction = (formName: string, action: 'start' | 'complete' | 'abandon', fieldName?: string): void => {
  trackEvent({
    action: `form_${action}`,
    category: 'form_interaction',
    label: fieldName ? `${formName}_${fieldName}` : formName,
  });
};

// Track tool usage
export const trackToolUsage = (toolName: string, action: string, value?: any): void => {
  trackEvent({
    action: `tool_${action}`,
    category: 'tool_usage',
    label: toolName,
    value: typeof value === 'number' ? value : undefined,
  });
};

// Track phone clicks with dynamic number
export const trackPhoneClick = (phoneNumber: string, location: string): void => {
  trackEvent({
    action: ANALYTICS_EVENTS.PHONE_CLICKED,
    category: 'contact',
    label: `${phoneNumber}_${location}`,
  });
};

// Track CTA clicks
export const trackCTAClick = (ctaText: string, location: string, destination: string): void => {
  trackEvent({
    action: ANALYTICS_EVENTS.CTA_CLICKED,
    category: 'engagement',
    label: `${ctaText}_${location}_${destination}`,
  });
};

// Track content engagement
export const trackContentEngagement = (contentType: string, contentTitle: string, action: string): void => {
  trackEvent({
    action: action,
    category: `content_${contentType}`,
    label: contentTitle,
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number, pageTitle: string): void => {
  trackEvent({
    action: 'scroll_depth',
    category: 'engagement',
    label: pageTitle,
    value: percentage,
  });
};

// Initialize scroll tracking
export const initializeScrollTracking = (): void => {
  if (typeof window !== 'undefined') {
    let maxScroll = 0;
    const thresholds = [25, 50, 75, 90, 100];
    
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = Math.round((scrolled / scrollHeight) * 100);
      
      thresholds.forEach(threshold => {
        if (percentage >= threshold && maxScroll < threshold) {
          maxScroll = threshold;
          trackScrollDepth(threshold, document.title);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
  }
};

// Track time on page
export const trackTimeOnPage = (pageTitle: string, seconds: number): void => {
  trackEvent({
    action: 'time_on_page',
    category: 'engagement',
    label: pageTitle,
    value: seconds,
  });
};

// E-commerce tracking for insurance quotes
export const trackQuoteValue = (coverageType: string, annualPremium: number, monthlyPremium: number): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'view_item', {
      currency: 'USD',
      value: annualPremium,
      items: [{
        item_id: coverageType,
        item_name: `${coverageType} Insurance`,
        price: annualPremium,
        quantity: 1,
        item_category: 'insurance_quote',
      }]
    });
  }
};

// Track user properties for segmentation
export const setUserProperties = (properties: Record<string, any>): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('set', 'user_properties', properties);
  }
};

// Debug mode for development
export const enableAnalyticsDebug = (): void => {
  if (typeof window !== 'undefined') {
    (window as any).gtag_debug_mode = true;
    console.log('[Analytics] Debug mode enabled');
  }
};