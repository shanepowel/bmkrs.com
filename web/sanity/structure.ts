import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.listItem()
        .title("About page")
        .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !["siteSettings", "aboutPage"].includes(item.getId() ?? ""),
      ),
    ]);
