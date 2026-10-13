/**
 * Seed Sanity with static data from lib/data.ts
 * Run: npm run seed
 * Requires SANITY_WRITE_TOKEN in .env.local
 */
import { createClient } from "@sanity/client";
import {
  profile as staticProfile,
  hero as staticHero,
  about as staticAbout,
  caseStudies,
  services,
  skillGroups,
  experience,
  education,
  testimonials,
  insights,
} from "../lib/data";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_WRITE_TOKEN in .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-01-01",
  token,
  useCdn: false,
});

async function upsert(doc: Record<string, unknown>) {
  const id = doc._id as string;
  try {
    await client.createOrReplace(doc);
    console.log(`  ✓ ${id}`);
  } catch (err) {
    console.error(`  ✗ ${id}`, err);
  }
}

async function seed() {
  console.log(`\nSeeding Sanity project: ${projectId} / ${dataset}\n`);

  // Singletons
  await upsert({
    _id: "profile",
    _type: "profile",
    name: staticProfile.name,
    tagline: staticProfile.tagline,
    location: staticProfile.location,
    email: staticProfile.email,
    linkedinUrl: staticProfile.linkedinUrl,
    credentials: staticProfile.credentials,
    roles: staticProfile.roles,
  });

  await upsert({
    _id: "heroSettings",
    _type: "heroSettings",
    eyebrow: staticHero.eyebrow,
    headline: staticHero.headline,
    sub: staticHero.sub,
    stats: staticHero.stats,
  });

  await upsert({
    _id: "utilizationPanel",
    _type: "utilizationPanel",
    averageValue: 89,
    clientLabel: "Client Build",
    buildLabel: "Internal Build",
    footnote: "Resource utilization across active client engagements",
    rows: [
      { label: "Strategy", before: 42, after: 87 },
      { label: "Delivery Ops", before: 55, after: 91 },
      { label: "BI & Analytics", before: 38, after: 84 },
      { label: "Sales", before: 49, after: 88 },
    ],
  });

  await upsert({
    _id: "about",
    _type: "about",
    heading: staticAbout.heading,
    paragraphs: staticAbout.paragraphs,
    pillars: staticAbout.pillars,
  });

  // Collections
  for (const [i, cs] of caseStudies.entries()) {
    await upsert({
      _id: `caseStudy-${cs.id}`,
      _type: "caseStudy",
      order: i + 1,
      id: cs.id,
      tag: cs.tag,
      client: cs.client,
      role: cs.role,
      window: cs.window,
      summary: cs.summary,
      metrics: cs.metrics,
      points: cs.points,
    });
  }

  for (const [i, s] of services.entries()) {
    await upsert({
      _id: `service-${i + 1}`,
      _type: "service",
      order: i + 1,
      title: s.title,
      description: s.description,
    });
  }

  for (const [i, sg] of skillGroups.entries()) {
    await upsert({
      _id: `skillGroup-${i + 1}`,
      _type: "skillGroup",
      order: i + 1,
      category: sg.category,
      items: sg.items,
    });
  }

  for (const [i, exp] of experience.entries()) {
    await upsert({
      _id: `experience-${i + 1}`,
      _type: "experienceRole",
      order: i + 1,
      title: exp.title,
      org: exp.org,
      when: exp.when,
      intro: exp.intro,
      bullets: exp.bullets,
    });
  }

  for (const [i, ed] of education.entries()) {
    await upsert({
      _id: `education-${i + 1}`,
      _type: "education",
      order: i + 1,
      tag: ed.tag,
      text: ed.text,
    });
  }

  for (const [i, t] of testimonials.entries()) {
    await upsert({
      _id: `testimonial-${i + 1}`,
      _type: "testimonial",
      order: i + 1,
      quote: t.quote,
      name: t.name,
      title: t.title,
    });
  }

  for (const [i, ins] of insights.entries()) {
    await upsert({
      _id: `insight-${i + 1}`,
      _type: "insightPost",
      order: i + 1,
      title: ins.title,
      category: ins.category,
      excerpt: ins.excerpt,
    });
  }

  console.log("\nDone. Open /studio to verify and add hero photo.\n");
}

seed().catch(console.error);
