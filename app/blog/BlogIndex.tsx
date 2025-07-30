'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  ClockIcon,
  TagIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import InsuranceAgencySchema from '@/components/seo/InsuranceAgencySchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'spring-construction-insurance-prep',
    title: 'Spring Construction Season: Insurance Preparation Checklist',
    excerpt: 'Get your construction business ready for the busy spring season with our comprehensive insurance checklist. From policy reviews to new equipment coverage.',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Seasonal',
    featured: true,
    image: '/photos/blog/spring-construction.jpg',
  },
  {
    slug: 'general-contractor-insurance-guide',
    title: 'The Complete Guide to General Contractor Insurance in NJ',
    excerpt: 'Everything general contractors need to know about insurance requirements, coverage options, and cost-saving strategies specific to New Jersey.',
    date: '2024-03-10',
    readTime: '8 min read',
    category: 'Trade Spotlight',
    featured: true,
    image: '/photos/blog/general-contractor-guide.jpg',
  },
  {
    slug: 'bergen-county-construction-boom',
    title: 'Bergen County Construction Boom: Major Projects Reshaping Our Region',
    excerpt: 'From Fort Lee high-rises to Hackensack medical expansions, explore the major construction projects transforming Bergen County in 2024.',
    date: '2024-03-05',
    readTime: '6 min read',
    category: 'Local Projects',
    featured: true,
    image: '/photos/blog/bergen-county-projects.jpg',
  },
  {
    slug: 'winter-weather-construction-claims',
    title: 'Preventing Winter Weather Construction Claims',
    excerpt: 'Learn how to protect your construction business from common winter weather claims. Ice dams, frozen pipes, and slip-and-fall prevention strategies.',
    date: '2024-02-20',
    readTime: '7 min read',
    category: 'Seasonal',
    featured: false,
    image: '/photos/blog/winter-claims.jpg',
  },
  {
    slug: 'electrician-liability-risks',
    title: 'Top 5 Liability Risks for Electrical Contractors',
    excerpt: 'Understand the unique insurance risks electricians face, from electrical fires to shock injuries, and how to protect your electrical contracting business.',
    date: '2024-02-15',
    readTime: '6 min read',
    category: 'Trade Spotlight',
    featured: false,
    image: '/photos/blog/electrician-risks.jpg',
  },
  {
    slug: 'hackensack-development-update',
    title: 'Hackensack\'s Downtown Development: Opportunities for Contractors',
    excerpt: 'Major development projects in downtown Hackensack are creating opportunities for local contractors. Here\'s what you need to know about insurance requirements.',
    date: '2024-02-10',
    readTime: '5 min read',
    category: 'Local Projects',
    featured: false,
    image: '/photos/blog/hackensack-development.jpg',
  },
  {
    slug: 'nj-construction-insurance-requirements',
    title: 'Understanding NJ Construction Insurance Requirements in 2024',
    excerpt: 'New Jersey\'s construction insurance requirements can be complex. This guide breaks down state mandates, municipal additions, and contract requirements.',
    date: '2024-02-05',
    readTime: '10 min read',
    category: 'Insurance Tips',
    featured: false,
    image: '/photos/blog/nj-requirements.jpg',
  },
  {
    slug: 'summer-safety-construction-sites',
    title: 'Summer Safety: Protecting Workers in Bergen County Heat',
    excerpt: 'Summer brings unique safety challenges to construction sites. Learn how to prevent heat-related injuries and reduce workers\' comp claims.',
    date: '2024-01-30',
    readTime: '6 min read',
    category: 'Seasonal',
    featured: false,
    image: '/photos/blog/summer-safety.jpg',
  },
  {
    slug: 'plumber-water-damage-coverage',
    title: 'Water Damage Claims: Essential Coverage for Plumbers',
    excerpt: 'Water damage is the #1 claim for plumbing contractors. Understand your coverage options and claim prevention strategies.',
    date: '2024-01-25',
    readTime: '7 min read',
    category: 'Trade Spotlight',
    featured: false,
    image: '/photos/blog/plumber-coverage.jpg',
  },
  {
    slug: 'fort-lee-high-rise-insurance',
    title: 'Insuring High-Rise Construction: Fort Lee\'s Building Boom',
    excerpt: 'Fort Lee\'s skyline is changing rapidly. Learn about the unique insurance challenges and requirements for high-rise construction projects.',
    date: '2024-01-20',
    readTime: '8 min read',
    category: 'Local Projects',
    featured: false,
    image: '/photos/blog/fort-lee-highrise.jpg',
  },
  {
    slug: 'fall-roof-maintenance-insurance',
    title: 'Fall Roof Work: Insurance Considerations for Roofers',
    excerpt: 'Fall is prime time for roofing work. Understand the insurance implications of increased activity and weather-related risks.',
    date: '2024-01-15',
    readTime: '6 min read',
    category: 'Seasonal',
    featured: false,
    image: '/photos/blog/fall-roofing.jpg',
  },
  {
    slug: 'construction-technology-risks',
    title: 'New Technology, New Risks: Insuring Modern Construction',
    excerpt: 'From drones to BIM software, new construction technology brings new liability concerns. Stay protected as you modernize.',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Insurance Tips',
    featured: false,
    image: '/photos/blog/construction-tech.jpg',
  },
];

const categories = [
  'All Posts',
  'Seasonal',
  'Trade Spotlight',
  'Local Projects',
  'Insurance Tips',
];

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ];

  // Filter posts by category
  const filteredPosts = selectedCategory === 'All Posts'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const displayedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <>
      <InsuranceAgencySchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Construction Insurance Blog"
          subtitle="Expert Insights for Bergen County Contractors"
          description="Stay informed with the latest construction insurance tips, safety advice, and Bergen County industry news."
          primaryButton={{
            text: 'Subscribe to Updates',
            href: '#newsletter',
          }}
          secondaryButton={{
            text: 'Browse Topics',
            href: '#posts',
          }}
          backgroundImage="/photos/blog-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Featured Posts */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Featured Articles</div>
              <h2 className="text-4xl font-bold text-gray-900">
                Latest Insights
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-w-16 aspect-h-9 mb-6">
                    <div className="w-full h-48 bg-gray-200 rounded-lg" />
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <TagIcon className="h-4 w-4 mr-1" />
                    <span>{post.category}</span>
                    <span className="mx-2">•</span>
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Read More
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Category Filter and All Posts */}
        <section id="posts" className="py-16 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <div className="w-full h-48 bg-slate-700" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium"
                    >
                      Read Article
                      <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4 mt-12">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg ${
                    currentPage === 1
                      ? 'bg-slate-800 text-gray-500 cursor-not-allowed'
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>
                
                <div className="flex space-x-2">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 rounded-lg font-medium ${
                        currentPage === i + 1
                          ? 'bg-primary-600 text-white'
                          : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg ${
                    currentPage === totalPages
                      ? 'bg-slate-800 text-gray-500 cursor-not-allowed'
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Newsletter Signup */}
        <section id="newsletter" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Stay Updated on Construction Insurance
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get monthly insights on insurance tips, safety updates, and Bergen County construction news.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}