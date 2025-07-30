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

export default function PrivacyPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy' },
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
          title="Privacy Policy"
          subtitle="Your Privacy Matters to Us"
          description="Learn how Midland Associates Insurance Services collects, uses, and protects your personal information."
          primaryButton={{
            text: 'Contact Us',
            href: '/contact',
          }}
          secondaryButton={{
            text: 'Terms of Service',
            href: '/terms',
          }}
          backgroundImage="/photos/legal-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Privacy Policy Content */}
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

              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-6">
                Midland Associates Insurance Services ("Midland Associates," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website midlandinsurance.biz (the "Site") or engage with our insurance services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-600 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc ml-6 mb-6 text-gray-600">
                <li>Request an insurance quote</li>
                <li>Purchase an insurance policy</li>
                <li>File an insurance claim</li>
                <li>Contact us via phone, email, or our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Create an account on our website</li>
              </ul>

              <p className="text-gray-600 mb-4">
                This information may include:
              </p>
              <ul className="list-disc ml-6 mb-6 text-gray-600">
                <li>Name, address, and contact information</li>
                <li>Date of birth and Social Security number</li>
                <li>Driver's license information</li>
                <li>Vehicle and property information</li>
                <li>Business information (for commercial insurance)</li>
                <li>Financial information necessary for insurance underwriting</li>
                <li>Claims history and loss information</li>
                <li>Construction trade and business details</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-600 mb-4">
                When you visit our Site, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc ml-6 mb-6 text-gray-600">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website</li>
                <li>Date and time of visit</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc ml-6 mb-6 text-gray-600">
                <li>Provide insurance quotes and bind coverage</li>
                <li>Process insurance applications and renewals</li>
                <li>Handle claims and provide customer service</li>
                <li>Verify your identity and prevent fraud</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Communicate with you about your policies and our services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and trends</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Share Your Information</h2>
              <p className="text-gray-600 mb-6">
                We may share your information with:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Insurance Carriers and Partners</h3>
              <p className="text-gray-600 mb-6">
                We share your information with insurance companies to obtain quotes, bind coverage, and service your policies. We work with multiple carriers to find the best coverage for your construction business.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Providers</h3>
              <p className="text-gray-600 mb-6">
                We may share your information with third-party service providers who help us operate our business, such as claims administrators, IT service providers, and marketing agencies.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Requirements</h3>
              <p className="text-gray-600 mb-6">
                We may disclose your information if required by law, court order, or government regulation, or if we believe disclosure is necessary to protect our rights or the safety of others.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Transfers</h3>
              <p className="text-gray-600 mb-6">
                In the event of a merger, acquisition, or sale of our business, your information may be transferred to the acquiring entity.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc ml-6 mb-6 text-gray-600">
                <li>SSL encryption for data transmission</li>
                <li>Secure data storage systems</li>
                <li>Limited access to personal information</li>
                <li>Regular security assessments</li>
                <li>Employee training on data protection</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Access and Correction</h3>
              <p className="text-gray-600 mb-6">
                You have the right to request access to the personal information we hold about you and to request corrections to any inaccurate information.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Communications</h3>
              <p className="text-gray-600 mb-6">
                You may opt out of receiving marketing emails from us by clicking the "unsubscribe" link in any marketing email or by contacting us directly.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do Not Track</h3>
              <p className="text-gray-600 mb-6">
                Our Site does not currently respond to "Do Not Track" browser signals.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 mb-6">
                We use cookies and similar tracking technologies to enhance your experience on our Site. Cookies are small data files stored on your device that help us remember your preferences and understand how you use our Site. You can control cookies through your browser settings.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
              <p className="text-gray-600 mb-6">
                Our Site may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-600 mb-6">
                Our Site and services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete it.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. California Privacy Rights</h2>
              <p className="text-gray-600 mb-6">
                If you are a California resident, you may have additional privacy rights under the California Consumer Privacy Act (CCPA). Please contact us for more information about exercising these rights.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Data Retention</h2>
              <p className="text-gray-600 mb-6">
                We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. The retention period may vary depending on the type of information and the purpose for which it was collected.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. International Data Transfers</h2>
              <p className="text-gray-600 mb-6">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our Site with a new effective date.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700">
                  <strong>Midland Associates Insurance Services</strong><br />
                  140 Route 17 North<br />
                  Paramus, NJ 07652<br />
                  Phone: <a href="tel:2018122184" className="text-primary-600 hover:text-primary-700">(201) 812-2184</a><br />
                  Email: <a href="mailto:privacy@midlandinsurance.biz" className="text-primary-600 hover:text-primary-700">privacy@midlandinsurance.biz</a>
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Insurance-Specific Privacy Notice</h2>
              <p className="text-gray-600 mb-6">
                As an insurance agency, we are required to provide you with additional privacy notices under state and federal insurance regulations. These notices explain how we collect, use, and share your personal financial information in connection with insurance products. You may receive these notices when you apply for insurance or become a customer.
              </p>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mt-8">
                <p className="text-gray-700 font-semibold mb-2">
                  Your Privacy is Our Priority
                </p>
                <p className="text-gray-600">
                  At Midland Associates, we understand that construction contractors trust us with sensitive business and personal information. We take this responsibility seriously and are committed to protecting your privacy while providing you with the best insurance solutions for your business.
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