# Photo Directory Structure

This directory contains all images used on the Midland Associates Insurance website.

## Directory Organization

- **`hero/`** - Hero section background images and featured photos
- **`team/`** - Photos of team members and staff
- **`office/`** - Office building, interior shots, and location photos
- **`services/`** - Service-related images (auto, home, business insurance visuals)
- **`testimonials/`** - Customer photos and testimonial-related images
- **`logo/`** - Company logo files used in navbar and footer

## Image Guidelines

### File Naming Convention
- Use descriptive names with hyphens: `team-member-john-smith.jpg`
- Include dimensions for hero images: `hero-insurance-protection-1920x1080.jpg`
- Use consistent naming for team photos: `team-[firstname]-[lastname].jpg`

### Image Specifications
- **Hero images**: 1920x1080px minimum, optimized for web
- **Team photos**: 400x400px square format, professional headshots
- **Service images**: 800x600px, relevant to insurance services
- **Office photos**: Various sizes, high quality for about page

### Supported Formats
- `.jpg` - For photographs and complex images
- `.png` - For images with transparency or simple graphics
- `.webp` - Modern format for better compression (preferred)

## Usage in Code
Images in this directory can be referenced in Next.js components using:
```javascript
import Image from 'next/image'

// For static imports
<Image src="/photos/team/john-smith.jpg" alt="John Smith" width={400} height={400} />

// Or with dynamic paths
const imagePath = `/photos/hero/insurance-protection.jpg`
<Image src={imagePath} alt="Insurance Protection" fill />
```

## Notes
- All images should be optimized for web before uploading
- Keep file sizes reasonable (under 1MB for most images)
- Use descriptive alt text for accessibility
- Consider using Next.js Image component for automatic optimization 