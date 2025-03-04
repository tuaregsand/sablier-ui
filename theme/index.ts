export * from './theme';
export * from './theme-provider';
export * from './css-vars';

// Export a convenient hook for theme toggling
import { useTheme } from './theme-provider';
import { darkTheme, defaultTheme, systemTheme } from './theme';

export function useThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  
  const toggleTheme = () => {
    if (resolvedTheme === 'light') {
      setTheme(darkTheme);
    } else {
      setTheme(defaultTheme);
    }
  };
  
  const setColorScheme = (scheme: 'light' | 'dark' | 'system') => {
    switch (scheme) {
      case 'light':
        setTheme(defaultTheme);
        break;
      case 'dark':
        setTheme(darkTheme);
        break;
      case 'system':
        setTheme(systemTheme);
        break;
    }
  };
  
  return {
    toggleTheme,
    setColorScheme,
    isDarkMode: resolvedTheme === 'dark',
    colorScheme: theme.colorScheme,
  };
} 