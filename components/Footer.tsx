import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const personalServices = [
  { name: 'Auto Insurance', href: '/personal/auto' },
  { name: 'Homeowners Insurance', href: '/personal/homeowners' },
  { name: 'Condo Insurance', href: '/personal/condo' },
  { name: 'Renters Insurance', href: '/services/renters-insurance' },
  { name: 'Boat Insurance', href: '/personal/boat' },
  { name: 'Classic Auto Insurance', href: '/personal/classic-auto' },
];

const businessServices = [
  { name: 'Business Owners Policy', href: '/business/bop' },
  { name: 'General Liability', href: '/business/general-liability' },
  { name: 'Commercial Auto', href: '/business/commercial-auto' },
  { name: 'Workers Compensation', href: '/business/workers-comp' },
  { name: 'Professional Liability', href: '/business/professional-liability' },
  { name: 'Cyber Liability', href: '/business/cyber-liability' },
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Get Quote', href: '/quote' },
  { name: 'File Claim', href: '/claims' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 circle-pattern">
      {/* Main Footer Content - Single Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Company Info - Compact */}
          <div className="flex-shrink-0">
            <div className="flex items-center mb-8">
              <Image 
                src="/photos/logo/PNG_Transparent_High-Resolution_300-_Dpi-002.webp" 
                alt="Midland Associates Insurance" 
                width={180} 
                height={180} 
                className="mr-3"
                priority
              />
            </div>
            <div className="space-y-4 text-base">
              <div className="flex items-center text-gray-300">
                <MapPinIcon className="h-5 w-5 mr-3 text-primary-400 flex-shrink-0" />
                <span>345 RT 17 STE 22, Upper Saddle River, NJ 07458</span>
              </div>
              <div className="flex items-center text-gray-300">
                <PhoneIcon className="h-5 w-5 mr-3 text-primary-400 flex-shrink-0" />
                <Link href="tel:(201) 812-2184" className="hover:text-white transition-colors">
                  (201) 812-2184
                </Link>
              </div>
              <div className="flex items-center text-gray-300">
                <EnvelopeIcon className="h-5 w-5 mr-3 text-primary-400 flex-shrink-0" />
                <Link href="mailto:Service@midlandinsurance.biz" className="hover:text-white transition-colors">
                  Service@midlandinsurance.biz
                </Link>
              </div>
              <div className="flex items-center text-gray-300">
                <ClockIcon className="h-5 w-5 mr-3 text-primary-400 flex-shrink-0" />
                <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Services Sections - Horizontal Layout */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Personal Services */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Personal Insurance</h3>
              <ul className="space-y-3">
                {personalServices.slice(0, 4).map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href} 
                      className="text-gray-300 hover:text-white transition-colors text-base"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Services */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Business Insurance</h3>
              <ul className="space-y-3">
                {businessServices.slice(0, 4).map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href} 
                      className="text-gray-300 hover:text-white transition-colors text-base"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.slice(0, 4).map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Review */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Connect With Us</h3>
              <div className="flex space-x-4 mb-6">
                <Link 
                  href="https://www.facebook.com/MidlandInsurance" 
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link 
                  href="https://www.linkedin.com/company/midland-associates-insurance" 
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 text-gray-400">
              <span>© {new Date().getFullYear()} Midland Associates Insurance Services LLC. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">
                Created by{' '}
                <Link href="https://bknddev.com" className="text-primary-400 hover:text-primary-300 transition-colors" target="_blank" rel="noopener noreferrer">
                  BKND DEV
                </Link>
              </span>
            </div>
            <div className="flex space-x-6 mt-3 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
            <div className="md:hidden mt-3 text-gray-400">
              Created by{' '}
              <Link href="https://bknddev.com" className="text-primary-400 hover:text-primary-300 transition-colors" target="_blank" rel="noopener noreferrer">
                BKND DEV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}