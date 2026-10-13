import { safeFetch } from "./fetch";
import {
  profile, hero, about, caseStudies, services, skillGroups,
  experience, education, testimonials, insights, projects, careerHighlights,
  type CaseStudy, type Service, type SkillGroup, type ExperienceRole,
  type Education, type Testimonial, type InsightPost, type Project, type CareerHighlight,
} from "../data";

export type UtilizationPanelContent = {
  averageValue: number;
  clientLabel: string;
  buildLabel: string;
  footnote: string;
  rows: { label: string; before: number; after: number }[];
};

const defaultPanel: UtilizationPanelContent = {
  averageValue: 78,
  clientLabel: "Client Delivery",
  buildLabel: "Internal Build",
  footnote: "Based on 12-month rolling average across active engagement portfolio",
  rows: [
    { label: "Strategy & Design",   before: 45, after: 82 },
    { label: "Delivery Ops",        before: 61, after: 88 },
    { label: "BI & Reporting",      before: 38, after: 74 },
    { label: "Sales & BD",          before: 52, after: 79 },
  ],
};

export const getProfile    = () => safeFetch(`*[_type=="profile"][0]`, profile);
export const getHero       = () => safeFetch(`*[_type=="heroSettings"][0]`, hero);
export const getAbout      = () => safeFetch(`*[_type=="about"][0]`, about);
export const getUtilizationPanel = () => safeFetch<UtilizationPanelContent>(`*[_type=="utilizationPanel"][0]`, defaultPanel);
export const getCaseStudies  = () => safeFetch<CaseStudy[]>(`*[_type=="caseStudy"] | order(order asc)`, caseStudies);
export const getServices     = () => safeFetch<Service[]>(`*[_type=="service"] | order(order asc)`, services);
export const getSkillGroups  = () => safeFetch<SkillGroup[]>(`*[_type=="skillGroup"] | order(order asc)`, skillGroups);
export const getExperience   = () => safeFetch<ExperienceRole[]>(`*[_type=="experienceRole"] | order(order asc)`, experience);
export const getEducation    = () => safeFetch<Education[]>(`*[_type=="education"] | order(order asc)`, education);
export const getTestimonials = () => safeFetch<Testimonial[]>(`*[_type=="testimonial"] | order(order asc)`, testimonials);
export const getInsights     = () => safeFetch<InsightPost[]>(`*[_type=="insightPost"] | order(order asc)`, insights);
export const getProjects     = () => safeFetch<Project[]>(`*[_type=="project"] | order(order asc)`, projects);
export const getCareerHighlights = () => safeFetch<CareerHighlight[]>(`*[_type=="careerHighlight"] | order(order asc)`, careerHighlights);
