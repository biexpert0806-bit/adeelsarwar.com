import { Suspense } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CareerHighlights from "@/components/CareerHighlights";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  getProfile, getHero, getAbout, getUtilizationPanel,
  getCaseStudies, getServices, getSkillGroups, getExperience,
  getEducation, getTestimonials, getInsights, getProjects, getCareerHighlights,
} from "@/lib/sanity/queries";

export const revalidate = 60;

export default async function Home() {
  const [
    profile, hero, about, panel,
    caseStudies, services, skillGroups, experience,
    education, testimonials, insights, projects, careerHighlights,
  ] = await Promise.all([
    getProfile(), getHero(), getAbout(), getUtilizationPanel(),
    getCaseStudies(), getServices(), getSkillGroups(), getExperience(),
    getEducation(), getTestimonials(), getInsights(), getProjects(), getCareerHighlights(),
  ]);

  return (
    <>
      <Nav profile={profile} />
      <main>
        <Hero hero={hero} utilizationPanel={panel} />
        {careerHighlights.length > 0 && (
          <CareerHighlights highlights={careerHighlights} />
        )}
        <About about={about} />
        <CaseStudies caseStudies={caseStudies} />
        {projects.length > 0 && (
          <Projects projects={projects} />
        )}
        <Services services={services} />
        <Skills skillGroups={skillGroups} />
        <Timeline experience={experience} education={education} />
        <Testimonials testimonials={testimonials} />
        <Insights insights={insights} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
