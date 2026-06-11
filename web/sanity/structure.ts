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
      S.listItem()
        .title("Press kit")
        .child(S.document().schemaType("pressKit").documentId("pressKit")),
      S.listItem()
        .title("Network page")
        .child(S.document().schemaType("networkPage").documentId("networkPage")),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          !["siteSettings", "aboutPage", "pressKit", "networkPage"].includes(item.getId() ?? ""),
      ),
    ]);
