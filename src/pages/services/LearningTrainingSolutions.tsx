import { useState } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2, BookOpen, Settings, Users, ShieldCheck,
  Target, Lightbulb, Clock, BarChart3
} from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import Button from '../../components/ui/Button';
import SectionHeading from '../../components/ui/SectionHeading';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../../components/ui/AnimatedSection';
import { FAQAccordion, IconWrapper } from '../../components/ui/MegaMenu';
import { ltsMethodology, ltsCaseStudies, ltsFAQs } from '../../data/servicesData';
import HeroSection from '../../components/ui/HeroSection';

export default function LearningTrainingSolutions() {
  usePageMeta({
    title: 'Learning & Training Solutions | End-to-End Enterprise Training | 4Edge IT',
    description: 'Complete learning & training solutions — LMS implementation, custom content, compliance training, instructor-led, and learning strategy. 70+ enterprise clients.',
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* HERO */}
      <HeroSection
        badge="SERVICES"
        title="Complete Learning & Training Solutions"
        titleHighlight="That Actually Work"
        subtitle="From LMS implementation to content creation, instructor-led training to compliance management—we handle everything so your L&D team can focus on strategy, not operations."
        proofLine="70+ Enterprise Clients | 500+ Custom Courses Created | 200,000+ Employees Trained"
        primaryCta={{ label: 'Schedule Consultation', href: '/company#contact' }}
        secondaryCta={{ label: 'Download Service Portfolio', href: '/resources' }}
        stats={[
          { value: 70, suffix: '+', label: 'Enterprise Clients' },
          { value: 500, suffix: '+', label: 'Custom Courses' },
          { value: 200000, suffix: '+', label: 'Employees Trained' },
        ]}
      />

      {/* OVERVIEW */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-7xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="OVERVIEW" title="Your End-to-End Learning Technology Partner" />
          </AnimatedSection>
          <AnimatedSection>
            <p className="text-lg text-medium-gray max-w-7xl mx-auto text-center mb-14">
              Most training initiatives fail not because of bad technology, but because of poor implementation, inadequate content, and lack of adoption support.
              4Edge delivers the complete package: proven technology (K-Nest LMS), professional content development, expert implementation, and ongoing optimisation.
              Whether you're deploying your first LMS, migrating from a legacy system, or scaling an existing program, we've done it 70+ times for India's most demanding enterprises.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-5 gap-4">
            {[
              { icon: <Settings className="w-5 h-5" />, title: 'Strategy & Planning', desc: 'We don\'t just deploy software—we design learning ecosystems aligned to your business goals. Training needs analysis, learning path design, competency frameworks, and measurement strategies.' },
              { icon: <BookOpen className="w-5 h-5" />, title: 'Technology Implementation', desc: 'K-Nest LMS or custom platform deployment, configured to your workflows, integrated with your systems. 48-hour SaaS deployment or 12-week on-premise implementation.' },
              { icon: <Users className="w-5 h-5" />, title: 'Content Development', desc: 'Professional course creation by instructional designers and subject matter experts. From compliance modules to leadership simulations, we build engaging content that drives results.' },
              { icon: <ShieldCheck className="w-5 h-5" />, title: 'Delivery & Support', desc: 'Instructor-led training, virtual classrooms, blended learning programs, and change management. We don\'t just build it—we help your employees adopt it.' },
              { icon: <Target className="w-5 h-5" />, title: 'Continuous Improvement', desc: 'Analytics-driven optimisation, content updates, feature enhancements, and strategic consulting. Learning technology isn\'t set-it-and-forget-it—we partner for the long term.' },
            ].map((p) => (
              <StaggerItem key={p.title}>
                <Card variant="feature" className="h-full">
                  <div className="flex justify-center mb-3"><IconWrapper size="sm">{p.icon}</IconWrapper></div>
                  <h3 className="font-bold font-heading text-dark-text text-sm mb-2 text-center">{p.title}</h3>
                  <p className="text-xs text-medium-gray text-center">{p.desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SERVICE 1.1: LMS IMPLEMENTATION */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="SERVICE 1.1" title="LMS Implementation & Deployment" subtitle="From zero to fully operational enterprise LMS — configured, integrated, and optimized for your workflows." align="left" />
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <Card variant="feature">
                <h3 className="text-lg font-bold font-heading text-dark-text mb-4">What's Included</h3>
                <div className="space-y-6">
                  {[
                    { title: 'Planning & Requirements', items: ['Training needs analysis & stakeholder alignment', 'Technical requirements & integration planning', 'Data migration strategy', 'Timeline, resource planning & milestones'] },
                    { title: 'Technical Implementation', items: ['Platform configuration & corporate branding', 'SSO/SAML & MFA integration', 'HRMS, ERP & third-party connectors', 'Custom workflow & notification setup'] },
                    { title: 'Data Migration', items: ['Content migration (SCORM, xAPI, HTML5, video)', 'User data import & role mapping', 'Historical completion records transfer', 'Enrollment and hierarchy data migration'] },
                    { title: 'Testing & Quality Assurance', items: ['Functional & integration testing', 'User acceptance testing (UAT)', 'Load & performance testing', 'Security & compliance verification'] },
                    { title: 'Training & Documentation', items: ['Administrator & super-admin training', 'Instructor & trainer onboarding', 'End-user guides & quick-start resources', 'Video tutorials & help documentation'] },
                    { title: 'Go-Live Support', items: ['Phased rollout management', 'Hypercare support (first 30 days)', 'Issue resolution & escalation', 'Post-go-live optimisation review'] },
                  ].map((g) => (
                    <div key={g.title}>
                      <h4 className="font-semibold text-dark-text mb-2">{g.title}</h4>
                      <ul className="space-y-1.5">
                        {g.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-medium-gray">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                <Card variant="feature">
                  <h3 className="text-lg font-bold font-heading text-dark-text mb-3">Timeline & Pricing</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-border-gray">
                      <span className="text-sm text-medium-gray">SaaS Deployment</span>
                      <span className="text-sm font-medium font-mono text-dark-text">2–4 weeks</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border-gray">
                      <span className="text-sm text-medium-gray">On-Premise</span>
                      <span className="text-sm font-medium font-mono text-dark-text">8–12 weeks</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border-gray">
                      <span className="text-sm text-medium-gray">Complex Custom Implementation</span>
                      <span className="text-sm font-medium font-mono text-dark-text">12–16 weeks</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-sm text-medium-gray">Implementation Fee</span>
                      <span className="text-sm font-medium font-mono text-primary">Starting at ₹5L</span>
                    </div>
                  </div>
                </Card>
                <Card variant="case-study">
                  <Badge variant="cyan" size="sm">SUCCESS STORY</Badge>
                  <h3 className="mt-2 text-lg font-bold font-heading text-dark-text">Infosys — IT Services</h3>
                  <p className="text-sm text-medium-gray mt-2">
                    Infosys engaged 4Edge for a full-scale K-Nest deployment. We completed deployment in 10 weeks,
                    migrated 500+ courses from their legacy system, integrated with their custom HRMS, and trained 50+ administrators.
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {['90% adoption in first quarter', '60% reduction in L&D admin overhead', '30,000+ active users on day one', '500+ migrated courses, zero data loss'].map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-medium-gray">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{r}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SERVICE 1.2: CUSTOM CONTENT */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="SERVICE 1.2" title="Custom Content Development" subtitle="From instructional design to multimedia production — engaging content that drives learning outcomes." align="left" />
          </AnimatedSection>

          {/* Content Types by category */}
          <AnimatedSection>
            <h3 className="text-xl font-bold font-heading text-dark-text mb-6">Content Types We Develop</h3>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { title: 'Compliance & Regulatory', items: ['Safety & health (ISO 45001, OSHA)', 'Financial services (RBI, SEBI, AML/KYC)', 'Data privacy (GDPR, DPDP Act)', 'Ethics & code of conduct', 'Anti-harassment (POSH)'] },
              { title: 'Technical & Skills', items: ['Software application training', 'Equipment operation & maintenance', 'Manufacturing processes', 'IT security & cybersecurity', 'Sales & product knowledge'] },
              { title: 'Leadership & Soft Skills', items: ['New manager transition programs', 'Communication & collaboration', 'Emotional intelligence', 'Performance management', 'Team building & culture'] },
              { title: 'Onboarding Programs', items: ['New hire orientation (culture, policies)', 'Role-specific onboarding paths', '30-60-90 day journeys', 'Manager onboarding tracks', 'Buddy & mentor programme guides'] },
              { title: 'Industry-Specific', items: ['Banking (credit analysis, loan processing)', 'Manufacturing (Six Sigma, Lean, 5S)', 'Healthcare (HIPAA, clinical protocols)', 'Oil & Gas (HSE, emergency response)', 'Automotive (dealer tech certification)'] },
              { title: 'Assessment & Evaluation', items: ['Question bank development', 'Competency-based assessments', 'AI-graded subjective tests', 'Pre/post learning evaluations', '360° feedback instruments'] },
            ].map((c) => (
              <StaggerItem key={c.title}>
                <Card variant="feature" className="h-full">
                  <h3 className="font-bold font-heading text-dark-text mb-3">{c.title}</h3>
                  <ul className="space-y-1.5">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-medium-gray">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Development Process */}
          <AnimatedSection>
            <h3 className="text-xl font-bold font-heading text-dark-text mb-6">Content Development Process</h3>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-5 gap-4 mb-16">
            {[
              { phase: '01', title: 'Discovery', weeks: 'Week 1–2', activities: ['Stakeholder & SME interviews', 'Audience & needs analysis', 'Existing content audit', 'Learning objectives definition'] },
              { phase: '02', title: 'Design', weeks: 'Week 2–3', activities: ['Instructional design blueprint', 'Storyboard & script writing', 'Visual design style guide', 'Prototype / proof of concept'] },
              { phase: '03', title: 'Development', weeks: 'Week 3–6', activities: ['E-learning module build', 'Video production', 'Interactive exercise creation', 'Assessment integration'] },
              { phase: '04', title: 'Review & Refinement', weeks: 'Week 6–7', activities: ['SME & stakeholder review', 'Feedback incorporation', 'Accessibility audit (WCAG 2.1)', 'QA testing on target devices'] },
              { phase: '05', title: 'Deployment', weeks: 'Week 7–8', activities: ['SCORM/xAPI packaging', 'LMS upload & testing', 'Learner communication plan', 'Source file handover'] },
            ].map((s) => (
              <StaggerItem key={s.phase}>
                <div className="bg-light-gray rounded-2xl p-5 h-full">
                  <div className="text-3xl font-black text-primary/20 font-heading mb-2">{s.phase}</div>
                  <h4 className="font-bold font-heading text-dark-text mb-1">{s.title}</h4>
                  <p className="text-xs text-medium-gray mb-3">{s.weeks}</p>
                  <ul className="space-y-1">
                    {s.activities.map((a) => (
                      <li key={a} className="text-xs text-medium-gray flex items-start gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-green-accent shrink-0 mt-0.5" />{a}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Features + Deliverables */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection>
              <Card variant="feature">
                <h3 className="text-lg font-bold font-heading text-dark-text mb-4">Content Features We Include</h3>
                <ul className="space-y-2">
                  {[
                    'Scenario-based learning (real workplace situations)',
                    'Interactive exercises (drag-and-drop, click-to-reveal, sorting)',
                    'Video-based instruction (animation, live action, screencasts)',
                    'Knowledge checks (formative assessments throughout)',
                    'Gamification elements (points, badges, leaderboards)',
                    'Mobile-responsive design (works on any device)',
                    'Accessibility compliance (WCAG 2.1 AA)',
                    'Multi-language support (Hindi + 8 regional languages available)',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-medium-gray">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <Card variant="feature">
                <h3 className="text-lg font-bold font-heading text-dark-text mb-4">Typical Deliverables Per Course</h3>
                <ul className="space-y-2 mb-6">
                  {[
                    'SCORM 1.2/2004 or xAPI package (LMS-ready)',
                    'Source files (Articulate, Adobe Captivate, or equivalent)',
                    'Facilitator guide (for blended programmes)',
                    'Learner resources (job aids, quick reference guides)',
                    'Assessment question bank (with answer rationales)',
                  ].map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-medium-gray">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{d}
                    </li>
                  ))}
                </ul>
                <h3 className="text-lg font-bold font-heading text-dark-text mb-3">Pricing Tiers</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Basic module (30 min)', price: '₹1L – ₹2L' },
                    { label: 'Advanced interactive (60 min)', price: '₹2.5L – ₹4L' },
                    { label: 'Scenario simulation', price: '₹5L – ₹10L' },
                    { label: 'Full onboarding (10+ modules)', price: '₹15L – ₹30L' },
                    { label: 'Volume discount (10+ courses)', price: '15–25% off' },
                  ].map((p) => (
                    <div key={p.label} className="flex justify-between py-1.5 border-b border-border-gray last:border-0">
                      <span className="text-sm text-medium-gray">{p.label}</span>
                      <span className="text-sm font-medium font-mono text-primary">{p.price}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          </div>

          {/* Hyundai Success Story */}
          <AnimatedSection>
            <Card variant="case-study">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <Badge variant="cyan" size="sm">SUCCESS STORY</Badge>
                  <h3 className="mt-2 text-xl font-bold font-heading text-dark-text">Hyundai — Automotive</h3>
                  <p className="text-sm text-medium-gray mt-2">
                    Hyundai needed to train 5,000+ dealership service technicians on new EV models. Static PDFs and PowerPoint decks weren't cutting it — technicians were failing certification exams and customers were complaining.
                    4Edge developed 50 interactive technical modules with 3D animations, exploded-view diagrams, and hands-on simulations.
                  </p>
                </div>
                <div className="md:w-64">
                  <h4 className="text-sm font-semibold text-dark-text mb-3">Results</h4>
                  <ul className="space-y-1.5">
                    {[
                      '50 technical modules delivered',
                      '91% completion rate (vs. 38% before)',
                      '30% improvement in customer satisfaction scores',
                      'Certification pass rate: 88% (first attempt)',
                    ].map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-medium-gray">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICE 1.3: ILT */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="SERVICE 1.3" title="Instructor-Led Training Management" subtitle="Seamlessly manage in-person, virtual, and blended training programs with certified expert trainers." align="left" />
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <AnimatedSection>
              <Card variant="feature" className="h-full">
                <h3 className="text-lg font-bold font-heading text-dark-text mb-4">Instructor Services</h3>
                <ul className="space-y-2">
                  {[
                    'Certified professional trainers with industry-specific expertise',
                    'Train-the-trainer programmes (build internal capability)',
                    'Master trainers for critical / high-stakes programmes',
                    'Bilingual trainers (English + regional languages)',
                    'Instructor performance tracking & quality assurance',
                    'Talent pool of 200+ domain experts across India',
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-medium-gray">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{s}
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <Card variant="feature" className="h-full">
                <h3 className="text-lg font-bold font-heading text-dark-text mb-4">Virtual ILT (VILT)</h3>
                <ul className="space-y-2">
                  {[
                    'Live online training (Zoom, Teams, WebEx)',
                    'Engaging virtual facilitation — not boring webinars',
                    'Interactive activities (polls, breakouts, whiteboards)',
                    'Recording & on-demand access post-session',
                    'Virtual classroom management & tech support',
                    'Attendance tracking & automated certificate issuance',
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-medium-gray">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{s}
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <Card variant="feature" className="h-full">
                <h3 className="text-lg font-bold font-heading text-dark-text mb-4">Classroom Training Management</h3>
                <ul className="space-y-2 mb-6">
                  {[
                    'Venue selection & logistics coordination',
                    'Training material printing & distribution',
                    'Attendance tracking & certificate issuance',
                    'Post-training assessments & feedback collection',
                    'Calendar integration (Outlook, Google)',
                    'Resource & equipment booking',
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-medium-gray">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{s}
                    </li>
                  ))}
                </ul>
                <h4 className="font-semibold text-dark-text mb-2 text-sm">Pricing</h4>
                <div className="space-y-2">
                  {[
                    { label: 'Trainer per day', price: '₹25,000 – ₹50,000' },
                    { label: 'VILT per session (2 hrs)', price: '₹15,000 – ₹30,000' },
                    { label: 'Train-the-trainer programme', price: '₹2L – ₹5L' },
                    { label: 'Full blended programme management', price: 'Custom quote' },
                  ].map((p) => (
                    <div key={p.label} className="flex justify-between py-1.5 border-b border-border-gray last:border-0">
                      <span className="text-xs text-medium-gray">{p.label}</span>
                      <span className="text-xs font-medium font-mono text-primary">{p.price}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SERVICE 1.4: COMPLIANCE */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="SERVICE 1.4" title="Compliance Training Programs" subtitle="Automated, audit-ready compliance training for regulated industries." align="left" />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Safety & Industrial', areas: ['OSHA compliance', 'Fire safety', 'Chemical handling', 'PPE training', 'OISD & PNGRB (Oil & Gas)'] },
              { title: 'BFSI Regulatory', areas: ['RBI compliance', 'SEBI regulations', 'IRDAI requirements', 'AML/KYC training', 'Data protection'] },
              { title: 'Data Privacy', areas: ['GDPR compliance', 'Indian IT Act', 'DPDP Act', 'Cybersecurity awareness', 'Information security'] },
              { title: 'Healthcare', areas: ['Medical device compliance', 'Patient safety', 'Clinical protocols', 'HIPAA awareness', 'Infection control'] },
              { title: 'Oil & Gas', areas: ['Process safety (PSM)', 'Emergency response', 'Environmental compliance', 'Work permit systems', 'Hazard communication'] },
              { title: 'General Corporate', areas: ['Sexual harassment (POSH)', 'Code of conduct', 'Anti-bribery/corruption', 'Workplace safety', 'Diversity & inclusion'] },
            ].map((c) => (
              <StaggerItem key={c.title}>
                <Card variant="feature" className="h-full">
                  <h3 className="font-bold font-heading text-dark-text mb-3">{c.title}</h3>
                  <ul className="space-y-1.5">
                    {c.areas.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-medium-gray">
                        <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />{a}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SERVICE 1.5: STRATEGY */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="SERVICE 1.5" title="Learning Strategy & Consulting" subtitle="Expert guidance for your learning technology decisions, program design, and measurement." align="left" />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Target className="w-5 h-5" />, title: 'Needs Analysis', desc: 'Comprehensive assessment of your learning ecosystem, gaps, and opportunities.' },
              { icon: <Settings className="w-5 h-5" />, title: 'Technology Selection', desc: 'Vendor-neutral evaluation and recommendation of the right learning technology stack.' },
              { icon: <BarChart3 className="w-5 h-5" />, title: 'ROI Measurement', desc: 'Kirkpatrick model evaluation, business impact analysis, and executive reporting.' },
              { icon: <Users className="w-5 h-5" />, title: 'Competency Frameworks', desc: 'Design role-specific competency models and learning paths for your workforce.' },
              { icon: <Lightbulb className="w-5 h-5" />, title: 'Change Management', desc: 'Drive adoption with stakeholder engagement, communication plans, and champion networks.' },
              { icon: <Clock className="w-5 h-5" />, title: 'Optimization', desc: 'Continuous improvement through analytics, A/B testing, and content effectiveness analysis.' },
            ].map((s) => (
              <StaggerItem key={s.title}>
                <Card variant="feature" className="h-full">
                  <IconWrapper size="sm" className="mb-3">{s.icon}</IconWrapper>
                  <h3 className="font-bold font-heading text-dark-text mb-2">{s.title}</h3>
                  <p className="text-sm text-medium-gray">{s.desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="METHODOLOGY" title="The 4Edge Methodology" subtitle="Our proven 5-phase approach ensures every engagement delivers measurable results." />
          </AnimatedSection>
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              {ltsMethodology.map((step, i) => (
                <div key={step.phase} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</div>
                    {i < ltsMethodology.length - 1 && <div className="w-0.5 flex-1 bg-primary/20 mt-2" />}
                  </div>
                  <div className="pb-4">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold font-heading text-dark-text">{step.title}</h3>
                      <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">{step.duration}</span>
                    </div>
                    <p className="text-sm text-medium-gray mb-2">{step.description}</p>
                    {step.deliverables && (
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((d) => (<Badge key={d} variant="primary" size="sm">{d}</Badge>))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY 4EDGE */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="WHY US" title="Why 4Edge for Learning & Training" />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'End-to-End Capability', desc: 'LMS + content + training + consulting under one roof.' },
              { num: '02', title: '15+ Years Experience', desc: 'Deep expertise across industries and learning modalities.' },
              { num: '03', title: 'Indian Enterprise Focus', desc: 'Built for Indian regulatory, linguistic, and business needs.' },
              { num: '04', title: 'AI-First Approach', desc: '92% accuracy AI assessment — nobody else has this.' },
              { num: '05', title: 'Proven at Scale', desc: '70+ successful implementations including BPCL, Infosys, Hyundai.' },
              { num: '06', title: 'Dedicated Support', desc: '4-hour SLA, dedicated account managers, on-site support.' },
            ].map((r) => (
              <StaggerItem key={r.num}>
                <div className="flex gap-4 items-start">
                  <span className="font-mono text-2xl font-bold text-primary/20">{r.num}</span>
                  <div>
                    <h3 className="font-bold font-heading text-dark-text mb-1">{r.title}</h3>
                    <p className="text-sm text-medium-gray">{r.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="CASE STUDIES" title="Client Success Stories" />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {ltsCaseStudies.map((cs) => (
              <StaggerItem key={cs.company}>
                <Card variant="case-study" className="h-full flex flex-col">
                  <Badge variant="cyan" size="sm">{cs.badge}</Badge>
                  <h3 className="mt-2 text-lg font-bold font-heading text-dark-text">{cs.company}</h3>
                  <p className="text-sm text-medium-gray mt-1 mb-3">{cs.challenge}</p>
                  <p className="text-sm text-medium-gray mb-3">{cs.solution}</p>
                  <ul className="space-y-1.5 flex-1">
                    {cs.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-medium-gray">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{r}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="PRICING" title="Flexible Pricing Models" subtitle="Choose the model that fits your budget and engagement style." />
          </AnimatedSection>
          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-border-gray">
                <thead>
                  <tr className="bg-primary-dark text-white">
                    <th className="text-left p-4 font-heading font-semibold">Model</th>
                    <th className="text-left p-4 font-heading font-semibold">Best For</th>
                    <th className="text-left p-4 font-heading font-semibold">Typical Range</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { model: 'Per-User Licensing', best: 'LMS platform access', range: 'From ₹1,800/user/year' },
                    { model: 'Project-Based', best: 'Defined implementations, content', range: '₹5L – ₹25L depending on complexity' },
                    { model: 'Time & Materials', best: 'Ongoing support, consulting, undefined scope', range: '₹3,000 – ₹8,000/hr' },
                    { model: 'Retainer', best: 'Continuous content development, managed services', range: '₹2L – ₹10L per month' },
                    { model: 'Packages', best: 'Common scenarios with predictable scope', range: 'Example: Quick Start = ₹15L' },
                  ].map((r, i) => (
                    <motion.tr key={r.model} className={i % 2 === 0 ? 'bg-white' : 'bg-light-gray/50'} initial={{ opacity: 1, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07, ease: 'easeOut' }}>
                      <td className="p-4 font-semibold text-dark-text text-sm">{r.model}</td>
                      <td className="p-4 text-sm text-medium-gray">{r.best}</td>
                      <td className="p-4 text-sm font-mono text-primary font-medium">{r.range}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="FAQ" title="Frequently Asked Questions" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto space-y-3">
              {ltsFAQs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 1, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
                >
                  <FAQAccordion question={faq.question} answer={faq.answer} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="py-20 md:py-24 gradient-cta">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading title="Ready to Transform Your Training?" light />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Schedule Consultation', desc: '60-minute discovery call to discuss your challenges and explore solutions. No sales pressure, just honest advice.', cta: 'Schedule Now', variant: 'primary' as const },
              { title: 'Request Proposal', desc: "Tell us about your project and we'll send a detailed proposal with scope, timeline, and pricing.", cta: 'Request Proposal', variant: 'green' as const },
              { title: 'Download Portfolio', desc: 'Detailed PDF with service descriptions, case studies, and pricing guidelines.', cta: 'Download PDF', variant: 'outline' as const },
            ].map((p) => (
              <StaggerItem key={p.title}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                  <h3 className="text-xl font-bold font-heading text-white mb-3">{p.title}</h3>
                  <p className="text-white/70 text-sm mb-6">{p.desc}</p>
                  <Button variant={p.variant} size="md" href="/company#contact" className={p.variant === 'outline' ? 'border-white text-white hover:bg-white hover:text-primary-dark' : ''}>{p.cta}</Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
