'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon, ClockIcon, TagIcon, CalendarIcon, ScaleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import FAQSchema from '@/components/seo/FAQSchema';
import ArticleSchema from '@/components/seo/ArticleSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export default function BlogPost() {
  const publishDate = '2025-01-30';
  const author = 'Michael Delgado';
  const readTime = '13 min read';
  const category = 'Risk Management';
  const tags = ['Subcontractor Default', 'Performance Bonds', 'Risk Transfer', 'General Contractors'];

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Subcontractor Default Insurance', url: '/blog/subcontractor-default-insurance-guide' }
  ];

  const faqs = [
    {
      question: "What is Subcontractor Default Insurance (SDI)?",
      answer: "SDI is an insurance policy that protects general contractors when subcontractors fail to complete work or fulfill contract obligations. Unlike bonds, SDI is controlled by the GC, covers multiple projects, and typically has a deductible per loss. It's designed for larger contractors who can manage the risk."
    },
    {
      question: "How much does SDI cost compared to bonds?",
      answer: "SDI typically costs 0.35% to 0.75% of subcontract values, while performance bonds cost 0.5% to 3%. However, SDI has deductibles ($50,000-$500,000) and co-insurance (10-20%). The break-even point is usually around $50-75 million in annual subcontract values."
    },
    {
      question: "What size contractor should consider SDI?",
      answer: "SDI generally makes sense for contractors with $50+ million in annual revenue and strong subcontractor prequalification processes. Smaller contractors often find traditional bonds more cost-effective due to SDI's high deductibles and administrative requirements."
    },
    {
      question: "Can SDI replace all performance bonds?",
      answer: "No. Many project owners, especially government entities, still require traditional performance bonds. SDI works best for private projects where owners accept it. You'll likely need both SDI and bonding capacity for a complete risk management strategy."
    }
  ];

  return (
    <>
      <ArticleSchema
        title="Subcontractor Default Insurance: Is It Worth It for NJ Contractors?"
        description="Comprehensive guide to subcontractor default insurance vs performance bonds. Learn when SDI makes sense, costs, benefits, and implementation strategies."
        author={author}
        publishedDate={publishDate}
        keywords={["bergen county", "construction insurance"]}
        imageUrl="/og/subcontractor-default-insurance.jpg"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Navbar />
      
      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-slate-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-6">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Subcontractor Default Insurance: Is It Worth It?
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  {new Date(publishDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-2" />
                  {readTime}
                </div>
                <div className="flex items-center">
                  <TagIcon className="h-4 w-4 mr-2" />
                  {category}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <p className="text-xl text-gray-700 leading-relaxed">
              As a general contractor in New Jersey, you've probably lost sleep worrying about subcontractor failures. 
              Will your electrical sub finish on time? Can your concrete contractor handle that large pour? What happens 
              if a key sub goes bankrupt mid-project? Traditional performance bonds have been the answer for decades, 
              but now there's an alternative: Subcontractor Default Insurance (SDI). But is it right for your business?
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <div className="flex items-start">
                <ScaleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">The $200 Million Question</p>
                  <p className="text-blue-800">
                    Last year, subcontractor defaults cost New Jersey general contractors over $200 million. 
                    The right protection strategy can mean the difference between absorbing these losses and 
                    transferring the risk effectively.
                  </p>
                </div>
              </div>
            </div>

            {/* What is SDI */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Understanding Subcontractor Default Insurance
            </h2>
            
            <p>
              SDI is a relatively new risk management tool that's gaining traction among larger contractors. 
              Unlike performance bonds, which are three-party agreements, SDI is a two-party insurance policy 
              between you and your insurance carrier.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How SDI Works</h3>
            
            <ol className="space-y-4 my-6">
              <li>
                <strong>1. You Purchase the Policy:</strong> Coverage applies to all enrolled subcontractors across multiple projects
              </li>
              <li>
                <strong>2. Subcontractor Defaults:</strong> They abandon work, go bankrupt, or materially breach contract
              </li>
              <li>
                <strong>3. You Complete the Work:</strong> Hire replacement subs or self-perform to finish
              </li>
              <li>
                <strong>4. File SDI Claim:</strong> Recover costs above your deductible and co-insurance
              </li>
            </ol>

            <div className="bg-gray-50 rounded-lg p-6 my-8">
              <h4 className="font-semibold text-gray-900 mb-3">Key SDI Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-medium text-gray-900 mb-2">Coverage Includes:</p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Cost to complete work</li>
                    <li>• Correction of defective work</li>
                    <li>• Delay costs</li>
                    <li>• Legal fees</li>
                    <li>• Extended overhead</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-2">Policy Structure:</p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Annual aggregate limit</li>
                    <li>• Per-loss limit</li>
                    <li>• Deductible per loss</li>
                    <li>• Co-insurance (you share losses)</li>
                    <li>• Direct claim relationship</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SDI vs Performance Bonds */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              SDI vs. Performance Bonds: The Complete Comparison
            </h2>

            <p>
              Understanding the differences between SDI and traditional bonds is crucial for making the right choice:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Factor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SDI</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance Bonds</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">Control</td>
                    <td className="px-6 py-4 text-sm text-green-600">GC controls process</td>
                    <td className="px-6 py-4 text-sm text-orange-600">Surety controls</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium">Speed</td>
                    <td className="px-6 py-4 text-sm text-green-600">Fast (days)</td>
                    <td className="px-6 py-4 text-sm text-orange-600">Slow (weeks/months)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">Cost Structure</td>
                    <td className="px-6 py-4 text-sm">Premium + Deductible</td>
                    <td className="px-6 py-4 text-sm">Bond premium only</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium">Coverage Scope</td>
                    <td className="px-6 py-4 text-sm">Multiple projects</td>
                    <td className="px-6 py-4 text-sm">Single project</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">Sub Prequalification</td>
                    <td className="px-6 py-4 text-sm text-orange-600">GC responsible</td>
                    <td className="px-6 py-4 text-sm text-green-600">Surety vets</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium">Owner Acceptance</td>
                    <td className="px-6 py-4 text-sm text-orange-600">Limited</td>
                    <td className="px-6 py-4 text-sm text-green-600">Universal</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">Risk Retention</td>
                    <td className="px-6 py-4 text-sm text-orange-600">High (deductible)</td>
                    <td className="px-6 py-4 text-sm text-green-600">None</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Cost Analysis */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Real Numbers: Cost Analysis
            </h2>

            <p>
              Let's break down the actual costs for a typical New Jersey general contractor:
            </p>

            <div className="bg-gray-50 rounded-lg p-8 my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Scenario: GC with $100M Annual Subcontract Value
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-4">SDI Option</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Premium (0.5%): <strong>$500,000</strong></li>
                    <li>• Deductible: <strong>$250,000</strong></li>
                    <li>• Co-insurance: <strong>10%</strong></li>
                    <li>• Admin costs: <strong>$50,000</strong></li>
                    <li className="pt-2 border-t">
                      <span className="font-semibold">First Loss Cost: $800,000</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 border-2 border-green-200">
                  <h4 className="font-semibold text-green-900 mb-4">Bond Option</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Avg premium (1.5%): <strong>$1,500,000</strong></li>
                    <li>• No deductible: <strong>$0</strong></li>
                    <li>• No co-insurance: <strong>$0</strong></li>
                    <li>• Minimal admin: <strong>$10,000</strong></li>
                    <li className="pt-2 border-t">
                      <span className="font-semibold">Annual Cost: $1,510,000</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-100 rounded">
                <p className="text-yellow-900 font-semibold text-center">
                  SDI saves $710,000 annually IF no major defaults occur
                </p>
                <p className="text-yellow-800 text-sm text-center mt-2">
                  One $3M default would eliminate 4 years of savings
                </p>
              </div>
            </div>

            {/* When SDI Makes Sense */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              When SDI Makes Sense (And When It Doesn't)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-green-900 mb-4 flex items-center">
                  <ShieldCheckIcon className="h-6 w-6 mr-2" />
                  SDI Works Well When:
                </h3>
                <ul className="space-y-2 text-green-800">
                  <li>✓ Annual revenue exceeds $75M</li>
                  <li>✓ Strong sub prequalification process</li>
                  <li>✓ Sophisticated risk management</li>
                  <li>✓ Can absorb large deductibles</li>
                  <li>✓ Stable, repeat subcontractors</li>
                  <li>✓ Mostly private projects</li>
                  <li>✓ In-house legal/admin resources</li>
                </ul>
              </div>
              
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="font-semibold text-red-900 mb-4 flex items-center">
                  <ScaleIcon className="h-6 w-6 mr-2" />
                  Stick with Bonds When:
                </h3>
                <ul className="space-y-2 text-red-800">
                  <li>✗ Annual revenue under $50M</li>
                  <li>✗ Limited cash reserves</li>
                  <li>✗ Government/public projects</li>
                  <li>✗ High-risk subcontractors</li>
                  <li>✗ New/unknown subs frequently</li>
                  <li>✗ Limited admin capacity</li>
                  <li>✗ Risk-averse ownership</li>
                </ul>
              </div>
            </div>

            {/* Real Bergen County Examples */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Real SDI Cases from Bergen County
            </h2>

            <div className="space-y-6 my-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Success Story: Hackensack High-Rise GC</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Situation:</strong> $150M annual revenue, implemented SDI in 2021
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Results:</strong> Saved $1.2M over 3 years, handled 2 defaults smoothly
                </p>
                <p className="text-gray-700">
                  <strong>Key:</strong> Strong prequalification eliminated high-risk subs
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Cautionary Tale: Mid-Size Fort Lee GC</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Situation:</strong> $40M revenue, switched to SDI to save money
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Results:</strong> $2.5M default in year one, couldn't absorb deductible
                </p>
                <p className="text-gray-700">
                  <strong>Lesson:</strong> SDI requires financial strength to weather storms
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Mixed Results: Paramus Infrastructure Contractor</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Situation:</strong> Uses hybrid approach - SDI for private, bonds for public
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Results:</strong> 30% cost savings while maintaining flexibility
                </p>
                <p className="text-gray-700">
                  <strong>Innovation:</strong> Best of both worlds approach gaining traction
                </p>
              </div>
            </div>

            {/* Implementation Strategy */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              How to Implement SDI Successfully
            </h2>

            <p>
              If SDI makes sense for your company, proper implementation is critical:
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Strengthen Prequalification</h3>
            
            <div className="bg-blue-50 rounded-lg p-6 my-6">
              <p className="font-semibold text-blue-900 mb-3">Essential Prequalification Elements:</p>
              <ul className="space-y-2 text-blue-800">
                <li>• Financial statements (3 years, CPA-prepared)</li>
                <li>• Banking relationships and credit lines</li>
                <li>• Work in progress schedules</li>
                <li>• Claims history and litigation</li>
                <li>• Key personnel stability</li>
                <li>• Equipment ownership vs. rental</li>
                <li>• Supplier payment history</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Set Enrollment Criteria</h3>
            
            <p>
              Not every sub should be enrolled in SDI. Consider these thresholds:
            </p>

            <ul className="space-y-3 my-6">
              <li>
                <strong>Minimum Contract Size:</strong> $1M+ (smaller contracts aren't worth the risk)
              </li>
              <li>
                <strong>Financial Strength:</strong> Working capital &gt; 10% of annual revenue
              </li>
              <li>
                <strong>Experience:</strong> 5+ years in business, 3+ years with your company
              </li>
              <li>
                <strong>Performance History:</strong> No defaults, minimal claims/disputes
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Create Default Procedures</h3>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
              <p className="font-semibold text-yellow-900 mb-2">Critical: Have Plans Before You Need Them</p>
              <ol className="space-y-2 text-yellow-800">
                <li>1. Early warning system for sub distress</li>
                <li>2. Pre-negotiated replacement sub agreements</li>
                <li>3. Legal counsel on standby</li>
                <li>4. Documentation procedures</li>
                <li>5. Communication plans for owners/stakeholders</li>
              </ol>
            </div>

            {/* Financial Considerations */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Financial Requirements for SDI
            </h2>

            <p>
              SDI isn't just about saving premium dollars—it requires significant financial capacity:
            </p>

            <div className="bg-gray-50 rounded-lg p-8 my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Minimum Financial Benchmarks</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Balance Sheet</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Working capital: $5M+</li>
                    <li>• Current ratio: 1.5+</li>
                    <li>• Debt/equity: &lt;2.0</li>
                    <li>• Cash reserves: 2x deductible</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Operations</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Gross margin: 12%+</li>
                    <li>• Net margin: 3%+</li>
                    <li>• Backlog/working capital: &lt;15</li>
                    <li>• DSO: &lt;60 days</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-red-100 rounded">
                <p className="text-red-900 font-semibold">
                  Warning: One major default can consume 2-3 years of SDI premium savings
                </p>
              </div>
            </div>

            {/* Hybrid Approach */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Hybrid Approach: Best of Both Worlds?
            </h2>

            <p>
              Many successful contractors use both SDI and bonds strategically:
            </p>

            <div className="bg-green-50 rounded-lg p-6 my-8">
              <h4 className="font-semibold text-green-900 mb-3">Smart Hybrid Strategy</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-medium text-green-900 mb-2">Use SDI For:</p>
                  <ul className="text-green-800 space-y-1">
                    <li>• Trusted, repeat subs</li>
                    <li>• Private projects</li>
                    <li>• Smaller contracts ($1-5M)</li>
                    <li>• Low-risk trades</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-green-900 mb-2">Use Bonds For:</p>
                  <ul className="text-green-800 space-y-1">
                    <li>• New subcontractors</li>
                    <li>• Public projects</li>
                    <li>• Large contracts ($5M+)</li>
                    <li>• High-risk trades</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Decision Framework */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Your SDI Decision Framework
            </h2>

            <p>
              Use this checklist to determine if SDI is right for your company:
            </p>

            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h4 className="font-semibold text-blue-900 mb-4">SDI Readiness Checklist</h4>
              <div className="space-y-3">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-blue-800">Annual revenue exceeds $75M</span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-blue-800">Cash reserves exceed $5M</span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-blue-800">Established sub prequalification process</span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-blue-800">In-house risk management team</span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-blue-800">75%+ private project work</span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-blue-800">Stable subcontractor base</span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-blue-800">Can absorb $250K+ deductibles</span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-blue-800">Board/ownership accepts retained risk</span>
                </label>
              </div>
              <div className="mt-6 p-4 bg-blue-100 rounded">
                <p className="text-blue-900 font-semibold">
                  Score: 6-8 checks = Strong SDI candidate<br />
                  3-5 checks = Consider hybrid approach<br />
                  0-2 checks = Stick with bonds
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Bottom Line on SDI
            </h2>

            <p>
              Subcontractor Default Insurance isn't a magic bullet—it's a sophisticated risk management tool 
              that requires financial strength, operational excellence, and strategic thinking. For the right 
              contractor, SDI can provide significant cost savings and greater control over the default process.
            </p>

            <p>
              However, SDI isn't for everyone. Smaller contractors, those with limited cash reserves, or companies 
              working primarily on public projects should stick with traditional performance bonds. The key is 
              understanding your risk tolerance, financial capacity, and operational capabilities.
            </p>

            <p>
              As the construction market in New Jersey continues to evolve, we're seeing more contractors adopt 
              hybrid approaches—using SDI where it makes sense while maintaining bonding capacity for situations 
              that demand it. This flexible strategy often provides the best risk/reward balance.
            </p>

            {/* CTA Box */}
            <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Expert SDI Analysis for Your Company
              </h3>
              <p className="text-gray-700 mb-6">
                Our team will analyze your subcontractor portfolio, financial position, and project mix to 
                determine if SDI makes sense for your business. Get a custom cost/benefit analysis with real numbers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Schedule SDI Consultation
                </Link>
                <a
                  href="tel:2018122184"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Call (201) 812-2184
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Free analysis • No obligation • Confidential review
              </p>
            </div>

            {/* Author Bio */}
            <div className="border-t pt-8 mt-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{author}</p>
                  <p className="text-gray-600 text-sm mb-2">President, Midland Associates</p>
                  <p className="text-gray-600 text-sm">
                    Michael has guided dozens of New Jersey general contractors through SDI implementation and 
                    optimization. He's recognized as a leading expert in construction risk transfer strategies 
                    and speaks regularly at AGC events on subcontractor default management.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="border-t pt-8 mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/blog/performance-bond-guide" className="group">
                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">
                      Complete Guide to Performance Bonds
                    </h4>
                    <p className="text-sm text-gray-600">
                      Everything GCs need to know about bonding
                    </p>
                  </div>
                </Link>
                <Link href="/blog/subcontractor-prequalification" className="group">
                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">
                      Subcontractor Prequalification Best Practices
                    </h4>
                    <p className="text-sm text-gray-600">
                      How to vet subs and avoid defaults
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </>
  );
}