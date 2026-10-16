import { Mail, Phone, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  HANDLE,
  NAME,
} from "../config/portfolio-data";

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          num="04"
          title="contact"
          hint="Do you have a project or opportunity? My inbox is always open."
        />

        <div className="relative border border-border bg-card/40 p-8 sm:p-12">
          <span
            className="absolute -left-px -top-px h-4 w-16 border-l-2 border-t-2 border-primary"
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-px -right-px h-4 w-16 border-b-2 border-r-2 border-primary"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-mono text-sm text-muted-foreground">
                <span className="text-primary">$</span> ping {HANDLE}
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Let's build something{" "}
                <span className="text-accent-glow">incredible</span>
              </h3>
              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-primary"
                >
                  <Mail size={16} strokeWidth={1.5} className="text-primary" />
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={CONTACT_PHONE_HREF}
                  className="flex items-center gap-2.5 transition-colors hover:text-primary"
                >
                  <Phone size={16} strokeWidth={1.5} className="text-primary" />
                  {CONTACT_PHONE}
                </a>
              </div>
            </div>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex items-center justify-center gap-3 self-start border border-primary px-8 py-4 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Send Message
              <Send
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground sm:flex-row">
        <p>
          <span className="text-primary">©</span> {new Date().getFullYear()}{" "}
          {NAME} — Thank you for visiting my portfolio! All rights reserved.
        </p>
        <p className="font-mono">
          exit <span className="text-primary">0</span> · made with React &
          Tailwind
        </p>
      </div>
    </footer>
  );
}
