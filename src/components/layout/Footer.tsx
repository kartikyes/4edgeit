import { Link } from 'react-router';
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';
import StatCounter from '../ui/StatCounter';
import AnimatedSection from '../ui/AnimatedSection';

const footerLinks = {
  products: [
    { label: 'K-Nest LMS Overview', href: '/products/k-nest-lms' },
    { label: 'K-Nest Features', href: '/products/k-nest-lms#features' },
    { label: 'K-Nest Pricing', href: '/products/k-nest-lms#pricing' },
    { label: 'Request Demo', href: '/company#contact' },
  ],
  services: [
    { label: 'Learning & Training', href: '/services/learning-training-solutions' },
    { label: 'Custom Software', href: '/services/custom-software-platforms' },
    { label: 'Game Development', href: '/services/game-development-simulations' },
    { label: 'VR / AR / XR Solutions', href: '/services/vr-ar-xr-solutions' },
    { label: 'Consulting', href: '/services/consulting-architecture' },
  ],
  company: [
    { label: 'About Us', href: '/company#about' },
    { label: 'Why 4Edge', href: '/company#why-4edge' },
    { label: 'Our Clients', href: '/company#clients' },
    { label: 'Careers', href: '/company#careers' },
    { label: 'Contact Us', href: '/company#contact' },
  ],
};

const stats = [
  { value: 70, suffix: '+', label: 'Clients' },
  { value: 30000, suffix: '+', label: 'Users' },
  { value: 200000, suffix: '+', label: 'Enrollments' },
  { value: 99.9, suffix: '%', label: 'Uptime' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Stats Bar */}
      <AnimatedSection>
        <div className="border-b border-white/10">
          <div className="max-w-screen-2xl mx-auto px-4 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  light
                />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Main Footer */}
      <div className="max-w-screen-2xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1: Logo & Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="2" y="30" fontFamily="Arial Black, sans-serif" fontWeight="800" fontSize="28" fill="#00AEEF">4E</text>
                <rect x="28" y="2" width="10" height="10" rx="2" fill="#2D9B4E" transform="rotate(5 33 7)" />
              </svg>
              <span className="text-lg font-bold font-heading text-white">
                4Edge <span className="font-normal">IT Solutions</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Enterprise Learning Technology Built for India's Top Manufacturers, Banks & Energy Leaders.
            </p>
            <div className="flex items-center gap-4">
              {[Linkedin, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Products */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/70 hover:text-cyan-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/70 hover:text-cyan-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/70 hover:text-cyan-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-cyan-accent shrink-0" />
                <span className="text-sm text-white/70">+91 6362 002 402</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-cyan-accent shrink-0" />
                <span className="text-sm text-white/70">contact@4edgeit.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-cyan-accent shrink-0" />
                <span className="text-sm text-white/70">Kapikad 4th Cross Road, Bejai-Kapikad, Mangaluru – 575004 Karnataka, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 text-cyan-accent shrink-0" />
                <span className="text-sm text-white/70">Mon–Fri <br />9:00 AM – 6:00 PM IST</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white/80 mb-3">Stay Updated</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 rounded-lg text-sm text-white placeholder-white/40 border border-white/10 focus:outline-none focus:border-cyan-accent"
                />
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-cyan-accent transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Badges */}
      <div className="border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/40">
            <span className="flex items-center gap-1.5">🛡️ ISO 27001 Certified</span>
            <span className="flex items-center gap-1.5">🔒 GDPR Compliant</span>
            <span className="flex items-center gap-1.5">☁️ AWS Partner</span>
            <span className="flex items-center gap-1.5">💼 Microsoft Partner</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-screen-2xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/30">
            <span>© {new Date().getFullYear()} 4Edge IT Solutions. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white/60 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
