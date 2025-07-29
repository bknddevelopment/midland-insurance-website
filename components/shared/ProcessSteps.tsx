import React from 'react';
import { motion } from 'framer-motion';

interface Step {
  number?: string;
  icon?: React.ElementType;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title?: string;
  description?: string;
  steps: Step[];
  variant?: 'numbered' | 'icon' | 'timeline';
}

export default function ProcessSteps({
  title,
  description,
  steps,
  variant = 'numbered'
}: ProcessStepsProps) {
  return (
    <div className="py-12">
      {(title || description) && (
        <div className="text-center mb-12">
          {title && <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>}
          {description && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>}
        </div>
      )}
      
      {variant === 'timeline' ? (
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300" />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-1/2 px-8">
                  <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="bg-primary-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                    {step.number || index + 1}
                  </div>
                </div>
                
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div className={`grid grid-cols-1 ${
          steps.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'
        } gap-8`}>
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              {variant === 'numbered' ? (
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-700">
                    {step.number || index + 1}
                  </span>
                </div>
              ) : step.icon ? (
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary-600" />
                </div>
              ) : null}
              
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h4>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}