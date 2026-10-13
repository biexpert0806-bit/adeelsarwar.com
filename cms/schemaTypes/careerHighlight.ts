import { defineField, defineType } from "sanity";

export const careerHighlightSchema = defineType({
  name: "careerHighlight",
  title: "Career Highlight",
  type: "document",
  fields: [
    defineField({ name: "order",       title: "Order",       type: "number" }),
    defineField({ name: "metric",      title: "Metric",      type: "string", description: "e.g. 40%" }),
    defineField({ name: "title",       title: "Title",       type: "string", description: "e.g. Efficiency Gain" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
    defineField({ name: "when",        title: "Period / Context", type: "string" }),
  ],
});
