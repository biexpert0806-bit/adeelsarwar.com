import { defineField, defineType } from "sanity";
export const serviceSchema = defineType({
  name: "service", title: "Service", type: "document",
  fields: [
    defineField({ name: "order",       title: "Order",       type: "number" }),
    defineField({ name: "title",       title: "Title",       type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
  ],
});
