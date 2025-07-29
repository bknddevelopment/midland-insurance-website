import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon, 
  ArrowRightIcon, 
  ShieldCheckIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

interface CoverageItem {
  title: string;
  description: string;
}

interface BenefitItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ServicePageTemplateProps {
  // Hero section
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
  
  // Overview section
  overviewBadge: string;
  overviewTitle: string;
  overviewContent: string;
  overviewImage?: string;
  
  // Coverage section
  coverageTitle: string;
  coverageDescription: string;
  coverageItems: CoverageItem[];
  
  // Benefits section
  benefitsTitle: string;
  benefitsDescription: string;
  benefits: BenefitItem[];
  
  // CTA section
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryButton?: {
    text: string;
    href: string;
  };
  ctaSecondaryButton?: {
    text: string;
    href: string;
  };
  
  // FAQ section
  faqTitle?: string;
  faqItems?: FAQItem[];
  
  // Additional sections
  additionalSections?: React.ReactNode;
}

export default function ServicePageTemplate({
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroPrimaryButton,
  heroSecondaryButton,
  overviewBadge,
  overviewTitle,
  overviewContent,
  overviewImage,
  coverageTitle,
  coverageDescription,
  coverageItems,
  benefitsTitle,
  benefitsDescription,
  benefits,
  ctaTitle,
  ctaDescription,
  ctaPrimaryButton,
  ctaSecondaryButton,
  faqTitle = 'Frequently Asked Questions',
  faqItems,
  additionalSections
}: ServicePageTemplateProps) {
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

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="badge-light inline-block mb-4">{overviewBadge}</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {overviewTitle}
              </h2>
              <div className="prose prose-lg text-gray-600">
                {overviewContent.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
            
            {overviewImage && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={overviewImage}
                    alt={overviewTitle}
                    className="object-cover"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {coverageTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {coverageDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coverageItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider type="white-to-dark" />

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              {benefitsTitle}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {benefitsDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <benefit.icon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {additionalSections}

      {/* CTA Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {ctaTitle}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {ctaPrimaryButton && (
              <Link
                href={ctaPrimaryButton.href}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
              >
                {ctaPrimaryButton.text}
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            )}
            {ctaSecondaryButton && (
              <Link
                href={ctaSecondaryButton.href}
                className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-colors btn-transition"
              >
                {ctaSecondaryButton.text}
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqItems && faqItems.length > 0 && (
        <>
          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {faqTitle}
                </h2>
              </div>

              <div className="space-y-6">
                {faqItems.map((faq, index) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
}