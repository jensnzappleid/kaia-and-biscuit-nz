import React, { useState } from 'react';
import { colors, gradients } from './data/theme';
import Btn from './components/Btn';
import NzMap from './screens/NzMap';
import {
  KaiaAndBiscuitExploringSVG,
  KaiaHikingSVG, BiscuitWalkingSVG,
  BiscuitExcitedSVG,
} from './components/Characters';
import { FernSVG, KiwiSVG } from './components/NzIllustrations';

// Error boundary
class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, textAlign: 'center', fontFamily: "'Nunito', sans-serif" }}>
          <p style={{ fontSize: 18, fontWeight: 700, color: colors.textPrimary }}>Oops! Something went wrong.</p>
          <button onClick={() => { this.setState({ hasError: false }); window.location.reload(); }}
            style={{ marginTop: 16, padding: '10px 24px', borderRadius: 12, border: 'none', background: colors.purple, color: 'white', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function LandingPage({ onStart }) {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', padding: '24px 20px',
      background: 'linear-gradient(180deg, #E0F2FE 0%, #FFF0F5 40%, #FFF7ED 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Floating decorations */}
      <div style={{ position: 'absolute', top: 20, left: 15, opacity: 0.2 }}>
        <FernSVG size={60} color="#22C55E" />
      </div>
      <div style={{ position: 'absolute', top: 60, right: 20, opacity: 0.15 }}>
        <KiwiSVG size={50} color="#8B6914" />
      </div>
      <div style={{ position: 'absolute', bottom: 80, left: 20, opacity: 0.12, transform: 'rotate(-15deg)' }}>
        <FernSVG size={45} color="#34D399" />
      </div>

      {/* Title card */}
      <div style={{
        background: 'white', borderRadius: 28, padding: '28px 24px 24px',
        boxShadow: '0 8px 40px rgba(192, 132, 252, 0.15), 0 2px 12px rgba(0,0,0,0.05)',
        textAlign: 'center', maxWidth: 360, width: '100%',
        border: '2px solid #C084FC20', position: 'relative',
      }}>
        {/* Decorative ribbon */}
        <div style={{
          position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
          background: gradients.purple, borderRadius: 20, padding: '6px 20px',
          boxShadow: '0 3px 12px rgba(192, 132, 252, 0.3)',
        }}>
          <span style={{ fontFamily: "'Fredoka One', cursive", fontSize: 12, color: 'white', letterSpacing: 1 }}>
            NZ ADVENTURE
          </span>
        </div>

        {/* Main characters illustration */}
        <div style={{ margin: '12px 0 16px', display: 'flex', justifyContent: 'center' }}>
          <KaiaAndBiscuitExploringSVG size={240} />
        </div>

        <h1 style={{
          fontFamily: "'Fredoka One', cursive", fontSize: 26, color: colors.textPrimary,
          margin: '0 0 4px', lineHeight: 1.2,
        }}>
          Kaia & Biscuit's
        </h1>
        <h2 style={{
          fontFamily: "'Fredoka One', cursive", fontSize: 22, color: colors.purple,
          margin: '0 0 12px',
        }}>
          NZ Adventure
        </h2>
        <p style={{
          fontFamily: "'Nunito', sans-serif", fontSize: 15, color: colors.textSecondary,
          fontWeight: 600, lineHeight: 1.6, margin: '0 0 20px',
        }}>
          Join Kaia and her kiwi bird friend Biscuit as they explore all 16 regions of Aotearoa New Zealand!
        </p>

        {/* Character intro cards */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
          <div style={{
            flex: 1, background: '#F5F3FF', borderRadius: 16, padding: '12px 8px',
            textAlign: 'center', border: '1px solid #C084FC15',
          }}>
            <KaiaHikingSVG size={60} />
            <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 13, color: colors.textPrimary, marginTop: 6 }}>Kaia</div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: colors.textSecondary, fontWeight: 600 }}>Explorer girl</div>
          </div>
          <div style={{
            flex: 1, background: '#FFFBEB', borderRadius: 16, padding: '12px 8px',
            textAlign: 'center', border: '1px solid #F59E0B15',
          }}>
            <BiscuitExcitedSVG size={55} />
            <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 13, color: colors.textPrimary, marginTop: 6 }}>Biscuit</div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: colors.textSecondary, fontWeight: 600 }}>Kiwi companion</div>
          </div>
        </div>

        <Btn gradient={gradients.purple} size="lg" onClick={onStart} style={{ width: '100%' }}>
          Start the Adventure! 🗺️
        </Btn>

        <p style={{
          fontFamily: "'Nunito', sans-serif", fontSize: 12, color: colors.textMuted,
          fontWeight: 600, margin: '14px 0 0',
        }}>
          16 regions &bull; 16 stories &bull; 16 quizzes
        </p>
      </div>

      {/* Small footer characters */}
      <div style={{ marginTop: 24, display: 'flex', alignItems: 'flex-end', gap: 10, opacity: 0.4 }}>
        <BiscuitWalkingSVG size={30} />
        <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: colors.textMuted, fontWeight: 700 }}>
          Let's go!
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const [started, setStarted] = useState(() => {
    // If user has progress, skip landing
    try {
      const saved = localStorage.getItem('harper-nz-story-progress');
      if (saved) {
        const p = JSON.parse(saved);
        return (p.read && p.read.length > 0) || (p.quizPassed && p.quizPassed.length > 0);
      }
    } catch {}
    return false;
  });

  if (!started) {
    return (
      <ErrorBoundary>
        <LandingPage onStart={() => setStarted(true)} />
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <NzMap onBack={() => setStarted(false)} />
    </ErrorBoundary>
  );
}
