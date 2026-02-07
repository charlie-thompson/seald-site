import Image from "next/image";

export default function ScreenshotFrame({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure>
      <div className="screenshot-frame">
        <div className="border-b border-border/50 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
          </div>
        </div>
        <div className="relative aspect-video w-full bg-bg-light">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority={priority}
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
