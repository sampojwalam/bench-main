type AspectRatio = "phone" | "wide" | "square" | "tall";

const aspectClass: Record<AspectRatio, string> = {
  phone: "aspect-[9/19]",
  wide: "aspect-[16/10]",
  square: "aspect-square",
  tall: "aspect-[4/5]",
};

export function ScreenshotPlaceholder({
  label = "Screenshot",
  aspect = "wide",
  className = "",
}: {
  label?: string;
  aspect?: AspectRatio;
  className?: string;
}) {
  return (
    <div
      className={`relative ${aspectClass[aspect]} w-full overflow-hidden rounded-2xl bg-ink-50 border border-ink-200 ${className}`}
    >
      <div className="absolute inset-0 bg-grid bg-[length:32px_32px] opacity-60 grid-mask" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs text-ink-400 tracking-wider uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}

export function PhoneMockup({
  label = "App screenshot",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative aspect-[9/19] w-full rounded-[2.5rem] bg-ink-900 shadow-[0_40px_100px_-30px_rgba(11,11,18,0.35)] p-2.5 overflow-hidden">
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-6 w-28 rounded-b-2xl bg-ink-950 z-10" />
        <div className="relative h-full w-full rounded-[2rem] bg-ink-50 overflow-hidden">
          <div className="absolute inset-0 bg-grid bg-[length:24px_24px] opacity-60 grid-mask" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] text-ink-400 tracking-wider uppercase">
              {label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
