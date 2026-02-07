import Link from "next/link";

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="btn-primary">
      {children}
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="btn-secondary">
      {children}
    </Link>
  );
}
