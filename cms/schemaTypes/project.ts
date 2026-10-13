import { defineField, defineType } from "sanity";

export const projectSchema = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "order",     title: "Order",     type: "number" }),
    defineField({ name: "title",     title: "Title",     type: "string" }),
    defineField({ name: "client",    title: "Client",    type: "string" }),
    defineField({ name: "category",  title: "Category",  type: "string" }),
    defineField({ name: "role",      title: "Your Role", type: "string" }),
    defineField({ name: "timeframe", title: "Timeframe", type: "string" }),
    defineField({ name: "summary",   title: "Summary",   type: "text", rows: 3 }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "metrics",
      title: "Key Metrics (max 4)",
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
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: { hotspot: true },
      description: "Upload a screenshot or photo representing this project",
    }),
    defineField({ name: "link",     title: "External Link (optional)", type: "url" }),
    defineField({ name: "featured", title: "Featured?",  type: "boolean" }),
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
    { title: "Title", name: "titleAsc", by: [{ field: "title", direction: "asc" }] },
  ],
});
