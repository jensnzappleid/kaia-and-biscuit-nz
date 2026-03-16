// Hand-drawn style SVG illustrations for NZ regions
// Used in the story chapter pages to create an illustration book feel

// Lighthouse (Cape Reinga, Northland)
export function LighthouseSVG({ size = 120, color = '#FF6B9D' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      {/* Sky */}
      <circle cx="95" cy="20" r="14" fill="#FBBF24" opacity="0.3" />
      {/* Hill */}
      <ellipse cx="60" cy="110" rx="58" ry="22" fill="#86EFAC" />
      {/* Tower */}
      <path d="M52 42 L48 98 L72 98 L68 42Z" fill="white" stroke={color} strokeWidth="2" />
      {/* Stripes */}
      <rect x="49" y="55" width="22" height="8" fill={color} opacity="0.7" />
      <rect x="50" y="75" width="20" height="8" fill={color} opacity="0.7" />
      {/* Top */}
      <rect x="50" y="35" width="20" height="10" rx="2" fill={color} />
      <path d="M48 35 L60 22 L72 35Z" fill={color} />
      {/* Light beams */}
      <path d="M72 30 L100 18" stroke="#FBBF24" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
      <path d="M72 33 L105 30" stroke="#FBBF24" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
      <path d="M48 30 L20 18" stroke="#FBBF24" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
      <path d="M48 33 L15 30" stroke="#FBBF24" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
      {/* Door */}
      <rect x="55" y="88" width="10" height="12" rx="5" fill={color} opacity="0.5" />
      {/* Waves */}
      <path d="M2 108 Q15 102 28 108 Q41 114 54 108" stroke="#60A5FA" strokeWidth="2" fill="none" opacity="0.4" />
    </svg>
  );
}

// Sky Tower (Auckland)
export function SkyTowerSVG({ size = 120, color = '#C084FC' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      {/* City silhouette */}
      <rect x="10" y="80" width="18" height="30" rx="2" fill="#CBD5E1" />
      <rect x="32" y="70" width="14" height="40" rx="2" fill="#CBD5E1" />
      <rect x="80" y="75" width="16" height="35" rx="2" fill="#CBD5E1" />
      <rect x="100" y="82" width="14" height="28" rx="2" fill="#CBD5E1" />
      {/* Tower shaft */}
      <rect x="57" y="20" width="6" height="90" fill="#E2E8F0" stroke={color} strokeWidth="1.5" />
      {/* Observation deck */}
      <ellipse cx="60" cy="45" rx="16" ry="5" fill={color} />
      <ellipse cx="60" cy="42" rx="14" ry="4" fill="white" stroke={color} strokeWidth="1.5" />
      {/* Needle top */}
      <line x1="60" y1="20" x2="60" y2="5" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Restaurant pod */}
      <ellipse cx="60" cy="55" rx="11" ry="3.5" fill={color} opacity="0.6" />
      {/* Ground */}
      <rect x="0" y="108" width="120" height="12" rx="4" fill="#86EFAC" opacity="0.5" />
      {/* Clouds */}
      <ellipse cx="20" cy="18" rx="12" ry="5" fill="white" opacity="0.6" />
      <ellipse cx="100" cy="25" rx="10" ry="4" fill="white" opacity="0.5" />
    </svg>
  );
}

// Hobbit Hole (Waikato)
export function HobbitHoleSVG({ size = 120, color = '#60A5FA' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      {/* Hill */}
      <path d="M0 65 Q30 20 60 30 Q90 20 120 65 L120 120 L0 120Z" fill="#86EFAC" />
      <path d="M0 70 Q30 28 60 35 Q90 28 120 70" stroke="#22C55E" strokeWidth="1.5" fill="none" />
      {/* Door frame (circle) */}
      <circle cx="60" cy="72" r="22" fill="#8B6914" stroke="#6B5210" strokeWidth="2" />
      <circle cx="60" cy="72" r="19" fill="#D97706" />
      {/* Door panels */}
      <line x1="60" y1="53" x2="60" y2="91" stroke="#8B6914" strokeWidth="1.5" />
      <line x1="41" y1="72" x2="79" y2="72" stroke="#8B6914" strokeWidth="1.5" />
      {/* Door knob */}
      <circle cx="66" cy="72" r="2.5" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
      {/* Window */}
      <circle cx="30" cy="58" r="8" fill="#FDE68A" stroke="#8B6914" strokeWidth="2" />
      <line x1="30" y1="50" x2="30" y2="66" stroke="#8B6914" strokeWidth="1" />
      <line x1="22" y1="58" x2="38" y2="58" stroke="#8B6914" strokeWidth="1" />
      {/* Flowers */}
      <circle cx="40" cy="95" r="3" fill="#F472B6" /><circle cx="40" cy="95" r="1.5" fill="#FBBF24" />
      <circle cx="48" cy="93" r="3" fill="#C084FC" /><circle cx="48" cy="93" r="1.5" fill="#FBBF24" />
      <circle cx="75" cy="94" r="3" fill="#FF6B9D" /><circle cx="75" cy="94" r="1.5" fill="#FBBF24" />
      {/* Path stones */}
      <ellipse cx="60" cy="100" rx="5" ry="2" fill="#D4C4A0" />
      <ellipse cx="55" cy="108" rx="5" ry="2" fill="#D4C4A0" />
      <ellipse cx="62" cy="115" rx="5" ry="2" fill="#D4C4A0" />
    </svg>
  );
}

// Geothermal / Hot Springs (Bay of Plenty / Rotorua)
export function GeothermalSVG({ size = 120, color = '#6EE7B7' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      {/* Ground */}
      <ellipse cx="60" cy="95" rx="55" ry="20" fill="#FDE68A" opacity="0.5" />
      {/* Pool */}
      <ellipse cx="60" cy="88" rx="35" ry="12" fill="#38BDF8" opacity="0.5" />
      <ellipse cx="60" cy="86" rx="30" ry="10" fill="#60A5FA" opacity="0.4" />
      {/* Steam wisps */}
      <path d="M40 75 Q35 60 42 50 Q48 40 40 28" stroke="#CBD5E1" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5">
        <animate attributeName="d" values="M40 75 Q35 60 42 50 Q48 40 40 28;M40 75 Q45 58 38 48 Q32 38 42 26;M40 75 Q35 60 42 50 Q48 40 40 28" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M60 72 Q55 55 63 45 Q70 35 60 20" stroke="#CBD5E1" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6">
        <animate attributeName="d" values="M60 72 Q55 55 63 45 Q70 35 60 20;M60 72 Q65 53 57 43 Q50 33 62 18;M60 72 Q55 55 63 45 Q70 35 60 20" dur="4s" repeatCount="indefinite" />
      </path>
      <path d="M80 75 Q75 62 82 52 Q88 42 80 30" stroke="#CBD5E1" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5">
        <animate attributeName="d" values="M80 75 Q75 62 82 52 Q88 42 80 30;M80 75 Q85 60 78 50 Q72 40 82 28;M80 75 Q75 62 82 52 Q88 42 80 30" dur="3.5s" repeatCount="indefinite" />
      </path>
      {/* Mud bubbles */}
      <circle cx="45" cy="85" r="3" fill="#D97706" opacity="0.3">
        <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="83" r="2" fill="#D97706" opacity="0.3">
        <animate attributeName="r" values="1.5;3.5;1.5" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

// Mountain (Mt Cook / Taranaki / general mountains)
export function MountainSVG({ size = 120, color = '#2DD4BF' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      {/* Sky */}
      <circle cx="95" cy="18" r="12" fill="#FBBF24" opacity="0.3" />
      {/* Back mountain */}
      <path d="M15 100 L45 35 L75 100Z" fill="#94A3B8" opacity="0.5" />
      {/* Main mountain */}
      <path d="M30 100 L65 15 L100 100Z" fill={color} opacity="0.6" />
      <path d="M30 100 L65 15 L100 100" stroke={color} strokeWidth="2" fill="none" />
      {/* Snow cap */}
      <path d="M55 40 L65 15 L75 40 Q70 45 65 42 Q60 45 55 40Z" fill="white" stroke={color} strokeWidth="1.5" />
      {/* Ground */}
      <rect x="0" y="98" width="120" height="22" rx="4" fill="#86EFAC" opacity="0.4" />
      {/* Trees */}
      <path d="M12 100 L16 82 L20 100Z" fill="#22C55E" opacity="0.6" />
      <path d="M105 100 L109 85 L113 100Z" fill="#22C55E" opacity="0.6" />
      {/* Clouds */}
      <ellipse cx="25" cy="28" rx="14" ry="5" fill="white" opacity="0.5" />
    </svg>
  );
}

// Kiwi bird
export function KiwiSVG({ size = 100, color = '#8B6914' }) {
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 100 80" fill="none">
      {/* Body */}
      <ellipse cx="50" cy="50" rx="25" ry="20" fill={color} />
      {/* Belly */}
      <ellipse cx="52" cy="55" rx="18" ry="13" fill="#A67C28" />
      {/* Head */}
      <circle cx="28" cy="40" r="10" fill={color} />
      {/* Eye */}
      <circle cx="24" cy="38" r="3" fill="white" />
      <circle cx="24" cy="38" r="2" fill="#1F1235" />
      <circle cx="23.5" cy="37.5" r="0.8" fill="white" />
      {/* Long beak */}
      <path d="M18 42 L-2 50 L18 46Z" fill="#D4A574" stroke="#A67C28" strokeWidth="0.5" />
      {/* Legs */}
      <path d="M42 68 L38 78 M42 68 L42 78 M42 68 L46 78" stroke="#A67C28" strokeWidth="2" strokeLinecap="round" />
      <path d="M58 68 L54 78 M58 68 L58 78 M58 68 L62 78" stroke="#A67C28" strokeWidth="2" strokeLinecap="round" />
      {/* Hair-like feathers */}
      <path d="M70 42 Q78 35 72 30" stroke={color} strokeWidth="2" fill="none" />
      <path d="M68 38 Q76 30 70 25" stroke={color} strokeWidth="2" fill="none" />
    </svg>
  );
}

// Whale tail (Kaikoura/ocean)
export function WhaleTailSVG({ size = 120, color = '#38BDF8' }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 120 84" fill="none">
      {/* Ocean */}
      <path d="M0 55 Q15 48 30 55 Q45 62 60 55 Q75 48 90 55 Q105 62 120 55 L120 84 L0 84Z" fill={color} opacity="0.2" />
      <path d="M0 65 Q20 58 40 65 Q60 72 80 65 Q100 58 120 65 L120 84 L0 84Z" fill={color} opacity="0.15" />
      {/* Tail fluke */}
      <path d="M60 55 Q45 25 25 15 Q35 20 40 30 Q42 35 55 45" fill="#64748B" stroke="#475569" strokeWidth="1.5" />
      <path d="M60 55 Q75 25 95 15 Q85 20 80 30 Q78 35 65 45" fill="#64748B" stroke="#475569" strokeWidth="1.5" />
      {/* Water splash */}
      <circle cx="55" cy="52" r="2" fill="white" opacity="0.6" />
      <circle cx="65" cy="50" r="1.5" fill="white" opacity="0.5" />
      <circle cx="60" cy="48" r="2.5" fill="white" opacity="0.4" />
      {/* Spray */}
      <path d="M58 55 Q56 42 50 38" stroke="white" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" />
      <path d="M62 55 Q64 42 70 38" stroke="white" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" />
    </svg>
  );
}

// Vineyard/Wine (Hawke's Bay / Marlborough)
export function VineyardSVG({ size = 120, color = '#FB923C' }) {
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 120 96" fill="none">
      {/* Rolling hills */}
      <path d="M0 60 Q30 40 60 55 Q90 70 120 50 L120 96 L0 96Z" fill="#86EFAC" opacity="0.4" />
      {/* Vine rows */}
      {[20, 40, 60, 80].map(x => (
        <g key={x}>
          <line x1={x - 8} y1="85" x2={x - 2} y2="55" stroke="#8B6914" strokeWidth="1.5" />
          <line x1={x + 8} y1="85" x2={x + 2} y2="55" stroke="#8B6914" strokeWidth="1.5" />
          <line x1={x - 5} y1="65" x2={x + 5} y2="65" stroke="#8B6914" strokeWidth="1" />
          <circle cx={x - 3} cy="62" r="3" fill="#7C3AED" opacity="0.6" />
          <circle cx={x + 3} cy="68" r="3" fill="#7C3AED" opacity="0.5" />
          <circle cx={x} cy="72" r="2.5" fill="#7C3AED" opacity="0.7" />
          <ellipse cx={x - 2} cy="58" rx="4" ry="3" fill="#22C55E" opacity="0.5" />
          <ellipse cx={x + 3} cy="60" rx="4" ry="3" fill="#22C55E" opacity="0.5" />
        </g>
      ))}
      {/* Sun */}
      <circle cx="100" cy="20" r="14" fill="#FBBF24" opacity="0.4" />
    </svg>
  );
}

// Glacier (Franz Josef / West Coast)
export function GlacierSVG({ size = 120, color = '#818CF8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      {/* Mountains behind */}
      <path d="M0 70 L25 25 L50 60 L75 20 L100 55 L120 70Z" fill="#94A3B8" opacity="0.4" />
      {/* Snow on peaks */}
      <path d="M18 45 L25 25 L32 45 Q28 48 25 46 Q22 48 18 45Z" fill="white" />
      <path d="M68 38 L75 20 L82 38 Q78 41 75 39 Q72 41 68 38Z" fill="white" />
      {/* Glacier tongue */}
      <path d="M35 70 Q40 55 55 50 Q70 45 75 50 Q82 55 85 70 Q80 78 60 82 Q40 78 35 70Z" fill="#BAE6FD" stroke="#7DD3FC" strokeWidth="1.5" />
      {/* Ice crevasses */}
      <path d="M48 58 L52 72" stroke="#93C5FD" strokeWidth="1" opacity="0.6" />
      <path d="M62 55 L65 70" stroke="#93C5FD" strokeWidth="1" opacity="0.6" />
      <path d="M72 58 L74 68" stroke="#93C5FD" strokeWidth="1" opacity="0.6" />
      {/* Meltwater */}
      <path d="M45 82 Q55 90 60 95 Q65 100 70 95" stroke="#60A5FA" strokeWidth="2" fill="none" opacity="0.5" />
      {/* Ground */}
      <path d="M0 80 Q30 72 60 82 Q90 92 120 80 L120 120 L0 120Z" fill="#86EFAC" opacity="0.3" />
    </svg>
  );
}

// Sheep (Canterbury / rural NZ)
export function SheepSVG({ size = 100, color = '#2DD4BF' }) {
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 100 80" fill="none">
      {/* Grass */}
      <rect x="0" y="68" width="100" height="12" rx="4" fill="#86EFAC" opacity="0.4" />
      {/* Wool body */}
      <ellipse cx="50" cy="48" rx="24" ry="18" fill="white" stroke="#E2E8F0" strokeWidth="1" />
      {/* Wool puffs */}
      <circle cx="35" cy="38" r="8" fill="white" /><circle cx="45" cy="32" r="9" fill="white" />
      <circle cx="57" cy="33" r="8" fill="white" /><circle cx="65" cy="38" r="7" fill="white" />
      <circle cx="38" cy="48" r="7" fill="white" /><circle cx="62" cy="48" r="7" fill="white" />
      {/* Face */}
      <ellipse cx="28" cy="42" rx="8" ry="10" fill="#1F1235" />
      <ellipse cx="28" cy="42" rx="6" ry="8" fill="#374151" />
      {/* Eyes */}
      <circle cx="25" cy="40" r="2" fill="white" /><circle cx="25" cy="40" r="1.2" fill="#1F1235" />
      <circle cx="31" cy="40" r="2" fill="white" /><circle cx="31" cy="40" r="1.2" fill="#1F1235" />
      {/* Ears */}
      <ellipse cx="20" cy="34" rx="5" ry="3" fill="#374151" transform="rotate(-20 20 34)" />
      <ellipse cx="36" cy="33" rx="5" ry="3" fill="#374151" transform="rotate(20 36 33)" />
      {/* Legs */}
      <rect x="38" y="62" width="4" height="10" rx="2" fill="#374151" />
      <rect x="46" y="62" width="4" height="10" rx="2" fill="#374151" />
      <rect x="54" y="62" width="4" height="10" rx="2" fill="#374151" />
      <rect x="62" y="62" width="4" height="10" rx="2" fill="#374151" />
    </svg>
  );
}

// Sailing boat (Wellington / harbours)
export function SailboatSVG({ size = 120, color = '#38BDF8' }) {
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 120 96" fill="none">
      {/* Ocean */}
      <path d="M0 65 Q20 58 40 65 Q60 72 80 65 Q100 58 120 65 L120 96 L0 96Z" fill={color} opacity="0.2" />
      <path d="M0 75 Q25 68 50 75 Q75 82 100 75 Q112 71 120 75 L120 96 L0 96Z" fill={color} opacity="0.15" />
      {/* Hull */}
      <path d="M30 68 L40 78 L80 78 L90 68Z" fill="#DC2626" stroke="#B91C1C" strokeWidth="1.5" />
      {/* Mast */}
      <line x1="60" y1="15" x2="60" y2="68" stroke="#8B6914" strokeWidth="2.5" />
      {/* Main sail */}
      <path d="M62 18 L62 65 L88 65Z" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
      {/* Jib sail */}
      <path d="M58 18 L58 55 L35 55Z" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
      {/* Flag */}
      <path d="M60 15 L50 10 L60 5" fill="#DC2626" />
    </svg>
  );
}

// Pounamu / Greenstone (West Coast)
export function PounamuSVG({ size = 80, color = '#818CF8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Cord */}
      <path d="M30 5 Q40 15 40 25 Q40 30 38 32" stroke="#8B6914" strokeWidth="2" fill="none" />
      <path d="M50 5 Q40 15 40 25 Q40 30 42 32" stroke="#8B6914" strokeWidth="2" fill="none" />
      {/* Pendant shape (fish hook / hei matau) */}
      <path d="M35 32 Q30 40 30 50 Q30 65 42 70 Q50 72 55 65 Q60 58 55 48 Q52 42 45 38 Q40 35 38 32Z"
        fill="#22C55E" stroke="#15803D" strokeWidth="2" />
      {/* Inner detail */}
      <path d="M38 40 Q35 48 36 55 Q37 62 44 65" stroke="#86EFAC" strokeWidth="1.5" fill="none" opacity="0.6" />
      {/* Shine */}
      <ellipse cx="40" cy="48" rx="3" ry="5" fill="white" opacity="0.25" transform="rotate(-15 40 48)" />
    </svg>
  );
}

// Fern / Silver Fern (iconic NZ symbol)
export function FernSVG({ size = 100, color = '#22C55E' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Main stem */}
      <path d="M50 95 Q48 60 50 20" stroke="#15803D" strokeWidth="2.5" fill="none" />
      {/* Fronds - left */}
      <path d="M48 75 Q30 70 20 65" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M47 62 Q25 55 12 48" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M48 50 Q28 40 15 30" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M49 38 Q35 28 25 18" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Sub-fronds left */}
      <path d="M35 72 Q28 68 24 66" stroke={color} strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M30 58 Q22 53 18 50" stroke={color} strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M32 45 Q24 38 20 33" stroke={color} strokeWidth="1" fill="none" opacity="0.6" />
      {/* Fronds - right */}
      <path d="M52 75 Q70 70 80 65" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M53 62 Q75 55 88 48" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M52 50 Q72 40 85 30" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M51 38 Q65 28 75 18" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Koru (unfurling tip) */}
      <path d="M50 20 Q50 12 55 8 Q58 5 56 10" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// Map of illustration assignments per region
export const regionIllustrations = {
  'northland': [LighthouseSVG, FernSVG],
  'auckland': [SkyTowerSVG, SailboatSVG],
  'waikato': [HobbitHoleSVG, KiwiSVG],
  'bay-of-plenty': [GeothermalSVG, KiwiSVG],
  'gisborne': [FernSVG, KiwiSVG],
  'hawkes-bay': [VineyardSVG, FernSVG],
  'taranaki': [MountainSVG, FernSVG],
  'manawatu-whanganui': [MountainSVG, KiwiSVG],
  'wellington': [SailboatSVG, FernSVG],
  'tasman': [SailboatSVG, FernSVG],
  'nelson': [SailboatSVG, KiwiSVG],
  'marlborough': [VineyardSVG, WhaleTailSVG],
  'west-coast': [GlacierSVG, PounamuSVG],
  'canterbury': [MountainSVG, SheepSVG],
  'otago': [MountainSVG, KiwiSVG],
  'southland': [WhaleTailSVG, GlacierSVG],
};
