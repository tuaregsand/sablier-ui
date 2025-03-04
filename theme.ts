// Theme management system for World Simulation frontend
import { createContext, useContext } from 'react';

// Define types for our theme tokens
export type ThemeTokens = {
  color: {
    // Main colors
    background: string;
    foreground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    accent: string;
    accentForeground: string;
    muted: string;
    mutedForeground: string;

    // Component colors
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
    
    // Utility colors
    border: string;
    input: string;
    ring: string;
    destructive: string;
    destructiveForeground: string;

    // Sidebar specific (can be factored out to a separate sidebar theme)
    sidebar: {
      background: string;
      foreground: string;
      primary: string;
      primaryForeground: string;
      accent: string;
      accentForeground: string;
      border: string;
      ring: string;
    };

    // Chart colors
    chart: {
      [key: string]: string;
    };
  };
  
  // Border radius
  radius: {
    small: string;
    medium: string;
    large: string;
  };
  
  // Spacing (we could add more granular spacing here)
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  
  // Typography (font sizes, weights, etc.)
  typography: {
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
    fontWeights: {
      normal: number;
      medium: number;
      bold: number;
    };
  };
  
  // Animations
  animation: {
    fast: string;
    normal: string;
    slow: string;
  };
  
  // Shadows
  shadow: {
    sm: string;
    md: string;
    lg: string;
  };
};

// Default theme values based on CSS variables from globals.css
export const defaultTheme: ThemeTokens = {
  color: {
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    primary: 'hsl(var(--primary))',
    primaryForeground: 'hsl(var(--primary-foreground))',
    secondary: 'hsl(var(--secondary))',
    secondaryForeground: 'hsl(var(--secondary-foreground))',
    accent: 'hsl(var(--accent))',
    accentForeground: 'hsl(var(--accent-foreground))',
    muted: 'hsl(var(--muted))',
    mutedForeground: 'hsl(var(--muted-foreground))',
    card: 'hsl(var(--card))',
    cardForeground: 'hsl(var(--card-foreground))',
    popover: 'hsl(var(--popover))',
    popoverForeground: 'hsl(var(--popover-foreground))',
    border: 'hsl(var(--border))',
    input: 'hsl(var(--input))',
    ring: 'hsl(var(--ring))',
    destructive: 'hsl(var(--destructive))',
    destructiveForeground: 'hsl(var(--destructive-foreground))',
    sidebar: {
      background: 'hsl(var(--sidebar-background))',
      foreground: 'hsl(var(--sidebar-foreground))',
      primary: 'hsl(var(--sidebar-primary))',
      primaryForeground: 'hsl(var(--sidebar-primary-foreground))',
      accent: 'hsl(var(--sidebar-accent))',
      accentForeground: 'hsl(var(--sidebar-accent-foreground))',
      border: 'hsl(var(--sidebar-border))',
      ring: 'hsl(var(--sidebar-ring))',
    },
    chart: {
      '1': 'hsl(var(--chart-1))',
      '2': 'hsl(var(--chart-2))',
      '3': 'hsl(var(--chart-3))',
      '4': 'hsl(var(--chart-4))',
      '5': 'hsl(var(--chart-5))',
    },
  },
  radius: {
    small: 'calc(var(--radius) - 4px)',
    medium: 'calc(var(--radius) - 2px)',
    large: 'var(--radius)',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  typography: {
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  animation: {
    fast: '0.1s',
    normal: '0.2s',
    slow: '0.3s',
  },
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
};

// Create context for theme
export const ThemeContext = createContext<ThemeTokens>(defaultTheme);

// Hook to use the theme
export const useTheme = () => useContext(ThemeContext);

// Helper function to get theme value (mainly for typed access to nested properties)
export const getThemeValue = (
  theme: ThemeTokens,
  path: string
): string | number | undefined => {
  return path.split('.').reduce((acc: any, part: string) => {
    return acc && acc[part];
  }, theme);
}; 