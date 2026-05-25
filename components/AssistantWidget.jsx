"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Bot, Send, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildAnswer } from "@/lib/assistant";

const SUGGESTIONS = [
  "Best Cafes in Jaipur",
  "Travel Creators",
  "Rooftop Dining",
  "Wedding Photographers",
  "Fashion in Jaipur",
];

const INTRO_MESSAGE = {
  role: "bot",
  text: "Hello! I'm trained on the Fleazo directory. Ask me about cafes, creators, or local gems!",
};

export function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INTRO_MESSAGE]);
  const [input, setInput] = useState("");
  const scrollerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const scroller = scrollerRef.current;
    if (scroller) scroller.scrollTop = scroller.scrollHeight;
    inputRef.current?.focus();
  }, [open, messages]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && open) setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function ask(query) {
    const q = query.trim();
    if (!q) return;
    const answer = buildAnswer(q);
    setMessages((prev) => [
      ...prev,
      { role: "user", text: q },
      { role: "bot", text: answer.text, results: answer.results },
    ]);
    setInput("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    ask(input);
  }

  return (
    <>
      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="fleazo-assistant"
        aria-label={open ? "Close Fleazo Assistant" : "Open Fleazo Assistant"}
        className={cn(
          "fixed bottom-20 md:bottom-6 right-5 z-[60]",
          "w-14 h-14 rounded-sm",
          "bg-[var(--color-text-primary)] text-white",
          "flex items-center justify-center",
          "shadow-4 hover:bg-accent hover:text-[var(--color-text-primary)]",
          "transition-all duration-instant",
          "active:scale-95"
        )}
      >
        {open ? (
          <X className="w-6 h-6" aria-hidden="true" />
        ) : (
          <Bot className="w-6 h-6" aria-hidden="true" />
        )}
      </button>

      {/* Panel */}
      {open && (
        <section
          id="fleazo-assistant"
          role="dialog"
          aria-label="Fleazo Assistant"
          className={cn(
            "fixed z-[55]",
            "inset-x-0 bottom-0 top-0 md:inset-auto",
            "md:bottom-24 md:right-5",
            "md:w-[400px] md:h-[600px] md:max-h-[80vh]",
            "bg-white text-[var(--color-text-primary)]",
            "md:rounded-xs md:border md:border-[var(--color-border-default)] md:shadow-4",
            "flex flex-col overflow-hidden",
            "animate-fade-in-up"
          )}
        >
          {/* Header */}
          <header className="flex items-center justify-between gap-3 px-6 py-5 border-b border-[var(--color-border-muted)] bg-white">
            <div className="flex items-center gap-3">
              <span className="relative flex w-3 h-3">
                <span className="absolute inset-0 rounded-sm bg-green-500 opacity-75 animate-ping" />
                <span className="relative inline-flex w-3 h-3 rounded-sm bg-green-500" />
              </span>
              <h2 className="font-bold text-xl tracking-tight">
                Fleazo Assistant
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
              className="w-10 h-10 rounded-sm flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-raised)] transition-colors duration-instant"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </header>

          {/* Messages */}
          <div
            ref={scrollerRef}
            className="flex-1 overflow-y-auto px-5 py-5 space-y-3 bg-[var(--color-surface-raised)]"
          >
            {messages.map((msg, i) => (
              <MessageBubble key={i} msg={msg} onClose={() => setOpen(false)} />
            ))}
          </div>

          {/* Suggestion chips */}
          <div className="border-t border-[var(--color-border-muted)] bg-white px-5 pt-4">
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => ask(s)}
                  className="flex-shrink-0 px-4 py-2 rounded-sm bg-white border border-[var(--color-border-default)] text-md font-bold text-[var(--color-text-inverse)] hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)] transition-all duration-instant"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="px-5 pb-5 pt-1 bg-white"
          >
            <div
              data-focus-host
              className={cn(
                "flex items-center gap-2 bg-white rounded-sm px-4 py-1",
                "border border-[var(--color-border-default)]",
                "transition-colors duration-instant",
                "focus-within:border-[var(--color-text-primary)]"
              )}
            >
              <label htmlFor="assistant-input" className="sr-only">
                Ask the Fleazo Assistant
              </label>
              <input
                id="assistant-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything..."
                autoComplete="off"
                className="flex-1 bg-transparent text-md font-medium py-2 outline-none focus:shadow-none focus-visible:shadow-none placeholder:text-[var(--color-text-tertiary)] placeholder:font-normal"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send"
                className="w-10 h-10 rounded-sm flex items-center justify-center text-[var(--color-text-primary)] hover:bg-accent transition-colors duration-instant disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
}

function MessageBubble({ msg, onClose }) {
  const isUser = msg.role === "user";
  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] px-5 py-3 rounded-xs leading-relaxed",
          "text-md font-medium",
          isUser
            ? "bg-[var(--color-text-primary)] text-white rounded-br-sm"
            : "bg-white text-[var(--color-text-primary)] border border-[var(--color-border-muted)] rounded-bl-sm"
        )}
      >
        <p className={isUser ? "text-white" : "text-[var(--color-text-primary)]"}>
          {msg.text}
        </p>
        {!isUser && msg.results?.length > 0 && (
          <ul className="mt-3 space-y-2">
            {msg.results.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/profile/${r.slug}`}
                  onClick={onClose}
                  className="block p-3 rounded-xs bg-[var(--color-surface-raised)] hover:bg-[var(--color-border-muted)] border border-[var(--color-border-muted)] hover:border-accent transition-all duration-instant"
                >
                  <span className="block font-bold text-md text-[var(--color-text-primary)] truncate">
                    {r.name}
                  </span>
                  <span className="block text-xs font-normal text-[var(--color-text-tertiary)] truncate">
                    {r.category} • {r.city}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
