"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ArrowUpRight,
  Asterisk,
  BadgeCheck,
  Megaphone,
  Sparkles,
  Store,
  X,
} from "lucide-react";

const JoinDialogContext = createContext({ open: () => {}, close: () => {} });

export function useJoinDialog() {
  return useContext(JoinDialogContext);
}

export function JoinDialogProvider({ children }) {
  const dialogRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [type, setType] = useState("Business");

  const open = useCallback(() => {
    setIsOpen(true);
    setSubmitted(false);
    setErrors({});
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setErrors({});
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!isOpen && dialog.open) {
      dialog.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => setIsOpen(false);
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

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

  return (
    <JoinDialogContext.Provider value={{ open, close }}>
      {children}

      <dialog
        ref={dialogRef}
        aria-labelledby="join-dialog-title"
        aria-describedby="join-dialog-desc"
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        className="
          backdrop:bg-gradient-to-br backdrop:from-stone-900/70 backdrop:via-stone-950/80 backdrop:to-amber-950/60 backdrop:backdrop-blur-md
          fixed inset-0 m-auto
          w-[calc(100%-2rem)] max-w-2xl
          max-h-[92vh] h-fit
          p-0
          rounded-[28px] border-2 border-[#EBE4D5]
          bg-[#FCFAF7] text-[#1D1B19]
          overflow-hidden
          shadow-[0_30px_80px_-20px_rgba(20,15,10,0.6)]
        "
      >
        {submitted ? (
          <SuccessPanel onClose={close} onAgain={() => setSubmitted(false)} />
        ) : (
          <FormPanel
            type={type}
            setType={setType}
            errors={errors}
            onSubmit={handleSubmit}
            onClose={close}
          />
        )}
      </dialog>
    </JoinDialogContext.Provider>
  );
}

const PERFORATION =
  "[background-image:radial-gradient(circle,#D8CDB6_1px,transparent_1px)] [background-size:8px_8px] [background-position:center]";

function FormPanel({ type, setType, errors, onSubmit, onClose }) {
  return (
    <div className="flex flex-col max-h-[92vh] relative">
      {/* Perforated top edge — vendor ticket motif */}
      <div className={`h-2 w-full ${PERFORATION} shrink-0`} />

      <header className="sticky top-0 z-10 bg-[#FCFAF7]/95 backdrop-blur-sm border-b border-dashed border-[#E3D9C5] px-6 md:px-10 pt-6 pb-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {/* Eyebrow chip — gold pill */}
            <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-50 to-[#FBF1DE] border border-[#D4AF37]/40 text-[#7C5C18] text-[10px] font-mono font-black uppercase tracking-[0.25em] px-3 py-1 rounded-full mb-3 shadow-sm">
              <Sparkles size={11} className="text-[#D4AF37]" />
              Free Forever · No Card Needed
            </span>

            {/* Section eyebrow */}
            <div className="flex items-center gap-2 mb-1.5">
              <span className="h-px w-8 bg-[#C85A32]" />
              <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C85A32] font-black">
                Vendor Application
              </p>
            </div>

            <h2
              id="join-dialog-title"
              className="text-3xl sm:text-4xl font-serif font-black tracking-tight leading-[1.05]"
            >
              Join{" "}
              <span className="italic text-[#D4AF37]">Fleazo.</span>
            </h2>
            <p
              id="join-dialog-desc"
              className="text-xs sm:text-sm text-[#62564C] mt-2 font-mono"
            >
              ◆ 3 minutes to publish · Verified within 24 hours
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close join dialog"
            className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[#8A7F73] hover:text-[#1D1B19] hover:bg-white border border-[#EBE4D5] hover:border-[#D4AF37] hover:rotate-90 transition-all duration-300"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className="overflow-y-auto px-6 md:px-10 py-7">
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
          onSubmit={onSubmit}
          className="space-y-5 mt-6"
          id="join-form"
        >
          <Field
            label="Your name"
            name="name"
            error={errors.name}
            required
            autoFocus
            placeholder="What should we call you?"
          />
          <Field
            label={type === "Business" ? "Business name" : "Stage / brand name"}
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
              id="jd-about"
              name="about"
              rows={3}
              placeholder="Optional — we'll polish it before publishing."
              className="w-full rounded-xl border-2 bg-white px-4 py-3 text-sm font-medium text-[#1D1B19] border-[#EBE4D5] placeholder:text-[#A89B8D] focus:border-[#D4AF37] focus:shadow-none focus-visible:shadow-none outline-none transition-all resize-y"
            />
          </FieldGroup>
        </form>
      </div>

      <footer className="sticky bottom-0 z-10 bg-[#FCFAF7]/95 backdrop-blur-sm border-t border-dashed border-[#E3D9C5] px-6 md:px-10 py-4 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-3">
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8A7F73] flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-[#C85A32]" />
          By submitting you agree to Fleazo's verification process
        </p>
        <div className="flex items-center gap-2 md:ml-auto">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#8A7F73] hover:text-[#1D1B19] px-4 py-2.5 rounded-full transition-colors"
          >
            Cancel
          </button>
          <button
            form="join-form"
            type="submit"
            className="group inline-flex items-center gap-2 bg-gradient-to-tr from-[#C85A32] to-[#D4AF37] text-white text-xs font-bold uppercase tracking-[0.2em] px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-100 transition-all"
          >
            Submit Listing
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>
      </footer>

      <div className={`h-2 w-full ${PERFORATION} shrink-0`} />
    </div>
  );
}

function SuccessPanel({ onClose, onAgain }) {
  return (
    <div className="relative p-8 md:p-12 text-center">
      <div className={`absolute top-0 inset-x-0 h-2 ${PERFORATION}`} />

      {/* Heritage arch with check */}
      <div className="w-20 h-24 mx-auto mb-6 relative">
        <div className="w-full h-full rounded-t-full bg-gradient-to-b from-[#D4AF37] to-[#C85A32] flex items-center justify-center shadow-lg ring-4 ring-amber-100">
          <BadgeCheck size={32} className="text-white" />
        </div>
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/80" />
      </div>

      <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C85A32] font-black mb-2">
        Application Received
      </p>

      <h2
        id="join-dialog-title"
        className="text-4xl font-serif font-black mb-3 tracking-tight"
      >
        You're on the{" "}
        <span className="italic text-[#D4AF37]">list.</span>
      </h2>

      <p
        id="join-dialog-desc"
        className="text-sm text-[#62564C] mb-8 leading-relaxed max-w-md mx-auto"
      >
        Our team will verify your details within 24 hours and ping you on
        WhatsApp once your Fleazo profile is live.
      </p>

      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={onAgain}
          className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#2D2825] hover:text-[#C85A32] px-4 py-2.5 rounded-full border border-[#EBE4D5] hover:border-[#C85A32] transition-colors"
        >
          Submit another
        </button>
        <button
          type="button"
          onClick={onClose}
          className="group inline-flex items-center gap-2 bg-gradient-to-tr from-[#C85A32] to-[#D4AF37] text-white text-xs font-bold uppercase tracking-[0.2em] px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
        >
          Done
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </button>
      </div>

      <div className={`absolute bottom-0 inset-x-0 h-2 ${PERFORATION}`} />
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
  autoFocus,
}) {
  const id = `jd-${name}`;
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
        autoFocus={autoFocus}
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
  const id = `jd-${name}`;
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
        {/* Mini heritage arch icon */}
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
