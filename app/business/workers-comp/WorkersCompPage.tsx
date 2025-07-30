'use client';

import React from 'react';
import BusinessPageTemplate from '@/components/templates/BusinessPageTemplate';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  ClockIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

export default function WorkersCompPage() {
  const pageData = {
    title: "Workers' Compensation Insurance",
    description: "Protect your employees and your business with comprehensive workers' compensation coverage. Get competitive rates and expert guidance for New Jersey businesses.",
    heroImage: '/photos/workers-comp-hero.jpg',
  };

  const coverageDetails = {
    title: "What Workers' Comp Covers",
    subtitle: "Complete protection for workplace injuries and illnesses",
    items: [
      {
        title: 'Medical Expenses',
        description: 'All necessary medical treatment related to work injuries, including hospital stays, surgeries, medications, and rehabilitation.',
        icon: ShieldCheckIcon,
      },
      {
        title: 'Lost Wages',
        description: 'Partial wage replacement (typically 70% in NJ) while employees recover and cannot work.',
        icon: CurrencyDollarIcon,
      },
      {
        title: 'Disability Benefits',
        description: 'Compensation for permanent disabilities, both partial and total, resulting from workplace injuries.',
        icon: UserGroupIcon,
      },
      {
        title: 'Death Benefits',
        description: 'Financial support for dependents if a work-related injury or illness results in death.',
        icon: DocumentCheckIcon,
      },
      {
        title: 'Vocational Rehabilitation',
        description: 'Training and support to help injured workers return to suitable employment.',
        icon: ChartBarIcon,
      },
      {
        title: 'Legal Protection',
        description: 'Coverage for legal costs if employees file lawsuits related to workplace injuries.',
        icon: ExclamationTriangleIcon,
      },
    ],
  };

  const benefits = [
    {
      title: 'NJ State Compliance',
      description: 'Meet New Jersey legal requirements and avoid penalties up to $5,000 per employee.',
    },
    {
      title: 'Employee Protection',
      description: 'Ensure injured workers get proper medical care without financial hardship.',
    },
    {
      title: 'Business Protection',
      description: 'Shield your business from costly lawsuits and unlimited liability.',
    },
    {
      title: 'Return-to-Work Programs',
      description: 'Get employees back to work safely and reduce claim costs.',
    },
    {
      title: 'Safety Resources',
      description: 'Access safety training and loss control services to prevent injuries.',
    },
    {
      title: 'Claims Management',
      description: 'Expert support throughout the claims process for faster resolution.',
    },
  ];

  const industries = [
    { name: 'Construction', risk: 'High', icon: BuildingOfficeIcon },
    { name: 'Manufacturing', risk: 'High', icon: BuildingOfficeIcon },
    { name: 'Healthcare', risk: 'Medium', icon: UserGroupIcon },
    { name: 'Retail', risk: 'Low', icon: BuildingOfficeIcon },
    { name: 'Restaurants', risk: 'Medium', icon: BuildingOfficeIcon },
    { name: 'Professional Services', risk: 'Low', icon: DocumentCheckIcon },
  ];

  const faqs = [
    {
      question: "Is workers' compensation required in New Jersey?",
      answer: "Yes, New Jersey law requires most employers to carry workers' compensation insurance. This includes businesses with full-time, part-time, or seasonal employees. Sole proprietors and partnerships may elect coverage but aren't required to have it.",
    },
    {
      question: "How are workers' comp premiums calculated?",
      answer: "Premiums are based on your payroll, industry classification codes, and experience modification factor. High-risk industries like construction pay more than office-based businesses. Your claims history also affects rates through the experience mod factor.",
    },
    {
      question: "What happens if I don't have workers' comp coverage?",
      answer: "Operating without required coverage in New Jersey can result in fines up to $5,000 per employee, criminal charges, personal liability for all medical costs and lost wages, and closure of your business until coverage is obtained.",
    },
    {
      question: "Are independent contractors covered?",
      answer: "Generally, independent contractors are not covered under your workers' comp policy. However, New Jersey has strict rules about contractor classification. Misclassified employees can lead to significant penalties and liability.",
    },
    {
      question: "How can I reduce my workers' comp costs?",
      answer: "Implement safety programs, maintain a drug-free workplace, report claims promptly, use return-to-work programs, properly classify employees, and work with an experienced agent to find the best rates.",
    },
    {
      question: "What injuries are covered under workers' comp?",
      answer: "Workers' comp covers injuries and illnesses that occur in the course of employment. This includes sudden injuries like falls or equipment accidents, repetitive stress injuries, occupational diseases, and aggravation of pre-existing conditions.",
    },
  ];

  const stats = [
    { label: 'Average NJ Premium', value: '$1.07', description: 'Per $100 of payroll' },
    { label: 'Claim Frequency', value: '2.8%', description: 'Of workers annually' },
    { label: 'Average Claim Cost', value: '$42,000', description: 'In New Jersey' },
    { label: 'Return to Work', value: '85%', description: 'Within 90 days' },
  ];

  const processSteps = [
    {
      title: 'Get a Quote',
      description: 'Provide payroll and employee information for accurate pricing.',
    },
    {
      title: 'Classification Review',
      description: 'Ensure employees are properly classified for fair rates.',
    },
    {
      title: 'Policy Issuance',
      description: 'Receive certificates of insurance for compliance.',
    },
    {
      title: 'Ongoing Support',
      description: 'Claims assistance, safety resources, and annual reviews.',
    },
  ];

  const relatedServices = [
    {
      title: 'General Liability',
      description: 'Protect against third-party injury and property damage claims',
      href: '/business/general-liability',
    },
    {
      title: 'Commercial Auto',
      description: 'Cover vehicles used for business purposes',
      href: '/business/commercial-auto',
    },
    {
      title: 'Employment Practices',
      description: 'Protection against employment-related lawsuits',
      href: '/business/employment-practices',
    },
  ];

  return (
    <BusinessPageTemplate
      pageData={pageData}
      coverageDetails={coverageDetails}
      benefits={benefits}
      industries={industries}
      faqs={faqs}
      stats={stats}
      processSteps={processSteps}
      relatedServices={relatedServices}
      cta={{
        title: "Get Your Workers' Comp Quote",
        subtitle: 'Protect your employees and comply with NJ law',
        primaryButton: { text: 'Get Quote Now', href: '/quote' },
        secondaryButton: { text: 'Call (201) 812-2184', href: 'tel:2018122184' },
      }}
    />
  );
}