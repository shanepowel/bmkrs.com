import clsx from "clsx";
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
  links: { href: string; label: string }[];
}) {
  return (
    <div className={clsx("bmkrs-tiers__card", featured && "bmkrs-tiers__card--featured")}>
      <span className="bmkrs-tiers__eyebrow">{eyebrow}</span>
      <h3 className="bmkrs-tiers__title">{title}</h3>
      <p className="bmkrs-tiers__sub">{blurb}</p>
      <ul className="bmkrs-tiers__links">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link href={link.href} className="bmkrs-tiers__link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
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

export function WorkTile({ href, tag, name }: { href: string; tag: string; name: string }) {
  return (
    <Link href={href} className="bmkrs-work__card">
      <span className="bmkrs-work__tag">{tag}</span>
      <span className="bmkrs-work__name">{name}</span>
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
