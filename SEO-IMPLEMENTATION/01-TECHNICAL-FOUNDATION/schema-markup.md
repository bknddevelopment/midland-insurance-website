# Schema Markup Implementation Guide

## Overview
Schema markup provides search engines with explicit, structured information about our content. For the construction insurance vertical, proper schema implementation is crucial for rich snippets and enhanced SERP features.

---

## InsuranceAgency Schema (Global Implementation)

### Implementation Location
Add to `app/layout.tsx` to appear on every page.

### Complete Schema Example
```jsx
const insuranceAgencySchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": "https://midlandinsurance.biz/#organization",
  "name": "Midland Associates Insurance Services LLC",
  "alternateName": "Midland Insurance",
  "description": "Leading provider of construction insurance for contractors in Bergen County, NJ. Specializing in general liability, workers' compensation, and builder's risk insurance.",
  "url": "https://midlandinsurance.biz",
  "logo": {
    "@type": "ImageObject",
    "url": "https://midlandinsurance.biz/logo.png",
    "width": 600,
    "height": 300
  },
  "image": [
    "https://midlandinsurance.biz/office-exterior.jpg",
    "https://midlandinsurance.biz/team-photo.jpg"
  ],
  "telephone": "+12018122184",
  "email": "Service@midlandinsurance.biz",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "345 RT 17 STE 22",
    "addressLocality": "Upper Saddle River",
    "addressRegion": "NJ",
    "postalCode": "07458",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.0584,
    "longitude": -74.0948
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:30",
      "closes": "17:00"
    }
  ],
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Bergen County",
      "containedIn": {
        "@type": "State",
        "name": "New Jersey"
      }
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 41.0584,
      "longitude": -74.0948
    },
    "geoRadius": "50mi"
  },
  "sameAs": [
    "https://www.facebook.com/MidlandInsurance",
    "https://www.linkedin.com/company/midland-associates-insurance",
    "https://www.google.com/maps/place/Midland+Associates+Insurance+Services"
  ],
  "knowsAbout": [
    "Construction Insurance",
    "Contractor Insurance",
    "Builder's Risk Insurance",
    "General Liability Insurance",
    "Workers Compensation Insurance"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Construction Insurance Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "General Liability Insurance for Contractors",
          "description": "Comprehensive general liability coverage for construction professionals in Bergen County"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Builder's Risk Insurance",
          "description": "Protect construction projects from damage during building phase"
        }
      }
    ]
  }
};
```

---

## BreadcrumbList Schema

### Implementation Strategy
Dynamic breadcrumbs based on URL structure.

### Component Example
```typescript
// components/seo/BreadcrumbSchema.tsx
export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### Usage Examples
```typescript
// For trade page: /trades/electrician
<BreadcrumbSchema items={[
  { name: "Home", url: "https://midlandinsurance.biz" },
  { name: "Trades We Serve", url: "https://midlandinsurance.biz/trades" },
  { name: "Electrician Insurance", url: "https://midlandinsurance.biz/trades/electrician" }
]} />

// For location page: /locations/paramus
<BreadcrumbSchema items={[
  { name: "Home", url: "https://midlandinsurance.biz" },
  { name: "Service Areas", url: "https://midlandinsurance.biz/locations" },
  { name: "Bergen County", url: "https://midlandinsurance.biz/locations/bergen-county" },
  { name: "Paramus", url: "https://midlandinsurance.biz/locations/paramus" }
]} />
```

---

## FAQPage Schema

### Implementation for Service Pages
Each service, trade, and location page should include relevant FAQs.

### Component Example
```typescript
// components/seo/FAQSchema.tsx
export function FAQSchema({ faqs }: { faqs: FAQ[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### FAQ Examples by Page Type

#### Builder's Risk Page FAQs
```typescript
const builderRiskFAQs = [
  {
    question: "Do I need builder's risk insurance for a renovation project in Bergen County?",
    answer: "Yes, builder's risk insurance is recommended for any significant renovation project. It protects against fire, theft, vandalism, and weather damage during construction. Many lenders in New Jersey require it for construction loans."
  },
  {
    question: "What's the difference between builder's risk and general liability insurance?",
    answer: "Builder's risk covers physical damage to the structure being built, while general liability covers bodily injury and property damage to third parties. Contractors in Bergen County typically need both types of coverage."
  },
  {
    question: "How much does builder's risk insurance cost in NJ?",
    answer: "Builder's risk insurance typically costs 1-4% of the total project value. For a $500,000 construction project in Bergen County, expect to pay $5,000-$20,000 for coverage, depending on project type and duration."
  }
];
```

#### Electrician Insurance FAQs
```typescript
const electricianFAQs = [
  {
    question: "What insurance is required for electricians in New Jersey?",
    answer: "New Jersey requires licensed electricians to carry at least $300,000 in general liability insurance and a $1,000 surety bond. Most Bergen County contractors also carry workers' compensation and commercial auto insurance."
  },
  {
    question: "Does electrician insurance cover faulty wiring claims?",
    answer: "Yes, general liability insurance with completed operations coverage protects against claims from faulty wiring that causes damage after the job is complete. This is essential protection for Bergen County electricians."
  }
];
```

---

## LocalBusiness Schema for Location Pages

### Location-Specific Implementation
Each location page gets its own LocalBusiness schema with unique service area.

### Paramus Example
```javascript
const paramusLocationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://midlandinsurance.biz/locations/paramus#localbusiness",
  "name": "Midland Associates Insurance - Paramus Construction Insurance",
  "description": "Specialized construction insurance services for contractors in Paramus, NJ. Covering major projects including Vermella Paramus and Bergen Town Center developments.",
  "url": "https://midlandinsurance.biz/locations/paramus",
  "telephone": "+12018122184",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "345 RT 17 STE 22",
    "addressLocality": "Upper Saddle River",
    "addressRegion": "NJ",
    "postalCode": "07458"
  },
  "areaServed": {
    "@type": "City",
    "name": "Paramus",
    "containedIn": {
      "@type": "AdministrativeArea",
      "name": "Bergen County"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Paramus Contractor Insurance Services",
    "itemListElement": [
      "General Liability Insurance",
      "Builder's Risk Insurance",
      "Workers Compensation",
      "Commercial Auto Insurance"
    ]
  }
};
```

---

## Service Schema for Trade Pages

### Implementation for Specific Trades
```javascript
const plumberInsuranceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Plumber Insurance",
  "provider": {
    "@id": "https://midlandinsurance.biz/#organization"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Bergen County, NJ"
  },
  "description": "Comprehensive insurance coverage for licensed plumbers in Bergen County, including general liability, tools coverage, and commercial auto.",
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "Varies",
      "priceCurrency": "USD"
    }
  },
  "potentialAction": {
    "@type": "GetQuote",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://midlandinsurance.biz/quote",
      "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
    }
  }
};
```

---

## Implementation Checklist

### Global Schemas (layout.tsx)
- [ ] InsuranceAgency schema
- [ ] Organization schema
- [ ] WebSite schema with SiteNavigationElement

### Page-Specific Schemas
- [ ] Service pages: Service + FAQPage schemas
- [ ] Trade pages: Service + FAQPage + BreadcrumbList
- [ ] Location pages: LocalBusiness + BreadcrumbList
- [ ] Blog posts: Article + BreadcrumbList
- [ ] Contact page: ContactPage schema

### Testing & Validation
- [ ] Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Schema Markup Validator: https://validator.schema.org/
- [ ] Structured Data Testing Tool
- [ ] Monitor in Search Console for errors

---

## Common Schema Errors to Avoid

1. **Missing Required Properties**
   - Always include: name, description, url
   - For LocalBusiness: address, telephone

2. **Invalid Date Formats**
   - Use ISO 8601: "2024-01-15T09:00:00-05:00"

3. **Incorrect @id Usage**
   - Use full URLs with anchors for references
   - Maintain consistency across pages

4. **Missing Context**
   - Always include "@context": "https://schema.org"

5. **Improper Nesting**
   - Validate JSON structure before deployment

---

## Monitoring & Maintenance

### Weekly Checks
- [ ] Review Search Console enhancement reports
- [ ] Check for new schema warnings
- [ ] Update schemas for new content

### Monthly Review
- [ ] Analyze rich snippet performance
- [ ] Update schemas based on Google changes
- [ ] Test all schemas remain valid

---

*Last Updated: [Date]*  
*Schema Version: Schema.org v15.0*