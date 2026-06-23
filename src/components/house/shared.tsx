export function RoomWindow({
  x,
  y,
  w = 56,
  h = 48,
  skyClass = "sky-cycle-golden",
  showMoon = false,
  showRain = false,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  skyClass?: string;
  showMoon?: boolean;
  showRain?: boolean;
}) {
  const cx = x + w / 2;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="#c4a882" stroke="#5c4a3a" strokeWidth="2" rx="2" />
      <rect
        x={x + 4}
        y={y + 4}
        width={w - 8}
        height={h - 8}
        className={skyClass}
        rx="1"
      />
      {showMoon && (
        <circle cx={x + w - 14} cy={y + 14} r="6" fill="#f4f0e0" opacity="0.9" />
      )}
      {showRain && (
        <>
          <line x1={x + 12} y1={y + 12} x2={x + 10} y2={y + 22} stroke="#7a9cb8" strokeWidth="1" opacity="0.5" />
          <line x1={x + 24} y1={y + 10} x2={x + 22} y2={y + 20} stroke="#7a9cb8" strokeWidth="1" opacity="0.5" />
          <line x1={x + 36} y1={y + 14} x2={x + 34} y2={y + 24} stroke="#7a9cb8" strokeWidth="1" opacity="0.5" />
        </>
      )}
      <line x1={cx} y1={y + 4} x2={cx} y2={y + h - 4} stroke="#5c4a3a" strokeWidth="1" opacity="0.35" />
      <g className="curtain-sway" style={{ transformOrigin: `${x + 6}px ${y + 4}px` }}>
        <path
          d={`M${x + 4} ${y + 4} Q${x + 10} ${y + h / 2} ${x + 4} ${y + h - 4}`}
          fill="#d97757"
          opacity="0.45"
        />
      </g>
      <g className="curtain-sway" style={{ transformOrigin: `${x + w - 6}px ${y + 4}px` }}>
        <path
          d={`M${x + w - 4} ${y + 4} Q${x + w - 10} ${y + h / 2} ${x + w - 4} ${y + h - 4}`}
          fill="#8aa87a"
          opacity="0.4"
        />
      </g>
      {/* Dust motes */}
      <circle cx={x + 20} cy={y + 20} r="1" fill="#fff" opacity="0.35" className="dust-mote dust-1" />
      <circle cx={x + 34} cy={y + 28} r="0.8" fill="#fff" opacity="0.3" className="dust-mote dust-2" />
      <circle cx={x + 26} cy={y + 36} r="1.2" fill="#fff" opacity="0.25" className="dust-mote dust-3" />
    </g>
  );
}

export function FloorStrip({
  x,
  y,
  w,
  h,
  patternId = "floor-wood",
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  patternId?: string;
}) {
  return <rect x={x} y={y} width={w} height={h} fill={`url(#${patternId})`} />;
}

export function RoomLabel({ x, y, name }: { x: number; y: number; name: string }) {
  return (
    <text
      x={x}
      y={y}
      fill="#5c4a3a"
      fontSize={12}
      fontStyle="italic"
      opacity={0.5}
      fontFamily="var(--font-display), Georgia, serif"
    >
      {name}
    </text>
  );
}

export function WallDivider({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3d3228" strokeWidth={3.5} strokeLinecap="square" />
  );
}
