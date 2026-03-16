// K-pop inspired color palette for Harper's Study Hub
export const colors = {
  // Pastel K-pop palette
  pink: '#FF6B9D',
  pinkLight: '#FFB3D1',
  purple: '#C084FC',
  purpleLight: '#E0BBFF',
  blue: '#60A5FA',
  blueLight: '#BFDBFE',
  mint: '#6EE7B7',
  mintLight: '#A7F3D0',
  yellow: '#FBBF24',
  yellowLight: '#FDE68A',
  coral: '#FB923C',
  coralLight: '#FDBA74',

  // Neutrals
  white: '#FFFFFF',
  bg: '#FFF5F9',
  bgCard: '#FFFFFF',
  textPrimary: '#1F1235',
  textSecondary: '#6B5B7B',
  textMuted: '#A99BBD',

  // Status
  correct: '#10B981',
  incorrect: '#EF4444',
  star: '#FBBF24',
};

export const gradients = {
  pink: 'linear-gradient(135deg, #FF6B9D, #FF8FB1)',
  purple: 'linear-gradient(135deg, #C084FC, #A855F7)',
  blue: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
  mint: 'linear-gradient(135deg, #6EE7B7, #34D399)',
  yellow: 'linear-gradient(135deg, #FBBF24, #F59E0B)',
  coral: 'linear-gradient(135deg, #FB923C, #F97316)',
  rainbow: 'linear-gradient(135deg, #FF6B9D, #C084FC, #60A5FA, #6EE7B7)',
};

export const shadows = {
  card: '0 4px 20px rgba(255, 107, 157, 0.15)',
  cardHover: '0 8px 30px rgba(255, 107, 157, 0.25)',
  btn: '0 4px 15px rgba(0,0,0,0.1)',
  btnActive: '0 2px 8px rgba(0,0,0,0.1)',
};

// Subject config
export const subjects = {
  maths: { emoji: '🔢', label: 'Maths', gradient: gradients.purple, color: colors.purple },
  social: { emoji: '🌏', label: 'Social Studies', gradient: gradients.blue, color: colors.blue },
  english: { emoji: '📖', label: 'English', gradient: gradients.pink, color: colors.pink },
  science: { emoji: '🔬', label: 'Science', gradient: gradients.mint, color: colors.mint },
};
