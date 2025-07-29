import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

interface TestimonialCardProps {
  name: string;
  location?: string;
  rating: number;
  text: string;
  date?: string;
  variant?: 'default' | 'compact';
  index?: number;
}

export default function TestimonialCard({
  name,
  location,
  rating,
  text,
  date,
  variant = 'default',
  index = 0
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`${
        variant === 'default' 
          ? 'bg-slate-800 p-8 rounded-lg' 
          : 'bg-white p-6 rounded-lg shadow-md'
      }`}
    >
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon 
            key={i} 
            className={`h-5 w-5 ${
              i < rating 
                ? 'text-yellow-400' 
                : variant === 'default' ? 'text-gray-600' : 'text-gray-300'
            }`} 
          />
        ))}
      </div>
      
      <p className={`mb-6 italic ${
        variant === 'default' ? 'text-gray-300' : 'text-gray-600'
      }`}>
        "{text}"
      </p>
      
      <div>
        <p className={`font-semibold ${
          variant === 'default' ? 'text-white' : 'text-gray-900'
        }`}>
          {name}
        </p>
        {location && (
          <p className={`text-sm ${
            variant === 'default' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {location}
          </p>
        )}
        {date && (
          <p className={`text-sm mt-1 ${
            variant === 'default' ? 'text-gray-500' : 'text-gray-400'
          }`}>
            {date}
          </p>
        )}
      </div>
    </motion.div>
  );
}