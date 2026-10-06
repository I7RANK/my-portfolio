import { SectionHeading } from "./SectionHeading";
import { SKILLS } from "../config/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          num="01"
          title="skills"
          hint="Technologies and areas I work with daily."
        />

        <p className="section-label mb-8">skills.matrix</p>
        <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill) => (
            <div
              key={skill}
              className="group flex min-h-18 items-center bg-background p-5 transition-colors duration-300 hover:bg-card"
            >
              <span className="mr-3 text-primary">&gt;</span>
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
