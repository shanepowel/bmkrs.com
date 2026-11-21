import type { StructureResolver } from 'sanity/structure';

// Pages first (grouped by site section), then insights.
const groups: { title: string; prefix: string }[] = [
  { title: 'What we do', prefix: '/services' },
  { title: 'AI', prefix: '/ai' },
  { title: 'Who we work with', prefix: '/for' },
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title('bmkrs content')
    .items([
      ...groups.map((g) =>
        S.listItem()
          .title(g.title)
          .child(
            S.documentList()
              .title(g.title)
              .schemaType('bmkPage')
              .filter('_type == "bmkPage" && path match $p')
              .params({ p: `${g.prefix}*` }),
          ),
      ),
      S.listItem()
        .title('Company and work')
        .child(
          S.documentList()
            .title('Company and work')
            .schemaType('bmkPage')
            .filter('_type == "bmkPage" && !(path match "/services*") && !(path match "/ai*") && !(path match "/for*")'),
        ),
      S.divider(),
      S.documentTypeListItem('bmkPage').title('All pages'),
      S.documentTypeListItem('insight').title('Insights'),
    ]);
