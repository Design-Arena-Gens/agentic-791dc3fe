"use client";

import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  accent?: "primary" | "secondary" | "tertiary" | "neutral";
  children: ReactNode;
}

const accentPalette: Record<NonNullable<SectionProps["accent"]>, string> = {
  primary: "bg-bauhaus-primary text-white",
  secondary: "bg-bauhaus-secondary text-black",
  tertiary: "bg-bauhaus-tertiary text-white",
  neutral: "bg-bauhaus-neutral text-black"
};

export function Section({ id, title, description, accent = "primary", children }: SectionProps) {
  return (
    <section id={id} className="relative mb-20 scroll-mt-24">
      <div className="mb-6 inline-flex items-center gap-3">
        <div className={`badge ${accentPalette[accent]}`}>{title}</div>
        <div className="h-1 w-32 bg-black" />
      </div>
      {description ? (
        <p className="max-w-2xl text-lg text-black/70">{description}</p>
      ) : null}
      <div className="mt-8 rounded-2xl border-4 border-black bg-white px-6 py-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,0.85)]">
        {children}
      </div>
    </section>
  );
}
