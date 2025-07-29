import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  features?: string[];
  ctaText?: string;
  index?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  features,
  ctaText = 'Learn More',
  index = 0
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <Link href={href} className="block h-full">
        <div className="card hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
          <div className="flex-grow">
            <Icon className="h-12 w-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {title}
            </h3>
            <p className="text-gray-600 mb-4">
              {description}
            </p>
            
            {features && features.length > 0 && (
              <ul className="space-y-2 mb-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <span className="text-primary-600 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="mt-auto pt-4">
            <span className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
              {ctaText}
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}