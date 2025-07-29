'use client';

import React from 'react';
import InfoPageTemplate from '@/components/templates/InfoPageTemplate';
import TestimonialCard from '@/components/shared/TestimonialCard';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  StarIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  MegaphoneIcon
} from '@heroicons/react/24/outline';

export default function LeaveReviewPage() {
  const contentSections = [
    {
      title: 'Your Voice Matters',
      content: `Your feedback is invaluable to us. Reviews from our clients help us understand what we're doing right and where we can improve. More importantly, your honest reviews help other families and businesses in New Jersey make informed decisions about their insurance needs.

We're proud of the relationships we've built over the past 30+ years, and we'd be honored if you'd share your experience with others. Whether you've been with us for decades or just started, your perspective matters.`
    },
    {
      title: 'Why Reviews Are Important',
      content: `Online reviews have become one of the most trusted sources of information for people making important decisions. Your review can:`,
      isList: true,
      listItems: [
        'Help others find trustworthy insurance services',
        'Provide valuable feedback that helps us improve',
        'Share specific experiences that resonate with potential clients',
        'Build trust in our community',
        'Recognize our team members who\'ve provided exceptional service',
        'Contribute to the local business ecosystem'
      ]
    },
    {
      title: 'What Makes a Great Review',
      content: `The best reviews are honest, specific, and helpful. Consider sharing:`,
      isList: true,
      listItems: [
        'How long you\'ve been a client',
        'What type of insurance you have with us',
        'Your experience with our team members',
        'How we\'ve helped during claims or policy changes',
        'What sets us apart from other agencies',
        'Specific examples of exceptional service',
        'How we\'ve saved you money or improved your coverage'
      ]
    }
  ];

  const recentTestimonials = [
    {
      name: 'Jennifer M.',
      location: 'Ramsey, NJ',
      rating: 5,
      text: 'I\'ve been with Midland Associates for 15 years. They helped me through two auto claims and always found me the best rates. Their personal service is unmatched!',
      date: 'October 2024'
    },
    {
      name: 'Robert K.',
      location: 'Upper Saddle River, NJ',
      rating: 5,
      text: 'Switched to Midland Associates last year and saved over $800 on my home and auto insurance. They took the time to review all my coverage and found me better protection for less.',
      date: 'September 2024'
    },
    {
      name: 'Maria S.',
      location: 'Mahwah, NJ',
      rating: 5,
      text: 'As a small business owner, I needed someone who understood my unique needs. Midland Associates has been incredible - responsive, knowledgeable, and always looking out for my best interests.',
      date: 'August 2024'
    }
  ];

  const sidebarItems = [
    { title: 'About Us', href: '/about' },
    { title: "We're Independent", href: '/about/independent' },
    { title: 'Insurance Tips', href: '/about/insurance-tips' },
    { title: 'Refer Friends & Family', href: '/about/refer-friends' },
    { title: 'Leave A Review', href: '/about/leave-review' }
  ];

  const additionalSections = (
    <>
      {/* Review Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Where to Leave Your Review
            </h2>
            <p className="text-lg text-gray-600">
              Choose your preferred platform to share your experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src="/photos/icons/google.webp"
                alt="Google"
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Google Reviews</h3>
              <p className="text-gray-600 mb-4">
                Help us reach more local families and businesses
              </p>
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Link
                href="https://www.google.com/maps/place/Midland+Associates+Insurance+Services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Leave Google Review
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-[60px] h-[60px] bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">f</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Facebook Reviews</h3>
              <p className="text-gray-600 mb-4">
                Share with your friends and family network
              </p>
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Link
                href="https://www.facebook.com/midlandassociates/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Leave Facebook Review
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-[60px] h-[60px] bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">Y</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Yelp Reviews</h3>
              <p className="text-gray-600 mb-4">
                Reach the Yelp community of local reviewers
              </p>
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Link
                href="https://www.yelp.com/biz/midland-associates-insurance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Leave Yelp Review
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Are Saying
            </h2>
            <p className="text-lg text-gray-600">
              Recent reviews from satisfied clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {recentTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                {...testimonial}
                variant="compact"
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="https://www.google.com/maps/place/Midland+Associates+Insurance+Services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-lg"
            >
              Read More Reviews
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Review Tips */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tips for Writing Your Review
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <ChatBubbleLeftRightIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Be Specific</h3>
              <p className="text-gray-600">
                Share details about your experience that would help others understand our service.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <HeartIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Be Honest</h3>
              <p className="text-gray-600">
                Authentic reviews are the most helpful. Share your genuine experience with us.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <StarIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rate Fairly</h3>
              <p className="text-gray-600">
                Consider all aspects of your experience when choosing your star rating.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <MegaphoneIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Share Your Story</h3>
              <p className="text-gray-600">
                Tell others how we've helped protect what matters most to you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <InfoPageTemplate
      heroTitle="Leave a Review"
      heroSubtitle="Share Your Midland Associates Experience"
      heroDescription="Your feedback helps us serve you better and helps others discover the benefits of working with an independent insurance agency."
      heroPrimaryButton={{
        text: 'Write a Review',
        href: '#review-platforms'
      }}
      contentSections={contentSections}
      sidebarTitle="Quick Links"
      sidebarItems={sidebarItems}
      additionalSections={additionalSections}
      ctaTitle="Ready to Share Your Experience?"
      ctaDescription="Take a moment to leave a review and help others discover exceptional insurance service."
      ctaButton={{
        text: 'Leave a Review Now',
        href: 'https://www.google.com/maps/place/Midland+Associates+Insurance+Services'
      }}
    />
  );
}