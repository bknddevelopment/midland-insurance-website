import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

interface CoverageItem {
  item: string;
  included: boolean;
  description?: string;
}

interface CoverageExplainerProps {
  title: string;
  description?: string;
  coverageItems: CoverageItem[];
  variant?: 'default' | 'compact';
}

export default function CoverageExplainer({
  title,
  description,
  coverageItems,
  variant = 'default'
}: CoverageExplainerProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      {description && (
        <p className="text-gray-600 mb-6">{description}</p>
      )}
      
      <div className={variant === 'compact' ? 'space-y-3' : 'space-y-4'}>
        {coverageItems.map((coverage, index) => (
          <motion.div
            key={coverage.item}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex items-start"
          >
            {coverage.included ? (
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
            ) : (
              <XCircleIcon className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className={`font-medium ${coverage.included ? 'text-gray-900' : 'text-gray-500'}`}>
                {coverage.item}
              </p>
              {coverage.description && variant !== 'compact' && (
                <p className="text-sm text-gray-600 mt-1">{coverage.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}