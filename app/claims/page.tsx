'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { DocumentTextIcon, PhoneIcon, ClockIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function ClaimsPage() {
  return (
    <>
      <Navbar />
      <Hero
        title="File a Claim"
        subtitle="We're Here When You Need Us"
        description="Filing a claim is easy. We'll guide you through the process and help you get back on track quickly."
        primaryButton={{
          text: "Start Your Claim",
          href: "#claim-form"
        }}
        secondaryButton={{
          text: "24/7 Claims Hotline",
          href: "tel:1-800-CLAIMS"
        }}
        backgroundImage="/photos/gallery/Gemini_Generated_Image_mo5u5ymo5u5ymo5u.jpg"
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Claims Process Made Simple
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand that filing a claim can be stressful. That's why we've made our process as simple and straightforward as possible.
            </p>
          </div>
          
          {/* Emergency Notice */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
            <div className="flex items-start">
              <ExclamationTriangleIcon className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-900 mb-2">Emergency Claims Hotline</h3>
                <p className="text-red-700 mb-2">For urgent claims requiring immediate assistance:</p>
                <Link href="tel:1-800-CLAIMS" className="inline-flex items-center text-red-700 font-bold text-xl hover:text-red-800">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  1-800-CLAIMS (Available 24/7)
                </Link>
              </div>
            </div>
          </div>
          
          {/* Claims Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-700">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Report Your Claim</h3>
              <p className="text-gray-600">
                Call us or use our online form to report your claim. Have your policy number ready.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-700">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Claims Review</h3>
              <p className="text-gray-600">
                A claims adjuster will review your case and contact you within 24 hours.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-700">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Resolution</h3>
              <p className="text-gray-600">
                We work quickly to resolve your claim and get you back to normal.
              </p>
            </div>
          </div>
          
          {/* Claim Types */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Your Claim Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/claims/auto" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Auto Claims</h4>
                <p className="text-gray-600">Accidents, theft, vandalism, or other vehicle damage</p>
              </Link>
              
              <Link href="/claims/home" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Home Claims</h4>
                <p className="text-gray-600">Property damage, theft, liability, or other home-related claims</p>
              </Link>
              
              <Link href="/claims/business" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Business Claims</h4>
                <p className="text-gray-600">Commercial property, liability, or business interruption</p>
              </Link>
              
              <Link href="/claims/other" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Other Claims</h4>
                <p className="text-gray-600">Life, boat, motorcycle, or other insurance claims</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}