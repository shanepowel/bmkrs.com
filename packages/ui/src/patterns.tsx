import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function Cluster({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx("bmkrs-cluster", className)}>{children}</div>;
}

export function SectionHeading({ title, eyebrow }: { title: ReactNode; eyebrow?: ReactNode }) {
  return (
    <div className="bmkrs-section-heading">
      <h2 className="bmkrs-section-heading__title">{title}</h2>
      {eyebrow ? <span className="bmkrs-section-heading__meta">{eyebrow}</span> : null}
    </div>
  );
}

export function Hero({
  eyebrow,
  title,
  lede,
  actions,
  plate,
  media,
  aside,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  lede: ReactNode;
  actions?: ReactNode;
  plate?: ReactNode;
  /** full-bleed background behind the copy */
  media?: ReactNode;
  /** framed panel beside the copy on wide screens, below it on narrow ones */
  aside?: ReactNode;
}) {
  const copy = (
    <>
      <span className="bmkrs-hero__eyebrow">{eyebrow}</span>
      <h1 className="bmkrs-hero__title">{title}</h1>
      <p className="bmkrs-hero__lede">{lede}</p>
      {actions ? <div className="bmkrs-hero__actions">{actions}</div> : null}
      {plate ? (
        <div className="bmkrs-hero__plate" aria-hidden>
          {plate}
        </div>
      ) : null}
    </>
  );

  return (
    <header
      className={clsx("bmkrs-hero", media && "bmkrs-hero--reel", aside && "bmkrs-hero--split")}
      data-bmkrs-hero=""
      data-surface="paper"
    >
      {media ? (
        <div className="bmkrs-hero__media" aria-hidden="true">
          {media}
          <div className="bmkrs-hero__scrim" />
        </div>
      ) : null}
      <div className="bmkrs-wrap bmkrs-hero__content">
        {aside ? (
          <>
            <div className="bmkrs-hero__copy">{copy}</div>
            <div className="bmkrs-hero__aside">{aside}</div>
          </>
        ) : (
          copy
        )}
      </div>
    </header>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const track = [...items, ...items];

  return (
    <div className="bmkrs-marquee" aria-hidden>
      <div className="bmkrs-marquee__track">
        {track.map((item, index) => (
          <span key={`${item}-${index}`} className="bmkrs-marquee__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CellGrid({ children }: { children: ReactNode }) {
  return <div className="bmkrs-cells">{children}</div>;
}

export function QuoteCell({ index, title, body }: { index: string; title: string; body: string }) {
  return (
    <article className="bmkrs-cells__item">
      <span className="bmkrs-cells__index">{index}</span>
      <h3 className="bmkrs-cells__title">{title}</h3>
      <p className="bmkrs-cells__body">{body}</p>
    </article>
  );
}

/** Belief / fact cell — same ruled grid as QuoteCell, without decorative quotes. */
export function FactCell({ index, title, body }: { index: string; title: string; body: string }) {
  return (
    <article className="bmkrs-cells__item bmkrs-cells__item--plain">
      <span className="bmkrs-cells__index">{index}</span>
      <h3 className="bmkrs-cells__title">{title}</h3>
      <p className="bmkrs-cells__body">{body}</p>
    </article>
  );
}

/** Orange highlight for a word inside a headline. */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="bmkrs-accent">{children}</span>;
}

/** Compact left-edge pull quote for founder / story moments. */
export function EdgeQuote({ children }: { children: ReactNode }) {
  return <blockquote className="bmkrs-edge-quote">{children}</blockquote>;
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className="bmkrs-lead">{children}</p>;
}

export function LinkIndex({ children }: { children: ReactNode }) {
  return <div className="bmkrs-index">{children}</div>;
}

export function LinkRow({
  href,
  name,
  description,
}: {
  href: string;
  name: string;
  description: string;
}) {
  return (
    <Link href={href} className="bmkrs-index__row">
      <span className="bmkrs-index__name">{name}</span>
      <span className="bmkrs-index__desc">{description}</span>
      <span className="bmkrs-index__arrow" aria-hidden>
        →
      </span>
    </Link>
  );
}

export function SplitQuote({ quote, children }: { quote: ReactNode; children: ReactNode }) {
  return (
    <div className="bmkrs-split">
      <blockquote className="bmkrs-split__quote">{quote}</blockquote>
      <div className="bmkrs-split__body">{children}</div>
    </div>
  );
}

export function TierGrid({ children }: { children: ReactNode }) {
  return <div className="bmkrs-tiers">{children}</div>;
}

export function TierCard({
  eyebrow,
  title,
  blurb,
  featured = false,
  price,
  shape,
  links,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
  featured?: boolean;
  /** headline price line, e.g. "from £9,500" */
  price?: string;
  /** how the work is shaped, e.g. "one week, fixed scope." */
  shape?: string;
  links?: { href: string; label: string }[];
}) {
  return (
    <div className={clsx("bmkrs-tiers__card", featured && "bmkrs-tiers__card--featured")}>
      <span className="bmkrs-tiers__eyebrow">{eyebrow}</span>
      <h3 className="bmkrs-tiers__title">{title}</h3>
      <p className="bmkrs-tiers__sub">{blurb}</p>
      {price || shape ? (
        <div className="bmkrs-tiers__terms">
          {price ? <span className="bmkrs-tiers__price">{price}</span> : null}
          {shape ? <span className="bmkrs-tiers__shape">{shape}</span> : null}
        </div>
      ) : null}
      {links?.length ? (
        <ul className="bmkrs-tiers__links">
          {links.map((link) => (
            <li key={link.href + link.label}>
              <Link href={link.href} className="bmkrs-tiers__link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function StatGrid({ children }: { children: ReactNode }) {
  return <div className="bmkrs-stats">{children}</div>;
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bmkrs-stats__cell">
      <b className="bmkrs-stats__value">{value}</b>
      <span className="bmkrs-stats__label">{label}</span>
    </div>
  );
}

export function WorkGrid({ children }: { children: ReactNode }) {
  return <div className="bmkrs-work">{children}</div>;
}

export function WorkTile({
  href,
  tag,
  name,
  detail,
  image,
  index,
  wide = false,
}: {
  href: string;
  tag: string;
  name: string;
  detail?: string;
  image?: { src: string; alt?: string };
  /** optional plate label shown on the mat, e.g. "fig. 01" */
  index?: string;
  wide?: boolean;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "bmkrs-work__card",
        image && "bmkrs-work__card--media",
        wide && "bmkrs-work__card--wide",
      )}
    >
      {image ? (
        <span className="bmkrs-work__media">
          <Image
            src={image.src}
            alt={image.alt ?? ""}
            fill
            sizes={wide ? "(max-width: 800px) 100vw, 60vw" : "(max-width: 720px) 100vw, 40vw"}
            className="bmkrs-work__img"
          />
          {index ? (
            <span className="bmkrs-work__index" aria-hidden>
              {index}
            </span>
          ) : null}
        </span>
      ) : null}
      <span className="bmkrs-work__copy">
        <span className="bmkrs-work__tag">{tag}</span>
        <span className="bmkrs-work__name">{name}</span>
        {detail ? <span className="bmkrs-work__detail">{detail}</span> : null}
      </span>
    </Link>
  );
}

export type Plate = { src: string; alt: string; caption?: string };

/**
 * A band of framed image plates. One plate runs wide; two or three set
 * one large plate beside a stacked pair, so imagery never reads as a grid of boxes.
 */
export function PlateRow({ plates, label }: { plates: Plate[]; label?: string }) {
  const items = plates.slice(0, 3);
  if (!items.length) return null;

  return (
    <div className={clsx("bmkrs-plates", `bmkrs-plates--${items.length}`)} aria-label={label}>
      {items.map((plate, index) => (
        <figure key={plate.src} className="bmkrs-plates__item">
          <span className="bmkrs-plates__frame">
            <Image
              src={plate.src}
              alt={plate.alt}
              fill
              sizes={index === 0 ? "(max-width: 800px) 100vw, 60vw" : "(max-width: 800px) 100vw, 40vw"}
              className="bmkrs-plates__img"
            />
          </span>
          {plate.caption ? <figcaption className="bmkrs-plates__caption">{plate.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}

export function PullQuote({
  quote,
  cite,
  compact = false,
}: {
  quote: string;
  cite?: string;
  /** tighter spacing for in-section quotes */
  compact?: boolean;
}) {
  return (
    <blockquote className={clsx("bmkrs-quote", compact && "bmkrs-quote--compact")}>
      {quote}
      {cite ? <cite>{cite}</cite> : null}
    </blockquote>
  );
}

export function StepLine({
  steps,
  body,
  note,
}: {
  steps: string[];
  body?: ReactNode;
  note?: ReactNode;
}) {
  return (
    <>
      <div className="bmkrs-steps">
        {steps.map((step, index) => (
          <span key={step} className="inline-flex items-baseline gap-[1em]">
            <b className="bmkrs-steps__word">{step}</b>
            {index < steps.length - 1 ? (
              <i className="bmkrs-steps__arrow" aria-hidden>
                →
              </i>
            ) : null}
          </span>
        ))}
      </div>
      {body ? <p className="bmkrs-steps__body">{body}</p> : null}
      {note ? <span className="bmkrs-steps__note">{note}</span> : null}
    </>
  );
}

export function Close({
  id,
  snap,
  title,
  action,
}: {
  id?: string;
  snap?: ReactNode;
  title: ReactNode;
  action: ReactNode;
}) {
  return (
    <section id={id} className="bmkrs-close" data-surface="paper">
      <div className="bmkrs-wrap">
        {snap ? <div className="bmkrs-close__snap">{snap}</div> : null}
        <h2>{title}</h2>
        {action}
      </div>
    </section>
  );
}

/** Two-column story band: copy + media plate. */
export function StorySplit({
  eyebrow,
  title,
  body,
  media,
  reverse = false,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  body: ReactNode;
  media: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className={clsx("bmkrs-story", reverse && "bmkrs-story--reverse")}>
      <div className="bmkrs-story__copy">
        {eyebrow ? <span className="bmkrs-story__eyebrow">{eyebrow}</span> : null}
        <h2 className="bmkrs-story__title">{title}</h2>
        <div className="bmkrs-story__body">{body}</div>
      </div>
      <div className="bmkrs-story__media">{media}</div>
    </div>
  );
}

export type TeamMember = {
  name: string;
  role: string;
  portrait?: ReactNode;
};

/** Equal portrait row for the studio team. */
export function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <ul className="bmkrs-team" role="list">
      {members.map((member) => (
        <li key={member.name} className="bmkrs-team__item">
          <div className="bmkrs-team__portrait">{member.portrait}</div>
          <span className="bmkrs-team__name">{member.name}</span>
          <span className="bmkrs-team__role">{member.role}</span>
        </li>
      ))}
    </ul>
  );
}

export type RuledListItem = {
  href?: string;
  date?: string;
  title: string;
  category?: string;
};

/** Hairline journal / index list. */
export function RuledList({ items }: { items: RuledListItem[] }) {
  return (
    <ul className="bmkrs-ruled-list" role="list">
      {items.map((item) => {
        const inner = (
          <>
            {item.date ? <span className="bmkrs-ruled-list__date">{item.date}</span> : null}
            <span className="bmkrs-ruled-list__title">{item.title}</span>
            {item.category ? (
              <span className="bmkrs-ruled-list__category">{item.category}</span>
            ) : null}
          </>
        );
        return (
          <li key={`${item.title}-${item.date ?? ""}`} className="bmkrs-ruled-list__row">
            {item.href ? (
              <Link href={item.href} className="bmkrs-ruled-list__link">
                {inner}
              </Link>
            ) : (
              <div className="bmkrs-ruled-list__link">{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/** Underline category filter for journal hubs. */
export function CategoryTabs({
  items,
  active,
}: {
  items: { id: string; label: string; href: string }[];
  active?: string;
}) {
  return (
    <nav className="bmkrs-cats" aria-label="categories">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={clsx("bmkrs-cats__item", active === item.id && "bmkrs-cats__item--active")}
          aria-current={active === item.id ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  children,
}: {
  eyebrow?: ReactNode;
  title?: ReactNode;
  lede?: ReactNode;
  image?: { src: string; alt: string };
  children?: ReactNode;
}) {
  return (
    <header className="bmkrs-page-hero" data-surface="paper">
      <div className="bmkrs-wrap bmkrs-page-hero__grid">
        <div className="bmkrs-page-hero__copy">
          {eyebrow ? <span className="bmkrs-page-hero__eyebrow">{eyebrow}</span> : null}
          {title ? <h1 className="bmkrs-page-hero__title">{title}</h1> : null}
          {lede ? <p className="bmkrs-page-hero__lede">{lede}</p> : null}
          {children}
        </div>
        {image ? (
          <div className="bmkrs-page-hero__media">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(max-width: 960px) 100vw, 40vw"
              className="bmkrs-page-hero__img"
            />
          </div>
        ) : null}
      </div>
    </header>
  );
}

export function Chip({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="bmkrs-chip">
      {children}
    </Link>
  );
}

export function BackLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="bmkrs-back">
      {children}
    </Link>
  );
}

export function RuledGrid({ children }: { children: ReactNode }) {
  return <div className="bmkrs-ruled">{children}</div>;
}

export function RuledCell({
  kicker,
  title,
  body,
}: {
  kicker?: string;
  title: string;
  body?: string;
}) {
  return (
    <article className="bmkrs-ruled__cell">
      {kicker ? <span className="bmkrs-ruled__kicker">{kicker}</span> : null}
      <h3 className="bmkrs-ruled__title">{title}</h3>
      {body ? <p className="bmkrs-ruled__body">{body}</p> : null}
    </article>
  );
}

export function SpecList({ items }: { items: { label: string; value: ReactNode }[] }) {
  return (
    <dl className="bmkrs-spec">
      {items.map((item) => (
        <div key={item.label} className="bmkrs-spec__row">
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function PackageEntry({
  id,
  name,
  tagline,
  specs,
  price,
  note,
}: {
  id?: string;
  name: string;
  tagline: string;
  specs?: { label: string; value: ReactNode }[];
  price?: string;
  note?: string;
}) {
  return (
    <article id={id} className="bmkrs-package">
      <h3 className="bmkrs-package__title">{name}</h3>
      <p className="bmkrs-package__tagline">{tagline}</p>
      {specs?.length ? <SpecList items={specs} /> : null}
      {price ? <p className="bmkrs-package__price">{price}</p> : null}
      {note ? <p className="bmkrs-package__note">{note}</p> : null}
    </article>
  );
}

export function Footer({
  capture,
  columns,
  meta,
  legal,
}: {
  capture?: ReactNode;
  columns: { label: string; links: readonly { href: string; label: string }[] }[];
  meta?: ReactNode;
  legal?: ReactNode;
}) {
  return (
    <footer className="bmkrs-footer" data-surface="ink">
      <div className="bmkrs-wrap bmkrs-footer__inner">
        <div className="bmkrs-footer__grid">
          {capture ? <div className="bmkrs-footer__capture">{capture}</div> : null}
          {columns.map((column) => (
            <nav key={column.label} className="bmkrs-footer__nav" aria-label={column.label}>
              <span className="bmkrs-footer__label">{column.label}</span>
              <ul role="list">
                {column.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        {meta ? <div className="bmkrs-footer__meta">{meta}</div> : null}
        {legal ? <div className="bmkrs-footer__legal">{legal}</div> : null}
      </div>
    </footer>
  );
}
