# Navigation Implementation Guide - Step by Step

## Overview
This guide provides the exact code changes needed to update the navigation for construction insurance focus.

---

## Step 1: Update Business Coverage Array

### Current Code (lines 52-64)
```typescript
const businessCoverage = [
  { name: 'Business Owners (BOP)', href: '/business/bop', icon: BuildingOfficeIcon },
  { name: 'Builders Risk', href: '/business/builders-risk', icon: HomeIcon },
  // ... rest of items
];
```

### Updated Code
```typescript
const businessCoverage = [
  { name: 'Business Owners (BOP)', href: '/business/bop', icon: BuildingOfficeIcon },
  { 
    name: 'Construction Insurance', 
    href: '/business/construction', 
    icon: HomeIcon,
    featured: true,
    badge: 'Popular'
  },
  { name: 'General Liability', href: '/business/general-liability', icon: ShieldCheckIcon },
  { name: 'Workers\' Compensation', href: '/business/workers-comp', icon: UsersIcon },
  { name: 'Commercial Property', href: '/business/property', icon: BuildingOfficeIcon },
  { name: 'Commercial Auto', href: '/business/commercial-auto', icon: TruckIcon },
  { name: 'Professional Liability', href: '/business/professional-liability', icon: DocumentTextIcon },
  { name: 'Cyber Liability', href: '/business/cyber-liability', icon: ShieldCheckIcon },
  { name: 'Commercial Umbrella', href: '/business/commercial-umbrella', icon: ShieldCheckIcon },
  { name: 'Bonds', href: '/business/bonds', icon: DocumentTextIcon },
  { name: 'All Business Lines', href: '/business', icon: BuildingOfficeIcon },
];
```

---

## Step 2: Add New Arrays for Trades and Locations

### Add after businessCoverage array (line 64)
```typescript
const constructionInsurance = {
  services: [
    { name: 'General Liability for Contractors', href: '/business/construction/general-liability', icon: ShieldCheckIcon },
    { name: 'Builder\'s Risk Insurance', href: '/business/construction/builders-risk', icon: HomeIcon },
    { name: 'Workers\' Comp for Construction', href: '/business/construction/workers-comp', icon: UsersIcon },
    { name: 'Commercial Auto & Fleet', href: '/business/construction/commercial-auto', icon: TruckIcon },
    { name: 'Tools & Equipment Coverage', href: '/business/construction/tools-equipment', icon: BuildingOfficeIcon },
    { name: 'Contractor Bonds', href: '/business/construction/bonds', icon: DocumentTextIcon },
  ],
  trades: [
    { name: 'General Contractors', href: '/trades/general-contractors' },
    { name: 'Electricians', href: '/trades/electricians' },
    { name: 'Plumbers', href: '/trades/plumbers' },
    { name: 'Roofers', href: '/trades/roofers' },
    { name: 'HVAC Contractors', href: '/trades/hvac' },
    { name: 'Painters', href: '/trades/painters' },
    { name: 'Masons', href: '/trades/masons' },
    { name: 'View All Trades', href: '/trades', className: 'font-semibold text-primary-600' },
  ]
};

const serviceAreas = [
  { 
    name: 'Bergen County Overview', 
    href: '/locations/bergen-county',
    description: 'Serving all of Bergen County'
  },
  { name: 'Paramus', href: '/locations/paramus' },
  { name: 'Hackensack', href: '/locations/hackensack' },
  { name: 'Fort Lee', href: '/locations/fort-lee' },
  { name: 'Ridgewood', href: '/locations/ridgewood' },
  { name: 'Mahwah', href: '/locations/mahwah' },
  { name: 'Upper Saddle River', href: '/locations/upper-saddle-river' },
  { name: 'View All Locations', href: '/locations', className: 'font-semibold text-primary-600' },
];
```

---

## Step 3: Update Navigation Array

### Current Code (lines 84-91)
```typescript
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about', hasDropdown: true, dropdownItems: aboutPages },
  // ... rest
];
```

### Updated Code
```typescript
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Personal', href: '/personal', hasDropdown: true, dropdownItems: personalCoverage },
  { name: 'Business', href: '/business', hasDropdown: true, dropdownItems: businessCoverage },
  { 
    name: 'Construction Insurance', 
    href: '/business/construction', 
    hasDropdown: true, 
    dropdownItems: constructionInsurance,
    featured: true 
  },
  { name: 'Service Areas', href: '/locations', hasDropdown: true, dropdownItems: serviceAreas },
  { name: 'About', href: '/about', hasDropdown: true, dropdownItems: aboutPages },
];
```

---

## Step 4: Update Desktop Dropdown Rendering

### Find the dropdown rendering section (around line 262)
Add a new condition for Construction Insurance mega menu:

```typescript
{activeDropdown === 'Construction Insurance' && (
  <div className="max-w-7xl mx-auto px-8 py-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Coverage Types Column */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
          Coverage Types
        </h3>
        <div className="space-y-3">
          {constructionInsurance.services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="flex items-center px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setActiveDropdown(null)}
            >
              <service.icon className="h-5 w-5 mr-3 text-primary-600" />
              {service.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Trades We Serve Column */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
          Trades We Serve
        </h3>
        <div className="space-y-2">
          {constructionInsurance.trades.map((trade) => (
            <Link
              key={trade.name}
              href={trade.href}
              className={`block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors ${trade.className || ''}`}
              onClick={() => setActiveDropdown(null)}
            >
              {trade.name}
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Column */}
      <div className="bg-primary-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Get Your Free Quote
        </h3>
        <p className="text-gray-600 mb-4">
          Save up to 30% on contractor insurance. Get multiple quotes in minutes.
        </p>
        <Link
          href="/quote/construction"
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          onClick={() => setActiveDropdown(null)}
        >
          Start Quote
          <ArrowRightIcon className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  </div>
)}
```

---

## Step 5: Add Service Areas Dropdown

```typescript
{activeDropdown === 'Service Areas' && (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {serviceAreas.map((area) => (
      <Link
        key={area.name}
        href={area.href}
        className={`flex flex-col px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors ${area.className || ''}`}
        onClick={() => setActiveDropdown(null)}
      >
        <span className="font-medium">{area.name}</span>
        {area.description && (
          <span className="text-sm text-gray-500">{area.description}</span>
        )}
      </Link>
    ))}
  </div>
)}
```

---

## Step 6: Update Mobile Menu

In the mobile menu section (around line 383), update the dropdown rendering to handle the new structure:

```typescript
{activeDropdown === item.name && item.name === 'Construction Insurance' && (
  <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: 'auto', opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.2 }}
    className="overflow-hidden"
  >
    <div className="ml-4 mt-1 space-y-2 border-l-2 border-gray-200 pl-4">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
        Coverage Types
      </div>
      {item.dropdownItems.services.map((subItem) => (
        <Link
          key={subItem.name}
          href={subItem.href}
          className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {subItem.name}
        </Link>
      ))}
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-4 mb-2">
        Trades We Serve
      </div>
      {item.dropdownItems.trades.map((subItem) => (
        <Link
          key={subItem.name}
          href={subItem.href}
          className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {subItem.name}
        </Link>
      ))}
    </div>
  </motion.div>
)}
```

---

## Step 7: Add Visual Indicators

### Add featured badge styling
In the desktop navigation rendering (around line 170), update to show featured items:

```typescript
<button
  onClick={() => handleDropdownToggle(item.name)}
  className={`text-gray-700 hover:text-primary-600 font-medium transition flex items-center ${
    item.featured ? 'text-primary-600 font-semibold' : ''
  }`}
>
  {item.name}
  {item.featured && (
    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-100 text-primary-800">
      New
    </span>
  )}
  <ChevronDownIcon className="ml-1 h-3 w-3" />
</button>
```

---

## Testing Checklist

After implementing:
1. [ ] Desktop dropdown opens on hover
2. [ ] Mobile menu accordion works
3. [ ] All links navigate correctly
4. [ ] Featured items stand out
5. [ ] Responsive at all breakpoints
6. [ ] No console errors
7. [ ] Keyboard navigation works
8. [ ] Screen reader friendly

---

## Common Issues & Solutions

### Issue: Dropdown not showing Construction Insurance structure
**Solution**: Check that you're passing the full `constructionInsurance` object, not just an array

### Issue: Mobile menu not expanding
**Solution**: Ensure the conditional rendering checks for the specific menu structure

### Issue: Styling not applied
**Solution**: Check that Tailwind classes are not purged - add to safelist if needed

---

*Save this guide for reference during implementation. Test thoroughly after each section.*