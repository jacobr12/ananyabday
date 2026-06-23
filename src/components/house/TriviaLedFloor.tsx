import type { HouseRoom } from "@/content/rooms";

/** Flowing LED strip floor for the trivia room */
export function TriviaLedFloor({ room }: { room: HouseRoom }) {
  const { x, y, w, h } = room.bounds;
  const floorY = y + h - 44;
  const strips = 6;
  const stripH = 5;
  const gap = 3;

  return (
    <g className="trivia-led-floor" aria-hidden>
      <rect
        x={x + 12}
        y={y + 72}
        width={w - 24}
        height={h - 44 - 72}
        rx={8}
        fill="#0d1520"
        opacity="0.35"
      />
      {Array.from({ length: strips }).map((_, i) => {
        const sy = floorY - 28 - i * (stripH + gap);
        return (
          <g key={i}>
            <rect
              x={x + 20}
              y={sy}
              width={w - 40}
              height={stripH}
              rx={2}
              className={`trivia-led-strip trivia-led-strip-${i % 3}`}
              fill="#1a2a3a"
            />
            {Array.from({ length: 18 }).map((__, j) => (
              <circle
                key={j}
                cx={x + 28 + j * ((w - 56) / 17)}
                cy={sy + stripH / 2}
                r={1.8}
                className={`trivia-led-dot trivia-led-dot-${(i + j) % 4}`}
                fill={j % 3 === 0 ? "#7ee8fa" : j % 3 === 1 ? "#f4a0b0" : "#c4f080"}
                opacity="0.85"
              />
            ))}
          </g>
        );
      })}
      <text
        x={x + w / 2}
        y={y + h / 2 - 8}
        textAnchor="middle"
        fontSize="11"
        fill="#7ee8fa"
        opacity="0.55"
        fontFamily="var(--font-body), sans-serif"
        letterSpacing="0.12em"
      >
        PRESS SPACE FOR TRIVIA
      </text>
    </g>
  );
}
