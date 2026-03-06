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
      { label: 'E‑Learning / XR / AR / VR Solutions', href: '/services/e-learning-xr-ar-vr', description: 'Immersive training that feels real' },
      { label: 'Consulting & Architecture', href: '/services/consulting-architecture', description: 'Make the right technology decisions' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { label: 'Manufacturing Training Solutions', href: '/solutions/manufacturing-training' },
      { label: 'Healthcare Learning Solutions', href: '/solutions/healthcare-learning' },
      { label: 'Corporate L&D Solutions', href: '/solutions/corporate-ld' },
      { label: 'EdTech Platforms', href: '/solutions/edtech-platforms' },
      { label: 'Starter Learning Stack', href: '/solutions/starter-learning-stack' },
      { label: 'Enterprise Learning Stack', href: '/solutions/enterprise-learning-stack' },
      { label: 'Immersive Training Solutions', href: '/solutions/immersive-training' },
      { label: 'Workforce Skill Transformation', href: '/solutions/workforce-transformation' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Blogs', href: '/resources/blogs', description: 'Insights & thought leadership' },
      { label: 'Case Studies', href: '/resources/case-studies', description: 'Real results from real enterprises' },
      { label: 'FAQs', href: '/resources/faqs', description: 'Common questions answered' },
      { label: 'LMS Checklist 2026', href: '/resources/lms-checklist-2026', description: 'Enterprise LMS evaluation guide' },
      { label: 'SMB Playbook 2026', href: '/resources/smb-playbook-2026' },
    ],
  },
  {
    label: 'Company',
    children: [
      { label: 'About Us', href: '/company/about', description: 'Our story & mission' },
      { label: 'Why 4Edge', href: '/company/why-4edge', description: 'What makes us different' },
      { label: 'Our Clients', href: '/company/clients', description: 'Trusted by industry leaders' },
      { label: 'Careers', href: '/company/careers', description: 'Join our team' },
      { label: 'Contact Us', href: '/company/contact', description: 'Get in touch' },
    ],
  },
];
