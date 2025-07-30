// Analytics configuration
// Replace these with actual IDs when ready to implement

export const ANALYTICS_CONFIG = {
  // Google Analytics 4
  GA4_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || '',
  
  // Google Tag Manager
  GTM_ID: process.env.NEXT_PUBLIC_GTM_ID || '',
  
  // Facebook Pixel
  FB_PIXEL_ID: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
  
  // Google Ads
  GOOGLE_ADS_ID: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || '',
  GOOGLE_ADS_CONVERSION_ID: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || '',
  
  // LinkedIn Insight Tag
  LINKEDIN_PARTNER_ID: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || '',
  
  // Microsoft Clarity
  CLARITY_PROJECT_ID: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || '',
  
  // Hotjar
  HOTJAR_ID: process.env.NEXT_PUBLIC_HOTJAR_ID || '',
  HOTJAR_VERSION: process.env.NEXT_PUBLIC_HOTJAR_VERSION || '6',
  
  // Development mode
  DEBUG_MODE: process.env.NODE_ENV === 'development',
};

// Conversion tracking configuration
export const CONVERSION_EVENTS = {
  // Quote form conversions
  QUOTE_FORM_SUBMIT: {
    google_ads_label: 'QUOTE_SUBMIT_LABEL',
    facebook_event: 'Lead',
    value: 50, // Estimated value
  },
  
  // Contact form conversions
  CONTACT_FORM_SUBMIT: {
    google_ads_label: 'CONTACT_SUBMIT_LABEL',
    facebook_event: 'Contact',
    value: 30,
  },
  
  // Phone click conversions
  PHONE_CLICK: {
    google_ads_label: 'PHONE_CLICK_LABEL',
    facebook_event: 'Contact',
    value: 40,
  },
  
  // Tool usage conversions
  PREMIUM_CALCULATOR_COMPLETE: {
    google_ads_label: 'CALCULATOR_COMPLETE_LABEL',
    facebook_event: 'ViewContent',
    value: 20,
  },
  
  // Newsletter signup
  NEWSLETTER_SIGNUP: {
    google_ads_label: 'NEWSLETTER_LABEL',
    facebook_event: 'CompleteRegistration',
    value: 10,
  },
};

// Custom dimensions for Google Analytics
export const CUSTOM_DIMENSIONS = {
  USER_TYPE: 'dimension1', // New vs Returning
  TRADE_TYPE: 'dimension2', // Electrician, Plumber, etc.
  COMPANY_SIZE: 'dimension3', // Small, Medium, Large
  LOCATION: 'dimension4', // Bergen County location
  CONTENT_TYPE: 'dimension5', // Blog, Tool, Service Page
};

// Enhanced e-commerce settings
export const ECOMMERCE_SETTINGS = {
  currency: 'USD',
  tax: 0, // Insurance typically no tax
  shipping: 0, // No shipping for insurance
};