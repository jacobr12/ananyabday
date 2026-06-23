import type { ReactNode } from "react";

/** Hand-drawn item icons — 2px strokes, flat fills, soft shadows */

type IconProps = { size?: number; className?: string };

const S = 2;

export function ItemIcon({
  id,
  size = 36,
  className,
}: {
  id: string;
  size?: number;
  className?: string;
}) {
  const icons: Record<string, (props: IconProps) => ReactNode> = {
    book: BookIcon,
    music: MusicIcon,
    food: FoodIcon,
    film: FilmIcon,
    place: PlaceIcon,
    balloon: BalloonIcon,
    trophy: TrophyIcon,
    globe: GlobeIcon,
    cassette: CassetteIcon,
    stickers: StickersIcon,
    pim: PimIcon,
    "virgin-suicides": VirginSuicidesIcon,
    "olivia-dean": OliviaDeanIcon,
    fleabag: FleabagIcon,
    "sarah-kinsley": SarahKinsleyIcon,
    "ella-langley": EllaLangleyIcon,
    houston: HoustonIcon,
    heart: HeartIcon,
    tree: TreeIcon,
    person: PersonIcon,
    lamp: LampIcon,
    polaroid: PolaroidIcon,
    plate: PlateIcon,
    coffee: CoffeeIcon,
    cookie: CookieIcon,
    couch: CouchIcon,
    plant: PlantIcon,
    frame: FrameIcon,
    diploma: DiplomaIcon,
    notebook: NotebookIcon,
    "desk-lamp": DeskLampIcon,
    horizon: HorizonIcon,
    blossom: BlossomIcon,
    stone: StoneIcon,
    none: () => null,
  };
  const Icon = icons[id] ?? BookIcon;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className={className}
      aria-hidden
      style={{ filter: "drop-shadow(0 1px 2px rgba(92,74,58,0.15))" }}
    >
      <Icon size={size} />
    </svg>
  );
}

function BookIcon() {
  return (
    <>
      <rect x="8" y="6" width="20" height="24" rx="2" fill="#e8d4c4" stroke="#5c4a3a" strokeWidth={S} />
      <line x1="18" y1="6" x2="18" y2="30" stroke="#5c4a3a" strokeWidth={S} />
      <path d="M10 12h6M10 16h5" stroke="#d97757" strokeWidth="1.5" strokeLinecap="round" />
    </>
  );
}

function LampIcon() {
  return (
    <>
      <path d="M18 8 L12 20 h12 Z" fill="#f4d03f" stroke="#5c4a3a" strokeWidth={S} />
      <rect x="16" y="20" width="4" height="8" fill="#8b7355" stroke="#5c4a3a" strokeWidth={S} />
      <ellipse cx="18" cy="30" rx="6" ry="2" fill="#5c4a3a" opacity="0.2" />
    </>
  );
}

function PolaroidIcon() {
  return (
    <>
      <rect x="7" y="5" width="22" height="26" rx="2" fill="#fffef8" stroke="#5c4a3a" strokeWidth={S} />
      <rect x="10" y="8" width="16" height="14" fill="#8aa87a" opacity="0.5" stroke="#5c4a3a" strokeWidth="1" />
      <rect x="10" y="24" width="16" height="4" fill="#e8ddd0" />
    </>
  );
}

function PlateIcon() {
  return (
    <>
      <ellipse cx="18" cy="22" rx="14" ry="5" fill="#f5f0e8" stroke="#5c4a3a" strokeWidth={S} />
      <ellipse cx="18" cy="18" rx="10" ry="4" fill="#d97757" opacity="0.6" stroke="#5c4a3a" strokeWidth="1.5" />
    </>
  );
}

function CoffeeIcon() {
  return (
    <>
      <path d="M10 14 h14 v12 a4 4 0 0 1-4 4 h-6 a4 4 0 0 1-4-4 V14" fill="#fffef8" stroke="#5c4a3a" strokeWidth={S} />
      <path d="M24 16 h4 a3 3 0 0 1 0 6 h-4" fill="none" stroke="#5c4a3a" strokeWidth={S} />
      <ellipse cx="17" cy="10" rx="2" ry="3" fill="#fff" opacity="0.5" className="steam-dot-1" />
      <ellipse cx="20" cy="8" rx="2" ry="3" fill="#fff" opacity="0.4" className="steam-dot-2" />
      <ellipse cx="14" cy="9" rx="1.5" ry="2.5" fill="#fff" opacity="0.35" className="steam-dot-3" />
    </>
  );
}

function CookieIcon() {
  return (
    <>
      <circle cx="18" cy="18" r="12" fill="#c4a574" stroke="#5c4a3a" strokeWidth={S} />
      <circle cx="14" cy="15" r="2" fill="#5c4a3a" opacity="0.4" />
      <circle cx="22" cy="17" r="1.5" fill="#5c4a3a" opacity="0.4" />
      <circle cx="17" cy="22" r="1.8" fill="#5c4a3a" opacity="0.4" />
    </>
  );
}

function CouchIcon() {
  return (
    <>
      <rect x="5" y="16" width="26" height="12" rx="3" fill="#7a9cb8" stroke="#5c4a3a" strokeWidth={S} />
      <rect x="5" y="12" width="8" height="16" rx="2" fill="#6a8ca8" stroke="#5c4a3a" strokeWidth={S} />
      <rect x="23" y="12" width="8" height="16" rx="2" fill="#6a8ca8" stroke="#5c4a3a" strokeWidth={S} />
    </>
  );
}

function PlantIcon() {
  return (
    <>
      <rect x="14" y="22" width="8" height="8" rx="1" fill="#c4a882" stroke="#5c4a3a" strokeWidth={S} />
      <ellipse cx="18" cy="14" rx="10" ry="8" fill="#8aa87a" stroke="#5c4a3a" strokeWidth={S} className="plant-leaves" />
      <path d="M18 22 V14" stroke="#5c4a3a" strokeWidth="1.5" />
    </>
  );
}

function FrameIcon() {
  return (
    <>
      <rect x="6" y="6" width="24" height="20" rx="1" fill="#c4a882" stroke="#5c4a3a" strokeWidth={S} />
      <rect x="9" y="9" width="18" height="14" fill="#d4e4f0" stroke="#5c4a3a" strokeWidth="1" />
      <circle cx="18" cy="16" r="4" fill="#f4c4a0" stroke="#5c4a3a" strokeWidth="1" />
    </>
  );
}

function DiplomaIcon() {
  return (
    <>
      <rect x="8" y="8" width="20" height="16" rx="1" fill="#fffef8" stroke="#5c4a3a" strokeWidth={S} />
      <path d="M18 24 v6 l-4-2 4 2 4-2" fill="#8c1515" stroke="#5c4a3a" strokeWidth="1" />
      <line x1="12" y1="14" x2="24" y2="14" stroke="#8c1515" strokeWidth="1.5" />
    </>
  );
}

function NotebookIcon() {
  return (
    <>
      <rect x="9" y="5" width="18" height="26" rx="2" fill="#3d4f5f" stroke="#5c4a3a" strokeWidth={S} />
      <line x1="14" y1="5" x2="14" y2="31" stroke="#fdf6e9" strokeWidth="1" opacity="0.5" />
      <line x1="17" y1="12" x2="24" y2="12" stroke="#fdf6e9" strokeWidth="1" opacity="0.4" />
    </>
  );
}

function DeskLampIcon() {
  return (
    <>
      <path d="M8 28 h20" stroke="#5c4a3a" strokeWidth={S} strokeLinecap="round" />
      <path d="M18 28 V16" stroke="#5c4a3a" strokeWidth={S} />
      <path d="M10 16 Q18 6 26 16" fill="#f4d03f" stroke="#5c4a3a" strokeWidth={S} className="lamp-glow" />
    </>
  );
}

function HorizonIcon() {
  return (
    <>
      <rect x="6" y="8" width="24" height="18" rx="2" fill="#87b8d4" stroke="#5c4a3a" strokeWidth={S} />
      <circle cx="24" cy="14" r="5" fill="#f4d03f" stroke="#d97757" strokeWidth="1" />
      <path d="M6 22 Q18 16 30 22" fill="#d97757" opacity="0.5" />
    </>
  );
}

function BlossomIcon() {
  return (
    <>
      <rect x="13" y="22" width="10" height="8" fill="#a08060" stroke="#5c4a3a" strokeWidth={S} rx="1" />
      <circle cx="18" cy="14" r="5" fill="#f4a0b0" stroke="#5c4a3a" strokeWidth={S} />
      <circle cx="14" cy="18" r="4" fill="#f8c0d0" stroke="#5c4a3a" strokeWidth="1" />
      <circle cx="22" cy="18" r="4" fill="#f8c0d0" stroke="#5c4a3a" strokeWidth="1" />
    </>
  );
}

function StoneIcon() {
  return (
    <>
      <ellipse cx="18" cy="22" rx="12" ry="6" fill="#a09888" stroke="#5c4a3a" strokeWidth={S} />
      <ellipse cx="16" cy="20" rx="8" ry="4" fill="#b8b0a0" stroke="#5c4a3a" strokeWidth="1" />
    </>
  );
}

function MusicIcon() {
  return (
    <>
      <circle cx="14" cy="24" r="5" fill="#7a9cb8" stroke="#5c4a3a" strokeWidth={S} />
      <circle cx="26" cy="20" r="5" fill="#d97757" stroke="#5c4a3a" strokeWidth={S} />
      <path d="M18 24 V10 M30 20 V8" stroke="#5c4a3a" strokeWidth="2" />
    </>
  );
}

function FoodIcon() {
  return (
    <>
      <ellipse cx="18" cy="24" rx="14" ry="5" fill="#f5f0e8" stroke="#5c4a3a" strokeWidth={S} />
      <path d="M8 20 Q18 10 28 20" fill="#d97757" stroke="#5c4a3a" strokeWidth="1.5" />
      <circle cx="22" cy="16" r="3" fill="#8aa87a" stroke="#5c4a3a" strokeWidth="1" />
    </>
  );
}

function FilmIcon() {
  return (
    <>
      <rect x="6" y="10" width="24" height="18" rx="2" fill="#3d4f5f" stroke="#5c4a3a" strokeWidth={S} />
      <polygon points="16,14 16,24 24,19" fill="#f4d03f" stroke="#5c4a3a" strokeWidth="1" />
      <circle cx="10" cy="14" r="2" fill="#5c4a3a" opacity="0.4" />
      <circle cx="10" cy="24" r="2" fill="#5c4a3a" opacity="0.4" />
    </>
  );
}

function PlaceIcon() {
  return (
    <>
      <path d="M18 6 C12 6 10 14 10 18 C10 24 18 30 18 30 C18 30 26 24 26 18 C26 14 24 6 18 6 Z" fill="#d97757" stroke="#5c4a3a" strokeWidth={S} />
      <circle cx="18" cy="17" r="4" fill="#8aa87a" stroke="#5c4a3a" strokeWidth="1" />
    </>
  );
}

function BalloonIcon() {
  return (
    <>
      <ellipse cx="18" cy="14" rx="10" ry="12" fill="#f4a0b0" stroke="#5c4a3a" strokeWidth={S} />
      <text x="18" y="18" textAnchor="middle" fontSize="10" fill="#5c4a3a" fontWeight="bold">?</text>
      <line x1="18" y1="26" x2="18" y2="32" stroke="#5c4a3a" strokeWidth="1.5" />
    </>
  );
}

function TrophyIcon() {
  return (
    <>
      <path d="M10 12 h16 v8 a6 6 0 0 1-6 6 h-4 a6 6 0 0 1-6-6 v-8" fill="#f4d03f" stroke="#5c4a3a" strokeWidth={S} />
      <rect x="14" y="26" width="8" height="4" fill="#8b7355" stroke="#5c4a3a" strokeWidth="1" />
      <rect x="12" y="30" width="12" height="3" fill="#5c4a3a" rx="1" />
    </>
  );
}

function GlobeIcon() {
  return (
    <>
      <circle cx="18" cy="18" r="12" fill="#7a9cb8" stroke="#5c4a3a" strokeWidth={S} />
      <ellipse cx="18" cy="18" rx="12" ry="5" fill="none" stroke="#5c4a3a" strokeWidth="1" opacity="0.4" />
      <line x1="6" y1="18" x2="30" y2="18" stroke="#5c4a3a" strokeWidth="1" opacity="0.4" />
      <path d="M18 6 Q24 18 18 30 Q12 18 18 6" fill="none" stroke="#8aa87a" strokeWidth="1" opacity="0.5" />
    </>
  );
}

function CassetteIcon() {
  return (
    <>
      <rect x="6" y="12" width="24" height="16" rx="2" fill="#3d3d38" stroke="#5c4a3a" strokeWidth={S} />
      <rect x="9" y="15" width="18" height="8" fill="#5c4a3a" opacity="0.3" />
      <circle cx="13" cy="19" r="3" fill="#c4a882" stroke="#5c4a3a" strokeWidth="1" />
      <circle cx="23" cy="19" r="3" fill="#c4a882" stroke="#5c4a3a" strokeWidth="1" />
    </>
  );
}

function StickersIcon() {
  return (
    <>
      <rect x="8" y="10" width="10" height="10" rx="2" fill="#f4a0b0" stroke="#5c4a3a" strokeWidth="1.5" transform="rotate(-8 13 15)" />
      <rect x="18" y="8" width="10" height="10" rx="2" fill="#8aa87a" stroke="#5c4a3a" strokeWidth="1.5" transform="rotate(6 23 13)" />
      <rect x="14" y="18" width="10" height="10" rx="2" fill="#f4d03f" stroke="#5c4a3a" strokeWidth="1.5" transform="rotate(-4 19 23)" />
    </>
  );
}

function PimIcon() {
  return (
    <>
      <circle cx="18" cy="18" r="12" fill="#f4d03f" stroke="#5c4a3a" strokeWidth={S} />
      <circle cx="14" cy="16" r="2" fill="#5c4a3a" />
      <circle cx="22" cy="16" r="2" fill="#5c4a3a" />
      <path d="M12 22 Q18 27 24 22" fill="none" stroke="#5c4a3a" strokeWidth="2" strokeLinecap="round" />
    </>
  );
}

function VirginSuicidesIcon() {
  return (
    <>
      <rect x="7" y="6" width="22" height="24" rx="2" fill="#f8efe6" stroke="#5c4a3a" strokeWidth={S} />
      <circle cx="14" cy="14" r="4" fill="#e07a6a" stroke="#5c4a3a" strokeWidth="1" />
      <circle cx="22" cy="18" r="3.5" fill="#e07a6a" stroke="#5c4a3a" strokeWidth="1" />
      <path d="M12 22 Q18 26 24 22" fill="none" stroke="#e07a6a" strokeWidth="1.5" />
      <line x1="18" y1="10" x2="18" y2="28" stroke="#5c4a3a" strokeWidth="1" opacity="0.35" />
    </>
  );
}

function OliviaDeanIcon() {
  return (
    <>
      <circle cx="18" cy="18" r="12" fill="#2a2420" stroke="#5c4a3a" strokeWidth={S} />
      <circle cx="18" cy="18" r="5" fill="#d4a574" stroke="#5c4a3a" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="1.5" fill="#5c4a3a" />
      <rect x="16" y="4" width="4" height="3" rx="1" fill="#8b7355" />
    </>
  );
}

function FleabagIcon() {
  return (
    <>
      <rect x="8" y="10" width="20" height="16" rx="2" fill="#2a2420" stroke="#5c4a3a" strokeWidth={S} />
      <rect x="11" y="13" width="14" height="10" fill="#fdf6e9" opacity="0.9" />
      <path d="M14 18 h8 M14 21 h5" stroke="#5c4a3a" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <text x="18" y="19" textAnchor="middle" fontSize="7" fill="#d97757" fontWeight="bold">
        fb
      </text>
    </>
  );
}

function SarahKinsleyIcon() {
  return (
    <>
      <circle cx="18" cy="18" r="11" fill="#7a9cb8" stroke="#5c4a3a" strokeWidth={S} />
      <circle cx="14" cy="24" r="4" fill="#d97757" stroke="#5c4a3a" strokeWidth="1" />
      <circle cx="22" cy="20" r="3.5" fill="#f4a0b0" stroke="#5c4a3a" strokeWidth="1" />
      <path d="M10 10 Q18 6 26 10" fill="none" stroke="#fdf6e9" strokeWidth="1.5" strokeLinecap="round" />
    </>
  );
}

function EllaLangleyIcon() {
  return (
    <>
      <path
        d="M18 5 L20 12 L27 12 L21 16 L23 23 L18 19 L13 23 L15 16 L9 12 L16 12 Z"
        fill="#d97757"
        stroke="#5c4a3a"
        strokeWidth="1"
      />
      <rect x="10" y="26" width="16" height="5" rx="1" fill="#8b7355" stroke="#5c4a3a" strokeWidth="1" />
    </>
  );
}

function HoustonIcon() {
  return (
    <>
      <rect x="5" y="8" width="26" height="18" rx="2" fill="#7a5a8a" stroke="#5c4a3a" strokeWidth={S} />
      <rect x="8" y="18" width="5" height="8" fill="#3d4f5f" stroke="#5c4a3a" strokeWidth="1" />
      <rect x="15" y="14" width="6" height="12" fill="#3d4f5f" stroke="#5c4a3a" strokeWidth="1" />
      <rect x="23" y="16" width="5" height="10" fill="#3d4f5f" stroke="#5c4a3a" strokeWidth="1" />
      <path d="M5 14 Q18 8 31 12" fill="none" stroke="#f4a060" strokeWidth="2" opacity="0.8" />
      <circle cx="26" cy="11" r="3" fill="#f4d03f" stroke="#d97757" strokeWidth="1" />
    </>
  );
}

function HeartIcon() {
  return (
    <>
      <path
        d="M18 28 C18 28 8 22 8 15 C8 11 11 8 15 8 C16.5 8 18 9 18 10.5 C18 9 19.5 8 21 8 C25 8 28 11 28 15 C28 22 18 28 18 28 Z"
        fill="#f4a0b0"
        stroke="#5c4a3a"
        strokeWidth={S}
      />
    </>
  );
}

function TreeIcon() {
  return (
    <>
      <rect x="16" y="24" width="4" height="8" fill="#8b7355" stroke="#5c4a3a" strokeWidth="1" />
      <circle cx="18" cy="14" r="10" fill="#8c1515" stroke="#5c4a3a" strokeWidth={S} />
      <circle cx="14" cy="18" r="6" fill="#8c1515" stroke="#5c4a3a" strokeWidth="1" opacity="0.85" />
      <circle cx="22" cy="18" r="6" fill="#8c1515" stroke="#5c4a3a" strokeWidth="1" opacity="0.85" />
    </>
  );
}

function PersonIcon() {
  return (
    <>
      <rect x="8" y="8" width="20" height="22" rx="2" fill="#fffef8" stroke="#5c4a3a" strokeWidth={S} />
      <rect x="11" y="11" width="14" height="12" fill="#c68b5e" opacity="0.5" />
      <circle cx="14" cy="28" r="2" fill="#d97757" />
      <circle cx="22" cy="28" r="2" fill="#8aa87a" />
    </>
  );
}
