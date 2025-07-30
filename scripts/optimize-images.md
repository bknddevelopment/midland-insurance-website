# Image Optimization Guide for Core Web Vitals

## Overview
This guide provides step-by-step instructions for optimizing images to improve LCP (Largest Contentful Paint) scores.

---

## Current Issues to Address

### 1. Hero Image Optimization
**File**: `/photos/gallery/20250721_1442_Insurance Consultation Scene_simple_compose_01k0q4n4jces6spa4s75f9j1se.png`
- Current format: PNG (likely large)
- Action needed: Convert to WebP/AVIF with fallback

### 2. Missing Lazy Loading
- Many images load immediately on page load
- Need to implement lazy loading for below-fold images

### 3. Missing Explicit Dimensions
- Images without width/height cause layout shifts (CLS)
- Need to add explicit dimensions to all images

---

## Implementation Steps

### Step 1: Install Image Optimization Tools
```bash
npm install --save-dev @squoosh/lib sharp
```

### Step 2: Create Image Optimization Script
Create `scripts/optimize-images.js`:

```javascript
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImages() {
  const inputDir = path.join(__dirname, '../public/photos');
  const outputDir = path.join(__dirname, '../public/photos/optimized');
  
  // Create output directory
  await fs.mkdir(outputDir, { recursive: true });
  
  // Get all images
  const files = await fs.readdir(inputDir, { withFileTypes: true });
  
  for (const file of files) {
    if (file.isFile() && /\.(jpg|jpeg|png)$/i.test(file.name)) {
      const inputPath = path.join(inputDir, file.name);
      const nameWithoutExt = path.parse(file.name).name;
      
      // Generate WebP
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(path.join(outputDir, `${nameWithoutExt}.webp`));
      
      // Generate AVIF
      await sharp(inputPath)
        .avif({ quality: 80 })
        .toFile(path.join(outputDir, `${nameWithoutExt}.avif`));
      
      console.log(`Optimized: ${file.name}`);
    }
  }
}

optimizeImages().catch(console.error);
```

### Step 3: Update Next.js Image Component Usage

#### Create Optimized Image Component
Create `components/OptimizedImage.tsx`:

```typescript
import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  sizes = '100vw'
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        quality={85}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        `}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}
```

### Step 4: Implement Lazy Loading Strategy

#### Update Homepage Images
1. Hero image: Keep `priority={true}` (above fold)
2. Service icons: Use SVGs (already optimized)
3. Google icon: Lazy load (below fold)
4. Background images: Lazy load with Intersection Observer

### Step 5: Add Preconnect for External Resources
Update `app/layout.tsx`:

```typescript
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
</head>
```

### Step 6: Implement Resource Hints
Add to critical images:

```typescript
// For hero image
<link
  rel="preload"
  as="image"
  href="/photos/optimized/hero-image.webp"
  type="image/webp"
/>
```

---

## Performance Testing Checklist

### Before Optimization
- [ ] Run PageSpeed Insights baseline test
- [ ] Document current LCP time
- [ ] Note current image sizes

### After Each Step
- [ ] Re-run PageSpeed test
- [ ] Compare LCP improvement
- [ ] Verify no visual regression
- [ ] Check browser compatibility

### Target Metrics
- LCP: < 2.5s (Good)
- Image file sizes: < 200KB for hero images
- Format: WebP primary, JPEG fallback
- Loading: Progressive enhancement

---

## Quick Wins for Immediate Impact

1. **Convert Hero Image**
   - Current: PNG (potentially 2-5MB)
   - Target: WebP < 200KB
   - Expected LCP improvement: 1-2 seconds

2. **Add Loading="lazy" to Below-fold Images**
   - Google icon on line 438
   - Any gallery images
   - Expected improvement: Reduced initial payload

3. **Implement Blur Placeholders**
   - Generate base64 blur data
   - Add to all Next/Image components
   - Expected improvement: Better perceived performance

---

## Monitoring

### Set up Real User Monitoring (RUM)
```javascript
// Add to app/layout.tsx
if (typeof window !== 'undefined') {
  // Log Web Vitals
  if ('web-vital' in window) {
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        console.log(entry.name, entry.value);
        // Send to analytics
      }
    }).observe({ entryTypes: ['web-vital'] });
  }
}
```

---

*Created: January 30, 2025*  
*Next Review: After initial optimizations*