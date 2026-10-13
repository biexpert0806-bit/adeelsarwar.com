import { defineField, defineType } from "sanity";

export const aboutSchema = defineType({
  name: "about",
  title: "About Section",
  type: "document",
  fields: [
    defineField({ name: "heading",    title: "Heading",    type: "string" }),
    defineField({ name: "paragraphs", title: "Paragraphs", type: "array", of: [{ type: "text" }] }),
    defineField({ name: "pillars",    title: "Pillars",    type: "array", of: [{ type: "string" }] }),
  ],
  __experimental_actions: ["update", "publish"],
});
