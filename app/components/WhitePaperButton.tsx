'use client';

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import GatedContentModal from "./GatedContentModal";

const RESOURCE_ID = "compliance-vs-security-2026";
const RESOURCE_TITLE = "Compliance vs. Security in Healthcare";
const PDF_URL =
  "https://244915777.fs1.hubspotusercontent-na2.net/hubfs/244915777/Seald-Healthcare-Whitepaper-Compliance-vs-Security-2026.pdf";

function isUnlocked(): boolean {
  try {
    const raw = sessionStorage.getItem("seald_unlocked_resources");
    const ids: string[] = raw ? JSON.parse(raw) : [];
    return ids.includes(RESOURCE_ID);
  } catch {
    return false;
  }
}

export default function WhitePaperButton({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setUnlocked(isUnlocked());
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    // Close any parent <details> (mobile menu) before opening modal
    const details = (e.currentTarget as HTMLElement).closest("details");
    if (details) details.removeAttribute("open");

    if (unlocked) {
      window.open(PDF_URL, "_blank");
    } else {
      // Small delay to let the menu close first
      setTimeout(() => setModalOpen(true), 50);
    }
  };

  return (
    <>
      <button onClick={handleClick} className={className}>
        {children ?? "White Paper"}
      </button>
      {mounted &&
        createPortal(
          <GatedContentModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            resourceId={RESOURCE_ID}
            resourceTitle={RESOURCE_TITLE}
            pdfUrl={PDF_URL}
            onSuccess={() => setUnlocked(true)}
          />,
          document.body
        )}
    </>
  );
}
