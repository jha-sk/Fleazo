"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Asterisk,
  BadgeCheck,
  Clock,
  MessageSquare,
  Megaphone,
  Sparkles,
  Store,
  ShieldCheck,
  Zap,
} from "lucide-react";

const PERFORATION =
  "[background-image:radial-gradient(circle,#D8CDB6_1.25px,transparent_1.25px)] [background-size:10px_10px] [background-position:center]";

const STEPS = [
  {
    n: "01",
    icon: Sparkles,
    label: "Fill the form",
    desc: "Takes about 3 minutes. No card, no fee.",
  },
  {
    n: "02",
    icon: ShieldCheck,
    label: "We verify by hand",
    desc: "Real humans check every listing within 24h.",
  },
  {
    n: "03",
    icon: Zap,
    label: "Go live forever",
    desc: "WhatsApp leads land directly with you.",
  },
];

const BENEFITS = [
  { icon: MessageSquare, text: "Direct WhatsApp leads" },
  { icon: ShieldCheck, text: "Hand-verified profile" },
  { icon: BadgeCheck, text: "Indexed by Google & AI search" },
  { icon: Clock, text: "Live within 24 hours" },
];

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [type, setType] = useState("Business");

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const newErrors = {};
    if (!data.name?.trim()) newErrors.name = "Please share your name.";
    if (!data.brand?.trim())
      newErrors.brand = "Business or creator name is required.";
    if (!/^\+?\d{7,15}$/.test((data.phone || "").replace(/\s/g, "")))
      newErrors.phone = "Enter a valid phone number with country code.";
    if (!data.city) newErrors.city = "Pick your city.";
    if (!data.category?.trim()) newErrors.category = "Pick a category.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setSubmitted(true);
  }

  if (submitted) return <SuccessScreen onAgain={() => setSubmitted(false)} />;

  return (
    <div className="relative bg-[#F9F6F0] text-[#2D2825] min-h-screen overflow-hidden">
      {/* Dotted canvas */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5DEC9_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none opacity-80" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-10 pb-24">
        {/* === HERO HEADER === */}
        <header className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-50 to-[#FBF1DE] border border-[#D4AF37]/40 text-[#7C5C18] text-[10px] font-mono font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full shadow-sm mb-6">
            <Sparkles size={12} className="text-[#D4AF37]" />
            Free Forever · No Card Needed
          </span>

          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C85A32]" />
            <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#C85A32] font-black">
              Vendor Application · Fleazo
            </p>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C85A32]" />
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight leading-[1.02]">
            Claim your{" "}
            <span className="italic text-[#D4AF37]">stall.</span>
          </h1>

          <p className="mt-5 text-sm sm:text-base text-[#62564C] max-w-xl mx-auto leading-relaxed">
            Three minutes to publish. Verified within 24 hours. Direct WhatsApp
            leads after that — forever, with{" "}
            <span className="text-[#1D1B19] font-bold">zero commissions.</span>
          </p>
        </header>

        {/* === STEPS TIMELINE === */}
        <ol className="grid md:grid-cols-3 gap-4 mb-14 max-w-5xl mx-auto">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="relative bg-white border border-[#EBE4D5] rounded-2xl p-5 flex items-start gap-4 shadow-[0_4px_18px_-10px_rgba(45,40,37,0.15)]"
            >
              {/* Connector line on desktop */}
              {i < STEPS.length - 1 && (
                <span className="hidden md:block absolute top-1/2 -right-3 w-6 h-px border-t-2 border-dashed border-[#D4AF37]/50" />
              )}
              <div className="relative w-11 h-14 shrink-0">
                <div className="w-11 h-14 rounded-t-full bg-gradient-to-b from-[#C85A32] to-[#7C2D12] flex items-center justify-center shadow-md">
                  <s.icon size={16} className="text-white" />
                </div>
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-wider text-[#8A7F73] tabular-nums bg-white px-1 rounded">
                  {s.n}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-serif font-black text-base text-[#1D1B19] leading-tight">
                  {s.label}
                </p>
                <p className="text-xs text-[#62564C] mt-1.5 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* === MAIN GRID: form ticket + benefit aside === */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-8 max-w-5xl mx-auto">
          {/* TICKET FORM */}
          <article className="relative bg-[#FCFAF7] border-2 border-[#EBE4D5] rounded-[28px] shadow-[0_30px_60px_-25px_rgba(28,26,23,0.4)] overflow-hidden">
            {/* Top perforated edge */}
            <div className={`h-2 w-full ${PERFORATION}`} />

            {/* Tape strip */}
            <div className="relative">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-amber-200/70 border border-amber-300/50 rotate-[-2deg] shadow-sm" />
            </div>

            <div className="px-6 sm:px-10 pt-10 pb-2">
              <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] uppercase text-[#8A7F73] mb-6">
                <span className="flex items-center gap-1.5">
                  ✱ FLEAZO · APPLICATION
                </span>
                <span className="tabular-nums">N° {new Date().getFullYear()}</span>
              </div>

              <h2 className="font-serif font-black text-3xl tracking-tight text-[#1D1B19] mb-2">
                Tell us who you{" "}
                <span className="italic text-[#D4AF37]">are.</span>
              </h2>
              <p className="text-xs font-mono text-[#8A7F73]">
                ◆ Fields marked with an asterisk are required.
              </p>
            </div>

            <div className="px-6 sm:px-10 py-6">
              {/* Type selector */}
              <FieldGroup label="Who are you?">
                <div className="grid grid-cols-2 gap-3">
                  <TypeOption
                    active={type === "Business"}
                    onClick={() => setType("Business")}
                    Icon={Store}
                    label="Business"
                    desc="Cafe, gym, label, studio"
                    serial="N° 01"
                  />
                  <TypeOption
                    active={type === "Creator"}
                    onClick={() => setType("Creator")}
                    Icon={Megaphone}
                    label="Creator / Artist"
                    desc="Influencer, model, photographer"
                    serial="N° 02"
                  />
                </div>
              </FieldGroup>

              <form
                noValidate
                onSubmit={handleSubmit}
                className="space-y-5 mt-6"
              >
                <Field
                  label="Your name"
                  name="name"
                  error={errors.name}
                  required
                  placeholder="What should we call you?"
                />
                <Field
                  label={
                    type === "Business"
                      ? "Business name"
                      : "Stage / brand name"
                  }
                  name="brand"
                  error={errors.brand}
                  required
                  placeholder={
                    type === "Business"
                      ? "e.g. Tapri Central"
                      : "e.g. Sakshi Jain"
                  }
                />
                <Field
                  label="WhatsApp number"
                  name="phone"
                  type="tel"
                  placeholder="+91 98xxx xxxxx"
                  error={errors.phone}
                  required
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  <SelectField
                    label="City"
                    name="city"
                    error={errors.city}
                    required
                    options={[
                      { value: "", label: "Pick your city", disabled: true },
                      { value: "Jaipur", label: "Jaipur" },
                      { value: "Jodhpur", label: "Jodhpur" },
                      { value: "Udaipur", label: "Udaipur" },
                      { value: "Other", label: "Other" },
                    ]}
                  />
                  <Field
                    label="Category"
                    name="category"
                    placeholder="e.g. Cafe, Wedding photographer"
                    error={errors.category}
                    required
                  />
                </div>

                <FieldGroup label="One line about you" optional>
                  <textarea
                    id="f-about"
                    name="about"
                    rows={3}
                    placeholder="Optional — we'll polish it before publishing."
                    className="w-full rounded-xl border-2 bg-white px-4 py-3 text-sm font-medium text-[#1D1B19] border-[#EBE4D5] placeholder:text-[#A89B8D] focus:border-[#D4AF37] focus:shadow-none focus-visible:shadow-none outline-none transition-all resize-y"
                  />
                </FieldGroup>

                <div className="pt-3 border-t border-dashed border-[#E3D9C5] flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-3">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8A7F73] flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C85A32]" />
                    By submitting you agree to Fleazo's verification process
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 bg-gradient-to-tr from-[#C85A32] to-[#D4AF37] text-white text-xs font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-100 transition-all"
                  >
                    Submit Listing
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </button>
                </div>
              </form>
            </div>

            {/* Footer stub caption + perforated edge */}
            <div className="px-6 sm:px-10 pb-3 flex items-center justify-between text-[9px] font-mono tracking-[0.3em] uppercase text-[#8A7F73]">
              <span>◆ ADM · ONE WAY</span>
              <span>FL · {new Date().getFullYear()}</span>
            </div>
            <div className={`h-2 w-full ${PERFORATION}`} />
          </article>

          {/* BENEFIT ASIDE */}
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-4">
            <div className="bg-[#1C1A17] text-stone-100 rounded-2xl p-6 border border-[#3D352F] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gradient-to-br from-amber-400/15 via-orange-500/5 to-transparent blur-3xl pointer-events-none" />
              <div className="relative">
                <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#D4AF37] font-black mb-3">
                  What you get
                </p>
                <h3 className="font-serif font-black text-2xl tracking-tight leading-tight text-white mb-5">
                  Forever{" "}
                  <span className="italic text-[#D4AF37]">free.</span>
                </h3>
                <ul className="space-y-3">
                  {BENEFITS.map((b) => (
                    <li
                      key={b.text}
                      className="flex items-center gap-3 text-sm text-stone-300"
                    >
                      <span className="w-7 h-7 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                        <b.icon size={12} className="text-[#D4AF37]" />
                      </span>
                      {b.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white border border-[#EBE4D5] rounded-2xl p-5 text-xs text-[#62564C] leading-relaxed">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C85A32] font-black mb-2">
                ◆ The fine print
              </p>
              No commissions. No paid placements. Listings are reviewed by humans
              — we may decline anything we can't verify.
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function SuccessScreen({ onAgain }) {
  return (
    <div className="relative bg-[#F9F6F0] text-[#2D2825] min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#E5DEC9_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none opacity-80" />
      <div className="relative max-w-2xl mx-auto px-5 py-24 text-center">
        <div className="w-24 h-28 mx-auto mb-8 relative">
          <div className="w-full h-full rounded-t-full bg-gradient-to-b from-[#D4AF37] to-[#C85A32] flex items-center justify-center shadow-xl ring-4 ring-amber-100">
            <BadgeCheck size={40} className="text-white" />
          </div>
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white/80" />
        </div>

        <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#C85A32] font-black mb-3">
          Application Received
        </p>

        <h1 className="text-5xl sm:text-6xl font-serif font-black mb-4 tracking-tight leading-[1.02]">
          You're on the{" "}
          <span className="italic text-[#D4AF37]">list.</span>
        </h1>

        <p className="text-sm sm:text-base text-[#62564C] mb-10 leading-relaxed max-w-md mx-auto">
          Our team will verify your details within 24 hours and ping you on
          WhatsApp once your Fleazo profile is live.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={onAgain}
            className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#2D2825] hover:text-[#C85A32] px-5 py-3 rounded-full border border-[#EBE4D5] hover:border-[#C85A32] transition-colors"
          >
            Submit another
          </button>
          <a
            href="/"
            className="group inline-flex items-center gap-2 bg-gradient-to-tr from-[#C85A32] to-[#D4AF37] text-white text-xs font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Back to Fleazo
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

function FieldGroup({ label, optional, children }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-black text-[#2D2825]">
          {label}
        </span>
        {optional && (
          <span className="text-[9px] font-mono uppercase tracking-widest text-[#A89B8D]">
            · Optional
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function Field({
  label,
  name,
  error,
  required,
  type = "text",
  placeholder,
}) {
  const id = `f-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.25em] font-black text-[#2D2825] mb-2"
      >
        {label}
        {required && (
          <Asterisk size={10} className="text-[#C85A32]" aria-hidden="true" />
        )}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        required={required}
        autoComplete="off"
        className={`w-full h-11 rounded-xl border-2 bg-white px-4 text-sm font-medium text-[#1D1B19] placeholder:text-[#A89B8D] placeholder:font-normal focus:shadow-none focus-visible:shadow-none outline-none transition-all ${
          error
            ? "border-red-400 focus:border-red-500"
            : "border-[#EBE4D5] focus:border-[#D4AF37]"
        }`}
      />
      {error && (
        <p
          role="alert"
          className="mt-1.5 text-[11px] font-mono text-red-600 flex items-center gap-1"
        >
          <span className="w-1 h-1 rounded-full bg-red-500" />
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({ label, name, error, required, options }) {
  const id = `f-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.25em] font-black text-[#2D2825] mb-2"
      >
        {label}
        {required && (
          <Asterisk size={10} className="text-[#C85A32]" aria-hidden="true" />
        )}
      </label>
      <select
        id={id}
        name={name}
        defaultValue=""
        aria-invalid={error ? true : undefined}
        className={`w-full h-11 rounded-xl border-2 bg-white px-4 text-sm font-medium text-[#1D1B19] focus:shadow-none focus-visible:shadow-none outline-none transition-all appearance-none bg-[length:14px] bg-[right_1rem_center] bg-no-repeat ${
          error
            ? "border-red-400 focus:border-red-500"
            : "border-[#EBE4D5] focus:border-[#D4AF37]"
        }`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%238A7F73' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\")",
        }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p
          role="alert"
          className="mt-1.5 text-[11px] font-mono text-red-600 flex items-center gap-1"
        >
          <span className="w-1 h-1 rounded-full bg-red-500" />
          {error}
        </p>
      )}
    </div>
  );
}

function TypeOption({ active, onClick, Icon, label, desc, serial }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`group relative text-left p-4 rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
        active
          ? "border-[#1D1B19] bg-[#1C1A17] text-stone-100 shadow-[0_10px_30px_-10px_rgba(28,26,23,0.5)]"
          : "border-[#EBE4D5] bg-white hover:border-[#D4AF37] hover:-translate-y-0.5"
      }`}
    >
      <span
        className={`absolute top-3 right-3 text-[9px] font-mono tracking-widest tabular-nums ${
          active ? "text-stone-400" : "text-[#A89B8D]"
        }`}
      >
        {serial}
      </span>

      <div className="flex items-start gap-3">
        <div
          className={`w-9 h-11 rounded-t-full flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105 ${
            active
              ? "bg-gradient-to-b from-[#D4AF37] to-[#C85A32]"
              : "bg-gradient-to-b from-[#C85A32] to-[#7C2D12]"
          }`}
        >
          <Icon size={16} className="text-white" aria-hidden="true" />
        </div>
        <div className="min-w-0 pt-0.5">
          <p
            className={`font-serif font-black text-base leading-tight ${
              active ? "text-white" : "text-[#1D1B19]"
            }`}
          >
            {label}
          </p>
          <p
            className={`text-[11px] font-mono mt-1 truncate ${
              active ? "text-stone-400" : "text-[#8A7F73]"
            }`}
          >
            {desc}
          </p>
        </div>
      </div>
    </button>
  );
}
