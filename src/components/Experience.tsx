import { SectionHeading } from "./SectionHeading";
import { EDUCATION, EXPERIENCE } from "../config/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          num="02"
          title="experience"
          hint="Experience in web applications, code modernization, and product quality."
        />

        <p className="section-label mb-8">career.timeline</p>
        <ol className="relative max-w-3xl space-y-10 border-l border-border pl-8">
          {EXPERIENCE.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative">
              {/* Node */}
              <span className="absolute -left-9.25 top-1.5 flex h-4 w-4 items-center justify-center border border-primary bg-background">
                <span className="h-1.5 w-1.5 bg-primary" />
              </span>

              <div className="glow-border border border-border bg-card/50 p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-foreground">{job.role}</h3>
                  <span className="text-xs text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-[13px] text-primary">{job.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {job.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-border px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 max-w-3xl border-l border-border pl-8">
          <p className="section-label mb-4">education.log</p>
          <h3 className="font-semibold text-foreground">
            {EDUCATION.institution}
          </h3>
          <p className="text-xs text-primary">{EDUCATION.period}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {EDUCATION.program}
          </p>
        </div>
      </div>
    </section>
  );
}
