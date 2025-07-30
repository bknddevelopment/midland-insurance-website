# Site Structure & URL Hierarchy Guide

## Overview
A logical, well-organized site structure is fundamental for both user experience and search engine crawling. This guide outlines the optimal URL hierarchy for dominating construction insurance searches in Bergen County.

---

## URL Structure Principles

### Best Practices
1. **Descriptive URLs**: Include target keywords naturally
2. **Hierarchical Structure**: Reflect content relationships
3. **Consistent Format**: Use hyphens, lowercase only
4. **Keyword Placement**: Primary keyword near beginning
5. **Avoid Parameters**: Use clean, static URLs

### URL Formula
```
https://midlandinsurance.biz/[category]/[subcategory]/[specific-page]
```

---

## Complete URL Hierarchy

### Homepage
```
https://midlandinsurance.biz/
```

### Primary Service Categories

#### Personal Insurance
```
/personal/                           # Hub page
/personal/auto/
/personal/homeowners/
/personal/boat/
/personal/motorcycle/
/personal/life/
/personal/flood/
/personal/condo/
/personal/high-net-worth/
/personal/classic-auto/
/personal/travel/
```

#### Business Insurance (Construction Focus)
```
/business/                           # Hub page
/business/construction/              # Construction insurance hub
/business/construction/general-liability/
/business/construction/builders-risk/
/business/construction/workers-compensation/
/business/construction/commercial-auto/
/business/construction/tools-equipment/
/business/construction/bonds/
/business/bop/
/business/cyber-liability/
/business/professional-liability/
/business/commercial-umbrella/
```

### Trade-Specific Pages
```
/trades/                             # Hub page listing all trades
/trades/electrician/
/trades/plumber/
/trades/roofer/
/trades/general-contractor/
/trades/mason/
/trades/hvac-contractor/
/trades/landscaper/
/trades/painter/
/trades/carpenter/
/trades/concrete-contractor/
```

### Location Pages
```
/locations/                          # Service area overview
/locations/bergen-county/            # County hub page
/locations/paramus/
/locations/hackensack/
/locations/ridgewood/
/locations/fort-lee/
/locations/mahwah/
/locations/upper-saddle-river/
/locations/ramsey/
/locations/westwood/
/locations/fair-lawn/
```

### Combination Pages (Service + Location)
```
/construction-insurance-bergen-county/
/contractor-insurance-paramus/
/builders-risk-hackensack/
/electrician-insurance-ridgewood/
```

### Supporting Pages
```
/about/
/about/independent/
/about/insurance-tips/
/about/refer-friends/
/about/leave-review/

/client-services/
/claims/
/policy-review/
/id-cards/
/update-policy/
/billing/
/coverage-questions/

/contact/
/quote/
/make-payment/

/blog/                               # Blog homepage
/blog/[category]/                    # Category archives
/blog/[year]/[month]/[slug]/         # Individual posts

/resources/                          # Resource hub
/resources/contractor-guides/
/resources/insurance-glossary/
/resources/claims-process/
```

---

## Navigation Structure

### Primary Navigation
```
Home
About ▼
  - About Us
  - We're Independent  
  - Insurance Tips
  - Refer Friends
  - Leave a Review

Personal Coverage ▼
  - Auto Insurance
  - Homeowners Insurance
  - [Additional personal lines...]

Business Coverage ▼
  - Construction Insurance ► 
    - General Liability
    - Builder's Risk
    - Workers' Comp
    - Commercial Auto
    - Contractor Bonds
    - Tools & Equipment
  - Business Owners Policy
  - [Additional business lines...]

Trades We Serve ▼
  - Electricians
  - Plumbers
  - Roofers
  - General Contractors
  - [Additional trades...]

Service Areas ▼
  - Bergen County Overview
  - Paramus
  - Hackensack
  - Ridgewood
  - [Additional locations...]

Client Services ▼
  - File a Claim
  - Policy Review
  - [Additional services...]

Contact
Get Quote
```

### Footer Navigation
```
Insurance Services
  - Personal Insurance
  - Business Insurance
  - Construction Insurance
  - Trade-Specific Coverage

Service Areas
  - Bergen County
  - Northern NJ
  - [Key municipalities]

Resources
  - Insurance Blog
  - Contractor Guides
  - Claims Center
  - FAQs

Company
  - About Us
  - Contact
  - Careers
  - Privacy Policy
```

---

## Internal Linking Strategy

### Hub & Spoke Model
Each main category serves as a hub linking to related pages.

### Construction Insurance Hub Example
```
/business/construction/ links to:
  → All construction service pages
  → All trade pages
  → Relevant blog posts
  → Related resources
  → Quote page with construction context
```

### Trade Page Linking
```
/trades/electrician/ links to:
  → General Liability for Contractors
  → Commercial Auto Insurance
  → Tools & Equipment Coverage
  → Bergen County service area
  → Electrician insurance blog posts
  → Get Quote (electrician context)
```

### Location Page Linking
```
/locations/paramus/ links to:
  → All relevant service pages
  → Local trade pages
  → Bergen County hub
  → Nearby locations (Ridgewood, Fair Lawn)
  → Local project case studies
  → Contact with Paramus context
```

---

## URL Optimization Checklist

### For Each New Page
- [ ] URL includes primary keyword
- [ ] URL is under 60 characters
- [ ] No special characters or spaces
- [ ] Follows established hierarchy
- [ ] Redirects set up if replacing old URL
- [ ] Canonical tag implemented
- [ ] Added to XML sitemap
- [ ] Internal links updated

### Avoid These URL Mistakes
- ❌ `/page1.html`
- ❌ `/services?id=123`
- ❌ `/Bergen_County_Insurance`
- ❌ `/new-jersey/bergen/upper-saddle-river/insurance/construction/general-liability`

### Use These Formats
- ✅ `/trades/electrician/`
- ✅ `/locations/paramus/`
- ✅ `/business/construction/builders-risk/`
- ✅ `/blog/2024/01/hackensack-construction-boom/`

---

## Sitemap Structure

### XML Sitemap Organization
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage - Priority 1.0 -->
  <url>
    <loc>https://midlandinsurance.biz/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Construction Hub - Priority 0.9 -->
  <url>
    <loc>https://midlandinsurance.biz/business/construction/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Service Pages - Priority 0.8 -->
  <!-- Trade Pages - Priority 0.8 -->
  <!-- Location Pages - Priority 0.7 -->
  <!-- Blog Posts - Priority 0.6 -->
</urlset>
```

### HTML Sitemap for Users
Organize by category with clear headings and descriptions.

---

## Technical Implementation

### Next.js Routing Structure
```
app/
├── page.tsx                         # Homepage
├── business/
│   ├── page.tsx                    # Business insurance hub
│   └── construction/
│       ├── page.tsx                # Construction hub
│       ├── general-liability/
│       │   └── page.tsx
│       └── builders-risk/
│           └── page.tsx
├── trades/
│   ├── page.tsx                    # Trades hub
│   └── [trade]/
│       └── page.tsx                # Dynamic trade pages
├── locations/
│   ├── page.tsx                    # Locations hub
│   └── [location]/
│       └── page.tsx                # Dynamic location pages
└── blog/
    ├── page.tsx                    # Blog homepage
    └── [slug]/
        └── page.tsx                # Dynamic blog posts
```

### Redirect Management
```javascript
// next.config.js redirects
module.exports = {
  async redirects() {
    return [
      {
        source: '/services/construction',
        destination: '/business/construction',
        permanent: true,
      },
      // Add more redirects as needed
    ];
  },
};
```

---

## Breadcrumb Implementation

### Dynamic Breadcrumb Component
```typescript
// components/Breadcrumbs.tsx
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && <ChevronRightIcon className="h-4 w-4 mx-2" />}
            {index === items.length - 1 ? (
              <span className="text-gray-500">{item.label}</span>
            ) : (
              <Link href={item.href} className="text-blue-600 hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

---

## Monitoring & Maintenance

### Weekly Tasks
- [ ] Check for 404 errors in Search Console
- [ ] Verify all internal links working
- [ ] Update sitemap with new content
- [ ] Review site structure for gaps

### Monthly Tasks
- [ ] Analyze user flow in Analytics
- [ ] Review search queries for new page opportunities
- [ ] Check page depth metrics
- [ ] Optimize underperforming URLs

---

*Last Updated: [Date]*  
*Next Review: [Date + 1 month]*