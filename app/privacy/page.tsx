'use client';

import React from 'react';
import InfoPageTemplate from '@/components/templates/InfoPageTemplate';

export default function PrivacyPolicyPage() {
  const contentSections = [
    {
      title: 'Privacy Policy',
      content: `Last Updated: November 2024

Midland Associates Insurance Services ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.`
    },
    {
      title: 'Information We Collect',
      content: `We collect information you provide directly to us, such as when you:`,
      isList: true,
      listItems: [
        'Request a quote or purchase insurance',
        'Create an account or fill out forms',
        'Subscribe to our newsletter',
        'Contact us via phone, email, or our website',
        'Participate in surveys or promotions',
        'Submit a claim or make a payment'
      ]
    },
    {
      title: 'Types of Information',
      content: `The types of information we may collect include:

Personal Information:`,
      isList: true,
      listItems: [
        'Name, address, and contact information',
        'Date of birth and Social Security number',
        'Driver\'s license information',
        'Financial information for payments',
        'Information about your property and vehicles',
        'Claims history and coverage details',
        'Other information necessary for insurance purposes'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: `We use the information we collect to:`,
      isList: true,
      listItems: [
        'Provide insurance quotes and process applications',
        'Underwrite and issue insurance policies',
        'Process claims and provide customer service',
        'Communicate with you about your policies',
        'Send you important updates and notifications',
        'Improve our services and develop new offerings',
        'Comply with legal and regulatory requirements',
        'Prevent fraud and verify identity'
      ]
    },
    {
      title: 'Information Sharing',
      content: `We may share your information with:

Insurance Carriers: To obtain quotes and process your insurance policies

Service Providers: Companies that help us operate our business (e.g., payment processors, IT services)

Legal Requirements: When required by law or to protect our rights

Business Transfers: In connection with a merger, acquisition, or sale of assets

We do not sell your personal information to third parties for marketing purposes.`
    },
    {
      title: 'Data Security',
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:`,
      isList: true,
      listItems: [
        'Encryption of sensitive data',
        'Secure servers and firewalls',
        'Limited access to personal information',
        'Regular security assessments',
        'Employee training on data protection'
      ]
    },
    {
      title: 'Your Rights and Choices',
      content: `You have the right to:`,
      isList: true,
      listItems: [
        'Access your personal information',
        'Correct inaccurate information',
        'Request deletion of your information (subject to legal requirements)',
        'Opt-out of marketing communications',
        'Request a copy of your information',
        'Lodge a complaint with supervisory authorities'
      ]
    },
    {
      title: 'Cookies and Tracking',
      content: `Our website uses cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings. Types of cookies we use include:`,
      isList: true,
      listItems: [
        'Essential cookies for website functionality',
        'Analytics cookies to understand usage',
        'Preference cookies to remember your settings',
        'Marketing cookies to provide relevant content'
      ]
    },
    {
      title: 'Children\'s Privacy',
      content: `Our services are not directed to children under 18, and we do not knowingly collect personal information from children. If we learn we have collected information from a child, we will delete it promptly.`
    },
    {
      title: 'Changes to This Policy',
      content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.`
    },
    {
      title: 'Contact Us',
      content: `If you have questions about this Privacy Policy or our privacy practices, please contact us:

Midland Associates Insurance Services
345 RT 17 STE 22
Upper Saddle River, NJ 07458
Phone: (201) 812-2184
Email: privacy@midlandinsurance.biz`
    }
  ];

  return (
    <InfoPageTemplate
      heroTitle="Privacy Policy"
      heroSubtitle="How We Protect Your Information"
      heroDescription="Learn about our commitment to protecting your privacy and how we handle your personal information."
      contentSections={contentSections}
      ctaTitle="Questions About Privacy?"
      ctaDescription="If you have any questions about our privacy practices, please don't hesitate to contact us."
      ctaButton={{
        text: 'Contact Us',
        href: '/contact'
      }}
    />
  );
}