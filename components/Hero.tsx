'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import ParallaxBackground from './ParallaxBackground';
import { getLinkProps, isExternalUrl } from '@/lib/utils/links';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  useParallax?: boolean;
}

export default function Hero({ 
  title, 
  subtitle, 
  description, 
  primaryButton, 
  secondaryButton,
  backgroundImage,
  useParallax = true
}: HeroProps) {
  const heroContent = (
    <div className="min-h-screen flex items-center justify-center pt-[130px]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge-dark inline-flex items-center mb-6">
            <ShieldCheckIcon className="h-5 w-5 mr-2" />
            {subtitle}
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            {title}
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href={primaryButton.href}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
              {...getLinkProps(primaryButton.href)}
            >
              {primaryButton.text}
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            
            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors btn-transition"
                {...getLinkProps(secondaryButton.href)}
              >
                {secondaryButton.text}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500 rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500 rounded-full opacity-5 blur-3xl" />
    </div>
  );

  // If we have a background image and parallax is enabled, use ParallaxBackground
  if (backgroundImage && useParallax) {
    return (
      <ParallaxBackground
        imageUrl={backgroundImage}
        alt="Hero background"
        speed={0.3}
        overlay="gradient"
        overlayOpacity={0.7}
        className="bg-slate-900"
        priority={true}
      >
        {heroContent}
      </ParallaxBackground>
    );
  }

  // Otherwise, render the hero section with traditional background
  return (
    <section className="relative bg-slate-900 circle-pattern overflow-hidden">
      {backgroundImage && !useParallax && (
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      {heroContent}
    </section>
  );
} 