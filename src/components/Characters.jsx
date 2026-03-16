// Kaia (11-year-old girl explorer) and Biscuit (her kiwi bird companion)
// Detailed hand-drawn style SVG illustrations with multiple poses

// === KAIA — main portrait ===
export function KaiaSVG({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <ellipse cx="32" cy="22" rx="16" ry="15" fill="#2C1810" />
      <ellipse cx="18" cy="30" rx="4" ry="10" fill="#2C1810" />
      <ellipse cx="46" cy="30" rx="4" ry="10" fill="#2C1810" />
      <ellipse cx="32" cy="26" rx="13" ry="12" fill="#D4A574" />
      <ellipse cx="27" cy="25" rx="2.5" ry="3" fill="#1F1235" />
      <ellipse cx="37" cy="25" rx="2.5" ry="3" fill="#1F1235" />
      <circle cx="28" cy="24" r="1" fill="white" />
      <circle cx="38" cy="24" r="1" fill="white" />
      <path d="M27 30 Q32 35 37 30" stroke="#1F1235" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="23" cy="29" r="2.5" fill="#FFB3D1" opacity="0.6" />
      <circle cx="41" cy="29" r="2.5" fill="#FFB3D1" opacity="0.6" />
      <rect x="24" y="38" width="4" height="12" rx="2" fill="#60A5FA" />
      <rect x="36" y="38" width="4" height="12" rx="2" fill="#60A5FA" />
      <rect x="22" y="38" width="20" height="16" rx="4" fill="#C084FC" />
      <rect x="25" y="40" width="14" height="14" rx="4" fill="#3B82F6" />
    </svg>
  );
}

// === BISCUIT — main portrait ===
export function BiscuitSVG({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="30" rx="14" ry="12" fill="#8B6914" />
      <ellipse cx="24" cy="33" rx="9" ry="7" fill="#A67C28" />
      <path d="M20 24 L14 28 L20 28Z" fill="#F59E0B" />
      <circle cx="22" cy="23" r="3" fill="white" />
      <circle cx="22" cy="23" r="2" fill="#1F1235" />
      <circle cx="22.8" cy="22.2" r="0.7" fill="white" />
      <path d="M18 40 L14 44 M18 40 L18 44 M18 40 L22 44" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 40 L26 44 M30 40 L30 44 M30 40 L34 44" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 18 Q34 12 28 14 Q32 10 26 16" fill="#8B6914" />
    </svg>
  );
}

// === KAIA HIKING (full body, walking with backpack and map) ===
export function KaiaHikingSVG({ size = 160 }) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 100 140" fill="none">
      {/* Hair flowing */}
      <ellipse cx="50" cy="22" rx="18" ry="16" fill="#2C1810" />
      <path d="M33 20 Q28 30 30 42" stroke="#2C1810" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M67 20 Q72 30 70 42" stroke="#2C1810" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* Face */}
      <ellipse cx="50" cy="26" rx="14" ry="13" fill="#D4A574" />
      {/* Eyes — looking ahead excitedly */}
      <ellipse cx="44" cy="24" rx="3" ry="3.5" fill="#1F1235" />
      <ellipse cx="56" cy="24" rx="3" ry="3.5" fill="#1F1235" />
      <circle cx="45.2" cy="23" r="1.2" fill="white" />
      <circle cx="57.2" cy="23" r="1.2" fill="white" />
      {/* Big smile */}
      <path d="M43 31 Q50 38 57 31" stroke="#1F1235" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="39" cy="29" r="3" fill="#FFB3D1" opacity="0.5" />
      <circle cx="61" cy="29" r="3" fill="#FFB3D1" opacity="0.5" />
      {/* Neck */}
      <rect x="46" y="38" width="8" height="5" fill="#D4A574" />
      {/* T-shirt */}
      <path d="M34 43 L34 72 Q34 76 38 76 L62 76 Q66 76 66 72 L66 43 Q58 40 50 40 Q42 40 34 43Z" fill="#C084FC" />
      {/* Shirt design — silver fern */}
      <path d="M50 50 L50 68" stroke="white" strokeWidth="1.5" opacity="0.6" />
      <path d="M50 55 L44 52" stroke="white" strokeWidth="1" opacity="0.5" />
      <path d="M50 60 L56 57" stroke="white" strokeWidth="1" opacity="0.5" />
      {/* Sleeves */}
      <path d="M34 43 L26 52 L32 55 L34 48" fill="#A855F7" />
      <path d="M66 43 L74 52 L68 55 L66 48" fill="#A855F7" />
      {/* Arms */}
      <path d="M28 52 L22 65" stroke="#D4A574" strokeWidth="5" strokeLinecap="round" />
      <path d="M72 52 L78 48" stroke="#D4A574" strokeWidth="5" strokeLinecap="round" />
      {/* Left hand holding map */}
      <rect x="12" y="58" width="16" height="12" rx="2" fill="#FDE68A" stroke="#D97706" strokeWidth="1" transform="rotate(-10 20 64)" />
      <line x1="16" y1="62" x2="24" y2="61" stroke="#D97706" strokeWidth="0.5" opacity="0.5" />
      <line x1="16" y1="65" x2="24" y2="64" stroke="#D97706" strokeWidth="0.5" opacity="0.5" />
      {/* Right hand waving */}
      <circle cx="80" cy="46" r="4" fill="#D4A574" />
      {/* Backpack */}
      <rect x="38" y="45" width="24" height="28" rx="6" fill="#3B82F6" />
      <rect x="40" y="48" width="20" height="10" rx="3" fill="#60A5FA" />
      <circle cx="50" cy="53" r="2" fill="#2563EB" />
      {/* Backpack straps */}
      <path d="M42 45 L38 43" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
      <path d="M58 45 L62 43" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
      {/* Shorts */}
      <rect x="36" y="76" width="12" height="16" rx="3" fill="#1E40AF" />
      <rect x="52" y="76" width="12" height="16" rx="3" fill="#1E40AF" />
      {/* Legs */}
      <rect x="38" y="92" width="8" height="20" rx="3" fill="#D4A574" />
      <rect x="54" y="92" width="8" height="20" rx="3" fill="#D4A574" />
      {/* Hiking boots */}
      <path d="M36 110 L36 120 Q36 124 40 124 L48 124 Q50 124 50 120 L50 112" fill="#8B6914" stroke="#6B5210" strokeWidth="1.5" />
      <path d="M52 110 L52 120 Q52 124 56 124 L64 124 Q66 124 66 120 L66 112" fill="#8B6914" stroke="#6B5210" strokeWidth="1.5" />
      {/* Boot laces */}
      <path d="M38 114 L48 114 M38 118 L48 118" stroke="#D4A574" strokeWidth="0.8" />
      <path d="M54 114 L64 114 M54 118 L64 118" stroke="#D4A574" strokeWidth="0.8" />
    </svg>
  );
}

// === BISCUIT WALKING (full body with little explorer hat) ===
export function BiscuitWalkingSVG({ size = 120 }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 80 88" fill="none">
      {/* Body */}
      <ellipse cx="40" cy="50" rx="22" ry="20" fill="#8B6914" />
      {/* Belly */}
      <ellipse cx="40" cy="55" rx="15" ry="13" fill="#A67C28" />
      {/* Wing (slightly raised, excited) */}
      <path d="M60 42 Q72 35 68 50 Q65 58 58 55" fill="#7A5C10" />
      <path d="M20 42 Q8 35 12 50 Q15 58 22 55" fill="#7A5C10" />
      {/* Head */}
      <circle cx="40" cy="28" r="14" fill="#8B6914" />
      {/* Explorer hat */}
      <ellipse cx="40" cy="18" rx="16" ry="4" fill="#D97706" />
      <path d="M30 18 Q30 8 40 6 Q50 8 50 18" fill="#F59E0B" />
      <rect x="38" y="6" width="4" height="3" rx="2" fill="#D97706" />
      {/* Beak */}
      <path d="M28 30 L18 35 L28 36Z" fill="#F59E0B" stroke="#D97706" strokeWidth="1" />
      {/* Eye — big and expressive */}
      <circle cx="35" cy="27" r="5" fill="white" />
      <circle cx="36" cy="27" r="3.5" fill="#1F1235" />
      <circle cx="37" cy="25.5" r="1.3" fill="white" />
      {/* Eyebrow (excited) */}
      <path d="M30 21 Q34 18 38 20" stroke="#6B5210" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Cheek */}
      <circle cx="30" cy="33" r="3" fill="#FFB3D1" opacity="0.3" />
      {/* Feather tuft */}
      <path d="M48 16 Q55 8 50 12 Q56 4 48 10" fill="#8B6914" stroke="#7A5C10" strokeWidth="0.5" />
      {/* Tiny backpack */}
      <rect x="44" y="38" width="14" height="14" rx="4" fill="#EF4444" />
      <rect x="46" y="40" width="10" height="6" rx="2" fill="#F87171" />
      <path d="M46 38 L44 36" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
      <path d="M56 38 L58 36" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
      {/* Feet (walking pose — one forward) */}
      <path d="M30 68 L24 78 M30 68 L30 78 M30 68 L36 78" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 66 L44 80 M50 66 L50 80 M50 66 L56 80" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// === KAIA READING (sitting with a book) ===
export function KaiaReadingSVG({ size = 140 }) {
  return (
    <svg width={size} height={size * 0.85} viewBox="0 0 120 102" fill="none">
      {/* Hair */}
      <ellipse cx="60" cy="20" rx="18" ry="16" fill="#2C1810" />
      <path d="M43 18 Q38 28 40 40" stroke="#2C1810" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M77 18 Q82 28 80 40" stroke="#2C1810" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* Face */}
      <ellipse cx="60" cy="24" rx="14" ry="13" fill="#D4A574" />
      {/* Eyes — looking down at book */}
      <path d="M53 24 Q55 27 57 24" stroke="#1F1235" strokeWidth="2" fill="none" />
      <path d="M63 24 Q65 27 67 24" stroke="#1F1235" strokeWidth="2" fill="none" />
      {/* Eyelashes */}
      <path d="M53 23 L52 21" stroke="#1F1235" strokeWidth="1" />
      <path d="M67 23 L68 21" stroke="#1F1235" strokeWidth="1" />
      {/* Gentle smile */}
      <path d="M55 30 Q60 34 65 30" stroke="#1F1235" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="50" cy="28" r="3" fill="#FFB3D1" opacity="0.5" />
      <circle cx="70" cy="28" r="3" fill="#FFB3D1" opacity="0.5" />
      {/* Body (sitting) */}
      <path d="M44 40 L44 70 Q44 74 48 74 L72 74 Q76 74 76 70 L76 40 Q68 37 60 37 Q52 37 44 40Z" fill="#C084FC" />
      {/* Arms holding book */}
      <path d="M44 50 L34 62" stroke="#D4A574" strokeWidth="5" strokeLinecap="round" />
      <path d="M76 50 L86 62" stroke="#D4A574" strokeWidth="5" strokeLinecap="round" />
      {/* Book */}
      <rect x="30" y="58" width="60" height="36" rx="3" fill="#3B82F6" />
      <rect x="32" y="60" width="56" height="32" rx="2" fill="#DBEAFE" />
      <line x1="60" y1="60" x2="60" y2="92" stroke="#3B82F6" strokeWidth="2" />
      {/* Book text lines */}
      <line x1="36" y1="67" x2="56" y2="67" stroke="#93C5FD" strokeWidth="1.5" />
      <line x1="36" y1="72" x2="52" y2="72" stroke="#93C5FD" strokeWidth="1.5" />
      <line x1="36" y1="77" x2="54" y2="77" stroke="#93C5FD" strokeWidth="1.5" />
      <line x1="64" y1="67" x2="84" y2="67" stroke="#93C5FD" strokeWidth="1.5" />
      <line x1="64" y1="72" x2="80" y2="72" stroke="#93C5FD" strokeWidth="1.5" />
      <line x1="64" y1="77" x2="82" y2="77" stroke="#93C5FD" strokeWidth="1.5" />
      {/* Sitting legs */}
      <path d="M48 74 L48 90 Q48 94 52 94 L56 94" fill="#1E40AF" />
      <path d="M72 74 L72 90 Q72 94 68 94 L64 94" fill="#1E40AF" />
      {/* Shoes */}
      <ellipse cx="56" cy="95" rx="6" ry="4" fill="#8B6914" />
      <ellipse cx="64" cy="95" rx="6" ry="4" fill="#8B6914" />
    </svg>
  );
}

// === BISCUIT EXCITED (jumping with wings spread) ===
export function BiscuitExcitedSVG({ size = 100 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Jump lines */}
      <path d="M20 72 L18 78" stroke="#FBBF24" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
      <path d="M60 72 L62 78" stroke="#FBBF24" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
      <path d="M40 74 L40 80" stroke="#FBBF24" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
      {/* Body (slightly tilted, mid-jump) */}
      <ellipse cx="40" cy="42" rx="20" ry="17" fill="#8B6914" transform="rotate(-5 40 42)" />
      <ellipse cx="40" cy="46" rx="13" ry="10" fill="#A67C28" transform="rotate(-5 40 46)" />
      {/* Wings spread wide! */}
      <path d="M58 34 Q78 20 82 35 Q80 42 62 40" fill="#7A5C10" />
      <path d="M22 34 Q2 20 -2 35 Q0 42 18 40" fill="#7A5C10" />
      {/* Wing feather details */}
      <path d="M65 30 L75 25" stroke="#A67C28" strokeWidth="1" opacity="0.5" />
      <path d="M15 30 L5 25" stroke="#A67C28" strokeWidth="1" opacity="0.5" />
      {/* Head */}
      <circle cx="40" cy="20" r="13" fill="#8B6914" />
      {/* Beak (open, squawking happily) */}
      <path d="M28 22 L16 18 L26 25Z" fill="#F59E0B" />
      <path d="M28 24 L18 28 L26 25Z" fill="#D97706" />
      {/* Eye — super excited */}
      <circle cx="34" cy="18" r="5" fill="white" />
      <circle cx="35" cy="18" r="3" fill="#1F1235" />
      <circle cx="36" cy="16.5" r="1.2" fill="white" />
      {/* Sparkle eyes */}
      <path d="M44 14 L46 12 L44 10 L42 12Z" fill="#FBBF24" />
      <path d="M48 18 L50 16 L48 14 L46 16Z" fill="#FBBF24" opacity="0.6" />
      {/* Excitement stars */}
      <path d="M70 10 L72 6 L74 10 L78 12 L74 14 L72 18 L70 14 L66 12Z" fill="#FBBF24" opacity="0.5" />
      <path d="M8 8 L10 4 L12 8 L16 10 L12 12 L10 16 L8 12 L4 10Z" fill="#FBBF24" opacity="0.4" />
      {/* Feather tuft (standing up straight, excited) */}
      <path d="M46 8 Q52 -2 48 4 Q54 -4 46 2" fill="#8B6914" />
      {/* Feet (dangling mid-air) */}
      <path d="M32 58 L28 66 M32 58 L32 66 M32 58 L36 66" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M48 58 L44 66 M48 58 L48 66 M48 58 L52 66" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// === KAIA AND BISCUIT TOGETHER (exploring scene) ===
export function KaiaAndBiscuitExploringSVG({ size = 200 }) {
  const w = size;
  const h = size * 0.7;
  return (
    <svg width={w} height={h} viewBox="0 0 200 140" fill="none">
      {/* Ground */}
      <path d="M0 120 Q50 110 100 118 Q150 126 200 115 L200 140 L0 140Z" fill="#86EFAC" opacity="0.5" />
      <path d="M0 125 Q60 118 120 125 Q160 130 200 122 L200 140 L0 140Z" fill="#22C55E" opacity="0.2" />

      {/* === Kaia (left, walking) === */}
      {/* Hair */}
      <ellipse cx="70" cy="28" rx="15" ry="14" fill="#2C1810" />
      <path d="M56 26 Q52 35 54 46" stroke="#2C1810" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M84 26 Q88 32 86 42" stroke="#2C1810" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Face */}
      <ellipse cx="70" cy="32" rx="12" ry="11" fill="#D4A574" />
      {/* Eyes */}
      <ellipse cx="65" cy="30" rx="2.5" ry="3" fill="#1F1235" />
      <ellipse cx="75" cy="30" rx="2.5" ry="3" fill="#1F1235" />
      <circle cx="66" cy="29" r="1" fill="white" />
      <circle cx="76" cy="29" r="1" fill="white" />
      {/* Smile */}
      <path d="M64 36 Q70 42 76 36" stroke="#1F1235" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="60" cy="34" r="2.5" fill="#FFB3D1" opacity="0.5" />
      <circle cx="80" cy="34" r="2.5" fill="#FFB3D1" opacity="0.5" />
      {/* Body */}
      <path d="M58 44 L58 76 Q58 80 62 80 L78 80 Q82 80 82 76 L82 44 Q76 42 70 42 Q64 42 58 44Z" fill="#C084FC" />
      {/* Backpack */}
      <rect x="62" y="48" width="16" height="18" rx="4" fill="#3B82F6" />
      {/* Arm pointing forward */}
      <path d="M82 52 L96 44" stroke="#D4A574" strokeWidth="4" strokeLinecap="round" />
      <circle cx="98" cy="43" r="3" fill="#D4A574" />
      {/* Other arm */}
      <path d="M58 52 L50 60" stroke="#D4A574" strokeWidth="4" strokeLinecap="round" />
      {/* Legs (walking) */}
      <rect x="60" y="80" width="7" height="18" rx="3" fill="#1E40AF" />
      <rect x="73" y="80" width="7" height="15" rx="3" fill="#1E40AF" />
      <rect x="60" y="96" width="8" height="14" rx="3" fill="#D4A574" />
      <rect x="73" y="93" width="8" height="14" rx="3" fill="#D4A574" />
      {/* Boots */}
      <path d="M58 108 Q58 116 64 116 L70 116 Q72 116 72 112" fill="#8B6914" />
      <path d="M71 105 Q71 113 77 113 L83 113 Q85 113 85 109" fill="#8B6914" />

      {/* === Biscuit (right, walking alongside) === */}
      {/* Body */}
      <ellipse cx="130" cy="92" rx="18" ry="15" fill="#8B6914" />
      <ellipse cx="130" cy="96" rx="12" ry="10" fill="#A67C28" />
      {/* Wing */}
      <path d="M146 84 Q158 78 155 90 Q152 96 144 93" fill="#7A5C10" />
      {/* Head */}
      <circle cx="130" cy="72" r="12" fill="#8B6914" />
      {/* Hat */}
      <ellipse cx="130" cy="63" rx="13" ry="3.5" fill="#D97706" />
      <path d="M122 63 Q122 54 130 52 Q138 54 138 63" fill="#F59E0B" />
      {/* Beak */}
      <path d="M120 74 L110 78 L120 78Z" fill="#F59E0B" />
      {/* Eye */}
      <circle cx="126" cy="70" r="4" fill="white" />
      <circle cx="127" cy="70" r="2.8" fill="#1F1235" />
      <circle cx="128" cy="69" r="1" fill="white" />
      {/* Happy expression */}
      <path d="M118 76 Q122 80 126 76" stroke="#6B5210" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Tiny backpack */}
      <rect x="134" y="82" width="12" height="12" rx="3" fill="#EF4444" />
      {/* Feet */}
      <path d="M122 106 L118 116 M122 106 L122 116 M122 106 L126 116" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M138 106 L134 116 M138 106 L138 116 M138 106 L142 116" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />

      {/* Pointing arrow / direction */}
      <path d="M100 42 L108 38 L106 44" fill="#FBBF24" opacity="0.6" />
      <path d="M100 42 L108 42" stroke="#FBBF24" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
    </svg>
  );
}

// === KAIA LOOKING THROUGH BINOCULARS ===
export function KaiaBinocularsSVG({ size = 140 }) {
  return (
    <svg width={size} height={size * 0.9} viewBox="0 0 100 90" fill="none">
      {/* Hair */}
      <ellipse cx="50" cy="20" rx="16" ry="15" fill="#2C1810" />
      <path d="M35 18 Q30 28 33 40" stroke="#2C1810" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M65 18 Q70 28 67 40" stroke="#2C1810" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Face */}
      <ellipse cx="50" cy="25" rx="14" ry="13" fill="#D4A574" />
      {/* Arms holding binoculars up */}
      <path d="M36 50 L32 35" stroke="#D4A574" strokeWidth="5" strokeLinecap="round" />
      <path d="M64 50 L68 35" stroke="#D4A574" strokeWidth="5" strokeLinecap="round" />
      {/* Binoculars */}
      <rect x="30" y="20" width="14" height="16" rx="7" fill="#374151" stroke="#1F1235" strokeWidth="1.5" />
      <rect x="56" y="20" width="14" height="16" rx="7" fill="#374151" stroke="#1F1235" strokeWidth="1.5" />
      <rect x="44" y="25" width="12" height="6" rx="3" fill="#4B5563" />
      {/* Lens glare */}
      <circle cx="37" cy="24" r="4" fill="#60A5FA" opacity="0.3" />
      <circle cx="63" cy="24" r="4" fill="#60A5FA" opacity="0.3" />
      {/* Smile below binoculars */}
      <path d="M44 34 Q50 38 56 34" stroke="#1F1235" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="40" cy="32" r="2.5" fill="#FFB3D1" opacity="0.5" />
      <circle cx="60" cy="32" r="2.5" fill="#FFB3D1" opacity="0.5" />
      {/* Body */}
      <path d="M38 42 L38 72 Q38 76 42 76 L58 76 Q62 76 62 72 L62 42 Q56 40 50 40 Q44 40 38 42Z" fill="#C084FC" />
      {/* Backpack hint */}
      <rect x="42" y="46" width="16" height="16" rx="4" fill="#3B82F6" />
      {/* Legs */}
      <rect x="40" y="76" width="7" height="10" rx="3" fill="#1E40AF" />
      <rect x="53" y="76" width="7" height="10" rx="3" fill="#1E40AF" />
    </svg>
  );
}
