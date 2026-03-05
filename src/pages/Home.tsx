import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight, Building2, Brain, Layers, Factory, Landmark, Flame, Monitor,
  Trophy, Shield, Server, CheckCircle2, X as XIcon, ClipboardList, Calculator,
  BarChart3, BookOpen, Phone, Mail, MapPin, Clock
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
// StatCounter replaced by shared HeroSection stats
import AnimatedSection, { StaggerContainer, StaggerItem, FadeScaleItem } from '../components/ui/AnimatedSection';
import { FAQAccordion, IconWrapper } from '../components/ui/MegaMenu';
import {
  valuePropositionCards, industryCards, comparisonData,
  caseStudies, techHighlights, pricingTiers, resourceCards,
  clientLogos, faqData,
} from '../data/homeData';
import HeroSection from '../components/ui/HeroSection';

const iconMap: Record<string, React.ReactNode> = {
  building: <Building2 className="w-6 h-6" />,
  brain: <Brain className="w-6 h-6" />,
  layers: <Layers className="w-6 h-6" />,
  factory: <Factory className="w-6 h-6" />,
  landmark: <Landmark className="w-6 h-6" />,
  flame: <Flame className="w-6 h-6" />,
  monitor: <Monitor className="w-6 h-6" />,
  trophy: <Trophy className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  server: <Server className="w-6 h-6" />,
  'clipboard-list': <ClipboardList className="w-6 h-6" />,
  calculator: <Calculator className="w-6 h-6" />,
  'bar-chart-3': <BarChart3 className="w-6 h-6" />,
  'book-open': <BookOpen className="w-6 h-6" />,
};

export default function Home() {
  usePageMeta({
    title: 'Enterprise LMS & Learning Solutions India | AI-Powered Training Platform | 4Edge IT',
    description: 'Trusted by Bharat Petroleum, Infosys & Hyundai. Enterprise LMS, custom learning platforms, VR training & educational games. ~100 companies, 200,000+ enrollments. Request demo.',
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ====== HERO SECTION (shared) ====== */}
      <HeroSection
        badge="Enterprise Learning Technology"
        title="Enterprise Learning Technology Built for"
        titleHighlight="India's Top Manufacturers, Banks & Energy Leaders"
        subtitle="AI-Powered LMS • Custom Learning Platforms • VR Training • Educational Games • E-learning Development • IT services — One Partner. Complete Solution."
        proofLine="Trusted by Bharat Petroleum, Infosys, Hyundai, Toyota & IDFC — 80+ Enterprise Clients | 30,000+ Active Users | 200,000+ Course Enrollments"
        primaryCta={{ label: 'Request Demo', href: '/company#contact' }}
        secondaryCta={{ label: 'Explore K-Nest LMS', href: '/products/k-nest-lms' }}
      />

      {/* ====== SECTION 1: VALUE PROPOSITION ====== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              badge="WHY 4EDGE"
              title="The Only Indian Learning Tech Partner with AI, Custom IT Application Development & Immersive Training Under One Roof"
              subtitle="Most LMS vendors force you to choose: buy rigid software or hire expensive consultants. 4Edge delivers both. We combine a powerful AI-driven, customizable LMS platform (K-Nest) with game-based learning expertise—so your training solution grows with your business, not against it."
            />
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {valuePropositionCards.map((card) => (
              <StaggerItem key={card.title}>
                <Card variant="feature">
                  <IconWrapper size="lg" className="mb-4">
                    {iconMap[card.icon]}
                  </IconWrapper>
                  <h3 className="text-xl font-bold font-heading text-heading mb-2">{card.title}</h3>
                  <p className="text-medium-gray mb-4">{card.description}</p>
                  <ul className="space-y-2">
                    {card.bullets?.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-medium-gray">
                        <CheckCircle2 className="w-4 h-4 text-green-accent shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="mt-12 text-center">
            <Button variant="primary" href="/company#why-4edge" icon={<ArrowRight className="w-4 h-4" />}>
              See How We're Different
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ====== SECTION 2: INDUSTRIES WE SERVE ====== */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              badge="INDUSTRIES"
              title="Proven Solutions for Your Industry's Unique Training Challenges"
              subtitle="From shop floor safety to banking compliance, we've deployed learning technology where it matters most."
            />
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryCards.map((card) => (
              <StaggerItem key={card.industry}>
                <Card variant="industry" className="h-full hover:border-primary">
                  <IconWrapper className="mb-4">
                    {iconMap[card.icon]}
                  </IconWrapper>
                  <h3 className="text-lg font-bold font-heading text-dark-text mb-1">{card.industry}</h3>
                  <p className="text-sm text-primary font-medium mb-3">Clients: {card.clients}</p>
                  <ul className="space-y-2 mb-4">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-medium-gray">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" size="sm" href={card.link} icon={<ArrowRight className="w-4 h-4" />}>
                    View Solutions
                  </Button>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ====== SECTION 3: CORE OFFERINGS ====== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              badge="OUR SOLUTIONS"
              title="From Ready-to-Deploy Platform to Fully Custom Solutions"
            />
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* K-Nest LMS Card */}
            <AnimatedSection direction="left">
              <div className="bg-primary-dark rounded-2xl p-8 md:p-10 text-white h-full flex flex-col">
                <Badge variant="light" size="md">FLAGSHIP PRODUCT</Badge>
                <h3 className="mt-4 text-2xl md:text-3xl font-bold font-heading">K-Nest LMS</h3>
                <p className="mt-3 text-white/70">AI-powered enterprise learning management system. Deploy in 48 hours, scale to 50,000+ users.</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {[
                    '48-hour SaaS deployment',
                    'AI subjective assessment – Automatic evaluation of open-ended answers',
                    'Advanced gamification & social learning',
                    'White-label with your branding',
                    'Mobile-first iOS & Android apps',
                    'Enterprise security (ISO 27001, GDPR)',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-green-accent shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-mono text-cyan-accent text-sm">Starting from ₹1,800/user/year</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant="primary" size="md" href="/products/k-nest-lms">Explore K-Nest</Button>
                  <Button variant="outline" size="md" href="/company#contact" className="border-white/30 text-white hover:bg-white hover:text-primary-dark">Request Demo</Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Custom Solutions Card */}
            <AnimatedSection direction="right">
              <div className="bg-white rounded-2xl border border-border-gray p-8 md:p-10 h-full flex flex-col">
                <Badge variant="primary" size="md">CUSTOM SOLUTIONS</Badge>
                <h3 className="mt-4 text-2xl md:text-3xl font-bold font-heading text-dark-text">Custom Development</h3>
                <p className="mt-3 text-medium-gray">When off-the-shelf isn't enough — we build exactly what your enterprise needs.</p>
                <div className="mt-6 space-y-6 flex-1">
                  {[
                    { title: 'Custom Learning Platforms', desc: 'Bespoke LMS, LXP, or training provider platforms built to your specs' },
                    { title: 'VR/AR Training', desc: 'Immersive safety, equipment, and soft skills training' },
                    { title: 'Serious Games', desc: 'Engaging game-based learning for compliance, sales, and leadership' },
                    { title: 'Learning Analytics', desc: 'Custom dashboards and AI-powered insights' },
                  ].map((s) => (
                    <div key={s.title}>
                      <h4 className="font-semibold text-dark-text font-heading">{s.title}</h4>
                      <p className="text-sm text-medium-gray mt-1">{s.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant="primary" size="md" href="/services/custom-software-platforms">View All Services</Button>
                  <Button variant="outline" size="md" href="/company#contact">Talk to an Expert</Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ====== SECTION 4: COMPARISON TABLE ====== */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              badge="COMPARISON"
              title="Why India's Most Demanding Enterprises Choose 4Edge"
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-border-gray">
                <thead>
                  <tr className="bg-primary-dark text-white">
                    <th className="text-left p-4 md:p-5 font-heading font-semibold w-1/4">What You Need</th>
                    <th className="text-left p-4 md:p-5 font-heading font-semibold w-[37.5%]">Typical LMS Vendors</th>
                    <th className="text-left p-4 md:p-5 font-heading font-semibold w-[37.5%] bg-primary">4Edge Solution</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <motion.tr
                      key={row.feature}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-light-gray/50'}
                      initial={{ opacity: 1, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.07, ease: 'easeOut' }}
                    >
                      <td className="p-4 md:p-5 font-semibold text-dark-text text-sm">{row.feature}</td>
                      <td className="p-4 md:p-5 text-sm text-gray-900">
                        <span className="flex items-start gap-2">
                          <XIcon className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          {row.typical}
                        </span>
                      </td>
                      <td className="p-4 md:p-5 text-sm text-gray-900 bg-green-accent/5">
                        <span className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-accent shrink-0 mt-0.5" />
                          {row.fourEdge}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ====== SECTION 5: SUCCESS STORIES ====== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              badge="CASE STUDIES"
              title="Real Results from Real Enterprises"
              subtitle="See how India's leading companies transformed their training with 4Edge."
            />
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <StaggerItem key={cs.company}>
                <Card variant="case-study" className="h-full flex flex-col">
                  {/* Logo placeholder */}
                  <div className="h-12 w-32 bg-light-gray rounded-lg flex items-center justify-center text-xs font-semibold text-medium-gray mb-4">
                    {cs.company}
                  </div>
                  <Badge variant="cyan" size="sm">{cs.badge}</Badge>
                  <h3 className="mt-3 text-lg font-bold font-heading text-dark-text">{cs.company}</h3>
                  <p className="text-sm text-medium-gray mt-1 mb-3">{cs.industry}</p>
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold uppercase text-dark-text tracking-wide">Challenge</h4>
                    <p className="text-sm text-medium-gray mt-1">{cs.challenge}</p>
                  </div>
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold uppercase text-dark-text tracking-wide">Solution</h4>
                    <p className="text-sm text-medium-gray mt-1">{cs.solution}</p>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-semibold uppercase text-dark-text tracking-wide mb-2">Results</h4>
                    <ul className="space-y-1.5">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-medium-gray">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="ghost" size="sm" href="/resources#case-studies" className="mt-4" icon={<ArrowRight className="w-4 h-4" />}>
                    Read Case Study
                  </Button>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ====== SECTION 6: TECHNOLOGY HIGHLIGHTS ====== */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              badge="TECHNOLOGY"
              title="Enterprise-Grade Technology That Actually Works"
              subtitle="Built by engineers who understand enterprise scale, security, and performance requirements."
            />
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {techHighlights.map((tech) => (
              <FadeScaleItem key={tech.title}>
                <Card variant="feature" className="h-full">
                  <IconWrapper size="lg" className="mb-4">
                    {iconMap[tech.icon]}
                  </IconWrapper>
                  <h3 className="text-xl font-bold font-heading text-dark-text mb-2">{tech.title}</h3>
                  <p className="text-medium-gray mb-4">{tech.description}</p>
                  {tech.useCases && (
                    <div>
                      <h4 className="text-xs font-semibold uppercase text-dark-text tracking-wide mb-2">Use Cases</h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.useCases.map((uc) => (
                          <Badge key={uc} variant="primary" size="sm">{uc}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </FadeScaleItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ====== SECTION 7: PRICING ====== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              badge="PRICING"
              title="Flexible Pricing for Every Enterprise Stage"
              subtitle="Transparent pricing that scales with your organization. No hidden fees, no surprises."
            />
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <StaggerItem key={tier.name}>
                <Card variant="pricing" highlighted={tier.highlighted} className="h-full flex flex-col relative">
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge variant="primary" size="md">{tier.badge}</Badge>
                    </div>
                  )}
                  {!tier.highlighted && tier.badge && (
                    <Badge variant="cyan" size="sm">{tier.badge}</Badge>
                  )}
                  <h3 className="mt-3 text-xl font-bold font-heading text-dark-text">{tier.name}</h3>
                  <div className="mt-4">
                    <span className="font-mono text-4xl font-bold text-primary">{tier.price}</span>
                    <span className="text-medium-gray text-sm">{tier.period}</span>
                  </div>
                  <p className="text-sm text-medium-gray mt-1">{tier.userRange}</p>
                  <ul className="mt-6 space-y-3 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-medium-gray">
                        <CheckCircle2 className="w-4 h-4 text-green-accent shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button
                      variant={tier.ctaVariant || 'primary'}
                      size="md"
                      href="/company#contact"
                      className="w-full"
                    >
                      {tier.cta}
                    </Button>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ====== SECTION 8: RESOURCES PREVIEW ====== */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              badge="RESOURCES"
              title="Learn How Leading Enterprises Are Transforming Training"
            />
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCards.map((res) => (
              <StaggerItem key={res.title}>
                <Card variant="resource" className="h-full flex flex-col">
                  <IconWrapper className="mb-4">
                    {iconMap[res.icon]}
                  </IconWrapper>
                  <h3 className="text-lg font-bold font-heading text-dark-text mb-2">{res.title}</h3>
                  <p className="text-sm text-medium-gray mb-4 flex-1">{res.description}</p>
                  <Button variant="ghost" size="sm" href={res.href} icon={<ArrowRight className="w-4 h-4" />}>
                    {res.cta}
                  </Button>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ====== SECTION 9: CLIENT LOGO WALL ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              badge="OUR CLIENTS"
              title="Trusted by Industry Leaders Across India"
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
              {clientLogos.map((name) => (
                <div
                  key={name}
                  className="h-16 px-8 bg-light-gray rounded-xl flex items-center justify-center text-medium-gray font-semibold text-sm hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  {name}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-12">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-medium-gray">
              <span className="flex items-center gap-1.5">🛡️ ISO 27001 Certified</span>
              <span className="flex items-center gap-1.5">🔒 GDPR Compliant</span>
              <span className="flex items-center gap-1.5">☁️ AWS Partner</span>
              <span className="flex items-center gap-1.5">💼 Microsoft Partner</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ====== SECTION 10: FAQ ====== */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              badge="FAQ"
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about 4Edge and our learning technology solutions."
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqData.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 1, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
                >
                  <FAQAccordion
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                  />
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ====== SECTION 11: FINAL CTA ====== */}
      <section className="py-20 md:py-24 gradient-cta">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              title="Ready to Transform Your Enterprise Training?"
              subtitle="Join 70+ companies and 30,000+ users who trust 4Edge for mission-critical learning technology."
              light
            />
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: 'Request Live Demo',
                desc: '30-minute personalized walkthrough of K-Nest LMS tailored to your industry.',
                cta: 'Request Demo',
                variant: 'primary' as const,
              },
              {
                title: 'Start Free Trial',
                desc: '30-day free trial with full feature access. No credit card required.',
                cta: 'Start Free Trial',
                variant: 'green' as const,
              },
              {
                title: 'Talk to an Expert',
                desc: 'Free consultation with our learning technology specialists.',
                cta: 'Schedule Consultation',
                variant: 'outline' as const,
              },
            ].map((path) => (
              <StaggerItem key={path.title}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                  <h3 className="text-xl font-bold font-heading text-white mb-3">{path.title}</h3>
                  <p className="text-white/70 text-sm mb-6">{path.desc}</p>
                  <Button variant={path.variant} size="md" href="https://knestlms.com/try-demo" className={path.variant === 'outline' ? 'border-white text-white hover:bg-white hover:text-primary-dark' : ''}>
                    {path.cta}
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="mt-12">
            <div className="flex flex-wrap justify-center gap-8 text-white/60 text-sm">
              <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> Call Us: +91 6362 002 402</span>
              <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> Email: contact@4edgeit.com</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Office: Kapikad 4th Cross Road, Bejai-Kapikad, Mangaluru – 575004 Karnataka, India</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Mon-Fri, 9:00 AM - 6:00 PM IST</span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
