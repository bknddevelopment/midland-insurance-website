/**
 * External URL constants for the application
 * Centralized location for all external service URLs
 */

export const EXTERNAL_URLS = {
  // N8N Form URLs
  QUOTE_FORM: 'https://midlandinsurance.app.n8n.cloud/form/insurance-quote',
  
  // Add other external URLs here as needed
  // CONTACT_FORM: 'https://...',
  // PAYMENT_PORTAL: 'https://...',
} as const;

// Type-safe URL keys
export type ExternalUrlKey = keyof typeof EXTERNAL_URLS;