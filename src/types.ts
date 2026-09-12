export interface Project {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  liveUrl: string;
  description: string;
  accentColor: string;
  badge: string;
  features: string[];
  techStack: string[];
  stats?: { label: string; value: string }[];
}

export interface WhatsAppStep {
  stepNumber: number;
  title: string;
  description: string;
  highlight?: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: string;
  badge?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration: string;
  deliverable: string;
}

export interface ValueProp {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: string;
}
