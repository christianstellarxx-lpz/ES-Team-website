"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUploadCloud, FiCheckCircle, FiAlertCircle, FiFileText, FiPlus, FiX, FiExternalLink } from "react-icons/fi";
import { ChoicePill, RequiredMark, inputClass, labelClass } from "./YearEndPartyForm";
import {
  EMAIL_PATTERN,
  JONATHAN_EMAIL,
  PICKUP_OPTIONS,
  SHIRT_DEADLINE_SHORT,
  SHIRT_MAX_FILE_BYTES,
  SHIRT_MAX_QUANTITY,
  SHIRT_PRICE,
  SHIRT_RECEIPT_TYPES,
  SHIRT_SIZES,
  SIZE_CHART_SRC,
} from "@/lib/year-end-shirt";

type Shirt = { id: number; fit: string; size: string };
type Errors = Record<string, string>;
type Status = "idle" | "submitting" | "success" | "error";

const peso = (n: number) => `₱${n.toLocaleString("en-PH")}`;

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} data-field-error className="mt-2 flex items-center gap-1.5 font-body text-xs font-medium text-red-600">
      <FiAlertCircle size={13} className="flex-shrink-0" />
      {message}
    </p>
  );
}

export default function YearEndShirtForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [shirts, setShirts] = useState<Shirt[]>([{ id: 0, fit: "", size: "" }]);
  const nextId = useRef(1);
  const [pickup, setPickup] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState({ firstName: "", email: "" });

  function clearError(key: string) {
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function updateShirt(id: number, patch: Partial<Shirt>) {
    setShirts((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)));
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file && (file.size > SHIRT_MAX_FILE_BYTES || !SHIRT_RECEIPT_TYPES.includes(file.type))) {
      e.target.value = "";
      setFileName("");
      setErrors((prev) => ({ ...prev, receipt: "Please upload a JPG, PNG, or PDF up to 5 MB." }));
      return;
    }
    clearError("receipt");
    setFileName(file?.name ?? "");
  }

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form);
    const found: Errors = {};
    if (!String(data.get("name") ?? "").trim()) found.name = "Please enter your full name.";
    const email = String(data.get("email") ?? "").trim();
    if (!email) found.email = "Please enter your work email.";
    else if (!EMAIL_PATTERN.test(email)) found.email = "Please enter a valid email address.";
    for (const s of shirts) {
      if (!s.fit) found[`fit-${s.id}`] = "Please pick a fit.";
      else if (!s.size) found[`size-${s.id}`] = "Please pick a size.";
    }
    if (!fileName) found.receipt = "Please upload your proof of payment.";
    if (!pickup) found.pickup = "Please choose how you'll get your shirt.";
    if (!confirmed) found.confirm = "Please confirm your order details.";
    return found;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setErrorMsg("");

    const found = validate(e.currentTarget);
    setErrors(found);
    if (Object.keys(found).length) {
      requestAnimationFrame(() =>
        document.querySelector("[data-field-error]")?.scrollIntoView({ behavior: "smooth", block: "center" })
      );
      return;
    }

    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    formData.set("shirts", JSON.stringify(shirts.map(({ fit, size }) => ({ fit, size }))));

    try {
      // Multipart body (no explicit Content-Type) so the receipt file uploads.
      const res = await fetch("/api/year-end-shirt", { method: "POST", body: formData });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? `Status ${res.status}`);
      }
      const name = String(formData.get("name") ?? "").trim();
      setSubmitted({ firstName: name.split(/\s+/)[0], email: String(formData.get("email") ?? "").trim() });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error && !err.message.startsWith("Status")
          ? err.message
          : `Something went wrong while sending your order. Please try again, or email Jonathan at ${JONATHAN_EMAIL}.`
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
        <h3 className="font-heading font-extrabold text-brand-dark text-2xl mb-3">
          Thank you, {submitted.firstName}! Your order is in.
        </h3>
        <p className="font-body text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
          We have received your details and your receipt. A confirmation email is on its way to{" "}
          <span className="font-semibold text-brand-dark">{submitted.email}</span>. We will verify your payment. You
          can collect your shirt at the year-end party, or contact Jonathan if you chose pickup at his place or a meetup. See you at the party!
        </p>
      </motion.div>
    );
  }

  const total = SHIRT_PRICE * shirts.length;

  return (
    <form
      name="year-end-shirt"
      method="POST"
      noValidate
      onSubmit={handleSubmit}
      className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-xl shadow-black/5"
    >
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid grid-cols-1 gap-6">
        <p className="font-body text-sm text-gray-500">
          It takes about 2 minutes. Have your payment receipt ready to upload. All fields marked with{" "}
          <span className="text-red-500">*</span> are required. Orders close on{" "}
          <span className="font-semibold text-brand-dark">{SHIRT_DEADLINE_SHORT}</span>.
        </p>

        {/* ── About you ── */}
        <div>
          <label htmlFor="yes-name" className={labelClass}>Full name <RequiredMark /></label>
          <input
            id="yes-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Juan Dela Cruz"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "yes-name-error" : undefined}
            onChange={() => clearError("name")}
            className={inputClass}
          />
          <FieldError id="yes-name-error" message={errors.name} />
        </div>

        <div>
          <label htmlFor="yes-email" className={labelClass}>Work email <RequiredMark /></label>
          <input
            id="yes-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@esteam.work"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "yes-email-error" : undefined}
            onChange={() => clearError("email")}
            className={inputClass}
          />
          <FieldError id="yes-email-error" message={errors.email} />
        </div>

        {/* ── Shirt details ── */}
        <div className="flex flex-col gap-4">
          {shirts.map((shirt, index) => {
            const fitKey = `fit-${shirt.id}`;
            const sizeKey = `size-${shirt.id}`;
            return (
              <div key={shirt.id} className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-heading font-bold text-brand-dark text-sm">
                    {shirts.length > 1 ? `Shirt ${index + 1}` : "Your shirt"}
                  </p>
                  {shirts.length > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        setShirts((prev) => prev.filter((s) => s.id !== shirt.id));
                        clearError(fitKey);
                        clearError(sizeKey);
                      }}
                      className="inline-flex items-center gap-1 font-body text-xs font-semibold text-gray-400 hover:text-red-500"
                    >
                      <FiX size={14} /> Remove
                    </button>
                  )}
                </div>

                <fieldset aria-describedby={`${fitKey}-help`}>
                  <legend className={labelClass}>Which fit would you like? <RequiredMark /></legend>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.keys(SHIRT_SIZES).map((fit) => (
                      <ChoicePill
                        key={fit}
                        name={`fit-${shirt.id}`}
                        value={fit}
                        checked={shirt.fit === fit}
                        onChange={(v) => {
                          // Sizes differ per cut, so a new fit means picking the size again.
                          if (v !== shirt.fit) updateShirt(shirt.id, { fit: v, size: "" });
                          clearError(fitKey);
                        }}
                      >
                        {fit}
                      </ChoicePill>
                    ))}
                  </div>
                  <p id={`${fitKey}-help`} className="mt-2 font-body text-xs text-gray-400">
                    Pick the cut you prefer. You can choose either one.
                  </p>
                  <FieldError id={`${fitKey}-error`} message={errors[fitKey]} />
                </fieldset>

                <AnimatePresence initial={false}>
                  {shirt.fit && (
                    <motion.fieldset
                      key={shirt.fit}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <legend className="mt-4 mb-2 flex w-full items-center justify-between gap-3 font-heading font-semibold text-brand-dark text-sm">
                        <span>
                          Size <RequiredMark />
                        </span>
                        <a
                          href={SIZE_CHART_SRC}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-body text-xs font-semibold text-brand-blue hover:underline underline-offset-4"
                        >
                          View size chart <FiExternalLink size={12} />
                        </a>
                      </legend>
                      <div className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-7 gap-2">
                        {SHIRT_SIZES[shirt.fit].map((size) => (
                          <ChoicePill
                            key={size}
                            name={`size-${shirt.id}`}
                            value={size}
                            checked={shirt.size === size}
                            onChange={(v) => {
                              updateShirt(shirt.id, { size: v });
                              clearError(sizeKey);
                            }}
                          >
                            {size}
                          </ChoicePill>
                        ))}
                      </div>
                      <FieldError id={`${sizeKey}-error`} message={errors[sizeKey]} />
                    </motion.fieldset>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {shirts.length < SHIRT_MAX_QUANTITY && (
            <button
              type="button"
              onClick={() => setShirts((prev) => [...prev, { id: nextId.current++, fit: "", size: "" }])}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-200 px-4 py-3 font-heading text-sm font-semibold text-brand-dark transition hover:border-brand-blue/50"
            >
              <FiPlus size={16} className="text-brand-blue" /> Add another shirt
            </button>
          )}

          <div className="flex items-center justify-between rounded-xl bg-brand-blue/10 px-4 py-3">
            <span className="font-body text-sm text-gray-600">
              {shirts.length} {shirts.length === 1 ? "shirt" : "shirts"} × {peso(SHIRT_PRICE)}
            </span>
            <span className="font-heading font-extrabold text-brand-dark">Total {peso(total)}</span>
          </div>
        </div>

        {/* ── Payment ── */}
        <div>
          <label htmlFor="yes-receipt" className={labelClass}>Upload proof of payment <RequiredMark /></label>
          <label
            htmlFor="yes-receipt"
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
                {fileName ? "Tap to change file" : `JPG, PNG, or PDF · up to 5 MB · ${peso(total)} total`}
              </p>
            </div>
          </label>
          <input
            id="yes-receipt"
            name="payment_receipt"
            type="file"
            accept="image/jpeg,image/png,application/pdf"
            aria-describedby="yes-receipt-help"
            onChange={handleFileChange}
            className="sr-only"
          />
          <p id="yes-receipt-help" className="mt-2 font-body text-xs text-gray-400">
            Upload a screenshot or photo of your payment receipt (JPG, PNG, or PDF, up to 5 MB).
          </p>
          <FieldError id="yes-receipt-error" message={errors.receipt} />
        </div>

        {/* ── Getting the shirt ── */}
        <fieldset>
          <legend className={labelClass}>How will you get your shirt? <RequiredMark /></legend>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PICKUP_OPTIONS.map((opt) => (
              <ChoicePill
                key={opt}
                name="pickup_method"
                value={opt}
                checked={pickup === opt}
                onChange={(v) => {
                  setPickup(v);
                  clearError("pickup");
                }}
              >
                {opt}
              </ChoicePill>
            ))}
          </div>
          <p className="mt-2 font-body text-xs text-gray-400">
            Get your shirt at the year-end party, or contact Jonathan to pick it up at his place or meet up.
          </p>
          {pickup && pickup !== PICKUP_OPTIONS[0] && (
            <p className="mt-2 rounded-xl bg-gray-50 px-4 py-3 font-body text-sm text-gray-600">
              Please contact Jonathan to arrange the time and place:{" "}
              <a href={`mailto:${JONATHAN_EMAIL}`} className="font-semibold text-brand-blue hover:underline">
                {JONATHAN_EMAIL}
              </a>
            </p>
          )}
          <FieldError id="yes-pickup-error" message={errors.pickup} />
        </fieldset>

        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              name="confirm"
              value="yes"
              checked={confirmed}
              onChange={(e) => {
                setConfirmed(e.target.checked);
                clearError("confirm");
              }}
              aria-invalid={!!errors.confirm}
              className="mt-0.5 h-5 w-5 flex-shrink-0 accent-brand-blue"
            />
            <span className="font-body text-sm text-gray-600">
              I confirm my size and details are correct. I understand that orders cannot be changed after{" "}
              {SHIRT_DEADLINE_SHORT}. <RequiredMark />
            </span>
          </label>
          <FieldError id="yes-confirm-error" message={errors.confirm} />
        </div>

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
          {status === "submitting" ? "Sending…" : "Submit My Order"}
          {status !== "submitting" && (
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          )}
        </button>
      </div>
    </form>
  );
}
