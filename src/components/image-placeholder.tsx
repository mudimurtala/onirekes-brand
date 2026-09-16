import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export function ImagePlaceholder({
  label,
  className,
  dark = false,
}: {
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "image-placeholder relative isolate flex min-h-64 items-center justify-center overflow-hidden rounded-[2rem]",
        dark ? "bg-ink-soft text-paper" : "bg-paper-muted text-ink",
        className,
      )}
      role="img"
      aria-label={`${label} — image placeholder`}
    >
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-background/85 shadow-soft">
          <ImageIcon aria-hidden="true" className="size-5 text-gold-strong" />
        </span>
        <span className="text-[0.65rem] font-semibold uppercase opacity-70">
          Photo placeholder
        </span>
        <span className="max-w-52 text-sm font-medium leading-tight">{label}</span>
      </div>
    </div>
  );
}