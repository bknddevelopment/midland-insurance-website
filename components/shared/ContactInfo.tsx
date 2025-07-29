import React from 'react';
import Link from 'next/link';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';

interface ContactInfoProps {
  variant?: 'vertical' | 'horizontal' | 'compact';
  showHours?: boolean;
  className?: string;
}

export default function ContactInfo({
  variant = 'vertical',
  showHours = true,
  className = ''
}: ContactInfoProps) {
  const businessInfo = {
    phone: '(201) 812-2184',
    email: 'Service@midlandinsurance.biz',
    address: '345 RT 17 STE 22, Upper Saddle River, NJ 07458',
    hours: [
      { day: 'Monday - Friday', time: '9:00 AM - 5:00 PM' },
      { day: 'Saturday', time: 'By Appointment' },
      { day: 'Sunday', time: 'Closed' }
    ]
  };

  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap gap-6 ${className}`}>
        <Link 
          href={`tel:${businessInfo.phone}`}
          className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
        >
          <PhoneIcon className="h-5 w-5 mr-2" />
          {businessInfo.phone}
        </Link>
        <Link 
          href={`mailto:${businessInfo.email}`}
          className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
        >
          <EnvelopeIcon className="h-5 w-5 mr-2" />
          {businessInfo.email}
        </Link>
      </div>
    );
  }

  return (
    <div className={`${variant === 'horizontal' ? 'flex flex-wrap gap-8' : 'space-y-4'} ${className}`}>
      <div className="flex items-start">
        <PhoneIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-gray-900">Phone</p>
          <Link 
            href={`tel:${businessInfo.phone}`}
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            {businessInfo.phone}
          </Link>
        </div>
      </div>
      
      <div className="flex items-start">
        <EnvelopeIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-gray-900">Email</p>
          <Link 
            href={`mailto:${businessInfo.email}`}
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            {businessInfo.email}
          </Link>
        </div>
      </div>
      
      <div className="flex items-start">
        <MapPinIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-gray-900">Office</p>
          <p className="text-gray-600">{businessInfo.address}</p>
        </div>
      </div>
      
      {showHours && (
        <div className="flex items-start">
          <ClockIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-gray-900">Hours</p>
            <div className="text-gray-600">
              {businessInfo.hours.map((schedule) => (
                <p key={schedule.day}>
                  {schedule.day}: {schedule.time}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}