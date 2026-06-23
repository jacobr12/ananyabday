import {
  GRASS_HEIGHT,
  HOUSE_HEIGHT,
  HOUSE_WIDTH,
  ROOF_HEIGHT,
} from "@/lib/constants";

export function HouseExterior() {
  const houseTop = ROOF_HEIGHT;
  const grassTop = ROOF_HEIGHT + HOUSE_HEIGHT;

  return (
    <g>
      <rect x={-24} y={grassTop} width={HOUSE_WIDTH + 48} height={GRASS_HEIGHT} fill="#7a9868" />
      <rect x={-24} y={grassTop + 8} width={HOUSE_WIDTH + 48} height={GRASS_HEIGHT - 8} fill="#8aa87a" />

      <g transform={`translate(48, ${grassTop - 4})`}>
        <rect x="0" y="20" width="10" height="28" fill="#6a5a48" rx="2" />
        <circle cx="5" cy="14" r="22" fill="#6a9860" opacity="0.85" />
        <circle cx="-4" cy="18" r="14" fill="#7aa870" opacity="0.7" />
        <circle cx="14" cy="16" r="12" fill="#5a8850" opacity="0.7" />
      </g>

      <ellipse
        cx={HOUSE_WIDTH / 2}
        cy={grassTop + 6}
        rx={HOUSE_WIDTH / 2 - 30}
        ry={10}
        fill="rgba(60,50,40,0.1)"
      />

      <path
        d={`M ${HOUSE_WIDTH / 2} ${houseTop - 8}
            Q ${HOUSE_WIDTH / 2} ${houseTop - 16} ${HOUSE_WIDTH / 2 - 4} ${houseTop - 12}
            L 8 ${houseTop + 10}
            Q ${HOUSE_WIDTH / 2} ${houseTop + 6} ${HOUSE_WIDTH - 8} ${houseTop + 10}
            Z`}
        fill="url(#roof-left)"
        stroke="#5c4a3a"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d={`M ${HOUSE_WIDTH / 2} ${houseTop - 8} L ${HOUSE_WIDTH - 8} ${houseTop + 10} L ${HOUSE_WIDTH / 2} ${houseTop + 8} Z`}
        fill="url(#roof-right)"
        opacity="0.85"
      />
      <rect x={0} y={houseTop + 8} width={HOUSE_WIDTH} height={5} fill="#5c4a3a" opacity="0.12" />
      <rect x={0} y={houseTop + 10} width={HOUSE_WIDTH} height={4} fill="#8b6914" stroke="#5c4a3a" strokeWidth="1" />

      <rect x={HOUSE_WIDTH - 120} y={houseTop - 4} width={24} height={32} fill="#7a6a58" stroke="#5c4a3a" strokeWidth="1.5" rx="1" />
      <ellipse cx={HOUSE_WIDTH - 108} cy={houseTop - 8} rx="5" ry="7" fill="rgba(220,220,220,0.35)" className="chimney-smoke" />

      {[120, 280, 520, 780, 900].map((fx, i) => (
        <circle
          key={i}
          cx={fx}
          cy={grassTop + 14 + (i % 3) * 3}
          r="3"
          fill={i % 2 ? "#f4a0b0" : "#f4d03f"}
          opacity="0.75"
          className="garden-flower"
        />
      ))}
    </g>
  );
}
