'use client';

import { useState, useEffect } from "react";
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

  useEffect(() => {
    setUnlocked(isUnlocked());
  }, []);

  const handleClick = () => {
    if (unlocked) {
      window.open(PDF_URL, "_blank");
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      <button onClick={handleClick} className={className}>
        {children ?? "White Paper"}
      </button>
      <GatedContentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        resourceId={RESOURCE_ID}
        resourceTitle={RESOURCE_TITLE}
        pdfUrl={PDF_URL}
        onSuccess={() => setUnlocked(true)}
      />
    </>
  );
}
