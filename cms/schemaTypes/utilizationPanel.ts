import { defineField, defineType } from "sanity";

export const utilizationPanelSchema = defineType({
  name: "utilizationPanel",
  title: "Utilization Panel",
  type: "document",
  fields: [
    defineField({ name: "averageValue", title: "Average % Value", type: "number" }),
    defineField({ name: "clientLabel",  title: "Client Delivery Label", type: "string" }),
    defineField({ name: "buildLabel",   title: "Internal Build Label",  type: "string" }),
    defineField({ name: "footnote",     title: "Footnote",  type: "string" }),
    defineField({
      name: "rows",
      title: "Team Rows",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "label",  title: "Team Label",   type: "string" },
          { name: "before", title: "Before % (0-100)", type: "number" },
          { name: "after",  title: "After % (0-100)",  type: "number" },
        ],
      }],
    }),
  ],
  __experimental_actions: ["update", "publish"],
});
