import type { StatItem, FeatureBlock, CaseStudy, FAQItem, ComparisonRow } from '../types';

export const knestHeroStats: StatItem[] = [
  { value: 70, suffix: '+', label: 'Enterprise Clients' },
  { value: 30000, suffix: '+', label: 'Active Users' },
  { value: 200000, suffix: '+', label: 'Course Completions' },
  { value: 99.9, suffix: '%', label: 'Uptime SLA' },
];

export const knestQuickBenefits = [
  {
    title: 'Deploy Fast',
    desc: 'Launch in 48 hours with SaaS deployment or on-premise installation. Pre-configured best practices, industry templates, and instant scalability mean you\'re training employees this week, not next quarter.',
    icon: 'rocket',
  },
  {
    title: 'Scale Infinitely',
    desc: 'Multi-tenant architecture supports unlimited subsidiaries, departments, or client organizations. Proven with clients managing 30,000+ concurrent users across 100+ locations.',
    icon: 'trending-up',
  },
  {
    title: 'Stay Compliant',
    desc: 'Audit-ready reporting for ISO, OSHA, RBI, SEBI, and industry-specific regulations. Automated compliance tracking, immutable records, and data sovereignty guarantee you pass every audit.',
    icon: 'shield',
  },
];

export const knestFeatures: FeatureBlock[] = [
  {
    icon: 'brain',
    title: 'AI-Powered Assessment Engine',
    description: 'Industry-first AI engine that evaluates subjective, descriptive, and analytical answers with 92% accuracy. Goes far beyond simple MCQ auto-grading.',
    bullets: [
      'Natural language processing for answer evaluation',
      'Descriptive, analytical & scenario-based assessment',
      'Automatic rubric-based scoring',
      'Plagiarism and AI-content detection',
      'Multi-language assessment support',
    ],
    businessImpact: '60% reduction in assessment time, 92% accuracy in subjective grading',
    useCases: ['Safety knowledge assessment', 'Technical competency evaluation', 'Leadership scenario analysis'],
  },
  {
    icon: 'server',
    title: 'Multi-Tenant Architecture',
    description: 'A single deployment that serves infinite organizations with complete data isolation, custom branding, and independent management for each tenant.',
    bullets: [
      'Complete data isolation per tenant',
      'Custom branding, domain & theme per organization',
      'Independent user management & role hierarchy',
      'Tenant-specific reporting & analytics',
      'Centralized super-admin dashboard',
    ],
    businessImpact: 'Serve 100+ organizations from a single deployment, 70% infrastructure cost savings',
    useCases: ['Group companies', 'Training providers', 'Franchise networks'],
  },
  {
    icon: 'trophy',
    title: 'Gamification & Engagement',
    description: 'Complete gamification suite that transforms course completion rates from 45% to 90%+ through game mechanics, social features, and healthy competition.',
    bullets: [
      'Points system with customisable reward structures',
      'Badges and achievements (visual progress indicators)',
      'Leaderboards (individual, team, department-level)',
      'Team challenges and competitions',
      'Streaks and milestones for sustained engagement',
      'Social learning feeds (peer-to-peer knowledge sharing)',
    ],
    businessImpact: 'Manufacturing clients saw completion rates jump from 38% to 91% within 6 weeks. Employees requested more training modules.',
    useCases: ['Sales training competitions', 'Compliance training motivation', 'Onboarding gamification'],
    extraGroups: [
      {
        title: 'Psychology Behind It',
        items: [
          'Achievement motivation (collecting badges)',
          'Social recognition (leaderboard visibility)',
          'Progress visualisation (streaks, progress bars)',
          'Friendly competition (team challenges)',
          'Intrinsic engagement (learning becomes enjoyable)',
        ],
      },
    ],
  },
  {
    icon: 'layers',
    title: 'Blended Learning Management',
    description: 'Seamlessly combine e-learning, instructor-led training (ILT), virtual classrooms, and on-the-job assessments. Track everything in unified reporting.',
    bullets: [
      'Online course delivery (SCORM, xAPI, HTML5, video)',
      'Classroom session scheduling and attendance tracking',
      'Virtual classroom integration (Zoom, MS Teams, WebEx)',
      'On-the-job practical assessments (supervisor sign-off)',
      'Unified learner transcript (all modalities in one record)',
    ],
    businessImpact: 'Toyota combines online theory, classroom practicals, and on-the-job evaluations for dealership technician certification in a single system, eliminating data silos.',
    useCases: ['Blended onboarding', 'Technical certifications', 'Leadership workshops'],
    workflowSteps: [
      { phase: 'Step 1', title: 'Online Module', desc: 'Safety fundamentals (self-paced)' },
      { phase: 'Step 2', title: 'Classroom Session', desc: 'Hands-on equipment training (scheduled)' },
      { phase: 'Step 3', title: 'Virtual Session', desc: 'Expert Q&A (live webinar)' },
      { phase: 'Step 4', title: 'Practical Assessment', desc: 'Supervisor sign-off (on-the-job)' },
      { phase: 'Step 5', title: 'Certification', desc: 'Auto-issued upon all steps complete' },
    ],
  },
  {
    icon: 'bar-chart-3',
    title: 'Advanced Analytics & Reporting',
    description: 'Real-time dashboards, predictive analytics, and custom reports turn training data into strategic insights. Know what\'s working, what\'s not, and what to do about it.',
    bullets: [
      'Real-time performance dashboards (learner, course, organisation-level)',
      'Skills gap analysis (predictive, not reactive)',
      'Completion rate tracking and trend analysis',
      'ROI measurement (training cost vs. business impact)',
      'Custom report builder (no coding required)',
      'Scheduled automated reports (daily, weekly, monthly)',
    ],
    businessImpact: 'BFSI client identifies underperforming teams before compliance deadlines, intervenes with targeted training, achieves 100% certification vs. previous 78%.',
    useCases: ['Executive reporting', 'Team performance tracking', 'Compliance monitoring'],
    extraGroups: [
      {
        title: 'Analytics Capabilities',
        items: [
          'Learner engagement metrics (time spent, attempts, completion)',
          'Assessment performance analysis (question-level insights)',
          'Certification status tracking (expiry alerts)',
          'Compliance readiness (audit-ready exports)',
          'Comparative analytics (department vs. department, location vs. location)',
        ],
      },
    ],
  },
  {
    icon: 'smartphone',
    title: 'Mobile Learning (iOS & Android)',
    description: 'Native mobile apps for iOS and Android with offline content access. Perfect for field workers, remote teams, and on-the-go learning.',
    bullets: [
      'Native apps (not just responsive web)',
      'Offline content download (train without internet)',
      'Mobile-optimised assessments (touch-friendly)',
      'Push notifications (deadline reminders, new content alerts)',
      'QR code access (scan to launch course)',
      'Camera integration (photo/video upload for practical assessments)',
    ],
    businessImpact: 'BPCL field technicians access safety protocols offline at remote oil rigs. Content syncs automatically when connectivity returns. Zero training downtime.',
    useCases: ['Field worker training', 'Sales team on-the-go learning', 'Remote workforce upskilling'],
    extraGroups: [
      {
        title: 'Mobile-Specific Features',
        items: [
          'Microlearning modules (5–10 minute bite-sized content)',
          'Just-in-time performance support (quick reference guides)',
          'Offline quiz attempts (saved locally, sync later)',
          'Mobile-first course authoring (create on phone/tablet)',
        ],
      },
    ],
  },
  {
    icon: 'shield',
    title: 'Enterprise Security & Compliance',
    description: 'Your training data is mission-critical. K-Nest protects it with enterprise-grade security, compliance certifications, and data sovereignty options.',
    bullets: [],
    businessImpact: 'IDFC Bank required India-based data hosting for RBI compliance. K-Nest deployed on Indian AWS infrastructure with IP whitelisting — data never left Indian jurisdiction. Passed RBI audit with zero findings.',
    useCases: ['BFSI regulatory compliance', 'Healthcare data protection', 'Government security requirements'],
    securityCategories: [
      {
        category: 'Access Control',
        items: ['Role-based permissions (RBAC)', 'SSO (SAML, OAuth)', 'Multi-factor authentication (MFA)'],
      },
      {
        category: 'Data Protection',
        items: ['AES-256 encryption at rest', 'TLS 1.3 encryption in transit', 'IP whitelisting'],
      },
      {
        category: 'Infrastructure',
        items: ['India-based hosting options', 'Geographic redundancy', 'DDoS protection', 'Regular penetration testing'],
      },
      {
        category: 'Audit & Compliance',
        items: ['Complete audit logs (immutable)', 'Tamper-proof completion records', 'Automated compliance reporting', 'Data retention policies'],
      },
    ],
    certifications: [
      'ISO 27001 (Information Security Management)',
      'GDPR Compliance',
      'SOC 2 Type II (in progress)',
      'Data residency compliance (India, EU, US options)',
    ],
    complianceReporting: [
      'ISO training requirements',
      'OSHA safety certifications',
      'RBI banking compliance',
      'SEBI financial services',
      'DGMS/PESO (oil & gas)',
      'Industry-specific regulations',
    ],
  },
  {
    icon: 'edit',
    title: 'Content Management & Authoring',
    description: 'Built-in content authoring tools plus support for all major content standards — upload, create, and manage learning content effortlessly.',
    bullets: [
      'SCORM 1.2 & 2004 support',
      'xAPI/Tin Can support',
      'Built-in course authoring tool',
      'Video hosting & streaming',
      'Content library & repository',
      'Version control & content lifecycle',
    ],
    businessImpact: '70% faster content deployment',
    useCases: ['Rapid course creation', 'Compliance content management', 'Video-based training'],
  },
  {
    icon: 'award',
    title: 'Certification & Badge Management',
    description: 'Automate certification workflows, track expiry dates, schedule re-certification, and issue digital credentials.',
    bullets: [
      'Automated certification workflows',
      'Expiry tracking & renewal reminders',
      'Digital badge issuance (Open Badges)',
      'Certificate designer & templates',
      'Compliance certificate auto-generation',
    ],
    businessImpact: '95% on-time certification renewal rate',
    useCases: ['Safety certifications', 'Professional credentials', 'Regulatory compliance'],
  },
  {
    icon: 'plug',
    title: 'Integrations & APIs',
    description: 'Connect K-Nest with your entire enterprise ecosystem through pre-built connectors and a comprehensive RESTful API.',
    bullets: [
      'RESTful API with comprehensive documentation',
      'Pre-built HRMS connectors (SAP, Workday, Oracle)',
      'SSO integration (Azure AD, Okta, ADFS)',
      'Payment gateway integration',
      'Webhook support for real-time events',
      'Custom API development available',
    ],
    businessImpact: 'Eliminates manual data sync, saves 20+ hours/week',
    useCases: ['HRMS integration', 'Single sign-on', 'Custom workflows'],
  },
];

export const knestTechSpecs = {
  architecture: [
    { label: 'Architecture', value: 'Multi-tenant SaaS / On-Premise / Hybrid' },
    { label: 'Backend', value: 'Microservices (Node.js, Python, Java)' },
    { label: 'Frontend', value: 'React.js (SPA), Native iOS & Android' },
    { label: 'Database', value: 'PostgreSQL, MongoDB, Redis' },
    { label: 'Cloud', value: 'AWS (Mumbai), Azure (Central India)' },
    { label: 'CDN', value: 'CloudFront / Azure CDN' },
    { label: 'AI/ML', value: 'TensorFlow, spaCy NLP, Custom Models' },
  ],
  performance: [
    { label: 'Concurrent Users', value: '10,000+ simultaneous' },
    { label: 'Page Load Time', value: '<2 seconds globally' },
    { label: 'Uptime SLA', value: '99.9% guaranteed' },
    { label: 'API Response Time', value: '<200ms average' },
    { label: 'Video Streaming', value: 'Adaptive bitrate, 4K support' },
  ],
  browser: ['Chrome 90+', 'Firefox 88+', 'Safari 14+', 'Edge 90+', 'iOS Safari 14+', 'Chrome Android 90+'],
  accessibility: ['WCAG 2.1 AA compliant', 'Screen reader compatible', 'Keyboard navigable', 'RTL language support'],
};

export const deploymentOptions = [
  {
    title: 'Cloud SaaS',
    tagline: 'Fastest to deploy',
    timeline: '48 hours – 3 weeks',
    features: ['Zero infrastructure management', 'Automatic updates', 'Auto-scaling', 'Indian data centers', '99.9% uptime SLA'],
    price: 'From ₹1,800/user/year',
    recommended: true,
  },
  {
    title: 'On-Premise',
    tagline: 'Maximum control',
    timeline: '8–12 weeks',
    features: ['Full data control', 'Your infrastructure', 'Custom security policies', 'Air-gapped option', 'Dedicated support'],
    price: 'Custom pricing',
    recommended: false,
  },
  {
    title: 'Hybrid Cloud',
    tagline: 'Best of both',
    timeline: '6–10 weeks',
    features: ['Sensitive data on-premise', 'Application in cloud', 'Flexible scaling', 'Regulatory compliance', 'Cost optimized'],
    price: 'Custom pricing',
    recommended: false,
  },
];

export const knestComparison: ComparisonRow[] = [
  { feature: 'AI Assessment', typical: 'MCQ only', fourEdge: 'Subjective + MCQ (92% accuracy)', fourEdgeHighlight: true },
  { feature: 'Deployment', typical: '4–12 weeks', fourEdge: '48 hours – 3 weeks', fourEdgeHighlight: true },
  { feature: 'Multi-Tenant', typical: 'Limited/Extra cost', fourEdge: 'Built-in, unlimited tenants', fourEdgeHighlight: true },
  { feature: 'Gamification', typical: 'Basic badges', fourEdge: 'Complete suite (points, leaderboards, challenges, social)', fourEdgeHighlight: true },
  { feature: 'Mobile Apps', typical: 'Responsive web only', fourEdge: 'Native iOS & Android + offline', fourEdgeHighlight: true },
  { feature: 'Data Sovereignty', typical: 'International servers', fourEdge: 'Indian data centers', fourEdgeHighlight: true },
  { feature: 'Custom Development', typical: 'Not available', fourEdge: 'Full custom dev team', fourEdgeHighlight: true },
  { feature: 'VR/AR Integration', typical: 'Third-party only', fourEdge: 'In-house development + LMS integration', fourEdgeHighlight: true },
  { feature: 'Support SLA', typical: '24–48 hours', fourEdge: '4-hour response', fourEdgeHighlight: true },
  { feature: 'Pricing', typical: 'Per-user, increasing', fourEdge: 'Volume discounts at scale', fourEdgeHighlight: true },
];

export const knestCaseStudies: CaseStudy[] = [
  {
    company: 'Bharat Petroleum Corporation',
    industry: 'Oil & Gas',
    badge: 'OIL & GAS',
    challenge: 'Train 10,000+ employees across remote refineries and plants on critical safety protocols with zero downtime.',
    solution: 'Deployed K-Nest LMS with VR safety modules, multi-location content delivery, automated compliance tracking, and offline mobile access.',
    results: ['10,000+ employees trained', '95% compliance rate', '40% cost reduction', 'Zero safety incidents post-training'],
    testimonial: '"K-Nest transformed our safety training from a compliance checkbox to a culture of excellence."',
  },
  {
    company: 'Infosys',
    industry: 'IT Services',
    badge: 'IT SERVICES',
    challenge: 'Scale learning for 30,000+ employees globally while reducing admin overhead and improving completion rates.',
    solution: 'Enterprise K-Nest deployment with AI assessments, gamification, SSO integration, advanced analytics, and multi-language support.',
    results: ['30,000+ active users', '90% completion rate (from 45%)', '60% admin cost reduction', 'HRMS & SSO integrated'],
    testimonial: '"The gamification features alone doubled our course completion rates within 3 months."',
  },
  {
    company: 'Hyundai Motor India',
    industry: 'Automotive',
    badge: 'AUTOMOTIVE',
    challenge: 'Certify 2,500+ technicians across dealerships with consistent quality and track competency development.',
    solution: 'Custom K-Nest deployment with blended learning, VR equipment simulations, gamified assessments, and dealer-level reporting.',
    results: ['2,500+ certified technicians', '91% completion rate', '50% faster onboarding', 'Standardized across dealerships'],
    testimonial: '"Our technician quality scores improved by 35% within the first year of using K-Nest."',
  },
];

export const knestFAQs: FAQItem[] = [
  { question: 'How long does it take to deploy K-Nest LMS?', answer: 'SaaS deployment can be live in 48 hours for standard configuration. Enterprise setups with SSO, branding, and data migration typically take 2-3 weeks. On-premise deployments require 8-12 weeks including infrastructure setup.' },
  { question: 'Can K-Nest handle 10,000+ concurrent users?', answer: 'Yes. Our architecture supports 10,000+ simultaneous users with auto-scaling. We regularly handle peak loads during compliance deadlines and training campaigns.' },
  { question: 'How does the AI Assessment Engine work?', answer: 'Our NLP-based AI engine analyzes subjective answers using learned rubrics, context understanding, and scoring models. It evaluates descriptive, analytical, and scenario-based responses with 92% accuracy compared to expert human graders.' },
  { question: 'What content formats do you support?', answer: 'K-Nest supports SCORM 1.2 & 2004, xAPI/Tin Can, AICC, video (MP4, WebM), PDF, PPT, HTML5 packages, and our built-in authoring tool output. Virtually any digital content format works.' },
  { question: 'Can you integrate with our existing systems?', answer: 'Yes. We have pre-built connectors for SAP SuccessFactors, Workday, Oracle HCM, Azure AD, Okta, and custom HRMS. Our API supports any integration requirement.' },
  { question: 'Where is our data stored?', answer: 'All data is hosted in Indian data centers — AWS Mumbai or Azure Central India. We offer on-premise deployment for organizations requiring complete data control.' },
  { question: 'Is K-Nest mobile-friendly?', answer: 'K-Nest has native iOS and Android apps with offline support, push notifications, and a fully responsive web interface. Field workers can download content and complete training without internet connectivity.' },
  { question: 'What support plans are available?', answer: 'Starter: Email support (24hr SLA). Enterprise: Dedicated account manager + 4hr response SLA + phone support. Premium: On-site support + quarterly business reviews.' },
  { question: 'Can we white-label the platform?', answer: 'Yes. Complete white-labeling is available — custom domain, logo, colors, email templates, certificate designs, and mobile app branding.' },
  { question: 'What happens if we outgrow our plan?', answer: 'Seamless plan upgrades with no data migration needed. Our pricing decreases per-user at higher tiers, so scaling is actually more cost-effective.' },
  { question: 'Do you provide training for our admin team?', answer: 'Every deployment includes admin training. Enterprise plans include dedicated training sessions, video tutorials, and ongoing support for your L&D team.' },
  { question: 'What security certifications do you hold?', answer: 'ISO 27001, GDPR compliant, SOC 2 Type II ready. AES-256 encryption, TLS 1.3, RBAC, comprehensive audit trails, and regular penetration testing.' },
  { question: 'Can multiple organizations use one deployment?', answer: 'Yes. K-Nest\'s multi-tenant architecture allows unlimited organizations with complete data isolation, custom branding, and independent management from a single deployment.' },
  { question: 'What\'s included in the 30-day free trial?', answer: 'Full access to core features, up to 50 users, sample content, dedicated onboarding support, and access to our implementation team for configuration.' },
  { question: 'How do you handle data migration?', answer: 'We have a dedicated data migration team that handles the complete process — mapping, cleaning, importing, and validating. Typical migration takes 1-2 weeks depending on data volume.' },
];
