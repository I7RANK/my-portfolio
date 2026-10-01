import { useEffect, useState } from "react";
import { HANDLE } from "../config/portfolio-data";

const LINKS = [
  { label: "home", hash: "#home", num: "00" },
  { label: "projects", hash: "#projects", num: "01" },
  { label: "experience", hash: "#experience", num: "02" },
  { label: "contact", hash: "#contact", num: "03" },
];

export function Navbar() {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.hash)).filter(
      (el): el is Element => Boolean(el),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/85 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="text-primary">[</span>
          {HANDLE}
          <span className="text-primary">]</span>
          <span className="cursor-blink" aria-hidden="true" />
        </a>

        <ul className="hidden items-center gap-1 sm:flex">
          {LINKS.map((link) => (
            <li key={link.hash}>
              <a
                href={link.hash}
                className={`group flex items-baseline gap-1.5 px-3 py-2 text-[13px] transition-colors ${
                  active === link.hash
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="text-[10px] text-primary/70 group-hover:text-primary">
                  {link.num}.
                </span>
                <span
                  className={
                    active === link.hash
                      ? "underline decoration-1 underline-offset-4"
                      : ""
                  }
                >
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="border border-primary/60 px-3 py-1.5 text-xs text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:hidden"
        >
          contact
        </a>
      </nav>
    </header>
  );
}
