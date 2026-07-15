type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`mb-10 flex max-w-2xl flex-col gap-3 ${alignment} ${align === "center" ? "mx-auto" : ""}`}>
      <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-cyan">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-wide text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
