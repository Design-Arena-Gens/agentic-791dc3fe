"use client";

interface ColorSwatchProps {
  label: string;
  hex: string;
  role: string;
}

export function ColorSwatch({ label, hex, role }: ColorSwatchProps) {
  return (
    <div className="group flex flex-col gap-3 rounded-2xl border-4 border-black bg-white p-5 transition-transform duration-300 hover:-translate-y-2 hover:rotate-1">
      <div
        className="h-32 w-full border-4 border-black"
        style={{ backgroundColor: hex }}
      />
      <div className="flex justify-between text-sm font-medium uppercase tracking-wide">
        <span>{label}</span>
        <span>{hex}</span>
      </div>
      <p className="text-xs uppercase tracking-wider text-black/60">{role}</p>
    </div>
  );
}
