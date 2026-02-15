"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Status = "idle" | "submitting" | "success" | "error";

export default function HubSpotForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [interestedIn, setInterestedIn] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [emailError, setEmailError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastFading, setToastFading] = useState(false);

  useEffect(() => {
    if (!showToast) return;
    const fadeTimer = setTimeout(() => setToastFading(true), 3500);
    const dismissTimer = setTimeout(() => {
      setShowToast(false);
      setToastFading(false);
      router.push("/");
    }, 4000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(dismissTimer);
    };
  }, [showToast, router]);

  const validate = () => {
    const errs: Record<string, string> = {};
    const msg = "Please complete this required field.";
    if (!firstName.trim()) errs.firstName = msg;
    if (!lastName.trim()) errs.lastName = msg;
    if (!email.trim()) errs.email = msg;
    if (!companyName.trim()) errs.companyName = msg;
    if (!interestedIn) errs.interestedIn = msg;
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");
    try {
      const payload = {
        fields: [
          { name: "firstname", value: firstName.trim() },
          { name: "lastname", value: lastName.trim() },
          { name: "email", value: email.trim() },
          { name: "0-2/name", value: companyName.trim() },
          { name: "interest", value: interestedIn },
          { name: "company_size", value: companySize.trim() },
          { name: "message", value: message.trim() },
        ],
        context: {
          pageUri: window.location.href,
          pageName: "Contact - Seald Healthcare",
        },
      };

      console.log("Submitting to HubSpot with payload:", JSON.stringify(payload));

      const res = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/244915777/4ddc2135-f947-4146-a8d6-635ddb0551df",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        console.error("HubSpot status:", res.status);
        const bodyText = await res.text();
        console.error("HubSpot response body:", bodyText);
        console.error("Request payload:", JSON.stringify(payload));
        try {
          const parsed = JSON.parse(bodyText);
          if (parsed.errors && Array.isArray(parsed.errors)) {
            const blocked = parsed.errors.some((err: { errorType?: string }) => err.errorType === "BLOCKED_EMAIL");
            if (blocked) {
              setEmailError("Please use a work email address. Free email providers (Gmail, Yahoo, etc.) are not accepted.");
              setStatus("idle");
              return;
            }
          }
        } catch {
          // not JSON, fall through to generic error
        }
        setStatus("error");
        return;
      }

      setStatus("success");
      setFirstName("");
      setLastName("");
      setEmail("");
      setCompanyName("");
      setInterestedIn("");
      setCompanySize("");
      setMessage("");
      setErrors({});
      setShowToast(true);
    } catch (err) {
      console.error("HubSpot form submission failed:", err);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-[#0B1F3B] text-sm focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] focus:outline-none transition-colors";

  const selectClass =
    "w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-[#0B1F3B] text-sm focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] focus:outline-none transition-colors appearance-none bg-no-repeat bg-[length:16px_16px] bg-[position:right_12px_center]";

  const chevronSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236b7280'%3E%3Cpath d='M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06z'/%3E%3C/svg%3E")`;

  return (
    <>
      {showToast && (
        <div
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white rounded-lg shadow-lg px-6 py-4 flex items-center gap-3 transition-opacity duration-500 ${toastFading ? "opacity-0" : "opacity-100"}`}
        >
          <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-medium text-sm">Thanks for reaching out! We&apos;ll be in touch soon.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Row 1: First Name + Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
        </div>

        {/* Row 2: Work Email */}
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

        {/* Row 3: Company Name */}
        <div>
          <label className="block text-sm font-medium text-[#0B1F3B] mb-1">
            Company name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => { setCompanyName(e.target.value); setErrors((p) => ({ ...p, companyName: "" })); }}
            className={inputClass}
          />
          {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
        </div>

        {/* Row 4: Interested In */}
        <div>
          <label className="block text-sm font-medium text-[#0B1F3B] mb-1">
            I&apos;m interested in...<span className="text-red-500">*</span>
          </label>
          <select
            value={interestedIn}
            onChange={(e) => { setInterestedIn(e.target.value); setErrors((p) => ({ ...p, interestedIn: "" })); }}
            className={selectClass}
            style={{ backgroundImage: chevronSvg }}
          >
            <option value="" disabled>Select an option</option>
            <option value="Booking a pilot">Booking a pilot</option>
            <option value="Seeing a demo">Seeing a demo</option>
            <option value="Learning about pricing">Learning about pricing</option>
            <option value="Partnership or integration">Partnership or integration</option>
            <option value="General inquiry">General inquiry</option>
          </select>
          {errors.interestedIn && <p className="text-red-500 text-sm mt-1">{errors.interestedIn}</p>}
        </div>

        {/* Row 5: Company Size */}
        <div>
          <label className="block text-sm font-medium text-[#0B1F3B] mb-1">
            Company size
          </label>
          <input
            type="text"
            value={companySize}
            onChange={(e) => setCompanySize(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Row 6: Message */}
        <div>
          <label className="block text-sm font-medium text-[#0B1F3B] mb-1">
            Message
          </label>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="bg-[#1677FF] hover:bg-[#1060dd] text-white rounded-lg px-8 py-3 font-semibold text-base transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? (
              <span className="flex items-center gap-2">
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
        </div>

        {status === "error" && (
          <p className="text-red-500 text-sm text-right">
            Something went wrong. Please try again or email us at charlie@sealdhealthcare.com
          </p>
        )}
      </form>
    </>
  );
}
