'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon, ClockIcon, TagIcon, CalendarIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import FAQSchema from '@/components/seo/FAQSchema';
import ArticleSchema from '@/components/seo/ArticleSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export default function BlogPost() {
  const publishDate = '2025-01-30';
  const author = 'Michael Delgado';
  const readTime = '10 min read';
  const category = 'Risk Management';
  const tags = ['Insurance Mistakes', 'Contractor Tips', 'Bergen County', 'Cost Savings'];

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: '5 Costly Insurance Mistakes', url: '/blog/contractor-insurance-mistakes-bergen-county' }
  ];

  const faqs = [
    {
      question: "What's the most expensive insurance mistake contractors make?",
      answer: "Underinsuring to save on premiums is the costliest mistake. A single uncovered claim can bankrupt a construction business. We've seen Bergen County contractors face $500,000+ in out-of-pocket costs from gaps in coverage."
    },
    {
      question: "How often should I review my contractor insurance coverage?",
      answer: "Review your coverage at least annually and whenever you: take on larger projects, hire new employees, buy new equipment, expand to new areas, or change your business structure. Many contractors only review when renewing, missing important changes."
    },
    {
      question: "Can wrong classification codes really increase my premiums?",
      answer: "Yes, significantly. Using incorrect class codes can increase premiums by 50-200%. For example, classifying a roofer as a general carpenter can double workers' comp costs. Accurate classification is crucial for fair pricing."
    },
    {
      question: "What happens if I don't add additional insureds as required?",
      answer: "Failing to add additional insureds can void your contract, lead to lawsuits, result in claim denials, and damage your reputation. Most Bergen County projects require this, and non-compliance can cost you jobs and money."
    }
  ];

  return (
    <>
      <ArticleSchema
        title="5 Costly Insurance Mistakes Bergen County Contractors Make"
        description="Learn about common contractor insurance mistakes that cost thousands. Expert guidance on coverage gaps, classification errors, and proper protection."
        author={author}
        publishedDate={publishDate}
        keywords={["bergen county", "construction insurance"]}
        imageUrl="/og/contractor-insurance-mistakes.jpg"
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
                5 Costly Insurance Mistakes Bergen County Contractors Make
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
              After 30 years of protecting Bergen County contractors, we've seen the same costly insurance mistakes repeated countless times. 
              These errors have cost local contractors millions in out-of-pocket expenses, lost contracts, and even bankruptcy. The good news? 
              Every one of these mistakes is preventable with the right knowledge and guidance.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
              <div className="flex items-start">
                <ExclamationTriangleIcon className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-red-900 mb-2">The Real Cost of Insurance Mistakes</p>
                  <p className="text-red-800">
                    Last year alone, Bergen County contractors faced over $3.2 million in uncovered claims due to insurance gaps. 
                    Don't become another statistic.
                  </p>
                </div>
              </div>
            </div>

            {/* Mistake 1 */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Mistake #1: Underinsuring to Save Money
            </h2>
            
            <p>
              It's tempting to choose minimum coverage limits to reduce premiums, but this false economy can destroy your business. 
              Bergen County's construction market demands higher coverage due to property values and lawsuit trends.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Hidden Costs of Underinsurance</h3>
            
            <ul className="space-y-3 my-6">
              <li>
                <strong>Lost Contracts:</strong> Major projects in Hackensack, Fort Lee, and Paramus typically require $2-5 million in general liability. 
                Minimum coverage eliminates you from 60% of commercial opportunities.
              </li>
              <li>
                <strong>Personal Assets at Risk:</strong> Claims exceeding your coverage come from personal assets. A $1 million policy won't protect 
                you from a $2 million judgment.
              </li>
              <li>
                <strong>Reputation Damage:</strong> Underinsured contractors who can't pay claims develop bad reputations quickly in Bergen County's 
                tight-knit construction community.
              </li>
            </ul>

            <div className="bg-gray-50 rounded-lg p-6 my-8">
              <h4 className="font-semibold text-gray-900 mb-3">Real Example: Paramus Shopping Center Claim</h4>
              <p className="text-gray-700 mb-2">
                <strong>Scenario:</strong> Electrical contractor with $1M coverage caused fire during renovation
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Total Damages:</strong> $2.8 million
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Insurance Paid:</strong> $1 million
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Contractor's Cost:</strong> $1.8 million (business assets liquidated, personal bankruptcy)
              </p>
              <p className="text-gray-700 font-semibold">
                Proper Coverage Would Have Cost: Extra $1,200/year
              </p>
            </div>

            {/* Mistake 2 */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Mistake #2: Using Wrong Classification Codes
            </h2>

            <p>
              Workers' compensation class codes determine your premium rates. Using incorrect codes doesn't just cost money—it can void 
              your coverage entirely when you need it most.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Common Classification Errors in Bergen County</h3>
            
            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wrong Classification</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Correct Classification</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Premium Difference</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm">Carpentry (5403)</td>
                    <td className="px-6 py-4 text-sm">Roofing (5551)</td>
                    <td className="px-6 py-4 text-sm text-red-600 font-semibold">+142% higher</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm">Janitorial (9014)</td>
                    <td className="px-6 py-4 text-sm">Window Cleaning - High Rise (5020)</td>
                    <td className="px-6 py-4 text-sm text-red-600 font-semibold">+385% higher</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm">Handyman (9015)</td>
                    <td className="px-6 py-4 text-sm">Electrical Wiring (5190)</td>
                    <td className="px-6 py-4 text-sm text-red-600 font-semibold">+78% higher</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
              <p className="font-semibold text-yellow-900 mb-2">Audit Warning:</p>
              <p className="text-yellow-800">
                Using incorrect class codes triggers premium audits with back-charges plus penalties. One Teaneck contractor 
                faced a $47,000 audit bill for misclassifying employees over three years.
              </p>
            </div>

            {/* Mistake 3 */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Mistake #3: Missing Additional Insured Requirements
            </h2>

            <p>
              Every general contractor and property owner in Bergen County requires additional insured status. Missing this requirement 
              can cost you contracts and create massive liability gaps.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Happens When You Forget</h3>
            
            <ul className="space-y-3 my-6">
              <li>
                <strong>Contract Breach:</strong> You're technically in breach the moment work begins without proper additional insured coverage
              </li>
              <li>
                <strong>Personal Liability:</strong> Property owners can sue you directly for defense costs if not properly named
              </li>
              <li>
                <strong>No Payment Protection:</strong> GCs can legally withhold payment until coverage is corrected
              </li>
              <li>
                <strong>Blacklisting:</strong> Word spreads fast—one mistake can lock you out of future projects
              </li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
              <p className="font-semibold text-green-900 mb-2">Pro Tip: Automate Additional Insureds</p>
              <p className="text-green-800">
                Ask for blanket additional insured endorsements. For about $250/year, anyone requiring it in a written contract 
                is automatically covered. This eliminates 90% of certificate delays.
              </p>
            </div>

            {/* Mistake 4 */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Mistake #4: No Completed Operations Coverage
            </h2>

            <p>
              Your liability doesn't end when you leave the job site. Without completed operations coverage, you're exposed to claims 
              months or even years after project completion.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Bergen County Completed Ops Claims</h3>
            
            <div className="space-y-6 my-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Water Damage - Fort Lee Condo</h4>
                <p className="text-gray-700">
                  Plumbing failure 8 months after completion caused $450,000 in damage to 6 units. Contractor without 
                  completed ops coverage paid entire amount personally.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Deck Collapse - Ridgewood Home</h4>
                <p className="text-gray-700">
                  Improperly secured deck collapsed 2 years after construction, injuring 4 people. $1.2 million settlement 
                  would have been covered with completed operations.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Roof Leak - Englewood Office</h4>
                <p className="text-gray-700">
                  Faulty flashing caused interior damage 18 months post-completion. $280,000 claim denied due to no 
                  completed operations coverage.
                </p>
              </div>
            </div>

            <p>
              Completed operations typically adds only 10-15% to your general liability premium but protects against claims that 
              can arise years after project completion.
            </p>

            {/* Mistake 5 */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Mistake #5: Using Personal Vehicles for Business
            </h2>

            <p>
              Your personal auto policy excludes business use. One accident while driving to a Bergen County job site can leave you 
              personally liable for damages your insurance won't cover.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Counts as Business Use?</h3>
            
            <ul className="space-y-3 my-6">
              <li>Driving to job sites (even without tools)</li>
              <li>Meeting clients or suppliers</li>
              <li>Getting permits or inspections</li>
              <li>Hauling any materials or equipment</li>
              <li>Displaying company signs or wraps</li>
              <li>Employees using personal vehicles for work</li>
            </ul>

            <div className="bg-red-50 rounded-lg p-6 my-8">
              <h4 className="font-semibold text-red-900 mb-3">Denial Example: Route 17 Accident</h4>
              <p className="text-red-800 mb-2">
                Contractor driving personal truck to Paramus job site rear-ended vehicle on Route 17. Personal auto carrier 
                denied $85,000 claim due to business use. Contractor personally liable for:
              </p>
              <ul className="text-red-800 space-y-1 ml-6 list-disc">
                <li>$85,000 in damages</li>
                <li>$15,000 in legal fees</li>
                <li>$12,000 in lost wages during litigation</li>
              </ul>
              <p className="text-red-900 font-semibold mt-2">
                Commercial auto policy would have cost: $1,800/year
              </p>
            </div>

            {/* How to Fix These Mistakes */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              How to Fix These Mistakes Today
            </h2>

            <p>
              The good news is that every one of these mistakes can be corrected quickly with the right insurance partner. 
              Here's your action plan:
            </p>

            <ol className="space-y-6 my-8">
              <li>
                <strong>1. Schedule a Coverage Review</strong>
                <p className="text-gray-600 mt-2">
                  Have an expert analyze your current policies for gaps. This should be free and take less than an hour.
                </p>
              </li>
              <li>
                <strong>2. Verify Classification Codes</strong>
                <p className="text-gray-600 mt-2">
                  Ensure every employee is properly classified. If you do multiple trades, you may need multiple codes.
                </p>
              </li>
              <li>
                <strong>3. Implement Certificate Procedures</strong>
                <p className="text-gray-600 mt-2">
                  Create a system for managing additional insured requests. Consider blanket coverage for efficiency.
                </p>
              </li>
              <li>
                <strong>4. Review All Vehicles</strong>
                <p className="text-gray-600 mt-2">
                  Any vehicle used even occasionally for business needs commercial coverage. Don't forget hired and non-owned auto.
                </p>
              </li>
              <li>
                <strong>5. Calculate True Coverage Needs</strong>
                <p className="text-gray-600 mt-2">
                  Consider your largest potential project, not your average. Coverage should protect your worst-case scenario.
                </p>
              </li>
            </ol>

            {/* Cost vs Risk Analysis */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Real Cost of Proper Coverage
            </h2>

            <p>
              Many Bergen County contractors avoid fixing these mistakes thinking it's too expensive. Let's look at the real numbers:
            </p>

            <div className="bg-gray-50 rounded-lg p-8 my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Average Annual Cost to Fix All 5 Mistakes:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Increase liability limits to $2M/$4M: <strong>+$1,500</strong></li>
                <li>• Correct classification codes: <strong>May actually save money</strong></li>
                <li>• Blanket additional insured: <strong>+$250</strong></li>
                <li>• Add completed operations: <strong>+$800</strong></li>
                <li>• Commercial auto (1 vehicle): <strong>+$1,800</strong></li>
              </ul>
              <div className="mt-4 pt-4 border-t">
                <p className="text-lg">
                  <strong>Total Additional Cost:</strong> 
                  <span className="text-2xl font-bold text-primary-600 ml-2">$4,350/year</span>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  That's less than one small claim deductible
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Don't Wait for a Claim to Find Out
            </h2>

            <p>
              Every day you operate with these coverage gaps is another day you risk everything you've built. The contractors 
              who learned these lessons the hard way paid far more than any insurance premium.
            </p>

            <p>
              Bergen County's construction market is too competitive and litigious to operate without proper protection. One 
              claim from any of these gaps can end your business and impact your personal life for years.
            </p>

            {/* CTA Box */}
            <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get a Free Coverage Gap Analysis
              </h3>
              <p className="text-gray-700 mb-6">
                Our construction insurance experts will review your current coverage and identify any costly gaps. 
                No obligation, no sales pressure—just honest advice to protect your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Get Your Free Analysis
                </Link>
                <a
                  href="tel:2018122184"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Call (201) 812-2184
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Average time to identify and fix all gaps: 48 hours
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
                    With over 30 years protecting Bergen County contractors, Michael has seen every insurance mistake 
                    possible—and helped hundreds of contractors fix them before disaster strikes.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="border-t pt-8 mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/blog/general-liability-vs-professional-liability" className="group">
                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">
                      General Liability vs Professional Liability
                    </h4>
                    <p className="text-sm text-gray-600">
                      Understanding the critical differences for contractors
                    </p>
                  </div>
                </Link>
                <Link href="/blog/workers-comp-class-codes-guide" className="group">
                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">
                      Workers' Comp Class Codes Explained
                    </h4>
                    <p className="text-sm text-gray-600">
                      Get the right classification and save thousands
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