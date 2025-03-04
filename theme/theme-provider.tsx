import React, { createContext, useContext, useEffect, useState } from 'react';
import { defaultTheme, type Theme } from './theme';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  forcedTheme?: 'light' | 'dark' | null;
  disableTransitionOnChange?: boolean;
};

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  systemTheme: 'light' | 'dark' | null;
  colorScheme: 'light' | 'dark';
  resolvedTheme: 'light' | 'dark';
  themes: string[];
  customizeTheme: (customizations: Partial<Theme>) => void;
};

const initialContext: ThemeContextType = {
  theme: defaultTheme,
  setTheme: () => null,
  systemTheme: null,
  colorScheme: 'light',
  resolvedTheme: 'light',
  themes: ['light', 'dark', 'system'],
  customizeTheme: () => null,
};

const ThemeContext = createContext<ThemeContextType>(initialContext);

export function ThemeProvider({
  children,
  defaultTheme: defaultAppTheme = defaultTheme,
  storageKey = 'sablier-ui-theme',
  forcedTheme,
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check for stored theme
    if (typeof window !== 'undefined') {
      try {
        const storedTheme = localStorage.getItem(storageKey);
        return storedTheme ? JSON.parse(storedTheme) : defaultAppTheme;
      } catch (error) {
        console.error('Error reading theme from localStorage:', error);
        return defaultAppTheme;
      }
    }
    return defaultAppTheme;
  });

  const [systemTheme, setSystemTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    // Detect system theme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const detectSystemTheme = () => {
      setSystemTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    detectSystemTheme();
    mediaQuery.addEventListener('change', detectSystemTheme);

    return () => {
      mediaQuery.removeEventListener('change', detectSystemTheme);
    };
  }, []);

  const colorScheme = theme.colorScheme === 'system' 
    ? systemTheme || 'light' 
    : theme.colorScheme;

  const resolvedTheme = forcedTheme || colorScheme;

  const setTheme = (newTheme: Theme) => {
    if (forcedTheme) return;

    try {
      if (disableTransitionOnChange) {
        document.documentElement.classList.add('disable-transitions');
      }

      setThemeState(newTheme);
      localStorage.setItem(storageKey, JSON.stringify(newTheme));

      // Apply CSS variables
      const root = document.documentElement;
      Object.entries(newTheme.colors).forEach(([prop, value]) => {
        if (typeof value === 'object') {
          Object.entries(value).forEach(([nestedProp, nestedValue]) => {
            root.style.setProperty(`--${prop}-${nestedProp}`, nestedValue);
          });
        } else {
          root.style.setProperty(`--${prop}`, value);
        }
      });

      // Apply data-theme attribute
      const resolvedColorScheme = newTheme.colorScheme === 'system' 
        ? systemTheme || 'light' 
        : newTheme.colorScheme;
      
      document.documentElement.setAttribute('data-theme', resolvedColorScheme);

      if (disableTransitionOnChange) {
        window.setTimeout(() => {
          document.documentElement.classList.remove('disable-transitions');
        }, 0);
      }
    } catch (error) {
      console.error('Error setting theme:', error);
    }
  };

  const customizeTheme = (customizations: Partial<Theme>) => {
    const newTheme = { ...theme, ...customizations };
    if (customizations.colors) {
      newTheme.colors = { ...theme.colors, ...customizations.colors };
    }
    setTheme(newTheme);
  };

  // Apply theme on initial mount
  useEffect(() => {
    setTheme(theme);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    if (theme.colorScheme === 'system') {
      setTheme({ ...theme });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [systemTheme]);

  const value = {
    theme,
    setTheme,
    systemTheme,
    colorScheme,
    resolvedTheme,
    themes: ['light', 'dark', 'system'],
    customizeTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          try {
            const storedTheme = localStorage.getItem('sablier-ui-theme');
            if (storedTheme) {
              const theme = JSON.parse(storedTheme);
              const colorScheme = theme.colorScheme === 'system' 
                ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                : theme.colorScheme;
              
              document.documentElement.setAttribute('data-theme', colorScheme);
              
              // Apply CSS variables
              Object.entries(theme.colors).forEach(([prop, value]) => {
                if (typeof value === 'object') {
                  Object.entries(value).forEach(([nestedProp, nestedValue]) => {
                    document.documentElement.style.setProperty(\`--\${prop}-\${nestedProp}\`, nestedValue);
                  });
                } else {
                  document.documentElement.style.setProperty(\`--\${prop}\`, value);
                }
              });
            }
          } catch (e) {
            console.warn('Failed to restore theme from localStorage', e);
          }
        `,
      }}
    />
  );
} 