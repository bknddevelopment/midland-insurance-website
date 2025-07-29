'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import ParallaxBackground from '@/components/ParallaxBackground';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  HomeIcon, 
  TruckIcon, 
  BuildingOfficeIcon,
  PhoneIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  SparklesIcon,
  CursorArrowRaysIcon,
  MagnifyingGlassIcon,
  HandThumbUpIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    icon: TruckIcon,
    title: 'Auto Insurance',
    description: 'Comprehensive coverage for your vehicle with competitive rates and excellent claims service.',
    href: '/services/auto-insurance'
  },
  {
    icon: HomeIcon,
    title: 'Home Insurance',
    description: 'Protect your home and belongings with customizable coverage options.',
    href: '/services/homeowners-insurance'
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Business Insurance',
    description: 'Comprehensive business protection including liability, property, and workers compensation.',
    href: '/services/business-insurance'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Life Insurance',
    description: 'Secure your family\'s financial future with our life insurance solutions.',
    href: '/services/life-insurance'
  }
];

const whyChooseUs = [
  {
    title: 'Personalized Service',
    description: 'We take the time to understand your unique needs and provide tailored insurance solutions.'
  },
  {
    title: 'Competitive Rates',
    description: 'Access to multiple insurance carriers ensures you get the best coverage at the best price.'
  },
  {
    title: 'Expert Guidance',
    description: 'Our experienced agents guide you through every step of the insurance process.'
  },
  {
    title: 'Claims Support',
    description: 'We\'re here to help when you need us most, providing support throughout the claims process.'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Midland Associates has been handling my family\'s insurance for over 10 years. Their service is exceptional and their rates are very competitive.'
  },
  {
    name: 'Michael Chen',
    rating: 5,
    text: 'The team at Midland Associates helped me find the perfect business insurance package. Professional, knowledgeable, and always responsive.'
  },
  {
    name: 'Emily Rodriguez',
    rating: 5,
    text: 'I switched to Midland Associates after a bad experience with another agency. The difference in service quality is night and day!'
  }
];

const faqItems = [
  {
    question: 'What types of insurance do you offer?',
    answer: 'We offer a comprehensive range of insurance products including auto, home, business, life, and specialty coverage options.'
  },
  {
    question: 'How do I get a quote?',
    answer: 'You can get a free quote by calling us at (201) 812-2184, visiting our office, or using our online quote form.'
  },
  {
    question: 'Do you work with multiple insurance companies?',
    answer: 'Yes, we work with over 20 top-rated insurance carriers to ensure you get the best coverage at the most competitive rates.'
  },
  {
    question: 'What makes Midland Associates different?',
    answer: 'Our personalized approach, extensive carrier network, and commitment to exceptional customer service set us apart from other agencies.'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* 1. Hero Section (Always Dark) */}
      <Hero
        title="Your Trusted Insurance Partner in New Jersey"
        subtitle="Protecting What Matters Most"
        description="For over 30 years, Midland Associates Insurance Services has been providing comprehensive insurance solutions to individuals and businesses throughout New Jersey. Get personalized service, competitive rates, and peace of mind."
        primaryButton={{
          text: 'Get Free Quote',
          href: '/quote'
        }}
        secondaryButton={{
          text: 'Learn More',
          href: '/about'
        }}
        backgroundImage="/photos/gallery/20250721_1442_Insurance Consultation Scene_simple_compose_01k0q4n4jces6spa4s75f9j1se.png"
      />

      {/* 2. Divider */}
      <Divider type="dark-to-white" />

      {/* 3. First White Section - Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Our Services</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Insurance Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From auto and home insurance to business coverage, we provide the protection you need with the personal service you deserve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center"
              >
                <service.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn More
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
            >
              View All Services
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Divider type="white-to-dark" />

      {/* 4. Get Started in Minutes Section */}
      <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="badge-light inline-block mb-4">Quick & Easy</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Get Started in Minutes
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Getting the right insurance coverage has never been easier. Our streamlined process gets you protected fast.
              </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-primary-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <CursorArrowRaysIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                1. Start Online
              </h3>
              <p className="text-gray-300">
                Enter your basic information in our simple online form. It takes less than 5 minutes to complete.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-primary-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <MagnifyingGlassIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                2. We Shop for You
              </h3>
              <p className="text-gray-300">
                We compare rates from over 20 top insurance carriers to find you the best coverage at the best price.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-primary-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <HandThumbUpIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                3. Pick Your Best Plan
              </h3>
              <p className="text-gray-300">
                Review your personalized options and choose the coverage that fits your needs and budget perfectly.
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <Link
              href="/quote"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition text-lg"
            >
              Start Your Quote Now
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <p className="text-gray-400 mt-4">No obligation • Free quotes • Save up to 40%</p>
          </div>
        </div>
      </section>

      {/* 5. Divider - REMOVED (both sections are now dark) */}

      {/* 6. Dark Section - Why Choose Us */}
      <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="badge-light inline-block mb-4">Why Choose Us</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                30+ Years of Trusted Service
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've been serving New Jersey families and businesses since 1990, building lasting relationships through exceptional service and competitive rates.
              </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <CheckCircleIcon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors btn-transition"
            >
              Learn About Our Story
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Why We're Independent Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-light inline-block mb-4">Independent Agency</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose an Independent Insurance Agency?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                As an independent insurance agency, we work for YOU, not the insurance companies. This means we can offer you:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <UserGroupIcon className="h-8 w-8 text-primary-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Options</h3>
                    <p className="text-gray-600">Access to over 20 top-rated insurance carriers means more choices and better rates for you.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <ChartBarIcon className="h-8 w-8 text-primary-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Unbiased Advice</h3>
                    <p className="text-gray-600">We're not tied to any single company, so our recommendations are based solely on your needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <SparklesIcon className="h-8 w-8 text-primary-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Service</h3>
                    <p className="text-gray-600">We take the time to understand your unique situation and find the perfect coverage.</p>
                  </div>
                </div>
              </div>
              
              <Link
                href="/about/independent"
                className="inline-flex items-center mt-8 text-primary-600 hover:text-primary-700 font-medium text-lg"
              >
                Learn More About Our Independence
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-primary-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Carrier Partners Include:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <p className="text-gray-700 font-medium">Progressive</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <p className="text-gray-700 font-medium">Travelers</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <p className="text-gray-700 font-medium">Hartford</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <p className="text-gray-700 font-medium">Safeco</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <p className="text-gray-700 font-medium">MetLife</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <p className="text-gray-700 font-medium">And 15+ More</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider type="white-to-dark" />

      {/* 8. Dark Section - Testimonials */}
      <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="badge-light inline-block mb-4">Client Reviews</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-8 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-white font-semibold">
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="https://www.google.com/maps/place/Midland+Associates+Insurance+Services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
            >
              <Image
                src="/photos/icons/google.webp"
                alt="Google"
                width={20}
                height={20}
                className="mr-2"
              />
              Leave a Google Review
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Trusted by New Jersey Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge-dark inline-block mb-4">Local Expertise</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Trusted by New Jersey Since 1990
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <p className="text-5xl font-bold text-primary-600 mb-2">30+</p>
              <p className="text-gray-700 font-medium">Years in Business</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary-600 mb-2">5,000+</p>
              <p className="text-gray-700 font-medium">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary-600 mb-2">20+</p>
              <p className="text-gray-700 font-medium">Insurance Carriers</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary-600 mb-2">4.9★</p>
              <p className="text-gray-700 font-medium">Google Rating</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Proudly Serving Bergen County & Beyond</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <p className="text-gray-600">Upper Saddle River</p>
              <p className="text-gray-600">Mahwah</p>
              <p className="text-gray-600">Ramsey</p>
              <p className="text-gray-600">Allendale</p>
              <p className="text-gray-600">Ridgewood</p>
              <p className="text-gray-600">Wyckoff</p>
              <p className="text-gray-600">Franklin Lakes</p>
              <p className="text-gray-600">And More!</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Insurance Made Simple Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Our Promise</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Insurance Made Simple
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe insurance should be easy to understand, affordable, and there when you need it most.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card text-center"
            >
              <ClockIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Quotes</h3>
              <p className="text-gray-600">Get multiple quotes in minutes, not hours. Our technology speeds up the process.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card text-center"
            >
              <PhoneIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Claims Support</h3>
              <p className="text-gray-600">Accidents don't keep business hours. Neither do we when you need to file a claim.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card text-center"
            >
              <UserGroupIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dedicated Agents</h3>
              <p className="text-gray-600">Work with the same knowledgeable agent who understands your needs.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card text-center"
            >
              <SparklesIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Technology</h3>
              <p className="text-gray-600">Manage policies, file claims, and pay bills online or through our mobile app.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Divider type="white-to-dark" />

      {/* 11. Dark Section - Contact CTA */}
      <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Protected?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free, no-obligation quote. Our experienced agents are ready to help you find the perfect coverage.
            </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="tel:(201) 812-2184"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Call (201) 812-2184
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors btn-transition"
            >
              Get Online Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 12. Divider */}
      <Divider type="dark-to-white" />

      {/* 13. FAQ Section (Always Last White Section) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">FAQ</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
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

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
            >
              Have More Questions?
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 