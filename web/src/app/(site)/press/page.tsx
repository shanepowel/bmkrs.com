import type { Metadata } from "next";
import Link from "next/link";
import { CopyTextButton } from "@/components/bmkrs/CopyTextButton";
import {
  H1,
  H2,
  Kicker,
  Section,
  mono as monoStyle,
  themeBodyStyle,
  themeFaintStyle,
} from "@/components/bmkrs/surfaces";
import { getPressKit, getSiteSettings } from "@/lib/content";
import { SURFACE } from "@/lib/surfaces";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "press kit",
  "logos, colours, type and boilerplate for writing about bmkrs. download brand assets and usage rules.",
  "/press",
);

function isImageAsset(url: string, format: string) {
  const f = format.toLowerCase();
  return f === "svg" || f === "png" || f === "jpg" || f === "webp";
}

export default async function PressPage() {
  const [kit, settings] = await Promise.all([getPressKit(), getSiteSettings()]);
  const pressEmail = settings.pressEmail ?? "press@bmkrs.com";
  const paper = SURFACE.paper;
  const ink = SURFACE.ink;

  const updatedLabel = kit.updatedAt
    ? new Date(kit.updatedAt).toLocaleDateString("en-GB", { month: "long", year: "numeric" }).toLowerCase()
    : "";

  return (
    <main>
      <Section theme="ink">
        <Kicker theme="ink">press kit</Kicker>
        <H1 theme="ink">{kit.headline}</H1>
        <p className="lead mt-6 max-w-[65ch]" style={themeBodyStyle("ink")}>
          {kit.intro}
        </p>
      </Section>

      <Section theme="paper">
        <H2 theme="paper">boilerplate</H2>
        <div className="mt-8 space-y-10">
          <div style={{ borderTop: `1px solid ${paper.rule}` }} className="pt-6">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-medium">short</h3>
              <CopyTextButton text={kit.shortBoilerplate} className="press-copy-btn mono text-meta" />
            </div>
            <p className="max-w-[65ch] leading-relaxed" style={themeBodyStyle("paper")}>
              {kit.shortBoilerplate}
            </p>
          </div>
          <div style={{ borderTop: `1px solid ${paper.rule}` }} className="pt-6">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-medium">long</h3>
              <CopyTextButton text={kit.longBoilerplate} className="press-copy-btn mono text-meta" />
            </div>
            <p className="max-w-[65ch] leading-relaxed" style={themeBodyStyle("paper")}>
              {kit.longBoilerplate}
            </p>
          </div>
          <div style={{ borderTop: `1px solid ${paper.rule}` }} className="pt-6">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-medium">founder</h3>
              <CopyTextButton text={kit.founderBio} className="press-copy-btn mono text-meta" />
            </div>
            <p className="max-w-[65ch] leading-relaxed" style={themeBodyStyle("paper")}>
              {kit.founderBio}
            </p>
          </div>
        </div>
      </Section>

      <Section theme="ink">
        <H2 theme="ink">facts</H2>
        <dl className="mt-8 grid gap-6 sm:grid-cols-2">
          {[
            { label: "legal name", value: kit.legalName },
            { label: "founded", value: kit.founded },
            { label: "location", value: kit.location },
            { label: "website", value: "www.bmkrs.com" },
          ].map((row) => (
            <div key={row.label} style={{ borderTop: `1px solid ${ink.rule}` }} className="pt-5">
              <dt className="text-meta" style={{ ...monoStyle, ...themeFaintStyle("ink") }}>
                {row.label}
              </dt>
              <dd className="mt-2 text-lg">{row.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section theme="paper">
        <H2 theme="paper">logo downloads</H2>
        <p className="mt-4 max-w-[65ch] leading-relaxed" style={themeBodyStyle("paper")}>
          eight svg variations plus png avatars. the orange dot is permanent; see usage rules below.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {kit.logoAssets.map((asset) => (
            <li
              key={asset.fileUrl}
              style={{ borderTop: `1px solid ${paper.rule}` }}
              className="flex flex-col pt-5"
            >
              {isImageAsset(asset.fileUrl, asset.format) ? (
                <div
                  className="mb-4 flex h-24 items-center justify-start rounded-lg px-4"
                  style={{
                    background: asset.name.includes("light") || asset.format === "md" ? paper.bg : ink.bg,
                    border: `1px solid ${paper.rule}`,
                  }}
                >
                  {asset.format !== "md" ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={asset.fileUrl}
                      alt=""
                      className="max-h-14 w-auto max-w-full object-contain"
                    />
                  ) : (
                    <span className="mono text-meta" style={themeFaintStyle("paper")}>
                      markdown
                    </span>
                  )}
                </div>
              ) : null}
              <h3 className="font-medium">{asset.name}</h3>
              <p className="mono mt-1 text-meta uppercase" style={themeFaintStyle("paper")}>
                {asset.format}
              </p>
              <p className="mt-2 flex-1 text-sm leading-relaxed" style={themeBodyStyle("paper")}>
                {asset.usage}
              </p>
              <a
                href={asset.fileUrl}
                download
                className="mono mt-4 inline-flex text-meta underline decoration-1 underline-offset-4"
                style={{ color: paper.accent }}
              >
                download →
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section theme="paper">
        <H2 theme="paper">colours</H2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {kit.colors.map((color) => (
            <li
              key={color.hex}
              style={{ borderTop: `1px solid ${paper.rule}` }}
              className="flex gap-4 pt-5"
            >
              <span
                className="mt-1 h-12 w-12 shrink-0 rounded-full border"
                style={{ background: color.hex, borderColor: paper.rule }}
                aria-hidden="true"
              />
              <div>
                <h3 className="font-medium">{color.name}</h3>
                <p className="mono mt-1 text-meta" style={themeFaintStyle("paper")}>
                  {color.hex}
                </p>
                <p className="mt-2 text-sm leading-relaxed" style={themeBodyStyle("paper")}>
                  {color.role}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section theme="ink">
        <H2 theme="ink">type</H2>
        <ul className="mt-8 space-y-6">
          {kit.typefaces.map((face) => (
            <li key={face.name} style={{ borderTop: `1px solid ${ink.rule}` }} className="pt-5">
              <h3 className="text-lg font-medium">{face.name}</h3>
              <p className="mono mt-2 text-meta" style={themeFaintStyle("ink")}>
                {face.role}
                {face.weights ? ` · ${face.weights}` : ""}
              </p>
              <p className="mt-2 max-w-[55ch] leading-relaxed" style={themeBodyStyle("ink")}>
                {face.source}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section theme="paper">
        <H2 theme="paper">usage rules</H2>
        <ol className="mt-8 max-w-[65ch] list-decimal space-y-4 pl-5 leading-relaxed" style={themeBodyStyle("paper")}>
          {kit.usageRules.map((rule) => (
            <li key={rule.slice(0, 40)}>{rule}</li>
          ))}
        </ol>
        {updatedLabel ? (
          <p className="mono mt-10 text-meta" style={themeFaintStyle("paper")}>
            brand kit updated {updatedLabel}
          </p>
        ) : null}
      </Section>

      <Section theme="ink">
        <p className="text-lg" style={themeBodyStyle("ink")}>
          need something else?{" "}
          <Link
            href={`mailto:${pressEmail}`}
            className="underline decoration-1 underline-offset-4"
            style={{ color: ink.text }}
          >
            {pressEmail}
          </Link>
        </p>
      </Section>
    </main>
  );
}
