'use client';

import React from 'react';
import InfoPageTemplate from '@/components/templates/InfoPageTemplate';
import QuoteForm from '@/components/shared/QuoteForm';
import { motion } from 'framer-motion';
import { 
  GiftIcon,
  UserGroupIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function ReferFriendsPage() {
  const contentSections = [
    {
      title: 'Share the Love, Earn Rewards',
      content: `At Midland Associates, our greatest compliment is when our clients refer their friends and family to us. We've built our business on trust, exceptional service, and the personal recommendations of satisfied customers like you.

To show our appreciation for your referrals, we've created a special program that rewards both you and your referrals. It's our way of saying thank you for helping us grow our family of protected clients.`
    },
    {
      title: 'How Our Referral Program Works',
      content: `Our referral program is simple and rewarding:`,
      isList: true,
      listItems: [
        'Refer a friend, family member, or colleague to Midland Associates',
        'When they receive a quote (no purchase necessary), you both benefit',
        'Your referral gets a special discount on their new policy',
        'You receive a thank you gift or credit toward your policy',
        'There\'s no limit to how many people you can refer',
        'Referrals can be for any type of insurance we offer'
      ]
    },
    {
      title: 'Why Your Referrals Matter',
      content: `Every referral helps us continue providing the personalized, local service that sets us apart. When you refer someone to us, you're not just helping them find better insurance - you're connecting them with a trusted advisor who will be there when they need us most.

Your referrals allow us to:
• Help more families and businesses in our community
• Maintain competitive rates through steady growth
• Continue investing in better service and technology
• Build lasting relationships with people you care about`
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
      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everyone Wins
            </h2>
            <p className="text-lg text-gray-600">
              Our referral program creates value for everyone involved
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <GiftIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">You Earn Rewards</h3>
              <p className="text-gray-600">
                Receive thank you gifts or credits for each successful referral.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <UserGroupIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">They Save Money</h3>
              <p className="text-gray-600">
                Your referrals get special pricing and the same great service you enjoy.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <HeartIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Grows</h3>
              <p className="text-gray-600">
                Help strengthen our community of protected families and businesses.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <SparklesIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Better Service</h3>
              <p className="text-gray-600">
                Growth through referrals helps us continue improving our services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Make a Referral
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Know someone who could benefit from better insurance coverage and personalized service? Fill out this quick form and we'll reach out to them with a special offer.
              </p>
              
              <div className="bg-primary-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What Happens Next?
                </h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-bold text-primary-600 mr-2">1.</span>
                    We'll contact your referral within 24 hours
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-primary-600 mr-2">2.</span>
                    They'll receive a free, no-obligation quote
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-primary-600 mr-2">3.</span>
                    You'll receive your reward when they get their quote
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-primary-600 mr-2">4.</span>
                    They'll enjoy the same great service you do
                  </li>
                </ol>
              </div>
            </div>
            
            <div>
              <QuoteForm
                insuranceType="Referral"
                fields={['name', 'email', 'phone', 'message']}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Easy Ways to Refer */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Easy Ways to Refer
            </h2>
            <p className="text-lg text-gray-600">
              Choose the method that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Give us a call with your referral's information</p>
              <a href="tel:(201) 812-2184" className="text-primary-600 font-medium hover:text-primary-700">
                (201) 812-2184
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your referral's contact details</p>
              <a href="mailto:referrals@midlandinsurance.biz" className="text-primary-600 font-medium hover:text-primary-700">
                referrals@midlandinsurance.biz
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Share Online</h3>
              <p className="text-gray-600 mb-4">Share our website with friends on social media</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-primary-600 hover:text-primary-700">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-primary-600 hover:text-primary-700">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <InfoPageTemplate
      heroTitle="Refer Friends & Family"
      heroSubtitle="Share the Benefits of Great Insurance"
      heroDescription="Help your loved ones save money and get better coverage while earning rewards for yourself."
      heroPrimaryButton={{
        text: 'Make a Referral',
        href: '#referral-form'
      }}
      heroSecondaryButton={{
        text: 'Learn More',
        href: '#how-it-works'
      }}
      contentSections={contentSections}
      sidebarTitle="Quick Links"
      sidebarItems={sidebarItems}
      additionalSections={additionalSections}
      ctaTitle="Start Referring Today"
      ctaDescription="Help your friends and family discover better insurance coverage and personalized service."
      ctaButton={{
        text: 'Refer Someone Now',
        href: '#referral-form'
      }}
    />
  );
}