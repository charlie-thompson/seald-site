"use client";

import { useEffect, useRef, useState } from "react";

export default function HubSpotForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const script = document.createElement("script");
          script.src = "https://js-na2.hsforms.net/forms/embed/244915777.js";
          script.defer = true;
          script.onload = () => setLoaded(true);
          el.appendChild(script);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef}>
      {!loaded && (
        <div className="flex justify-center py-12">
          <span className="text-sm text-text-secondary">Loading form...</span>
        </div>
      )}
      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="4ddc2135-f947-4146-a8d6-635ddb0551df"
        data-portal-id="244915777"
      />
    </div>
  );
}
