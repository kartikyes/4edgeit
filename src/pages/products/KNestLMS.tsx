import { useState } from 'react';
import {
  Brain, Server, Trophy, Layers, BarChart3, Smartphone,
  Shield, Edit3, Award, Plug, CheckCircle2, X as XIcon, Rocket,
  TrendingUp, Clock, Download
} from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import Button from '../../components/ui/Button';
import SectionHeading from '../../components/ui/SectionHeading';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../../components/ui/AnimatedSection';
import { FAQAccordion, IconWrapper } from '../../components/ui/MegaMenu';
import {
  knestQuickBenefits, knestFeatures, knestTechSpecs,
  deploymentOptions, knestComparison, knestCaseStudies, knestFAQs,
} from '../../data/productsData';
import HeroSection from '../../components/ui/HeroSection';
import StackedCard from '../../components/ui/StackedCard';
import type { ReactNode } from 'react';

const iconMap: Record<string, ReactNode> = {
  brain: <Brain className="w-6 h-6" />,
  server: <Server className="w-6 h-6" />,
  trophy: <Trophy className="w-6 h-6" />,
  layers: <Layers className="w-6 h-6" />,
  'bar-chart-3': <BarChart3 className="w-6 h-6" />,
  smartphone: <Smartphone className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  edit: <Edit3 className="w-6 h-6" />,
  award: <Award className="w-6 h-6" />,
  plug: <Plug className="w-6 h-6" />,
  rocket: <Rocket className="w-6 h-6" />,
  'trending-up': <TrendingUp className="w-6 h-6" />,
};

export default function KNestLMS() {
  usePageMeta({
    title: 'K-Nest LMS | AI-Powered Enterprise Learning Platform | 4Edge IT',
    description: 'K-Nest LMS: AI-powered enterprise learning management system. 70+ enterprise clients, 30,000+ users, 99.9% uptime. Deploy in 48 hours.',
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ====== HERO ====== */}
      <HeroSection
        badge="FLAGSHIP PRODUCT"
        title="K-Nest LMS: AI-Powered Learning Platform"
        titleHighlight="Built for Enterprise Scale"
        subtitle="The complete enterprise learning management system with AI-powered assessments, multi-tenant architecture, advanced gamification, and Indian data sovereignty."
        proofLine="70+ Enterprises | 30,000+ Active Users | ISO 27001 Certified"
        primaryCta={{ label: 'Request Live Demo', href: '/company#contact' }}
        secondaryCta={{ label: 'Start 30-Day Free Trial', href: '/company#contact' }}
      />

      {/* ====== STATS BAR ====== */}
      <section className="bg-navy py-12">
        <div className="max-w-screen-2xl mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { value: '70+', label: 'Enterprise Clients' },
              { value: '30,000+', label: 'Active Users' },
              { value: '200,000+', label: 'Course Completions (92% avg)' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '48-Hour', label: 'Deployment from Contract' },
              { value: '92%', label: 'AI Assessment Accuracy' },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <div className="space-y-1">
                  <div className="text-2xl font-extrabold font-heading text-primary">{s.value}</div>
                  <div className="text-xs text-medium-gray leading-tight">{s.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ====== QUICK OVERVIEW ====== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="OVERVIEW" title="Everything You Need, Nothing You Don't" subtitle="K-Nest is India's most advanced enterprise learning management system, combining AI-powered intelligence with unmatched flexibility.
              Whether you need a ready-to-deploy platform or a fully customised solution, K-Nest scales from 50 to 50,000+ users without compromising performance or security."/>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {knestQuickBenefits.map((b) => (
              <StaggerItem key={b.title}>
                <Card variant="feature" className="text-center">
                  <div className="flex justify-center mb-4">
                    <IconWrapper size="lg">{iconMap[b.icon]}</IconWrapper>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-dark-text mb-2">{b.title}</h3>
                  <p className="text-medium-gray">{b.desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ====== CORE FEATURES ====== */}
      <section id="features" className="bg-light-gray">
        {/* Section heading — scrolls away in normal flow before stacking begins */}
        <div className="pt-20 md:pt-24 pb-10 max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              badge="FEATURES"
              title="Comprehensive Feature Set for Enterprise Learning"
              subtitle="K-Nest includes every feature enterprise L&D teams actually use, with zero bloat. No hidden fees, no surprise add-ons, no 'contact sales for pricing' on basic functionality."
            />
          </AnimatedSection>
        </div>

        {/* Stacked scroll cards */}
        <StackedCard
          items={knestFeatures}
          topOffset={88}
          renderItem={(feat) => (
            <div className="max-w-7xl mx-auto px-4">
              <Card variant="feature">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                      <IconWrapper>{iconMap[feat.icon]}</IconWrapper>
                      <h3 className="text-xl font-bold font-heading text-dark-text">{feat.title}</h3>
                    </div>
                    <p className="text-medium-gray mb-4">{feat.description}</p>
                    {feat.bullets && feat.bullets.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {feat.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-medium-gray">
                            <CheckCircle2 className="w-4 h-4 text-green-accent shrink-0 mt-0.5" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    {/* Extra labelled groups e.g. Psychology Behind It, Analytics Capabilities */}
                    {feat.extraGroups?.map((group) => (
                      <div key={group.title} className="mt-4">
                        <h4 className="text-sm font-semibold text-dark-text mb-2">{group.title}</h4>
                        <ul className="space-y-1.5">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-medium-gray">
                              <CheckCircle2 className="w-4 h-4 text-cyan-accent shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {/* Workflow Steps */}
                    {feat.workflowSteps && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-dark-text mb-3">Workflow Example</h4>
                        <ol className="space-y-2">
                          {feat.workflowSteps.map((step, i) => (
                            <li key={step.phase} className="flex items-start gap-3 text-sm">
                              <span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                                {i + 1}
                              </span>
                              <div>
                                <span className="font-semibold text-dark-text">{step.title}:</span>{' '}
                                <span className="text-medium-gray">{step.desc}</span>
                              </div>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                    {/* Security categories */}
                    {feat.securityCategories && (
                      <div className="mt-4 grid sm:grid-cols-2 gap-3">
                        {feat.securityCategories.map((cat) => (
                          <div key={cat.category} className="bg-light-gray rounded-lg p-3">
                            <h4 className="text-xs font-semibold uppercase text-dark-text tracking-wide mb-1">{cat.category}</h4>
                            <ul className="space-y-1">
                              {cat.items.map((item) => (
                                <li key={item} className="text-xs text-medium-gray flex items-start gap-1.5">
                                  <CheckCircle2 className="w-3 h-3 text-green-accent shrink-0 mt-0.5" />{item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Certifications */}
                    {feat.certifications && (
                      <div className="mt-3">
                        <h4 className="text-sm font-semibold text-dark-text mb-2">Certifications</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {feat.certifications.map((c) => (
                            <Badge key={c} variant="primary" size="sm">{c}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {/* Compliance Reporting */}
                    {feat.complianceReporting && (
                      <div className="mt-3">
                        <h4 className="text-sm font-semibold text-dark-text mb-2">Pre-built Compliance Reports for</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {feat.complianceReporting.map((r) => (
                            <Badge key={r} variant="primary" size="sm">{r}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="space-y-4">
                    {feat.businessImpact && (
                      <div className="bg-green-accent/10 rounded-xl p-4">
                        <h4 className="text-xs font-semibold uppercase text-green-accent tracking-wide mb-1">Business Impact</h4>
                        <p className="text-sm text-dark-text font-medium">{feat.businessImpact}</p>
                      </div>
                    )}
                    {feat.clientStory && (
                      <div className="bg-cyan-accent/10 rounded-xl p-4">
                        <h4 className="text-xs font-semibold uppercase text-cyan-accent tracking-wide mb-1">{feat.clientStory.client}</h4>
                        <p className="text-sm text-dark-text">{feat.clientStory.story}</p>
                      </div>
                    )}
                    {feat.useCases && (
                      <div className="bg-primary/5 rounded-xl p-4">
                        <h4 className="text-xs font-semibold uppercase text-primary tracking-wide mb-2">Use Cases</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {feat.useCases.map((uc) => (
                            <Badge key={uc} variant="primary" size="sm">{uc}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          )}
        />
      </section>

      {/* ====== TECHNICAL SPECS ====== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="TECHNICAL" title="Built for Enterprise Performance" />
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <Card variant="feature">
                <h3 className="text-lg font-bold font-heading text-dark-text mb-4">Architecture</h3>
                <div className="space-y-3">
                  {knestTechSpecs.architecture.map((s) => (
                    <div key={s.label} className="flex justify-between py-2 border-b border-border-gray last:border-0">
                      <span className="text-sm text-medium-gray">{s.label}</span>
                      <span className="text-sm font-medium text-dark-text font-mono">{s.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <Card variant="feature">
                <h3 className="text-lg font-bold font-heading text-dark-text mb-4">Performance</h3>
                <div className="space-y-3">
                  {knestTechSpecs.performance.map((s) => (
                    <div key={s.label} className="flex justify-between py-2 border-b border-border-gray last:border-0">
                      <span className="text-sm text-medium-gray">{s.label}</span>
                      <span className="text-sm font-medium text-dark-text font-mono">{s.value}</span>
                    </div>
                  ))}
                </div>
                <h3 className="text-lg font-bold font-heading text-dark-text mt-6 mb-3">Browser Support</h3>
                <div className="flex flex-wrap gap-2">
                  {knestTechSpecs.browser.map((b) => <Badge key={b} variant="primary" size="sm">{b}</Badge>)}
                </div>
                <h3 className="text-lg font-bold font-heading text-dark-text mt-6 mb-3">Accessibility</h3>
                <ul className="space-y-1">
                  {knestTechSpecs.accessibility.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-sm text-medium-gray">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-accent" />{a}
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ====== DEPLOYMENT OPTIONS ====== */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="DEPLOYMENT" title="Choose Your Deployment Model" subtitle="Flexible options to match your security, compliance, and infrastructure requirements." />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {deploymentOptions.map((opt) => (
              <StaggerItem key={opt.title}>
                <Card variant="pricing" highlighted={opt.recommended} className="h-full flex flex-col">
                  {opt.recommended && <div className="absolute -top-4 left-1/2 -translate-x-1/2"><Badge variant="primary" size="md">RECOMMENDED</Badge></div>}
                  <h3 className="text-xl font-bold font-heading text-dark-text">{opt.title}</h3>
                  <p className="text-sm text-primary mt-1">{opt.tagline}</p>
                  <div className="flex items-center gap-2 mt-3 text-medium-gray text-sm">
                    <Clock className="w-4 h-4" /> {opt.timeline}
                  </div>
                  <ul className="mt-4 space-y-2 flex-1">
                    {opt.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-medium-gray">
                        <CheckCircle2 className="w-4 h-4 text-green-accent shrink-0 mt-0.5" />{f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-mono text-primary font-semibold">{opt.price}</p>
                  <Button variant={opt.recommended ? 'primary' : 'outline'} size="md" href="/company#contact" className="mt-4 w-full">
                    Get Started
                  </Button>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ====== IMPLEMENTATION TIMELINE ====== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="TIMELINE" title="From Decision to Go-Live" subtitle="Two proven implementation paths based on your deployment choice." />
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'SaaS Deployment Path',
                steps: [
                  { phase: 'Day 1–2', label: 'Platform Setup', desc: 'Instance creation, branding, basic configuration' },
                  { phase: 'Week 1', label: 'Configuration', desc: 'Roles, permissions, workflows, SSO integration' },
                  { phase: 'Week 2', label: 'Content & Data', desc: 'Content migration, user import, testing' },
                  { phase: 'Week 3', label: 'Go-Live', desc: 'Training, pilot launch, support handoff' },
                ],
              },
              {
                title: 'On-Premise Deployment Path',
                steps: [
                  { phase: 'Week 1–2', label: 'Infrastructure', desc: 'Server setup, security hardening, network config' },
                  { phase: 'Week 3–5', label: 'Installation', desc: 'Platform deployment, integrations, customization' },
                  { phase: 'Week 6–8', label: 'Testing', desc: 'UAT, performance testing, security audit' },
                  { phase: 'Week 9–12', label: 'Go-Live', desc: 'Data migration, training, phased rollout' },
                ],
              },
            ].map((path) => (
              <AnimatedSection key={path.title}>
                <Card variant="feature">
                  <h3 className="text-lg font-bold font-heading text-dark-text mb-6">{path.title}</h3>
                  <div className="space-y-4">
                    {path.steps.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">{i + 1}</div>
                          {i < path.steps.length - 1 && <div className="w-0.5 flex-1 bg-primary/20 mt-1" />}
                        </div>
                        <div className="pb-4">
                          <div className="font-mono text-xs text-primary mb-1">{step.phase}</div>
                          <h4 className="font-semibold text-dark-text">{step.label}</h4>
                          <p className="text-sm text-medium-gray">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SUPPORT & TRAINING ====== */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="SUPPORT" title="Support & Training" subtitle="Every plan includes implementation support. Premium add-ons available." />
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <Card variant="feature">
                <h3 className="text-lg font-bold font-heading text-dark-text mb-4">Included with Every Plan</h3>
                <ul className="space-y-3">
                  {['Dedicated implementation manager', 'Admin & instructor training sessions', 'Knowledge base & video tutorials', 'Email support', 'Regular platform updates', 'Quarterly product roadmap sharing'].map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-medium-gray">
                      <CheckCircle2 className="w-4 h-4 text-green-accent shrink-0 mt-0.5" />{s}
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <Card variant="feature">
                <h3 className="text-lg font-bold font-heading text-dark-text mb-4">Premium Add-Ons</h3>
                <ul className="space-y-3">
                  {['Dedicated account manager (4hr SLA)', 'Phone support with escalation', 'On-site support visits', 'Quarterly business reviews', 'Custom report development', 'Priority feature requests'].map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-medium-gray">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />{s}
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ====== CASE STUDIES ====== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="SUCCESS STORIES" title="Enterprise Results at Scale" />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {knestCaseStudies.map((cs) => (
              <StaggerItem key={cs.company}>
                <Card variant="case-study" className="h-full flex flex-col">
                  <Badge variant="cyan" size="sm">{cs.badge}</Badge>
                  <h3 className="mt-3 text-lg font-bold font-heading text-dark-text">{cs.company}</h3>
                  <p className="text-sm text-primary mb-3">{cs.industry}</p>
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-dark-text">Challenge</h4>
                    <p className="text-sm text-medium-gray mt-1">{cs.challenge}</p>
                  </div>
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-dark-text">Solution</h4>
                    <p className="text-sm text-medium-gray mt-1">{cs.solution}</p>
                  </div>
                  <div className="mb-3 flex-1">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-dark-text mb-2">Results</h4>
                    <ul className="space-y-1.5">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-medium-gray">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {cs.testimonial && (
                    <blockquote className="mt-3 italic text-sm text-primary border-l-2 border-primary pl-3">
                      {cs.testimonial}
                    </blockquote>
                  )}
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ====== COMPARISON TABLE ====== */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="COMPARISON" title="K-Nest vs Generic LMS Solutions" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-border-gray">
                <thead>
                  <tr className="bg-primary-dark text-white">
                    <th className="text-left p-4 font-heading font-semibold">Feature</th>
                    <th className="text-left p-4 font-heading font-semibold">Generic LMS</th>
                    <th className="text-left p-4 font-heading font-semibold bg-primary">K-Nest LMS</th>
                  </tr>
                </thead>
                <tbody>
                  {knestComparison.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-light-gray/50'}>
                      <td className="p-4 font-semibold text-dark-text text-sm">{row.feature}</td>
                      <td className="p-4 text-sm text-medium-gray">
                        <span className="flex items-start gap-2"><XIcon className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />{row.typical}</span>
                      </td>
                      <td className="p-4 text-sm text-dark-text bg-green-accent/5">
                        <span className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-accent shrink-0 mt-0.5" />{row.fourEdge}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ====== WHY K-NEST ====== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="WHY K-NEST" title="5 Reasons to Choose K-Nest LMS" />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-5 gap-6">
            {[
              { num: '01', title: 'AI-First', desc: 'Only LMS with subjective AI assessment (92% accuracy)' },
              { num: '02', title: 'Indian-Built', desc: 'Data sovereignty, regional languages, GST compliance' },
              { num: '03', title: 'Fast Deploy', desc: '48-hour SaaS deployment vs. months with others' },
              { num: '04', title: 'Full-Stack', desc: 'LMS + VR/AR + Games + Custom Dev = One partner' },
              { num: '05', title: 'Scale Ready', desc: '50 to 50,000+ users with zero performance impact' },
            ].map((r) => (
              <StaggerItem key={r.num}>
                <div className="text-center">
                  <div className="font-mono text-4xl font-bold text-primary/20 mb-2">{r.num}</div>
                  <h3 className="font-bold font-heading text-dark-text mb-2">{r.title}</h3>
                  <p className="text-sm text-medium-gray">{r.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ====== GETTING STARTED ====== */}
      <section className="py-20 md:py-24 gradient-cta">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading title="Get Started with K-Nest LMS" subtitle="Three simple paths to transform your enterprise learning." light />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Request Live Demo', desc: '30-minute personalized walkthrough.', cta: 'Request Demo', variant: 'primary' as const },
              { title: 'Start Free Trial', desc: '30-day full access, no credit card.', cta: 'Start Free Trial', variant: 'green' as const },
              { title: 'Talk to Sales', desc: 'Custom deployment consultation.', cta: 'Schedule Call', variant: 'outline' as const },
            ].map((p) => (
              <StaggerItem key={p.title}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                  <h3 className="text-xl font-bold font-heading text-white mb-3">{p.title}</h3>
                  <p className="text-white/70 text-sm mb-6">{p.desc}</p>
                  <Button variant={p.variant} size="md" href="/company#contact" className={p.variant === 'outline' ? 'border-white text-white hover:bg-white hover:text-primary-dark' : ''}>
                    {p.cta}
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="FAQ" title="Frequently Asked Questions" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto space-y-3">
              {knestFAQs.map((faq, i) => (
                <FAQAccordion key={i} question={faq.question} answer={faq.answer} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ====== DOWNLOADS ====== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="RESOURCES" title="Downloadable Resources" />
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'K-Nest LMS Product Brochure',
              'Enterprise LMS Checklist 2026',
              'K-Nest Technical Architecture',
              'K-Nest Pricing Guide',
            ].map((title) => (
              <StaggerItem key={title}>
                <Card variant="resource" className="text-center">
                  <Download className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-dark-text font-heading text-sm">{title}</h4>
                  <Button variant="ghost" size="sm" href="/resources" className="mt-2">Download PDF</Button>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
