import { Project, ServiceItem, ProcessStep, ValueProp, WhatsAppStep } from '../types';

export const agencyConfig = {
  name: 'SiteNova',
  tagline: 'High-Impact Web Design & Social-Commerce Engineering',
  headline: 'We engineer websites that turn visitors into paying customers.',
  subheadline:
    'SiteNova designs and builds ultra-fast, modern static websites and frictionless social-commerce storefronts for ambitious brands.',
  contact: {
    // SiteNova WhatsApp Business Contact
    whatsappNumber: '01555380043',
    whatsappIntNumber: '201555380043',
    whatsappDisplay: '01555380043',
    whatsappDefaultMessage:
      "Hello SiteNova! I'm interested in getting a website for my business. I'd like to learn more about your services.",
    instagramHandle: '@sitenovastudio',
    instagramUrl: 'https://instagram.com/sitenovastudio',
    email: 'hello@sitenova.design',
    location: 'Egypt & Worldwide',
    status: 'Accepting New Projects for Q2 / Q3',
    turnaroundTime: '7 to 14 Days Typical Delivery',
  },
  stats: [
    { value: '100%', label: 'Static & Edge Hosted' },
    { value: '< 1s', label: 'Page Load Speed' },
    { value: '0 EGP', label: 'Monthly Database Fees' },
    { value: '7-14d', label: 'Average Delivery' },
  ],
};

/**
 * Returns a direct WhatsApp Web URL for SiteNova with pre-filled message.
 * Formatted as: https://web.whatsapp.com/send?phone=201555380043&text=...
 * Opens in the browser directly without requiring desktop app installation.
 */
export const getSiteNovaWhatsAppUrl = (message?: string): string => {
  const text = message || agencyConfig.contact.whatsappDefaultMessage;
  return `https://web.whatsapp.com/send?phone=${agencyConfig.contact.whatsappIntNumber}&text=${encodeURIComponent(text)}`;
};

export const vitaloProject: Project = {
  id: 'vital0',
  name: 'VITALØ',
  subtitle: 'Precision Performance Supplements & Direct WhatsApp E-Commerce',
  category: 'E-Commerce / Supplement Store',
  liveUrl: 'https://vital0.vercel.app/',
  description:
    'A premium, high-performance supplement e-commerce experience built with a strong focus on mobile UX, product presentation, performance, and direct WhatsApp ordering.',
  accentColor: '#10b981', // Emerald / Neon Accent
  badge: 'Featured Project • Precision Supplements',
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

export const gstoreProject: Project = {
  id: 'gstore',
  name: 'GStore Sportswear',
  subtitle: 'High-Energy Athletic & Performance E-Commerce Store',
  category: 'E-Commerce & Sportswear',
  liveUrl: 'https://gstore-static.vercel.app/',
  description:
    'GStore is a high-performance sportswear e-commerce platform designed for modern athletic brands. Built with a sleek, aerodynamic UI, responsive filtering, live shopping cart, and dynamic size/color variant pickers.',
  accentColor: '#3b82f6', // Electric Blue
  badge: 'Athletic E-Commerce',
  features: [
    'Modern responsive design across desktop, tablet, and mobile',
    'Curated product catalog with smooth layout shifts',
    'Product categories (Men, Women, Footwear, Accessories)',
    'Instant search and multi-attribute filtering',
    'Rich product detail pages with high-resolution imagery',
    'Interactive size and color variant selectors',
    'Dynamic shopping cart with real-time subtotal calculation',
    'Optimized mobile-friendly experience with thumb-friendly controls',
    'Professional, clean e-commerce UI built for conversions',
    'Clean product presentation with clear call-to-actions',
  ],
  techStack: ['React 19', 'Vite', 'Tailwind CSS', 'Static Architecture', 'Vercel Deployment'],
  stats: [
    { label: 'Lighthouse Performance', value: '98/100' },
    { label: 'Responsive Viewports', value: '100% Fluid' },
    { label: 'Catalog Filtering', value: 'Instant (<10ms)' },
  ],
};

export const noireProject: Project = {
  id: 'noire',
  name: 'NOIRÉ Parfums',
  subtitle: 'Luxury Fragrance Boutique with WhatsApp Social-Commerce',
  category: 'Luxury E-Commerce & Social Commerce',
  liveUrl: 'https://noire-store-five.vercel.app/',
  description:
    'NOIRÉ is an exclusive luxury fragrance boutique combining high-fashion editorial design with an innovative direct-to-WhatsApp social-commerce ordering system that eliminates payment friction.',
  accentColor: '#d97706', // Warm Amber / Luxury Gold
  badge: 'Luxury Social-Commerce',
  features: [
    'Luxury visual design with dark obsidian palette and gold accents',
    'Comprehensive fragrance product catalog',
    'Immersive product detail pages with olfactory notes breakdown',
    'Curated seasonal collections (Oud, Santal, Amber)',
    'Real-time shopping cart with quantity management',
    'Mobile-first responsive architecture tailored for high-end shoppers',
    'Customer delivery details capture form',
    'Frictionless WhatsApp ordering system (Zero payment gateway overhead)',
  ],
  techStack: ['React', 'Vite', 'Tailwind CSS', 'WhatsApp Business API URI', 'Vercel Static'],
  stats: [
    { label: 'Checkout Friction', value: 'Zero Drop-off' },
    { label: 'Gateway Transaction Fees', value: '0%' },
    { label: 'Direct Customer Connection', value: '100% WhatsApp' },
  ],
};

export const noireWhatsAppSteps: WhatsAppStep[] = [
  {
    stepNumber: 1,
    title: 'Browse Luxury Fragrances',
    description: 'The customer explores curated perfume collections, notes (Top, Heart, Base), and sizes.',
    iconName: 'Sparkles',
  },
  {
    stepNumber: 2,
    title: 'Add to Cart',
    description: 'Customers choose their bottle volumes (e.g. 50ml, 100ml) and add selections with one tap.',
    iconName: 'ShoppingBag',
  },
  {
    stepNumber: 3,
    title: 'Review Cart',
    description: 'Transparent order breakdown showing quantities, unit costs, and total calculation.',
    iconName: 'CheckCircle2',
  },
  {
    stepNumber: 4,
    title: 'Enter Delivery Information',
    description: 'The shopper enters Full Name, Phone Number, City, and Delivery Address directly in the cart.',
    highlight: 'Full Name • Phone • City • Street Address',
    iconName: 'MapPin',
  },
  {
    stepNumber: 5,
    title: 'Click WhatsApp Order Button',
    description: 'One prominent action button initiates the instant checkout without asking for credit card details.',
    iconName: 'Send',
  },
  {
    stepNumber: 6,
    title: 'Automated Message Generation',
    description:
      'The website automatically generates a structured, formatted text with ordered items, total, and recipient address.',
    highlight: 'Formatted with items, quantities, totals & delivery info',
    iconName: 'FileText',
  },
  {
    stepNumber: 7,
    title: 'Mobile: Direct WhatsApp App Launch',
    description: 'On iOS or Android, the device seamlessly launches the native WhatsApp app with text pre-filled.',
    iconName: 'Smartphone',
  },
  {
    stepNumber: 8,
    title: 'Desktop: WhatsApp Web Integration',
    description: 'On laptops or desktops, it opens web.whatsapp.com ready for instant 1-click dispatch.',
    iconName: 'Laptop',
  },
  {
    stepNumber: 9,
    title: 'Direct Order Dispatch to Business',
    description:
      'The business owner receives the complete order directly in WhatsApp, establishing an instant human relationship.',
    highlight: 'Direct chat • Zero gateway commissions • Instant confirmation',
    iconName: 'MessageSquareCheck',
  },
];

export const services: ServiceItem[] = [
  {
    id: 'ecommerce',
    title: 'Custom E-Commerce Websites',
    tagline: 'High-converting online stores built for performance',
    description:
      'We build sleek, responsive online storefronts with rich product catalogs, dynamic filtering, size/color variant pickers, and fluid shopping carts.',
    deliverables: [
      'Product catalog & category architecture',
      'Live search and attribute filtering',
      'Variants selector (sizes, colors, materials)',
      'Smooth sliding shopping cart drawer',
      'Mobile-optimized touch interactions',
    ],
    icon: 'Store',
    badge: 'Popular for Retail',
  },
  {
    id: 'social-commerce',
    title: 'WhatsApp & Social-Commerce',
    tagline: 'Zero-gateway ordering directly into your WhatsApp inbox',
    description:
      'Skip high credit card processing fees and cart abandonment. We build order systems that format customer carts and delivery addresses into instant WhatsApp messages.',
    deliverables: [
      'Automated formatted message generation',
      'Seamless mobile WhatsApp & desktop WhatsApp Web routing',
      'Customer delivery address capture',
      'Instant direct relationship with your buyers',
      '0% processing fees, ideal for boutique & local commerce',
    ],
    icon: 'MessageCircle',
    badge: 'High Conversion',
  },
  {
    id: 'brand-portfolio',
    title: 'Brand & Corporate Web Design',
    tagline: 'Distinctive digital presence that commands authority',
    description:
      'From luxury boutiques to high-growth tech businesses, we craft bespoke visual identities with premium typography, cinematic layout balance, and responsive design.',
    deliverables: [
      'Bespoke layout design tailored to your industry',
      'Editorial typography and micro-interactions',
      'High-contrast modern dark & light aesthetics',
      'Optimized for client conversion and trust',
    ],
    icon: 'Palette',
  },
  {
    id: 'static-performance',
    title: '100% Static Edge Architecture',
    tagline: 'Blazing fast load times with zero server maintenance',
    description:
      'We deploy pure static React/Vite websites to Vercel global edge CDN. This means sub-second page loads, unmatched security, and zero ongoing server hosting bills.',
    deliverables: [
      'Sub-second first contentful paint (<800ms)',
      'Vercel static edge distribution worldwide',
      'Zero server crashes, zero database vulnerabilities',
      'Free from expensive recurring backend hosting bills',
    ],
    icon: 'Zap',
    badge: 'Vercel Optimized',
  },
];

export const whyChooseSiteNova: ValueProp[] = [
  {
    title: 'Direct-to-Customer Conversion',
    description:
      'Traditional e-commerce loses up to 70% of customers at the checkout form. Our WhatsApp and direct solutions convert immediately with zero payment gateway friction.',
    metric: '70%',
    metricLabel: 'Less checkout abandonment',
    icon: 'Flame',
  },
  {
    title: 'Blazing Fast Static Performance',
    description:
      'Static sites deployed to Vercel load nearly instantly worldwide. No slow database queries, no server lag, and 98+ Google Lighthouse scores guaranteed.',
    metric: '<1s',
    metricLabel: 'Global page load time',
    icon: 'Gauge',
  },
  {
    title: 'Zero Server Maintenance Costs',
    description:
      'Unlike WordPress or complex backend systems that break during plugin updates or require expensive servers, our 100% static React sites cost virtually nothing to maintain.',
    metric: '0 EGP/mo',
    metricLabel: 'Database & server fees',
    icon: 'ShieldCheck',
  },
  {
    title: 'Bespoke Craftsmanship',
    description:
      'Every pixel is customized to reflect your brand personality—from athletic minimalism (like GStore) to dark luxury editorial (like NOIRÉ). Never cookie-cutter templates.',
    metric: '100%',
    metricLabel: 'Custom tailored code',
    icon: 'Gem',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Tell Us About Your Business',
    description:
      'Share your brand vision, target customers, product catalog or services, and aesthetic preferences through a quick WhatsApp or message chat.',
    duration: 'Day 1–2',
    deliverable: 'Project scope & architecture roadmap',
  },
  {
    number: '02',
    title: 'We Design Your Website',
    description:
      'We create high-fidelity responsive layouts, interactive components (catalogs, variants, carts), and configure your custom ordering flows.',
    duration: 'Day 3–7',
    deliverable: 'Fully functional staging site',
  },
  {
    number: '03',
    title: 'You Review & Refine',
    description:
      'You interact with the live staging preview on both phone and desktop, test the ordering experience, and request any adjustments until it is perfect.',
    duration: 'Day 8–10',
    deliverable: 'Revisions & client approval',
  },
  {
    number: '04',
    title: 'Your Website Goes Live',
    description:
      'We connect your custom domain and deploy your production build to Vercel global edge network. Your business is instantly ready to welcome clients and receive orders.',
    duration: 'Day 11–14',
    deliverable: 'Live Vercel deployment & ownership transfer',
  },
];

// Sample items for the NOIRÉ WhatsApp simulator so visitors can test it live!
export const sampleNoireFragrances = [
  { id: '1', name: 'Oud Impérial Eau de Parfum', size: '100 ml', price: 3200, notes: 'Cambodian Oud, Incense, Leather' },
  { id: '2', name: 'Santal Velours Extrait', size: '50 ml', price: 2400, notes: 'Mysore Sandalwood, Cardamom, Amber' },
  { id: '3', name: 'Rose Noire Absolue', size: '100 ml', price: 2850, notes: 'Damask Rose, Black Pepper, Patchouli' },
  { id: '4', name: 'Ambre Mystique Parfum', size: '50 ml', price: 2200, notes: 'Baltic Amber, Vanilla Bean, Benzoin' },
];

// Sample items for the VITALØ supplement showcase
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

