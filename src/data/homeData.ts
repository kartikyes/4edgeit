import type { StatItem, IndustryCard, CaseStudy, PricingTier, FAQItem, ResourceCard, ComparisonRow, FeatureBlock } from '../types';

export const heroStats: StatItem[] = [
  { value: 80, suffix: '+', label: 'Enterprise Clients' },
  { value: 30000, suffix: '+', label: 'Active Users' },
  { value: 200000, suffix: '+', label: 'Course Enrollments' },
];

export const valuePropositionCards: FeatureBlock[] = [
  {
    icon: 'building',
    title: 'Built for Indian Enterprises',
    description: 'Purpose-built for India\'s regulatory, linguistic, and business landscape.',
    bullets: [
      'Multi-tenant SaaS with Indian data sovereignty',
      'ISO 27001 certified infrastructure',
      'Support for 22+ regional Indian languages',
      'GST-compliant invoicing & Indian payment gateways',
      'Compliance with Indian IT Act & data protection laws',
    ],
  },
  {
    icon: 'brain',
    title: 'AI-Powered Intelligence',
    description: 'Artificial intelligence that transforms passive learning into measurable outcomes.',
    bullets: [
      'AI-powered subjective assessment engine (92% accuracy)',
      'Predictive analytics & learning path personalization',
      'Natural language processing for content analysis',
      'Intelligent dashboards for L&D decision-making',
      'Automated competency gap identification',
    ],
  },
  {
    icon: 'layers',
    title: 'Full-Stack Capability',
    description: 'One partner for everything — no vendor juggling, no integration nightmares.',
    bullets: [
      'Enterprise LMS (K-Nest) with 200+ features',
      'VR/AR immersive training development',
      'Serious games & gamification',
      'Custom platform development',
      'End-to-end integration & dedicated support',
    ],
  },
];

export const industryCards: IndustryCard[] = [
  {
    icon: 'factory',
    industry: 'Manufacturing & Industrial',
    clients: 'Hyundai, Toyota, ISUZU',
    bullets: [
      'Safety & compliance training at scale',
      'Equipment operation VR simulations',
      'Multi-plant deployment & management',
      'Skill certification & tracking',
      'Regulatory compliance documentation',
    ],
    link: '/solutions#manufacturing',
  },
  {
    icon: 'landmark',
    industry: 'Banking & Financial Services',
    clients: 'IDFC',
    bullets: [
      'Regulatory compliance training (RBI, SEBI, IRDAI)',
      'Anti-money laundering (AML) training',
      'Customer service excellence programs',
      'Risk management simulations',
      'Branch-level performance tracking',
    ],
    link: '/solutions#bfsi',
  },
  {
    icon: 'flame',
    industry: 'Oil, Gas & Energy',
    clients: 'Bharat Petroleum Corporation',
    bullets: [
      'High-risk safety training with VR',
      'Emergency response simulations',
      'Regulatory compliance (OISD, PNGRB)',
      'Field operator certification',
      'Multi-location deployment',
    ],
    link: '/solutions#energy',
  },
  {
    icon: 'monitor',
    industry: 'Corporate & IT Services',
    clients: 'Infosys, Glenmark',
    bullets: [
      'Large-scale onboarding automation',
      'Technical skill development paths',
      'Leadership development programs',
      'Compliance training management',
      'Global multi-language deployment',
    ],
    link: '/solutions#corporate',
  },
];

export const comparisonData: ComparisonRow[] = [
  {
    feature: 'AI-Powered Assessment',
    typical: 'Basic MCQ auto-grading only',
    fourEdge: 'AI evaluates subjective answers with 92% accuracy — descriptive, analytical & scenario-based',
    fourEdgeHighlight: true,
  },
  {
    feature: 'Custom Feature Development',
    typical: 'Limited to available plugins/extensions',
    fourEdge: 'Full custom development team builds exactly what you need — your features, your workflows',
    fourEdgeHighlight: true,
  },
  {
    feature: 'VR/AR Training',
    typical: 'Not available — requires separate vendor',
    fourEdge: 'In-house VR/AR development team — safety, equipment, soft skills — integrated with LMS',
    fourEdgeHighlight: true,
  },
  {
    feature: 'Data Security & Sovereignty',
    typical: 'International data centers, limited compliance',
    fourEdge: 'Indian data centers, ISO 27001, GDPR, SOC 2 compliant — full data sovereignty',
    fourEdgeHighlight: true,
  },
  {
    feature: 'Integration Capability',
    typical: 'Pre-built connectors only',
    fourEdge: 'Custom API development for any system — HRMS, ERP, CRM, payment gateways, SSO',
    fourEdgeHighlight: true,
  },
  {
    feature: 'Support Model',
    typical: 'Ticket system with 24-48hr SLA',
    fourEdge: 'Dedicated account manager + 4-hour response SLA + on-site support available',
    fourEdgeHighlight: true,
  },
  {
    feature: 'Scalability',
    typical: 'Per-user licensing becomes expensive at scale',
    fourEdge: 'Enterprise pricing that decreases per-user cost at scale — from 50 to 50,000+ users',
    fourEdgeHighlight: true,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    company: 'Bharat Petroleum Corporation',
    industry: 'Oil & Gas',
    badge: 'OIL & GAS',
    challenge: 'Train 10,000+ employees across remote locations on safety protocols with zero downtime and full regulatory compliance.',
    solution: 'Deployed K-Nest LMS with VR safety training modules, multi-location content delivery, and automated compliance tracking.',
    results: [
      '10,000+ employees trained across all locations',
      '95% compliance rate achieved',
      '40% reduction in training costs',
      'Zero safety incidents post-training',
    ],
  },
  {
    company: 'Hyundai Motor India',
    industry: 'Automotive / Manufacturing',
    badge: 'AUTOMOTIVE',
    challenge: 'Certify 2,500+ technicians across dealerships with consistent quality and reduce onboarding time for new hires.',
    solution: 'Custom learning platform with blended learning, VR equipment training, gamified assessments, and dealer-level analytics.',
    results: [
      '2,500+ technicians certified',
      '91% course completion rate',
      '50% faster onboarding for new technicians',
      'Standardized training across all dealerships',
    ],
  },
  {
    company: 'Infosys',
    industry: 'IT Services',
    badge: 'IT SERVICES',
    challenge: 'Scale learning for 30,000+ employees globally, reduce administrative overhead, and improve course completion rates.',
    solution: 'Enterprise K-Nest deployment with AI-powered assessments, gamification, SSO integration, and advanced analytics.',
    results: [
      '30,000+ active users on platform',
      '90% course completion rate (up from 45%)',
      '60% reduction in admin costs',
      'Integrated with existing HRMS & SSO systems',
    ],
  },
];

export const techHighlights: FeatureBlock[] = [
  {
    icon: 'brain',
    title: 'AI-Powered Assessment Engine',
    description: 'Industry-first AI that evaluates subjective, descriptive, and analytical answers — not just MCQs. Our NLP engine achieves 92% accuracy in grading complex responses.',
    useCases: ['Safety knowledge assessment', 'Technical competency evaluation', 'Leadership scenario analysis'],
  },
  {
    icon: 'server',
    title: 'Multi-Tenant Architecture',
    description: 'Single deployment, infinite organizations. Each tenant gets isolated data, custom branding, independent user management, and dedicated reporting — all from one platform.',
    useCases: ['Group companies', 'Training providers', 'Franchise networks'],
  },
  {
    icon: 'trophy',
    title: 'Gamification & Engagement',
    description: 'Transform completion rates from 45% to 90%+ with points, badges, leaderboards, challenges, and social learning features that make training addictive.',
    useCases: ['Sales training competitions', 'Compliance training motivation', 'Onboarding gamification'],
  },
  {
    icon: 'shield',
    title: 'Enterprise Security & Compliance',
    description: 'ISO 27001, GDPR, SOC 2 Type II compliant. Indian data centers with full data sovereignty, role-based access control, SSO/SAML, and comprehensive audit trails.',
    useCases: ['BFSI regulatory compliance', 'Healthcare data protection', 'Government security requirements'],
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter Learning Stack',
    price: '₹2,500',
    period: '/user/year',
    userRange: '50–500 users',
    badge: 'STARTER',
    features: [
      'K-Nest LMS Core Platform',
      'Up to 500 users',
      'Standard content authoring tools',
      'Basic analytics & reporting',
      'Email support (24hr SLA)',
      'Standard gamification features',
      'Mobile app access',
      'Basic API access',
    ],
    cta: 'Request Quote',
    ctaVariant: 'outline',
  },
  {
    name: 'Enterprise Learning Stack',
    price: '₹1,800',
    period: '/user/year',
    userRange: '500–5,000 users',
    badge: 'MOST POPULAR',
    highlighted: true,
    features: [
      'Everything in Starter, plus:',
      'Up to 5,000 users',
      'AI-powered assessment engine',
      'Advanced analytics & dashboards',
      'Dedicated account manager (4hr SLA)',
      'Custom branding & white-labeling',
      'Advanced gamification & social learning',
      'Full API access & custom integrations',
      'SSO/SAML/LDAP integration',
      'Multi-tenant capability',
    ],
    cta: 'Request Quote',
    ctaVariant: 'primary',
  },
  {
    name: 'Immersive Training Solutions',
    price: 'From ₹15L',
    period: 'project-based',
    userRange: 'Custom scope',
    badge: 'IMMERSIVE',
    features: [
      'VR/AR training development',
      'Serious game development',
      'Custom simulation design',
      'Hardware consultation & setup',
      'LMS integration included',
      'Dedicated project team',
      'On-site deployment support',
      'Ongoing content updates',
    ],
    cta: 'Talk to Sales',
    ctaVariant: 'green',
  },
];

export const resourceCards: ResourceCard[] = [
  {
    icon: 'clipboard-list',
    title: 'Enterprise LMS Checklist 2026',
    description: 'The definitive guide to evaluating enterprise learning management systems. 50+ criteria across 8 categories.',
    cta: 'Download Free',
    href: '/resources#lms-checklist',
  },
  {
    icon: 'calculator',
    title: 'ROI Calculator',
    description: 'Calculate your training ROI in 5 minutes. See exactly how much you\'ll save by switching to K-Nest LMS.',
    cta: 'Calculate Now',
    href: '/resources#roi-calculator',
  },
  {
    icon: 'bar-chart-3',
    title: 'Gamification ROI Report 2026',
    description: 'Data-driven insights on how gamification improves training completion by 2x and knowledge retention by 40%.',
    cta: 'Read Report',
    href: '/resources#gamification-report',
  },
  {
    icon: 'book-open',
    title: 'Case Study Library',
    description: 'Detailed case studies from Bharat Petroleum, Hyundai, Infosys, and more. Real results from real enterprises.',
    cta: 'Browse Studies',
    href: '/resources#case-studies',
  },
];

export const clientLogos = [
  'Bharat Petroleum',
  'Infosys',
  'Hyundai',
  'Toyota',
  'IDFC',
  'ISUZU',
  'Glenmark',
];

export const faqData: FAQItem[] = [
  {
    question: 'What makes 4Edge different from other LMS vendors in India?',
    answer: 'We\'re not just an LMS vendor — we\'re a full-stack learning technology partner. We combine an AI-powered LMS (K-Nest), custom software development, VR/AR training, serious games, and strategic consulting under one roof. No other Indian company offers this complete capability. Plus, our AI assessment engine evaluates subjective answers with 92% accuracy — something no other LMS can do.',
  },
  {
    question: 'How long does it take to deploy K-Nest LMS?',
    answer: 'For SaaS deployment, K-Nest can be live in as little as 48 hours for standard configuration. A typical enterprise setup with branding, SSO integration, data migration, and custom workflows takes 2-3 weeks. On-premise deployment takes 8-12 weeks including infrastructure setup, security hardening, and internal approvals.',
  },
  {
    question: 'Can you integrate with our existing HRMS and ERP systems?',
    answer: 'Absolutely. K-Nest has a comprehensive API layer and pre-built connectors for popular enterprise systems including SAP SuccessFactors, Workday, Oracle HCM, Microsoft Azure AD, Okta, and custom HRMS platforms. Our integration team handles the entire process, typically completing integrations in 1-2 weeks.',
  },
  {
    question: 'Is our data secure? Where are your servers located?',
    answer: 'Data security is our top priority. We\'re ISO 27001 certified and GDPR compliant. All data is stored in Indian data centers (AWS Mumbai / Azure Central India) ensuring full data sovereignty. We implement role-based access control, AES-256 encryption at rest, TLS 1.3 in transit, and maintain comprehensive audit trails.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We have deep expertise in Manufacturing (Hyundai, Toyota, ISUZU), Oil & Gas (Bharat Petroleum), Banking & Financial Services (IDFC), IT Services (Infosys), and Pharmaceuticals (Glenmark). Our solutions are tailored to each industry\'s specific regulatory, compliance, and training requirements.',
  },
  {
    question: 'Do you provide VR/AR training solutions?',
    answer: 'Yes, we have an in-house VR/AR development team that creates immersive training experiences. We\'ve built VR safety training for oil & gas, equipment operation simulations for manufacturing, and AR maintenance guides. These integrate directly with K-Nest LMS for unified tracking and analytics.',
  },
  {
    question: 'What support do you provide after deployment?',
    answer: 'Every client gets a dedicated account manager. Our Starter plan includes email support with 24-hour SLA. Enterprise plans get 4-hour response SLA with phone support. We also provide regular platform updates, performance optimization, and quarterly business reviews to ensure you\'re getting maximum value.',
  },
  {
    question: 'Can you develop custom training games and simulations?',
    answer: 'Absolutely. We\'ve developed 100+ serious games including cybersecurity training games, compliance simulations, sales training gamification, and leadership decision-making scenarios. We work with Unity, Unreal Engine, and HTML5 to deliver across web, mobile, and VR platforms.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer flexible pricing: Starter (₹2,500/user/year for 50-500 users), Enterprise (₹1,800/user/year for 500-5,000 users), and custom project-based pricing for VR/AR and game development (starting from ₹15L). Volume discounts are available for large deployments. All plans include implementation support.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes! We offer a 30-day free trial of K-Nest LMS with no credit card required. You get full access to core features, up to 50 users, sample content, and dedicated onboarding support. We also provide free live demos where our team walks you through the platform tailored to your industry.',
  },
];
