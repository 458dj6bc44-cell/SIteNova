import { Project, ServiceItem, ProcessStep, ValueProp, WhatsAppStep } from '../types';

export const agencyConfig = {
  name: 'SiteNova',
  studioName: 'SiteNova Web Studio',
  tagline: 'Bespoke Web Design & Modern Social-Commerce Studio',
  headline: 'WE BUILD DIGITAL EXPERIENCES.',
  subheadline:
    'SiteNova is a professional web design and custom development studio. We engineer high-converting websites, custom e-commerce experiences, social-commerce systems, and high-performance digital experiences.',
  contact: {
    whatsappNumber: '01555380043',
    whatsappIntNumber: '201555380043',
    whatsappDisplay: '01555380043',
    whatsappDefaultMessage:
      "Hello SiteNova! I'm interested in getting a website for my business. I'd like to learn more about your services.",
    instagramHandle: '@sitenovastudio',
    instagramUrl: 'https://instagram.com/sitenovastudio',
    email: 'hello@sitenova.design',
    location: 'Egypt & Worldwide',
    status: 'Accepting Selected Client Projects',
    turnaroundTime: '7 to 14 Days Typical Delivery',
  },
  stats: [
    { value: '100% Static', label: 'Vercel & Edge Optimized' },
    { value: '0% Gateway Fees', label: 'WhatsApp Direct Orders' },
    { value: '< 1.0s Speed', label: 'Zero Database Latency' },
    { value: '7–14 Days', label: 'Fast Turnaround' },
  ],
};

/**
 * Returns a universal WhatsApp URL.
 * Automatically adapts: opens WhatsApp Web on desktop or native WhatsApp on mobile via wa.me / web.whatsapp.com.
 */
export const getSiteNovaWhatsAppUrl = (message?: string): string => {
  const text = message || agencyConfig.contact.whatsappDefaultMessage;
  return `https://wa.me/${agencyConfig.contact.whatsappIntNumber}?text=${encodeURIComponent(text)}`;
};

export const getSiteNovaWhatsAppWebUrl = (message?: string): string => {
  const text = message || agencyConfig.contact.whatsappDefaultMessage;
  return `https://web.whatsapp.com/send?phone=${agencyConfig.contact.whatsappIntNumber}&text=${encodeURIComponent(text)}`;
};

/* ==========================================================================
   FLAGSHIP PROJECT #1: VÉREN
   ========================================================================== */
export const verenProject: Project = {
  id: 'veren',
  name: 'VÉREN',
  subtitle: 'Haute Editorial Digital Showcase & Spatial Experience',
  category: 'Luxury Digital Experience',
  liveUrl: 'https://veren-amber.vercel.app/',
  description:
    'An evocative, high-fashion luxury digital experience crafted with bespoke editorial layouts, sculptural typography, fluid transitions, and uncompromising art direction. Demonstrating SiteNova’s highest tier of digital craftsmanship.',
  accentColor: '#C6532E', // Burnt Orange
  badge: 'Flagship Project • Luxury Experience',
  features: [
    'Art-directed editorial spatial layouts and bespoke typographical rhythm',
    'Curated luxury product storytelling with tactile interactions',
    'Fluid scroll-orchestrated scenes and masked typographical reveals',
    'Custom micro-interactions engineered for maximum brand prestige',
    '100% frontend static edge architecture with sub-second asset delivery',
    'Fully responsive design optimized for high-resolution retina screens and mobile',
  ],
  techStack: ['React', 'Vite', 'Tailwind CSS', 'Motion', 'Vercel Edge', 'Editorial UX'],
  stats: [
    { label: 'Art Direction', value: 'Bespoke Luxury' },
    { label: 'Architecture', value: '100% Static' },
    { label: 'Performance', value: 'Instant Edge' },
  ],
};

/* ==========================================================================
   PROJECT #2: VITALØ
   ========================================================================== */
export const vitaloProject: Project = {
  id: 'vital0',
  name: 'VITALØ',
  subtitle: 'Precision Performance Supplements',
  category: 'Precision Performance',
  liveUrl: 'https://vital0.vercel.app/',
  description:
    'Premium supplement e-commerce website with WhatsApp ordering, advanced product interactions, and a mobile-first shopping experience.',
  accentColor: '#73765A', // Dusty Olive
  badge: 'Selected Work • Precision Supplements',
  features: [
    'Mobile-first design with fluid thumb-navigation and rapid loading',
    'Interactive product catalog with category filtering and instant search',
    'Rich product detail pages with flavor and serving size variants',
    'Persistent shopping cart powered by browser localStorage',
    'Customer checkout form capturing name, phone, city, address, and notes',
    'Structured 1-click WhatsApp order generation with transparent calculations',
    'Tactile micro-interactions, scroll animations, and interactive FAQ drawers',
    'Editorial and lifestyle sections showcasing brand storytelling',
    '100% frontend static architecture with zero backend or database latency',
    'Instant global edge hosting on Vercel with 0% payment gateway fees',
  ],
  techStack: ['React', 'Vite', 'Tailwind CSS', 'WhatsApp Ordering', 'Mobile-First', 'Vercel'],
  stats: [
    { label: 'Architecture', value: '100% Static' },
    { label: 'Cart Storage', value: 'localStorage' },
    { label: 'Checkout', value: 'WhatsApp Direct' },
  ],
};

/* ==========================================================================
   PROJECT #3: GSTORE SPORTSWEAR
   ========================================================================== */
export const gstoreProject: Project = {
  id: 'gstore',
  name: 'GStore Sportswear',
  subtitle: 'Athletic E-Commerce',
  category: 'Athletic E-Commerce',
  liveUrl: 'https://gstore-static.vercel.app/',
  description:
    'Modern responsive sportswear e-commerce featuring dynamic catalogs, variant pickers, instant search, and shopping cart.',
  accentColor: '#171717', // Deep Ink
  badge: 'Selected Work • Sportswear E-Commerce',
  features: [
    'Responsive design across desktop, tablet, and mobile devices',
    'Curated product catalog with smooth layout shifts',
    'Product categories (Men, Women, Footwear, Accessories)',
    'Instant search and multi-attribute filtering',
    'Rich product detail pages with high-resolution imagery',
    'Interactive size and color variant selectors',
    'Dynamic shopping cart with real-time subtotal calculation',
    'Optimized mobile-friendly experience with thumb-friendly controls',
    'Conversion-focused UI engineered for athletic brands',
    'Clean product presentation with clear call-to-actions',
  ],
  techStack: ['React', 'Vite', 'Tailwind CSS', 'Static Architecture', 'Vercel Deployment'],
  stats: [
    { label: 'Lighthouse Score', value: '98/100' },
    { label: 'Responsive Range', value: '100% Fluid' },
    { label: 'Search Latency', value: '< 10ms' },
  ],
};

/* ==========================================================================
   PROJECT #4: NOIRÉ PARFUMS
   ========================================================================== */
export const noireProject: Project = {
  id: 'noire',
  name: 'NOIRÉ Parfums',
  subtitle: 'Haute Parfumerie & Social-Commerce',
  category: 'Haute Parfumerie',
  liveUrl: 'https://noire-store-five.vercel.app/',
  description:
    'A bespoke luxury perfume house combining dark high-fashion editorial aesthetics with a frictionless direct-to-WhatsApp checkout system.',
  accentColor: '#C6532E', // Burnt Orange
  badge: 'Selected Work • Haute Parfumerie',
  features: [
    'Luxury visual design with obsidian dark palette and gold accents',
    'Comprehensive fragrance catalog featuring Oud, Santal, Rose, and Ambre',
    'Immersive product detail pages with olfactory notes breakdown',
    'Real-time shopping cart with quantity and volume management',
    'Mobile-first responsive architecture tailored for high-end shoppers',
    'Customer delivery details capture form (Name, Phone, City, Address)',
    'Frictionless WhatsApp ordering system eliminating gateway overhead',
    'Zero backend database overhead, hosted on global edge CDN',
  ],
  techStack: ['React', 'Vite', 'Tailwind CSS', 'WhatsApp Business API URI', 'Vercel Static'],
  stats: [
    { label: 'Checkout Drop-off', value: 'Near Zero' },
    { label: 'Gateway Fees', value: '0%' },
    { label: 'Order Dispatch', value: 'Instant WhatsApp' },
  ],
};

export const allProjects: Project[] = [
  verenProject,
  vitaloProject,
  gstoreProject,
  noireProject,
];

/* ==========================================================================
   WHATSAPP ORDERING STEPS
   ========================================================================== */
export const noireWhatsAppSteps: WhatsAppStep[] = [
  {
    stepNumber: 1,
    title: 'Browse',
    description: 'The customer explores products, variants, collections, and specifications directly on the site.',
    iconName: 'Sparkles',
  },
  {
    stepNumber: 2,
    title: 'Add to Cart',
    description: 'Shoppers select variants (sizes, flavors, fragrances) and add items with one tactile tap.',
    iconName: 'ShoppingBag',
  },
  {
    stepNumber: 3,
    title: 'Review Order',
    description: 'Transparent order breakdown showing quantities, unit pricing, and subtotal calculation.',
    iconName: 'CheckCircle2',
  },
  {
    stepNumber: 4,
    title: 'Enter Delivery Details',
    description: 'The shopper inputs Full Name, Phone Number, City, Delivery Address, and optional notes.',
    highlight: 'Full Name • Phone • City • Delivery Address • Notes',
    iconName: 'MapPin',
  },
  {
    stepNumber: 5,
    title: 'Generate WhatsApp Order',
    description: 'A single tap formats the entire order with structured text, itemized totals, and delivery info.',
    highlight: 'Mobile opens native WhatsApp • Desktop opens WhatsApp Web',
    iconName: 'Send',
  },
  {
    stepNumber: 6,
    title: 'Business Receives Order',
    description: 'The business owner receives the structured order in WhatsApp, starting a direct customer relationship.',
    highlight: 'Direct chat • Zero gateway commissions • Instant confirmation',
    iconName: 'MessageSquareCheck',
  },
];

/* ==========================================================================
   SERVICES (EDITORIAL SERVICE LIST)
   ========================================================================== */
export const services: ServiceItem[] = [
  {
    id: 'ecommerce',
    title: 'CUSTOM E-COMMERCE',
    tagline: 'High-converting online stores built for performance',
    description:
      'High-converting online stores built for performance. We engineer responsive digital storefronts with dynamic catalogs, variant pickers, instant search, and frictionless cart experiences.',
    deliverables: [
      'Product catalog & structured category architecture',
      'Instant search and multi-attribute filtering',
      'Multi-variant selectors (sizes, colors, materials)',
      'Smooth sliding shopping cart drawer with local persistence',
      'Mobile-first touch interactions and conversion UI',
    ],
    icon: 'Store',
    badge: 'Core Specialty',
  },
  {
    id: 'social-commerce',
    title: 'WHATSAPP COMMERCE',
    tagline: 'Direct ordering without traditional payment gateway friction',
    description:
      'Direct ordering without traditional payment gateway friction. Turn your site into a high-conversion social commerce funnel that formats customer orders and addresses directly into your WhatsApp inbox.',
    deliverables: [
      'Automated formatted message generation with full cart details',
      'Intelligent routing: native WhatsApp on mobile, WhatsApp Web on desktop',
      'Delivery address and contact information capture',
      'Instant direct relationship with your buyers',
      '0% processing fees, ideal for boutique, luxury & local brands',
    ],
    icon: 'MessageCircle',
    badge: 'High Conversion',
  },
  {
    id: 'brand-corporate',
    title: 'BRAND & CORPORATE',
    tagline: 'Distinctive digital identities designed around the business',
    description:
      'Distinctive digital identities designed around the business. From luxury boutiques to ambitious companies, we craft bespoke visual identities with editorial typography, layout balance, and responsive design.',
    deliverables: [
      'Bespoke layout design tailored specifically to your market',
      'High-contrast editorial typography and micro-interactions',
      'Elevated visual hierarchy that commands authority and trust',
      'Mobile-optimized layouts with intentional whitespace',
    ],
    icon: 'Palette',
    badge: 'Art Directed',
  },
  {
    id: 'static-edge',
    title: 'STATIC EDGE ARCHITECTURE',
    tagline: 'Fast, secure and lightweight websites deployed through Vercel',
    description:
      'Fast, secure and lightweight websites deployed through Vercel. We deploy pure static React/Vite websites to Vercel global edge CDN, guaranteeing sub-second loads, zero database vulnerabilities, and zero recurring server fees.',
    deliverables: [
      'Sub-second first contentful paint (<800ms) worldwide',
      'Vercel static edge distribution with 99.99% uptime',
      'Zero database crashes, zero WordPress plugin bloat',
      '100% free of expensive monthly database or server hosting fees',
    ],
    icon: 'Zap',
    badge: 'Vercel Optimized',
  },
];

/* ==========================================================================
   WHY SITENOVA (THE SITENOVA ADVANTAGE)
   ========================================================================== */
export const whyChooseSiteNova: ValueProp[] = [
  {
    title: 'Direct-to-Customer Conversion',
    description:
      'Traditional e-commerce loses up to 70% of customers at complex checkout gateways. Our WhatsApp ordering flow converts buyers directly with zero payment gateway friction.',
    metric: '70%',
    metricLabel: 'Less checkout abandonment',
    icon: 'Flame',
  },
  {
    title: 'Blazing Fast Static Performance',
    description:
      'Pure static React websites deployed to Vercel edge networks load in under 1 second worldwide, eliminating database lag and boosting buyer trust.',
    metric: '<1s',
    metricLabel: 'Global page load time',
    icon: 'Gauge',
  },
  {
    title: 'Zero Server Maintenance Costs',
    description:
      'Unlike fragile WordPress installs that break on updates and require monthly server fees, our 100% static React sites run indefinitely with zero maintenance bills.',
    metric: '0 EGP/mo',
    metricLabel: 'Database & server fees',
    icon: 'ShieldCheck',
  },
  {
    title: 'Bespoke Craftsmanship',
    description:
      'Every project is customized to reflect your brand personality—from haute editorial (VÉREN) to precision supplements (VITALØ). Never recycled templates.',
    metric: '100%',
    metricLabel: 'Custom tailored code',
    icon: 'Gem',
  },
];

/* ==========================================================================
   4-STEP PROCESS TIMELINE
   ========================================================================== */
export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Tell Us About Your Business',
    description:
      'Share your brand vision, target customers, product catalog or services, and aesthetic preferences through a direct WhatsApp consultation.',
    duration: 'Day 1–2',
    deliverable: 'Project scope & architecture roadmap',
  },
  {
    number: '02',
    title: 'We Design Your Website',
    description:
      'We craft bespoke editorial layouts, custom typography hierarchies, interactive components, and configure your ordering systems.',
    duration: 'Day 3–7',
    deliverable: 'Fully functional staging site',
  },
  {
    number: '03',
    title: 'You Review & Refine',
    description:
      'You interact with the live staging preview on both mobile and desktop, test the ordering experience, and request refinements until it is exact.',
    duration: 'Day 8–10',
    deliverable: 'Refinements & final approval',
  },
  {
    number: '04',
    title: 'Your Website Goes Live',
    description:
      'We connect your custom domain and deploy your production build to Vercel global edge network. Your business is live and ready for customers.',
    duration: 'Day 11–14',
    deliverable: 'Live Vercel deployment & ownership transfer',
  },
];

// Sample items for NOIRÉ WhatsApp simulator
export const sampleNoireFragrances = [
  { id: '1', name: 'Oud Impérial Eau de Parfum', size: '100 ml', price: 3200, notes: 'Cambodian Oud, Incense, Leather' },
  { id: '2', name: 'Santal Velours Extrait', size: '50 ml', price: 2400, notes: 'Mysore Sandalwood, Cardamom, Amber' },
  { id: '3', name: 'Rose Noire Absolue', size: '100 ml', price: 2850, notes: 'Damask Rose, Black Pepper, Patchouli' },
  { id: '4', name: 'Ambre Mystique Parfum', size: '50 ml', price: 2200, notes: 'Baltic Amber, Vanilla Bean, Benzoin' },
];

// Sample items for VITALØ supplement showcase
export const sampleVitaloProducts = [
  {
    id: 'vital-1',
    name: 'ISO-Whey Native Isolate',
    category: 'Protein',
    tagline: 'Ultra-Pure Micro-Filtered Cold-Processed Whey (27g Protein/Serving)',
    price: 1850,
    size: '1.0 kg (33 Servings)',
    flavors: ['Double Rich Chocolate', 'Madagascar Vanilla', 'Matcha Cream'],
    badge: 'Best Seller',
    rating: '4.9/5',
  },
  {
    id: 'vital-2',
    name: 'SURGE Pre-Workout Elite',
    category: 'Energy',
    tagline: 'Clinical 8g Citrulline Malate, Beta-Alanine & Pure Caffeine Anhydrous',
    price: 1350,
    size: '420g (30 Servings)',
    flavors: ['Arctic Blue Raspberry', 'Sour Watermelon', 'Citrus Lime'],
    badge: 'High Performance',
    rating: '4.8/5',
  },
  {
    id: 'vital-3',
    name: 'Creapure® Micronized Creatine',
    category: 'Strength',
    tagline: '100% German-Manufactured Pure Micronized Creatine Monohydrate',
    price: 980,
    size: '500g (100 Servings)',
    flavors: ['Unflavored Pure'],
    badge: 'Essential',
    rating: '5.0/5',
  },
  {
    id: 'vital-4',
    name: 'ELECTRO-MATRIX Hydration',
    category: 'Hydration',
    tagline: 'Optimal 4:1 Sodium-Potassium Bioavailable Hydration Electrolytes',
    price: 750,
    size: '30 Stick Packs',
    flavors: ['Blood Orange', 'Lemon Ice', 'Yuzu Berry'],
    badge: 'Electrolytes',
    rating: '4.9/5',
  },
];

