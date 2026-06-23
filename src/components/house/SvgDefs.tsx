export function SvgDefs() {
  return (
    <defs>
      <pattern id="floor-wood" width="40" height="12" patternUnits="userSpaceOnUse">
        <rect width="40" height="12" fill="#c4a574" />
        <line x1="0" y1="6" x2="40" y2="6" stroke="#a08050" strokeWidth="0.5" opacity="0.35" />
      </pattern>

      <pattern id="floor-wood-warm" width="40" height="12" patternUnits="userSpaceOnUse">
        <rect width="40" height="12" fill="#b89868" />
        <line x1="0" y1="6" x2="40" y2="6" stroke="#987850" strokeWidth="0.5" opacity="0.35" />
      </pattern>

      <linearGradient id="roof-left" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#a84e3c" />
        <stop offset="100%" stopColor="#c4684a" />
      </linearGradient>
      <linearGradient id="roof-right" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#c4684a" />
        <stop offset="100%" stopColor="#d47858" />
      </linearGradient>

      {/* Window sky cycles — 60s */}
      <linearGradient id="sky-night" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a2840" />
        <stop offset="100%" stopColor="#2a3858" />
      </linearGradient>
      <linearGradient id="sky-morning" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#a8d4f0" />
        <stop offset="100%" stopColor="#f0e8d0" />
      </linearGradient>
      <linearGradient id="sky-rain" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8898a8" />
        <stop offset="100%" stopColor="#b8c4d0" />
      </linearGradient>
      <linearGradient id="sky-golden" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f4c878" />
        <stop offset="100%" stopColor="#d97757" />
      </linearGradient>

      <radialGradient id="lamp-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f4d03f" stopOpacity="0.28" />
        <stop offset="100%" stopColor="#f4d03f" stopOpacity="0" />
      </radialGradient>

      <radialGradient id="door-light" cx="50%" cy="100%" r="55%">
        <stop offset="0%" stopColor="#f4d03f" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#f4d03f" stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}
