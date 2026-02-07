export default function GlassCard({
  children,
  className = "",
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={`${hover ? "glass-card" : "glass-panel"} ${className}`}>
      {children}
    </div>
  );
}
