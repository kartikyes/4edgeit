import { useState } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2, Code2, Layers, Smartphone, Award,
  Users, Globe, Clock
} from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import Button from '../../components/ui/Button';
import SectionHeading from '../../components/ui/SectionHeading';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../../components/ui/AnimatedSection';
import { FAQAccordion, IconWrapper } from '../../components/ui/MegaMenu';
import { cspCaseStudies, cspFAQs } from '../../data/servicesData';
import HeroSection from '../../components/ui/HeroSection';

export default function CustomSoftwarePlatforms() {
  usePageMeta({
    title: 'Custom Learning Software Development | Enterprise Platform Solutions | 4Edge',
    description: 'Custom learning platforms, LMS development, training management systems & education technology. Built exactly to your requirements. 15+ years experience.',
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* HERO */}
      <HeroSection
        badge="SERVICES"
        title="Build Exactly What You Need,"
        titleHighlight="Not What Exists"
        subtitle="Custom learning platforms, EdTech applications, and training management systems designed for your unique workflows, industry requirements, and business model."
        proofLine="50+ Custom Platforms Built | 15+ Years Development Experience | Full-Stack Team"
        primaryCta={{ label: 'Discuss Your Project', href: '/company#contact' }}
        secondaryCta={{ label: 'View Portfolio', href: '/resources' }}
      />

      {/* OVERVIEW */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <Badge variant="primary" size="md">OVERVIEW</Badge>
                <h2 className="mt-4 text-3xl md:text-4xl font-extrabold font-heading text-dark-text">When Off-the-Shelf Doesn't Fit</h2>
                <p className="mt-4 text-medium-gray leading-relaxed">
                  When off-the-shelf LMS platforms don't fit your unique requirements, we build custom solutions from the ground up. Whether you're a training company serving enterprise clients, an educational institution with specialized workflows, or a corporation with complex compliance needs—we deliver software that works exactly the way you need.
                </p>
              </div>
              <div>
                <h3 className="font-bold font-heading text-dark-text mb-4">Our Custom Development Expertise</h3>
                <ul className="grid grid-cols-2 gap-3">
                  {[
                    'Learning Management Systems (LMS)',
                    'Learning Experience Platforms (LXP)',
                    'Training Provider Platforms (B2B2C)',
                    'Assessment & Examination Systems',
                    'Competency Management Systems',
                    'Certification & Credentialing Platforms',
                    'EdTech Mobile Applications',
                    'Learning Analytics Platforms',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-medium-gray">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="SERVICES" title="Custom Development Services" subtitle="Six specialized service areas covering every aspect of learning technology development." />
          </AnimatedSection>
          <div className="space-y-8">

            {/* 1. Custom LMS */}
            <AnimatedSection direction="left">
              <Card variant="feature">
                <div className="flex items-center gap-3 mb-3">
                  <IconWrapper><Code2 className="w-6 h-6" /></IconWrapper>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-dark-text">Custom LMS Development</h3>
                    <span className="font-mono text-xs text-primary">12–24 weeks</span>
                  </div>
                </div>
                <p className="text-medium-gray mb-4">Build a learning management system tailored to your exact requirements—not compromised by limitations of generic platforms.</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark-text text-sm mb-2">What We Build</h4>
                    <ul className="space-y-1.5">
                      {['Multi-tenant LMS for training providers', 'Industry-specific LMS (healthcare, banking, manufacturing)', 'Compliance-focused LMS with audit trails', 'White-label LMS for reselling', 'Extended enterprise LMS (partners, customers, franchisees)'].map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-medium-gray"><CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-text text-sm mb-2">Features We Implement</h4>
                    <ul className="space-y-1.5">
                      {['Custom user roles and workflows', 'Advanced assessment engines (AI, proctoring, adaptive)', 'Specialized reporting and analytics', 'Industry-specific integrations', 'Custom gamification mechanics', 'Unique certification workflows', 'Proprietary content protection', 'Advanced security requirements'].map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-medium-gray"><CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm text-medium-gray bg-light-gray rounded-lg p-3 italic">Example: Built white-label LMS for a training company serving 50+ enterprise clients. Multi-tenant architecture, custom branding per client, usage-based billing integration, and client-specific reporting. The platform now generates ₹5Cr annual recurring revenue.</p>
              </Card>
            </AnimatedSection>

            {/* 2. LXP */}
            <AnimatedSection direction="right">
              <Card variant="feature">
                <div className="flex items-center gap-3 mb-3">
                  <IconWrapper><Layers className="w-6 h-6" /></IconWrapper>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-dark-text">Learning Experience Platform (LXP)</h3>
                    <span className="font-mono text-xs text-primary">16–28 weeks</span>
                  </div>
                </div>
                <p className="text-medium-gray mb-4">Modern, Netflix-style learning experiences with AI-powered recommendations, social learning, and skill-based pathways.</p>
                <h4 className="font-semibold text-dark-text text-sm mb-2">LXP Capabilities</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {['Content aggregation (internal + external sources)', 'AI-powered content recommendations', 'Skills-based learning paths', 'Social learning features (forums, peer learning)', 'Microlearning and mobile-first design', 'Integration with content providers (LinkedIn Learning, Coursera)'].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-medium-gray"><CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{f}</li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>

            {/* 3. B2B2C */}
            <AnimatedSection direction="left">
              <Card variant="feature">
                <div className="flex items-center gap-3 mb-3">
                  <IconWrapper><Globe className="w-6 h-6" /></IconWrapper>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-dark-text">Training Provider Platforms (B2B2C)</h3>
                    <span className="font-mono text-xs text-primary">16–30 weeks</span>
                  </div>
                </div>
                <p className="text-medium-gray mb-4">If you're a training company serving enterprise clients, you need more than an LMS—you need a business platform.</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark-text text-sm mb-2">What We Build</h4>
                    <ul className="space-y-1.5">
                      {['Client management (CRM-like functionality)', 'Course catalog and scheduling', 'Instructor management and assignment', 'Billing and invoicing (per-user, per-course, packages)', 'White-label client portals', 'Resource management (trainers, classrooms, equipment)', 'Revenue and utilization analytics'].map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-medium-gray"><CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-light-gray rounded-lg p-4">
                    <h4 className="font-semibold text-dark-text text-sm mb-2">Real-World Example</h4>
                    <p className="text-sm text-medium-gray italic">Built platform for compliance training company serving 100+ banks. Manages 500+ instructors, 5,000+ training sessions annually, automated billing (₹50Cr+ transactions), and white-label portals for each bank.</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            {/* 4. Assessment */}
            <AnimatedSection direction="right">
              <Card variant="feature">
                <div className="flex items-center gap-3 mb-3">
                  <IconWrapper><Award className="w-6 h-6" /></IconWrapper>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-dark-text">Assessment & Examination Systems</h3>
                    <span className="font-mono text-xs text-primary">12–20 weeks</span>
                  </div>
                </div>
                <p className="text-medium-gray mb-4">Secure, scalable platforms for high-stakes assessments, certifications, and competitive exams.</p>
                <h4 className="font-semibold text-dark-text text-sm mb-2">Features</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {['Question bank management (taxonomies, tagging, versioning)', 'Test assembly (randomization, adaptive difficulty)', 'Secure browser and proctoring (webcam, screen monitoring)', 'Automated grading with AI subjective evaluation', 'Psychometric analysis (IRT, reliability, validity)', 'Certificate issuance and verification', 'Fraud detection (plagiarism, collusion)'].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-medium-gray"><CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{f}</li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>

            {/* 5. Competency */}
            <AnimatedSection direction="left">
              <Card variant="feature">
                <div className="flex items-center gap-3 mb-3">
                  <IconWrapper><Users className="w-6 h-6" /></IconWrapper>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-dark-text">Competency Management Systems</h3>
                    <span className="font-mono text-xs text-primary">14–22 weeks</span>
                  </div>
                </div>
                <p className="text-medium-gray mb-4">Track, develop, and certify workforce competencies across your organization.</p>
                <h4 className="font-semibold text-dark-text text-sm mb-2">Capabilities</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {['Competency framework management (roles, levels, competencies)', 'Skills gap analysis (current vs. required)', 'Development plan creation (how to close gaps)', '360-degree assessments', 'Succession planning', 'Learning assignment based on gaps', 'Competency-based hiring integration'].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-medium-gray"><CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{f}</li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>

            {/* 6. Mobile */}
            <AnimatedSection direction="right">
              <Card variant="feature">
                <div className="flex items-center gap-3 mb-3">
                  <IconWrapper><Smartphone className="w-6 h-6" /></IconWrapper>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-dark-text">Mobile Learning Applications</h3>
                    <span className="font-mono text-xs text-primary">10–18 weeks</span>
                  </div>
                </div>
                <p className="text-medium-gray mb-4">Native iOS and Android apps for on-the-go learning, offline access, and mobile-first experiences.</p>
                <h4 className="font-semibold text-dark-text text-sm mb-2">App Features</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {['Offline content caching', 'Push notifications (deadlines, new content)', 'Mobile-optimized assessments', 'AR integrations (equipment training)', 'Just-in-time performance support', 'QR code scanning (access content)', 'Camera integration (submit assignments)'].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-medium-gray"><CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{f}</li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="PROCESS" title="Our Development Process" subtitle="Agile methodology with bi-weekly demos and continuous feedback loops." />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { phase: '01', title: 'Discovery & Requirements', duration: '2–4 weeks', items: ['Stakeholder interviews', 'User research and personas', 'Requirements documentation', 'Technical architecture design', 'Project plan and timeline'], deliverable: 'Requirements specification + Technical design document' },
              { phase: '02', title: 'Design', duration: '2–4 weeks', items: ['User experience (UX) design', 'User interface (UI) design', 'Wireframes and mockups', 'Interactive prototypes', 'Design system creation'], deliverable: 'Complete design files (Figma/Sketch)' },
              { phase: '03', title: 'Development', duration: '8–20 weeks', items: ['Agile sprints (2-week iterations)', 'Frontend development', 'Backend development', 'Database design and optimization', 'API development', 'Integration development'], deliverable: 'Working software — sprint demos every 2 weeks' },
              { phase: '04', title: 'Testing', duration: '2–4 weeks', items: ['Functional testing', 'Performance and load testing', 'Security testing and penetration testing', 'User acceptance testing (UAT)', 'Bug fixing and optimization'], deliverable: 'Tested, production-ready software' },
              { phase: '05', title: 'Deployment & Launch', duration: '1–2 weeks', items: ['Production environment setup', 'Data migration', 'Training (admin and users)', 'Go-live support', 'Post-launch monitoring'], deliverable: 'Live application + documentation' },
              { phase: '06', title: 'Support & Maintenance', duration: 'Ongoing', items: ['Bug fixes and issue resolution', 'Performance monitoring', 'Security updates', 'Feature enhancements', 'Quarterly reviews'], deliverable: 'Maintained, optimized platform' },
            ].map((step) => (
              <StaggerItem key={step.phase}>
                <Card variant="feature" className="h-full">
                  <div className="font-mono text-2xl font-bold text-primary/30 mb-1">{step.phase}</div>
                  <h3 className="font-bold font-heading text-dark-text text-sm">{step.title}</h3>
                  <span className="font-mono text-xs text-primary">{step.duration}</span>
                  <ul className="mt-3 space-y-1.5">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-medium-gray">
                        <CheckCircle2 className="w-3 h-3 text-green-accent shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 pt-3 border-t border-border-gray text-xs text-primary font-medium">Deliverable: {step.deliverable}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="TECHNOLOGY" title="Our Technology Stack" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full min-w-120 bg-white rounded-2xl overflow-hidden shadow-sm border border-border-gray">
                <thead>
                  <tr className="bg-primary-dark text-white">
                    <th className="text-left p-3 md:p-4 font-heading font-semibold text-sm w-[28%]">Layer</th>
                    <th className="text-left p-3 md:p-4 font-heading font-semibold text-sm">Technologies</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { layer: 'Frontend', tech: 'React.js, Vue.js, Angular, React Native, Flutter, HTML5, CSS3, responsive design' },
                    { layer: 'Backend', tech: 'Node.js, Python (Django/Flask), PHP (Laravel), RESTful APIs, GraphQL, Microservices architecture' },
                    { layer: 'Database', tech: 'PostgreSQL, MySQL (relational), MongoDB (NoSQL), Redis (caching)' },
                    { layer: 'Cloud & Infrastructure', tech: 'AWS, Azure, Google Cloud — Docker, Kubernetes (containerization), CI/CD pipelines (automated deployment)' },
                    { layer: 'AI/ML', tech: 'TensorFlow, PyTorch, spaCy NLP, OpenAI APIs' },
                    { layer: 'Security', tech: 'OAuth 2.0, JWT (authentication), AES-256 encryption, Penetration testing, OWASP compliance' },
                  ].map((r, i) => (
                    <motion.tr key={r.layer} className={i % 2 === 0 ? 'bg-white' : 'bg-light-gray/50'} initial={{ opacity: 1, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07, ease: 'easeOut' }}>
                      <td className="p-3 md:p-4 font-semibold text-dark-text text-xs md:text-sm">{r.layer}</td>
                      <td className="p-3 md:p-4 text-xs md:text-sm text-medium-gray">{r.tech}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="PRICING" title="Project Pricing Guide" />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { tier: 'Small Project', price: '₹5L – ₹10L', timeline: '12–16 weeks', desc: 'MVPs, simple platforms, prototypes', features: ['Single-tenant application', 'Core features only', 'Basic integrations', 'Responsive web', 'Standard security'] },
              { tier: 'Medium Project', price: '₹10L – ₹20L', timeline: '16–24 weeks', desc: 'Full-featured platforms', features: ['Multi-tenant capable', 'Advanced features', 'Multiple integrations', 'Mobile app (1 platform)', 'Enhanced security'], highlighted: true },
              { tier: 'Large Project', price: '₹20L – ₹40L+', timeline: '24–40 weeks', desc: 'Complex enterprise platforms', features: ['Full multi-tenant', 'AI/ML features', 'Enterprise integrations', 'Native iOS & Android', 'Enterprise security & compliance'] },
            ].map((t) => (
              <StaggerItem key={t.tier}>
                <Card variant="pricing" highlighted={t.highlighted} className="h-full flex flex-col">
                  {t.highlighted && <div className="absolute -top-4 left-1/2 -translate-x-1/2"><Badge variant="primary" size="md">MOST COMMON</Badge></div>}
                  <h3 className="text-xl font-bold font-heading text-dark-text">{t.tier}</h3>
                  <div className="mt-3"><span className="font-mono text-3xl font-bold text-primary">{t.price}</span></div>
                  <p className="text-sm text-medium-gray mt-1">{t.desc}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-medium-gray"><Clock className="w-4 h-4" />{t.timeline}</div>
                  <ul className="mt-4 space-y-2 flex-1">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-medium-gray">
                        <CheckCircle2 className="w-4 h-4 text-green-accent shrink-0 mt-0.5" />{f}
                      </li>
                    ))}
                  </ul>
                  <Button variant={t.highlighted ? 'primary' : 'outline'} size="md" href="/company#contact" className="mt-6 w-full">Get Custom Quote</Button>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimatedSection>
            <div className="mt-8 bg-white rounded-2xl border border-border-gray p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-bold font-heading text-dark-text">Maintenance & Support</h3>
                <p className="text-sm text-medium-gray mt-1">Ongoing maintenance retainer covers security updates, bug fixes, performance monitoring, and feature enhancements.</p>
              </div>
              <div className="shrink-0 text-right">
                <span className="font-mono text-2xl font-bold text-primary">15–20%</span>
                <p className="text-xs text-medium-gray">of development cost annually</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY 4EDGE */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="WHY US" title="Why Choose 4Edge for Custom Development" />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-5 gap-6">
            {[
              { num: '01', title: 'Domain Expertise', desc: '15+ years in learning technology — we understand the domain deeply.' },
              { num: '02', title: 'Full-Stack Team', desc: 'Frontend, backend, mobile, AI/ML, DevOps — all in-house.' },
              { num: '03', title: 'Agile Process', desc: 'Bi-weekly demos, continuous feedback, transparent progress.' },
              { num: '04', title: 'Post-Launch Support', desc: '3-6 months warranty + optional retainer for ongoing development.' },
              { num: '05', title: 'IP Ownership', desc: '100% intellectual property transfers to you on final payment.' },
            ].map((r) => (
              <StaggerItem key={r.num}>
                <div className="text-center">
                  <div className="font-mono text-3xl font-bold text-primary/20 mb-2">{r.num}</div>
                  <h3 className="font-bold font-heading text-dark-text mb-1 text-sm">{r.title}</h3>
                  <p className="text-xs text-medium-gray">{r.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="CASE STUDIES" title="Featured Projects" />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {cspCaseStudies.map((cs) => (
              <StaggerItem key={cs.company}>
                <Card variant="case-study" className="h-full flex flex-col">
                  <Badge variant="cyan" size="sm">{cs.badge}</Badge>
                  <h3 className="mt-2 text-lg font-bold font-heading text-dark-text">{cs.company}</h3>
                  <p className="text-sm text-medium-gray mt-2">{cs.challenge}</p>
                  <p className="text-sm text-medium-gray mt-2">{cs.solution}</p>
                  <ul className="mt-3 space-y-1.5 flex-1">
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

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="FAQ" title="Frequently Asked Questions" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto space-y-3">
              {cspFAQs.map((faq, i) => (
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

      {/* CTA */}
      <section className="py-20 md:py-24 gradient-cta">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <AnimatedSection>
            <SectionHeading title="Ready to Build Your Custom Platform?" subtitle="Share your requirements and get a detailed proposal within 48 hours." light />
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button variant="primary" size="lg" href="/company#contact">Schedule Discovery Call</Button>
              <Button variant="green" size="lg" href="/company#contact">Request Proposal</Button>
              <Button variant="outline" size="lg" href="/resources" className="border-white text-white hover:bg-white hover:text-primary-dark">View Portfolio</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
