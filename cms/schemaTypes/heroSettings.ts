import { defineField, defineType } from "sanity";

export const heroSettingsSchema = defineType({
  name: "heroSettings",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({ name: "eyebrow",  title: "Eyebrow Text",  type: "string" }),
    defineField({ name: "headline", title: "Headline",      type: "string" }),
    defineField({ name: "sub",      title: "Sub-headline",  type: "text", rows: 3 }),
    defineField({
      name: "heroImage",
      title: "Hero Photo",
      type: "image",
      options: { hotspot: true },
      description: "Your professional photo displayed in the hero section",
    }),
    defineField({
      name: "stats",
      title: "Stats (max 4)",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "value", title: "Value", type: "string" },
          { name: "label", title: "Label", type: "string" },
        ],
      }],
      validation: (R) => R.max(4),
    }),
  ],
  __experimental_actions: ["update", "publish"],
});
