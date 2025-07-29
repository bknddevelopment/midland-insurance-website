import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface QuoteFormProps {
  insuranceType: string;
  fields?: string[];
  onSubmit?: (data: any) => void;
}

export default function QuoteForm({
  insuranceType,
  fields = ['name', 'email', 'phone', 'zipCode'],
  onSubmit
}: QuoteFormProps) {
  const [formData, setFormData] = useState<any>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Default behavior - could redirect to quote page with params
      console.log('Quote form submitted:', formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg shadow-xl p-8"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Get Your Free {insuranceType} Quote
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.includes('name') && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        )}
        
        {fields.includes('email') && (
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        )}
        
        {fields.includes('phone') && (
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        )}
        
        {fields.includes('zipCode') && (
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
              ZIP Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              required
              pattern="[0-9]{5}"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        )}
        
        {fields.includes('insuranceType') && (
          <div>
            <label htmlFor="insuranceType" className="block text-sm font-medium text-gray-700 mb-1">
              Insurance Type
            </label>
            <select
              id="insuranceType"
              name="insuranceType"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select Insurance Type</option>
              <option value="auto">Auto Insurance</option>
              <option value="home">Home Insurance</option>
              <option value="business">Business Insurance</option>
              <option value="life">Life Insurance</option>
              <option value="other">Other</option>
            </select>
          </div>
        )}
        
        {fields.includes('message') && (
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        )}
        
        <button
          type="submit"
          className="w-full bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors btn-transition"
        >
          Get My Free Quote
        </button>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          By submitting this form, you agree to be contacted about your insurance needs.
        </p>
      </form>
    </motion.div>
  );
}