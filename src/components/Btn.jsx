import { useState } from 'react';
import { colors, shadows } from '../data/theme';

export default function Btn({ children, onClick, gradient, color, size = 'md', disabled, style: extraStyle, ...rest }) {
  const [pressed, setPressed] = useState(false);

  const sizes = {
    sm: { padding: '8px 16px', fontSize: 14, borderRadius: 12 },
    md: { padding: '12px 24px', fontSize: 16, borderRadius: 16 },
    lg: { padding: '16px 32px', fontSize: 18, borderRadius: 20 },
  };

  const s = sizes[size] || sizes.md;

  return (
    <button
      onClick={disabled ? undefined : onClick}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      disabled={disabled}
      style={{
        background: gradient || color || colors.purple,
        color: colors.white,
        border: 'none',
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 700,
        cursor: disabled ? 'default' : 'pointer',
        boxShadow: pressed ? shadows.btnActive : shadows.btn,
        transform: pressed ? 'scale(0.96)' : 'scale(1)',
        transition: 'all 0.15s ease',
        opacity: disabled ? 0.5 : 1,
        WebkitTapHighlightColor: 'transparent',
        ...s,
        ...extraStyle,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
