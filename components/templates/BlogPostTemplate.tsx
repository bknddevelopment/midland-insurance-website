'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  ClockIcon,
  TagIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import InsuranceAgencySchema from '@/components/seo/InsuranceAgencySchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

interface BlogPostTemplateProps {
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: React.ReactNode;
  relatedPosts?: Array<{
    title: string;
    excerpt: string;
    href: string;
  }>;
}

export default function BlogPostTemplate({
  title,
  date,
  readTime,
  category,
  excerpt,
  content,
  relatedPosts,
}: BlogPostTemplateProps) {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: title, url: '#' },
  ];

  return (
    <>
      <InsuranceAgencySchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <article className="min-h-screen">
        <Navbar />

        {/* Article Header */}
        <header className="bg-slate-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 text-gray-400 mb-6">
                <span className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  {date}
                </span>
                <span>•</span>
                <span className="flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  {readTime}
                </span>
                <span>•</span>
                <span className="flex items-center">
                  <TagIcon className="h-5 w-5 mr-2" />
                  {category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {title}
              </h1>
              <p className="text-xl text-gray-300">
                {excerpt}
              </p>
            </div>
          </div>
        </header>

        <Divider type="dark-to-white" />

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {content}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* CTA Section */}
        <section className="py-16 bg-slate-900 circle-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Construction Insurance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get expert advice and competitive quotes from Bergen County's construction insurance specialists.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={EXTERNAL_URLS.QUOTE_FORM}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
              >
                Get Free Quote
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/resources/construction-insurance-guide"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors"
              >
                Read Complete Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts && relatedPosts.length > 0 && (
          <>
            <Divider type="dark-to-white" />
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((post, index) => (
                    <motion.article
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="card"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Link
                        href={post.href}
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Read More →
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        <Footer />
      </article>
    </>
  );
}