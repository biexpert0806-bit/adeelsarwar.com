import { defineField, defineType } from "sanity";
export const educationSchema = defineType({
  name: "education", title: "Education", type: "document",
  fields: [
    defineField({ name: "order", title: "Order", type: "number" }),
    defineField({ name: "tag",   title: "Tag",   type: "string" }),
    defineField({ name: "text",  title: "Text",  type: "string" }),
  ],
});
