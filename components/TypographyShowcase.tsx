"use client";

const fontSamples = [
  {
    label: "Display",
    className: "text-5xl md:text-6xl",
    fontFamily: "var(--font-heading)",
    sample: "Geometric Futures",
    usage: "Hero headlines, large callouts"
  },
  {
    label: "Headline",
    className: "text-3xl md:text-4xl",
    fontFamily: "var(--font-heading)",
    sample: "Form follows function",
    usage: "Section headings"
  },
  {
    label: "Title",
    className: "text-2xl",
    fontFamily: "var(--font-body)",
    sample: "Bauhaus design system",
    usage: "Cards, component titles"
  },
  {
    label: "Body",
    className: "text-base leading-relaxed",
    fontFamily: "var(--font-body)",
    sample: "Simplicity, geometry, primary color hierarchy.",
    usage: "Body copy, descriptions"
  },
  {
    label: "Caption",
    className: "text-xs uppercase tracking-[0.3em]",
    fontFamily: "var(--font-heading)",
    sample: "Functional labeling",
    usage: "Badges, labels"
  }
];

export function TypographyShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {fontSamples.map(({ label, className, fontFamily, sample, usage }) => (
        <div
          key={label}
          className="grid-highlight flex h-full flex-col gap-4 rounded-2xl border-4 border-black bg-white p-6 transition-transform duration-300 hover:-translate-y-2"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-black/70">{label}</span>
          <span className={`${className}`} style={{ fontFamily }}>
            {sample}
          </span>
          <p className="text-sm text-black/60">{usage}</p>
        </div>
      ))}
    </div>
  );
}
