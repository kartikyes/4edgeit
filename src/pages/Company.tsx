import { useState } from 'react';
import {
  CheckCircle2, MapPin, Phone, Mail, Globe, Award,
  Users, Target, Shield, Lightbulb, Heart
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import { IconWrapper } from '../components/ui/MegaMenu';
import HeroSection from '../components/ui/HeroSection';

export default function Company() {
  usePageMeta({
    title: 'About 4Edge IT Solutions | 15+ Years of Learning Technology Excellence',
    description: 'India\'s leading learning technology company. 200+ clients, 15+ years, 2M+ learners. Learn about our mission, team, and why enterprises choose 4Edge.',
  });

  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', message: '', service: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would integrate with a backend API
    alert('Thank you! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '', service: '' });
  };

  return (
    <>
      {/* HERO */}
      <HeroSection
        variant="compact"
        badge="COMPANY"
        title="Building the Future of"
        titleHighlight="Enterprise Learning"
        subtitle="For 15+ years, 4Edge IT Solutions has been India's trusted partner for learning technology — helping enterprises train, upskill, and transform their workforce."
        primaryCta={{ label: 'Contact Us', href: '#contact' }}
        secondaryCta={{ label: 'Our Story', href: '#about' }}
        stats={[
          { value: 200, suffix: '+', label: 'Clients' },
          { value: 2, suffix: 'M+', label: 'Learners' },
          { value: 15, suffix: '+', label: 'Years' },
          { value: 500, suffix: '+', label: 'Projects' },
        ]}
      />

      {/* ABOUT US */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="primary" size="md">ABOUT US</Badge>
                <h2 className="mt-4 text-3xl md:text-4xl font-extrabold font-heading text-dark-text">India's Learning Technology Partner</h2>
                <p className="mt-4 text-medium-gray">Founded with a mission to transform how India learns, 4Edge IT Solutions has grown from a small team of learning technologists to one of India's most trusted enterprise learning partners.</p>
                <p className="mt-3 text-medium-gray">We combine deep domain expertise in Learning & Development with cutting-edge technology — from AI-powered LMS platforms to VR training simulations — to deliver solutions that actually work.</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: 'Founded', value: '2009' },
                    { label: 'Headquarters', value: 'Chennai, India' },
                    { label: 'Team Size', value: '100+ professionals' },
                    { label: 'Specialization', value: 'Learning Technology' },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-xs text-medium-gray uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-semibold text-dark-text">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-light-gray rounded-2xl p-8">
                <h3 className="text-xl font-bold font-heading text-dark-text mb-4">Our Mission</h3>
                <p className="text-medium-gray italic text-lg">"To empower organizations with intelligent learning technology that transforms workforce development, drives measurable outcomes, and makes learning an experience people love."</p>
                <h3 className="text-xl font-bold font-heading text-dark-text mt-8 mb-4">Our Vision</h3>
                <p className="text-medium-gray italic text-lg">"To be Asia's most trusted learning technology company — known for innovation, domain expertise, and unwavering commitment to client success."</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY 4EDGE */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="WHY 4EDGE" title="Why Enterprises Choose Us" />
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Target className="w-6 h-6" />, title: 'Domain Expertise', desc: 'We\'re not general IT. We live and breathe learning technology — it\'s all we do, and we\'ve done it for 15+ years.' },
              { icon: <Shield className="w-6 h-6" />, title: 'Enterprise-Grade', desc: 'Built for scale: ISO 27001, SOC 2, GDPR compliant. 99.9% uptime SLA. Trusted by Fortune 500 and PSUs.' },
              { icon: <Users className="w-6 h-6" />, title: 'India-First Design', desc: 'Multi-language, mobile-first, low-bandwidth optimized. Designed for India\'s diverse enterprise workforce.' },
              { icon: <Lightbulb className="w-6 h-6" />, title: 'Innovation Leaders', desc: 'First Indian company to offer AI-powered LMS, VR training simulations, and game-based learning at enterprise scale.' },
              { icon: <Heart className="w-6 h-6" />, title: 'Client Obsession', desc: '95% client retention rate speaks for itself. Dedicated success managers, 24/7 support, and proactive account management.' },
              { icon: <Award className="w-6 h-6" />, title: 'Proven Results', desc: 'Measurable outcomes every time: 40% training cost reduction, 3× faster onboarding, 95%+ compliance rates.' },
            ].map((reason) => (
              <StaggerItem key={reason.title}>
                <Card variant="feature" className="h-full">
                  <IconWrapper>{reason.icon}</IconWrapper>
                  <h3 className="font-bold font-heading text-dark-text mt-3">{reason.title}</h3>
                  <p className="text-sm text-medium-gray mt-2">{reason.desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="TRUST" title="Certifications & Compliance" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { cert: 'ISO 27001:2022', desc: 'Information Security Management' },
                { cert: 'ISO 9001:2015', desc: 'Quality Management System' },
                { cert: 'SOC 2 Type II', desc: 'Security & Availability Controls' },
                { cert: 'GDPR Compliant', desc: 'EU Data Protection' },
                { cert: 'WCAG 2.1 AA', desc: 'Web Accessibility Standards' },
                { cert: 'SCORM/xAPI', desc: 'E-Learning Interoperability' },
                { cert: 'AWS Partner', desc: 'Advanced Technology Partner' },
                { cert: 'Microsoft Partner', desc: 'Gold Learning Partner' },
              ].map((c) => (
                <div key={c.cert} className="text-center p-4 rounded-xl bg-light-gray">
                  <p className="font-bold font-heading text-dark-text text-sm">{c.cert}</p>
                  <p className="text-xs text-medium-gray mt-1">{c.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="CLIENTS" title="Trusted by Industry Leaders" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-8">
              {['BPCL', 'Hyundai', 'Infosys', 'L&T', 'TCS', 'Wipro', 'HCL', 'Dr. Reddy\'s', 'Apollo', 'Cipla', 'Tata Steel', 'Mahindra', 'NIIT', 'TVS'].map((name) => (
                <div key={name} className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm">
                  <span className="font-bold text-medium-gray text-sm">{name}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CAREERS */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="green" size="md">CAREERS</Badge>
                <h2 className="mt-4 text-3xl md:text-4xl font-extrabold font-heading text-dark-text">Join Our Team</h2>
                <p className="mt-4 text-medium-gray">We're always looking for talented engineers, designers, learning specialists, and consultants who share our passion for learning technology.</p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Competitive salary + ESOPs for senior roles',
                    'Remote-first with Chennai HQ for collaboration',
                    'Health insurance for family (₹10L cover)',
                    'Learning budget: ₹1L/year per employee',
                    'Work on cutting-edge tech: AI, VR, games',
                    'Impact: Your work reaches millions of learners',
                  ].map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-medium-gray">
                      <CheckCircle2 className="w-4 h-4 text-green-accent shrink-0 mt-0.5" />{perk}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-light-gray rounded-2xl p-8">
                <h3 className="text-lg font-bold font-heading text-dark-text mb-4">Open Positions</h3>
                <div className="space-y-3">
                  {[
                    { role: 'Senior React Developer', location: 'Chennai / Remote', type: 'Full-time' },
                    { role: 'Unity 3D Developer (VR)', location: 'Chennai', type: 'Full-time' },
                    { role: 'Instructional Designer', location: 'Remote', type: 'Full-time' },
                    { role: 'DevOps Engineer', location: 'Chennai / Remote', type: 'Full-time' },
                    { role: 'Learning Consultant', location: 'Mumbai / Remote', type: 'Full-time' },
                  ].map((job) => (
                    <div key={job.role} className="bg-white rounded-lg p-4 border border-border-gray">
                      <h4 className="font-semibold text-dark-text text-sm">{job.role}</h4>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-medium-gray flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                        <Badge variant="light" size="sm">{job.type}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="primary" size="md" href="mailto:contact@4edgeit.com" className="mt-6 w-full">View All Openings</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-24 bg-light-gray">
        <div className="max-w-screen-2xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading badge="CONTACT" title="Get in Touch" subtitle="Have a project in mind? Let's talk about how we can help." />
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-border-gray space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-dark-text mb-1">Full Name *</label>
                    <input required name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border-gray bg-light-gray focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark-text mb-1">Work Email *</label>
                    <input required name="email" type="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border-gray bg-light-gray focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-dark-text mb-1">Company</label>
                    <input name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border-gray bg-light-gray focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Company Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark-text mb-1">Phone</label>
                    <input name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border-gray bg-light-gray focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="+91 6362 002 402" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-1">Interested In</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border-gray bg-light-gray focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                    <option value="">Select a service</option>
                    <option value="knest">K-Nest LMS</option>
                    <option value="lts">Learning & Training Solutions</option>
                    <option value="custom">Custom Software Platforms</option>
                    <option value="games">Game Development & Simulations</option>
                    <option value="vr">VR/AR/XR Solutions</option>
                    <option value="consulting">Consulting & Architecture</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-1">Message *</label>
                  <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border border-border-gray bg-light-gray focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none" placeholder="Tell us about your project or requirements..." />
                </div>
                <Button variant="primary" size="lg" className="w-full">Send Message</Button>
                <p className="text-xs text-medium-gray text-center mt-2">We respond within 24 hours on business days.</p>
              </form>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card variant="feature">
                  <h3 className="text-lg font-bold font-heading text-dark-text mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <IconWrapper><MapPin className="w-5 h-5" /></IconWrapper>
                      <div>
                        <p className="font-semibold text-dark-text text-sm">Office Address</p>
                        <p className="text-sm text-medium-gray">4Edge IT Solutions Pvt. Ltd.<br />Kapikad 4th Cross Road, Bejai-Kapikad, Mangaluru – 575004 Karnataka, India</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <IconWrapper><Phone className="w-5 h-5" /></IconWrapper>
                      <div>
                        <p className="font-semibold text-dark-text text-sm">Phone</p>
                        <p className="text-sm text-medium-gray">+91 6362 002 402</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <IconWrapper><Mail className="w-5 h-5" /></IconWrapper>
                      <div>
                        <p className="font-semibold text-dark-text text-sm">Email</p>
                        <p className="text-sm text-medium-gray">contact@4edgeit.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <IconWrapper><Globe className="w-5 h-5" /></IconWrapper>
                      <div>
                        <p className="font-semibold text-dark-text text-sm">Website</p>
                        <p className="text-sm text-medium-gray">www.4edgeit.com</p>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card variant="feature">
                  <h3 className="text-lg font-bold font-heading text-dark-text mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-medium-gray">Monday – Friday</span>
                      <span className="font-semibold text-dark-text">9:00 AM – 6:00 PM IST</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-medium-gray">Saturday</span>
                      <span className="font-semibold text-dark-text">10:00 AM – 2:00 PM IST</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-medium-gray">Sunday</span>
                      <span className="font-semibold text-dark-text">Closed</span>
                    </div>
                    <div className="flex justify-between text-sm mt-3 pt-3 border-t border-border-gray">
                      <span className="text-medium-gray">Support (Enterprise)</span>
                      <span className="font-semibold text-dark-text">24/7</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
