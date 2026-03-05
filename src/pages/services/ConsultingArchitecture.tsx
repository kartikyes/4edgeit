import { useState } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2, Lightbulb, Target, Settings, BarChart3,
  Shield, Layers, Search, Clock
} from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import Button from '../../components/ui/Button';
import SectionHeading from '../../components/ui/SectionHeading';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../../components/ui/AnimatedSection';
import { FAQAccordion, IconWrapper } from '../../components/ui/MegaMenu';
import { consultingCaseStudies, consultingFAQs, consultingServicesData, consultingScenarios, consultingApproach, consultingPricing } from '../../data/servicesData';
import type { ReactNode } from 'react';
import HeroSection from '../../components/ui/HeroSection';

export default function ConsultingArchitecture() {
  usePageMeta({
    title: 'Learning Technology Consulting | Training Architecture Services | 4Edge',
    description: 'Strategic consulting for learning technology selection, implementation, and optimization. 15+ years experience with 70+ enterprise transformations.',
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scenarioIconMap: Record<string, ReactNode> = {
    search: <Search className="w-6 h-6" />,
    settings: <Settings className="w-6 h-6" />,
    layers: <Layers className="w-6 h-6" />,
    'bar-chart-3': <BarChart3 className="w-6 h-6" />,
    shield: <Shield className="w-6 h-6" />,
    target: <Target className="w-6 h-6" />,
  };

  return (
    <>
      {/* HERO */}
      <HeroSection
        badge="SERVICES"
        title="Make the Right"
        titleHighlight="Learning Technology Decisions"
        subtitle="Expert consulting to select, implement, and optimize learning technology—avoiding costly mistakes and ensuring your training programs deliver measurable business results."
        proofLine="70+ Consulting Engagements | 15+ Years Experience | ₹50Cr+ in Client Savings"
        primaryCta={{ label: 'Schedule Consultation', href: '/company#contact' }}
        secondaryCta={{ label: 'Download Consulting Guide', href: '/resources' }}
        stats={[
          { value: 70, suffix: '+', label: 'Consulting Engagements' },
          { value: 15, suffix: '+', label: 'Years Experience' },
          { value: 50, suffix: 'Cr+', label: 'Client Savings' },
        ]}
      />

      {/* WHEN YOU NEED CONSULTING */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="WHEN TO ENGAGE" title="When You Need Consulting" subtitle="Common scenarios where expert guidance saves time, money, and frustration." />
          </AnimatedSection>
          <AnimatedSection>
            <p className="text-lg text-medium-gray max-w-6xl mx-auto text-center mb-12">
              Learning technology decisions are high-stakes: the wrong choice costs millions, delays training, and frustrates stakeholders.
              4Edge consultants bring 15+ years and 70+ implementations worth of experience to help you make confident decisions and avoid expensive mistakes.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {consultingScenarios.map((scenario) => (
              <StaggerItem key={scenario.title}>
                <Card variant="feature" className="h-full">
                  <IconWrapper>{scenarioIconMap[scenario.iconName]}</IconWrapper>
                  <h3 className="font-bold font-heading text-dark-text mt-3">{scenario.title}</h3>
                  <p className="text-sm text-medium-gray mt-2">{scenario.desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CONSULTING SERVICES */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="SERVICES" title="Consulting Services" subtitle="Six specialized consulting engagements covering all aspects of learning technology strategy." />
          </AnimatedSection>
          <div className="space-y-8">
            {consultingServicesData.map((svc, idx) => (
              <AnimatedSection key={svc.num} direction={idx % 2 === 0 ? 'left' : 'right'}>
                <Card variant="feature">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="font-mono text-3xl font-bold text-primary/20">{svc.num}</span>
                        <div>
                          <h3 className="text-xl font-bold font-heading text-dark-text">{svc.title}</h3>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="font-mono text-sm text-primary font-semibold">{svc.price}</span>
                            <span className="flex items-center gap-1 text-sm text-medium-gray"><Clock className="w-3.5 h-3.5" />{svc.timeline}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-medium-gray mb-4">{svc.desc}</p>
                      {svc.subSections && (
                        <div className="grid sm:grid-cols-2 gap-4">
                          {svc.subSections.map((sub) => (
                            <div key={sub.title}>
                              <h4 className="text-xs font-semibold uppercase text-dark-text tracking-wide mb-1.5">{sub.title}</h4>
                              <ul className="space-y-1">
                                {sub.items.map((item) => (
                                  <li key={item} className="flex items-start gap-1.5 text-xs text-medium-gray">
                                    <CheckCircle2 className="w-3 h-3 text-green-accent shrink-0 mt-0.5" />{item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-dark-text mb-2">Deliverables</h4>
                        <ul className="space-y-1.5">
                          {svc.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-sm text-medium-gray">
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{d}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {svc.roiNote && (
                        <div className="bg-green-accent/10 rounded-xl p-4">
                          <h4 className="text-xs font-semibold uppercase text-green-accent tracking-wide mb-1">ROI</h4>
                          <p className="text-sm text-dark-text font-medium">{svc.roiNote}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="APPROACH" title="Our Consulting Approach" subtitle="Four principles that guide every engagement." />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-4 gap-8">
            {consultingApproach.map((p) => (
              <StaggerItem key={p.num}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-mono text-xl font-bold text-primary">{p.num}</span>
                  </div>
                  <h3 className="font-bold font-heading text-dark-text mb-2">{p.title}</h3>
                  <p className="text-sm text-medium-gray">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="PRICING" title="Engagement & Pricing" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-border-gray">
                <thead>
                  <tr className="bg-primary-dark text-white">
                    <th className="text-left p-4 font-heading font-semibold">Engagement Type</th>
                    <th className="text-left p-4 font-heading font-semibold">Price Range</th>
                    <th className="text-left p-4 font-heading font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {consultingPricing.map((r, i) => (
                    <tr key={r.type} className={i % 2 === 0 ? 'bg-white' : 'bg-light-gray/50'}>
                      <td className="p-4 text-sm font-semibold text-dark-text">{r.type}</td>
                      <td className="p-4 text-sm font-mono text-primary font-semibold">{r.price}</td>
                      <td className="p-4 text-sm text-medium-gray">{r.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="CASE STUDIES" title="Featured Consulting Engagements" />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {consultingCaseStudies.map((cs) => (
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
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="FAQ" title="Frequently Asked Questions" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="max-w-5xl mx-auto space-y-3">
              {consultingFAQs.map((faq, i) => (
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
        <div className="max-w-screen-2xl mx-auto px-4 text-center">
          <AnimatedSection>
            <SectionHeading title="Ready for Expert Guidance?" subtitle="Book a free 30-minute discovery call to discuss your learning technology challenges." light />
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button variant="primary" size="lg" href="/company#contact">Schedule Free Consultation</Button>
              <Button variant="outline" size="lg" href="/company#contact" className="border-white text-white hover:bg-white hover:text-primary-dark">Request Proposal</Button>
              <Button variant="outline" size="lg" href="/resources" className="border-white text-white hover:bg-white hover:text-primary-dark">Download Consulting Guide</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
