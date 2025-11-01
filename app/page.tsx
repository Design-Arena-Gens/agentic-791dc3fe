"use client";

import Link from "next/link";
import { BauhausShapes } from "@/components/BauhausShapes";
import { ColorSwatch } from "@/components/ColorSwatch";
import { ComponentShowcase } from "@/components/ComponentShowcase";
import { Section } from "@/components/Section";
import { TypographyShowcase } from "@/components/TypographyShowcase";

const palette = [
  { label: "Crimson Pulse", hex: "#E63946", role: "Primary Calls to Action" },
  { label: "Sunbeam", hex: "#FFD60A", role: "Highlights & Accents" },
  { label: "Aegean", hex: "#457B9D", role: "Structural Elements" },
  { label: "Nightfall", hex: "#1D3557", role: "Typography & Depth" },
  { label: "Canvas", hex: "#F1FAEE", role: "Background & Negative Space" },
  { label: "Pure Black", hex: "#000000", role: "Lines & Framework" }
];

const principles = [
  {
    title: "Geometry First",
    details: "Ground each composition in circles, triangles, and squares with strong alignment."
  },
  {
    title: "Primary Hierarchy",
    details: "Use saturated primaries for emphasis and neutrals for breathing space."
  },
  {
    title: "Functional Contrast",
    details: "Pair bold shapes with precise typography to guide focus."
  }
];

export default function HomePage() {
  return (
    <main>
      <header className="bauhaus-panel relative mb-16 overflow-visible rounded-3xl border-4 border-black bg-white p-12 shadow-[20px_20px_0px_rgba(0,0,0,0.9)]">
        <div className="absolute -left-16 top-10 hidden h-32 w-32 -rotate-6 border-4 border-black bg-bauhaus-primary md:block" />
        <div className="absolute -right-12 bottom-10 hidden h-40 w-40 rotate-6 border-4 border-black bg-bauhaus-secondary md:block" />
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="badge bg-bauhaus-secondary">Bauhaus Design System</span>
            <h1 className="heading text-6xl uppercase tracking-[0.3em] md:text-7xl">
              Form Follows Function
            </h1>
            <p className="max-w-xl text-lg text-black/70">
              A modular design system inspired by the Bauhaus movement. Explore typography,
              color, components, and layout guidance to craft geometric, purposeful interfaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#components"
                className="heading rounded-full border-4 border-black bg-bauhaus-primary px-6 py-3 text-xs uppercase tracking-[0.4em] text-white shadow-[10px_10px_0px_rgba(0,0,0,0.85)] transition-transform duration-200 hover:-translate-y-1 hover:bg-black"
              >
                Component Library
              </Link>
              <Link
                href="#color"
                className="heading rounded-full border-4 border-black bg-white px-6 py-3 text-xs uppercase tracking-[0.4em] shadow-[10px_10px_0px_rgba(0,0,0,0.85)] transition-transform duration-200 hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                Color Palette
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="grid-highlight flex h-full flex-col justify-between gap-3 rounded-2xl border-4 border-black bg-white p-5 text-sm uppercase tracking-[0.24em]"
              >
                <span className="heading text-lg">{principle.title}</span>
                <span className="text-xs normal-case tracking-normal text-black/70">
                  {principle.details}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <nav className="mb-16 flex flex-wrap gap-4">
        {[
          { href: "#foundations", label: "Foundations" },
          { href: "#color", label: "Color" },
          { href: "#type", label: "Typography" },
          { href: "#geometry", label: "Geometry" },
          { href: "#components", label: "Components" },
          { href: "#layout", label: "Layout System" }
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="heading rounded-full border-4 border-black bg-white px-5 py-2 text-xs uppercase tracking-[0.4em] transition-transform duration-200 hover:-translate-y-1 hover:bg-bauhaus-secondary"
          >
            {label}
          </Link>
        ))}
      </nav>

      <Section
        id="foundations"
        title="Foundations"
        accent="tertiary"
        description="Core principles to guide Bauhaus-inspired digital interfaces."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-2xl border-4 border-black bg-white p-6 text-black shadow-[12px_12px_0px_rgba(0,0,0,0.85)]"
            >
              <h3 className="heading mb-3 text-2xl uppercase tracking-[0.4em]">
                {principle.title}
              </h3>
              <p className="text-sm text-black/70">{principle.details}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="color"
        title="Color System"
        accent="primary"
        description="Primary palette rooted in Bauhaus poster design. Use black for structure and canvas for breathing room."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {palette.map((color) => (
            <ColorSwatch
              key={color.hex}
              label={color.label}
              hex={color.hex}
              role={color.role}
            />
          ))}
        </div>
      </Section>

      <Section
        id="type"
        title="Typography"
        accent="secondary"
        description="Marry geometric display typography with a versatile sans-serif body for effortless hierarchy."
      >
        <TypographyShowcase />
      </Section>

      <Section
        id="geometry"
        title="Geometry"
        accent="tertiary"
        description="Celebrate Bauhaus iconography with bold primitive shapes. Layer and rotate for movement."
      >
        <BauhausShapes />
      </Section>

      <Section
        id="components"
        title="Components"
        accent="primary"
        description="Reusable interface elements grounded in the color, type, and geometry foundations."
      >
        <ComponentShowcase />
      </Section>

      <Section
        id="layout"
        title="Layout System"
        accent="secondary"
        description="Compose pages with asymmetric balance, modular spacing, and dramatic focal points."
      >
        <div className="grid gap-8 md:grid-cols-[1.6fr_1fr]">
          <div className="rounded-3xl border-4 border-black bg-white p-6 shadow-[16px_16px_0px_rgba(0,0,0,0.85)]">
            <div className="heading mb-6 text-2xl uppercase tracking-[0.4em]">
              Grid Structure
            </div>
            <ul className="space-y-4 text-sm text-black/80">
              <li>• Base spacing uses an 8px modular scale multiplied by 5 for dramatic offsets.</li>
              <li>
                • Combine a rigid column grid with intentional overlap to echo Bauhaus posters.
              </li>
              <li>
                • Use diagonal accents to break symmetry while maintaining alignment anchors.
              </li>
            </ul>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="grid-highlight h-32 rounded-xl border-4 border-black bg-white" />
              <div className="grid-highlight h-32 rounded-xl border-4 border-black bg-white" />
              <div className="grid-highlight h-32 rounded-xl border-4 border-black bg-white" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border-4 border-black bg-bauhaus-primary p-6 text-white shadow-[12px_12px_0px_rgba(0,0,0,0.85)]">
              <div className="heading text-xl uppercase tracking-[0.4em]">Motion</div>
              <p className="mt-3 text-sm text-white/80">
                Micro-interactions should feel mechanical and snappy (150ms). Use directional
                slides and scale to reinforce geometric motion.
              </p>
            </div>
            <div className="rounded-3xl border-4 border-black bg-white p-6 shadow-[12px_12px_0px_rgba(0,0,0,0.85)]">
              <div className="heading text-xl uppercase tracking-[0.4em]">Do & Don&apos;t</div>
              <ul className="mt-3 space-y-3 text-sm text-black/70">
                <li>• Do contrast bold primaries with generous negative space.</li>
                <li>• Do layer elements with hard-edged shadows and precise alignment.</li>
                <li>• Don&apos;t overload with gradients—keep fills flat and intentional.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <footer className="mt-20 flex flex-col items-center gap-3 pb-12 text-center text-xs uppercase tracking-[0.4em] text-black/60">
        <span>Bauhaus Design System</span>
        <span>Crafted for modern web experiences</span>
      </footer>
    </main>
  );
}
