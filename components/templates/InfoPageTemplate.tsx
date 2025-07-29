import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ContentSection {
  title?: string;
  content: string;
  isList?: boolean;
  listItems?: string[];
}

interface InfoPageTemplateProps {
  // Hero section
  heroTitle: string;
  heroSubtitle?: string;
  heroDescription?: string;
  heroPrimaryButton?: {
    text: string;
    href: string;
  };
  heroSecondaryButton?: {
    text: string;
    href: string;
  };
  
  // Main content
  contentSections: ContentSection[];
  
  // Optional sidebar
  sidebarTitle?: string;
  sidebarItems?: {
    title: string;
    href: string;
  }[];
  
  // Optional CTA section
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButton?: {
    text: string;
    href: string;
  };
  
  // Additional sections
  additionalSections?: React.ReactNode;
}

export default function InfoPageTemplate({
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroPrimaryButton,
  heroSecondaryButton,
  contentSections,
  sidebarTitle,
  sidebarItems,
  ctaTitle,
  ctaDescription,
  ctaButton,
  additionalSections
}: InfoPageTemplateProps) {
  const hasSidebar = sidebarTitle && sidebarItems && sidebarItems.length > 0;

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        title={heroTitle}
        subtitle={heroSubtitle || ''}
        description={heroDescription || ''}
        primaryButton={heroPrimaryButton || {
          text: 'Learn More',
          href: '#content'
        }}
        secondaryButton={heroSecondaryButton}
      />

      <Divider type="dark-to-white" />

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 ${hasSidebar ? 'lg:grid-cols-3' : ''} gap-12`}>
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={hasSidebar ? 'lg:col-span-2' : ''}
            >
              <div className="prose prose-lg max-w-none">
                {contentSections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="mb-8"
                  >
                    {section.title && (
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {section.title}
                      </h2>
                    )}
                    
                    {section.isList && section.listItems ? (
                      <ul className="space-y-3">
                        {section.listItems.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-primary-600 mr-2">•</span>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-gray-600 whitespace-pre-line">
                        {section.content}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Sidebar */}
            {hasSidebar && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-32">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {sidebarTitle}
                    </h3>
                    <nav className="space-y-2">
                      {sidebarItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block py-2 px-3 text-gray-600 hover:text-primary-600 hover:bg-white rounded-md transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {additionalSections}

      {/* CTA Section */}
      {ctaTitle && (
        <>
          <Divider type="white-to-dark" />
          <section className="py-20 bg-slate-900 circle-pattern">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                {ctaTitle}
              </h2>
              {ctaDescription && (
                <p className="text-xl text-gray-300 mb-8">
                  {ctaDescription}
                </p>
              )}
              {ctaButton && (
                <Link
                  href={ctaButton.href}
                  className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
                >
                  {ctaButton.text}
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              )}
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
}