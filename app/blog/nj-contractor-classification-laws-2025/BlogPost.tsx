'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon, ClockIcon, TagIcon, CalendarIcon, ScaleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import FAQSchema from '@/components/seo/FAQSchema';
import ArticleSchema from '@/components/seo/ArticleSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export default function BlogPost() {
  const publishDate = '2025-01-30';
  const author = 'Michael Delgado';
  const readTime = '12 min read';
  const category = 'Legal Compliance';
  const tags = ['Contractor Laws', 'Workers Compensation', 'Legal Compliance', 'NJ Regulations'];

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'NJ Contractor Classification Laws', url: '/blog/nj-contractor-classification-laws-2025' }
  ];

  const faqs = [
    {
      question: "What is the ABC test for contractors in New Jersey?",
      answer: "The ABC test requires all three conditions to be met for independent contractor status: (A) The worker is free from control and direction in performing services; (B) The service is outside the usual course of business or performed outside business locations; (C) The worker is customarily engaged in an independently established trade."
    },
    {
      question: "What are the penalties for misclassifying workers in NJ?",
      answer: "Penalties include: unpaid employment taxes plus interest, workers' comp premiums with penalties up to 50%, unemployment and disability insurance contributions, potential criminal charges with fines up to $1,000 per worker, and stop-work orders on construction projects."
    },
    {
      question: "Can subcontractors be considered independent contractors?",
      answer: "Yes, but they must pass the ABC test. Having a business entity, insurance, and working for multiple contractors helps, but isn't sufficient alone. The nature of control and integration into your business operations are key factors."
    },
    {
      question: "How do the new 2025 laws affect construction companies?",
      answer: "The 2025 updates increase penalties, expand audit authority, require quarterly reporting for companies with 10+ workers, and add whistleblower protections. Construction remains a high-scrutiny industry with targeted enforcement."
    }
  ];

  return (
    <>
      <ArticleSchema
        title="Understanding NJ's Independent Contractor Laws for 2025"
        description="Complete guide to New Jersey contractor classification laws. Learn about the ABC test, insurance requirements, and avoiding costly misclassification penalties."
        author={author}
        publishedDate={publishDate}
        keywords={["bergen county", "construction insurance"]}
        imageUrl="/og/nj-contractor-laws.jpg"
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
                Understanding NJ's Independent Contractor Laws: 2025 Update
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
              New Jersey's worker classification laws have teeth—and they're biting harder in 2025. With enhanced penalties, 
              expanded enforcement, and new reporting requirements, construction companies face unprecedented scrutiny. 
              Misclassifying even one worker can trigger audits, fines, and insurance nightmares that threaten your business survival.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
              <div className="flex items-start">
                <ExclamationTriangleIcon className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-red-900 mb-2">2025 Enforcement Update</p>
                  <p className="text-red-800">
                    The NJ Department of Labor has increased construction industry audits by 40% in 2025. 
                    Bergen County has been designated a "high-enforcement zone" due to the volume of construction activity.
                  </p>
                </div>
              </div>
            </div>

            {/* The ABC Test */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The ABC Test: New Jersey's Gold Standard
            </h2>
            
            <p>
              New Jersey uses the strictest classification test in the nation. To classify someone as an independent contractor, 
              you must prove ALL three prongs of the ABC test. Failing any single prong means they're an employee—period.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Prong A: Freedom from Control</h3>
            
            <p>
              The worker must be free from your control and direction in performing their services, both in contract and in fact.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h4 className="font-semibold text-gray-900 mb-3">What Courts Look For:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-green-700 mb-2">✓ Signs of Independence:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Sets own schedule</li>
                    <li>• Uses own tools/equipment</li>
                    <li>• Works for multiple contractors</li>
                    <li>• Can refuse work</li>
                    <li>• Invoices for completed work</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-red-700 mb-2">✗ Signs of Control:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Required work hours</li>
                    <li>• Supervised work methods</li>
                    <li>• Mandatory meetings</li>
                    <li>• Company uniforms/vehicles</li>
                    <li>• Exclusive work relationship</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Prong B: Outside Usual Business</h3>
            
            <p>
              The service must be outside the usual course of your business OR performed outside your place of business. 
              This is where most construction companies fail.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
              <p className="font-semibold text-yellow-900 mb-2">Construction Industry Reality:</p>
              <p className="text-yellow-800">
                If you're a general contractor, any trade work (electrical, plumbing, carpentry) is likely within your 
                usual course of business. Courts have consistently ruled against GCs trying to classify trade workers 
                as independent contractors.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Prong C: Independent Trade or Business</h3>
            
            <p>
              The worker must be customarily engaged in an independently established trade, occupation, or business.
            </p>

            <ul className="space-y-3 my-6">
              <li>
                <strong>Business Entity:</strong> Having an LLC or corporation helps but isn't determinative
              </li>
              <li>
                <strong>Multiple Clients:</strong> Working for others in the same capacity strengthens the case
              </li>
              <li>
                <strong>Business Infrastructure:</strong> Insurance, business cards, advertising, separate phone
              </li>
              <li>
                <strong>Financial Risk:</strong> Possibility of profit or loss, not just hourly payment
              </li>
            </ul>

            {/* 2025 Changes */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              What's New in 2025: Enhanced Enforcement
            </h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Increased Penalties</h3>
            
            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Violation</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">2024 Penalty</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">2025 Penalty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm">First Offense</td>
                    <td className="px-6 py-4 text-sm">$500 per worker</td>
                    <td className="px-6 py-4 text-sm text-red-600 font-semibold">$1,000 per worker</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm">Willful Misclassification</td>
                    <td className="px-6 py-4 text-sm">$1,000 per worker</td>
                    <td className="px-6 py-4 text-sm text-red-600 font-semibold">$5,000 per worker</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm">Stop-Work Order Violation</td>
                    <td className="px-6 py-4 text-sm">$5,000 per day</td>
                    <td className="px-6 py-4 text-sm text-red-600 font-semibold">$10,000 per day</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Quarterly Reporting Requirements</h3>
            
            <p>
              Companies with 10 or more workers must now file quarterly classification reports, including:
            </p>

            <ul className="space-y-2 my-6">
              <li>• Total number of workers (W-2 and 1099)</li>
              <li>• Classification justification for each 1099 worker</li>
              <li>• Proof of workers' comp coverage for all employees</li>
              <li>• Certification of compliance signed by owner/officer</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Whistleblower Protections</h3>
            
            <p>
              Workers can now report misclassification anonymously with enhanced protections and potential rewards 
              of up to 30% of recovered taxes and penalties.
            </p>

            {/* Insurance Implications */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Insurance Implications of Misclassification
            </h2>

            <p>
              Worker misclassification doesn't just trigger government penalties—it can void your insurance coverage 
              when you need it most.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Workers' Compensation Nightmares</h3>
            
            <div className="bg-red-50 rounded-lg p-6 my-8">
              <h4 className="font-semibold text-red-900 mb-3">Real Bergen County Case</h4>
              <p className="text-red-800 mb-2">
                A Hackensack GC classified framers as independent contractors. When one fell from scaffolding:
              </p>
              <ul className="text-red-800 space-y-2 ml-6 list-disc">
                <li>Workers' comp carrier denied the $400,000 claim</li>
                <li>State ruled workers were employees</li>
                <li>GC personally liable for medical bills</li>
                <li>$75,000 in penalties and back premiums</li>
                <li>Criminal charges filed against owner</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">General Liability Gaps</h3>
            
            <p>
              Your general liability policy may exclude claims from uninsured subcontractors who are later deemed employees. 
              This creates massive coverage gaps:
            </p>

            <ul className="space-y-3 my-6">
              <li>
                <strong>No Coverage for Their Work:</strong> Damage caused by misclassified workers may be excluded
              </li>
              <li>
                <strong>Defense Cost Denials:</strong> Insurers can refuse to defend claims involving misclassified workers
              </li>
              <li>
                <strong>Policy Cancellation:</strong> Material misrepresentation can void your entire policy
              </li>
            </ul>

            {/* Compliance Strategies */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Compliance Strategies That Work
            </h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Option 1: Properly Classify as Employees</h3>
            
            <p>
              Often the safest and simplest approach. Yes, it costs more upfront, but consider:
            </p>

            <div className="bg-green-50 rounded-lg p-6 my-6">
              <h4 className="font-semibold text-green-900 mb-3">Employee Benefits</h4>
              <ul className="text-green-800 space-y-2">
                <li>✓ Full workers' comp protection</li>
                <li>✓ Unemployment insurance coverage</li>
                <li>✓ Better worker retention</li>
                <li>✓ No classification risk</li>
                <li>✓ Potential tax credits</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Option 2: Use Legitimate Subcontractors</h3>
            
            <p>
              If you genuinely need independent contractors, ensure they meet ALL requirements:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <p className="font-semibold text-blue-900 mb-3">Subcontractor Checklist:</p>
              <div className="space-y-2 text-blue-800">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Valid business entity (LLC, Corp)</span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Business license and permits</span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Own general liability insurance ($1M minimum)</span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Workers' comp for their employees</span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Written contract for specific project/scope</span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Works for multiple contractors</span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Own tools and equipment</span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Sets own schedule within project deadlines</span>
                </label>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Option 3: Employee Leasing/PEO</h3>
            
            <p>
              Professional Employer Organizations can handle employment compliance while you maintain operational control:
            </p>

            <ul className="space-y-3 my-6">
              <li>
                <strong>They Handle:</strong> Payroll, taxes, workers' comp, compliance
              </li>
              <li>
                <strong>You Handle:</strong> Work assignments, quality control, customer relations
              </li>
              <li>
                <strong>Cost:</strong> Typically 2-4% of gross payroll
              </li>
              <li>
                <strong>Benefit:</strong> Transfers classification risk to PEO
              </li>
            </ul>

            {/* Audit Preparation */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Preparing for the Inevitable Audit
            </h2>

            <p>
              With increased enforcement, assume you'll be audited. Preparation is your best defense:
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Documentation Requirements</h3>
            
            <ol className="space-y-4 my-6">
              <li>
                <strong>1. Contracts:</strong> Detailed written agreements for every worker
              </li>
              <li>
                <strong>2. Insurance Certificates:</strong> Current COIs from all subcontractors
              </li>
              <li>
                <strong>3. Business Proof:</strong> Their business licenses, tax IDs, advertising
              </li>
              <li>
                <strong>4. Payment Records:</strong> Show payment to business entity, not individual
              </li>
              <li>
                <strong>5. Project Records:</strong> Document their independence on each project
              </li>
            </ol>

            <div className="bg-yellow-50 rounded-lg p-6 my-8">
              <h4 className="font-semibold text-yellow-900 mb-3">Audit Red Flags</h4>
              <ul className="text-yellow-800 space-y-2">
                <li>• Same workers on every project</li>
                <li>• Workers using your tools/equipment</li>
                <li>• Daily presence at job sites</li>
                <li>• Payment structures resembling wages</li>
                <li>• Exclusive working relationships</li>
              </ul>
            </div>

            {/* Action Steps */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Your 2025 Compliance Action Plan
            </h2>

            <p>
              Don't wait for an audit to fix classification issues. Take these steps now:
            </p>

            <ol className="space-y-6 my-8">
              <li>
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold mr-3">1</span>
                  <div>
                    <strong>Audit Your Current Workers</strong>
                    <p className="text-gray-600 mt-1">Review every 1099 relationship against the ABC test</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold mr-3">2</span>
                  <div>
                    <strong>Fix Problem Classifications</strong>
                    <p className="text-gray-600 mt-1">Convert to W-2 or ensure true independence</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold mr-3">3</span>
                  <div>
                    <strong>Update Your Insurance</strong>
                    <p className="text-gray-600 mt-1">Ensure coverage matches your actual workforce</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold mr-3">4</span>
                  <div>
                    <strong>Implement Compliance Systems</strong>
                    <p className="text-gray-600 mt-1">Create processes for ongoing classification compliance</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold mr-3">5</span>
                  <div>
                    <strong>Document Everything</strong>
                    <p className="text-gray-600 mt-1">Build your audit defense file now</p>
                  </div>
                </div>
              </li>
            </ol>

            {/* Conclusion */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Bottom Line: Compliance Pays
            </h2>

            <p>
              New Jersey's 2025 contractor classification laws aren't just stricter—they're actively enforced with 
              serious consequences. The construction industry remains squarely in regulators' crosshairs, especially 
              in high-activity areas like Bergen County.
            </p>

            <p>
              While proper classification may increase your costs, it's far cheaper than the alternative. One misclassification 
              audit can cost hundreds of thousands in penalties, back taxes, and legal fees—not to mention potential criminal charges.
            </p>

            {/* CTA Box */}
            <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Your Free Classification Review
              </h3>
              <p className="text-gray-700 mb-6">
                Our experts will review your worker classifications and insurance coverage to ensure full compliance 
                with New Jersey's 2025 laws. Protect your business before the auditors come knocking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Schedule Classification Review
                </Link>
                <a
                  href="tel:2018122184"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Call (201) 812-2184
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Free consultation • No obligation • Confidential review
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
                    Michael has helped hundreds of Bergen County contractors navigate New Jersey's complex employment laws 
                    while maintaining proper insurance coverage. He regularly speaks at construction industry events about 
                    compliance and risk management.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="border-t pt-8 mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/blog/workers-compensation-audit-preparation" className="group">
                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">
                      Preparing for Workers' Comp Audits
                    </h4>
                    <p className="text-sm text-gray-600">
                      How to ensure your audit goes smoothly
                    </p>
                  </div>
                </Link>
                <Link href="/blog/subcontractor-insurance-requirements" className="group">
                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">
                      Subcontractor Insurance Requirements
                    </h4>
                    <p className="text-sm text-gray-600">
                      What coverage your subs really need
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