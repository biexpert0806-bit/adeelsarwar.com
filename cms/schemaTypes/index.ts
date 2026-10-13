import { profileSchema }         from "./profile";
import { heroSettingsSchema }     from "./heroSettings";
import { utilizationPanelSchema } from "./utilizationPanel";
import { aboutSchema }            from "./about";
import { caseStudySchema }        from "./caseStudy";
import { projectSchema }          from "./project";
import { careerHighlightSchema }  from "./careerHighlight";
import { serviceSchema }          from "./service";
import { skillGroupSchema }       from "./skillGroup";
import { experienceRoleSchema }   from "./experienceRole";
import { educationSchema }        from "./education";
import { testimonialSchema }      from "./testimonial";
import { insightPostSchema }      from "./insightPost";

export const schemaTypes = [
  profileSchema,
  heroSettingsSchema,
  utilizationPanelSchema,
  aboutSchema,
  caseStudySchema,
  projectSchema,
  careerHighlightSchema,
  serviceSchema,
  skillGroupSchema,
  experienceRoleSchema,
  educationSchema,
  testimonialSchema,
  insightPostSchema,
];

export const singletonTypes = new Set([
  "profile",
  "heroSettings",
  "utilizationPanel",
  "about",
]);
