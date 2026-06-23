"use client";

import { useEffect, useState } from "react";
import type { TriviaQuestion } from "@/content/triviaQuestions";

export function TriviaModal({ trivia }: { trivia: TriviaQuestion }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setRevealed(false);
  }, [trivia.id]);

  const categoryLabel = trivia.category === "pop" ? "pop culture" : "geography";

  return (
    <div className="py-1">
      <div className="overflow-hidden rounded-2xl border border-[#7ee8fa]/25 bg-[#0d1520] p-1 shadow-[0_0_24px_rgba(126,232,250,0.12)]">
        <div className="rounded-xl bg-[#111c28] px-4 py-5">
          <div className="mb-4 flex items-center justify-between gap-2">
            <span className="rounded-full border border-[#7ee8fa]/30 bg-[#7ee8fa]/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-[#7ee8fa]">
              {categoryLabel}
            </span>
            <span className="trivia-led-pulse text-[10px] tracking-widest text-[#f4a0b0]/80">
              ✦ trivia ✦
            </span>
          </div>

          <p className="font-display text-xl leading-snug text-[#e8f4f8] md:text-2xl">
            {trivia.question}
          </p>

          <button
            type="button"
            onClick={() => setRevealed((v) => !v)}
            className="mt-6 w-full rounded-xl border border-[#c4f080]/25 bg-[#c4f080]/10 px-4 py-3 text-left transition hover:bg-[#c4f080]/15"
          >
            <span className="text-[10px] font-medium uppercase tracking-widest text-[#c4f080]/70">
              {revealed ? "answer" : "tap to reveal"}
            </span>
            {revealed && (
              <p className="font-handwriting mt-1 text-2xl text-[#c4f080] md:text-3xl">
                {trivia.answer}
              </p>
            )}
          </button>
        </div>
      </div>
      <p className="mt-4 text-center font-body text-xs text-[#5c4a3a]/45">
        walk somewhere else · press space again for another question
      </p>
    </div>
  );
}
