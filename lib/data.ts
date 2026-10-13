// ─── Static content — single source of truth ──────────────────────────────
// All sections fall back to this when Sanity is unconfigured or returns empty.

export const profile = {
  name: "Adeel Sarwar",
  tagline: "Operations Leader & Business Intelligence Specialist",
  location: "UAE / Pakistan",
  email: "contact@adeelsarwar.com",
  linkedinUrl: "https://www.linkedin.com/in/adeel-sarwar-o-80336443/",
  credentials: ["MBA", "PMP", "Six Sigma Black Belt"],
  roles: [
    "Head of Operations",
    "Business Intelligence Lead",
    "Sales Operations Strategist",
    "Process Architect",
  ],
};

export const hero = {
  eyebrow: "Operations & Business Intelligence",
  headline: "Turning operational complexity into measurable business impact",
  sub: "15+ years architecting scalable operations, sales systems, and BI frameworks across the Middle East and South Asia.",
  stats: [
    { value: "15+", label: "Years Experience" },
    { value: "40%", label: "Avg. Efficiency Gain" },
    { value: "$12M+", label: "Revenue Influenced" },
    { value: "8",    label: "Countries Served" },
  ],
};

export const about = {
  heading: "The intersection of strategy and execution",
  paragraphs: [
    "I build the operational backbone that lets businesses scale without breaking. From SOP architecture and workforce planning to CRM automation and KPI frameworks — I translate complexity into systems that run.",
    "My approach is rooted in data. Every process I design is instrumented with clear metrics, ownership, and escalation paths. The result is visibility at every level — from daily team standups to board-level dashboards.",
    "I've led operations, BI, and sales functions across cricket technology, logistics, fintech, and professional services — bringing the same rigour to each: define the system, build the tooling, track the outcome.",
  ],
  pillars: [
    "Operational Architecture",
    "Business Intelligence",
    "Sales Operations",
    "Process Optimization",
    "KPI Framework Design",
    "CRM & Automation",
    "Cross-functional Leadership",
    "Resource Utilization",
  ],
};

export interface CaseStudy {
  id: string;
  tag: string;
  client: string;
  role: string;
  window: string;
  summary: string;
  metrics: { value: string; label: string }[];
  points: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "crickslab-ops",
    tag: "Operations Transformation",
    client: "Crickslab / Wisdom IT",
    role: "Head of Operations & Sales",
    window: "2022 – Present",
    summary:
      "Rebuilt operational and sales infrastructure for a UAE-based cricket technology platform serving the Qatar Cricket Association, Pakistan Cricket Board, and 50+ regional boards.",
    metrics: [
      { value: "60%", label: "Reduction in manual ops effort" },
      { value: "3×",  label: "Sales pipeline visibility" },
      { value: "40%", label: "Faster client onboarding" },
      { value: "8",   label: "Markets served" },
    ],
    points: [
      "Designed end-to-end SOP library covering customer onboarding, support escalation, and billing cycles",
      "Built Airtable-based CRM with automated lead scoring, follow-up triggers, and pipeline dashboards",
      "Implemented utilization tracking across a 12-person delivery team, surfacing capacity gaps in real time",
      "Structured QCA and PCB account plans with milestone-based delivery tracking and stakeholder reporting",
    ],
  },
  {
    id: "bi-framework",
    tag: "Business Intelligence",
    client: "Regional Services Group",
    role: "BI Lead",
    window: "2019 – 2022",
    summary:
      "Designed and deployed a company-wide BI framework — from data collection SOPs through to executive dashboards — replacing ad-hoc reporting with a single source of truth.",
    metrics: [
      { value: "12",   label: "Dashboards deployed" },
      { value: "70%",  label: "Reduction in reporting time" },
      { value: "100%", label: "C-suite adoption" },
      { value: "4",    label: "Departments integrated" },
    ],
    points: [
      "Mapped all existing reporting workflows, identified duplication, and consolidated 40+ spreadsheets into unified data models",
      "Designed KPI taxonomy with definitions, ownership, calculation logic, and refresh cadence for each metric",
      "Built Airtable + Softr front-end allowing non-technical managers to self-serve operational reports",
      "Trained department heads on data governance and created a quarterly review cadence tied to OKRs",
    ],
  },
  {
    id: "sales-build",
    tag: "Sales Operations",
    client: "B2B SaaS Startup",
    role: "Sales Operations Lead",
    window: "2017 – 2019",
    summary:
      "Built the sales function from zero — process, tooling, team structure, and reporting — for a pre-revenue SaaS product targeting enterprise sport organisations.",
    metrics: [
      { value: "0→$2M", label: "ARR in 18 months" },
      { value: "45%",   label: "Lead-to-close rate" },
      { value: "6",     label: "Enterprise accounts" },
      { value: "2.5×",  label: "Rep productivity gain" },
    ],
    points: [
      "Defined ICP, qualification criteria, and a 7-stage pipeline with clear exit criteria at each gate",
      "Set up HubSpot CRM with custom deal properties, sequence automation, and activity logging",
      "Hired and onboarded two BDRs; built playbooks covering objection handling, discovery scripts, and proposal templates",
      "Established weekly forecast cadence — deal-by-deal review with probability scoring and risk flags",
    ],
  },
];

export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    title: "Operational Architecture",
    description:
      "Design scalable operating models — org structures, SOP libraries, governance frameworks, and accountability systems that survive growth.",
  },
  {
    title: "Business Intelligence & Reporting",
    description:
      "Build the KPI taxonomy, data pipelines, and dashboards that give leadership a single, trusted view of business performance.",
  },
  {
    title: "Sales Operations",
    description:
      "Structure the sales engine — CRM setup, pipeline design, outbound playbooks, forecasting cadence, and rep accountability systems.",
  },
  {
    title: "Process Optimization",
    description:
      "Diagnose operational bottlenecks using lean and Six Sigma methods, then redesign workflows for speed, quality, and cost efficiency.",
  },
  {
    title: "Automation & Tooling",
    description:
      "Implement no-code and low-code automation using Airtable, Softr, Zapier, and CRM platforms to eliminate manual work at scale.",
  },
  {
    title: "Strategic Advisory",
    description:
      "Fractional COO and sales leadership for growth-stage companies — hands-on execution support with board-level reporting.",
  },
];

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Operations & Process",
    items: ["SOP Design", "Lean Six Sigma (Black Belt)", "Workforce Planning", "Capacity Modelling", "Change Management", "BPMN Process Mapping"],
  },
  {
    category: "Business Intelligence",
    items: ["KPI Framework Design", "Dashboard Architecture", "Data Modelling", "SQL", "Airtable", "Softr", "Power BI"],
  },
  {
    category: "Sales & CRM",
    items: ["HubSpot", "Salesforce (Admin)", "Pipeline Design", "Outbound Sequences", "Sales Forecasting", "Territory Planning"],
  },
  {
    category: "Leadership & Strategy",
    items: ["Cross-functional Leadership", "OKR Facilitation", "P&L Oversight", "Vendor Management", "Stakeholder Reporting", "Executive Presentations"],
  },
];

export interface ExperienceRole {
  title: string;
  org: string;
  when: string;
  intro: string;
  bullets: string[];
}

export const experience: ExperienceRole[] = [
  {
    title: "Head of Operations & Sales",
    org: "Crickslab / Wisdom Information Technology Solutions LLC",
    when: "2022 – Present",
    intro: "Lead all operational, sales, and customer success functions for a UAE-based cricket technology platform.",
    bullets: [
      "Manage enterprise accounts including Qatar Cricket Association and Pakistan Cricket Board",
      "Built CRM, utilization tracking, and pipeline reporting from the ground up using Airtable and Softr",
      "Oversee a team of two Sales Executives with weekly pipeline reviews and quota accountability",
      "Designed company-wide SOP library covering onboarding, support, billing, and account management",
    ],
  },
  {
    title: "Business Intelligence Lead",
    org: "Regional Services Group",
    when: "2019 – 2022",
    intro: "Owned the BI function across four business units — from data strategy through to executive reporting.",
    bullets: [
      "Consolidated 40+ spreadsheet reports into 12 unified dashboards adopted by the full C-suite",
      "Defined KPI taxonomy with ownership, calculation logic, and refresh cadence for each metric",
      "Implemented data governance framework and trained 30+ managers on self-service reporting",
      "Reduced weekly reporting cycle from 3 days to 4 hours through automation and template standardisation",
    ],
  },
  {
    title: "Sales Operations Lead",
    org: "B2B SaaS Startup",
    when: "2017 – 2019",
    intro: "Built the sales function from zero for a pre-revenue SaaS product targeting enterprise sport organisations.",
    bullets: [
      "Grew ARR from zero to $2M in 18 months across 6 enterprise accounts",
      "Designed 7-stage pipeline with exit criteria, objection playbooks, and deal review cadence",
      "Set up HubSpot CRM with custom automation, sequence logic, and activity reporting",
      "Hired and onboarded BDR team; achieved 2.5× rep productivity vs. industry benchmark",
    ],
  },
  {
    title: "Operations Manager",
    org: "Logistics & Distribution Group",
    when: "2013 – 2017",
    intro: "Managed day-to-day operations for a multi-site distribution network across Pakistan.",
    bullets: [
      "Oversaw 80-person operations team across 4 distribution hubs",
      "Reduced per-unit fulfilment cost by 22% through route optimisation and shift redesign",
      "Implemented real-time fleet tracking reducing idle time by 35%",
      "Led ISO 9001 certification project across all sites",
    ],
  },
];

export interface Education {
  tag: string;
  text: string;
}

export const education: Education[] = [
  { tag: "MBA",                    text: "Master of Business Administration — University of Management & Technology, Lahore" },
  { tag: "BBA",                    text: "Bachelor of Business Administration — University of the Punjab, Lahore" },
  { tag: "PMP",                    text: "Project Management Professional — PMI" },
  { tag: "Six Sigma Black Belt",   text: "Lean Six Sigma Black Belt — IASSC Certified" },
  { tag: "HubSpot Certified",      text: "HubSpot Sales Software & CRM Certification" },
];

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Adeel restructured our entire operations function in under six months. The SOP library and utilization dashboards he built are now the backbone of how we run the business.",
    name: "Nadeem Sheikh",
    title: "CEO, Crickslab",
  },
  {
    quote: "His ability to translate messy operational data into clear, actionable dashboards is rare. Our board meetings are completely different because of the reporting cadence he set up.",
    name: "Senior Director",
    title: "Regional Services Group",
  },
  {
    quote: "Adeel built our entire sales process from scratch — pipeline, CRM, playbooks, forecasting. We went from zero to $2M ARR and every deal was tracked with precision.",
    name: "Founder",
    title: "B2B SaaS Platform",
  },
];

export interface InsightPost {
  title: string;
  category: string;
  excerpt: string;
}

export const insights: InsightPost[] = [
  {
    title: "Why Most CRM Implementations Fail (and What to Do Instead)",
    category: "Sales Operations",
    excerpt: "The tool is never the problem. Most CRM roll-outs fail because the process underneath hasn't been defined. Here's the order that actually works.",
  },
  {
    title: "The KPI Taxonomy Framework I Use With Every Client",
    category: "Business Intelligence",
    excerpt: "Before building any dashboard, spend two weeks on this: define every metric, who owns it, how it's calculated, and when it refreshes. Everything else follows.",
  },
  {
    title: "Utilization Tracking: The Visibility Tool Most Ops Teams Skip",
    category: "Operations",
    excerpt: "If you can't see capacity versus load in real time, you're managing in the dark. Here's the lightweight system I use that every team lead can actually run.",
  },
];

// ─── Dynamic section types ─────────────────────────────────────────────────

export interface Project {
  _id?: string;
  order?: number;
  title: string;
  client?: string;
  category: string;
  role?: string;
  timeframe?: string;
  summary: string;
  tags?: string[];
  metrics?: { value: string; label: string }[];
  image?: { asset: { _ref: string } };
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [];

export interface CareerHighlight {
  _id?: string;
  order?: number;
  metric: string;
  title: string;
  description: string;
  when?: string;
}

export const careerHighlights: CareerHighlight[] = [];
