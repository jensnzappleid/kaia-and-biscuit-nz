import { useState, useEffect } from 'react';
import { colors, gradients, shadows } from '../data/theme';
import { chapters } from '../data/nzStory';
import { getRegionPhoto, getRegionCityPhotos, getRegionFamousPhotos, getRegionColor } from '../data/nzRegions';
import { nzPaths } from '../data/nzMapPaths';
import { paginateStory, highlightText } from '../utils/storyPages';
import TopBar from '../components/TopBar';
import Btn from '../components/Btn';
import Confetti from '../components/Confetti';
import { useAudio } from '../hooks/useAudio';
import { regionIllustrations } from '../components/NzIllustrations';
import {
  KaiaSVG, BiscuitSVG,
  KaiaHikingSVG, BiscuitWalkingSVG,
  KaiaReadingSVG, BiscuitExcitedSVG,
  KaiaBinocularsSVG,
} from '../components/Characters';

// Visual-center labels for each region's SVG path
// Uses median of path points (not bbox centroid) so labels sit on the visible region body
const regionLabels = {
  'northland':           { x: 303, y: 48 },
  'auckland':            { x: 351, y: 111 },
  'waikato':             { x: 378, y: 169 },
  'bay-of-plenty':       { x: 433, y: 188 },
  'gisborne':            { x: 467, y: 187 },
  'hawkes-bay':          { x: 436, y: 249 },
  'taranaki':            { x: 334, y: 238 },
  'manawatu-whanganui':  { x: 384, y: 257 },
  'wellington':          { x: 374, y: 332 },
  'tasman':              { x: 272, y: 346 },
  'nelson':              { x: 289, y: 340 },
  'marlborough':         { x: 300, y: 356 },
  'west-coast':          { x: 190, y: 430 },
  'canterbury':          { x: 260, y: 454 },
  'otago':               { x: 150, y: 555 },
  'southland':           { x: 80, y: 615 },
};

// Known bounding boxes for each region (from SVG path parsing)
const regionBBoxes = {
  'northland':          { minX: 265, minY: 0, maxX: 342, maxY: 96 },
  'auckland':           { minX: 324, minY: 79, maxX: 378, maxY: 144 },
  'waikato':            { minX: 341, minY: 99, maxX: 415, maxY: 239 },
  'bay-of-plenty':      { minX: 388, minY: 143, maxX: 477, maxY: 232 },
  'gisborne':           { minX: 439, minY: 151, maxX: 495, maxY: 222 },
  'hawkes-bay':         { minX: 399, minY: 203, maxX: 473, maxY: 296 },
  'taranaki':           { minX: 308, minY: 209, maxX: 359, maxY: 267 },
  'manawatu-whanganui': { minX: 347, minY: 201, maxX: 420, maxY: 314 },
  'wellington':         { minX: 341, minY: 308, maxX: 406, maxY: 357 },
  'tasman':             { minX: 242, minY: 299, maxX: 302, maxY: 393 },
  'nelson':             { minX: 286, minY: 336, maxX: 292, maxY: 343 },
  'marlborough':        { minX: 268, minY: 309, maxX: 333, maxY: 402 },
  'west-coast':         { minX: 85, minY: 313, maxX: 267, maxY: 510 },
  'canterbury':         { minX: 144, minY: 372, maxX: 320, maxY: 535 },
  'otago':              { minX: 88, minY: 481, maxX: 505, maxY: 808 },
  'southland':          { minX: 0, minY: 497, maxX: 133, maxY: 988 },
};

// Approximate city positions in SVG coordinates
const cityCoords = {
  'Whangārei':       { x: 330, y: 65 },
  'Kerikeri':        { x: 310, y: 35 },
  'Paihia':          { x: 318, y: 42 },
  'Auckland':        { x: 345, y: 120 },
  'Hamilton':        { x: 365, y: 180 },
  'Cambridge':       { x: 380, y: 185 },
  'Tauranga':        { x: 420, y: 175 },
  'Rotorua':         { x: 410, y: 195 },
  'Whakatāne':       { x: 450, y: 185 },
  'Gisborne':        { x: 490, y: 195 },
  'Napier':          { x: 455, y: 260 },
  'Hastings':        { x: 445, y: 270 },
  'New Plymouth':    { x: 320, y: 240 },
  'Palmerston North':{ x: 395, y: 280 },
  'Whanganui':       { x: 360, y: 265 },
  'Wellington':      { x: 385, y: 350 },
  'Richmond':        { x: 280, y: 350 },
  'Motueka':         { x: 265, y: 340 },
  'Nelson':          { x: 289, y: 340 },
  'Blenheim':        { x: 310, y: 370 },
  'Picton':          { x: 320, y: 355 },
  'Greymouth':       { x: 180, y: 420 },
  'Hokitika':        { x: 175, y: 440 },
  'Christchurch':    { x: 290, y: 460 },
  'Timaru':          { x: 270, y: 500 },
  'Queenstown':      { x: 140, y: 560 },
  'Dunedin':         { x: 220, y: 580 },
  'Wanaka':          { x: 155, y: 530 },
  'Invercargill':    { x: 90, y: 640 },
  'Te Anau':         { x: 70, y: 580 },
};

// Decorative corner SVG for storybook frames
function CornerDecor({ position, color }) {
  const flip = {
    topLeft: '',
    topRight: 'scale(-1,1)',
    bottomLeft: 'scale(1,-1)',
    bottomRight: 'scale(-1,-1)',
  }[position];
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" style={{ position: 'absolute', ...{
      topLeft: { top: -2, left: -2 },
      topRight: { top: -2, right: -2 },
      bottomLeft: { bottom: -2, left: -2 },
      bottomRight: { bottom: -2, right: -2 },
    }[position] }}>
      <g transform={`translate(14,14) ${flip} translate(-14,-14)`}>
        <path d="M2 2 Q2 14 14 14 Q2 14 2 26" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="2" cy="2" r="2.5" fill={color} />
      </g>
    </svg>
  );
}

// Decorative divider between paragraphs
function StoryDivider({ color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, margin: '4px 0 12px', opacity: 0.4 }}>
      <div style={{ width: 20, height: 1.5, background: color, borderRadius: 1 }} />
      <div style={{ width: 5, height: 5, borderRadius: '50%', background: color }} />
      <div style={{ width: 20, height: 1.5, background: color, borderRadius: 1 }} />
    </div>
  );
}

const STORAGE_KEY = 'harper-nz-story-progress';

function loadStoryProgress() {
  try {
    const d = localStorage.getItem(STORAGE_KEY);
    return d ? JSON.parse(d) : { read: [], quizPassed: [] };
  } catch { return { read: [], quizPassed: [] }; }
}

function saveStoryProgress(p) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch {}
}

// Photo with error fallback
function PhotoCard({ url, caption, height = 140, style: extraStyle }) {
  const [err, setErr] = useState(false);
  return (
    <div style={{
      width: '100%', height, borderRadius: 14, overflow: 'hidden',
      position: 'relative', background: err ? colors.purpleLight : undefined,
      ...extraStyle,
    }}>
      {!err ? (
        <img src={url} alt={caption} onError={() => setErr(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      ) : (
        <div style={{
          width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: `linear-gradient(135deg, ${colors.purpleLight}, ${colors.blueLight})`,
        }}>
          <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, fontWeight: 700, color: colors.textSecondary, textAlign: 'center', padding: 8 }}>
            📷 {caption}
          </span>
        </div>
      )}
    </div>
  );
}

// Region mini-map component — large, prominent, with city markers
function RegionMiniMap({ regionId, cities, regionColor }) {
  const pathD = nzPaths[regionId];
  if (!pathD) return null;

  const regionCities = cities.map(c => ({ name: c, ...cityCoords[c] })).filter(c => c.x);
  const bbox = regionBBoxes[regionId];
  if (!bbox) return null;

  // Use known bounding box with padding
  const padX = Math.max(30, (bbox.maxX - bbox.minX) * 0.2);
  const padY = Math.max(30, (bbox.maxY - bbox.minY) * 0.2);
  const vx = bbox.minX - padX;
  const vy = bbox.minY - padY;
  const vw = (bbox.maxX - bbox.minX) + padX * 2;
  const vh = (bbox.maxY - bbox.minY) + padY * 2;

  // Scale labels based on region size
  const regionSize = Math.max(vw, vh);
  const labelSize = Math.max(6, Math.min(12, regionSize / 18));
  const dotSize = Math.max(3, Math.min(7, regionSize / 30));
  const strokeW = Math.max(1.5, Math.min(3, regionSize / 80));

  return (
    <div style={{
      background: `linear-gradient(135deg, #F0F9FF, #FFF7ED)`,
      borderRadius: 20, padding: 16,
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)', textAlign: 'center',
      border: `2px solid ${regionColor}25`,
      position: 'relative',
    }}>
      <CornerDecor position="topLeft" color={regionColor} />
      <CornerDecor position="topRight" color={regionColor} />
      <CornerDecor position="bottomLeft" color={regionColor} />
      <CornerDecor position="bottomRight" color={regionColor} />
      <svg viewBox={`${vx} ${vy} ${vw} ${vh}`} style={{ width: '100%', maxWidth: 380, height: 'auto' }}>
        {/* Ocean background */}
        <rect x={vx} y={vy} width={vw} height={vh} fill="#E0F2FE" rx="8" />
        {/* Water pattern */}
        <pattern id={`waves-${regionId}`} x="0" y="0" width="20" height="8" patternUnits="userSpaceOnUse">
          <path d="M0 4 Q5 0 10 4 Q15 8 20 4" stroke="#BAE6FD" strokeWidth="0.5" fill="none" />
        </pattern>
        <rect x={vx} y={vy} width={vw} height={vh} fill={`url(#waves-${regionId})`} opacity="0.5" />
        {/* Region shape */}
        <path d={pathD} fill={regionColor + '25'} stroke={regionColor} strokeWidth={strokeW} strokeLinejoin="round" />
        {/* Subtle inner glow */}
        <path d={pathD} fill="none" stroke="white" strokeWidth={strokeW * 0.6} opacity="0.4" strokeLinejoin="round" />
        {/* City markers */}
        {regionCities.map((city, i) => (
          <g key={i}>
            {/* Pin shadow */}
            <circle cx={city.x + 1} cy={city.y + 1} r={dotSize} fill="rgba(0,0,0,0.15)" />
            {/* Pin */}
            <circle cx={city.x} cy={city.y} r={dotSize} fill={regionColor} stroke="white" strokeWidth={strokeW * 0.8} />
            {/* Inner dot */}
            <circle cx={city.x} cy={city.y} r={dotSize * 0.35} fill="white" />
            {/* Label background */}
            <rect x={city.x - labelSize * city.name.length * 0.3} y={city.y - dotSize - labelSize - 4}
              width={labelSize * city.name.length * 0.6} height={labelSize + 4}
              rx="3" fill="white" opacity="0.85" />
            {/* Label text */}
            <text x={city.x} y={city.y - dotSize - 4} textAnchor="middle"
              style={{ fontSize: labelSize, fontWeight: 800, fill: colors.textPrimary, fontFamily: "'Nunito', sans-serif" }}>
              {city.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function NzMap({ onBack }) {
  const [view, setView] = useState('map');
  const [activeChapter, setActiveChapter] = useState(null);
  const [progress, setProgress] = useState(loadStoryProgress);
  const [confetti, setConfetti] = useState(false);
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [page, setPage] = useState(0);
  const audio = useAudio();

  // Quiz state
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [hasRetried, setHasRetried] = useState(false);

  useEffect(() => { saveStoryProgress(progress); }, [progress]);

  const markRead = (id) => {
    if (!progress.read.includes(id)) setProgress(p => ({ ...p, read: [...p.read, id] }));
  };
  const markQuizPassed = (id) => {
    if (!progress.quizPassed.includes(id)) setProgress(p => ({ ...p, quizPassed: [...p.quizPassed, id] }));
  };

  const handleOpenChapter = (ch) => {
    audio.playClick();
    setActiveChapter(ch);
    setPage(0);
    setView('chapter');
  };

  const handleFinishReading = () => {
    markRead(activeChapter.id);
    setQIndex(0); setSelected(null); setShowHint(false);
    setCorrectCount(0); setHasRetried(false);
    setTotalQuestions(activeChapter.quiz.length);
    setView('quiz');
  };

  const questions = activeChapter?.quiz || [];
  const currentQ = questions[qIndex];

  const handleAnswer = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    const isCorrect = idx === currentQ.answer;
    if (isCorrect) { audio.playCorrect(); if (!hasRetried) setCorrectCount(c => c + 1); }
    else { audio.playIncorrect(); }
  };

  const handleNextQuestion = () => {
    if (selected === currentQ.answer) {
      if (qIndex + 1 < questions.length) {
        setQIndex(i => i + 1); setSelected(null); setShowHint(false); setHasRetried(false);
      } else {
        markQuizPassed(activeChapter.id);
        audio.playComplete(); setConfetti(true);
        setTimeout(() => setConfetti(false), 3000);
        setView('quizDone');
      }
    }
  };

  const handleRetryQuestion = () => { setSelected(null); setShowHint(true); setHasRetried(true); };

  const handleNextChapter = () => {
    const nextIdx = chapters.findIndex(c => c.id === activeChapter.id) + 1;
    if (nextIdx < chapters.length) handleOpenChapter(chapters[nextIdx]);
    else { setView('map'); setConfetti(true); audio.playComplete(); setTimeout(() => setConfetti(false), 3000); }
  };

  const goToPage = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  // === MAP VIEW ===
  if (view === 'map') {
    const readCount = progress.read.length;
    const quizCount = progress.quizPassed.length;
    return (
      <div style={{ minHeight: '100vh', background: colors.bg }}>
        <Confetti active={confetti} />
        <TopBar title="🗺️ Kaia & Biscuit's NZ Adventure" onBack={onBack} />

        {/* Progress */}
        <div style={{ padding: '12px 16px 0' }}>
          <div style={{ background: colors.white, borderRadius: 14, padding: '12px 16px', boxShadow: shadows.card }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 13, color: colors.textPrimary }}>📖 {readCount}/16 read</span>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 13, color: colors.purple }}>✅ {quizCount}/16 passed</span>
            </div>
            <div style={{ height: 6, background: colors.purpleLight, borderRadius: 3, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(quizCount / 16) * 100}%`, background: gradients.purple, borderRadius: 3, transition: 'width 0.4s ease' }} />
            </div>
          </div>
        </div>

        {/* Characters intro */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 16px 4px' }}>
          <KaiaSVG size={36} />
          <span style={{ fontFamily: "'Fredoka One', cursive", fontSize: 13, color: colors.textPrimary }}>Kaia</span>
          <span style={{ color: colors.textMuted, fontSize: 12 }}>&</span>
          <BiscuitSVG size={28} />
          <span style={{ fontFamily: "'Fredoka One', cursive", fontSize: 13, color: colors.textPrimary }}>Biscuit</span>
        </div>

        {/* Real SVG Map */}
        <div style={{ padding: '4px 12px 0', display: 'flex', justifyContent: 'center' }}>
          <svg viewBox="0 0 550 988" style={{ width: '100%', maxWidth: 360, height: 'auto' }}>
            <rect x="0" y="0" width="550" height="988" rx="16" fill={colors.blueLight} opacity="0.25" />
            {Object.entries(nzPaths).map(([regionId, d]) => {
              const ch = chapters.find(c => c.id === regionId);
              const isRead = progress.read.includes(regionId);
              const isPassed = progress.quizPassed.includes(regionId);
              const isHovered = hoveredRegion === regionId;
              const rc = getRegionColor(regionId);
              let fill = '#E8F5E9';
              if (isPassed) fill = '#BBF7D0';
              else if (isRead) fill = '#DBEAFE';
              else if (isHovered) fill = rc + '40';
              return (
                <path key={regionId} d={d} fill={fill}
                  stroke={isHovered ? rc : '#A5D6A7'} strokeWidth={isHovered ? 2.5 : 1}
                  style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                  onClick={() => ch && handleOpenChapter(ch)}
                  onMouseEnter={() => setHoveredRegion(regionId)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onTouchStart={() => setHoveredRegion(regionId)}
                />
              );
            })}
            {Object.entries(regionLabels).map(([regionId, pos]) => {
              const ch = chapters.find(c => c.id === regionId);
              const isPassed = progress.quizPassed.includes(regionId);
              const isRead = progress.read.includes(regionId);
              const rc = getRegionColor(regionId);
              if (!ch) return null;
              const isSmall = ['nelson'].includes(regionId);
              const r = isSmall ? 8 : 10;
              return (
                <g key={`l-${regionId}`} onClick={() => handleOpenChapter(ch)} style={{ cursor: 'pointer' }}>
                  {!isRead && (
                    <circle cx={pos.x} cy={pos.y} r={r + 5} fill={rc} opacity="0.25">
                      <animate attributeName="r" values={`${r + 2};${r + 7};${r + 2}`} dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.25;0.08;0.25" dur="2s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle cx={pos.x} cy={pos.y} r={r}
                    fill={isPassed ? colors.correct : isRead ? rc : colors.white}
                    stroke={rc} strokeWidth="2" />
                  <text x={pos.x} y={pos.y + 4} textAnchor="middle"
                    style={{ fontSize: isSmall ? 8 : 10, fontWeight: 800, fill: (isPassed || isRead) ? '#fff' : colors.textPrimary, fontFamily: "'Nunito', sans-serif" }}>
                    {ch.chapter}
                  </text>
                </g>
              );
            })}
            <text x="385" y="380" textAnchor="middle"
              style={{ fontSize: 11, fill: colors.textMuted, fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontStyle: 'italic' }}>
              Cook Strait
            </text>
          </svg>
        </div>

        {/* Chapter List */}
        <div style={{ padding: '8px 16px 24px' }}>
          <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 17, color: colors.textPrimary, margin: '0 0 10px' }}>Chapters</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {chapters.map(ch => {
              const isRead = progress.read.includes(ch.id);
              const isPassed = progress.quizPassed.includes(ch.id);
              const photo = getRegionPhoto(ch.id);
              return (
                <button key={ch.id} onClick={() => handleOpenChapter(ch)}
                  style={{
                    background: colors.white, border: `2px solid ${isPassed ? colors.correct : 'transparent'}`,
                    borderRadius: 16, padding: 0, overflow: 'hidden', display: 'flex', alignItems: 'center',
                    boxShadow: shadows.card, cursor: 'pointer', WebkitTapHighlightColor: 'transparent',
                    width: '100%', textAlign: 'left',
                  }}>
                  <div style={{
                    width: 72, height: 72, flexShrink: 0, backgroundImage: `url(${photo})`,
                    backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative',
                  }}>
                    {isPassed && (
                      <div style={{
                        position: 'absolute', top: 4, left: 4, background: colors.correct, borderRadius: '50%',
                        width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 10, color: '#fff',
                      }}>✓</div>
                    )}
                  </div>
                  <div style={{ padding: '8px 12px', flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 13, color: colors.textPrimary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      Ch.{ch.chapter}: {ch.regionLabel}
                    </div>
                    <div style={{ fontSize: 11, color: colors.textSecondary, fontWeight: 600, fontFamily: "'Nunito', sans-serif" }}>{ch.maoriName}</div>
                    <div style={{ fontSize: 10, color: colors.textMuted, fontWeight: 600, marginTop: 2, fontFamily: "'Nunito', sans-serif", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{ch.cities.join(' · ')}</div>
                  </div>
                  <div style={{ padding: '0 12px', fontSize: 16, color: colors.textMuted }}>→</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // === CHAPTER READING VIEW (illustration book style) ===
  if (view === 'chapter' && activeChapter) {
    const photo = getRegionPhoto(activeChapter.id);
    const cityPhotos = getRegionCityPhotos(activeChapter.id);
    const famousPhotos = getRegionFamousPhotos(activeChapter.id);
    const regionColor = getRegionColor(activeChapter.id);
    const paragraphs = activeChapter.story.split('\n\n');
    const storyPages = paginateStory(paragraphs);
    const totalPages = storyPages.length + 2;
    const isOverview = page === 0;
    const isSummary = page === totalPages - 1;
    const storyPageIndex = page - 1;

    // Distribute photos across story pages
    const allPhotos = [...cityPhotos, ...famousPhotos];
    const photoForPage = (pi) => {
      if (allPhotos.length === 0) return null;
      const interval = Math.max(2, Math.floor(storyPages.length / allPhotos.length));
      const idx = Math.floor(pi / interval);
      return idx < allPhotos.length ? allPhotos[idx] : null;
    };

    // Get region illustrations
    const illustrations = regionIllustrations[activeChapter.id] || [];
    const IllustrationForPage = (pi) => {
      if (illustrations.length === 0) return null;
      // Show illustration on pages that don't have a photo
      if (photoForPage(pi)) return null;
      return illustrations[pi % illustrations.length];
    };

    // Storybook page background
    const pageStyle = {
      background: `linear-gradient(145deg, #FFFBF0, #FFF8F0, #FFFBF5)`,
      borderRadius: 24,
      margin: '0 10px',
      padding: '20px 18px',
      boxShadow: '0 4px 24px rgba(139, 92, 60, 0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
      border: '1px solid rgba(139, 92, 60, 0.08)',
      position: 'relative',
      minHeight: 400,
    };

    return (
      <div style={{ minHeight: '100vh', background: `linear-gradient(180deg, ${regionColor}15, #FFF5F0, ${colors.bg})` }}>
        <TopBar
          title={activeChapter.regionLabel}
          onBack={() => { if (page > 0) goToPage(0); else setView('map'); }}
          rightContent={
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 13, color: colors.purple }}>
              Ch.{activeChapter.chapter}
            </span>
          }
        />

        {/* Page dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4, padding: '8px 16px 10px', flexWrap: 'wrap' }}>
          {Array.from({ length: totalPages }, (_, i) => (
            <div key={i} onClick={() => goToPage(i)} style={{
              width: i === page ? 20 : 7, height: 7, borderRadius: 4,
              background: i === page ? regionColor : `${regionColor}30`,
              transition: 'all 0.3s ease', cursor: 'pointer',
            }} />
          ))}
        </div>

        {/* === PAGE 0: Region Overview (Title Page) === */}
        {isOverview && (
          <div style={{ padding: '0 0 12px' }}>
            {/* Hero with storybook frame */}
            <div style={{
              margin: '0 10px', borderRadius: 24, overflow: 'hidden',
              boxShadow: '0 6px 30px rgba(0,0,0,0.12)',
              border: `3px solid ${regionColor}30`,
              position: 'relative',
            }}>
              <div style={{
                width: '100%', height: 220, backgroundImage: `url(${photo})`,
                backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.85))', padding: '60px 20px 20px',
                }}>
                  {/* Decorative line */}
                  <div style={{ width: 40, height: 3, background: regionColor, borderRadius: 2, marginBottom: 10, opacity: 0.8 }} />
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 800, color: regionColor, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>
                    Chapter {activeChapter.chapter}
                  </div>
                  <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 28, color: '#fff', margin: '0 0 4px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                    {activeChapter.regionLabel}
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.9)', margin: 0, fontWeight: 700, fontStyle: 'italic', fontFamily: "'Nunito', sans-serif" }}>
                    {activeChapter.maoriName}
                  </p>
                </div>
              </div>
            </div>

            {/* Characters card — storybook style */}
            <div style={{ padding: '14px 10px 0' }}>
              <div style={{
                background: 'linear-gradient(135deg, #FFF7ED, #FFF0F5)',
                borderRadius: 20, padding: '14px 18px',
                boxShadow: '0 3px 16px rgba(0,0,0,0.06)',
                display: 'flex', alignItems: 'center', gap: 12,
                border: `2px solid ${regionColor}20`,
              }}>
                <KaiaHikingSVG size={50} />
                <BiscuitWalkingSVG size={42} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 15, color: colors.textPrimary }}>
                    Kaia & Biscuit
                  </div>
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, color: colors.textSecondary, fontWeight: 700 }}>
                    are exploring {activeChapter.regionLabel}!
                  </div>
                </div>
              </div>
            </div>

            {/* Region illustration banner */}
            {illustrations.length > 0 && (
              <div style={{
                display: 'flex', justifyContent: 'center', gap: 16, padding: '16px 10px 0',
                opacity: 0.9,
              }}>
                {illustrations.map((Illus, i) => (
                  <div key={i} style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.08))' }}>
                    <Illus size={i === 0 ? 110 : 90} color={regionColor} />
                  </div>
                ))}
              </div>
            )}

            {/* Region mini-map — large and prominent */}
            <div style={{ padding: '16px 10px 0' }}>
              <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 19, color: colors.textPrimary, margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 22 }}>🗺️</span> Region Map
              </h3>
              <RegionMiniMap regionId={activeChapter.id} cities={activeChapter.cities} regionColor={regionColor} />
            </div>

            {/* Cities photos — larger cards */}
            <div style={{ padding: '18px 10px 0' }}>
              <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 19, color: colors.textPrimary, margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 22 }}>📍</span> Major Cities
              </h3>
              <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 8, WebkitOverflowScrolling: 'touch' }}>
                {cityPhotos.map((cp, i) => (
                  <div key={i} style={{
                    minWidth: 160, maxWidth: 160, borderRadius: 18, overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.08)', background: colors.white, flexShrink: 0,
                    border: `2px solid ${regionColor}15`,
                  }}>
                    <PhotoCard url={cp.url} caption={cp.caption} height={120} />
                    <div style={{ padding: '10px 12px', fontFamily: "'Fredoka One', cursive", fontSize: 15, color: colors.textPrimary, textAlign: 'center' }}>
                      {cp.city}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Famous For — illustrated cards */}
            <div style={{ padding: '18px 10px 0' }}>
              <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 19, color: colors.textPrimary, margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 22 }}>⭐</span> Famous For
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {famousPhotos.map((fp, i) => (
                  <div key={i} style={{
                    borderRadius: 18, overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.08)', background: colors.white,
                    display: 'flex', alignItems: 'center',
                    border: `2px solid ${regionColor}15`,
                  }}>
                    <div style={{ width: 100, height: 80, flexShrink: 0 }}>
                      <PhotoCard url={fp.url} caption={fp.caption} height={80} style={{ borderRadius: 0 }} />
                    </div>
                    <div style={{ padding: '10px 16px', flex: 1 }}>
                      <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 15, color: colors.textPrimary }}>{fp.item}</div>
                      <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: colors.textSecondary, fontWeight: 600, marginTop: 2 }}>{fp.caption}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* === STORY PAGES (illustration book style) === */}
        {!isOverview && !isSummary && storyPages[storyPageIndex] && (
          <div style={pageStyle}>
            {/* Corner decorations */}
            <CornerDecor position="topLeft" color={regionColor} />
            <CornerDecor position="topRight" color={regionColor} />
            <CornerDecor position="bottomLeft" color={regionColor} />
            <CornerDecor position="bottomRight" color={regionColor} />

            {/* Page number ribbon */}
            <div style={{
              position: 'absolute', top: -1, right: 24,
              background: regionColor, color: '#fff',
              padding: '4px 12px 6px', borderRadius: '0 0 10px 10px',
              fontFamily: "'Fredoka One', cursive", fontSize: 11,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}>
              Page {page}/{totalPages - 2}
            </div>

            {/* Photo for this page */}
            {photoForPage(storyPageIndex) && (
              <div style={{
                marginBottom: 16, borderRadius: 16, overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(139, 92, 60, 0.12)',
                border: `2px solid ${regionColor}20`,
              }}>
                <PhotoCard url={photoForPage(storyPageIndex).url} caption={photoForPage(storyPageIndex).caption || photoForPage(storyPageIndex).city || photoForPage(storyPageIndex).item} height={160} />
                <div style={{
                  background: `linear-gradient(135deg, ${regionColor}10, ${regionColor}05)`,
                  padding: '8px 14px', textAlign: 'center',
                  fontFamily: "'Nunito', sans-serif", fontSize: 12, fontWeight: 700, color: colors.textSecondary,
                  fontStyle: 'italic',
                }}>
                  📸 {photoForPage(storyPageIndex).caption || photoForPage(storyPageIndex).city || photoForPage(storyPageIndex).item}
                </div>
              </div>
            )}

            {/* SVG illustration on pages without photos */}
            {(() => {
              const Illus = IllustrationForPage(storyPageIndex);
              if (!Illus) return null;
              return (
                <div style={{
                  display: 'flex', justifyContent: 'center', marginBottom: 14,
                  opacity: 0.85, filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.06))',
                }}>
                  <Illus size={130} color={regionColor} />
                </div>
              );
            })()}

            {storyPages[storyPageIndex].map((para, i) => {
              const isDialogue = para.trimStart().startsWith('"') || para.trimStart().startsWith('\u201C');
              const segments = highlightText(para, activeChapter);

              const isBiscuitDialogue = /said Biscuit|Biscuit said|Biscuit asked|Biscuit announced|Biscuit declared|Biscuit shrieked|Biscuit whispered|Biscuit agreed|Biscuit gasped|Biscuit huffed|Biscuit nodded|Biscuit crowed|Biscuit spluttered|Biscuit grumbled|Biscuit mused|Biscuit observed|Biscuit sighed|Biscuit perked|," Biscuit |," said Biscuit/.test(para);
              const isKaiaDialogue = !isBiscuitDialogue && /said Kaia|Kaia said|Kaia asked|Kaia read|Kaia told|Kaia explained|Kaia pointed|Kaia whispered|Kaia laughed|Kaia grinned|," Kaia |," said Kaia/.test(para);

              // Drop cap for first paragraph of first story page (not dialogue)
              const isFirstPara = i === 0 && storyPageIndex === 0 && !isDialogue;

              return (
                <div key={i}>
                  {/* Character icon for dialogue */}
                  {isDialogue && (isBiscuitDialogue || isKaiaDialogue) && (
                    <div style={{ marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                      {isBiscuitDialogue && <BiscuitSVG size={22} />}
                      {isKaiaDialogue && !isBiscuitDialogue && <KaiaSVG size={26} />}
                      <span style={{ fontFamily: "'Fredoka One', cursive", fontSize: 12, color: regionColor }}>
                        {isBiscuitDialogue ? 'Biscuit' : 'Kaia'}
                      </span>
                    </div>
                  )}
                  <div style={{
                    ...(isDialogue ? {
                      borderLeft: `3px solid ${regionColor}`,
                      paddingLeft: 14, marginLeft: 4,
                      background: `${regionColor}08`,
                      borderRadius: '0 12px 12px 0',
                      padding: '10px 14px 10px 14px',
                      marginBottom: 12,
                    } : { marginBottom: 14 }),
                  }}>
                    <p style={{
                      fontFamily: "'Nunito', sans-serif", fontSize: 18, color: '#2D1B0E',
                      lineHeight: 1.9, margin: 0, fontWeight: 600,
                    }}>
                      {isFirstPara && segments.length > 0 && segments[0].type === 'normal' && segments[0].text.length > 1 ? (
                        <>
                          <span style={{
                            float: 'left', fontSize: 52, fontFamily: "'Fredoka One', cursive",
                            color: regionColor, lineHeight: 0.8, marginRight: 6, marginTop: 4,
                            textShadow: `2px 2px 0 ${regionColor}20`,
                          }}>
                            {segments[0].text[0]}
                          </span>
                          <span>{segments[0].text.slice(1)}</span>
                          {segments.slice(1).map((seg, j) => {
                            if (seg.type === 'place') return <span key={j+1} style={{ fontWeight: 800, color: '#3B82F6' }}>{seg.text}</span>;
                            if (seg.type === 'number') return <span key={j+1} style={{ fontWeight: 800, color: '#F97316' }}>{seg.text}</span>;
                            if (seg.type === 'maori') return <span key={j+1} style={{ fontWeight: 700, fontStyle: 'italic', background: '#A7F3D040', borderRadius: 4, padding: '0 3px' }}>{seg.text}</span>;
                            return <span key={j+1}>{seg.text}</span>;
                          })}
                        </>
                      ) : (
                        segments.map((seg, j) => {
                          if (seg.type === 'place') return <span key={j} style={{ fontWeight: 800, color: '#3B82F6' }}>{seg.text}</span>;
                          if (seg.type === 'number') return <span key={j} style={{ fontWeight: 800, color: '#F97316' }}>{seg.text}</span>;
                          if (seg.type === 'maori') return <span key={j} style={{ fontWeight: 700, fontStyle: 'italic', background: '#A7F3D040', borderRadius: 4, padding: '0 3px' }}>{seg.text}</span>;
                          return <span key={j}>{seg.text}</span>;
                        })
                      )}
                    </p>
                  </div>
                  {/* Decorative divider between paragraphs */}
                  {i < storyPages[storyPageIndex].length - 1 && !isDialogue && (
                    <StoryDivider color={regionColor} />
                  )}
                </div>
              );
            })}

            {/* Bottom characters walking */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: 4, marginTop: 12, opacity: 0.5 }}>
              <KaiaHikingSVG size={28} />
              <BiscuitWalkingSVG size={24} />
            </div>
          </div>
        )}

        {/* === SUMMARY PAGE (storybook style) === */}
        {isSummary && (
          <div style={{ ...pageStyle, textAlign: 'center' }}>
            <CornerDecor position="topLeft" color={regionColor} />
            <CornerDecor position="topRight" color={regionColor} />
            <CornerDecor position="bottomLeft" color={regionColor} />
            <CornerDecor position="bottomRight" color={regionColor} />

            {/* Characters + illustration celebrating */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 10, alignItems: 'flex-end' }}>
                <KaiaReadingSVG size={80} />
                {illustrations[0] && (() => { const I = illustrations[0]; return <I size={60} color={regionColor} />; })()}
                <BiscuitExcitedSVG size={60} />
              </div>
              <p style={{ fontFamily: "'Fredoka One', cursive", fontSize: 18, color: colors.textPrimary, margin: 0 }}>
                Great reading! Ready for the quiz?
              </p>
            </div>

            {/* Key Facts — illustrated card */}
            <div style={{
              background: `linear-gradient(135deg, ${regionColor}10, ${regionColor}05)`,
              borderRadius: 20, padding: '18px 16px',
              border: `2px solid ${regionColor}25`, marginBottom: 22,
              textAlign: 'left',
            }}>
              <h4 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 18, color: regionColor, margin: '0 0 14px', textAlign: 'center' }}>
                📋 Key Facts
              </h4>
              {[
                { label: 'Region', value: `${activeChapter.regionLabel} (${activeChapter.maoriName})`, icon: '🏔️' },
                { label: 'Major cities', value: activeChapter.cities.join(', '), icon: '🏙️' },
                { label: 'Famous for', value: activeChapter.famousFor, icon: '⭐' },
              ].map((fact, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 10, padding: '8px 0', alignItems: 'flex-start',
                  borderBottom: i < 2 ? `1px solid ${regionColor}15` : 'none',
                }}>
                  <span style={{ fontSize: 18, flexShrink: 0 }}>{fact.icon}</span>
                  <div>
                    <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 800, color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 1 }}>{fact.label}</span>
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 15, fontWeight: 700, color: colors.textPrimary, marginTop: 2 }}>{fact.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <Btn gradient={gradients.purple} size="lg" onClick={handleFinishReading} style={{ width: '100%' }}>
              Take the Quiz! 📝 ({activeChapter.quiz.length} questions)
            </Btn>
          </div>
        )}

        {/* Page navigation — book-style */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 10px 24px', gap: 12 }}>
          {page > 0 ? (
            <Btn color={regionColor} size="md" onClick={() => goToPage(page - 1)} style={{ flex: 1 }}>← Back</Btn>
          ) : <div style={{ flex: 1 }} />}
          <span style={{ fontFamily: "'Fredoka One', cursive", fontWeight: 700, fontSize: 13, color: colors.textMuted, whiteSpace: 'nowrap' }}>
            {page + 1} / {totalPages}
          </span>
          {page < totalPages - 1 ? (
            <Btn gradient={`linear-gradient(135deg, ${regionColor}, ${regionColor}CC)`} size="md" onClick={() => goToPage(page + 1)} style={{ flex: 1 }}>Next →</Btn>
          ) : <div style={{ flex: 1 }} />}
        </div>
      </div>
    );
  }

  // === QUIZ VIEW ===
  if (view === 'quiz' && activeChapter && currentQ) {
    const answered = selected !== null;
    const isCorrect = selected === currentQ.answer;
    const regionColor = getRegionColor(activeChapter.id);
    const progressPct = ((qIndex + (answered && isCorrect ? 1 : 0)) / totalQuestions) * 100;
    return (
      <div style={{ minHeight: '100vh', background: `linear-gradient(180deg, ${regionColor}10, ${colors.bg})` }}>
        <TopBar title={`Quiz: ${activeChapter.regionLabel}`} onBack={() => setView('chapter')}
          rightContent={<span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 13, color: regionColor }}>{qIndex + 1}/{totalQuestions}</span>} />
        <div style={{ padding: '0 16px', marginTop: 8 }}>
          <div style={{ height: 8, background: `${regionColor}20`, borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progressPct}%`, background: regionColor, borderRadius: 4, transition: 'width 0.4s ease' }} />
          </div>
        </div>
        <div style={{ padding: '20px 16px' }}>
          <div style={{
            background: 'linear-gradient(145deg, #FFFBF0, #FFF8F0)',
            borderRadius: 24, padding: '24px 20px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)', marginBottom: 16, textAlign: 'center',
            border: `2px solid ${regionColor}15`, position: 'relative',
          }}>
            <CornerDecor position="topLeft" color={regionColor} />
            <CornerDecor position="topRight" color={regionColor} />
            <div style={{ fontSize: 32, marginBottom: 10 }}>🤔</div>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 18, color: colors.textPrimary, margin: 0, lineHeight: 1.5 }}>{currentQ.q}</p>
          </div>
          {showHint && currentQ.hint && (
            <div style={{ background: '#FFF8E1', borderRadius: 16, padding: '12px 16px', marginBottom: 14, border: '2px solid #FDE68A' }}>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 14, color: '#92400E', margin: 0 }}>💡 Hint: {currentQ.hint}</p>
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {currentQ.choices.map((c, i) => {
              let bg = colors.white, borderColor = 'transparent', textColor = colors.textPrimary;
              if (answered) {
                if (i === currentQ.answer) { bg = '#D1FAE5'; borderColor = colors.correct; textColor = '#065F46'; }
                else if (i === selected && i !== currentQ.answer) { bg = '#FEE2E2'; borderColor = colors.incorrect; textColor = '#991B1B'; }
              }
              return (
                <button key={i} onClick={() => handleAnswer(i)} disabled={answered}
                  style={{
                    background: bg, border: `2px solid ${borderColor}`, borderRadius: 16, padding: '14px 18px',
                    fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 16, color: textColor,
                    cursor: answered ? 'default' : 'pointer', boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                    WebkitTapHighlightColor: 'transparent', transition: 'all 0.2s ease', width: '100%', textAlign: 'center',
                  }}>{c}</button>
              );
            })}
          </div>
          {answered && (
            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <div style={{ fontSize: 44, marginBottom: 8 }}>{isCorrect ? '✅' : '😅'}</div>
              <p style={{ fontFamily: "'Fredoka One', cursive", fontSize: 20, color: isCorrect ? colors.correct : colors.incorrect, margin: '0 0 14px' }}>
                {isCorrect ? 'Correct!' : 'Not quite — try again!'}
              </p>
              {isCorrect ? (
                <Btn gradient={`linear-gradient(135deg, ${regionColor}, ${regionColor}CC)`} onClick={handleNextQuestion} style={{ width: '100%' }}>
                  {qIndex + 1 < totalQuestions ? 'Next Question →' : 'See Results! 🎉'}
                </Btn>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <Btn gradient={gradients.coral} onClick={handleRetryQuestion} style={{ width: '100%' }}>Try Again (with hint) 💡</Btn>
                  <Btn color={colors.blue} onClick={() => { setView('chapter'); setPage(0); }} style={{ width: '100%' }}>Re-read the Chapter 📖</Btn>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // === QUIZ DONE VIEW ===
  if (view === 'quizDone' && activeChapter) {
    const isLastChapter = chapters.findIndex(c => c.id === activeChapter.id) >= chapters.length - 1;
    const regionColor = getRegionColor(activeChapter.id);
    return (
      <div style={{ minHeight: '100vh', background: `linear-gradient(180deg, ${regionColor}10, ${colors.bg})`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <Confetti active={confetti} />
        <div style={{
          background: 'linear-gradient(145deg, #FFFBF0, #FFF8F0)',
          borderRadius: 28, padding: '36px 28px',
          boxShadow: '0 6px 30px rgba(0,0,0,0.08)', textAlign: 'center', maxWidth: 340, width: '100%',
          border: `2px solid ${regionColor}20`, position: 'relative',
        }}>
          <CornerDecor position="topLeft" color={regionColor} />
          <CornerDecor position="topRight" color={regionColor} />
          <CornerDecor position="bottomLeft" color={regionColor} />
          <CornerDecor position="bottomRight" color={regionColor} />
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 14, alignItems: 'flex-end' }}>
            <KaiaBinocularsSVG size={70} />
            <BiscuitExcitedSVG size={60} />
          </div>
          <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 24, color: regionColor, margin: '0 0 6px' }}>Quiz Complete!</h2>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 16, color: colors.textSecondary, fontWeight: 600, margin: '0 0 4px' }}>
            {activeChapter.regionLabel} — {activeChapter.maoriName}
          </p>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 15, color: colors.textPrimary, fontWeight: 700, margin: '0 0 20px' }}>
            {correctCount}/{totalQuestions} correct on first try!
          </p>
          <div style={{ background: `${regionColor}15`, borderRadius: 16, padding: '14px 18px', marginBottom: 22 }}>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 14, color: colors.textPrimary, margin: 0 }}>
              {correctCount === totalQuestions ? "Perfect score! You remembered everything! 🌟"
                : correctCount >= totalQuestions - 1 ? "Almost perfect — amazing memory! 💜"
                : "Great effort — you got there in the end! 💪"}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Btn gradient={`linear-gradient(135deg, ${regionColor}, ${regionColor}CC)`} onClick={handleNextChapter} style={{ width: '100%' }}>
              {isLastChapter ? 'Finish Adventure! 🏆' : 'Next Chapter →'}
            </Btn>
            <Btn color={colors.blue} onClick={() => setView('map')} style={{ width: '100%' }}>Back to Map 🗺️</Btn>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
