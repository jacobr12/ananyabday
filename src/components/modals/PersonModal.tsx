"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import type { PersonData } from "@/content/rooms";

export function PersonModal({ person }: { person: PersonData }) {
  const hasLetter = !!person.letter?.trim();
  const isLandscape = person.photoLayout === "landscape";

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center">
        <div
          className="relative bg-white p-3 shadow-md"
          style={{
            transform: "rotate(-1.5deg)",
            boxShadow: "0 8px 28px rgba(60,50,40,0.16)",
            paddingBottom: isLandscape ? "2.75rem" : "2.5rem",
          }}
        >
          <div
            className="absolute -top-2.5 left-1/2 h-7 w-12 -translate-x-1/2 opacity-75"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,240,0.95), rgba(255,255,240,0.5))",
              clipPath: "polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)",
            }}
            aria-hidden
          />
          <div
            className={
              isLandscape
                ? "relative aspect-[3/2] w-[min(100%,32rem)] overflow-hidden bg-[#e8e0d4] md:w-[34rem]"
                : "relative h-80 w-64 overflow-hidden bg-[#e8e0d4] md:h-[22rem] md:w-72"
            }
          >
            <Image
              src={person.photo}
              alt={`Ananya and ${person.name}`}
              fill
              className={isLandscape ? "object-contain" : "object-cover"}
              sizes={isLandscape ? "540px" : "288px"}
            />
          </div>
        </div>
        {person.caption && (
          <p className="font-handwriting mt-5 text-center text-lg text-[#5c4a3a] md:text-xl">
            {person.caption}
          </p>
        )}
      </div>

      {hasLetter && (
        <div className="relative rounded-sm bg-[#fffef8] p-6 shadow-inner md:p-8">
          {person.sealColor && (
            <div
              className="absolute right-4 top-4 h-9 w-9 rounded-full border-2 border-[#5c4a3a]/15 shadow-inner"
              style={{ backgroundColor: person.sealColor }}
              aria-hidden
            />
          )}
          <div
            className="prose prose-sm max-w-none text-[#5c4a3a] prose-p:leading-7 prose-em:text-[#d97757]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(transparent, transparent 26px, #e8e0d4 27px)",
              backgroundSize: "100% 27px",
            }}
          >
            <ReactMarkdown>{person.letter!}</ReactMarkdown>
          </div>
          {person.signoff && (
            <p className="font-handwriting mt-6 text-lg text-[#5c4a3a]">
              {person.signoff}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
