import { defineField, defineType } from "sanity";
export const experienceRoleSchema = defineType({
  name: "experienceRole", title: "Experience Role", type: "document",
  fields: [
    defineField({ name: "order",   title: "Order",        type: "number" }),
    defineField({ name: "title",   title: "Job Title",    type: "string" }),
    defineField({ name: "org",     title: "Organisation", type: "string" }),
    defineField({ name: "when",    title: "Period",       type: "string" }),
    defineField({ name: "intro",   title: "Intro",        type: "text", rows: 2 }),
    defineField({ name: "bullets", title: "Bullet Points", type: "array", of: [{ type: "string" }] }),
  ],
});
