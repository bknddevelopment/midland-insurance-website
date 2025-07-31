'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDownIcon, 
  Bars3Icon, 
  XMarkIcon, 
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  CreditCardIcon,
  ClipboardDocumentListIcon,
  ArrowRightIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import { COMPANY_INFO, formatPhoneForTel } from '@/lib/utils/constants';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';
import { 
  ShieldCheckIcon, 
  HomeIcon, 
  TruckIcon, 
  BuildingOfficeIcon,
  UsersIcon,
  DocumentTextIcon
} from '@heroicons/react/24/solid';

const aboutPages = [
  { name: 'About Us', href: '/about' },
  { name: 'We\'re Independent', href: '/about/independent' },
  { name: 'Insurance Tips', href: '/resources/insurance-tips' },
  { name: 'Refer Friends & Family', href: '/about/refer-friends' },
  { name: 'Leave A Review', href: '/about/leave-review' },
  { name: 'Request Quotes', href: '/quote' },
  { name: 'Accessibility', href: '/accessibility' },
  { name: 'Privacy Policy', href: '/privacy' },
];

const personalCoverage = [
  { name: 'Auto', href: '/personal/auto', icon: TruckIcon },
  { name: 'Boat', href: '/personal/boat', icon: ShieldCheckIcon },
  { name: 'Classic Auto', href: '/personal/classic-auto', icon: TruckIcon },
  { name: 'Condo', href: '/personal/condo', icon: BuildingOfficeIcon },
  { name: 'Homeowners', href: '/personal/homeowners', icon: HomeIcon },
  { name: 'High Net Worth', href: '/personal/high-net-worth', icon: ShieldCheckIcon },
  { name: 'Flood', href: '/personal/flood', icon: HomeIcon },
  { name: 'Life', href: '/personal/life', icon: UsersIcon },
  { name: 'Motorcycle', href: '/personal/motorcycle', icon: TruckIcon },
  { name: 'Travel Insurance', href: '/personal/travel', icon: ShieldCheckIcon },
  { name: 'Umbrella Insurance', href: '/personal/umbrella', icon: ShieldCheckIcon },
  { name: 'All Personal Lines', href: '/personal', icon: UsersIcon },
];

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
  { name: 'Contractors Insurance', href: '/business/contractors', icon: WrenchScrewdriverIcon },
  { name: 'All Business Lines', href: '/business', icon: BuildingOfficeIcon },
];

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
    { name: 'HVAC Contractors', href: '/trades/hvac-contractors' },
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
  { name: 'Allendale', href: '/locations/allendale' },
  { name: 'Wyckoff', href: '/locations/wyckoff' },
  { name: 'Teaneck', href: '/locations/teaneck' },
  { name: 'Englewood', href: '/locations/englewood' },
  { name: 'Fair Lawn', href: '/locations/fair-lawn' },
  { name: 'Garfield', href: '/locations/garfield' },
  { name: 'Lodi', href: '/locations/lodi' },
  { name: 'Lyndhurst', href: '/locations/lyndhurst' },
  { name: 'Ramsey', href: '/locations/ramsey' },
  { name: 'Westwood', href: '/locations/westwood' },
  { name: 'View All Locations', href: '/locations', className: 'font-semibold text-primary-600' },
];

const clientServices = [
  { name: 'File a Claim', href: '/claims', icon: DocumentTextIcon },
  { name: 'Policy Review', href: '/policy-review', icon: ClipboardDocumentListIcon },
  { name: 'Insurance ID Cards', href: '/id-cards', icon: CreditCardIcon },
  { name: 'Update Policy Info', href: '/update-policy', icon: DocumentTextIcon },
  { name: 'Billing Questions', href: '/billing', icon: CreditCardIcon },
  { name: 'Coverage Questions', href: '/coverage-questions', icon: ShieldCheckIcon },
];

const additionalServices = [
  { name: 'Risk Assessment Tool', href: '/tools/risk-assessment', icon: ShieldCheckIcon },
  { name: 'Premium Calculator', href: '/tools/premium-calculator', icon: CurrencyDollarIcon },
  { name: 'Coverage Checklist', href: '/tools/coverage-checklist', icon: ClipboardDocumentListIcon },
  { name: 'Certificate Generator', href: '/tools/certificate-generator', icon: DocumentTextIcon },
  { name: 'Construction Resources', href: '/resources/construction-insurance-guide', icon: BuildingOfficeIcon },
  { name: 'View All Tools', href: '/resources', icon: ShieldCheckIcon },
];

// Consolidated insurance categories
const insuranceCategories = {
  personal: personalCoverage,
  business: businessCoverage,
  construction: constructionInsurance,
};

// Resources combining About and Client Services
const resourcesPages = [
  { name: 'About Us', href: '/about', icon: BuildingOfficeIcon },
  { name: 'File a Claim', href: '/claims', icon: DocumentTextIcon },
  { name: 'Policy Review', href: '/policy-review', icon: ClipboardDocumentListIcon },
  { name: 'Insurance ID Cards', href: '/id-cards', icon: CreditCardIcon },
  { name: 'We\'re Independent', href: '/about/independent', icon: ShieldCheckIcon },
  { name: 'Insurance Tips', href: '/about/insurance-tips', icon: DocumentTextIcon },
  { name: 'Refer Friends & Family', href: '/about/refer-friends', icon: UsersIcon },
  { name: 'Leave A Review', href: '/about/leave-review', icon: DocumentTextIcon },
];

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Insurance', 
    href: '#', 
    hasDropdown: true, 
    dropdownItems: insuranceCategories,
    megaMenu: true 
  },
  { name: 'Locations', href: '/locations', hasDropdown: true, dropdownItems: serviceAreas },
  { name: 'Resources', href: '#', hasDropdown: true, dropdownItems: resourcesPages },
  { name: 'Get Quote', href: '/quote', featured: true },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (navName: string) => {
    setActiveDropdown(activeDropdown === navName ? null : navName);
  };

  const handleMouseEnter = (navName: string) => {
    setActiveDropdown(navName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0">
            <div className="hidden sm:flex items-center space-x-4 lg:space-x-6">
              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="hidden lg:flex items-center space-x-2 hover:text-primary-400 transition"
              >
                <EnvelopeIcon className="h-4 w-4" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <a 
                href={formatPhoneForTel(COMPANY_INFO.phone)}
                className="flex items-center space-x-2 hover:text-primary-400 transition"
              >
                <PhoneIcon className="h-4 w-4" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <ClockIcon className="h-4 w-4" />
              <span>{COMPANY_INFO.hours.weekdays}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image 
                  src="/photos/logo/PNG_Transparent_High-Resolution_300-_Dpi-002.webp" 
                  alt="Midland Associates Insurance" 
                  width={180} 
                  height={80} 
                  className="h-12 sm:h-14 lg:h-16 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.hasDropdown ? (
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className={`hover:text-primary-600 font-medium transition flex items-center ${
                        item.featured ? 'text-primary-600 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      {item.name}
                      <ChevronDownIcon className="ml-1 h-3 w-3" />
                    </button>
                  ) : item.featured ? (
                    <Link 
                      href={item.href}
                      className="bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-all duration-200 transform hover:scale-[1.02] shadow-lg font-medium text-sm"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-primary-600 font-medium transition"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center">
              <div className="text-right">
                <div className="text-sm text-gray-600">24/7 Support</div>
                <div className="text-lg font-bold text-gray-800">{COMPANY_INFO.phone}</div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={handleMobileMenuToggle}
              className="lg:hidden text-gray-700 hover:text-primary-600"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 bg-white shadow-xl border-t border-gray-200"
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {activeDropdown === 'Insurance' && (
                  <div className="max-w-7xl mx-auto px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Personal Insurance */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                          Personal Insurance
                        </h3>
                        <div className="space-y-3">
                          {insuranceCategories.personal.slice(0, 6).map((service) => (
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
                          <Link
                            href="/personal"
                            className="flex items-center px-3 py-2 text-primary-600 font-semibold hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            View All Personal Lines →
                          </Link>
                        </div>
                      </div>

                      {/* Business Insurance */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                          Business Insurance
                        </h3>
                        <div className="space-y-3">
                          {insuranceCategories.business.slice(0, 6).map((service) => (
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
                          <Link
                            href="/business"
                            className="flex items-center px-3 py-2 text-primary-600 font-semibold hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            View All Business Lines →
                          </Link>
                        </div>
                      </div>

                      {/* Construction Insurance Featured */}
                      <div className="bg-primary-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Construction Insurance
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Specialized coverage for contractors and builders. Save up to 30% with our expertise.
                        </p>
                        <div className="space-y-2 mb-4">
                          {insuranceCategories.construction.services.slice(0, 3).map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block text-gray-700 hover:text-primary-600"
                              onClick={() => setActiveDropdown(null)}
                            >
                              • {service.name}
                            </Link>
                          ))}
                        </div>
                        <Link
                          href="/quote/construction"
                          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Get Construction Quote
                          <ArrowRightIcon className="ml-2 h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}


                {activeDropdown === 'Locations' && (
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

                {activeDropdown === 'Resources' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {resourcesPages.map((page) => (
                      <Link
                        key={page.name}
                        href={page.href}
                        className="flex items-center px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <page.icon className="h-5 w-5 mr-3 text-primary-600" />
                        {page.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Navigation - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            
            {/* Menu content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                <Image
                  src="/photos/logo/PNG_Transparent_High-Resolution_300-_Dpi-002.webp"
                  alt="Midland Associates Insurance"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links - Scrollable */}
              <div className="h-[calc(100vh-180px)] overflow-y-auto px-6 py-6">
                <nav className="space-y-1">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-gray-900 hover:bg-gray-50 font-medium transition-colors"
                            onClick={() => {
                              setActiveDropdown(activeDropdown === item.name ? null : item.name);
                            }}
                          >
                            <span>{item.name}</span>
                            <ChevronDownIcon
                              className={`h-5 w-5 text-gray-500 transition-transform ${
                                activeDropdown === item.name ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
                                  {item.name === 'Insurance' ? (
                                    <>
                                      <div className="font-semibold text-sm text-gray-900 px-4 py-2">Personal Insurance</div>
                                      {insuranceCategories.personal.slice(0, 5).map((subItem) => (
                                        <Link
                                          key={subItem.name}
                                          href={subItem.href}
                                          className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                                          onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                          {subItem.name}
                                        </Link>
                                      ))}
                                      <Link
                                        href="/personal"
                                        className="block rounded-lg px-4 py-2 text-sm text-primary-600 font-semibold hover:bg-gray-50 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        View All Personal →
                                      </Link>
                                      
                                      <div className="font-semibold text-sm text-gray-900 px-4 py-2 mt-4">Business Insurance</div>
                                      {insuranceCategories.business.slice(0, 5).map((subItem) => (
                                        <Link
                                          key={subItem.name}
                                          href={subItem.href}
                                          className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                                          onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                          {subItem.name}
                                        </Link>
                                      ))}
                                      <Link
                                        href="/business"
                                        className="block rounded-lg px-4 py-2 text-sm text-primary-600 font-semibold hover:bg-gray-50 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        View All Business →
                                      </Link>
                                      
                                      <Link
                                        href="/business/construction"
                                        className="block rounded-lg px-4 py-2 text-sm text-primary-600 font-bold hover:bg-gray-50 transition-colors mt-4"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        Construction Insurance →
                                      </Link>
                                    </>
                                  ) : Array.isArray(item.dropdownItems) ? (
                                    item.dropdownItems.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))
                                  ) : null}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block rounded-lg px-4 py-3 font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Contact Info */}
                <div className="mt-8 space-y-4 border-t border-gray-200 pt-6">
                  <a
                    href={formatPhoneForTel(COMPANY_INFO.phone)}
                    className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    <div>
                      <div className="text-sm text-gray-500">24/7 Support</div>
                      <div className="font-semibold">{COMPANY_INFO.phone}</div>
                    </div>
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <EnvelopeIcon className="h-5 w-5" />
                    <span className="text-sm">{COMPANY_INFO.email}</span>
                  </a>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <ClockIcon className="h-5 w-5" />
                    <span className="text-sm">{COMPANY_INFO.hours.weekdays}</span>
                  </div>
                </div>
              </div>
              
              {/* Fixed Bottom CTA */}
              <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4">
                <Link
                  href={EXTERNAL_URLS.QUOTE_FORM}
                  className="block w-full rounded-lg bg-primary-600 px-6 py-3 text-center font-semibold text-white shadow-lg hover:bg-primary-700 transition-all duration-200 transform hover:scale-[1.02]"
                  onClick={() => setIsMobileMenuOpen(false)}
                  {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
                >
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}