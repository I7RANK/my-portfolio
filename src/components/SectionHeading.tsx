interface SectionHeadingProps {
  num: string;
  title: string;
  hint?: string;
}

export function SectionHeading({ num, title, hint }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p className="section-label">section_{num}</p>
      <h2 className="mt-2 flex items-baseline gap-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        <span className="text-primary">#</span>
        {title}
        <span
          className="hidden h-px flex-1 bg-border sm:block"
          aria-hidden="true"
        />
      </h2>
      {hint ? (
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}
