# Navigation Updates for Construction Insurance Focus

## Overview
Update the main navigation to prominently feature construction insurance services and local service areas.

---

## Current Navigation Structure
- Personal
- Business  
- About
- Contact
- Get Quote
- Make Payment
- Claims

## New Navigation Structure

### Primary Navigation
1. **Personal** (existing)
2. **Business** (dropdown - updated)
   - General Liability
   - Workers' Compensation
   - Commercial Property
   - Commercial Auto
   - **Construction Insurance** ⭐ (NEW - featured)
   - Professional Liability
   - Cyber Liability
   - Business Owners Policy
   - Commercial Umbrella
   - View All Business Insurance

3. **Construction Insurance** ⭐ (NEW - primary nav item)
   - **By Coverage Type**
     - General Liability for Contractors
     - Builder's Risk Insurance
     - Workers' Comp for Construction
     - Commercial Auto & Fleet
     - Tools & Equipment Coverage
     - Contractor Bonds
   - **By Trade**
     - General Contractors
     - Electricians
     - Plumbers
     - Roofers
     - HVAC Contractors
     - Painters
     - Carpenters
     - View All Trades

4. **Service Areas** (NEW)
   - Bergen County Overview
   - **Northern Bergen**
     - Mahwah
     - Ramsey
     - Upper Saddle River
     - Allendale
   - **Central Bergen**
     - Paramus
     - Ridgewood
     - Glen Rock
     - Fair Lawn
   - **Eastern Bergen**
     - Fort Lee
     - Englewood
     - Teaneck
     - Hackensack
   - View All Locations

5. **About** (existing)
6. **Contact** (existing)

### Utility Navigation (Top Bar)
- Get Quote (CTA button)
- (201) 812-2184
- Claims
- Make Payment
- Client Login

---

## Implementation Code

### Update Navbar.tsx

```typescript
const navigationItems = [
  {
    name: 'Personal',
    href: '/personal',
    dropdown: personalInsuranceItems // existing
  },
  {
    name: 'Business',
    href: '/business',
    dropdown: [
      { name: 'General Liability', href: '/business/general-liability' },
      { name: 'Workers\' Compensation', href: '/business/workers-comp' },
      { name: 'Commercial Property', href: '/business/property' },
      { name: 'Commercial Auto', href: '/business/commercial-auto' },
      {
        name: 'Construction Insurance',
        href: '/business/construction',
        featured: true,
        badge: 'Popular'
      },
      { name: 'Professional Liability', href: '/business/professional-liability' },
      { name: 'Cyber Liability', href: '/business/cyber-liability' },
      { name: 'Business Owners Policy', href: '/business/bop' },
      { name: 'Commercial Umbrella', href: '/business/commercial-umbrella' },
      { 
        name: 'View All Business Insurance', 
        href: '/business',
        className: 'font-semibold text-primary-600'
      }
    ]
  },
  {
    name: 'Construction Insurance',
    href: '/business/construction',
    featured: true,
    dropdown: {
      sections: [
        {
          title: 'By Coverage Type',
          items: [
            { 
              name: 'General Liability for Contractors', 
              href: '/business/construction/general-liability',
              description: 'Essential coverage for all contractors'
            },
            { 
              name: 'Builder\'s Risk Insurance', 
              href: '/business/construction/builders-risk',
              description: 'Protect projects under construction'
            },
            { 
              name: 'Workers\' Comp for Construction', 
              href: '/business/construction/workers-comp',
              description: 'Required coverage for employees'
            },
            { 
              name: 'Commercial Auto & Fleet', 
              href: '/business/construction/commercial-auto',
              description: 'Vehicle and equipment coverage'
            },
            { 
              name: 'Tools & Equipment Coverage', 
              href: '/business/construction/tools-equipment',
              description: 'Protect valuable tools and machinery'
            },
            { 
              name: 'Contractor Bonds', 
              href: '/business/construction/bonds',
              description: 'License, permit, and performance bonds'
            }
          ]
        },
        {
          title: 'By Trade',
          items: [
            { name: 'General Contractors', href: '/trades/general-contractors' },
            { name: 'Electricians', href: '/trades/electricians' },
            { name: 'Plumbers', href: '/trades/plumbers' },
            { name: 'Roofers', href: '/trades/roofers' },
            { name: 'HVAC Contractors', href: '/trades/hvac' },
            { name: 'Painters', href: '/trades/painters' },
            { name: 'View All Trades →', href: '/trades', className: 'font-semibold' }
          ]
        }
      ],
      cta: {
        title: 'Get Your Free Quote',
        description: 'Save up to 30% on contractor insurance',
        buttonText: 'Start Quote',
        buttonHref: '/quote/construction'
      }
    }
  },
  {
    name: 'Service Areas',
    href: '/locations',
    dropdown: {
      sections: [
        {
          title: 'Bergen County Regions',
          items: [
            { 
              name: 'Northern Bergen County', 
              href: '/locations/northern-bergen',
              description: 'Mahwah, Ramsey, Upper Saddle River'
            },
            { 
              name: 'Central Bergen County', 
              href: '/locations/central-bergen',
              description: 'Paramus, Ridgewood, Glen Rock'
            },
            { 
              name: 'Eastern Bergen County', 
              href: '/locations/eastern-bergen',
              description: 'Fort Lee, Englewood, Hackensack'
            },
            { 
              name: 'Southern Bergen County', 
              href: '/locations/southern-bergen',
              description: 'Lyndhurst, Rutherford, Wood-Ridge'
            }
          ]
        },
        {
          title: 'Popular Locations',
          items: [
            { name: 'Paramus', href: '/locations/paramus' },
            { name: 'Hackensack', href: '/locations/hackensack' },
            { name: 'Fort Lee', href: '/locations/fort-lee' },
            { name: 'Ridgewood', href: '/locations/ridgewood' },
            { name: 'Mahwah', href: '/locations/mahwah' },
            { name: 'Upper Saddle River', href: '/locations/upper-saddle-river' },
            { name: 'View All Locations →', href: '/locations', className: 'font-semibold' }
          ]
        }
      ]
    }
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
];
```

### Mega Menu Styling

```css
/* Add to globals.css */

/* Mega menu container */
.mega-menu {
  @apply absolute left-0 w-full bg-white shadow-xl border-t-4 border-primary-600 rounded-b-lg;
  top: 100%;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}

/* Mega menu sections */
.mega-menu-section {
  @apply p-8;
}

.mega-menu-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8;
}

/* Featured badge */
.nav-badge {
  @apply inline-block ml-2 px-2 py-1 text-xs font-semibold text-white bg-primary-600 rounded-full;
}

/* Dropdown hover effects */
.nav-dropdown-item {
  @apply block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 rounded-md transition-colors;
}

.nav-dropdown-item-featured {
  @apply border-l-4 border-primary-600 bg-primary-50;
}
```

---

## Mobile Navigation Updates

### Mobile Menu Structure
```typescript
// Accordion-style mobile menu
const MobileNavigation = () => {
  return (
    <div className="mobile-menu">
      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 p-4 border-b">
        <Link href="/quote" className="btn-primary text-center">
          Get Quote
        </Link>
        <Link href="tel:2018122184" className="btn-outline text-center">
          <PhoneIcon className="w-4 h-4 inline mr-1" />
          Call Now
        </Link>
      </div>
      
      {/* Navigation Items */}
      <nav className="p-4">
        {navigationItems.map((item) => (
          <MobileNavItem key={item.name} item={item} />
        ))}
      </nav>
      
      {/* Utility Links */}
      <div className="border-t p-4 space-y-3">
        <Link href="/claims" className="block text-gray-600">Claims</Link>
        <Link href="/make-payment" className="block text-gray-600">Make Payment</Link>
        <Link href="/client-login" className="block text-gray-600">Client Login</Link>
      </div>
    </div>
  );
};
```

---

## SEO Benefits

1. **Construction Insurance** as primary nav = stronger ranking signal
2. **Service Areas** dropdown = local SEO boost
3. **Trade-specific pages** linked = targeted traffic
4. **Descriptive anchor text** = better context for Google
5. **Logical hierarchy** = improved crawlability

---

## Testing Checklist

- [ ] Desktop dropdown functionality
- [ ] Mobile menu accordion behavior  
- [ ] Keyboard navigation (accessibility)
- [ ] Touch targets on mobile (48px minimum)
- [ ] Loading performance impact
- [ ] Cross-browser compatibility
- [ ] Analytics tracking on nav clicks

---

*Created: January 30, 2025*
*Implementation: Week 1, Day 4-5*