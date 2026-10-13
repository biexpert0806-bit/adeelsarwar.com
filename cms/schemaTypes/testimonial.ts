import { defineField, defineType } from "sanity";
export const testimonialSchema = defineType({
  name: "testimonial", title: "Testimonial", type: "document",
  fields: [
    defineField({ name: "order", title: "Order", type: "number" }),
    defineField({ name: "quote", title: "Quote", type: "text", rows: 3 }),
    defineField({ name: "name",  title: "Name",  type: "string" }),
    defineField({ name: "title", title: "Title / Role", type: "string" }),
  ],
});
