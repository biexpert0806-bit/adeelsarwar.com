import type { StructureResolver } from "sanity/structure";
import { singletonTypes } from "./schemaTypes";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.list()
            .title("Site Settings")
            .items([
              S.listItem().title("Profile").child(S.document().schemaType("profile").documentId("profile")),
              S.listItem().title("Hero Section").child(S.document().schemaType("heroSettings").documentId("heroSettings")),
              S.listItem().title("Utilization Panel").child(S.document().schemaType("utilizationPanel").documentId("utilizationPanel")),
              S.listItem().title("About Section").child(S.document().schemaType("about").documentId("about")),
            ])
        ),
      S.divider(),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("careerHighlight").title("Career Highlights"),
      S.divider(),
      S.documentTypeListItem("caseStudy").title("Case Studies"),
      S.documentTypeListItem("experienceRole").title("Experience Timeline"),
      S.documentTypeListItem("education").title("Education & Certifications"),
      S.divider(),
      S.documentTypeListItem("service").title("Services"),
      S.documentTypeListItem("skillGroup").title("Skill Groups"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
      S.documentTypeListItem("insightPost").title("Thought Leadership"),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !singletonTypes.has(item.getId()!) &&
          ![
            "project","careerHighlight","caseStudy","experienceRole","education",
            "service","skillGroup","testimonial","insightPost",
          ].includes(item.getId()!)
      ),
    ]);
