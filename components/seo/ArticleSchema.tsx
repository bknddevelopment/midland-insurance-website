import React from 'react';
import { COMPANY_INFO } from '@/lib/utils/constants';

interface ArticleSchemaProps {
  title: string;
  description: string;
  publishedDate: string;
  modifiedDate?: string;
  author?: string;
  imageUrl?: string;
  keywords?: string[];
}

export default function ArticleSchema({
  title,
  description,
  publishedDate,
  modifiedDate,
  author = 'Midland Associates Insurance Team',
  imageUrl,
  keywords = [],
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://midlandinsurance.biz',
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: 'https://midlandinsurance.biz/photos/logo/midland-associates-logo.png',
      },
    },
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    image: imageUrl || 'https://midlandinsurance.biz/og/default-article.jpg',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': typeof window !== 'undefined' ? window.location.href : '',
    },
    keywords: keywords.join(', '),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}