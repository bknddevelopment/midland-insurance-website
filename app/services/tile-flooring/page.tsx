'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HomeIcon,
  SparklesIcon,
  SwatchIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

const flooringTypes = [
  {
    icon: SparklesIcon,
    title: 'Luxury Vinyl Plank',
    description: 'Waterproof, durable flooring that mimics hardwood with easy maintenance.',
    features: ['100% Waterproof', 'Scratch resistant', 'Easy installation', 'Pet friendly'],
    popular: true
  },
  {
    icon: HomeIcon,
    title: 'Hardwood Flooring',
    description: 'Classic beauty and timeless appeal with solid or engineered wood options.',
    features: ['Natural beauty', 'Increases home value', 'Can be refinished', '25+ year lifespan'],
    popular: true
  },
  {
    icon: SwatchIcon,
    title: 'Ceramic & Porcelain Tile',
    description: 'Versatile and durable options perfect for kitchens, bathrooms, and more.',
    features: ['Water resistant', 'Easy to clean', 'Many styles available', 'Heat resistant']
  },
  {
    icon: SparklesIcon,
    title: 'Natural Stone',
    description: 'Premium marble, granite, travertine, and slate for luxurious spaces.',
    features: ['Unique patterns', 'Extremely durable', 'Premium appearance', 'Natural material']
  },
  {
    icon: HomeIcon,
    title: 'Laminate Flooring',
    description: 'Budget-friendly option that looks like hardwood with easy installation.',
    features: ['Affordable pricing', 'DIY friendly', 'Fade resistant', 'Easy maintenance']
  },
  {
    icon: SwatchIcon,
    title: 'Carpet Installation',
    description: 'Soft, comfortable flooring perfect for bedrooms and living areas.',
    features: ['Sound absorption', 'Warmth & comfort', 'Many colors/styles', 'Budget options']
  }
];

const roomApplications = [
  {
    room: 'Kitchen',
    description: 'Water-resistant tile or luxury vinyl for durability and easy cleaning.',
    recommended: ['Porcelain Tile', 'Luxury Vinyl', 'Natural Stone']
  },
  {
    room: 'Bathroom',
    description: 'Waterproof options with slip resistance for safety and style.',
    recommended: ['Ceramic Tile', 'Natural Stone', 'Luxury Vinyl']
  },
  {
    room: 'Living Areas',
    description: 'Beautiful hardwood or luxury vinyl for warmth and elegance.',
    recommended: ['Hardwood', 'Engineered Wood', 'Luxury Vinyl Plank']
  },
  {
    room: 'Basement',
    description: 'Moisture-resistant flooring that handles below-grade conditions.',
    recommended: ['Luxury Vinyl', 'Ceramic Tile', 'Engineered Wood']
  }
];

const installationProcess = [
  {
    step: '1',
    title: 'Free Consultation',
    description: 'In-home assessment to discuss your flooring needs and preferences.'
  },
  {
    step: '2',
    title: 'Product Selection',
    description: 'Browse samples and select the perfect flooring for your space.'
  },
  {
    step: '3',
    title: 'Accurate Measurement',
    description: 'Professional measurement ensures accurate material ordering.'
  },
  {
    step: '4',
    title: 'Floor Preparation',
    description: 'Subfloor inspection, leveling, and moisture barrier installation.'
  },
  {
    step: '5',
    title: 'Expert Installation',
    description: 'Professional installation by certified flooring specialists.'
  },
  {
    step: '6',
    title: 'Quality Assurance',
    description: 'Final inspection and care instructions for your new floors.'
  }
];

const benefits = [
  {
    icon: ShieldCheckIcon,
    title: 'Warranty Protection',
    description: 'Manufacturer warranties plus our installation guarantee.'
  },
  {
    icon: ClockIcon,
    title: 'Fast Installation',
    description: 'Most projects completed within 2-5 days depending on size.'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Professional Tools',
    description: 'Latest equipment for precise cuts and perfect installation.'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Free Estimates',
    description: 'No-obligation quotes with transparent, competitive pricing.'
  }
];

const faqItems = [
  {
    question: 'How long does tile and flooring installation take?',
    answer: 'Installation time varies by project size and flooring type. Most rooms can be completed in 1-3 days, while whole-home projects typically take 3-7 days. We provide a detailed timeline during your consultation.'
  },
  {
    question: 'What is the best flooring for high-traffic areas?',
    answer: 'Luxury vinyl plank, porcelain tile, and quality hardwood are excellent for high-traffic areas. These materials offer durability, easy maintenance, and maintain their appearance over time with proper care.'
  },
  {
    question: 'Do I need to move out during installation?',
    answer: 'Usually not. We work room by room to minimize disruption. You may need to avoid certain areas during installation and drying time, but most clients remain in their homes throughout the process.'
  },
  {
    question: 'What preparation is needed before installation?',
    answer: 'We handle most preparation including removing old flooring and preparing the subfloor. We ask that you remove personal items and furniture from the installation areas. We can arrange furniture moving services if needed.'
  }
];

export default function TileFlooring() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="Professional Tile & Flooring Installation"
        subtitle="Transform Your Floors, Transform Your Home"
        description="Expert installation of tile, hardwood, luxury vinyl, and more. Quality materials, professional installation, and competitive pricing for every room in your home."
        primaryButton={{
          text: 'Get Free Estimate',
          href: EXTERNAL_URLS.QUOTE_FORM
        }}
        secondaryButton={{
          text: 'Call Now',
          href: 'tel:(201) 812-2184'
        }}
        backgroundImage="/photos/gallery/20250721_1442_Insurance Consultation Scene_simple_compose_01k0q4n4jces6spa4s75f9j1se.png"
      />

      <Divider type="dark-to-white" />

      {/* Flooring Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Flooring Options</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Flooring Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From luxury vinyl to natural stone, we offer a wide selection of flooring options to match your style, budget, and lifestyle needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flooringTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card relative ${type.popular ? 'ring-2 ring-primary-500' : ''}`}
              >
                {type.popular && (
                  <div className="absolute -top-3 -right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <type.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider type="white-to-dark" />

      {/* Room Applications */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Room Solutions</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Perfect Flooring for Every Room
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Different rooms have different needs. We help you choose the right flooring for each space in your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roomApplications.map((room, index) => (
              <motion.div
                key={room.room}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{room.room}</h3>
                <p className="text-gray-300 mb-4 text-sm">{room.description}</p>
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Recommended:</p>
                  {room.recommended.map((rec, idx) => (
                    <p key={idx} className="text-sm text-primary-400">• {rec}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Our Process</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Professional Installation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From consultation to completion, we ensure a smooth and professional flooring installation experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {installationProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-300">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Why Choose Us</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Your Flooring Installation Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Beautiful New Floors?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and estimate for your flooring project. Our experts will help you choose the perfect flooring for your home.
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
              href={EXTERNAL_URLS.QUOTE_FORM}
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors btn-transition"
              {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
            >
              Get Free Estimate
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Divider type="dark-to-white" />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">FAQ</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Flooring Installation Questions
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