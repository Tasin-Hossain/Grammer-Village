// Small hand-built SVG illustrations. No images to download, so they load instantly.
const ink = "#12231B";

export function Bunting({ className = "" }: { className?: string }) {
  const colors = ["#B3202A", "#F5C842", "#1E8A57", "#F4B6B0"];
  return (
    <svg aria-hidden className={className} width="100%" height="44" preserveAspectRatio="none">
      <defs>
        <pattern id="flags" width="176" height="44" patternUnits="userSpaceOnUse">
          <path d="M0 6 Q88 16 176 6" fill="none" stroke={ink} strokeOpacity=".35" strokeWidth="1.5" />
          {colors.map((c, i) => (
            <polygon key={i} points={`${10 + i * 44},8 ${40 + i * 44},10 ${25 + i * 44},38`} fill={c} />
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="44" fill="url(#flags)" />
    </svg>
  );
}

export function Skyline({ className = "" }: { className?: string }) {
  const houses = [
    { x: 40, w: 90, h: 58, c: "#B3202A" }, { x: 180, w: 70, h: 46, c: "#1E8A57" },
    { x: 300, w: 100, h: 64, c: "#F5C842" }, { x: 470, w: 80, h: 50, c: "#B3202A" },
    { x: 930, w: 90, h: 56, c: "#1E8A57" }, { x: 1070, w: 100, h: 66, c: "#B3202A" },
    { x: 1220, w: 80, h: 48, c: "#F5C842" }, { x: 1340, w: 80, h: 58, c: "#1E8A57" },
  ];
  const trees = [150, 270, 430, 590, 870, 1030, 1190, 1320];
  const g = 150; // ground line
  return (
    <svg aria-hidden viewBox="0 0 1440 170" preserveAspectRatio="xMidYMax slice" className={className}>
      <path d="M0 118 C180 66 380 112 600 88 S1010 56 1210 98 S1400 92 1440 100 V170 H0Z" fill="#D3E8DA" />
      {trees.map((x, i) => (
        <g key={i}>
          <rect x={x - 3} y={g - 26} width="6" height="26" fill="#6B4F2A" />
          <circle cx={x} cy={g - 36} r={i % 2 ? 20 : 24} fill="#1E8A57" />
          <circle cx={x - 8} cy={g - 30} r="12" fill="#2BA56B" />
        </g>
      ))}
      {houses.map((h, i) => (
        <g key={i}>
          <rect x={h.x} y={g - h.h} width={h.w} height={h.h} fill="#fff" stroke={ink} strokeWidth="2" />
          <polygon points={`${h.x - 8},${g - h.h} ${h.x + h.w / 2},${g - h.h - 28} ${h.x + h.w + 8},${g - h.h}`} fill={h.c} stroke={ink} strokeWidth="2" strokeLinejoin="round" />
          <rect x={h.x + 12} y={g - h.h + 14} width="16" height="16" fill="#F5C842" stroke={ink} strokeWidth="1.5" />
          <rect x={h.x + h.w - 30} y={g - 32} width="18" height="32" fill="#0A4D32" />
        </g>
      ))}
      {/* the school */}
      <g>
        <rect x="640" y={g - 78} width="170" height="78" fill="#fff" stroke={ink} strokeWidth="2" />
        <polygon points={`630,${g - 78} 725,${g - 118} 820,${g - 78}`} fill="#0A4D32" stroke={ink} strokeWidth="2" strokeLinejoin="round" />
        <rect x="705" y={g - 150} width="40" height="34" fill="#fff" stroke={ink} strokeWidth="2" />
        <line x1="725" y1={g - 150} x2="725" y2={g - 178} stroke={ink} strokeWidth="2.5" />
        <polygon points={`725,${g - 178} 755,${g - 169} 725,${g - 160}`} fill="#F5C842" stroke={ink} strokeWidth="1.5" />
        {[660, 700, 748, 778].map((x, i) => (
          <rect key={i} x={x} y={g - 62} width="18" height="22" fill="#F5C842" stroke={ink} strokeWidth="1.5" />
        ))}
        <rect x="708" y={g - 38} width="34" height="38" rx="3" fill="#B3202A" stroke={ink} strokeWidth="2" />
        <text x="725" y={g - 124} textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily="sans-serif">GV</text>
      </g>
      <rect x="0" y={g} width="1440" height="20" fill="#E3F0E8" />
    </svg>
  );
}

const common = { stroke: ink, strokeWidth: 2.5, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };

export function IconKids() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" aria-hidden>
      {[{ x: 3, y: 25, l: "A" }, { x: 25, y: 25, l: "B" }, { x: 14, y: 4, l: "C" }].map((b) => (
        <g key={b.l}>
          <rect x={b.x} y={b.y} width="20" height="20" rx="3" fill="#fff" {...common} />
          <text x={b.x + 10} y={b.y + 15} textAnchor="middle" fontSize="13" fontWeight="800" fill={ink} fontFamily="sans-serif">{b.l}</text>
        </g>
      ))}
    </svg>
  );
}
export function IconBook() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" aria-hidden>
      <path d="M24 12c-5-4-12-4-19-2v28c7-2 14-2 19 2 5-4 12-4 19-2V10c-7-2-14-2-19 2z" fill="#fff" {...common} />
      <path d="M24 12v28" {...common} />
    </svg>
  );
}
export function IconPencil() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" aria-hidden>
      <path d="M8 40l3-10L33 8l7 7-22 22z" fill="#F5C842" {...common} />
      <path d="M11 30l7 7M28 13l7 7" {...common} />
    </svg>
  );
}
export function IconCap() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" aria-hidden>
      <path d="M24 8L3 18l21 10 21-10z" fill="#fff" {...common} />
      <path d="M11 23v10c0 3 6 6 13 6s13-3 13-6V23" {...common} />
      <path d="M43 19v13" {...common} />
    </svg>
  );
}
export function IconChat() {
  return (<svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden><path d="M6 8h36v24H22l-10 8v-8H6z" fill="#fff" {...common} /><path d="M14 18h20M14 24h12" {...common} /></svg>);
}
export function IconPath() {
  return (<svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden><path d="M10 42V6M10 8h26l-6 7 6 7H10" fill="#fff" {...common} /></svg>);
}
export function IconHeart() {
  return (<svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden><path d="M24 41S6 30 6 17a9 9 0 0118-3 9 9 0 0118 3c0 13-18 24-18 24z" fill="#fff" {...common} /></svg>);
}
export function IconLife() {
  return (<svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden><circle cx="24" cy="24" r="18" fill="#fff" {...common} /><circle cx="24" cy="24" r="7" {...common} /><path d="M11 11l8 8M37 11l-8 8M11 37l8-8M37 37l-8-8" {...common} /></svg>);
}
