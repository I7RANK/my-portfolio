import { Quote } from "lucide-react";
import { QUOTE } from "../config/portfolio-data";

export function QuoteSection() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative border border-border bg-card/40 px-8 py-10 sm:px-14">
          {/* Decorative lines breaking the frame */}
          <span
            className="absolute -left-px -top-px h-4 w-16 border-l-2 border-t-2 border-primary"
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-px -right-px h-4 w-16 border-b-2 border-r-2 border-primary"
            aria-hidden="true"
          />
          <span
            className="absolute left-0 top-0 hidden h-px w-full bg-gradient-to-r from-transparent via-border-strong to-transparent sm:block"
            aria-hidden="true"
          />

          <div className="flex gap-5">
            <Quote
              size={26}
              strokeWidth={1.25}
              className="shrink-0 rotate-180 text-primary"
            />
            <div>
              <blockquote className="text-lg italic leading-relaxed text-foreground sm:text-xl">
                {QUOTE.text}
              </blockquote>
              <p className="mt-4 text-xs tracking-widest text-muted-foreground uppercase">
                — {QUOTE.author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
