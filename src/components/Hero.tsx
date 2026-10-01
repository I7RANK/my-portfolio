import avatar from "../assets/avatar.png";
import { HERO, NAME } from "../config/portfolio-data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left — copy */}
        <div className="rise-in">
          <p className="section-label">Hello World~$</p>

          <h1 className="mt-5 text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            {NAME} {HERO.headline}{" "}
            <span className="text-accent-glow">{HERO.headlineAccent}</span>
            <span className="cursor-blink text-primary" aria-hidden="true" />
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            {HERO.sub}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group relative border border-primary px-6 py-3 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              {HERO.cta}
              <span className="absolute -right-1 -top-1 h-1.5 w-1.5 bg-primary transition-transform duration-300 group-hover:scale-150" />
            </a>
            <a
              href="#projects"
              className="px-2 py-3 text-sm text-muted-foreground underline decoration-border underline-offset-8 transition-colors hover:text-foreground hover:decoration-primary"
            >
              see projects →
            </a>
          </div>
        </div>

        {/* Right — avatar + status */}
        <div
          className="rise-in mx-auto w-full max-w-sm"
          style={{ animationDelay: "150ms" }}
        >
          <div className="scanline relative border border-border transition-colors duration-300 hover:border-border-strong">
            {/* Corner ticks */}
            <span className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary" />
            <span className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-primary" />
            <span className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-primary" />
            <span className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-primary" />

            <img
              src={avatar}
              width={1024}
              height={1024}
              alt="Terminal-style profile avatar"
              className="aspect-square w-full object-cover brightness-[0.95] contrast-[1.05] grayscale"
            />
            <span
              className="pointer-events-none absolute inset-0 bg-primary/10 mix-blend-color"
              aria-hidden="true"
            />
            <span
              className="absolute inset-x-0 bottom-0 h-px bg-primary/60"
              aria-hidden="true"
            />
          </div>

          {/* Status box */}
          <div className="mt-4 border border-border bg-card/80 p-4 backdrop-blur-sm">
            <ul className="space-y-2 text-[13px]">
              {HERO.status.map((line) => (
                <li key={line} className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  <span className="text-muted-foreground">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
