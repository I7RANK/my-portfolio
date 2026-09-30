/**
 * Fixed decorative background: thin geometric lines, faint grid,
 * and restrained accent lines — terminal aesthetic, no soft shadows.
 */
export function BackgroundDecoration() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Faint grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.245 0.01 280 / 0.35) 1px, transparent 1px)," +
            "linear-gradient(to bottom, oklch(0.245 0.01 280 / 0.35) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 20%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 20%, black 30%, transparent 75%)",
        }}
      />

      {/* Abstract thin geometric lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="oklch(0.3 0.02 280 / 0.5)" strokeWidth="1" fill="none">
          <path d="M-50 640 L 480 260 L 760 470 L 1490 -40" />
          <path d="M-50 720 L 520 340 L 820 560 L 1490 40" />
          <circle cx="1140" cy="150" r="180" />
          <circle cx="1140" cy="150" r="120" />
          <path d="M60 900 L 260 700 L 420 780 L 560 660" />
        </g>
        <g
          stroke="var(--color-primary)"
          strokeOpacity="0.16"
          strokeWidth="1"
          fill="none"
        >
          <path d="M-50 640 L 480 260 L 760 470 L 1490 -40" />
          <rect x="1052" y="62" width="176" height="176" />
        </g>
        {/* Crosshair details */}
        <g stroke="oklch(0.4 0.02 280 / 0.7)" strokeWidth="1">
          <path d="M980 560 h16 M988 552 v16" />
          <path d="M300 200 h16 M308 192 v16" />
          <path d="M700 840 h16 M708 832 v16" />
        </g>
      </svg>
    </div>
  );
}
