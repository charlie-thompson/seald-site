'use client';

import { useState, useEffect, useCallback } from "react";

interface GatedContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  resourceId: string;
  resourceTitle: string;
  pdfUrl: string;
  onSuccess: (resourceId: string) => void;
}

type Status = "idle" | "submitting" | "success" | "error";

export default function GatedContentModal({
  isOpen,
  onClose,
  resourceId,
  resourceTitle,
  pdfUrl,
  onSuccess,
}: GatedContentModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [emailError, setEmailError] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [genericError, setGenericError] = useState("");

  const close = useCallback(() => {
    if (status !== "submitting") {
      onClose();
      // Reset form state after closing
      setTimeout(() => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setErrors({});
        setEmailError("");
        setStatus("idle");
        setGenericError("");
      }, 200);
    }
  }, [onClose, status]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, close]);

  // Prevent body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const validate = () => {
    const errs: Record<string, string> = {};
    const msg = "Please complete this required field.";
    if (!firstName.trim()) errs.firstName = msg;
    if (!lastName.trim()) errs.lastName = msg;
    if (!email.trim()) errs.email = msg;
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setEmailError("");
    setGenericError("");
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/244915777/8b0b39e1-21d9-4e80-b959-39215322528b",
        {
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
              pageName: "Resource Download - " + resourceTitle,
            },
          }),
        }
      );

      if (!res.ok) {
        const bodyText = await res.text();
        console.error("HubSpot status:", res.status);
        console.error("HubSpot response body:", bodyText);
        try {
          const parsed = JSON.parse(bodyText);
          if (parsed.errors && Array.isArray(parsed.errors)) {
            const blocked = parsed.errors.some(
              (err: { errorType?: string }) => err.errorType === "BLOCKED_EMAIL"
            );
            if (blocked) {
              setEmailError("Please use a work email address.");
              setStatus("idle");
              return;
            }
          }
        } catch {
          // not JSON
        }
        setGenericError("Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      // Save to sessionStorage
      try {
        const raw = sessionStorage.getItem("seald_unlocked_resources");
        const ids: string[] = raw ? JSON.parse(raw) : [];
        if (!ids.includes(resourceId)) {
          ids.push(resourceId);
          sessionStorage.setItem("seald_unlocked_resources", JSON.stringify(ids));
        }
      } catch {
        // sessionStorage unavailable
      }

      onSuccess(resourceId);
      setStatus("success");
    } catch (err) {
      console.error("HubSpot form submission failed:", err);
      setGenericError("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  const inputClass =
    "w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-[#0B1F3B] text-sm focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] focus:outline-none transition-colors";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-200"
      onClick={close}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === "success" ? (
          /* Success State */
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
              <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0B1F3B]">You&apos;re all set!</h3>
            <p className="mt-2 text-gray-500 text-sm">
              A download link has been sent to your email. You can also download directly below.
            </p>
            <button
              onClick={() => window.open(pdfUrl, "_blank")}
              className="mt-6 w-full bg-[#1677FF] hover:bg-[#1060dd] text-white rounded-lg py-3 font-semibold transition-colors"
            >
              Download Now
            </button>
            <button
              onClick={close}
              className="mt-3 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Back to Resources
            </button>
          </div>
        ) : (
          /* Form State */
          <>
            <div className="mb-6">
              <p className="text-[#1677FF] font-bold text-xs tracking-widest">
                Seald Healthcare
              </p>
              <h3 className="mt-3 text-xl font-bold text-[#0B1F3B]">
                Download: {resourceTitle}
              </h3>
              <div className="mt-4 border-l-2 border-[#1677FF]/30 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
                <p className="text-[#0B1F3B]/70 text-sm italic leading-relaxed">
                  &ldquo;Since 2009, despite rigorous compliance efforts, over 846 million patient records have been exposed, with 276 million compromised in 2024 alone. It&apos;s clear, healthcare does not have a compliance problem. It has a data security problem....&rdquo;
                </p>
                <button
                  type="submit"
                  form="gated-form"
                  className="mt-3 inline-flex items-center gap-1 text-[#1677FF] font-semibold text-sm uppercase tracking-wide hover:text-[#1060dd] transition-colors"
                >
                  Read More
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </button>
              </div>
            </div>

            <form id="gated-form" onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#0B1F3B] mb-1">
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => { setFirstName(e.target.value); setErrors((p) => ({ ...p, firstName: "" })); }}
                  className={inputClass}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0B1F3B] mb-1">
                  Last Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => { setLastName(e.target.value); setErrors((p) => ({ ...p, lastName: "" })); }}
                  className={inputClass}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0B1F3B] mb-1">
                  Work Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: "" })); setEmailError(""); }}
                  className={inputClass}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-[#1677FF] hover:bg-[#1060dd] text-white rounded-lg py-3 font-semibold transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit"
                )}
              </button>

              {genericError && (
                <p className="text-red-500 text-sm text-center">{genericError}</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
