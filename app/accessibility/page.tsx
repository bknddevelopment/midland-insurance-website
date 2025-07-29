'use client';

import React from 'react';
import InfoPageTemplate from '@/components/templates/InfoPageTemplate';

export default function AccessibilityPage() {
  const contentSections = [
    {
      title: 'Our Commitment to Accessibility',
      content: `Midland Associates Insurance Services is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all of our users.`
    },
    {
      title: 'Standards Compliance',
      content: `Our website strives to conform to level AA of the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines 2.1. These guidelines explain how to make web content more accessible for people with disabilities. Conformance with these guidelines helps make the web more user-friendly for all people.

We regularly review our website to ensure:`,
      isList: true,
      listItems: [
        'All images have descriptive alternative text',
        'Colors have sufficient contrast for readability',
        'All functionality is available via keyboard navigation',
        'Pages are properly structured with headings',
        'Forms are clearly labeled and easy to navigate',
        'Content is readable and understandable',
        'The site works well with screen readers and assistive technologies'
      ]
    },
    {
      title: 'Ongoing Efforts',
      content: `We understand that accessibility is an ongoing effort, not a one-time fix. Our team regularly:`,
      isList: true,
      listItems: [
        'Reviews and updates content for accessibility',
        'Provides training to staff on accessibility best practices',
        'Monitors accessibility compliance',
        'Tests with various assistive technologies',
        'Solicits feedback from users with disabilities',
        'Implements improvements based on user feedback'
      ]
    },
    {
      title: 'Third-Party Content',
      content: `While we strive to ensure all content on our website is accessible, we may occasionally link to third-party websites or embed content that is not fully within our control. We cannot guarantee the accessibility of third-party content but will work to provide accessible alternatives when possible.`
    },
    {
      title: 'Alternative Access',
      content: `If you encounter any barriers to accessing information on our website, we offer several alternatives:`,
      isList: true,
      listItems: [
        'Call us at (201) 812-2184 to speak with a representative',
        'Visit our office at 345 RT 17 STE 22, Upper Saddle River, NJ',
        'Email us at accessibility@midlandinsurance.biz',
        'Request information in an alternative format'
      ]
    },
    {
      title: 'Feedback and Contact',
      content: `We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers or have suggestions for improvement, please contact us:

Phone: (201) 812-2184
Email: accessibility@midlandinsurance.biz
Mail: Midland Associates Insurance Services
345 RT 17 STE 22
Upper Saddle River, NJ 07458

We will make every reasonable effort to address your concerns and improve the accessibility of our website.`
    }
  ];

  return (
    <InfoPageTemplate
      heroTitle="Accessibility Statement"
      heroSubtitle="Our Commitment to Digital Inclusion"
      heroDescription="Learn about our efforts to ensure our website and services are accessible to all users, including those with disabilities."
      contentSections={contentSections}
      ctaTitle="Need Assistance?"
      ctaDescription="If you need help accessing any information on our website, please don't hesitate to contact us."
      ctaButton={{
        text: 'Contact Us',
        href: '/contact'
      }}
    />
  );
}