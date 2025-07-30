# Analytics Implementation Guide

## Overview

This document outlines the analytics tracking implementation for the MidLand Insurance construction website. The implementation is designed to be flexible and easy to integrate with various analytics platforms.

## Setup Instructions

### 1. Environment Variables

Copy `.env.example` to `.env.local` and add your analytics IDs:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your actual analytics IDs:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR-ID-HERE
NEXT_PUBLIC_GTM_ID=GTM-YOUR-ID
NEXT_PUBLIC_FB_PIXEL_ID=YOUR-PIXEL-ID
```

### 2. Add Analytics to Layout

In `app/layout.tsx`, add the analytics components:

```tsx
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import AnalyticsProvider from '@/components/analytics/AnalyticsProvider';
import { ANALYTICS_CONFIG } from '@/lib/analytics/config';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {ANALYTICS_CONFIG.GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={ANALYTICS_CONFIG.GA_MEASUREMENT_ID} />
        )}
      </head>
      <body>
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  );
}
```

## Tracking Implementation

### Page Views

Page views are automatically tracked by the `AnalyticsProvider`. No additional implementation needed.

### Events

Use the tracking functions from `@/lib/analytics`:

```tsx
import { trackEvent, ANALYTICS_EVENTS } from '@/lib/analytics';

// Track a button click
const handleClick = () => {
  trackEvent({
    action: ANALYTICS_EVENTS.CTA_CLICKED,
    category: 'engagement',
    label: 'Get Quote - Hero Section',
  });
};
```

### Forms

Use the `useFormTracking` hook:

```tsx
import { useFormTracking } from '@/lib/analytics/hooks';

function ContactForm() {
  const { trackFieldInteraction, trackFormSubmit } = useFormTracking('contact_form');

  const handleFieldChange = (fieldName: string) => {
    trackFieldInteraction(fieldName);
  };

  const handleSubmit = async (data: FormData) => {
    try {
      await submitForm(data);
      trackFormSubmit(true);
    } catch (error) {
      trackFormSubmit(false);
    }
  };
}
```

### Trackable Components

Use the pre-built trackable components:

```tsx
import TrackableButton from '@/components/analytics/TrackableButton';
import TrackableLink from '@/components/analytics/TrackableLink';

// Button with tracking
<TrackableButton
  trackingLabel="Get Quote"
  trackingLocation="hero_section"
  trackingDestination="/quote"
  className="btn-primary"
>
  Get Your Quote
</TrackableButton>

// Link with tracking
<TrackableLink
  href="/quote"
  trackingLabel="Start Quote"
  trackingLocation="navigation"
  className="nav-link"
>
  Get a Quote
</TrackableLink>

// Phone number with tracking
<TrackableLink
  href="tel:2018122184"
  trackingLabel="(201) 812-2184"
  trackingLocation="header"
  isPhoneNumber={true}
>
  (201) 812-2184
</TrackableLink>
```

## Key Events to Track

### Quote Funnel
- Quote form started
- Each step completed
- Quote form submitted
- Quote form abandoned

### Lead Generation
- Phone number clicks
- Contact form submissions
- Email clicks
- Chat initiated

### Content Engagement
- Blog posts read (time on page)
- Resources downloaded
- Videos watched
- FAQ interactions

### Tool Usage
- Premium calculator used
- Coverage checklist downloaded
- Risk assessment completed
- Certificate generator accessed

### Navigation
- Service pages viewed
- Trade pages viewed
- Location pages viewed
- CTAs clicked

## Conversion Tracking

### Setting Up Conversions

1. **Google Ads Conversions**
   - Set up conversion actions in Google Ads
   - Add conversion IDs to `.env.local`
   - Track using `trackConversion()` function

2. **Facebook Pixel Conversions**
   - Create custom conversions in Facebook Events Manager
   - Track using standard events (Lead, Contact, etc.)

3. **Goal Configuration in GA4**
   - Configure conversions in GA4 interface
   - Mark important events as conversions

### Example Conversion Tracking

```tsx
import { trackConversion, CONVERSION_GOALS } from '@/lib/analytics';

// Track quote submission
const handleQuoteSubmit = () => {
  trackConversion(
    CONVERSION_GOALS.QUOTE_REQUEST.id,
    CONVERSION_GOALS.QUOTE_REQUEST.value
  );
};

// Track phone call
const handlePhoneClick = () => {
  trackConversion(
    CONVERSION_GOALS.PHONE_CALL.id,
    CONVERSION_GOALS.PHONE_CALL.value
  );
};
```

## Custom Dimensions

Set up custom dimensions in GA4 for better segmentation:

1. User Type (new visitor, returning, client)
2. Trade Type (general contractor, electrician, etc.)
3. Company Size (small, medium, large)
4. Location (Bergen County, specific town)
5. Content Category (service, trade, location, resource)

## Testing Analytics

### Debug Mode

Enable debug mode in development:

```tsx
import { enableAnalyticsDebug } from '@/lib/analytics';

// In development
if (process.env.NODE_ENV === 'development') {
  enableAnalyticsDebug();
}
```

### Testing Checklist

- [ ] Page views firing on navigation
- [ ] Events firing on interactions
- [ ] Form tracking working properly
- [ ] Conversion events firing
- [ ] No duplicate events
- [ ] Data showing in real-time reports

## Best Practices

1. **Consistent Naming Convention**
   - Use snake_case for event names
   - Be descriptive but concise
   - Follow the category/action/label hierarchy

2. **Avoid Over-Tracking**
   - Track meaningful interactions only
   - Focus on business-critical events
   - Avoid tracking every click

3. **Privacy Compliance**
   - Include analytics in privacy policy
   - Implement cookie consent if required
   - Anonymize IP addresses

4. **Performance**
   - Load analytics asynchronously
   - Use batching for multiple events
   - Minimize impact on Core Web Vitals

## Reporting Setup

### Recommended Reports

1. **Acquisition Reports**
   - Traffic sources by trade/service
   - Location-based traffic analysis
   - Campaign performance

2. **Behavior Reports**
   - Page flow analysis
   - Tool usage metrics
   - Content engagement

3. **Conversion Reports**
   - Quote funnel analysis
   - Multi-channel attribution
   - Goal completion by source

### Custom Dashboards

Create dashboards for:
- Executive overview
- Marketing performance
- Content effectiveness
- Tool usage analytics

## Maintenance

### Monthly Tasks
- Review tracking accuracy
- Check for broken events
- Update conversion values
- Analyze user flow

### Quarterly Tasks
- Audit tracking implementation
- Review and optimize events
- Update custom dimensions
- Refine conversion tracking

## Support

For analytics support or questions:
- Check console for debug messages
- Review real-time reports in GA4
- Contact development team for implementation issues