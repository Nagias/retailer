type SectionHeadingProps = {
  eyebrow: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-hyper-orange">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-semibold tracking-normal text-hyper-text sm:text-4xl ${
          eyebrow ? "mt-3" : ""
        }`}
      >
        {heading}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-hyper-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
