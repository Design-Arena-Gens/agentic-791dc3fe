"use client";

const shapes = [
  {
    label: "Circle",
    description: "Represents unity and bold focal points. Use for badges and highlights.",
    classes: "bg-bauhaus-secondary"
  },
  {
    label: "Triangle",
    description: "Drives direction and motion. Layer at 15°–45° angles for dynamic energy.",
    classes: "border-l-[70px] border-l-transparent border-r-[70px] border-r-transparent border-b-[120px] border-b-bauhaus-primary rotate-6"
  },
  {
    label: "Square",
    description: "Supports structure and modular systems. Build layouts with strict grids.",
    classes: "bg-bauhaus-tertiary"
  }
];

export function BauhausShapes() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {shapes.map((shape) => (
        <div
          key={shape.label}
          className="flex h-full flex-col gap-4 rounded-2xl border-4 border-black bg-white p-6 shadow-[12px_12px_0px_rgba(0,0,0,0.85)]"
        >
          <div className="flex h-40 items-center justify-center">
            {shape.label === "Triangle" ? (
              <div className={shape.classes} />
            ) : (
              <div
                className={`h-28 w-28 border-4 border-black ${shape.classes} ${
                  shape.label === "Circle" ? "rounded-full" : ""
                }`}
              />
            )}
          </div>
          <h4 className="heading text-xl uppercase tracking-[0.4em]">{shape.label}</h4>
          <p className="text-sm text-black/70">{shape.description}</p>
        </div>
      ))}
    </div>
  );
}
