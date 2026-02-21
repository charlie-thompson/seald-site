'use client';

import { useState, useEffect, useCallback } from "react";

const RESOURCE_ID = "compliance-vs-security-2026";
const RESOURCE_TITLE = "Compliance vs. Security in Healthcare";
const HUBSPOT_FORM_URL =
  "https://api.hsforms.com/submissions/v3/integration/submit/244915777/8b0b39e1-21d9-4e80-b959-39215322528b";
const PDF_URL = "/downloads/Seald-Healthcare-Whitepaper-Compliance-vs-Security-2026.pdf";

type Status = "idle" | "submitting" | "success" | "error";

function getUnlocked(): boolean {
  try {
    const raw = sessionStorage.getItem("seald_unlocked_resources");
    const ids: string[] = raw ? JSON.parse(raw) : [];
    return ids.includes(RESOURCE_ID);
  } catch {
    return false;
  }
}

export default function WhitepaperContentWall({
  children,
}: {
  children: React.ReactNode;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [emailError, setEmailError] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [genericError, setGenericError] = useState("");

  useEffect(() => {
    setUnlocked(getUnlocked());
  }, []);

  const validate = useCallback(() => {
    const errs: Record<string, string> = {};
    const msg = "Please complete this required field.";
    if (!firstName.trim()) errs.firstName = msg;
    if (!lastName.trim()) errs.lastName = msg;
    if (!email.trim()) errs.email = msg;
    return errs;
  }, [firstName, lastName, email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setEmailError("");
    setGenericError("");
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");

    // Submit to HubSpot for lead capture (fire-and-forget, non-blocking)
    fetch(HUBSPOT_FORM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: [
          { name: "firstname", value: firstName.trim() },
          { name: "lastname", value: lastName.trim() },
          { name: "email", value: email.trim() },
        ],
        context: {
          pageUri: window.location.href,
          pageName: "White Paper Landing Page - " + RESOURCE_TITLE,
        },
      }),
    }).catch(() => {
      // HubSpot submission is best-effort; don't block the user
    });

    // Save to sessionStorage
    try {
      const raw = sessionStorage.getItem("seald_unlocked_resources");
      const ids: string[] = raw ? JSON.parse(raw) : [];
      if (!ids.includes(RESOURCE_ID)) {
        ids.push(RESOURCE_ID);
        sessionStorage.setItem(
          "seald_unlocked_resources",
          JSON.stringify(ids)
        );
      }
    } catch {
      // sessionStorage unavailable
    }

    // Unlock content immediately — user stays on page
    setUnlocked(true);
    setStatus("success");

    // Trigger PDF download
    const link = document.createElement("a");
    link.href = PDF_URL;
    link.download = "Seald-Healthcare-Whitepaper-Compliance-vs-Security-2026.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const inputClass =
    "w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-[#0B1F3B] text-sm focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] focus:outline-none transition-colors";

  return (
    <>
      {/* Gated content wrapper — always in DOM for SEO, hidden via max-height */}
      <div
        style={{
          maxHeight: unlocked ? "none" : 0,
          overflow: unlocked ? "visible" : "hidden",
          transition: unlocked ? "none" : undefined,
        }}
      >
        {children}
      </div>

      {/* Content wall overlay + form — hidden once unlocked */}
      {!unlocked && (
        <div className="relative -mt-32">
          {/* Gradient fade */}
          <div className="pointer-events-none h-48 bg-gradient-to-b from-transparent via-white/80 to-white" />

          {/* CTA + Form */}
          <div className="bg-white pb-16 pt-4">
            <div className="mx-auto max-w-lg text-center">
              <h3 className="text-2xl font-bold text-[#0B1F3B] md:text-3xl">
                Read the Full White Paper
              </h3>
              <p className="mt-3 text-gray-600">
                Enter your details to unlock all sections and download the PDF.
              </p>

              {status === "success" ? (
                <div className="mt-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                    <svg
                      className="h-8 w-8 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-[#0B1F3B]">
                    You&apos;re all set!
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    The full white paper is now unlocked below and the PDF
                    download has started.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mx-auto mt-8 max-w-md space-y-4 text-left"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#0B1F3B] mb-1">
                        First Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                          setErrors((p) => ({ ...p, firstName: "" }));
                        }}
                        className={inputClass}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0B1F3B] mb-1">
                        Last Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
                          setErrors((p) => ({ ...p, lastName: "" }));
                        }}
                        className={inputClass}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0B1F3B] mb-1">
                      Work Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErrors((p) => ({ ...p, email: "" }));
                        setEmailError("");
                      }}
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                    {emailError && (
                      <p className="text-red-500 text-xs mt-1">{emailError}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-[#1677FF] hover:bg-[#1060dd] text-white rounded-lg py-3 font-semibold transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Read the Full White Paper"
                    )}
                  </button>

                  {genericError && (
                    <p className="text-red-500 text-sm text-center">
                      {genericError}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
