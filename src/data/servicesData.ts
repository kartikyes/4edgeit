import type { FAQItem, CaseStudy, TimelineStep, GameTypeEntry, GamificationElementEntry, VRSolutionEntry, HardwareEntry, ConsultingServiceEntry, ConsultingScenarioEntry, ConsultingApproachEntry, ConsultingPricingRow } from '../types';

// ========================================
// Learning & Training Solutions Data
// ========================================
export const ltsMethodology: TimelineStep[] = [
  { phase: 'Phase 1', title: 'Discovery', duration: '1–2 weeks', description: 'Needs analysis, stakeholder interviews, current state assessment, gap identification', deliverables: ['Needs Assessment Report', 'Stakeholder Map', 'Gap Analysis'] },
  { phase: 'Phase 2', title: 'Design', duration: '2–3 weeks', description: 'Solution architecture, content strategy, learning journey design, technology selection', deliverables: ['Solution Blueprint', 'Content Strategy', 'Project Plan'] },
  { phase: 'Phase 3', title: 'Build', duration: '4–8 weeks', description: 'Platform configuration, content development, integration, customization', deliverables: ['Configured Platform', 'Custom Content', 'Integrations'] },
  { phase: 'Phase 4', title: 'Launch', duration: '1–2 weeks', description: 'Pilot rollout, user training, go-live support, communication', deliverables: ['Go-Live Checklist', 'Training Materials', 'Launch Plan'] },
  { phase: 'Phase 5', title: 'Optimize', duration: 'Ongoing', description: 'Analytics review, content updates, feature enhancements, strategic consultation', deliverables: ['Quarterly Reports', 'Optimization Plan', 'ROI Analysis'] },
];

export const ltsCaseStudies: CaseStudy[] = [
  { company: 'Leading Automotive OEM', industry: 'Manufacturing', badge: 'MANUFACTURING', challenge: 'Train 5,000+ factory workers on ISO 45001 safety requirements across 8 plants.', solution: 'Blended learning program (e-learning + practical assessments) with mobile offline access.', results: ['5,000 workers certified in 4 months', '98% first-time pass rate on safety assessments', 'Zero audit findings during ISO inspection', '35% reduction in safety incidents year-over-year'] },
  { company: 'Mid-Size Bank', industry: 'Banking & Finance', badge: 'BFSI', challenge: 'Achieve RBI compliance for AML/KYC training across 200+ branches.', solution: 'Automated compliance training program with role-based certification.', results: ['100% compliance achieved in 6 weeks', 'Automated certificate tracking and expiry alerts', 'Audit-ready reporting reduced prep time by 80%', 'Branch staff trained without operational disruption'] },
  { company: 'IT Services Company', industry: 'IT Services', badge: 'IT SERVICES', challenge: 'Upskill 1,000+ developers on new cloud technologies.', solution: 'Custom technical training program with hands-on labs and certifications.', results: ['1,200 certifications achieved in 6 months', '85% pass rate on industry certifications (AWS, Azure)', 'Client billable hours increased 25%', 'Internal promotion rate increased 40%'] },
];

export const ltsFAQs: FAQItem[] = [
  { question: 'How long does a typical LMS implementation take?', answer: 'SaaS deployment: 2–4 weeks for standard setup, 4–8 weeks with complex integrations. On-premise: 8–12 weeks including infrastructure, testing, and training. We provide detailed timelines during scoping.' },
  { question: 'Can you work with our existing LMS or only K-Nest?', answer: 'We implement and support multiple LMS platforms including Moodle, Canvas, Cornerstone, SuccessFactors, and others. If you’re committed to a specific platform, we’ll work with it.' },
  { question: 'Do you provide content in languages other than English?', answer: 'Yes. We develop content in Hindi, Tamil, Telugu, Marathi, and other Indian languages. We handle translation, localization, and voiceover in regional languages.' },
  { question: 'What if we need updates to content after it’s developed?', answer: 'We provide source files so you can make minor edits internally. For major updates, we offer content maintenance retainers starting at ₹50,000/month for ongoing support.' },
  { question: 'Can you help with both technology and training delivery?', answer: 'Absolutely. That’s our specialty—end-to-end solutions from platform implementation to content creation to instructor-led delivery to ongoing support.' },
];

// ========================================
// Custom Software & Platforms Data
// ========================================
export const cspCaseStudies: CaseStudy[] = [
  { company: 'Multi-Tenant Training Platform', industry: 'Training Provider', badge: 'B2B2C PLATFORM', challenge: 'Build a multi-tenant training platform serving 200+ corporate clients with independent branding and content.', solution: 'Custom-built React + Node.js platform with multi-tenant architecture, automated onboarding, and ₹5Cr+ ARR monetization features.', results: ['200+ corporate tenants', '₹5Cr+ annual revenue', '50,000+ active users', '99.9% uptime'] },
  { company: 'Certification Management System', industry: 'Professional Services', badge: 'CERTIFICATION', challenge: 'Automate certification lifecycle for 10,000+ professionals with exam management and compliance tracking.', solution: 'Custom exam platform with AI proctoring, automated certificate issuance, renewal tracking, and regulatory reporting.', results: ['10,000+ professionals certified', '80% faster certification process', 'Zero certificate fraud', 'Full regulatory compliance'] },
];

export const cspFAQs: FAQItem[] = [
  { question: 'How long does a custom platform take to build?', answer: 'Small projects (MVP): 12-16 weeks. Medium projects (full platform): 16-24 weeks. Large projects (enterprise platform): 24-40 weeks. We follow agile methodology with bi-weekly demos.' },
  { question: 'Who owns the intellectual property?', answer: '100% IP ownership transfers to you upon final payment. This includes source code, design assets, documentation, and all custom components built for your project.' },
  { question: 'What technology stack do you use?', answer: 'Frontend: React, React Native. Backend: Node.js, Python, Java. Database: PostgreSQL, MongoDB. Cloud: AWS, Azure. We choose the stack based on your requirements.' },
  { question: 'Do you provide post-launch support?', answer: 'Yes. We offer 3-6 months of included warranty support, plus optional retainer plans for ongoing maintenance, feature development, and optimization.' },
  { question: 'What\'s the typical budget range?', answer: 'Small (₹5L-₹10L): MVPs, simple platforms. Medium (₹10L-₹20L): Full-featured platforms. Large (₹20L-₹40L+): Complex enterprise platforms with integrations.' },
];

// ========================================
// Game Development & Simulations Data
// ========================================
export const gameCaseStudies: CaseStudy[] = [
  { company: 'Banking Compliance Game', industry: 'BFSI', badge: 'BFSI', challenge: 'Make mandatory compliance training engaging for 5,000+ bank employees who showed only 30% completion rates.', solution: 'Interactive compliance adventure game with real-world scenarios, branching narratives, and leaderboard competitions.', results: ['89% completion (vs. 42% with e-learning)', '94% pass rate on post-training assessment (vs. 73%)', '60% reduction in compliance violations'] },
  { company: 'Cybersecurity Awareness', industry: 'Technology', badge: 'CYBERSECURITY', challenge: 'Train 10,000+ employees on phishing, social engineering, and data protection in an engaging format.', solution: 'Cybersecurity escape room game with realistic attack simulations, incident response challenges, and progressive difficulty.', results: ['82% reduction in phishing click-through rate', '90% of employees can identify sophisticated phishing attempts (vs. 40% pre-game)', '90% completion rate', '3x reduction in security incidents'] },
];

export const gameFAQs: FAQItem[] = [
  { question: 'How long does game development take?', answer: 'Simple games: 2-3 months. Interactive scenarios with branching narratives: 3-4 months. Complex 3D simulations: 4-6 months. AI-powered adaptive games: 5-8 months. We provide detailed timelines during scoping.' },
  { question: 'What platforms do your games run on?', answer: 'We develop for web (HTML5), iOS, Android, Windows, and VR (Quest, Vive, Index). Most games are HTML5 for maximum compatibility and LMS integration.' },
  { question: 'Can games integrate with our LMS?', answer: 'Yes. All our games support SCORM/xAPI and integrate seamlessly with K-Nest and major LMS platforms for completion tracking, scoring, and analytics.' },
  { question: 'What\'s the ROI of game-based training?', answer: 'Typical results: 3-5x higher completion rates, 2x better knowledge retention (70% vs. 20% lecture-based), 30-40% faster time-to-competency. The gamification ROI typically pays back within 6-12 months.' },
  { question: 'Do you create gamification for existing content?', answer: 'Yes. We can add gamification layers (points, badges, leaderboards, challenges) to your existing training programs without rebuilding content. Starts from ₹3L.' },
];

// ========================================
// VR/AR/XR Solutions Data
// ========================================
export const vrCaseStudies: CaseStudy[] = [
  { company: 'Bharat Petroleum Corporation', industry: 'Oil & Gas', badge: 'OIL & GAS', challenge: 'Train workers on emergency response procedures in hazardous environments without real-world risk.', solution: 'VR emergency response simulator with fire, gas leak, and evacuation scenarios — integrated with K-Nest LMS.', results: ['35% faster emergency response', '95% procedure compliance (vs. 70% with classroom training)', 'Zero injuries in real emergency incidents'] },
  { company: 'Manufacturing Company', industry: 'Manufacturing', badge: 'MANUFACTURING', challenge: 'Train equipment operators on complex machinery without production downtime or safety risks.', solution: 'VR equipment operation training with haptic feedback, step-by-step guidance, and competency assessment.', results: ['50% faster onboarding', '70% fewer equipment errors', '90% trainee satisfaction', 'Zero training-related injuries'] },
  { company: 'Healthcare Organization', industry: 'Healthcare', badge: 'HEALTHCARE', challenge: 'Provide AR-guided maintenance and procedural training for medical equipment across 50+ locations.', solution: 'AR work instruction system with step-by-step overlays, remote expert guidance, and completion tracking.', results: ['40% faster procedures', '60% reduction in errors', '85% knowledge retention', 'Available across 50+ locations'] },
];

export const vrFAQs: FAQItem[] = [
  { question: 'What VR hardware do you recommend?', answer: 'For enterprise: Meta Quest 3 (₹45K, standalone \u2014 best price/performance), HTC Vive Focus 3 (₹1.1L, enterprise-ready). For AR: Microsoft HoloLens 2 (₹3L+), RealWear Navigator (₹1.2L, industrial hands-free), or tablet/phone-based AR for simpler applications.' },
  { question: 'How much does VR training development cost?', answer: 'Simple VR training: ₹8L-₹15L. Complex simulations: ₹15L-₹30L. Full VR programs with multiple modules: ₹25L-₹50L+. Hardware costs are additional.' },
  { question: 'Can VR training integrate with our LMS?', answer: 'Yes. All our VR/AR solutions integrate with K-Nest and major LMS platforms via xAPI for completion tracking, scoring, and analytics.' },
  { question: 'What\'s the ROI of VR training?', answer: 'Example: Forklift training — Traditional cost ₹58,000/trainee vs. VR cost ₹500/trainee after 34 trainees. VR typically pays for itself within 6-12 months at scale.' },
  { question: 'Do you provide the hardware?', answer: 'We help you select, procure, and configure the right hardware for your use case. We can include hardware costs in the project or recommend procurement separately.' },
];

// ========================================
// Consulting & Architecture Data
// ========================================
export const consultingCaseStudies: CaseStudy[] = [
  { company: 'Leading BFSI Company', industry: 'Banking & Finance', badge: 'BFSI', challenge: 'Select the right LMS from 15+ vendors for 5,000+ employees while meeting RBI compliance requirements.', solution: 'Comprehensive technology selection engagement with 15 vendor evaluations, PoC, and negotiation.', results: ['Avoided ₹1.2Cr in unnecessary enterprise features', 'Negotiated 35% discount on final vendor', '15 vendors evaluated objectively', 'Full RBI compliance achieved'] },
  { company: 'Manufacturing Conglomerate', industry: 'Manufacturing', badge: 'MANUFACTURING', challenge: 'Design learning technology architecture for 10 group companies with diverse training needs.', solution: 'Enterprise architecture engagement with multi-tenant design, integration blueprint, and phased rollout plan.', results: ['Designed unified architecture', 'Eliminated 2 redundant systems', '60% reduction in integration complexity', '5-year technology roadmap'] },
  { company: 'IT Services Company', industry: 'IT Services', badge: 'IT SERVICES', challenge: 'Secure \u20b92Cr budget for learning technology transformation to get board approval.', solution: 'ROI & business case development with financial modeling, benchmarking, and executive presentation.', results: ['Board approved \u20b92.5Cr (more than requested)', '300% projected ROI', 'Clear implementation roadmap', '\u20b92Cr initial investment secured'] },
];

export const consultingFAQs: FAQItem[] = [
  { question: 'When should we engage consultants?', answer: 'When selecting new technology, when current systems aren\'t delivering ROI, when scaling to new regions or business units, when compliance requirements change, or when you need expert validation of internal plans.' },
  { question: 'Are your recommendations vendor-neutral?', answer: 'Absolutely. While we offer K-Nest LMS, our consulting engagements objectively evaluate all options. If another solution is better for your needs, we\'ll recommend it. Our goal is your success.' },
  { question: 'What does a typical consulting engagement cost?', answer: 'Hourly rates: Senior Consultant ₹5,000–₹8,000/hr, Principal Consultant ₹8,000–₹12,000/hr, Practice Director ₹12,000–₹15,000/hr. Fixed engagements: Technology Selection ₹6L–₹15L, Architecture ₹10L–₹25L, Implementation Planning ₹5L–₹12L, ROI Business Case ₹4L–₹10L.' },
  { question: 'What deliverables can we expect?', answer: 'Every engagement produces actionable deliverables: assessment reports, architecture documents, vendor evaluations, ROI analyses, implementation roadmaps, and executive presentations.' },
  { question: 'How do you transfer knowledge to our team?', answer: 'Knowledge transfer is built into every engagement. We include workshops, documentation, training sessions, and ongoing support to ensure your team can execute independently.' },
  { question: 'What\'s your consulting team\'s background?', answer: 'Our consultants have 10-15+ years of enterprise learning technology experience, spanning LMS implementations, custom platform development, content strategy, and organizational change management.' },
];

// ========================================
// Game Development & Simulations — Detailed Data
// ========================================

export const gameTypesData: GameTypeEntry[] = [
  {
    iconName: 'monitor',
    title: 'Cybersecurity & IT Security Games',
    price: '₹5L – ₹20L',
    timeline: '8–16 weeks',
    desc: 'Make security awareness training engaging instead of click-through torture. Realistic attack scenarios with immediate feedback, scoring, and branching consequences.',
    concepts: [
      'Phishing Detective: Spot phishing emails in a realistic inbox simulation',
      'Security Breach Crisis: Incident response simulation with time pressure',
      'Password Fortress: Learn strong password practices through a puzzle game',
      'Social Engineering Escape Room: Recognise manipulation tactics',
      'Ransomware Runner: Stop attacks before they spread across the network',
    ],
    features: [
      'Realistic attack scenarios (current threats)',
      'Immediate feedback on mistakes',
      'Scoring and leaderboards',
      'Branching consequences (poor decisions = breach)',
      'Certificate upon completion',
    ],
    results: 'Clients report 85% reduction in phishing click-through rates post-game training vs. 15% reduction with traditional training.',
  },
  {
    iconName: 'trophy',
    title: 'Compliance & Ethics Training Games',
    price: '₹3L – ₹12L',
    desc: 'Transform checkbox compliance into ethical decision-making practice. Moral dilemmas, reputation systems, and real-world case studies.',
    concepts: [
      'Ethics Dilemma Simulator: Navigate grey-area ethical situations',
      'Anti-Bribery Quest: Recognise and refuse corruption attempts',
      'Harassment Recognition Scenarios: Spot inappropriate behaviour',
      'Conflict of Interest Challenge: Identify potential conflicts',
      'Whistleblower Journey: Understand reporting procedures',
    ],
    features: [
      'Moral dilemma choices (consequences visualised)',
      'Reputation system (ethical vs. unethical path)',
      'Real-world case studies (anonymised)',
      'Reflection moments (why certain choices matter)',
    ],
    results: '90% completion rate vs. 40% with traditional compliance training. Better knowledge retention measured 6 months post-training.',
  },
  {
    iconName: 'users',
    title: 'Sales & Customer Service Games',
    price: '₹10L – ₹30L',
    desc: 'Practice customer interactions without risk, build skills through repetition. AI-powered virtual customers with personality types and natural language processing.',
    concepts: [
      'Sales Pitch Arena: Practice product pitches with virtual customers',
      'Objection Handler: Respond to customer objections in real-time',
      'Difficult Customer Simulator: De-escalation and problem-solving',
      'Cross-Sell Challenge: Identify opportunities in conversations',
      'Negotiation Tactics: Price discussion simulations',
    ],
    features: [
      'Virtual customers with distinct personality types',
      'Natural language processing (respond in your own words)',
      'Emotional intelligence feedback',
      'Performance analytics (conversion rates, timing)',
    ],
    results: 'Sales reps trained with games close 22% more deals than those trained with traditional role-play only.',
  },
  {
    iconName: 'target',
    title: 'Leadership & Decision-Making Simulations',
    price: '₹15L – ₹40L',
    timeline: '12–20 weeks',
    desc: 'Practice leadership in a safe environment and see the real consequences of decisions. Branching storylines with consequence visualisation.',
    concepts: [
      'Manager Onboarding Simulation: First 90 days as a manager',
      'Crisis Leadership: Navigate an organisational crisis',
      'Team Conflict Resolution: Mediate disputes',
      'Performance Management: Difficult conversations practice',
      'Budget & Resource Allocation: Strategic decision-making',
    ],
    features: [
      'Branching storylines (decisions change outcomes)',
      'Consequence visualisation (team morale, revenue, retention)',
      'Multiple stakeholder perspectives',
      'Time pressure (realistic constraints)',
      'Expert commentary (debrief on choices)',
    ],
    results: 'New managers trained with simulations reach full productivity 30% faster than those with classroom-only training.',
  },
  {
    iconName: 'puzzle',
    title: 'Technical Skills Training Games',
    price: '₹8L – ₹25L',
    desc: 'Make technical training interactive and hands-on with 3D equipment models, physics-based interactions, and failure scenarios.',
    concepts: [
      'Troubleshooting Challenge: Diagnose and fix equipment/systems',
      'Assembly Line Simulator: Manufacturing process optimisation',
      'Quality Control Game: Spot defects under time pressure',
      'Equipment Operation Training: Practice on virtual machinery',
      'Process Optimisation Puzzle: Improve efficiency through gameplay',
    ],
    features: [
      '3D equipment models (realistic visualisation)',
      'Physics-based interactions (realistic feel)',
      'Failure scenarios (learn from mistakes safely)',
      'Performance metrics (speed, accuracy, efficiency)',
      'Leaderboards (competitive element)',
    ],
    results: 'Clients report 40% faster time-to-competency vs. traditional equipment training methods.',
  },
  {
    iconName: 'lightbulb',
    title: 'Soft Skills Development Games',
    price: '₹5L – ₹15L',
    desc: 'Practice communication, emotional intelligence, and collaboration through scenario-based gameplay with immediate, actionable feedback.',
    concepts: [
      'Empathy Builder: Perspective-taking scenarios',
      'Active Listening Challenge: Demonstrate comprehension',
      'Feedback Delivery Simulator: Give constructive criticism',
      'Meeting Management Game: Run effective meetings',
      'Cross-Cultural Communication: Navigate cultural differences',
    ],
    features: [
      'Scenario-based branching decisions',
      'Immediate, actionable feedback',
      'Multiple cultural contexts',
      'Reflection and debrief exercises',
    ],
    results: 'Learners demonstrate 45% improvement in targeted soft skills on post-training assessment.',
  },
];

export const gamificationElements: GamificationElementEntry[] = [
  {
    title: 'Points System',
    items: [
      'Award points for activities (completing courses, scoring well, participating)',
      'Customisable point values per activity type',
      'Point-based unlocks (new content, privileges)',
    ],
  },
  {
    title: 'Badges & Achievements',
    items: [
      'Visual progress indicators',
      'Skill-based badges (Excel Expert, Safety Champion)',
      'Milestone badges (100 courses completed)',
      'Social sharing (LinkedIn, internal profiles)',
    ],
  },
  {
    title: 'Leaderboards',
    items: [
      'Individual, team, and department-level rankings',
      'Time-based (daily, weekly, monthly, all-time)',
      'Customisable ranking criteria',
      'Privacy controls (anonymous or named)',
    ],
  },
  {
    title: 'Challenges & Quests',
    items: [
      'Time-limited challenges (complete 5 courses this week)',
      'Team challenges (department vs. department)',
      'Progressive quests (multi-step achievements)',
    ],
  },
  {
    title: 'Levels & Progression',
    items: [
      'Experience points (XP) and level-up mechanics',
      'Unlockable content tiers',
      'Status badges (Bronze, Silver, Gold, Platinum)',
    ],
  },
  {
    title: 'Social Features',
    items: [
      'Activity feeds (peer-to-peer learning)',
      'Collaborative challenges',
      'Mentorship matching (experts help beginners)',
    ],
  },
  {
    title: 'Rewards & Incentives',
    items: [
      'Virtual rewards (in-platform perks)',
      'Real rewards integration (gift cards, prizes)',
      'Recognition (certificates, public acknowledgment)',
    ],
  },
];

export const gameDevPhases = [
  {
    num: '01',
    title: 'Concept & Learning Design',
    weeks: '2–3 weeks',
    items: [
      'Learning objectives definition',
      'Game concept ideation (multiple concepts presented)',
      'Mechanics design (how game teaches)',
      'Storyboarding (flow and experience)',
      'Client approval of concept',
    ],
  },
  {
    num: '02',
    title: 'Game Design Document',
    weeks: '2–3 weeks',
    items: [
      'Detailed game mechanics specification',
      'User interface mockups',
      'Asset list (3D models, graphics, sounds)',
      'Technical architecture',
      'Production timeline',
    ],
  },
  {
    num: '03',
    title: 'Production',
    weeks: '6–14 weeks',
    items: [
      'Art and asset creation',
      'Programming and mechanics implementation',
      'Level design and balancing',
      'Audio and voiceover',
      'Iterative testing and refinement',
    ],
  },
  {
    num: '04',
    title: 'Testing & QA',
    weeks: '2–3 weeks',
    items: [
      'Functional testing (all features work)',
      'Usability testing (is it fun?)',
      'Learning effectiveness testing (does it teach?)',
      'Performance testing (runs smoothly on target devices)',
      'Bug fixing',
    ],
  },
  {
    num: '05',
    title: 'Deployment & Support',
    weeks: '1–2 weeks',
    items: [
      'LMS integration or standalone deployment',
      'Player onboarding materials',
      'Analytics dashboard setup',
      'Post-launch support',
      'Iterative improvements based on player data',
    ],
  },
];

// ========================================
// VR / AR / XR Solutions — Detailed Data
// ========================================

export const vrSolutions: VRSolutionEntry[] = [
  {
    title: 'Safety & Emergency Response VR',
    price: '₹8L – ₹25L',
    desc: 'Practice life-or-death scenarios in a safe virtual environment — real pressure, realistic environments, immediate consequences. Learners experience risk without real danger.',
    useCases: [
      'Fire Safety & Evacuation: Navigate smoke-filled buildings, use extinguishers',
      'Chemical Spill Response: Containment procedures, PPE usage',
      'Emergency Shutdown: Shut down equipment under pressure',
      'Confined Space Entry: Hazard recognition, rescue procedures',
      'First Aid & CPR: Practice medical responses',
      'Accident Investigation: Identify root causes in virtual incident scenes',
    ],
    features: [
      'Realistic environments (your actual facility recreated in VR)',
      'High-stress scenarios (smoke, alarms, time pressure)',
      'Correct/incorrect feedback (immediate consequences)',
      'Multiple scenario variations (different emergencies)',
      'Performance metrics (response time, procedure compliance)',
    ],
    industries: 'Manufacturing, Oil & Gas, Construction, Mining, Healthcare',
    caseStudy: 'BPCL: VR fire safety training reduced emergency response time by 35%. Procedure compliance improved to 95% vs. 70% with classroom training alone.',
  },
  {
    title: 'Equipment Operation Training VR',
    price: '₹10L – ₹30L',
    desc: 'Learn to operate expensive and dangerous equipment without risk. High-fidelity virtual replicas for hands-on training with unlimited repetitions to build muscle memory.',
    useCases: [
      'Heavy Machinery: Cranes, forklifts, excavators',
      'Manufacturing Equipment: CNC machines, industrial robots, assembly lines',
      'Medical Devices: Surgical equipment, diagnostic machines',
      'Aircraft & Vehicles: Flight simulators, truck driving, ship navigation',
      'Control Rooms: Power plants, refineries, traffic control',
    ],
    features: [
      'No equipment downtime (production continues during training)',
      'No risk of damage (crash virtual machine, not the real one)',
      'Practice rare emergency scenarios (faults, malfunctions)',
      'Unlimited repetitions (build true muscle memory)',
      'Performance tracking (identify improvement areas)',
    ],
    industries: 'Manufacturing, Healthcare, Aviation, Energy, Logistics',
    caseStudy: 'Manufacturing client: VR forklift training reduced equipment damage incidents by 60%, achieved certification 50% faster than traditional supervised training.',
  },
  {
    title: 'Soft Skills & Communication VR',
    price: '₹12L – ₹35L',
    desc: 'Practice difficult conversations and interpersonal skills with AI-powered virtual humans that respond naturally, express emotions, and challenge your communication style.',
    useCases: [
      'Performance Reviews: Deliver feedback to virtual employees',
      'Difficult Conversations: Terminations, conflict resolution',
      'Customer Service: Handle angry customers, de-escalation',
      'Sales Presentations: Pitch to virtual clients with realistic objections',
      'Negotiation: Practice negotiation tactics and responses',
      'Cross-Cultural Communication: Navigate cultural differences',
    ],
    features: [
      'Virtual humans with realistic expressions and emotions',
      'Natural language interaction (talk naturally, AI responds)',
      'Multiple personality types (aggressive, passive, analytical)',
      'Emotion recognition (AI adjusts based on your tone)',
    ],
    industries: 'Leadership, Sales, HR, Customer Service, Healthcare',
    caseStudy: 'Learners demonstrate 40% improvement in measured communication skills on post-VR assessment compared to role-play only, with gains sustained at 3-month follow-up.',
  },
  {
    title: 'Procedural & Process Training VR',
    price: '₹8L – ₹22L',
    desc: 'Master complex multi-step procedures through repetitive practice with step-by-step guidance, mistake prevention, and measurable performance benchmarks.',
    useCases: [
      'Maintenance Procedures: Disassembly, repair, reassembly',
      'Quality Control: Inspection procedures, defect identification',
      'Assembly & Installation: Build products, install equipment',
      'Laboratory Procedures: Scientific protocols, safety compliance',
      'Surgical Procedures: Medical training with anatomical accuracy',
    ],
    features: [
      'Step-by-step guidance (visual prompts at each stage)',
      'Mistake prevention (cannot proceed to next step if wrong)',
      'Performance measurement (time, accuracy, correct sequence)',
      'Certification testing (prove competency before touching real equipment)',
    ],
    industries: 'Manufacturing, Healthcare, Oil & Gas, Pharma, Food & Beverage',
    caseStudy: 'Pharma client: VR laboratory procedure training reduced protocol deviations by 70%. New technicians reach competency 45% faster.',
  },
];

export const xrHardware: HardwareEntry[] = [
  { name: 'Meta Quest 3', category: 'VR', price: '₹45K', notes: 'Best value, wireless standalone — recommended for most enterprise training programmes' },
  { name: 'HTC Vive Pro 2', category: 'VR', price: '₹1.2L', notes: 'High-end, enterprise features, PC-tethered for maximum fidelity' },
  { name: 'Valve Index', category: 'VR', price: '₹85K', notes: 'Best-in-class controllers, highest visual fidelity, PC-tethered' },
  { name: 'HTC VIVE Focus 3', category: 'VR', price: '₹1.1L', notes: 'Enterprise standalone, hot-swappable battery, built for deployment at scale' },
  { name: 'RealWear Navigator 520', category: 'AR', price: '₹1.2L', notes: 'Industrial hands-free, fully voice-controlled, ruggedised for field use' },
  { name: 'Microsoft HoloLens 2', category: 'MR', price: '₹3L+', notes: 'Advanced mixed reality, spatial mapping, best for complex AR overlay applications' },
  { name: 'Magic Leap 2', category: 'AR/MR', price: '₹2.5L', notes: 'Enterprise AR/MR, larger field of view, healthcare and industrial focus' },
];

// ========================================
// Consulting & Architecture — Detailed Data
// ========================================

export const consultingScenarios: ConsultingScenarioEntry[] = [
  { iconName: 'search', title: 'Selecting a Platform', desc: 'Confused by 800+ LMS options? We evaluate, shortlist, and recommend the right platform for your specific needs and budget.' },
  { iconName: 'settings', title: 'Current System Failing', desc: 'Low adoption, poor UX, missing features? We audit your current setup and create a fix-or-replace roadmap.' },
  { iconName: 'layers', title: 'Building Something New', desc: 'Planning a custom platform? Get architecture guidance before you write a single line of code.' },
  { iconName: 'bar-chart-3', title: 'Digital Transformation', desc: 'Moving from classroom to digital? We design the complete L&D ecosystem for your organisation.' },
  { iconName: 'shield', title: 'Compliance Requirements', desc: 'New regulatory requirements? We design systems that meet FDA, OSHA, ISO, or industry-specific compliance needs.' },
  { iconName: 'target', title: 'Scaling Challenges', desc: 'Outgrown your current setup? We architect solutions that scale from hundreds to millions of users.' },
];

export const consultingServicesData: ConsultingServiceEntry[] = [
  {
    num: '01',
    title: 'Learning Technology Selection',
    timeline: '6–12 weeks',
    price: '₹6L – ₹15L',
    desc: 'Navigate the vendor landscape and select the right platform for your needs.',
    subSections: [
      { title: 'Requirements Analysis', items: ['Stakeholder interviews (business needs, pain points)', 'Current state assessment (existing tools, gaps)', 'Future state vision (where you want to be)', 'Requirements documentation (must-have vs. nice-to-have)', 'Budget and timeline constraints'] },
      { title: 'Market Research', items: ['Vendor landscape analysis (who\'s in the market)', 'Feature comparison (how vendors compare)', 'Pricing analysis (total cost of ownership)', 'Reference checking (talk to real customers)', 'Industry fit assessment (who works in your sector)'] },
      { title: 'RFP Management', items: ['RFP document creation (comprehensive requirements)', 'Vendor outreach and response evaluation (scored objectively)', 'Demo coordination (see top vendors in action)', 'Q&A facilitation (get answers to tough questions)'] },
      { title: 'Vendor Selection', items: ['Shortlist creation (top 2–3 finalists)', 'Proof-of-concept facilitation (hands-on testing)', 'Recommendation report (our expert opinion)', 'Contract negotiation support (better pricing, terms)'] },
    ],
    deliverables: ['Requirements specification document', 'Vendor comparison matrix with scoring', 'Total cost of ownership analysis (5-year)', 'Recommendation report with justification', 'Executive presentation deck', 'Contract negotiation support'],
    roiNote: 'Clients save an average ₹30L by avoiding the wrong vendor choice and negotiating better contracts. One BFSI client saved ₹1.2Cr by selecting a right-sized solution instead of enterprise overkill.',
  },
  {
    num: '02',
    title: 'Learning Technology Architecture',
    timeline: '8–12 weeks',
    price: '₹10L – ₹25L',
    desc: 'Design comprehensive learning technology ecosystems that integrate seamlessly.',
    subSections: [
      { title: 'Architecture Assessment', items: ['Current technology inventory (all learning tools)', 'Integration mapping (how systems connect)', 'Data flow analysis (where data lives and flows)', 'Gap analysis (missing capabilities)', 'Pain point identification (friction in current state)'] },
      { title: 'Future State Design', items: ['Target architecture vision (ideal end state)', 'Technology stack selection (LMS, LXP, content tools)', 'Integration design (APIs, SSO, data sync)', 'Data architecture (where data lives, governance)', 'Security and compliance framework'] },
      { title: 'Roadmap Development', items: ['Phased implementation plan (what, when, in what order)', 'Migration strategy (current to future state)', 'Risk assessment and mitigation', 'Budget and resource planning', 'Timeline with milestones'] },
      { title: 'Standards & Governance', items: ['Technology standards (SCORM, xAPI, LTI)', 'Data standards (learner records, content metadata)', 'Integration standards (API patterns)', 'Security standards (authentication, encryption)', 'Governance model (who decides what)'] },
    ],
    deliverables: ['Current state architecture diagram', 'Future state architecture diagram', 'Integration specifications', 'Implementation roadmap (3–5 years)', 'Standards & governance documentation', 'Security and compliance framework'],
    roiNote: 'Proper architecture prevents expensive rework. A manufacturing client avoided ₹80L in integration costs by designing architecture correctly upfront vs. a piecemeal approach.',
  },
  {
    num: '03',
    title: 'LMS Implementation Planning',
    timeline: '4–8 weeks',
    price: '₹5L – ₹12L',
    desc: 'Plan and de-risk major learning technology implementations.',
    subSections: [
      { title: 'Pre-Implementation', items: ['Scope definition (exactly what\'s in/out of scope)', 'Requirements validation (ensure nothing is missed)', 'Contract review (identify risks in vendor contract)', 'Team planning (who does what, when)'] },
      { title: 'Implementation Planning', items: ['Detailed project plan (tasks, dependencies, timeline)', 'Resource allocation (internal team + vendor + consultants)', 'Risk identification and mitigation planning', 'Change management strategy (communication, adoption)', 'Testing strategy (functional, integration, UAT)'] },
      { title: 'Data Migration Planning', items: ['Data audit (what exists in current system)', 'Migration strategy (big bang vs. phased)', 'Data mapping (old system to new system)', 'Data cleansing plan (fix bad data)', 'Rollback plan (if migration fails)'] },
      { title: 'Vendor Management', items: ['Statement of work (SOW) review and negotiation', 'Milestone definition (measurable progress points)', 'Payment terms (tied to deliverables)', 'Escalation procedures (when things go wrong)'] },
    ],
    deliverables: ['Detailed project plan (Gantt + RACI matrix)', 'Risk register with mitigation plans', 'Change management plan', 'Data migration plan', 'Training plan', 'Vendor SOW review'],
    roiNote: 'Proper planning reduces implementation time 30% and prevents cost overruns. IT services client completed a 30,000-user deployment in 10 weeks (planned for 16 weeks) with zero major issues.',
  },
  {
    num: '04',
    title: 'Learning Program Design',
    timeline: '6–10 weeks',
    price: '₹8L – ₹18L',
    desc: 'Design comprehensive training programs aligned to business outcomes.',
    subSections: [
      { title: 'Needs Analysis', items: ['Business goal alignment (what the business is trying to achieve)', 'Performance gap analysis (current vs. desired performance)', 'Root cause analysis (is it really a training problem?)', 'Audience analysis (who needs training, what they know)', 'Success metrics definition (how we\'ll measure success)'] },
      { title: 'Curriculum Design', items: ['Learning objectives definition (specific, measurable)', 'Content outline (what to cover, in what order)', 'Learning path design (journey from beginner to expert)', 'Assessment strategy (how to measure learning)', 'Blended approach (online, ILT, OJT, social)'] },
      { title: 'Content & Delivery Strategy', items: ['Build vs. buy analysis (create or purchase content)', 'Modality selection (e-learning, VILT, classroom, VR)', 'Scheduling strategy (when, how often, duration)', 'Localization plan (if multi-language/region)'] },
    ],
    deliverables: ['Learning needs analysis report', 'Curriculum design document', 'Learning path map', 'Assessment blueprint', 'Measurement framework', 'Content strategy'],
    roiNote: 'Well-designed programmes achieve 2× the completion rates and 3× the knowledge retention of ad-hoc content rollouts.',
  },
  {
    num: '05',
    title: 'Learning ROI & Business Case Development',
    timeline: '3–5 weeks',
    price: '₹4L – ₹10L',
    desc: 'Build compelling business cases to secure executive buy-in and budget. Financial modelling with 3–5 year ROI projections. 92% of our business cases receive executive approval.',
    subSections: [
      { title: 'Current State Cost Analysis', items: ['Training delivery costs (trainers, facilities, travel)', 'Time costs (employee hours in training)', 'Opportunity costs (production downtime)', 'Quality costs (errors from inadequate training)', 'Compliance costs (audit failures, fines)'] },
      { title: 'Solution Cost Analysis', items: ['Technology costs (LMS, tools, hardware)', 'Implementation costs (project management, setup)', 'Content development costs', 'Ongoing operational costs', '5-year total cost of ownership'] },
      { title: 'ROI Modelling', items: ['Productivity improvement projections', 'Error/incident reduction value', 'Compliance cost avoidance', 'Talent retention value', 'Executive-ready sensitivity analysis'] },
    ],
    deliverables: ['Business case document (full financial analysis)', 'Executive presentation deck', 'Financial model with assumptions (Excel)', 'FAQ / objection handling document', '3–5 year ROI projection'],
    roiNote: '92% of our business cases receive executive approval. Average approved budget: ₹1.8Cr vs. ₹1.2Cr typically requested.',
  },
  {
    num: '06',
    title: 'Learning Analytics & Optimisation',
    timeline: '6–10 weeks',
    price: '₹8L – ₹20L',
    desc: 'Turn training data into actionable insights. Analytics strategy, data integration, real-time dashboards, predictive analytics, and continuous improvement process.',
    subSections: [
      { title: 'Analytics Strategy', items: ['KPI definition (what to measure and why)', 'Data source mapping (LMS, HRMS, performance systems)', 'Reporting framework design (who sees what)'] },
      { title: 'Dashboard Development', items: ['Executive dashboards (business impact view)', 'L&D manager dashboards (programme health)', 'Learner dashboards (personal progress)', 'Predictive analytics (at-risk learner flags)'] },
      { title: 'Continuous Improvement', items: ['Monthly analytics review process', 'A/B testing framework for content', 'Content effectiveness scoring', 'Quarterly optimisation recommendations'] },
    ],
    deliverables: ['Analytics strategy document', 'Dashboard design specifications', 'Data integration specifications', 'Live dashboards implemented', 'Quarterly optimisation report'],
    roiNote: 'Clients using our analytics framework see 25% improvement in programme completion rates and 40% faster identification of skill gaps.',
  },
];

export const consultingApproach: ConsultingApproachEntry[] = [
  { num: '01', title: 'Vendor-Neutral', desc: 'No partnerships, no affiliate fees. We recommend what\'s genuinely best for you, not what pays us a commission.' },
  { num: '02', title: 'Data-Driven', desc: 'Every recommendation is backed by usage data, market research, and evidence — not opinions or preferences.' },
  { num: '03', title: 'Business-First', desc: 'We start with business outcomes, not technology. The best platform is the one that achieves your goals.' },
  { num: '04', title: 'Knowledge Transfer', desc: 'We don\'t create dependency. Every engagement includes training so your team can manage independently.' },
];

export const consultingPricing: ConsultingPricingRow[] = [
  { type: 'Senior Consultant', price: '₹5,000 – ₹8,000/hr', duration: 'Minimum 4 hours' },
  { type: 'Principal Consultant', price: '₹8,000 – ₹12,000/hr', duration: 'Minimum 4 hours' },
  { type: 'Practice Director', price: '₹12,000 – ₹15,000/hr', duration: 'Minimum 4 hours' },
  { type: 'Technology Selection', price: '₹6L – ₹15L', duration: '6–12 weeks' },
  { type: 'Technology Architecture', price: '₹10L – ₹25L', duration: '8–12 weeks' },
  { type: 'Implementation Planning', price: '₹5L – ₹12L', duration: '4–8 weeks' },
  { type: 'Program Design', price: '₹8L – ₹18L', duration: '6–10 weeks' },
  { type: 'ROI Business Case', price: '₹4L – ₹10L', duration: '3–5 weeks' },
  { type: 'Analytics & Optimisation', price: '₹8L – ₹20L', duration: '6–10 weeks' },
  { type: 'Quarterly Advisory Retainer', price: '₹3L – ₹6L/quarter', duration: '1 day/month + ad-hoc calls' },
  { type: 'Monthly Support Retainer', price: '₹2L – ₹4L/month', duration: '10–20 hours/month' },
];
