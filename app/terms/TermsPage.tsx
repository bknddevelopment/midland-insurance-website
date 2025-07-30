'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import Link from 'next/link';
import InsuranceAgencySchema from '@/components/seo/InsuranceAgencySchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export default function TermsPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Terms of Service', url: '/terms' },
  ];

  const lastUpdated = 'January 30, 2025';

  return (
    <>
      <InsuranceAgencySchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Terms of Service"
          subtitle="Our Agreement with You"
          description="Please read these terms carefully before using our website or services."
          primaryButton={{
            text: 'Contact Us',
            href: '/contact',
          }}
          secondaryButton={{
            text: 'Privacy Policy',
            href: '/privacy',
          }}
          backgroundImage="/photos/legal-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Terms of Service Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-gray-600 mb-8">
                <strong>Effective Date:</strong> {lastUpdated}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing or using the website midlandinsurance.biz ("Site") operated by Midland Associates Insurance Services ("Midland Associates," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, then you may not access the Site or use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Insurance Services</h2>
              <p className="text-gray-600 mb-4">
                Midland Associates is a licensed insurance agency specializing in construction insurance. Our services include:
              </p>
              <ul className="list-disc ml-6 mb-6 text-gray-600">
                <li>Insurance consultation and advice</li>
                <li>Policy quotes from multiple carriers</li>
                <li>Policy binding and issuance</li>
                <li>Claims assistance and advocacy</li>
                <li>Risk management services</li>
                <li>Policy reviews and renewals</li>
              </ul>
              <p className="text-gray-600 mb-6">
                All insurance products are subject to underwriting approval by the insurance carrier. We do not guarantee coverage or specific pricing.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Obligations</h2>
              <p className="text-gray-600 mb-4">
                When using our Site or services, you agree to:
              </p>
              <ul className="list-disc ml-6 mb-6 text-gray-600">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your information</li>
                <li>Not misrepresent your identity or affiliation</li>
                <li>Not use the Site for any illegal or unauthorized purpose</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not interfere with or disrupt the Site or servers</li>
                <li>Not attempt to gain unauthorized access to any portion of the Site</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property Rights</h2>
              <p className="text-gray-600 mb-6">
                The Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by Midland Associates, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-600 mb-6">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site without our prior written consent.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Quote Requests and Information Accuracy</h2>
              <p className="text-gray-600 mb-6">
                When requesting insurance quotes through our Site, you acknowledge that:
              </p>
              <ul className="list-disc ml-6 mb-6 text-gray-600">
                <li>All information provided must be true, accurate, and complete</li>
                <li>Quotes are estimates based on the information provided</li>
                <li>Final premiums may differ based on underwriting</li>
                <li>Providing false information may result in coverage denial or cancellation</li>
                <li>You have the authority to request quotes for the entities described</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy and Data Protection</h2>
              <p className="text-gray-600 mb-6">
                Your use of our Site is also governed by our Privacy Policy, which is incorporated by reference into these Terms. By using our Site, you consent to our collection and use of your information as described in our Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Links and Services</h2>
              <p className="text-gray-600 mb-6">
                Our Site may contain links to third-party websites, including insurance carriers and other service providers. We are not responsible for the content, privacy policies, or practices of any third-party sites. Your use of third-party sites is at your own risk and subject to their terms and conditions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimers</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Professional Advice</h3>
              <p className="text-gray-600 mb-6">
                The information on our Site is for general informational purposes only and should not be relied upon as professional advice. Insurance needs vary, and you should consult with a licensed insurance professional for advice specific to your situation.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Warranties</h3>
              <p className="text-gray-600 mb-6">
                The Site and all information, content, materials, products, and services included on or otherwise made available through the Site are provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the Site or the information contained on the Site.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                To the fullest extent permitted by law, Midland Associates and its officers, directors, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc ml-6 mb-6 text-gray-600">
                <li>Your use or inability to use the Site</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any interruption or cessation of transmission to or from the Site</li>
                <li>Any bugs, viruses, or other harmful code transmitted through the Site</li>
                <li>Any errors or omissions in any content</li>
                <li>Any insurance coverage decisions by carriers</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
              <p className="text-gray-600 mb-6">
                You agree to defend, indemnify, and hold harmless Midland Associates and its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Site.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Insurance-Specific Terms</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Agency Relationship</h3>
              <p className="text-gray-600 mb-6">
                Midland Associates acts as an insurance agent/broker representing multiple insurance carriers. We have a duty to act in your best interests when recommending insurance products, but we also have contractual relationships with insurance carriers.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Binding Authority</h3>
              <p className="text-gray-600 mb-6">
                Coverage is not bound until you receive written confirmation from us or the insurance carrier. Verbal agreements or quote requests do not constitute bound coverage.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Payments</h3>
              <p className="text-gray-600 mb-6">
                Timely premium payment is required to maintain coverage. We are not responsible for policy cancellations due to non-payment of premiums.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Dispute Resolution</h2>
              <p className="text-gray-600 mb-6">
                Any disputes arising out of or relating to these Terms or your use of the Site shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be conducted in Bergen County, New Jersey.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These Terms shall be governed by and construed in accordance with the laws of the State of New Jersey, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify or replace these Terms at any time at our sole discretion. If we make material changes, we will notify you by posting the new Terms on this page with a new effective date. Your continued use of the Site after any changes constitutes acceptance of the new Terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Severability</h2>
              <p className="text-gray-600 mb-6">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Entire Agreement</h2>
              <p className="text-gray-600 mb-6">
                These Terms, together with our Privacy Policy and any other legal notices published by us on the Site, constitute the entire agreement between you and Midland Associates concerning your use of the Site.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Contact Information</h2>
              <p className="text-gray-600 mb-6">
                For questions about these Terms of Service, please contact us:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700">
                  <strong>Midland Associates Insurance Services</strong><br />
                  140 Route 17 North<br />
                  Paramus, NJ 07652<br />
                  Phone: <a href="tel:2018122184" className="text-primary-600 hover:text-primary-700">(201) 812-2184</a><br />
                  Email: <a href="mailto:legal@midlandinsurance.biz" className="text-primary-600 hover:text-primary-700">legal@midlandinsurance.biz</a>
                </p>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mt-8">
                <p className="text-gray-700 font-semibold mb-2">
                  Thank You for Choosing Midland Associates
                </p>
                <p className="text-gray-600">
                  We appreciate your business and look forward to serving your construction insurance needs. Our commitment to excellence in service and coverage remains our top priority.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}