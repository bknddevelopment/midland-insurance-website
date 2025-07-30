'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeftIcon, 
  ClipboardDocumentCheckIcon,
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
  ArrowDownTrayIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

interface CoverageItem {
  id: string;
  name: string;
  description: string;
  required: boolean;
  recommended: boolean;
  category: string;
  minimumLimits?: string;
  notes?: string;
}

const coverageItems: CoverageItem[] = [
  // Essential Coverages
  {
    id: 'gl',
    name: 'General Liability',
    description: 'Protects against third-party bodily injury and property damage claims',
    required: true,
    recommended: true,
    category: 'essential',
    minimumLimits: '$1M per occurrence / $2M aggregate',
    notes: 'Required for all NJ contractors and most contracts'
  },
  {
    id: 'wc',
    name: "Workers' Compensation",
    description: 'Covers employee injuries and illnesses on the job',
    required: true,
    recommended: true,
    category: 'essential',
    minimumLimits: 'State statutory limits',
    notes: 'Mandatory in NJ if you have any employees'
  },
  {
    id: 'auto',
    name: 'Commercial Auto',
    description: 'Covers vehicles used for business purposes',
    required: false,
    recommended: true,
    category: 'essential',
    minimumLimits: '$1M combined single limit',
    notes: 'Required if you own vehicles or employees drive for work'
  },
  
  // Property Coverages
  {
    id: 'tools',
    name: 'Tools & Equipment (Inland Marine)',
    description: 'Protects tools, equipment, and materials anywhere',
    required: false,
    recommended: true,
    category: 'property',
    minimumLimits: 'Actual equipment value',
    notes: 'Essential for contractors with significant equipment investment'
  },
  {
    id: 'builders-risk',
    name: "Builder's Risk",
    description: 'Covers projects under construction',
    required: false,
    recommended: true,
    category: 'property',
    minimumLimits: 'Full project value',
    notes: 'Often required by contracts for new construction'
  },
  {
    id: 'installation',
    name: 'Installation Floater',
    description: 'Covers materials and labor until project completion',
    required: false,
    recommended: false,
    category: 'property',
    minimumLimits: 'Project value',
    notes: 'Good for specialty contractors installing expensive materials'
  },
  
  // Liability Extensions
  {
    id: 'umbrella',
    name: 'Commercial Umbrella',
    description: 'Extra liability coverage above primary policies',
    required: false,
    recommended: true,
    category: 'liability',
    minimumLimits: '$1M minimum',
    notes: 'Increasingly required for larger projects'
  },
  {
    id: 'professional',
    name: 'Professional Liability',
    description: 'Covers design errors and professional services',
    required: false,
    recommended: false,
    category: 'liability',
    minimumLimits: '$1M per claim',
    notes: 'Needed if you provide design-build services'
  },
  {
    id: 'pollution',
    name: 'Pollution Liability',
    description: 'Covers pollution-related claims',
    required: false,
    recommended: false,
    category: 'liability',
    minimumLimits: '$1M per claim',
    notes: 'Important for excavation, remediation, or HVAC work'
  },
  {
    id: 'cyber',
    name: 'Cyber Liability',
    description: 'Protects against data breaches and cyber attacks',
    required: false,
    recommended: false,
    category: 'liability',
    minimumLimits: '$1M per claim',
    notes: 'Increasingly important as contractors digitize'
  },
  
  // Bonds
  {
    id: 'license-bond',
    name: 'License Bond',
    description: 'Required for contractor licensing in many municipalities',
    required: true,
    recommended: true,
    category: 'bonds',
    minimumLimits: 'Varies by municipality',
    notes: 'Check local requirements in Bergen County'
  },
  {
    id: 'bid-bond',
    name: 'Bid Bonds',
    description: 'Guarantees you\'ll enter contract if awarded',
    required: false,
    recommended: false,
    category: 'bonds',
    minimumLimits: '5-10% of bid amount',
    notes: 'Required for most public projects'
  },
  {
    id: 'performance-bond',
    name: 'Performance Bonds',
    description: 'Guarantees project completion per contract',
    required: false,
    recommended: false,
    category: 'bonds',
    minimumLimits: '100% of contract value',
    notes: 'Common for projects over $100K'
  },
  {
    id: 'payment-bond',
    name: 'Payment Bonds',
    description: 'Guarantees payment to subs and suppliers',
    required: false,
    recommended: false,
    category: 'bonds',
    minimumLimits: '100% of contract value',
    notes: 'Often paired with performance bonds'
  },
  
  // Specialty Coverages
  {
    id: 'epli',
    name: 'Employment Practices Liability',
    description: 'Covers employment-related claims',
    required: false,
    recommended: false,
    category: 'specialty',
    minimumLimits: '$1M per claim',
    notes: 'Important as you grow and hire more employees'
  },
  {
    id: 'crime',
    name: 'Crime Coverage',
    description: 'Protects against employee theft and fraud',
    required: false,
    recommended: false,
    category: 'specialty',
    minimumLimits: '$25K-$100K',
    notes: 'Consider if employees handle cash or have access to accounts'
  }
];

export default function CoverageChecklist() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showOnlyRequired, setShowOnlyRequired] = useState(false);

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/resources' },
    { name: 'Coverage Checklist', url: '/tools/coverage-checklist' }
  ];

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const filteredItems = coverageItems.filter(item => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (showOnlyRequired && !item.required) return false;
    return true;
  });

  const downloadChecklist = () => {
    const checklist = `
CONSTRUCTION INSURANCE COVERAGE CHECKLIST
Generated: ${new Date().toLocaleDateString()}
Midland Associates - (201) 812-2184

YOUR COVERAGE AUDIT:
${filteredItems.map(item => 
  `${checkedItems.has(item.id) ? '✓' : '☐'} ${item.name}${item.required ? ' (REQUIRED)' : ''}
   - ${item.description}
   - Minimum Limits: ${item.minimumLimits || 'Varies'}
   ${item.notes ? `- Note: ${item.notes}` : ''}
`).join('\n')}

COVERAGE SUMMARY:
- Total Coverages Checked: ${checkedItems.size}
- Required Coverages: ${coverageItems.filter(i => i.required).length}
- Recommended Coverages: ${coverageItems.filter(i => i.recommended).length}

NEXT STEPS:
1. Review unchecked required coverages immediately
2. Consider recommended coverages for your business
3. Contact your agent to discuss gaps in coverage
4. Get quotes for missing coverages

Need help? Contact Midland Associates at (201) 812-2184
or visit midlandinsurance.biz
    `;

    const blob = new Blob([checklist], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'construction-insurance-checklist.txt';
    a.click();
  };

  const requiredCount = coverageItems.filter(i => i.required).length;
  const checkedRequiredCount = coverageItems.filter(i => i.required && checkedItems.has(i.id)).length;
  const coverageScore = Math.round((checkedItems.size / coverageItems.length) * 100);

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
              <ClipboardDocumentCheckIcon className="h-12 w-12 text-primary-400 mr-4" />
              <div>
                <h1 className="text-4xl font-bold">Coverage Checklist</h1>
                <p className="text-xl text-gray-300 mt-2">Ensure you have all necessary construction insurance coverages</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow p-6 text-center"
            >
              <div className="text-3xl font-bold text-primary-600">{coverageScore}%</div>
              <p className="text-gray-600 mt-1">Coverage Score</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow p-6 text-center"
            >
              <div className="text-3xl font-bold text-gray-900">{checkedItems.size}/{coverageItems.length}</div>
              <p className="text-gray-600 mt-1">Coverages Checked</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`rounded-lg shadow p-6 text-center ${
                checkedRequiredCount === requiredCount ? 'bg-green-50' : 'bg-red-50'
              }`}
            >
              <div className={`text-3xl font-bold ${
                checkedRequiredCount === requiredCount ? 'text-green-600' : 'text-red-600'
              }`}>
                {checkedRequiredCount}/{requiredCount}
              </div>
              <p className="text-gray-600 mt-1">Required Coverages</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-primary-50 rounded-lg shadow p-6 text-center"
            >
              <button
                onClick={downloadChecklist}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
              >
                <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                Download
              </button>
              <p className="text-gray-600 mt-1">Your Checklist</p>
            </motion.div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <label className="text-gray-700 font-medium">Filter by:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Categories</option>
                  <option value="essential">Essential Coverage</option>
                  <option value="property">Property Coverage</option>
                  <option value="liability">Liability Coverage</option>
                  <option value="bonds">Bonds</option>
                  <option value="specialty">Specialty Coverage</option>
                </select>
              </div>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showOnlyRequired}
                  onChange={(e) => setShowOnlyRequired(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-gray-700">Show only required coverages</span>
              </label>
            </div>
          </div>

          {/* Checklist */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`bg-white rounded-lg shadow p-6 cursor-pointer transition-all ${
                      checkedItems.has(item.id) ? 'ring-2 ring-primary-500' : ''
                    }`}
                    onClick={() => toggleItem(item.id)}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        {checkedItems.has(item.id) ? (
                          <CheckCircleIcon className="h-6 w-6 text-green-500" />
                        ) : (
                          <div className="h-6 w-6 border-2 border-gray-300 rounded" />
                        )}
                      </div>
                      
                      <div className="ml-4 flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {item.name}
                              {item.required && (
                                <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                                  REQUIRED
                                </span>
                              )}
                              {!item.required && item.recommended && (
                                <span className="ml-2 text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                                  RECOMMENDED
                                </span>
                              )}
                            </h3>
                            <p className="text-gray-600 mt-1">{item.description}</p>
                            
                            {item.minimumLimits && (
                              <p className="text-sm text-gray-500 mt-2">
                                <strong>Minimum Limits:</strong> {item.minimumLimits}
                              </p>
                            )}
                            
                            {item.notes && (
                              <p className="text-sm text-gray-500 mt-1 italic">
                                {item.notes}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Info Box */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <InformationCircleIcon className="h-5 w-5 text-blue-600 mr-2" />
                  Understanding Requirements
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="inline-block bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">
                      REQUIRED
                    </span>
                    <p className="text-gray-600 mt-1">Mandatory by law or for most contracts</p>
                  </div>
                  <div>
                    <span className="inline-block bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold">
                      RECOMMENDED
                    </span>
                    <p className="text-gray-600 mt-1">Strongly advised for most contractors</p>
                  </div>
                  <div>
                    <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                      OPTIONAL
                    </span>
                    <p className="text-gray-600 mt-1">Depends on your specific operations</p>
                  </div>
                </div>
              </div>

              {/* Warning Box */}
              {checkedRequiredCount < requiredCount && (
                <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                  <div className="flex items-start">
                    <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-900">Missing Required Coverage</h4>
                      <p className="text-sm text-red-700 mt-1">
                        You're missing {requiredCount - checkedRequiredCount} required coverage(s). 
                        This could leave you exposed to significant risks.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Success Box */}
              {checkedRequiredCount === requiredCount && checkedItems.size > requiredCount && (
                <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                  <div className="flex items-start">
                    <ShieldCheckIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-900">Well Protected!</h4>
                      <p className="text-sm text-green-700 mt-1">
                        You have all required coverages plus {checkedItems.size - requiredCount} additional 
                        protection layers.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Box */}
              <div className="bg-white rounded-lg shadow p-6">
                <DocumentCheckIcon className="h-8 w-8 text-primary-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-3">Ready to Review?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Download your customized checklist and schedule a coverage review with our experts.
                </p>
                <button
                  onClick={downloadChecklist}
                  className="w-full mb-3 px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
                >
                  <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                  Download Checklist
                </button>
                <Link
                  href="/contact"
                  className="block text-center px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Schedule Review
                </Link>
              </div>

              {/* Tips Box */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Pro Tips</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Review coverage needs annually</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Check contract requirements carefully</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Bundle policies for better rates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Increase limits as you grow</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}