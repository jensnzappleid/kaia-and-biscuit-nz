import { colors } from '../data/theme';

export default function TopBar({ title, onBack, stars, rightContent }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '12px 16px',
      background: colors.white,
      boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
      position: 'sticky', top: 0, zIndex: 100,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {onBack && (
          <button
            onClick={onBack}
            style={{
              background: 'none', border: 'none', fontSize: 22,
              cursor: 'pointer', padding: '4px 8px', borderRadius: 8,
            }}
          >
            ←
          </button>
        )}
        <span style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: 18, color: colors.textPrimary,
        }}>
          {title}
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {stars !== undefined && (
          <span style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700, fontSize: 15, color: colors.star,
          }}>
            ⭐ {stars}
          </span>
        )}
        {rightContent}
      </div>
    </div>
  );
}
