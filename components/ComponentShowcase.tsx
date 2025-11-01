"use client";

import { useMemo } from "react";

const buttonVariants = [
  {
    label: "Primary",
    styles:
      "bg-bauhaus-primary text-white hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(0,0,0,0.8)]"
  },
  {
    label: "Secondary",
    styles:
      "bg-bauhaus-secondary text-black hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(0,0,0,0.8)]"
  },
  {
    label: "Tertiary",
    styles:
      "bg-bauhaus-tertiary text-white hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(0,0,0,0.8)]"
  },
  {
    label: "Ghost",
    styles:
      "bg-white text-black hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(0,0,0,0.8)]"
  }
];

const cards = [
  {
    title: "Poster",
    body: "Bold geometry, overlapping layers, and striking diagonals promote hierarchy.",
    accent: "bg-bauhaus-primary"
  },
  {
    title: "Grid",
    body: "Use modular spacing (8px units) and asymmetric layouts for dynamic rhythm.",
    accent: "bg-bauhaus-secondary"
  },
  {
    title: "Contrast",
    body: "Balance primary colors with deep navy and generous negative space.",
    accent: "bg-bauhaus-tertiary"
  }
];

export function ComponentShowcase() {
  const componentGrid = useMemo(
    () => [
      {
        title: "Buttons",
        content: (
          <div className="flex flex-wrap gap-4">
            {buttonVariants.map((btn) => (
              <button
                key={btn.label}
                className={`heading rounded-full border-4 border-black px-6 py-3 text-sm uppercase tracking-[0.4em] transition-transform duration-200 ${btn.styles}`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        )
      },
      {
        title: "Card System",
        content: (
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.title}
                className="relative flex flex-col gap-4 rounded-2xl border-4 border-black bg-white p-6 pb-8 shadow-[12px_12px_0px_rgba(0,0,0,0.85)] transition-transform duration-300 hover:-translate-y-2"
              >
                <div className={`absolute -right-4 -top-6 h-16 w-16 border-4 border-black ${card.accent}`} />
                <div className="heading text-2xl">{card.title}</div>
                <p className="text-sm text-black/70">{card.body}</p>
                <div className="mt-auto h-1 w-16 bg-black" />
              </article>
            ))}
          </div>
        )
      },
      {
        title: "Forms",
        content: (
          <form className="grid gap-5 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="heading text-xs uppercase tracking-[0.3em] text-black/70">
                Name
              </span>
              <input
                className="rounded-xl border-4 border-black bg-white px-4 py-3 text-sm uppercase tracking-[0.4em] text-black focus:outline-none focus:ring-4 focus:ring-bauhaus-secondary"
                placeholder="Walter Gropius"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="heading text-xs uppercase tracking-[0.3em] text-black/70">
                Discipline
              </span>
              <select className="rounded-xl border-4 border-black bg-white px-4 py-3 text-sm uppercase tracking-[0.4em] text-black focus:outline-none focus:ring-4 focus:ring-bauhaus-primary">
                <option>Architecture</option>
                <option>Graphic Design</option>
                <option>Industrial Design</option>
              </select>
            </label>
            <label className="md:col-span-2">
              <span className="heading text-xs uppercase tracking-[0.3em] text-black/70">
                Manifesto
              </span>
              <textarea
                rows={3}
                className="mt-2 w-full rounded-xl border-4 border-black bg-white px-4 py-3 text-sm uppercase tracking-[0.25em] text-black focus:outline-none focus:ring-4 focus:ring-bauhaus-tertiary"
                placeholder="The new unity of art and craft..."
              />
            </label>
            <button className="heading w-fit rounded-full border-4 border-black bg-bauhaus-secondary px-8 py-3 text-xs uppercase tracking-[0.5em] shadow-[8px_8px_0px_rgba(0,0,0,0.85)] transition-transform duration-200 hover:-translate-y-1 hover:bg-black hover:text-white">
              Submit
            </button>
          </form>
        )
      }
    ],
    []
  );

  return (
    <div className="grid gap-12">
      {componentGrid.map((block) => (
        <div key={block.title} className="space-y-6">
          <h3 className="heading text-3xl uppercase tracking-[0.4em]">{block.title}</h3>
          {block.content}
        </div>
      ))}
    </div>
  );
}
