import { useState } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2, Gamepad2, Brain, Trophy, Target, Puzzle,
  Monitor, Lightbulb, Users, BarChart3
} from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import Button from '../../components/ui/Button';
import SectionHeading from '../../components/ui/SectionHeading';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import AnimatedSection, { StaggerContainer, StaggerItem, FadeScaleItem } from '../../components/ui/AnimatedSection';
import { FAQAccordion, IconWrapper } from '../../components/ui/MegaMenu';
import { gameCaseStudies, gameFAQs, gameTypesData, gamificationElements, gameDevPhases } from '../../data/servicesData';
import type { ReactNode } from 'react';
import HeroSection from '../../components/ui/HeroSection';

export default function GameDevelopmentSimulations() {
  usePageMeta({
    title: 'Serious Games & Training Simulations | Gamification Development | 4Edge',
    description: 'Custom serious games, training simulations, scenario-based learning & gamification for corporate training. Increase engagement from 45% to 90%+.',
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const iconMap: Record<string, ReactNode> = {
    monitor: <Monitor className="w-6 h-6" />,
    trophy: <Trophy className="w-6 h-6" />,
    users: <Users className="w-6 h-6" />,
    target: <Target className="w-6 h-6" />,
    puzzle: <Puzzle className="w-6 h-6" />,
    lightbulb: <Lightbulb className="w-6 h-6" />,
  };

  return (
    <>
      {/* HERO */}
      <HeroSection
        badge="SERVICES"
        title="Turn Boring Training into"
        titleHighlight="Engaging Experiences"
        subtitle="Custom serious games, interactive simulations, and gamification that transform passive learning into active engagement—proven to increase completion rates from 45% to 90%+."
        proofLine="100+ Games Developed | 2M+ Players Trained | 90% Avg. Completion Rate"
        primaryCta={{ label: 'See Game Portfolio', href: '/company#contact' }}
        secondaryCta={{ label: 'Discuss Your Project', href: '/company#contact' }}
        stats={[
          { value: 100, suffix: '+', label: 'Games Developed' },
          { value: 2, suffix: 'M+', label: 'Players Trained' },
          { value: 90, suffix: '%', label: 'Avg. Completion Rate' },
        ]}
      />

      {/* OVERVIEW */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-medium-gray mb-8">
                Traditional training is passive and forgettable. Games and simulations create active, memorable learning experiences.
                Whether you need a cybersecurity awareness game, a leadership decision simulator, or gamified compliance training—we build experiences employees actually want to complete.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Serious Games (training through gameplay)', 'Interactive Simulations (real-world scenarios)', 'Gamification Layers (points, badges, leaderboards)', 'Scenario-Based Learning (branching stories)', 'Assessment Games (test through play)'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 bg-primary/8 text-primary text-sm font-medium px-3 py-1.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />{item}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY SERIOUS GAMES */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="WHY GAMES" title="Why Serious Games Work" subtitle="Research-backed benefits of game-based learning in corporate training." />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Brain className="w-6 h-6" />, stat: '3–5×', title: 'Higher Retention', desc: 'Active learning through games dramatically improves knowledge retention over passive methods.' },
              { icon: <Target className="w-6 h-6" />, stat: '90%', title: 'Completion Rates', desc: 'Game mechanics drive 90% completion rates vs. 45% with traditional e-learning.' },
              { icon: <Users className="w-6 h-6" />, stat: '85%', title: 'Learner Satisfaction', desc: 'Learners rate game-based training significantly higher than traditional methods.' },
              { icon: <BarChart3 className="w-6 h-6" />, stat: '40%', title: 'Better Application', desc: '40% higher on-the-job application of skills — 30% faster learning through practice and repetition.' },
            ].map((item) => (
              <FadeScaleItem key={item.title}>
                <Card variant="feature" className="text-center h-full">
                  <IconWrapper>{item.icon}</IconWrapper>
                  <div className="font-mono text-3xl font-bold text-primary mt-3">{item.stat}</div>
                  <h3 className="font-bold font-heading text-dark-text mt-2">{item.title}</h3>
                  <p className="text-sm text-medium-gray mt-2">{item.desc}</p>
                </Card>
              </FadeScaleItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* GAME TYPES */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="GAME TYPES" title="Types of Serious Games We Build" subtitle="From simple gamification layers to full 3D simulation environments." />
          </AnimatedSection>
          <div className="space-y-6">
            {gameTypesData.map((game, idx) => (
              <AnimatedSection key={game.title} direction={idx % 2 === 0 ? 'left' : 'right'}>
                <Card variant="feature">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-3 mb-3">
                        <IconWrapper>{iconMap[game.iconName]}</IconWrapper>
                        <div>
                          <h3 className="text-xl font-bold font-heading text-dark-text">{game.title}</h3>
                          <div className="flex flex-wrap items-center gap-3 mt-0.5">
                            <span className="font-mono text-sm text-primary font-semibold">{game.price}</span>
                            {game.timeline && <span className="text-xs text-medium-gray">Timeline: {game.timeline}</span>}
                          </div>
                        </div>
                      </div>
                      <p className="text-medium-gray mb-4">{game.desc}</p>
                      <h4 className="text-sm font-semibold text-dark-text mb-2">Game Concepts</h4>
                      <ul className="space-y-1.5 mb-4">
                        {game.concepts.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm text-medium-gray">
                            <Gamepad2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />{c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-dark-text mb-2">Features</h4>
                        <ul className="space-y-1.5">
                          {game.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm text-medium-gray">
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-green-accent/10 rounded-xl p-4">
                        <h4 className="text-xs font-semibold uppercase text-green-accent tracking-wide mb-1">Results</h4>
                        <p className="text-sm text-dark-text font-medium">{game.results}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GAMIFICATION SERVICES */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="GAMIFICATION" title="Gamification Services" subtitle="Not ready for a full game? We add powerful gamification elements to your existing training platforms. Investment: ₹3L – ₹15L depending on platform and complexity." />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {gamificationElements.map((el) => (
              <StaggerItem key={el.title}>
                <Card variant="feature" className="h-full">
                  <h3 className="font-bold font-heading text-dark-text mb-3">{el.title}</h3>
                  <ul className="space-y-1.5">
                    {el.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-medium-gray">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-accent shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimatedSection>
            <Card variant="feature">
              <h3 className="text-lg font-bold font-heading text-dark-text mb-4">Gamification Implementation Process</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { step: '01', title: 'Platform Audit', desc: 'What exists, what\'s possible with your current LMS or platform' },
                  { step: '02', title: 'Strategy Design', desc: 'Which mechanics fit your culture, audience, and learning objectives' },
                  { step: '03', title: 'Technical Build', desc: 'Development or configuration of chosen gamification elements' },
                  { step: '04', title: 'Launch & Adoption', desc: 'Rollout support, change management, and impact measurement' },
                ].map((s) => (
                  <div key={s.step} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <span className="font-mono text-sm font-bold text-primary">{s.step}</span>
                    </div>
                    <h4 className="font-semibold text-dark-text text-sm mb-1">{s.title}</h4>
                    <p className="text-xs text-medium-gray">{s.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="PROCESS" title="Game Development Process" subtitle="From concept to playtest — a proven methodology for effective serious games." />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-5 gap-4">
            {gameDevPhases.map((phase) => (
              <StaggerItem key={phase.num}>
                <Card variant="feature" className="h-full">
                  <div className="font-mono text-2xl font-bold text-primary/30 mb-1">{phase.num}</div>
                  <h3 className="font-bold font-heading text-dark-text mb-0.5 text-sm">{phase.title}</h3>
                  <p className="text-xs text-medium-gray mb-3">{phase.weeks}</p>
                  <ul className="space-y-1.5">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-1.5 text-xs text-medium-gray">
                        <CheckCircle2 className="w-3 h-3 text-green-accent shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* TECH & PLATFORMS */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="TECHNOLOGY" title="Technology & Platforms" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-border-gray">
                <thead>
                  <tr className="bg-primary-dark text-white">
                    <th className="text-left p-4 font-heading font-semibold">Category</th>
                    <th className="text-left p-4 font-heading font-semibold">Technologies</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cat: 'Game Engines', tech: 'Unity 3D, Unreal Engine, Godot, Phaser.js' },
                    { cat: '2D Animation', tech: 'Adobe Animate, Spine, Lottie, SVG Animations' },
                    { cat: '3D Modeling', tech: 'Blender, Maya, 3ds Max, ZBrush' },
                    { cat: 'Web Games', tech: 'HTML5 Canvas, WebGL, Three.js, PixiJS' },
                    { cat: 'Mobile', tech: 'React Native, Flutter, Native iOS/Android' },
                    { cat: 'Standards', tech: 'SCORM 1.2/2004, xAPI (Tin Can), cmi5' },
                    { cat: 'Analytics', tech: 'Learning Record Store (LRS), Custom dashboards, Power BI' },
                  ].map((r, i) => (
                    <motion.tr key={r.cat} className={i % 2 === 0 ? 'bg-white' : 'bg-light-gray/50'} initial={{ opacity: 1, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07, ease: 'easeOut' }}>
                      <td className="p-4 font-semibold text-dark-text text-sm">{r.cat}</td>
                      <td className="p-4 text-sm text-medium-gray">{r.tech}</td>
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
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="PRICING" title="Pricing Guide" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-border-gray">
                <thead>
                  <tr className="bg-primary-dark text-white">
                    <th className="text-left p-4 font-heading font-semibold">Type</th>
                    <th className="text-left p-4 font-heading font-semibold">Price Range</th>
                    <th className="text-left p-4 font-heading font-semibold">Includes / Format</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: 'Simple 2D Game', range: '₹3L – ₹8L', time: 'Browser-based, simple mechanics, 30–60 min gameplay' },
                    { type: 'Interactive Scenario', range: '₹5L – ₹12L', time: 'Branching storyline, video/graphics, 45–90 min gameplay' },
                    { type: '3D Simulation', range: '₹10L – ₹25L', time: '3D environment, realistic interactions, complex mechanics' },
                    { type: 'Advanced AI Game', range: '₹15L – ₹40L', time: 'Natural language processing, adaptive AI, multiplayer' },
                    { type: 'Gamification Layer', range: '₹3L – ₹15L', time: 'Points, badges, leaderboards integrated into existing platform' },
                  ].map((r, i) => (
                    <motion.tr key={r.type} className={i % 2 === 0 ? 'bg-white' : 'bg-light-gray/50'} initial={{ opacity: 1, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07, ease: 'easeOut' }}>
                      <td className="p-4 text-sm font-semibold text-dark-text">{r.type}</td>
                      <td className="p-4 text-sm font-mono text-primary font-semibold">{r.range}</td>
                      <td className="p-4 text-sm text-medium-gray">{r.time}</td>
                    </motion.tr>
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
            <SectionHeading badge="CASE STUDIES" title="Featured Game Projects" />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {gameCaseStudies.map((cs) => (
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
              {gameFAQs.map((faq, i) => (
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
            <SectionHeading title="Ready to Gamify Your Training?" subtitle="See a demo of our serious games or discuss your project requirements." light />
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button variant="primary" size="lg" href="/company#contact">Request Game Demo</Button>
              <Button variant="outline" size="lg" href="/resources" className="border-white text-white hover:bg-white hover:text-primary-dark">View Portfolio</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
