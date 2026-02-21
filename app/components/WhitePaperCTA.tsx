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

export default function WhitePaperCTA() {
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
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-gray-200 rounded-2xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <div className="text-center md:text-left">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#1677FF]">
              NEW RESOURCE
            </p>
            <h2 className="mb-4 text-3xl font-extrabold text-[#0B1F3B] md:text-4xl">
              Compliance vs. Security in Healthcare
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              Over 846 million patient records exposed since 2009. Average breach cost: $9.77 million. This white paper examines why HIPAA compliance alone cannot prevent breaches and how data-layer security closes the gap.
            </p>
            <div className="flex justify-center md:justify-start">
            <button
              onClick={handleClick}
              className="inline-flex items-center gap-2 rounded-lg bg-[#1677FF] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1060dd]"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
              Download White Paper
            </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="mt-10 md:mt-0">
            <button onClick={handleClick} className="mx-auto flex aspect-[3/4] max-h-[400px] w-full flex-col justify-between rounded-2xl bg-gradient-to-br from-[#0B1F3B] to-[#1060dd] p-8 shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] text-left">
              <div>
                <p className="text-xs font-bold tracking-widest text-[#22D3EE]">
                  SEALD HEALTHCARE
                </p>
                <div className="mt-4 h-px bg-[#22D3EE]/30" />
                <h3 className="mt-6 text-2xl font-bold text-white">
                  Compliance vs. Security in Healthcare
                </h3>
              </div>
              <p className="text-sm text-blue-200">
                White Paper | 2026 Edition
              </p>
            </button>
          </div>
        </div>
        </div>
      </div>

      <GatedContentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        resourceId={RESOURCE_ID}
        resourceTitle={RESOURCE_TITLE}
        pdfUrl={PDF_URL}
        onSuccess={() => setUnlocked(true)}
      />
    </section>
  );
}
