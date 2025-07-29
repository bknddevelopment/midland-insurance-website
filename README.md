# Midland Associates Insurance Services Website

A modern, SEO-optimized website for Midland Associates Insurance Services built with Next.js 14, TypeScript, and Tailwind CSS.

## 🏗️ Architecture & Design System

This website follows the **"About Page Pattern"** design system with strict structural rules:

### Critical Design Rules
- **Exactly 2 White Sections per page**: First white section (after hero) and FAQ section (always last)
- **Everything else**: Dark blue background (`bg-slate-900`) with circle pattern
- **Dividers**: Only appear when dark blue touches white sections
- **Badge/Heading Styling**: Background-based styling system
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Page Structure Template
1. **Hero Section** (Always Dark)
2. **Divider** (Dark to White)
3. **First White Section** (Content)
4. **Divider** (White to Dark)
5. **Dark Section(s)** (Multiple sections allowed)
6. **Divider** (Dark to White)
7. **FAQ Section** (Always Last White Section)

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
MidlandInsurance/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── [...pages]/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Divider.tsx
│   └── [...components]/
├── public/
│   └── [...assets]/
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## 🎨 Design System Components

### Badge Styling
- **Light backgrounds**: `badge-light` (blue background, white text)
- **Dark backgrounds**: `badge-dark` (white background, blue text)

### Heading Styling
- **Light backgrounds**: `heading-light` (dark text)
- **Dark backgrounds**: `heading-dark` (white text)

### Button Styling
- **Primary**: Blue background with hover effects
- **Secondary**: Transparent with border
- **Transition**: `btn-transition` class for smooth animations

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MidlandInsurance
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 📊 SEO Features

- **Structured Data**: Local business schema markup
- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Performance**: Optimized images and code splitting
- **Accessibility**: ARIA labels and semantic HTML
- **Core Web Vitals**: Optimized for Google's ranking factors

## 🏢 Business Information

- **Company**: Midland Associates Insurance Services LLC
- **Address**: 345 RT 17 STE 22, Upper Saddle River, NJ 07458
- **Phone**: (201) 812-2184
- **Email**: Service@midlandinsurance.biz
- **Hours**: Mon-Fri: 9:00 AM - 5:00 PM

## 📱 Features

- **Responsive Design**: Mobile-first approach
- **Interactive Navigation**: Mega menu with service categories
- **Smooth Animations**: Framer Motion for enhanced UX
- **Contact Integration**: Click-to-call and email functionality
- **Google Maps Integration**: Location and reviews
- **Performance Optimized**: Fast loading with Next.js optimization

## 🎯 Service Categories

### Personal Insurance
- Auto Insurance
- Homeowners Insurance
- Condo Insurance
- Renters Insurance
- Boat Insurance
- Classic Auto Insurance
- Motorcycle Insurance
- Umbrella Insurance

### Business Insurance
- Business Owners Policy (BOP)
- General Liability
- Commercial Auto
- Workers Compensation
- Professional Liability
- Cyber Liability
- Bonds
- Builders Risk

## 🔒 Security Features

- **Headers**: Security headers configured
- **HTTPS**: SSL/TLS encryption
- **Form Validation**: Client and server-side validation
- **XSS Protection**: Content Security Policy

## 📈 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized LCP, FID, CLS
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

© 2024 Midland Associates Insurance Services LLC. All rights reserved.

## 🤝 Contributing

This is a private project for Midland Associates Insurance Services. For any updates or modifications, please contact the development team.

## 📞 Support

For technical support or questions about the website, please contact the development team or Midland Associates Insurance Services directly at (201) 812-2184. 