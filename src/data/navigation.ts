import type { NavItem } from '../types';

export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    children: [
      { label: 'K-Nest LMS', href: '/products/k-nest-lms', description: 'AI-Powered Enterprise Learning Management System' },
    ],
  },
  {
    label: 'Services',
    children: [
      { label: 'Learning & Training Solutions', href: '/services/learning-training-solutions', description: 'End-to-end learning technology partnership' },
      { label: 'Custom Software & Platforms', href: '/services/custom-software-platforms', description: 'Build exactly what you need' },
      { label: 'Game Development & Simulations', href: '/services/game-development-simulations', description: 'Engaging serious games & simulations' },
      { label: 'E-Learning / XR / AR / VR Solutions', href: '/services/vr-ar-xr-solutions', description: 'Immersive training that feels real' },
      { label: 'Consulting & Architecture', href: '/services/consulting-architecture', description: 'Make the right technology decisions' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { label: 'Manufacturing Training Solutions', href: '/solutions#manufacturing', description: 'Industry-specific training for manufacturing' },
      { label: 'Healthcare Learning Solutions', href: '/solutions#healthcare', description: 'Compliance-ready healthcare training' },
      { label: 'Corporate L&D Solutions', href: '/solutions#corporate', description: 'Enterprise learning & development' },
      { label: 'EdTech Platforms', href: '/solutions#edtech', description: 'Scalable education technology' },
      { label: 'Starter Learning Stack', href: '/solutions#starter', description: 'For growing organizations' },
      { label: 'Enterprise Learning Stack', href: '/solutions#enterprise', description: 'Full-scale enterprise deployment' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Blogs', href: '/resources#blogs', description: 'Insights & thought leadership' },
      { label: 'Case Studies', href: '/resources#case-studies', description: 'Real results from real enterprises' },
      { label: 'FAQs', href: '/resources#faqs', description: 'Common questions answered' },
      { label: 'LMS Checklist 2026', href: '/resources#lms-checklist', description: 'Enterprise LMS evaluation guide' },
    ],
  },
  {
    label: 'Company',
    children: [
      { label: 'About Us', href: '/company#about', description: 'Our story & mission' },
      { label: 'Why 4Edge', href: '/company#why-4edge', description: 'What makes us different' },
      { label: 'Our Clients', href: '/company#clients', description: 'Trusted by industry leaders' },
      { label: 'Careers', href: '/company#careers', description: 'Join our team' },
      { label: 'Contact Us', href: '/company#contact', description: 'Get in touch' },
    ],
  },
];
