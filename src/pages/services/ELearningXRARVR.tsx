import { useState } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2, Glasses, Eye, Brain, Shield, Users, BarChart3
} from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import Button from '../../components/ui/Button';
import SectionHeading from '../../components/ui/SectionHeading';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import AnimatedSection, { StaggerContainer, StaggerItem, FadeScaleItem } from '../../components/ui/AnimatedSection';
import { FAQAccordion, IconWrapper } from '../../components/ui/MegaMenu';
import { vrCaseStudies, vrFAQs, vrSolutions, xrHardware } from '../../data/servicesData';
import HeroSection, { MetricsVisual } from '../../components/ui/HeroSection';

export default function ELearningXRARVR() {
  usePageMeta({
    title: 'VR/AR/XR Training Solutions | Immersive Learning Development | 4Edge',
    description: 'Virtual reality training, augmented reality simulations & mixed reality learning experiences. Reduce training time 40%, improve retention 75%.',
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* HERO */}
      <HeroSection
        badge="SERVICES"
        title="Training That Feels Real"
        titleHighlight="Because It Is"
        subtitle="Virtual reality safety training, augmented reality equipment operation, and mixed reality simulations that reduce training time by 40% and improve knowledge retention by 75%."
        proofLine="50+ VR Experiences Built | 10,000+ Employees Trained in VR | 40% Faster Training"
        primaryCta={{ label: 'Experience VR Demo', href: '/company#contact' }}
        secondaryCta={{ label: 'Discuss Your Project', href: '/company#contact' }}
        stats={[
          { value: 50, suffix: '+', label: 'VR Experiences Built' },
          { value: 10000, suffix: '+', label: 'Trained in VR' },
          { value: 40, suffix: '%', label: 'Faster Training' },
        ]}
        visual={
          <MetricsVisual
            title="XR Delivery Modes"
            items={[
              { icon: <Glasses className="w-5 h-5" />, label: 'VR Immersive Training', value: '50+' },
              { icon: <Eye className="w-5 h-5" />, label: 'AR Overlay Guides' },
              { icon: <Brain className="w-5 h-5" />, label: 'Cognitive Simulations' },
              { icon: <Shield className="w-5 h-5" />, label: 'Safety & Hazard Sims' },
              { icon: <Users className="w-5 h-5" />, label: 'Employees Trained', value: '10K+' },
              { icon: <BarChart3 className="w-5 h-5" />, label: 'Retention Improvement', value: '+75%' },
            ]}
          />
        }
      />

      {/* OVERVIEW */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-medium-gray mb-8">
                Some training scenarios are too dangerous, too expensive, or too rare to practice in real life.
                VR/AR/XR solutions create realistic, immersive training experiences where employees can practise emergency response,
                equipment operation, and complex procedures without risk or cost of real-world training.
              </p>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { title: 'Learn by Doing', desc: 'Muscle memory through practice' },
                  { title: 'Safe Failure', desc: 'Mistakes without consequences' },
                  { title: 'Realistic Scenarios', desc: 'Real environments, real pressure' },
                  { title: 'Repetition', desc: 'Practice until mastery' },
                  { title: 'Measurable', desc: 'Track performance & decisions' },
                ].map((p) => (
                  <div key={p.title} className="bg-light-gray rounded-xl p-4 text-center">
                    <h4 className="font-semibold text-dark-text text-sm mb-1">{p.title}</h4>
                    <p className="text-xs text-medium-gray">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY IMMERSIVE TRAINING */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="WHY XR" title="Why Immersive Training?" subtitle="Research-backed advantages of VR/AR/XR over traditional training methods." />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-4 gap-8">
            {[
              { stat: '75%', label: 'Higher Retention', desc: 'VR training improves knowledge retention by 75% vs. classroom training, creating stronger neural pathways.' },
              { stat: '40%', label: 'Faster Training', desc: 'Immersive environments accelerate skill acquisition by removing real-world constraints.' },
              { stat: '4×', label: 'More Focused', desc: 'VR learners are 4× more focused than e-learning peers with fewer distractions.' },
              { stat: '3.75×', label: 'Emotional Connection', desc: 'VR creates stronger emotional connections to content, driving behavior change.' },
            ].map((item) => (
              <FadeScaleItem key={item.label}>
                <Card variant="feature" className="text-center h-full">
                  <div className="font-mono text-3xl font-bold text-primary">{item.stat}</div>
                  <h3 className="font-bold font-heading text-dark-text mt-2">{item.label}</h3>
                  <p className="text-sm text-medium-gray mt-2">{item.desc}</p>
                </Card>
              </FadeScaleItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* VR TRAINING TYPES */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="VR SOLUTIONS" title="Virtual Reality Training" subtitle="Fully immersive 3D environments for high-impact training scenarios." />
          </AnimatedSection>
          <div className="space-y-6">
            {vrSolutions.map((vr, idx) => (
              <AnimatedSection key={vr.title} direction={idx % 2 === 0 ? 'left' : 'right'}>
                <Card variant="feature">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-3 mb-3">
                        <IconWrapper><Glasses className="w-6 h-6" /></IconWrapper>
                        <div>
                          <h3 className="text-xl font-bold font-heading text-dark-text">{vr.title}</h3>
                          <span className="font-mono text-sm text-primary font-semibold">{vr.price}</span>
                        </div>
                      </div>
                      <p className="text-medium-gray mb-4">{vr.desc}</p>
                      <h4 className="text-sm font-semibold text-dark-text mb-2">Training Scenarios</h4>
                      <ul className="space-y-1.5 mb-4">
                        {vr.useCases.map((uc) => (
                          <li key={uc} className="flex items-start gap-2 text-sm text-medium-gray">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{uc}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-medium-gray"><span className="font-semibold text-dark-text">Industries:</span> {vr.industries}</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-dark-text mb-2">VR Advantages</h4>
                        <ul className="space-y-1.5">
                          {vr.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm text-medium-gray">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-accent shrink-0 mt-0.5" />{f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-green-accent/10 rounded-xl p-4">
                        <h4 className="text-xs font-semibold uppercase text-green-accent tracking-wide mb-1">Case Study Result</h4>
                        <p className="text-sm text-dark-text font-medium">{vr.caseStudy}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AR TRAINING TYPES */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="AR SOLUTIONS" title="Augmented Reality Training" subtitle="Overlay digital information on the real world for contextual, on-the-job learning." />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'AR Remote Assistance', price: '₹5L – ₹15L', desc: 'Guide field technicians through complex repairs with AR overlays. Expert sees technician’s view remotely, draws annotations on the live view — technician sees instructions overlaid on real equipment.', features: ['Live AR annotation overlay', 'Remote expert guidance', 'Hands-free voice commands', 'Works on HoloLens, RealWear'] },
              { title: 'AR Work Instructions', price: '₹6L – ₹18L', desc: 'Overlay step-by-step instructions directly on equipment. Workers see exactly where parts go, wiring diagrams, maintenance checklists — error reduction and hands-free operation without paper manuals.', features: ['Step-by-step overlay guidance', 'Assembly & wiring diagrams', 'Maintenance checklists', 'Real-time remote updates'] },
              { title: 'AR Product Training', price: '₹4L – ₹12L', desc: 'Interactive product exploded views, feature demonstrations, and guided selling tools using smartphone or tablet AR. Show customers how products work without the physical product present.', features: ['3D product visualization', 'Exploded views', 'Feature highlighting', 'Interactive demos'] },
            ].map((ar) => (
              <StaggerItem key={ar.title}>
                <Card variant="feature" className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <IconWrapper><Eye className="w-6 h-6" /></IconWrapper>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-dark-text">{ar.title}</h3>
                      <span className="font-mono text-sm text-primary font-semibold">{ar.price}</span>
                    </div>
                  </div>
                  <p className="text-sm text-medium-gray mb-4">{ar.desc}</p>
                  <ul className="space-y-2 flex-1">
                    {ar.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-medium-gray">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{f}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* MIXED REALITY */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="MIXED REALITY" title="Mixed Reality & XR Solutions" subtitle="Blend physical and digital worlds for the most advanced training experiences." />
          </AnimatedSection>
          <AnimatedSection>
            <Card variant="feature" className="bg-navy text-white p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-4">Digital Twin Training</h3>
                  <p className="text-white/70 mb-6">Create a digital replica of your entire facility, factory floor, or equipment. Learners interact with a 1:1 virtual copy that mirrors real-world behavior.</p>
                  <ul className="space-y-3">
                    {['Real-time data integration from IoT sensors', 'Physics-accurate simulations', 'Multi-user collaborative training', 'Scenario injection (faults, emergencies)', 'Performance analytics & heatmaps', 'Integration with existing SCADA/PLC systems'].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-green-accent shrink-0 mt-0.5" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading mb-4">Supported Platforms</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { device: 'Meta Quest 3', type: 'VR/MR' },
                      { device: 'Apple Vision Pro', type: 'Spatial' },
                      { device: 'HoloLens 2', type: 'MR' },
                      { device: 'Magic Leap 2', type: 'AR' },
                      { device: 'Pico 4 Enterprise', type: 'VR' },
                      { device: 'HTC VIVE Focus 3', type: 'VR' },
                    ].map((d) => (
                      <div key={d.device} className="bg-white/10 rounded-lg p-3">
                        <p className="text-sm font-semibold text-white">{d.device}</p>
                        <p className="text-xs text-white/50">{d.type}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-sm font-semibold text-white mb-1">Price Range</p>
                    <p className="font-mono text-xl text-cyan-accent font-bold">₹25L – ₹1Cr+</p>
                    <p className="text-xs text-white/50 mt-1">Depending on facility scale & fidelity</p>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="PROCESS" title="XR Development Process" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { phase: '01', title: 'Needs Analysis', items: ['Training gap assessment', 'ROI projection', 'Hardware recommendation'] },
                { phase: '02', title: 'Experience Design', items: ['Storyboarding', 'Interaction design', 'Prototype & test'] },
                { phase: '03', title: '3D Asset Creation', items: ['Environment modeling', 'Character/equipment', 'Texture & lighting'] },
                { phase: '04', title: 'Development', items: ['Engine development', 'Interaction logic', 'Performance optimization'] },
                { phase: '05', title: 'Deploy & Scale', items: ['Device deployment', 'MDM integration', 'Analytics & iteration'] },
              ].map((step) => (
                <Card key={step.phase} variant="feature" className="text-center">
                  <div className="font-mono text-2xl font-bold text-primary/30 mb-2">{step.phase}</div>
                  <h3 className="font-bold font-heading text-dark-text mb-2 text-sm">{step.title}</h3>
                  <ul className="space-y-1">
                    {step.items.map((item) => (
                      <li key={item} className="text-xs text-medium-gray">{item}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ROI */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="ROI" title="ROI of Immersive Training" subtitle="Real-world example: How VR safety training pays for itself." />
          </AnimatedSection>
          <AnimatedSection>
            <Card variant="feature" className="max-w-3xl mx-auto">
              <h3 className="text-lg font-bold font-heading text-dark-text mb-4">Example: Forklift Safety VR Training</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {[
                      { metric: 'Traditional Training Cost (50 operators)', value: '₹15L/year', note: 'Instructor time + downtime + equipment' },
                      { metric: 'VR Training Investment', value: '₹25L one-time', note: 'Development + 10 headsets' },
                      { metric: 'VR Training Ongoing (per year)', value: '₹3L/year', note: 'Device mgmt + content updates' },
                      { metric: 'Annual Savings After Year 1', value: '₹12L/year', note: '₹15L - ₹3L ongoing cost' },
                      { metric: 'Payback Period', value: '~2 years', note: '₹25L / ₹12L savings' },
                      { metric: 'Accident Reduction', value: '60%', note: 'Based on similar VR implementations' },
                    ].map((r, i) => (
                      <motion.tr key={r.metric} className={i % 2 === 0 ? 'bg-white' : 'bg-light-gray/50'} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07, ease: 'easeOut' }}>
                        <td className="p-3 text-sm font-semibold text-dark-text">{r.metric}</td>
                        <td className="p-3 text-sm font-mono text-primary font-semibold">{r.value}</td>
                        <td className="p-3 text-xs text-medium-gray">{r.note}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* HARDWARE RECOMMENDATIONS */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="HARDWARE" title="Recommended Hardware" subtitle="We help you select, procure, and configure the right devices for your use case and budget." />
          </AnimatedSection>
          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-border-gray">
                <thead>
                  <tr className="bg-primary-dark text-white">
                    <th className="text-left p-4 font-heading font-semibold">Device</th>
                    <th className="text-left p-4 font-heading font-semibold">Type</th>
                    <th className="text-left p-4 font-heading font-semibold">Price</th>
                    <th className="text-left p-4 font-heading font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {xrHardware.map((h, i) => (
                    <motion.tr key={h.name} className={i % 2 === 0 ? 'bg-white' : 'bg-light-gray/50'} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07, ease: 'easeOut' }}>
                      <td className="p-4 font-semibold text-dark-text text-sm">{h.name}</td>
                      <td className="p-4 text-sm"><span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded-full">{h.category}</span></td>
                      <td className="p-4 text-sm font-mono text-primary font-semibold">{h.price}</td>
                      <td className="p-4 text-sm text-medium-gray">{h.notes}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-medium-gray text-center mt-4">Hardware costs are in addition to development investment. Enterprise bulk pricing available. We can include hardware procurementin the project scope.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="CASE STUDIES" title="Featured XR Projects" />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {vrCaseStudies.map((cs) => (
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
            <div className="max-w-3xl mx-auto space-y-3">
              {vrFAQs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
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
            <SectionHeading title="Ready to Enter the Immersive Age?" subtitle="Experience a VR demo in your facility or discuss your immersive training requirements." light />
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button variant="primary" size="lg" href="/company#contact">Request VR Demo</Button>
              <Button variant="outline" size="lg" href="/resources" className="border-white text-white hover:bg-white hover:text-primary-dark">Explore Case Studies</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
