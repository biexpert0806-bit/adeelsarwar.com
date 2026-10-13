import { defineField, defineType } from "sanity";
export const insightPostSchema = defineType({
  name: "insightPost", title: "Insight Post", type: "document",
  fields: [
    defineField({ name: "order",    title: "Order",    type: "number" }),
    defineField({ name: "title",    title: "Title",    type: "string" }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "excerpt",  title: "Excerpt",  type: "text", rows: 3 }),
  ],
});
