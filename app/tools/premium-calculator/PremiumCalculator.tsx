'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeftIcon, 
  CalculatorIcon, 
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

// Premium rate data based on trade and size
const premiumRates = {
  generalLiability: {
    'general-contractor': { base: 2.5, multiplier: 1.2 },
    'electrician': { base: 1.8, multiplier: 1.0 },
    'plumber': { base: 2.2, multiplier: 1.1 },
    'carpenter': { base: 3.0, multiplier: 1.15 },
    'roofer': { base: 5.5, multiplier: 1.4 },
    'painter': { base: 2.8, multiplier: 1.1 },
    'hvac': { base: 1.9, multiplier: 1.0 },
    'landscaper': { base: 2.4, multiplier: 1.1 },
    'drywall': { base: 3.2, multiplier: 1.2 },
    'mason': { base: 3.5, multiplier: 1.25 }
  },
  workersComp: {
    'general-contractor': 8.5,
    'electrician': 4.2,
    'plumber': 6.8,
    'carpenter': 16.5,
    'roofer': 42.0,
    'painter': 12.5,
    'hvac': 7.5,
    'landscaper': 13.2,
    'drywall': 14.8,
    'mason': 18.5
  },
  commercialAuto: {
    perVehicle: 2400,
    heavyTruck: 4800,
    trailer: 600
  },
  toolsEquipment: {
    rate: 0.015 // 1.5% of equipment value
  },
  umbrella: {
    '1M': 750,
    '2M': 1200,
    '5M': 2500,
    '10M': 4500
  }
};

interface FormData {
  trade: string;
  annualRevenue: string;
  employees: string;
  payroll: string;
  vehicles: string;
  heavyTrucks: string;
  equipmentValue: string;
  hasClaimsHistory: boolean;
  yearsInBusiness: string;
  umbrellaLimit: string;
}

export default function PremiumCalculator() {
  const [formData, setFormData] = useState<FormData>({
    trade: '',
    annualRevenue: '',
    employees: '',
    payroll: '',
    vehicles: '',
    heavyTrucks: '',
    equipmentValue: '',
    hasClaimsHistory: false,
    yearsInBusiness: '',
    umbrellaLimit: '0'
  });

  const [estimates, setEstimates] = useState<any>(null);
  const [showResults, setShowResults] = useState(false);

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/resources' },
    { name: 'Premium Calculator', url: '/tools/premium-calculator' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const calculatePremiums = () => {
    const revenue = parseFloat(formData.annualRevenue) || 0;
    const payroll = parseFloat(formData.payroll) || 0;
    const vehicles = parseInt(formData.vehicles) || 0;
    const heavyTrucks = parseInt(formData.heavyTrucks) || 0;
    const equipmentValue = parseFloat(formData.equipmentValue) || 0;
    const yearsInBusiness = parseInt(formData.yearsInBusiness) || 0;

    // General Liability calculation
    const glRates = premiumRates.generalLiability[formData.trade as keyof typeof premiumRates.generalLiability] || { base: 3.0, multiplier: 1.2 };
    let glPremium = (revenue / 100) * glRates.base;
    
    // Apply multipliers
    if (revenue > 1000000) {
      glPremium *= glRates.multiplier;
    }
    if (formData.hasClaimsHistory) {
      glPremium *= 1.25;
    }
    if (yearsInBusiness < 3) {
      glPremium *= 1.15;
    }
    if (yearsInBusiness > 10) {
      glPremium *= 0.9;
    }

    // Workers Comp calculation
    const wcRate = premiumRates.workersComp[formData.trade as keyof typeof premiumRates.workersComp] || 10;
    let wcPremium = (payroll / 100) * wcRate;
    if (formData.hasClaimsHistory) {
      wcPremium *= 1.35;
    }

    // Commercial Auto calculation
    const autoPremium = (vehicles * premiumRates.commercialAuto.perVehicle) + 
                       (heavyTrucks * premiumRates.commercialAuto.heavyTruck);

    // Tools & Equipment calculation
    const toolsPremium = equipmentValue * premiumRates.toolsEquipment.rate;

    // Umbrella calculation
    const umbrellaLimit = formData.umbrellaLimit as keyof typeof premiumRates.umbrella;
    const umbrellaPremium = premiumRates.umbrella[umbrellaLimit] || 0;

    // Total calculation
    const totalPremium = glPremium + wcPremium + autoPremium + toolsPremium + umbrellaPremium;

    setEstimates({
      generalLiability: Math.round(glPremium),
      workersComp: Math.round(wcPremium),
      commercialAuto: Math.round(autoPremium),
      toolsEquipment: Math.round(toolsPremium),
      umbrella: Math.round(umbrellaPremium),
      total: Math.round(totalPremium),
      monthly: Math.round(totalPremium / 12)
    });

    setShowResults(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculatePremiums();
  };

  const downloadReport = () => {
    // Create a simple text report
    const report = `
Construction Insurance Premium Estimate
Generated: ${new Date().toLocaleDateString()}

Business Information:
- Trade: ${formData.trade.replace('-', ' ')}
- Annual Revenue: $${parseInt(formData.annualRevenue).toLocaleString()}
- Employees: ${formData.employees}
- Payroll: $${parseInt(formData.payroll).toLocaleString()}
- Years in Business: ${formData.yearsInBusiness}

Premium Estimates:
- General Liability: $${estimates.generalLiability.toLocaleString()}/year
- Workers' Compensation: $${estimates.workersComp.toLocaleString()}/year
- Commercial Auto: $${estimates.commercialAuto.toLocaleString()}/year
- Tools & Equipment: $${estimates.toolsEquipment.toLocaleString()}/year
- Umbrella Policy: $${estimates.umbrella.toLocaleString()}/year

Total Estimated Premium: $${estimates.total.toLocaleString()}/year
Monthly Payment: $${estimates.monthly.toLocaleString()}/month

This is an estimate only. Actual premiums may vary based on additional factors.
Contact Midland Associates at (201) 812-2184 for a formal quote.
    `;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'insurance-premium-estimate.txt';
    a.click();
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <Navbar />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/resources" className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-6">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Resources
            </Link>
            
            <div className="flex items-center mb-6">
              <CalculatorIcon className="h-12 w-12 text-primary-400 mr-4" />
              <div>
                <h1 className="text-4xl font-bold">Premium Calculator</h1>
                <p className="text-xl text-gray-300 mt-2">Estimate your construction insurance costs instantly</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Enter Your Business Information</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Trade Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Trade/Specialty *
                    </label>
                    <select
                      name="trade"
                      value={formData.trade}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select your trade</option>
                      <option value="general-contractor">General Contractor</option>
                      <option value="electrician">Electrician</option>
                      <option value="plumber">Plumber</option>
                      <option value="carpenter">Carpenter/Framing</option>
                      <option value="roofer">Roofer</option>
                      <option value="painter">Painter</option>
                      <option value="hvac">HVAC Contractor</option>
                      <option value="landscaper">Landscaper</option>
                      <option value="drywall">Drywall/Plastering</option>
                      <option value="mason">Mason/Concrete</option>
                    </select>
                  </div>

                  {/* Annual Revenue */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Annual Revenue *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                      <input
                        type="number"
                        name="annualRevenue"
                        value={formData.annualRevenue}
                        onChange={handleInputChange}
                        required
                        placeholder="500000"
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>

                  {/* Employees & Payroll */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Employees *
                      </label>
                      <input
                        type="number"
                        name="employees"
                        value={formData.employees}
                        onChange={handleInputChange}
                        required
                        placeholder="5"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Annual Payroll *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                        <input
                          type="number"
                          name="payroll"
                          value={formData.payroll}
                          onChange={handleInputChange}
                          required
                          placeholder="250000"
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Vehicles */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Light Vehicles (Cars, Vans, Pickups)
                      </label>
                      <input
                        type="number"
                        name="vehicles"
                        value={formData.vehicles}
                        onChange={handleInputChange}
                        placeholder="2"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Heavy Trucks (Box trucks, Dumps)
                      </label>
                      <input
                        type="number"
                        name="heavyTrucks"
                        value={formData.heavyTrucks}
                        onChange={handleInputChange}
                        placeholder="0"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>

                  {/* Equipment Value */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total Equipment Value
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                      <input
                        type="number"
                        name="equipmentValue"
                        value={formData.equipmentValue}
                        onChange={handleInputChange}
                        placeholder="50000"
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Include tools, machinery, and equipment</p>
                  </div>

                  {/* Years in Business */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Years in Business *
                    </label>
                    <input
                      type="number"
                      name="yearsInBusiness"
                      value={formData.yearsInBusiness}
                      onChange={handleInputChange}
                      required
                      placeholder="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  {/* Umbrella Policy */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Umbrella Policy Limit
                    </label>
                    <select
                      name="umbrellaLimit"
                      value={formData.umbrellaLimit}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="0">No Umbrella Policy</option>
                      <option value="1M">$1 Million</option>
                      <option value="2M">$2 Million</option>
                      <option value="5M">$5 Million</option>
                      <option value="10M">$10 Million</option>
                    </select>
                  </div>

                  {/* Claims History */}
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="hasClaimsHistory"
                        checked={formData.hasClaimsHistory}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700">Have you had claims in the past 3 years?</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Calculate Premium Estimate
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <InformationCircleIcon className="h-5 w-5 text-primary-600 mr-2" />
                  How It Works
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Enter your business details</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Get instant premium estimates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Compare coverage options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Download your estimate</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                <div className="flex items-start">
                  <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Important Note</h4>
                    <p className="text-sm text-gray-700">
                      This calculator provides estimates only. Actual premiums depend on many factors including 
                      claims history, credit score, specific operations, and insurance company guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          {showResults && estimates && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Premium Estimates</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Breakdown */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Coverage Breakdown</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b">
                        <div>
                          <p className="font-medium text-gray-900">General Liability</p>
                          <p className="text-sm text-gray-500">$1M/$2M limits typical</p>
                        </div>
                        <p className="text-xl font-semibold text-gray-900">
                          ${estimates.generalLiability.toLocaleString()}/year
                        </p>
                      </div>

                      {estimates.workersComp > 0 && (
                        <div className="flex justify-between items-center py-3 border-b">
                          <div>
                            <p className="font-medium text-gray-900">Workers' Compensation</p>
                            <p className="text-sm text-gray-500">Required by NJ law</p>
                          </div>
                          <p className="text-xl font-semibold text-gray-900">
                            ${estimates.workersComp.toLocaleString()}/year
                          </p>
                        </div>
                      )}

                      {estimates.commercialAuto > 0 && (
                        <div className="flex justify-between items-center py-3 border-b">
                          <div>
                            <p className="font-medium text-gray-900">Commercial Auto</p>
                            <p className="text-sm text-gray-500">All scheduled vehicles</p>
                          </div>
                          <p className="text-xl font-semibold text-gray-900">
                            ${estimates.commercialAuto.toLocaleString()}/year
                          </p>
                        </div>
                      )}

                      {estimates.toolsEquipment > 0 && (
                        <div className="flex justify-between items-center py-3 border-b">
                          <div>
                            <p className="font-medium text-gray-900">Tools & Equipment</p>
                            <p className="text-sm text-gray-500">Inland marine coverage</p>
                          </div>
                          <p className="text-xl font-semibold text-gray-900">
                            ${estimates.toolsEquipment.toLocaleString()}/year
                          </p>
                        </div>
                      )}

                      {estimates.umbrella > 0 && (
                        <div className="flex justify-between items-center py-3 border-b">
                          <div>
                            <p className="font-medium text-gray-900">Umbrella Policy</p>
                            <p className="text-sm text-gray-500">Extra liability protection</p>
                          </div>
                          <p className="text-xl font-semibold text-gray-900">
                            ${estimates.umbrella.toLocaleString()}/year
                          </p>
                        </div>
                      )}

                      <div className="flex justify-between items-center pt-4">
                        <p className="text-xl font-bold text-gray-900">Total Annual Premium</p>
                        <p className="text-3xl font-bold text-primary-600">
                          ${estimates.total.toLocaleString()}
                        </p>
                      </div>

                      <div className="flex justify-between items-center bg-gray-50 rounded-lg p-4">
                        <p className="font-medium text-gray-700">Estimated Monthly Payment</p>
                        <p className="text-2xl font-semibold text-gray-900">
                          ${estimates.monthly.toLocaleString()}/mo
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex gap-4">
                      <button
                        onClick={downloadReport}
                        className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                        Download Estimate
                      </button>
                      <Link
                        href="/quote"
                        className="flex-1 text-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        Get Actual Quote
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Summary Card */}
                <div className="lg:col-span-1">
                  <div className="bg-primary-50 rounded-lg p-6 mb-6">
                    <CurrencyDollarIcon className="h-12 w-12 text-primary-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Ways to Save
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Bundle multiple policies</li>
                      <li>• Implement safety programs</li>
                      <li>• Increase deductibles</li>
                      <li>• Pay annually vs monthly</li>
                      <li>• Maintain good credit</li>
                      <li>• Join trade associations</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <ChartBarIcon className="h-8 w-8 text-primary-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-3">Industry Comparison</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Your estimated premium is calculated based on Bergen County averages for {formData.trade.replace('-', ' ')} contractors.
                    </p>
                    <Link
                      href="/contact"
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      Speak with an expert →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Disclaimer */}
          <div className="mt-12 bg-gray-100 rounded-lg p-6">
            <p className="text-sm text-gray-600 text-center">
              <strong>Disclaimer:</strong> This calculator provides estimates for informational purposes only. 
              Actual premiums will vary based on numerous factors including but not limited to: specific business 
              operations, claims history, credit score, coverage limits, deductibles, and insurance company 
              underwriting guidelines. Contact Midland Associates for an accurate quote.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}