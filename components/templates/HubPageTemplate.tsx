import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}

interface HubPageTemplateProps {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroPrimaryButton?: {
    text: string;
    href: string;
  };
  heroSecondaryButton?: {
    text: string;
    href: string;
  };
  sectionTitle: string;
  sectionBadge: string;
  sectionDescription: string;
  services: ServiceItem[];
  ctaText?: string;
  ctaHref?: string;
  additionalSections?: React.ReactNode;
}

export default function HubPageTemplate({
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroPrimaryButton,
  heroSecondaryButton,
  sectionTitle,
  sectionBadge,
  sectionDescription,
  services,
  ctaText,
  ctaHref,
  additionalSections
}: HubPageTemplateProps) {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        title={heroTitle}
        subtitle={heroSubtitle}
        description={heroDescription}
        primaryButton={heroPrimaryButton || {
          text: 'Get a Quote',
          href: '/quote'
        }}
        secondaryButton={heroSecondaryButton}
      />

      <Divider type="dark-to-white" />

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">{sectionBadge}</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {sectionTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {sectionDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="card hover:shadow-2xl transition-all duration-300 block h-full"
                >
                  <div className="text-center">
                    <service.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {ctaText && ctaHref && (
            <div className="text-center mt-12">
              <Link
                href={ctaHref}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
              >
                {ctaText}
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {additionalSections}

      <Footer />
    </div>
  );
}