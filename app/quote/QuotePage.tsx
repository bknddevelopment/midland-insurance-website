'use client';

import { useEffect } from 'react';
import { EXTERNAL_URLS } from '@/lib/constants/urls';

export default function QuotePage() {
  useEffect(() => {
    // Redirect to the N8N form
    window.location.href = EXTERNAL_URLS.QUOTE_FORM;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Redirecting to quote form...
        </h1>
        <p className="text-gray-600">
          If you are not redirected automatically, 
          <a 
            href={EXTERNAL_URLS.QUOTE_FORM} 
            className="text-primary-600 hover:text-primary-700 ml-1"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
}