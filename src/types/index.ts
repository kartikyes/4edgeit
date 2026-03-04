// ============================================================
// 4Edge IT Solutions — Shared TypeScript Types
// ============================================================

export interface HeroData {
  badge?: string;
  title: string;
  subtitle: string;
  trustBadge?: string;
  ctas: CTAButton[];
  stats?: StatItem[];
}

export interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'green';
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  hero: HeroData;
  icon: string;
}

export interface CaseStudy {
  company: string;
  industry: string;
  badge?: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: string;
  link?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  userRange: string;
  features: string[];
  cta: string;
  ctaVariant?: 'primary' | 'green' | 'outline';
  highlighted?: boolean;
  badge?: string;
}

export interface FeatureBlock {
  icon: string;
  title: string;
  description: string;
  bullets?: string[];
  businessImpact?: string;
  useCases?: string[];
  /** Extra labelled bullet-groups rendered below the main bullets (e.g. Psychology Behind It, Analytics Capabilities) */
  extraGroups?: { title: string; items: string[] }[];
  /** Step-by-step workflow rendered as numbered list inside the card */
  workflowSteps?: { phase: string; title: string; desc: string }[];
  /** detailed security sub-categories rendered as grouped lists */
  securityCategories?: { category: string; items: string[] }[];
  /** certification / compliance badge list */
  certifications?: string[];
  /** compliance reporting pre-built templates */
  complianceReporting?: string[];
  /** short client story */
  clientStory?: { client: string; story: string };
}

export interface IndustryCard {
  icon: string;
  industry: string;
  clients: string;
  bullets: string[];
  link: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ResourceCard {
  icon: string;
  title: string;
  description: string;
  cta: string;
  href: string;
}

export interface ComparisonRow {
  feature: string;
  typical: string;
  fourEdge: string;
  fourEdgeHighlight?: boolean;
}

export interface TimelineStep {
  phase: string;
  title: string;
  duration: string;
  description: string;
  deliverables?: string[];
}

export interface TechStackItem {
  category: string;
  technologies: string[];
}

export interface SolutionCard {
  title: string;
  description: string;
  features: string[];
  href: string;
  icon: string;
}

export interface TeamMember {
  role: string;
  expertise: string[];
  description: string;
}

export type CardVariant = 'feature' | 'case-study' | 'pricing' | 'industry' | 'resource';

// ============================================================
// Game Development & Simulations
// ============================================================
export interface GameTypeEntry {
  iconName: string;
  title: string;
  price: string;
  timeline?: string;
  desc: string;
  concepts: string[];
  features: string[];
  results: string;
}

export interface GamificationElementEntry {
  title: string;
  items: string[];
}

// ============================================================
// VR / AR / XR Solutions
// ============================================================
export interface VRSolutionEntry {
  title: string;
  price: string;
  desc: string;
  useCases: string[];
  features: string[];
  industries: string;
  caseStudy: string;
}

export interface HardwareEntry {
  name: string;
  category: string;
  price: string;
  notes: string;
}

// ============================================================
// Consulting & Architecture
// ============================================================
export interface ConsultingServiceEntry {
  num: string;
  title: string;
  timeline: string;
  price: string;
  desc: string;
  deliverables: string[];
  roiNote?: string;
  subSections?: { title: string; items: string[] }[];
}

export interface ConsultingScenarioEntry {
  iconName: string;
  title: string;
  desc: string;
}

export interface ConsultingApproachEntry {
  num: string;
  title: string;
  desc: string;
}

export interface ConsultingPricingRow {
  type: string;
  price: string;
  duration: string;
}
