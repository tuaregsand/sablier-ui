export type ColorScheme = 'light' | 'dark' | 'system';

export type ThemeColors = {
  primary: string;
  primaryHover: string;
  primaryActive: string;
  primaryForeground: string;
  secondary: string;
  secondaryHover: string;
  secondaryActive: string;
  secondaryForeground: string;
  accent: string;
  accentHover: string;
  accentActive: string;
  accentForeground: string;
  destructive: string;
  destructiveHover: string;
  destructiveActive: string;
  destructiveForeground: string;
  foreground: string;
  background: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  muted: string;
  mutedForeground: string;
  border: string;
  input: string;
  ring: string;
  radius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    full: string;
  };
};

export type FontSettings = {
  family: {
    sans: string;
    mono: string;
  };
  size: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
  };
  weight: {
    light: string;
    normal: string;
    medium: string;
    semibold: string;
    bold: string;
  };
  lineHeight: {
    none: string;
    tight: string;
    normal: string;
    relaxed: string;
    loose: string;
  };
};

export type SpacingSettings = {
  px: string;
  '0': string;
  '0.5': string;
  '1': string;
  '1.5': string;
  '2': string;
  '2.5': string;
  '3': string;
  '3.5': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
  '10': string;
  '11': string;
  '12': string;
  '14': string;
  '16': string;
  '20': string;
  '24': string;
  '28': string;
  '32': string;
  '36': string;
  '40': string;
  '44': string;
  '48': string;
  '52': string;
  '56': string;
  '60': string;
  '64': string;
  '72': string;
  '80': string;
  '96': string;
};

export type BreakpointSettings = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
};

export type Theme = {
  colorScheme: ColorScheme;
  colors: ThemeColors;
  fonts: FontSettings;
  spacing: SpacingSettings;
  breakpoints: BreakpointSettings;
  animation: {
    duration: {
      fastest: string;
      fast: string;
      normal: string;
      slow: string;
      slowest: string;
    };
    easing: {
      default: string;
      linear: string;
      in: string;
      out: string;
      inOut: string;
    };
  };
};

export const lightColors: ThemeColors = {
  primary: '#3b82f6',
  primaryHover: '#2563eb',
  primaryActive: '#1d4ed8',
  primaryForeground: '#ffffff',
  secondary: '#6b7280',
  secondaryHover: '#4b5563',
  secondaryActive: '#374151',
  secondaryForeground: '#ffffff',
  accent: '#8b5cf6',
  accentHover: '#7c3aed',
  accentActive: '#6d28d9',
  accentForeground: '#ffffff',
  destructive: '#ef4444',
  destructiveHover: '#dc2626',
  destructiveActive: '#b91c1c',
  destructiveForeground: '#ffffff',
  foreground: '#0f172a',
  background: '#ffffff',
  card: '#ffffff',
  cardForeground: '#0f172a',
  popover: '#ffffff',
  popoverForeground: '#0f172a',
  muted: '#f1f5f9',
  mutedForeground: '#64748b',
  border: '#e2e8f0',
  input: '#e2e8f0',
  ring: '#94a3b8',
  radius: {
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
};

export const darkColors: ThemeColors = {
  primary: '#3b82f6',
  primaryHover: '#60a5fa',
  primaryActive: '#93c5fd',
  primaryForeground: '#ffffff',
  secondary: '#6b7280',
  secondaryHover: '#9ca3af',
  secondaryActive: '#d1d5db',
  secondaryForeground: '#ffffff',
  accent: '#8b5cf6',
  accentHover: '#a78bfa',
  accentActive: '#c4b5fd',
  accentForeground: '#ffffff',
  destructive: '#ef4444',
  destructiveHover: '#f87171',
  destructiveActive: '#fca5a5',
  destructiveForeground: '#ffffff',
  foreground: '#f1f5f9',
  background: '#0f172a',
  card: '#1e293b',
  cardForeground: '#f1f5f9',
  popover: '#1e293b',
  popoverForeground: '#f1f5f9',
  muted: '#1e293b',
  mutedForeground: '#94a3b8',
  border: '#334155',
  input: '#334155',
  ring: '#1e293b',
  radius: {
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
};

export const defaultFonts: FontSettings = {
  family: {
    sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  size: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  weight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
    loose: '2',
  },
};

export const defaultSpacing: SpacingSettings = {
  px: '1px',
  '0': '0',
  '0.5': '0.125rem',
  '1': '0.25rem',
  '1.5': '0.375rem',
  '2': '0.5rem',
  '2.5': '0.625rem',
  '3': '0.75rem',
  '3.5': '0.875rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
  '11': '2.75rem',
  '12': '3rem',
  '14': '3.5rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '28': '7rem',
  '32': '8rem',
  '36': '9rem',
  '40': '10rem',
  '44': '11rem',
  '48': '12rem',
  '52': '13rem',
  '56': '14rem',
  '60': '15rem',
  '64': '16rem',
  '72': '18rem',
  '80': '20rem',
  '96': '24rem',
};

export const defaultBreakpoints: BreakpointSettings = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const defaultAnimation = {
  duration: {
    fastest: '50ms',
    fast: '100ms',
    normal: '200ms',
    slow: '300ms',
    slowest: '500ms',
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const defaultTheme: Theme = {
  colorScheme: 'light',
  colors: lightColors,
  fonts: defaultFonts,
  spacing: defaultSpacing,
  breakpoints: defaultBreakpoints,
  animation: defaultAnimation,
};

export const darkTheme: Theme = {
  ...defaultTheme,
  colorScheme: 'dark',
  colors: darkColors,
};

export const systemTheme: Theme = {
  ...defaultTheme,
  colorScheme: 'system',
}; 