import { defineField, defineType } from "sanity";

export const profileSchema = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({ name: "name",        title: "Full Name",     type: "string" }),
    defineField({ name: "tagline",     title: "Tagline",       type: "string" }),
    defineField({ name: "location",    title: "Location",      type: "string" }),
    defineField({ name: "email",       title: "Email",         type: "string" }),
    defineField({ name: "phone",       title: "Phone",         type: "string" }),
    defineField({ name: "whatsapp",    title: "WhatsApp",      type: "string" }),
    defineField({ name: "linkedinUrl", title: "LinkedIn URL",  type: "url" }),
    defineField({ name: "credentials", title: "Credentials",   type: "array", of: [{ type: "string" }] }),
    defineField({ name: "roles",       title: "Roles",         type: "array", of: [{ type: "string" }] }),
  ],
  __experimental_actions: ["update", "publish"],
});
