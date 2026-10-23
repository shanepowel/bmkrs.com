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
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  lede: ReactNode;
  actions?: ReactNode;
  plate?: ReactNode;
  media?: ReactNode;
}) {
  return (
    <header
      className={clsx("bmkrs-hero", media && "bmkrs-hero--reel")}
      data-bmkrs-hero=""
      data-surface="ink"
    >
      {media ? (
        <div className="bmkrs-hero__media" aria-hidden="true">
          {media}
          <div className="bmkrs-hero__scrim" />
        </div>
      ) : null}
      <div className="bmkrs-wrap bmkrs-hero__content">
        <span className="bmkrs-hero__eyebrow">{eyebrow}</span>
        <h1 className="bmkrs-hero__title">{title}</h1>
        <p className="bmkrs-hero__lede">{lede}</p>
        {actions ? <div className="bmkrs-hero__actions">{actions}</div> : null}
        {plate ? (
          <div className="bmkrs-hero__plate" aria-hidden>
            {plate}
          </div>
        ) : null}
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
  links,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
  featured?: boolean;
  links?: { href: string; label: string }[];
}) {
  return (
    <div className={clsx("bmkrs-tiers__card", featured && "bmkrs-tiers__card--featured")}>
      <span className="bmkrs-tiers__eyebrow">{eyebrow}</span>
      <h3 className="bmkrs-tiers__title">{title}</h3>
      <p className="bmkrs-tiers__sub">{blurb}</p>
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
  wide = false,
}: {
  href: string;
  tag: string;
  name: string;
  detail?: string;
  image?: { src: string; alt?: string };
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

export function PullQuote({ quote, cite }: { quote: string; cite: string }) {
  return (
    <blockquote className="bmkrs-quote">
      {quote}
      <cite>{cite}</cite>
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
    <section id={id} className="bmkrs-close" data-surface="ink">
      <div className="bmkrs-wrap">
        {snap ? <div className="bmkrs-close__snap">{snap}</div> : null}
        <h2>{title}</h2>
        {action}
      </div>
    </section>
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
    <header className="bmkrs-page-hero" data-surface="ink">
      <div className="bmkrs-wrap bmkrs-page-hero__grid">
        <div>
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
              sizes="(max-width: 960px) 100vw, 520px"
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
