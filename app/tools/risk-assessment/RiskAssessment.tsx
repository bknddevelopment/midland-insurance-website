'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeftIcon, 
  ChartBarIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  ArrowDownTrayIcon,
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
  FireIcon,
  BoltIcon,
  UserGroupIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  CloudIcon,
  BanknotesIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

interface RiskCategory {
  id: string;
  name: string;
  icon: any;
  description: string;
  risks: Risk[];
}

interface Risk {
  id: string;
  name: string;
  description: string;
  likelihood: number;
  impact: number;
  mitigations: string[];
  insuranceCoverage: string[];
}

const riskCategories: RiskCategory[] = [
  {
    id: 'safety',
    name: 'Safety & Health Risks',
    icon: FireIcon,
    description: 'Risks related to worker safety and health hazards',
    risks: [
      {
        id: 'falls',
        name: 'Falls from Height',
        description: 'Workers falling from ladders, scaffolding, or roofs',
        likelihood: 0,
        impact: 0,
        mitigations: [
          'Fall protection equipment',
          'Safety training programs',
          'Regular equipment inspections',
          'Proper scaffolding setup'
        ],
        insuranceCoverage: ['Workers Compensation', 'General Liability', 'Umbrella Policy']
      },
      {
        id: 'struck-by',
        name: 'Struck by Objects',
        description: 'Workers hit by falling tools, materials, or equipment',
        likelihood: 0,
        impact: 0,
        mitigations: [
          'Hard hat requirements',
          'Tool tethering systems',
          'Debris netting',
          'Exclusion zones'
        ],
        insuranceCoverage: ['Workers Compensation', 'General Liability']
      },
      {
        id: 'electrical',
        name: 'Electrical Hazards',
        description: 'Electrocution or electrical burns',
        likelihood: 0,
        impact: 0,
        mitigations: [
          'Lockout/tagout procedures',
          'Qualified electricians only',
          'GFCI protection',
          'Electrical safety training'
        ],
        insuranceCoverage: ['Workers Compensation', 'General Liability']
      }
    ]
  },
  {
    id: 'property',
    name: 'Property & Equipment Risks',
    icon: WrenchScrewdriverIcon,
    description: 'Risks to tools, equipment, and project materials',
    risks: [
      {
        id: 'theft',
        name: 'Tool & Equipment Theft',
        description: 'Theft of tools and equipment from job sites or vehicles',
        likelihood: 0,
        impact: 0,
        mitigations: [
          'Secure storage containers',
          'GPS tracking devices',
          'Security cameras',
          'Remove tools nightly'
        ],
        insuranceCoverage: ['Inland Marine', 'Commercial Property']
      },
      {
        id: 'damage',
        name: 'Equipment Damage',
        description: 'Accidental damage to owned or rented equipment',
        likelihood: 0,
        impact: 0,
        mitigations: [
          'Operator training',
          'Regular maintenance',
          'Proper storage',
          'Usage protocols'
        ],
        insuranceCoverage: ['Inland Marine', 'Equipment Breakdown']
      },
      {
        id: 'weather-damage',
        name: 'Weather Damage',
        description: 'Storm damage to materials or work in progress',
        likelihood: 0,
        impact: 0,
        mitigations: [
          'Weather monitoring',
          'Protective coverings',
          'Secure materials',
          'Project scheduling'
        ],
        insuranceCoverage: ['Builders Risk', 'Commercial Property']
      }
    ]
  },
  {
    id: 'liability',
    name: 'Third-Party Liability',
    icon: ScaleIcon,
    description: 'Risks involving damage or injury to others',
    risks: [
      {
        id: 'property-damage',
        name: 'Third-Party Property Damage',
        description: 'Damage to client or neighboring property',
        likelihood: 0,
        impact: 0,
        mitigations: [
          'Site protection measures',
          'Clear work boundaries',
          'Careful material handling',
          'Pre-work documentation'
        ],
        insuranceCoverage: ['General Liability', 'Umbrella Policy']
      },
      {
        id: 'completed-ops',
        name: 'Completed Operations',
        description: 'Claims after project completion',
        likelihood: 0,
        impact: 0,
        mitigations: [
          'Quality control checks',
          'Proper documentation',
          'Warranty programs',
          'Follow-up inspections'
        ],
        insuranceCoverage: ['General Liability', 'Professional Liability']
      },
      {
        id: 'public-injury',
        name: 'Public Injury',
        description: 'Injury to non-workers at or near job site',
        likelihood: 0,
        impact: 0,
        mitigations: [
          'Site barriers',
          'Warning signs',
          'Sidewalk protection',
          'Traffic control'
        ],
        insuranceCoverage: ['General Liability', 'Umbrella Policy']
      }
    ]
  },
  {
    id: 'vehicle',
    name: 'Vehicle & Transportation',
    icon: TruckIcon,
    description: 'Risks related to vehicles and transportation',
    risks: [
      {
        id: 'auto-accident',
        name: 'Vehicle Accidents',
        description: 'Accidents involving company vehicles',
        likelihood: 0,
        impact: 0,
        mitigations: [
          'Driver screening',
          'Safety training',
          'Vehicle maintenance',
          'No cell phone policy'
        ],
        insuranceCoverage: ['Commercial Auto', 'Umbrella Policy']
      },
      {
        id: 'cargo',
        name: 'Cargo Loss',
        description: 'Loss or damage to materials in transit',
        likelihood: 0,
        impact: 0,
        mitigations: [
          'Proper loading/securing',
          'Route planning',
          'Weather awareness',
          'Cargo insurance'
        ],
        insuranceCoverage: ['Commercial Auto', 'Inland Marine']
      }
    ]
  },
  {
    id: 'financial',
    name: 'Financial & Contract Risks',
    icon: BanknotesIcon,
    description: 'Risks affecting project finances and contracts',
    risks: [
      {
        id: 'payment-default',
        name: 'Client Payment Default',
        description: 'Client fails to pay for completed work',
        likelihood: 0,
        impact: 0,
        mitigations: [
          'Credit checks',
          'Progress payments',
          'Mechanics liens',
          'Contract terms'
        ],
        insuranceCoverage: ['Credit Insurance', 'Legal expense coverage']
      },
      {
        id: 'contract-dispute',
        name: 'Contract Disputes',
        description: 'Disagreements over scope, quality, or terms',
        likelihood: 0,
        impact: 0,
        mitigations: [
          'Clear contracts',
          'Change orders',
          'Documentation',
          'Communication'
        ],
        insuranceCoverage: ['Professional Liability', 'Legal expense coverage']
      },
      {
        id: 'cost-overrun',
        name: 'Project Cost Overruns',
        description: 'Projects exceeding budget estimates',
        likelihood: 0,
        impact: 0,
        mitigations: [
          'Accurate estimating',
          'Contingency planning',
          'Cost tracking',
          'Change management'
        ],
        insuranceCoverage: ['Professional Liability', 'Surety Bonds']
      }
    ]
  }
];

export default function RiskAssessment() {
  const [selectedCategory, setSelectedCategory] = useState<string>(riskCategories[0].id);
  const [riskScores, setRiskScores] = useState<Record<string, { likelihood: number; impact: number }>>({});
  const [showResults, setShowResults] = useState(false);

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/resources' },
    { name: 'Risk Assessment', url: '/tools/risk-assessment' }
  ];

  const updateRiskScore = (riskId: string, field: 'likelihood' | 'impact', value: number) => {
    setRiskScores(prev => ({
      ...prev,
      [riskId]: {
        ...prev[riskId],
        [field]: value
      }
    }));
  };

  const getRiskLevel = (likelihood: number, impact: number): { level: string; color: string } => {
    const score = likelihood * impact;
    if (score >= 16) return { level: 'Critical', color: 'red' };
    if (score >= 9) return { level: 'High', color: 'orange' };
    if (score >= 4) return { level: 'Medium', color: 'yellow' };
    if (score > 0) return { level: 'Low', color: 'green' };
    return { level: 'Not Assessed', color: 'gray' };
  };

  const calculateOverallRisk = () => {
    const assessedRisks = Object.values(riskScores).filter(r => r.likelihood > 0 && r.impact > 0);
    if (assessedRisks.length === 0) return 0;
    
    const totalScore = assessedRisks.reduce((sum, risk) => sum + (risk.likelihood * risk.impact), 0);
    return Math.round(totalScore / assessedRisks.length);
  };

  const getHighestRisks = () => {
    return Object.entries(riskScores)
      .filter(([_, scores]) => scores.likelihood > 0 && scores.impact > 0)
      .map(([riskId, scores]) => {
        const risk = riskCategories
          .flatMap(cat => cat.risks)
          .find(r => r.id === riskId);
        if (!risk) return null;
        return {
          ...risk,
          score: scores.likelihood * scores.impact,
          likelihood: scores.likelihood,
          impact: scores.impact
        };
      })
      .filter((risk): risk is NonNullable<typeof risk> => risk !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  };

  const generateReport = () => {
    setShowResults(true);
    // Scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const downloadReport = () => {
    const highestRisks = getHighestRisks();
    const overallScore = calculateOverallRisk();
    
    const report = `
CONSTRUCTION RISK ASSESSMENT REPORT
Generated: ${new Date().toLocaleDateString()}
Midland Associates - (201) 812-2184

OVERALL RISK SCORE: ${overallScore}/25 (${getRiskLevel(overallScore / 5, 5).level})

TOP RISKS IDENTIFIED:
${highestRisks.map((risk, index) => `
${index + 1}. ${risk.name} (Score: ${risk.score}/25)
   - Likelihood: ${risk.likelihood}/5
   - Impact: ${risk.impact}/5
   - Risk Level: ${getRiskLevel(risk.likelihood, risk.impact).level}
   
   Recommended Mitigations:
${risk.mitigations.map(m => `   • ${m}`).join('\n')}
   
   Insurance Coverage Needed:
${risk.insuranceCoverage.map(c => `   • ${c}`).join('\n')}
`).join('\n')}

RISK ASSESSMENT BY CATEGORY:
${riskCategories.map(category => {
  const categoryRisks = category.risks
    .map(risk => {
      const scores = riskScores[risk.id] || { likelihood: 0, impact: 0 };
      return {
        ...risk,
        ...scores,
        score: scores.likelihood * scores.impact
      };
    })
    .filter(r => r.score > 0);
  
  return `
${category.name.toUpperCase()}
${categoryRisks.length > 0 ? categoryRisks.map(risk => 
  `• ${risk.name}: ${getRiskLevel(risk.likelihood, risk.impact).level} Risk (${risk.score}/25)`
).join('\n') : '• No significant risks identified'}`;
}).join('\n')}

RECOMMENDED ACTIONS:
1. Address critical and high-risk areas immediately
2. Implement suggested mitigation strategies
3. Ensure adequate insurance coverage for identified risks
4. Review and update assessment quarterly
5. Train staff on risk awareness and prevention

INSURANCE REVIEW NEEDED:
Based on your assessment, review these coverages:
${Array.from(new Set(highestRisks.flatMap(r => r.insuranceCoverage))).map(c => `• ${c}`).join('\n')}

Contact Midland Associates at (201) 812-2184 for a comprehensive insurance review.
    `;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'construction-risk-assessment.txt';
    a.click();
  };

  const selectedCategoryData = riskCategories.find(cat => cat.id === selectedCategory)!;

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
              <ChartBarIcon className="h-12 w-12 text-primary-400 mr-4" />
              <div>
                <h1 className="text-4xl font-bold">Risk Assessment Tool</h1>
                <p className="text-xl text-gray-300 mt-2">Identify and evaluate risks specific to your construction projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50 rounded-lg p-6 mb-8"
          >
            <h2 className="font-semibold text-gray-900 mb-3 flex items-center">
              <InformationCircleIcon className="h-5 w-5 text-blue-600 mr-2" />
              How to Use This Tool
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div>
                <strong>1. Select Risk Categories</strong>
                <p>Choose from safety, property, liability, and other risk types</p>
              </div>
              <div>
                <strong>2. Rate Each Risk</strong>
                <p>Assess likelihood (1-5) and potential impact (1-5)</p>
              </div>
              <div>
                <strong>3. Get Your Report</strong>
                <p>View recommendations and download your assessment</p>
              </div>
            </div>
          </motion.div>

          {/* Category Tabs */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="border-b">
              <div className="flex overflow-x-auto">
                {riskCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center px-6 py-4 border-b-2 transition-colors whitespace-nowrap ${
                        selectedCategory === category.id
                          ? 'border-primary-600 text-primary-600 bg-primary-50'
                          : 'border-transparent text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Icon className="h-5 w-5 mr-2" />
                      {category.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Risk Assessment Form */}
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedCategoryData.name}</h3>
              <p className="text-gray-600 mb-6">{selectedCategoryData.description}</p>

              <div className="space-y-8">
                {selectedCategoryData.risks.map((risk) => {
                  const scores = riskScores[risk.id] || { likelihood: 0, impact: 0 };
                  const riskLevel = getRiskLevel(scores.likelihood, scores.impact);
                  
                  return (
                    <motion.div
                      key={risk.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      className="border rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 text-lg">{risk.name}</h4>
                          <p className="text-gray-600 mt-1">{risk.description}</p>
                        </div>
                        {scores.likelihood > 0 && scores.impact > 0 && (
                          <span className={`px-3 py-1 rounded-full text-sm font-medium bg-${riskLevel.color}-100 text-${riskLevel.color}-700`}>
                            {riskLevel.level} Risk
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Likelihood of Occurrence
                          </label>
                          <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map((value) => (
                              <button
                                key={value}
                                onClick={() => updateRiskScore(risk.id, 'likelihood', value)}
                                className={`flex-1 py-2 px-3 rounded border transition-colors ${
                                  scores.likelihood === value
                                    ? 'bg-primary-600 text-white border-primary-600'
                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                }`}
                              >
                                {value}
                              </button>
                            ))}
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>Rare</span>
                            <span>Certain</span>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Potential Impact
                          </label>
                          <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map((value) => (
                              <button
                                key={value}
                                onClick={() => updateRiskScore(risk.id, 'impact', value)}
                                className={`flex-1 py-2 px-3 rounded border transition-colors ${
                                  scores.impact === value
                                    ? 'bg-primary-600 text-white border-primary-600'
                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                }`}
                              >
                                {value}
                              </button>
                            ))}
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>Minor</span>
                            <span>Severe</span>
                          </div>
                        </div>
                      </div>

                      {scores.likelihood > 0 && scores.impact > 0 && (
                        <div className="bg-gray-50 rounded-lg p-4 mt-4">
                          <p className="text-sm font-medium text-gray-700 mb-2">Risk Score: {scores.likelihood * scores.impact}/25</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="font-medium text-gray-700 mb-1">Recommended Mitigations:</p>
                              <ul className="space-y-1">
                                {risk.mitigations.map((mitigation, index) => (
                                  <li key={index} className="flex items-start">
                                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-1 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600">{mitigation}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="font-medium text-gray-700 mb-1">Insurance Coverage:</p>
                              <ul className="space-y-1">
                                {risk.insuranceCoverage.map((coverage, index) => (
                                  <li key={index} className="flex items-start">
                                    <ShieldCheckIcon className="h-4 w-4 text-blue-500 mr-1 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600">{coverage}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Generate Report Button */}
          <div className="text-center mb-12">
            <button
              onClick={generateReport}
              className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              <ChartBarIcon className="h-5 w-5 mr-2" />
              Generate Risk Report
            </button>
          </div>

          {/* Results Section */}
          {showResults && (
            <motion.div
              id="results"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Risk Assessment Results</h2>
              
              {/* Overall Risk Score */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8 text-center">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Overall Risk Level</h3>
                <div className="text-5xl font-bold text-primary-600 mb-2">
                  {calculateOverallRisk()}/25
                </div>
                <p className={`text-lg font-semibold text-${getRiskLevel(calculateOverallRisk() / 5, 5).color}-600`}>
                  {getRiskLevel(calculateOverallRisk() / 5, 5).level} Risk
                </p>
              </div>

              {/* Top Risks */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Top Risk Areas</h3>
                <div className="space-y-4">
                  {getHighestRisks().map((risk, index) => {
                    const riskLevel = getRiskLevel(risk.likelihood, risk.impact);
                    return (
                      <div key={risk.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <span className="text-2xl font-bold text-gray-400 mr-4">#{index + 1}</span>
                          <div>
                            <p className="font-semibold text-gray-900">{risk.name}</p>
                            <p className="text-sm text-gray-600">Score: {risk.score}/25</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium bg-${riskLevel.color}-100 text-${riskLevel.color}-700`}>
                          {riskLevel.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={downloadReport}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                  Download Full Report
                </button>
                <Link
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Schedule Risk Review
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}