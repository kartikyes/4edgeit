import {
  Factory, HeartPulse, Briefcase, GraduationCap, Rocket, Building2,
  CheckCircle2
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import { IconWrapper } from '../components/ui/MegaMenu';
import HeroSection from '../components/ui/HeroSection';

const solutions = [
  {
    icon: <Factory className="w-6 h-6" />,
    title: 'Manufacturing & Heavy Industry',
    badge: 'INDUSTRY',
    desc: 'Safety training, equipment operation, compliance management, and skill development for shop-floor and plant workers.',
    features: ['VR safety simulations', 'Equipment operation training', 'ISO/OSHA compliance', 'Multi-language support', 'Offline capability for plants'],
    clients: 'BPCL, Hyundai, L&T, Tata Steel',
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: 'Healthcare & Pharmaceutical',
    badge: 'INDUSTRY',
    desc: 'Clinical training, drug safety, GxP compliance, patient care simulations, and continuing medical education.',
    features: ['FDA/GxP compliance', 'Clinical simulations', 'Drug interaction training', 'CME management', 'Regulatory audit trails'],
    clients: 'Apollo Hospitals, Dr. Reddy\'s, Cipla',
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Corporate L&D',
    badge: 'FUNCTION',
    desc: 'Enterprise-wide learning ecosystems for onboarding, leadership development, skill building, and performance management.',
    features: ['LMS/LXP implementation', 'Custom content development', 'Gamified learning', 'Skills taxonomy', 'Analytics & reporting'],
    clients: 'Infosys, TCS, Wipro, HCL',
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'EdTech & Training Providers',
    badge: 'INDUSTRY',
    desc: 'Multi-tenant platforms for training companies, certification bodies, and educational institutions to sell and deliver courses.',
    features: ['Multi-tenant SaaS', 'E-commerce & billing', 'White-label portals', 'Assessment engine', 'Revenue analytics'],
    clients: 'NIIT, Manipal, Amity',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Starter Stack',
    badge: 'PACKAGE',
    desc: 'Everything a mid-size company needs to launch a digital learning program. K-Nest LMS + initial content + setup.',
    features: ['K-Nest LMS (up to 500 users)', '20 hours of e-learning content', 'LMS configuration & setup', '3 months support', 'Admin training'],
    price: '₹4.5L all-inclusive',
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Enterprise Stack',
    badge: 'PACKAGE',
    desc: 'Full-scale enterprise learning ecosystem with LMS, custom content, integrations, and ongoing managed services.',
    features: ['K-Nest Enterprise (unlimited)', 'HRMS/SSO integration', '100+ hours custom content', 'Dedicated success manager', '12 months managed service'],
    price: 'Custom pricing',
  },
];

export default function Solutions() {
  usePageMeta({
    title: 'Industry Solutions & Packages | 4Edge IT Solutions',
    description: 'Learning technology solutions tailored for Manufacturing, Healthcare, Corporate L&D, and EdTech. Pre-built packages and custom implementations.',
  });

  return (
    <>
      {/* HERO */}
      <HeroSection
        variant="compact"
        badge="SOLUTIONS"
        title="Solutions Tailored to"
        titleHighlight="Your Industry"
        subtitle="Industry-specific expertise combined with flexible technology. Whether you're in Manufacturing, Healthcare, Corporate L&D, or EdTech — we've done it before."
        primaryCta={{ label: 'Talk to an Expert', href: '/company#contact' }}
        secondaryCta={{ label: 'See All Services', href: '/services/learning-training' }}
        stats={[
          { value: 200, suffix: '+', label: 'Clients' },
          { value: 10, suffix: '+', label: 'Industries' },
          { value: 50, suffix: '+', label: 'Platforms' },
          { value: 15, suffix: '+', label: 'Years' },
        ]}
      />

      {/* SOLUTIONS GRID */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="BY INDUSTRY" title="Industry Solutions" subtitle="Deep domain expertise across key verticals." />
          </AnimatedSection>
          <div className="space-y-8">
            {solutions.slice(0, 4).map((sol, idx) => (
              <AnimatedSection key={sol.title} direction={idx % 2 === 0 ? 'left' : 'right'}>
                <Card variant="feature">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-3 mb-3">
                        <IconWrapper>{sol.icon}</IconWrapper>
                        <div>
                          <Badge variant="cyan" size="sm">{sol.badge}</Badge>
                          <h3 className="text-xl font-bold font-heading text-dark-text mt-1">{sol.title}</h3>
                        </div>
                      </div>
                      <p className="text-medium-gray mb-4">{sol.desc}</p>
                      {sol.clients && <p className="text-sm text-medium-gray"><span className="font-semibold text-dark-text">Key Clients:</span> {sol.clients}</p>}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-dark-text mb-2">Key Capabilities</h4>
                      <ul className="space-y-1.5">
                        {sol.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-medium-gray">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="PACKAGES" title="Pre-Built Solution Packages" subtitle="Get started faster with our ready-to-deploy learning packages." />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {solutions.slice(4).map((pkg) => (
              <StaggerItem key={pkg.title}>
                <Card variant="pricing" className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <IconWrapper>{pkg.icon}</IconWrapper>
                    <div>
                      <Badge variant="primary" size="sm">{pkg.badge}</Badge>
                      <h3 className="text-xl font-bold font-heading text-dark-text mt-1">{pkg.title}</h3>
                    </div>
                  </div>
                  {pkg.price && <p className="font-mono text-2xl font-bold text-primary mb-2">{pkg.price}</p>}
                  <p className="text-medium-gray mb-4">{pkg.desc}</p>
                  <ul className="space-y-2 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-medium-gray">
                        <CheckCircle2 className="w-4 h-4 text-green-accent shrink-0 mt-0.5" />{f}
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" size="md" href="/company#contact" className="mt-6 w-full">Get Started</Button>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 gradient-cta">
        <div className="max-w-screen-2xl mx-auto px-4 text-center">
          <AnimatedSection>
            <SectionHeading title="Don't See Your Industry?" subtitle="We've worked across 10+ verticals. Let's discuss how we can help your specific situation." light />
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button variant="primary" size="lg" href="/company#contact">Talk to an Expert</Button>
              <Button variant="outline" size="lg" href="/resources" className="border-white text-white hover:bg-white hover:text-primary-dark">Read Case Studies</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
