"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUploadCloud, FiCheckCircle, FiAlertCircle, FiFileText } from "react-icons/fi";

// Matches the limit enforced in app/api/year-end-party/route.ts.
const MAX_FILE_BYTES = 8 * 1024 * 1024;

// Per-person prices; the total is multiplied by headcount (registrant + guests).
// Keep in sync with PRICES in app/api/year-end-party/route.ts.
const PAYMENT_OPTIONS = [
  { value: "Downpayment", perPerson: 2000 },
  { value: "Full payment", perPerson: 4000 },
];

const peso = (n: number) => `₱${n.toLocaleString("en-PH")}`;

const FOOD_OPTIONS = ["Any", "Non-pork", "Non-seafood"];

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-body text-sm text-brand-dark placeholder:text-gray-400 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15";

const labelClass = "block font-heading font-semibold text-brand-dark text-sm mb-2";

function RequiredMark() {
  return (
    <span aria-hidden className="text-red-500">
      *
    </span>
  );
}

function ChoicePill({
  name,
  value,
  checked,
  onChange,
  children,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label
      className={`relative flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-3 text-center font-body text-sm transition ${
        checked
          ? "border-brand-blue bg-brand-blue/10 text-brand-dark font-semibold shadow-sm shadow-brand-blue/10"
          : "border-gray-200 bg-white text-gray-600 hover:border-brand-blue/50"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        required
        className="sr-only"
      />
      {children}
    </label>
  );
}

export default function YearEndPartyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [payment, setPayment] = useState("");
  const [food, setFood] = useState("");
  const [poloShirt, setPoloShirt] = useState("");
  const [bringing, setBringing] = useState("");
  const [plusOnes, setPlusOnes] = useState("");
  const [fileName, setFileName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const headcount = 1 + (bringing === "Yes" ? Number(plusOnes || 0) : 0);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file && file.size > MAX_FILE_BYTES) {
      e.target.value = "";
      setFileName("");
      setErrorMsg("That file is over 8 MB. Please upload a smaller screenshot or photo of your receipt.");
      return;
    }
    setErrorMsg("");
    setFileName(file?.name ?? "");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    if (bringing !== "Yes") formData.set("plus_ones", "0");

    try {
      // Multipart body (no explicit Content-Type) so the receipt file uploads.
      // The API route stores the receipt and forwards everything to GoHighLevel.
      const res = await fetch("/api/year-end-party", { method: "POST", body: formData });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? `Status ${res.status}`);
      }
      setSubmittedEmail(String(formData.get("email") ?? ""));
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error && !err.message.startsWith("Status")
          ? err.message
          : "Something went wrong while sending your registration. Please try again, or message the ES Team admin."
      );
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-3xl border border-brand-blue/20 bg-white p-10 text-center shadow-xl shadow-brand-blue/5"
      >
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue/10">
          <FiCheckCircle size={30} className="text-brand-blue" />
        </div>
        <h3 className="font-heading font-extrabold text-brand-dark text-2xl mb-3">Registration received!</h3>
        <p className="font-body text-gray-500 text-sm leading-relaxed max-w-sm mx-auto mb-3">
          Thanks for signing up for the 2nd Annual ES Team Year End Getaway. We&apos;ll notify Jonathan about your
          payment, and once it&apos;s received we&apos;ll send a confirmation email to{" "}
          <span className="font-semibold text-brand-dark">{submittedEmail}</span>.
        </p>
        <p className="font-body text-gray-400 text-xs max-w-sm mx-auto">
          Don&apos;t forget your exchange gift (₱500 minimum)!
        </p>
      </motion.div>
    );
  }

  return (
    <form
      name="year-end-party"
      method="POST"
      onSubmit={handleSubmit}
      className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-xl shadow-black/5"
    >
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid grid-cols-1 gap-5">
        <p className="font-body text-xs text-gray-400">
          All fields are required <span className="text-red-500">*</span>
        </p>

        <div>
          <label htmlFor="yep-name" className={labelClass}>Name <RequiredMark /></label>
          <input id="yep-name" name="name" type="text" required autoComplete="name" placeholder="Juan Dela Cruz" className={inputClass} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="yep-phone" className={labelClass}>Phone <RequiredMark /></label>
            <input id="yep-phone" name="phone" type="tel" required autoComplete="tel" placeholder="09XX XXX XXXX" className={inputClass} />
          </div>
          <div>
            <label htmlFor="yep-email" className={labelClass}>Email <RequiredMark /></label>
            <input id="yep-email" name="email" type="email" required autoComplete="email" placeholder="you@email.com" className={inputClass} />
          </div>
        </div>

        <fieldset>
          <legend className={labelClass}>Bringing someone? <RequiredMark /></legend>
          <div className="grid grid-cols-2 gap-3">
            {["Yes", "No"].map((opt) => (
              <ChoicePill
                key={opt}
                name="bringing_someone"
                value={opt}
                checked={bringing === opt}
                onChange={(v) => {
                  setBringing(v);
                  if (v === "No") setPlusOnes("");
                }}
              >
                {opt}
              </ChoicePill>
            ))}
          </div>
        </fieldset>

        <AnimatePresence initial={false}>
          {bringing === "Yes" && (
            <motion.fieldset
              key="plus-ones"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <legend className={labelClass}>How many are you bringing? <RequiredMark /></legend>
              <div className="grid grid-cols-2 gap-3">
                {["1", "2"].map((opt) => (
                  <ChoicePill key={opt} name="plus_ones" value={opt} checked={plusOnes === opt} onChange={setPlusOnes}>
                    {opt} {opt === "1" ? "pip" : "pips"}
                  </ChoicePill>
                ))}
              </div>
            </motion.fieldset>
          )}
        </AnimatePresence>

        <fieldset>
          <legend className={labelClass}>Payment <RequiredMark /></legend>
          <div className="grid grid-cols-2 gap-3">
            {PAYMENT_OPTIONS.map((opt) => (
              <ChoicePill key={opt.value} name="payment_type" value={opt.value} checked={payment === opt.value} onChange={setPayment}>
                <span className="flex flex-col leading-tight">
                  <span>{opt.value}</span>
                  <span className="font-heading font-bold text-brand-blue">{peso(opt.perPerson * headcount)}</span>
                </span>
              </ChoicePill>
            ))}
          </div>
          <p className="mt-2 font-body text-xs text-gray-400">
            {headcount === 1
              ? "Price for 1 person."
              : `Price for ${headcount} people (you + ${headcount - 1} ${headcount === 2 ? "pip" : "pips"}).`}
          </p>
        </fieldset>

        <div>
          <label htmlFor="yep-receipt" className={labelClass}>Payment Receipt <RequiredMark /></label>
          <label
            htmlFor="yep-receipt"
            className={`flex cursor-pointer items-center gap-4 rounded-xl border-2 border-dashed px-4 py-5 transition ${
              fileName ? "border-brand-blue bg-brand-blue/5" : "border-gray-200 hover:border-brand-blue/50"
            }`}
          >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-blue/10">
              {fileName ? <FiFileText size={20} className="text-brand-blue" /> : <FiUploadCloud size={20} className="text-brand-blue" />}
            </div>
            <div className="min-w-0">
              <p className="font-body text-sm font-semibold text-brand-dark truncate">
                {fileName || "Upload a screenshot or photo"}
              </p>
              <p className="font-body text-xs text-gray-400">
                {fileName ? "Tap to change file" : "JPG, PNG or PDF · max 8 MB"}
              </p>
            </div>
          </label>
          <input
            id="yep-receipt"
            name="payment_receipt"
            type="file"
            accept="image/*,application/pdf"
            required
            onChange={handleFileChange}
            className="sr-only"
          />
        </div>

        <fieldset>
          <legend className={labelClass}>Food Preference <RequiredMark /></legend>
          <div className="grid grid-cols-3 gap-3">
            {FOOD_OPTIONS.map((opt) => (
              <ChoicePill key={opt} name="food_preference" value={opt} checked={food === opt} onChange={setFood}>
                {opt}
              </ChoicePill>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className={labelClass}>Interested to get polo shirt? <RequiredMark /></legend>
          <div className="grid grid-cols-2 gap-3">
            {["Yes", "No"].map((opt) => (
              <ChoicePill key={opt} name="polo_shirt" value={opt} checked={poloShirt === opt} onChange={setPoloShirt}>
                {opt}
              </ChoicePill>
            ))}
          </div>
        </fieldset>

        {errorMsg && (
          <div className="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 font-body text-sm text-red-600">
            <FiAlertCircle size={16} className="mt-0.5 flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-aqua px-7 py-4 font-heading text-sm font-bold text-brand-dark shadow-lg shadow-brand-blue/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-blue/40 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status === "submitting" ? "Sending…" : "Reserve My Spot"}
          {status !== "submitting" && (
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          )}
        </button>
      </div>
    </form>
  );
}
