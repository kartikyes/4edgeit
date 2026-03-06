import { useState } from 'react';
import {
  FileText, Video, BookOpen, Download
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import { IconWrapper } from '../components/ui/MegaMenu';
import HeroSection from '../components/ui/HeroSection';
import Button from '../components/ui/Button';
import { motion } from 'motion/react';

type ResourceType = 'all' | 'whitepaper' | 'case-study' | 'webinar' | 'guide';

const resources = [
  { type: 'whitepaper' as const, title: 'The State of Enterprise Learning in India 2024', desc: 'Annual industry report covering trends, budgets, and technology adoption across Indian enterprises.', pages: '42 pages', date: 'Jan 2024' },
  { type: 'case-study' as const, title: 'How BPCL Trained 35,000 Employees with K-Nest', desc: 'Detailed case study on BPCL\'s digital learning transformation using K-Nest LMS.', pages: '18 pages', date: 'Mar 2024' },
  { type: 'webinar' as const, title: 'VR for Safety Training: ROI & Implementation Guide', desc: 'Recorded webinar covering best practices, costs, and ROI models for VR safety training programs.', pages: '60 min', date: 'Feb 2024' },
  { type: 'guide' as const, title: 'LMS Buyer\'s Guide 2024', desc: 'Comprehensive comparison of 20+ LMS platforms with feature matrices, pricing, and recommendations.', pages: '56 pages', date: 'Dec 2023' },
  { type: 'whitepaper' as const, title: 'AI in Corporate Training: Promise vs Reality', desc: 'Research paper examining real-world AI implementations in L&D and what actually delivers results.', pages: '28 pages', date: 'Apr 2024' },
  { type: 'case-study' as const, title: 'Hyundai Motor India: Gamified Dealer Training', desc: 'How game-based learning achieved 4× engagement improvement for 8,000 sales staff.', pages: '14 pages', date: 'Nov 2023' },
  { type: 'webinar' as const, title: 'SCORM is Dead, Long Live xAPI', desc: 'Technical webinar on migrating from SCORM to xAPI and unlocking advanced analytics.', pages: '45 min', date: 'Jan 2024' },
  { type: 'guide' as const, title: 'Content Development Cost Calculator', desc: 'Interactive guide to estimating e-learning content development costs by type, complexity, and media.', pages: 'Interactive', date: 'Mar 2024' },
  { type: 'case-study' as const, title: 'Infosys: Scaling Compliance Training for 300K+', desc: 'Enterprise-scale compliance training automation with K-Nest for one of India\'s largest IT firms.', pages: '20 pages', date: 'Feb 2024' },
  { type: 'whitepaper' as const, title: 'Building a Learning Technology Ecosystem', desc: 'Architecture guide for integrating LMS, LXP, HRMS, and content tools into a unified learning ecosystem.', pages: '36 pages', date: 'Oct 2023' },
  { type: 'webinar' as const, title: 'From Classroom to Digital: L&D Transformation', desc: 'Panel discussion with CLOs from manufacturing companies on their digital L&D journey.', pages: '75 min', date: 'Apr 2024' },
  { type: 'guide' as const, title: 'Gamification Design Playbook', desc: 'Practical guide to adding game mechanics to corporate training with templates and frameworks.', pages: '48 pages', date: 'Sep 2023' },
];

const typeIcons: Record<string, React.ReactNode> = {
  whitepaper: <FileText className="w-5 h-5" />,
  'case-study': <BookOpen className="w-5 h-5" />,
  webinar: <Video className="w-5 h-5" />,
  guide: <Download className="w-5 h-5" />,
};

const typeLabels: Record<string, string> = {
  whitepaper: 'Whitepaper',
  'case-study': 'Case Study',
  webinar: 'Webinar',
  guide: 'Guide',
};

export default function Resources() {
  usePageMeta({
    title: 'Learning Technology Resources | Whitepapers, Case Studies & Guides | 4Edge IT',
    description: 'Free resources: whitepapers, case studies, webinars, and guides on learning technology, LMS, e-learning, VR training, and gamification.',
  });

  const [filter, setFilter] = useState<ResourceType>('all');
  const filtered = filter === 'all' ? resources : resources.filter((r) => r.type === filter);

  const filters: { value: ResourceType; label: string }[] = [
    { value: 'all', label: 'All Resources' },
    { value: 'whitepaper', label: 'Whitepapers' },
    { value: 'case-study', label: 'Case Studies' },
    { value: 'webinar', label: 'Webinars' },
    { value: 'guide', label: 'Guides' },
  ];

  return (
    <>
      {/* HERO */}
      <HeroSection
        variant="compact"
        badge="RESOURCES"
        title="Knowledge Hub"
        subtitle="Free whitepapers, case studies, webinars, and practical guides on learning technology, LMS, gamification, VR training, and digital L&D transformation."
        primaryCta={{ label: 'Browse All Resources', href: '#resources' }}
      />

      {/* FILTER & GRID */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Filter Tabs */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === f.value
                      ? 'bg-primary text-white'
                      : 'bg-light-gray text-medium-gray hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {f.label}
                  <span className="ml-1.5 text-xs opacity-60">
                    ({f.value === 'all' ? resources.length : resources.filter((r) => r.type === f.value).length})
                  </span>
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Resources Grid */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((res) => (
              <StaggerItem key={res.title}>
                <motion.div layout>
                  <Card variant="resource" className="h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <IconWrapper>{typeIcons[res.type]}</IconWrapper>
                      <Badge variant={res.type === 'case-study' ? 'cyan' : res.type === 'webinar' ? 'green' : 'primary'} size="sm">
                        {typeLabels[res.type]}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold font-heading text-dark-text mb-2">{res.title}</h3>
                    <p className="text-sm text-medium-gray flex-1">{res.desc}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border-gray">
                      <span className="text-xs text-medium-gray">{res.pages} • {res.date}</span>
                      <Button variant="ghost" size="sm" href="/company#contact">
                        {res.type === 'webinar' ? 'Watch Now' : 'Download'}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="py-20 md:py-24 gradient-cta">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <AnimatedSection>
            <SectionHeading title="Stay Updated" subtitle="Get new resources, industry insights, and product updates delivered to your inbox." light />
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button variant="primary" size="lg" href="/company#contact">Subscribe to Newsletter</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
