import { defineField, defineType } from "sanity";
export const skillGroupSchema = defineType({
  name: "skillGroup", title: "Skill Group", type: "document",
  fields: [
    defineField({ name: "order",    title: "Order",    type: "number" }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "items",    title: "Skills",   type: "array", of: [{ type: "string" }] }),
  ],
});
