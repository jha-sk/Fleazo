"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 65;
const TYPE_JITTER_MS = 35;
const DELETE_MS = 28;
const HOLD_MS = 2200;
const NEXT_MS = 380;

export function useTypewriterPlaceholder(phrases, { active = true } = {}) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (!active || phrases.length === 0) return;

    let phaseIdx = 0;
    let charIdx = 0;
    let mode = "typing";
    let timer;
    let cancelled = false;

    function tick() {
      if (cancelled) return;
      const phrase = phrases[phaseIdx];

      if (mode === "typing") {
        if (charIdx < phrase.length) {
          charIdx += 1;
          setText(phrase.slice(0, charIdx));
          timer = setTimeout(tick, TYPE_MS + Math.random() * TYPE_JITTER_MS);
        } else {
          mode = "holding";
          timer = setTimeout(tick, HOLD_MS);
        }
      } else if (mode === "holding") {
        mode = "deleting";
        timer = setTimeout(tick, 0);
      } else if (mode === "deleting") {
        if (charIdx > 0) {
          charIdx -= 1;
          setText(phrase.slice(0, charIdx));
          timer = setTimeout(tick, DELETE_MS);
        } else {
          phaseIdx = (phaseIdx + 1) % phrases.length;
          mode = "typing";
          timer = setTimeout(tick, NEXT_MS);
        }
      }
    }

    setText("");
    timer = setTimeout(tick, 500);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [phrases, active]);

  return text;
}
