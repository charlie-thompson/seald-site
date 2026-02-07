export default function SectionHeading({
  title,
  subtitle,
  centered = false,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed text-text-secondary ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
