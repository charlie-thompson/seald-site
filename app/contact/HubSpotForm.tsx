"use client";

import { useEffect, useRef } from "react";

export default function HubSpotForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src = "https://js-na2.hsforms.net/forms/embed/244915777.js";
    script.defer = true;
    containerRef.current.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="4ddc2135-f947-4146-a8d6-635ddb0551df"
        data-portal-id="244915777"
      />
    </div>
  );
}
