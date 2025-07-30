# Analytics Implementation Guide

This guide explains how to implement and configure analytics tracking for the MidLand Insurance website.

## Overview

The analytics system is pre-configured and ready for implementation. All tracking code is already integrated throughout the site - you just need to add your tracking IDs.

## Quick Start

1. **Copy the environment file:**
   ```bash
   cp .env.local.example .env.local
   ```

2. **Add your tracking IDs to `.env.local`:**
   ```
   NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-YOUR-ID-HERE
   NEXT_PUBLIC_FB_PIXEL_ID=YOUR-PIXEL-ID
   # Add other IDs as needed
   ```

3. **Restart the development server:**
   ```bash
   npm run dev
   ```

That's it! Analytics will start tracking automatically.

## Supported Analytics Platforms

### 1. Google Analytics 4 (GA4)
- **Purpose:** Comprehensive website analytics
- **Setup:** Add your Measurement ID to `NEXT_PUBLIC_GA4_MEASUREMENT_ID`
- **Features:**
  - Page views
  - Custom events
  - E-commerce tracking
  - User engagement metrics
  - Scroll depth tracking

### 2. Google Tag Manager (GTM)
- **Purpose:** Manage all tags from one place
- **Setup:** Add your Container ID to `NEXT_PUBLIC_GTM_ID`
- **Benefits:** Add/modify tracking without code changes

### 3. Facebook Pixel
- **Purpose:** Facebook ads tracking and retargeting
- **Setup:** Add your Pixel ID to `NEXT_PUBLIC_FB_PIXEL_ID`
- **Tracks:**
  - Page views
  - Lead events (quote forms)
  - Custom conversions

### 4. Google Ads
- **Purpose:** Track ad conversions
- **Setup:** Add IDs to `NEXT_PUBLIC_GOOGLE_ADS_ID` and conversion labels
- **Conversions tracked:**
  - Quote form submissions
  - Phone clicks
  - Contact form submissions

### 5. LinkedIn Insight Tag
- **Purpose:** LinkedIn ads tracking
- **Setup:** Add Partner ID to `NEXT_PUBLIC_LINKEDIN_PARTNER_ID`

### 6. Microsoft Clarity
- **Purpose:** Session recordings and heatmaps
- **Setup:** Add Project ID to `NEXT_PUBLIC_CLARITY_PROJECT_ID`

### 7. Hotjar
- **Purpose:** User behavior analytics
- **Setup:** Add ID to `NEXT_PUBLIC_HOTJAR_ID`

## Pre-Configured Tracking

The following events are automatically tracked:

### Page Views
- All page navigations
- Time on page
- Referrer information
- Page titles and URLs

### User Engagement
- Scroll depth (25%, 50%, 75%, 90%, 100%)
- CTA button clicks
- Navigation menu clicks
- Footer link clicks

### Form Interactions
- Form starts
- Field interactions
- Form completions
- Form abandonment

### Contact Actions
- Phone number clicks (with location tracking)
- Email clicks
- Address/map clicks

### Tool Usage
- Premium calculator usage and completions
- Coverage checklist downloads
- Risk assessment completions
- Certificate generator logins

### Content Engagement
- Blog post reads
- Resource downloads
- FAQ expansions
- Video plays (when added)

### Conversion Events
- Quote form submissions
- Contact form submissions
- Newsletter signups
- Tool completions

## Implementation Details

### Using Analytics in Components

```typescript
import { useAnalytics } from '@/hooks/useAnalytics';

function MyComponent() {
  const { trackCTA, trackPhone } = useAnalytics();
  
  return (
    <>
      <button onClick={() => trackCTA('Get Quote', 'hero', '/quote')}>
        Get Quote
      </button>
      
      <a 
        href="tel:2018122184" 
        onClick={() => trackPhone('(201) 812-2184', 'header')}
      >
        Call Now
      </a>
    </>
  );
}
```

### Custom Event Tracking

```typescript
import { trackEvent } from '@/lib/analytics';

// Track a custom event
trackEvent({
  action: 'download_pdf',
  category: 'resources',
  label: 'construction_guide',
  value: 1
});
```

### Conversion Tracking

```typescript
import { trackConversion } from '@/lib/analytics';

// Track a conversion
trackConversion('quote_form_submit', 50); // $50 estimated value
```

## Testing Analytics

1. **Enable Debug Mode:**
   - Analytics are automatically in debug mode during development
   - Check browser console for `[Analytics]` logs

2. **Google Analytics Debug:**
   - Install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
   - View events in GA4 DebugView

3. **Facebook Pixel Helper:**
   - Install [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
   - Verify pixel fires correctly

## Best Practices

1. **Privacy Compliance:**
   - Add cookie consent banner before going live
   - Update Privacy Policy with analytics disclosure
   - Consider GDPR/CCPA requirements

2. **Performance:**
   - Analytics scripts load with `afterInteractive` strategy
   - No impact on initial page load
   - Minimal performance overhead

3. **Data Quality:**
   - Test all conversion events before launching campaigns
   - Verify form tracking works correctly
   - Check that phone tracking includes location

4. **Custom Dimensions:**
   - Set up custom dimensions in GA4 for:
     - User type (new/returning)
     - Trade type
     - Company size
     - Location
     - Content type

## Troubleshooting

### Analytics Not Firing
1. Check that tracking IDs are in `.env.local`
2. Verify no ad blockers are active
3. Check browser console for errors
4. Ensure cookies are enabled

### Missing Events
1. Check that components use analytics hooks
2. Verify event names match configuration
3. Use debug mode to see all events

### Conversion Tracking Issues
1. Verify conversion IDs are correct
2. Test in Google Ads Tag Assistant
3. Check that values are being passed

## Advanced Configuration

### Custom Analytics Provider

To add a new analytics provider:

1. Create component in `/components/analytics/`
2. Add configuration to `/lib/analytics/config.ts`
3. Update tracking functions in `/lib/analytics/index.ts`
4. Add to layout if needed

### Enhanced E-commerce

For detailed quote tracking:

```typescript
trackQuoteValue('general-liability', 2400, 200); // Annual: $2400, Monthly: $200
```

### User Properties

Set user properties for segmentation:

```typescript
setUserProperties({
  trade_type: 'electrician',
  company_size: 'medium',
  location: 'bergen-county'
});
```

## Going Live Checklist

- [ ] Add all production tracking IDs to `.env.local`
- [ ] Test all conversion events
- [ ] Verify privacy policy is updated
- [ ] Implement cookie consent (if required)
- [ ] Set up GA4 custom dimensions
- [ ] Configure Google Ads conversion tracking
- [ ] Test Facebook Pixel events
- [ ] Verify all forms track correctly
- [ ] Check phone click tracking
- [ ] Monitor first 24 hours of data

## Support

For analytics setup assistance:
- Google Analytics: [GA4 Help Center](https://support.google.com/analytics)
- Facebook Business: [Business Help Center](https://www.facebook.com/business/help)
- Google Ads: [Ads Help](https://support.google.com/google-ads)

For implementation questions, refer to the code examples above or check the analytics files in:
- `/lib/analytics/` - Core analytics functions
- `/hooks/useAnalytics.ts` - React hook for components
- `/components/analytics/` - Analytics provider components