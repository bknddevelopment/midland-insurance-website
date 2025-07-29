export const COMPANY_INFO = {
  name: 'Midland Associates Insurance Services',
  phone: '(201) 812-2184',
  email: 'Service@midlandinsurance.biz',
  address: {
    street: '345 RT 17 STE 22',
    city: 'Upper Saddle River',
    state: 'NJ',
    zip: '07458',
    full: '345 RT 17 STE 22, Upper Saddle River, NJ 07458'
  },
  hours: {
    weekdays: 'Mon-Fri: 8:30 AM - 5:00 PM',
    saturday: 'Sat: By Appointment',
    sunday: 'Sun: Closed'
  },
  social: {
    facebook: 'https://www.facebook.com/midlandassociates',
    linkedin: 'https://www.linkedin.com/company/midland-associates',
    google: 'https://www.google.com/maps/place/Midland+Associates+Insurance+Services'
  }
};

export const formatPhoneForTel = (phone: string) => {
  return `tel:${phone.replace(/\D/g, '')}`;
};