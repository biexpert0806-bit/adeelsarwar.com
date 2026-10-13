import { defineField, defineType } from "sanity";

export const caseStudySchema = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({ name: "order",   title: "Order",   type: "number" }),
    defineField({ name: "id",      title: "Slug ID", type: "slug", options: { source: "client" } }),
    defineField({ name: "tag",     title: "Tag",     type: "string" }),
    defineField({ name: "client",  title: "Client",  type: "string" }),
    defineField({ name: "role",    title: "Role",    type: "string" }),
    defineField({ name: "window",  title: "Time Window", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
    defineField({
      name: "metrics",
      title: "Metrics (max 4)",
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
    defineField({ name: "points", title: "Bullet Points", type: "array", of: [{ type: "string" }] }),
  ],
});
