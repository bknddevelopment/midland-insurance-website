# Core Web Vitals Optimization Guide

## Overview
Core Web Vitals (CWV) are Google's key metrics for measuring user experience and are a confirmed ranking factor. For construction contractors accessing our site from job sites on mobile devices, performance is critical.

## Target Metrics
- **LCP (Largest Contentful Paint)**: < 2.5 seconds ✅
- **INP (Interaction to Next Paint)**: < 200 milliseconds ✅
- **CLS (Cumulative Layout Shift)**: < 0.1 ✅

---

## Largest Contentful Paint (LCP) Optimization

### Current Status
- [ ] Baseline measurement completed
- [ ] Current LCP: ___ seconds

### Image Optimization Strategy
1. **Convert to Next-Gen Formats**
   - [ ] Implement WebP conversion for all images
   - [ ] Set up AVIF as fallback for supported browsers
   - [ ] Use Next.js Image component for automatic optimization

2. **Responsive Images**
   ```jsx
   <Image
     src="/hero-construction.jpg"
     alt="Construction Insurance Bergen County"
     width={1200}
     height={600}
     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
     priority // for above-fold images
   />
   ```

3. **Lazy Loading**
   - [ ] Implement lazy loading for below-fold images
   - [ ] Use `loading="lazy"` for standard images
   - [ ] Configure Intersection Observer for advanced control

### Server Response Optimization
1. **Hosting Requirements**
   - [ ] Verify TTFB < 200ms
   - [ ] Enable Gzip/Brotli compression
   - [ ] Configure CDN for static assets
   - [ ] Set up edge caching

2. **Critical CSS Implementation**
   ```javascript
   // next.config.js
   module.exports = {
     experimental: {
       optimizeCss: true,
     },
   }
   ```

### Resource Loading Priority
- [ ] Preload critical fonts
- [ ] Preconnect to third-party domains
- [ ] Prefetch next likely navigation

---

## Interaction to Next Paint (INP) Optimization

### JavaScript Optimization
1. **Code Splitting**
   - [ ] Implement dynamic imports for heavy components
   - [ ] Use React.lazy() for route-based splitting
   - [ ] Analyze bundle size with webpack-bundle-analyzer

2. **Third-Party Scripts**
   ```jsx
   // Load non-critical scripts after page load
   <Script
     src="https://www.googletagmanager.com/gtag/js"
     strategy="afterInteractive"
   />
   ```

3. **Event Handler Optimization**
   - [ ] Debounce scroll and resize handlers
   - [ ] Use passive event listeners where possible
   - [ ] Optimize form validation logic

### Main Thread Optimization
- [ ] Move heavy computations to Web Workers
- [ ] Implement virtual scrolling for long lists
- [ ] Use CSS transforms instead of JavaScript animations

---

## Cumulative Layout Shift (CLS) Prevention

### Image and Media Handling
1. **Set Explicit Dimensions**
   ```jsx
   // Always include width and height
   <img
     src="/contractor-tools.jpg"
     width="800"
     height="600"
     alt="Contractor Tools Coverage"
   />
   ```

2. **Aspect Ratio Boxes**
   ```css
   .video-container {
     position: relative;
     padding-bottom: 56.25%; /* 16:9 */
     height: 0;
   }
   ```

### Font Loading Strategy
1. **Font Display Settings**
   ```css
   @font-face {
     font-family: 'Inter';
     font-display: swap; /* or optional */
     src: url('/fonts/inter.woff2') format('woff2');
   }
   ```

2. **Preload Critical Fonts**
   ```html
   <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
   ```

### Dynamic Content
- [ ] Reserve space for ads/banners
- [ ] Use skeleton screens during loading
- [ ] Avoid inserting content above existing content

---

## Implementation Checklist

### Week 1 Tasks
- [ ] Run initial PageSpeed Insights audit
- [ ] Document baseline metrics
- [ ] Implement image optimization
- [ ] Configure lazy loading
- [ ] Set up Critical CSS

### Week 2 Tasks
- [ ] Optimize JavaScript loading
- [ ] Configure font loading strategy
- [ ] Implement dimension attributes
- [ ] Test on slow 3G connection
- [ ] Validate improvements

---

## Testing & Monitoring

### Tools
1. **PageSpeed Insights**: https://pagespeed.web.dev/
2. **WebPageTest**: https://www.webpagetest.org/
3. **Chrome DevTools**: Performance tab
4. **Web Vitals Extension**: Chrome Web Store

### Testing Scenarios
- [ ] Desktop - Cable connection
- [ ] Mobile - 4G connection
- [ ] Mobile - 3G connection (job site simulation)
- [ ] Various devices (iPhone, Android)

### Monitoring Setup
```javascript
// Add to layout.tsx
import { WebVitalsReporter } from '@/components/WebVitalsReporter';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <WebVitalsReporter />
      </body>
    </html>
  );
}
```

---

## Performance Budget

### Target Metrics
- Total Page Weight: < 2MB
- JavaScript Bundle: < 300KB (gzipped)
- CSS Bundle: < 50KB (gzipped)
- Time to Interactive: < 3.5s
- First Contentful Paint: < 1.5s

### Monitoring Thresholds
- Alert if LCP > 3s
- Alert if INP > 300ms
- Alert if CLS > 0.15

---

## Common Issues & Solutions

### Issue: Large Hero Images
**Solution**: Use responsive images with srcset and optimize file size

### Issue: Web Font Flash
**Solution**: Use font-display: optional or implement FOUT strategy

### Issue: Third-party Script Blocking
**Solution**: Load scripts asynchronously or defer until after user interaction

### Issue: Layout Shift from Ads
**Solution**: Reserve space with min-height based on expected ad size

---

*Last Updated: [Date]*  
*Next Review: [Date + 1 month]*