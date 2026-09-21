import { Project, ServiceItem, ProcessStep, ValueProp, WhatsAppStep } from '../types';

export const agencyConfig = {
  name: 'SiteNova',
  studioName: 'SiteNova Web Studio',
  tagline: 'Small Web Studio • Custom Websites',
  headline: 'WE BUILD WEBSITES THAT FEEL LIKE YOURS.',
  subheadline:
    'Small studio. Custom websites. Built around your business, your customers, and how you actually sell.',
  contact: {
    whatsappNumber: '01555380043',
    whatsappIntNumber: '201555380043',
    whatsappDisplay: '01555380043',
    whatsappDefaultMessage:
      "Hello SiteNova! I have a project in mind for my business. I'd like to chat about building a custom website.",
    instagramHandle: '@sitenovastudio',
    instagramUrl: 'https://instagram.com/sitenovastudio',
    email: 'hello@sitenova.design',
    location: 'Egypt & Worldwide',
    status: 'Currently Taking on Projects',
    turnaroundTime: '7 to 14 Days Typical Delivery',
  },
  stats: [
    { value: '100% Custom', label: 'No generic templates' },
    { value: '0% Gateway Fees', label: 'Direct WhatsApp orders' },
    { value: '< 1.0s Speed', label: 'Fast static React builds' },
    { value: 'Direct Contact', label: 'Talk with the builders' },
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
    tagline: 'Clean, fast online storefronts built to sell',
    description:
      'Custom-designed product catalogs, variant pickers, fast search, and shopping carts. Built to present your products clearly and turn visitors into paying customers.',
    deliverables: [
      'Custom mobile-first layout designed for your products',
      'Instant product search & category filtering',
      'Multi-variant selectors (sizes, colors, packages)',
      'Smooth sliding shopping cart drawer with local persistence',
      'Direct, frictionless path from browsing to buying',
    ],
    icon: 'Store',
    badge: 'Core Focus',
  },
  {
    id: 'social-commerce',
    title: 'WHATSAPP ORDERING STORES',
    tagline: 'Direct-to-chat checkout with zero transaction fees',
    description:
      'Customers select products, enter their delivery address, and send a pre-formatted order directly to your WhatsApp. You keep 100% of your margins with zero gateway fees.',
    deliverables: [
      'Automated formatted message generation with full cart details',
      'Intelligent routing: native WhatsApp on mobile, WhatsApp Web on desktop',
      'Delivery address, phone, and customer contact capture',
      'Direct 1-on-1 dialogue with your customers',
      '0% processing fees, ideal for boutique, luxury & local brands',
    ],
    icon: 'MessageCircle',
    badge: 'Zero Fees',
  },
  {
    id: 'brand-corporate',
    title: 'BRAND & STUDIO WEBSITES',
    tagline: 'Memorable websites for businesses with distinct taste',
    description:
      'For creative businesses and brands that want to stand out from generic templates. Editorial typography, refined layouts, and thoughtful interactions that reflect who you actually are.',
    deliverables: [
      'Custom layout design tailored around your story',
      'High-contrast typography and intentional whitespace',
      'Designed to build trust from the very first scroll',
      'Fast, responsive, and easy to navigate on every device',
    ],
    icon: 'Palette',
    badge: 'Custom Crafted',
  },
  {
    id: 'static-edge',
    title: 'FAST STATIC WEB BUILDS',
    tagline: 'Modern React builds with zero server headaches',
    description:
      'We build websites with modern static React and deploy them to global edge networks. They never crash, load in under a second, and don’t require monthly server maintenance.',
    deliverables: [
      'Sub-second global load times (<800ms) on edge CDNs',
      'Zero fragile plugins that break after software updates',
      'Zero database crashes or security vulnerabilities',
      'No recurring monthly database or server hosting fees',
    ],
    icon: 'Zap',
    badge: 'Edge Deployed',
  },
];

/* ==========================================================================
   WHY SITENOVA (THE SMALL STUDIO ADVANTAGE)
   ========================================================================== */
export const whyChooseSiteNova: ValueProp[] = [
  {
    title: 'Direct Communication',
    description:
      'Instead of handing your project between account managers or separate departments, you communicate directly with the people designing and building your site.',
    metric: '1:1',
    metricLabel: 'Direct with builders',
    icon: 'Flame',
  },
  {
    title: 'Custom Design, No Templates',
    description:
      'We build each website around your specific brand, your products, and how your customers actually buy. No recycled WordPress themes or generic cookie-cutter layouts.',
    metric: '100%',
    metricLabel: 'Custom tailored code',
    icon: 'Gem',
  },
  {
    title: 'Fast & Maintenance-Free',
    description:
      'Built with modern static React and deployed to edge networks. Your site loads in under a second worldwide, with zero plugin bloat and zero server bills.',
    metric: '<1s',
    metricLabel: 'Global page load time',
    icon: 'Gauge',
  },
  {
    title: 'Affordable vs Large Agencies',
    description:
      'Because we are a lean, focused studio with zero corporate overhead, you get top-tier design and craftsmanship at a fraction of large agency retainers.',
    metric: '0%',
    metricLabel: 'Corporate overhead waste',
    icon: 'ShieldCheck',
  },
];

/* ==========================================================================
   4-STEP PROCESS TIMELINE
   ========================================================================== */
export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: "Tell Us What You're Building",
    description:
      'Send us a message on WhatsApp. Tell us what you sell, what kind of website you need, and any examples you like. We will give you honest thoughts and a clear plan.',
    duration: 'Day 1–2',
    deliverable: 'Scope, timeline & honest estimate',
  },
  {
    number: '02',
    title: 'We Design & Build Your Site',
    description:
      'We get straight to work crafting your pages, styling layouts, writing clean code, and setting up your ordering flow. No endless delays or bureaucracy.',
    duration: 'Day 3–8',
    deliverable: 'Functional staging preview link',
  },
  {
    number: '03',
    title: 'You Test & We Refine',
    description:
      'You click through the actual website on your phone and laptop, test the ordering flow, and tell us what you would like adjusted. We fine-tune every detail.',
    duration: 'Day 9–11',
    deliverable: 'Refined build ready for launch',
  },
  {
    number: '04',
    title: 'Your Website Goes Live',
    description:
      'We connect your domain, deploy the production build to Vercel edge networks, and make sure everything is running fast. Your site is live and ready for customers.',
    duration: 'Day 12–14',
    deliverable: 'Live website & full handover',
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

