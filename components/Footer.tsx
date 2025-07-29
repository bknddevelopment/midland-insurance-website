import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { 
  ShieldCheckIcon,
  HomeIcon,
  TruckIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/solid';

const personalServices = [
  { name: 'Auto Insurance', href: '/services/auto-insurance' },
  { name: 'Homeowners Insurance', href: '/services/homeowners-insurance' },
  { name: 'Condo Insurance', href: '/services/condo-insurance' },
  { name: 'Renters Insurance', href: '/services/renters-insurance' },
  { name: 'Boat Insurance', href: '/services/boat-insurance' },
  { name: 'Classic Auto Insurance', href: '/services/classic-auto-insurance' },
];

const businessServices = [
  { name: 'Business Owners Policy', href: '/services/business-owners-policy' },
  { name: 'General Liability', href: '/services/general-liability' },
  { name: 'Commercial Auto', href: '/services/commercial-auto' },
  { name: 'Workers Compensation', href: '/services/workers-compensation' },
  { name: 'Professional Liability', href: '/services/professional-liability' },
  { name: 'Cyber Liability', href: '/services/cyber-liability' },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6 h-40">
              <Image 
                src="/photos/logo/PNG_Transparent_High-Resolution_300-_Dpi-002.webp" 
                alt="Midland Associates Insurance" 
                width={160} 
                height={160} 
                className="mr-3"
                priority
              />
            </div>
            <p className="text-gray-300 mb-6">
              Providing comprehensive insurance solutions for individuals and businesses in New Jersey since 1990. 
              Your trusted partner for peace of mind.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPinIcon className="h-5 w-5 mr-3 text-primary-400" />
                <span>
                  345 RT 17 STE 22<br />
                  Upper Saddle River, NJ 07458
                </span>
              </div>
              <div className="flex items-center text-gray-300">
                <PhoneIcon className="h-5 w-5 mr-3 text-primary-400" />
                <Link href="tel:(201) 812-2184" className="hover:text-white transition-colors">
                  (201) 812-2184
                </Link>
              </div>
              <div className="flex items-center text-gray-300">
                <EnvelopeIcon className="h-5 w-5 mr-3 text-primary-400" />
                <Link href="mailto:Service@midlandinsurance.biz" className="hover:text-white transition-colors">
                  Service@midlandinsurance.biz
                </Link>
              </div>
              <div className="flex items-center text-gray-300">
                <ClockIcon className="h-5 w-5 mr-3 text-primary-400" />
                <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Personal Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Personal Insurance</h3>
            <ul className="space-y-3">
              {personalServices.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="text-gray-300 hover:text-white transition-colors"
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
              {businessServices.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="text-gray-300 hover:text-white transition-colors"
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
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-white text-sm font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link 
                  href="https://www.facebook.com/MidlandInsurance" 
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link 
                  href="https://www.linkedin.com/company/midland-associates-insurance" 
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link 
                  href="https://www.google.com/maps/place/Midland+Associates+Insurance+Services" 
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Google Maps"
                >
                  <Image
                    src="/photos/icons/google.webp"
                    alt="Google"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Midland Associates Insurance Services LLC. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 