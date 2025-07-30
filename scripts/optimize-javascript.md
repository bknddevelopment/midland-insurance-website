# JavaScript Optimization Guide for Core Web Vitals

## Overview
This guide focuses on improving INP (Interaction to Next Paint) and overall JavaScript performance.

---

## Current Issues Analysis

### 1. Framer Motion Animations
- Heavy animation library loaded on every page
- Blocking initial render
- Can delay interactions

### 2. Third-party Scripts
- Google Analytics (if present)
- Chat widgets
- Other tracking scripts

### 3. Bundle Size
- No code splitting implemented
- All components loaded upfront
- Large initial JavaScript payload

---

## Optimization Strategy

### Phase 1: Quick Wins (Day 2-3)

#### 1. Defer Non-Critical Scripts
Update `app/layout.tsx`:

```typescript
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to improve loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Defer non-critical scripts */}
        <script
          defer
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
      </head>
      <body>
        {children}
        
        {/* Move analytics to end of body */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  );
}
```

#### 2. Optimize Framer Motion Usage
Create `hooks/useReducedMotion.ts`:

```typescript
import { useReducedMotion as useFramerReducedMotion } from 'framer-motion';

export function useReducedMotion() {
  const prefersReducedMotion = useFramerReducedMotion();
  
  return {
    initial: prefersReducedMotion ? false : { opacity: 0, y: 20 },
    animate: prefersReducedMotion ? false : { opacity: 1, y: 0 },
    transition: prefersReducedMotion ? {} : { duration: 0.3 }
  };
}
```

#### 3. Implement Dynamic Imports
Update homepage sections to load on demand:

```typescript
import dynamic from 'next/dynamic';

// Lazy load heavy components
const TestimonialsSection = dynamic(
  () => import('@/components/sections/Testimonials'),
  { 
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
    ssr: true 
  }
);

const FAQSection = dynamic(
  () => import('@/components/sections/FAQ'),
  { 
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
    ssr: true 
  }
);
```

### Phase 2: Bundle Optimization (Day 3-4)

#### 1. Analyze Bundle Size
Add to `package.json`:

```json
{
  "scripts": {
    "analyze": "ANALYZE=true next build"
  }
}
```

Create `next.config.js` updates:

```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // ... existing config
  
  // Optimize chunks
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      };
    }
    return config;
  },
});
```

#### 2. Remove Unused Dependencies
Check and remove:
- Unused icon libraries
- Development dependencies in production
- Duplicate functionality packages

### Phase 3: Performance Monitoring (Day 4-5)

#### 1. Add Web Vitals Reporting
Create `components/WebVitals.tsx`:

```typescript
'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(metric);
    }
    
    // Send to analytics in production
    if (window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }
  });
  
  return null;
}
```

#### 2. Implement Interaction Tracking
Track slow interactions:

```typescript
// Add to app/layout.tsx
if (typeof window !== 'undefined') {
  // Monitor long tasks
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.duration > 50) {
        console.warn('Long task detected:', entry);
      }
    }
  });
  
  observer.observe({ entryTypes: ['longtask'] });
}
```

---

## INP Optimization Checklist

### Reduce Input Delay
- [ ] Debounce search inputs
- [ ] Throttle scroll handlers
- [ ] Use CSS transforms instead of JavaScript animations
- [ ] Implement virtual scrolling for long lists

### Optimize Event Handlers
- [ ] Remove unnecessary event listeners
- [ ] Use event delegation where possible
- [ ] Avoid synchronous layouts in handlers
- [ ] Batch DOM updates

### Code Examples

#### Debounced Input Handler
```typescript
import { useMemo, useState } from 'react';
import debounce from 'lodash/debounce';

function SearchInput() {
  const [value, setValue] = useState('');
  
  const debouncedSearch = useMemo(
    () => debounce((searchTerm: string) => {
      // Perform search
      console.log('Searching for:', searchTerm);
    }, 300),
    []
  );
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debouncedSearch(e.target.value);
  };
  
  return <input value={value} onChange={handleChange} />;
}
```

#### Optimized Scroll Handler
```typescript
import { useEffect, useRef } from 'react';

function ScrollComponent() {
  const ticking = useRef(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          // Perform scroll-based updates
          updateScrollPosition();
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return <div>Content</div>;
}
```

---

## Testing Performance Improvements

### Before Each Change
1. Record baseline INP score
2. Note specific slow interactions
3. Document current bundle size

### After Implementation
1. Re-test INP with Chrome DevTools
2. Use Lighthouse performance audit
3. Monitor real user metrics

### Target Metrics
- INP: < 200ms (Good)
- Total Blocking Time: < 300ms
- Time to Interactive: < 3.8s
- JavaScript bundle: < 200KB gzipped

---

## Priority Order

1. **Immediate Impact** (Day 2)
   - Defer third-party scripts
   - Remove unused imports
   - Optimize animation usage

2. **Medium Impact** (Day 3)
   - Implement code splitting
   - Dynamic imports for below-fold
   - Bundle optimization

3. **Long-term** (Day 4-5)
   - Component lazy loading
   - Service worker for caching
   - Progressive enhancement

---

*Created: January 30, 2025*  
*Next Review: After initial optimizations*