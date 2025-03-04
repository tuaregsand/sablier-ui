import { type Theme } from './theme';

/**
 * Generates CSS variable declarations from a theme object
 * @param theme The theme object to convert to CSS variables
 * @returns A string of CSS variable declarations
 */
export function generateCssVars(theme: Theme): string {
  let cssVars = ':root {\n';
  
  // Add color variables
  Object.entries(theme.colors).forEach(([key, value]) => {
    if (typeof value === 'object') {
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        cssVars += `  --${key}-${nestedKey}: ${nestedValue};\n`;
      });
    } else {
      cssVars += `  --${key}: ${value};\n`;
    }
  });
  
  // Add font variables
  Object.entries(theme.fonts).forEach(([category, values]) => {
    if (typeof values === 'object') {
      Object.entries(values).forEach(([key, value]) => {
        cssVars += `  --font-${category}-${key}: ${value};\n`;
      });
    }
  });
  
  // Add spacing variables
  Object.entries(theme.spacing).forEach(([key, value]) => {
    cssVars += `  --spacing-${key.replace('.', '_')}: ${value};\n`;
  });
  
  // Add breakpoint variables
  Object.entries(theme.breakpoints).forEach(([key, value]) => {
    cssVars += `  --breakpoint-${key}: ${value};\n`;
  });
  
  // Add animation variables
  Object.entries(theme.animation).forEach(([category, values]) => {
    if (typeof values === 'object') {
      Object.entries(values).forEach(([key, value]) => {
        cssVars += `  --animation-${category}-${key}: ${value};\n`;
      });
    }
  });
  
  cssVars += '}\n\n';
  
  // Add dark mode variables
  cssVars += '[data-theme="dark"] {\n';
  
  // Only include color values that are different in dark mode
  Object.entries(theme.colors).forEach(([key, value]) => {
    if (typeof value === 'object') {
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        cssVars += `  --${key}-${nestedKey}: ${nestedValue};\n`;
      });
    } else {
      cssVars += `  --${key}: ${value};\n`;
    }
  });
  
  cssVars += '}\n';
  
  return cssVars;
}

/**
 * Converts a Theme object to CSS variable references for use in Tailwind config
 * @param theme The theme object
 * @returns An object with CSS variable references
 */
export function themeToCssVarRefs(theme: Theme): Record<string, any> {
  const result: Record<string, any> = {
    colors: {},
    fontFamily: {},
    fontSize: {},
    fontWeight: {},
    lineHeight: {},
    spacing: {},
    borderRadius: {},
    animation: {
      durations: {},
      timingFunctions: {},
    },
    screens: {},
  };
  
  // Convert colors to CSS var references
  Object.keys(theme.colors).forEach((key) => {
    if (typeof theme.colors[key as keyof typeof theme.colors] === 'object') {
      result.colors[key] = {};
      Object.keys((theme.colors[key as keyof typeof theme.colors] as object)).forEach((nestedKey) => {
        result.colors[key][nestedKey] = `var(--${key}-${nestedKey})`;
      });
    } else {
      result.colors[key] = `var(--${key})`;
    }
  });
  
  // Convert font settings to CSS var references
  Object.keys(theme.fonts.family).forEach((key) => {
    result.fontFamily[key] = `var(--font-family-${key})`;
  });
  
  Object.keys(theme.fonts.size).forEach((key) => {
    result.fontSize[key] = `var(--font-size-${key})`;
  });
  
  Object.keys(theme.fonts.weight).forEach((key) => {
    result.fontWeight[key] = `var(--font-weight-${key})`;
  });
  
  Object.keys(theme.fonts.lineHeight).forEach((key) => {
    result.lineHeight[key] = `var(--font-lineHeight-${key})`;
  });
  
  // Convert spacing to CSS var references
  Object.keys(theme.spacing).forEach((key) => {
    result.spacing[key] = `var(--spacing-${key.replace('.', '_')})`;
  });
  
  // Convert border radius to CSS var references
  Object.keys(theme.colors.radius).forEach((key) => {
    result.borderRadius[key] = `var(--radius-${key})`;
  });
  
  // Convert animation settings to CSS var references
  Object.keys(theme.animation.duration).forEach((key) => {
    result.animation.durations[key] = `var(--animation-duration-${key})`;
  });
  
  Object.keys(theme.animation.easing).forEach((key) => {
    result.animation.timingFunctions[key] = `var(--animation-easing-${key})`;
  });
  
  // Convert breakpoints to CSS var references
  Object.keys(theme.breakpoints).forEach((key) => {
    result.screens[key] = `var(--breakpoint-${key})`;
  });
  
  return result;
}

/**
 * Generate global CSS for base styles using theme variables
 * @param theme The theme object
 * @returns A string of CSS with base styles
 */
export function generateBaseStyles(theme: Theme): string {
  return `
@layer base {
  :root {
    --radius: ${theme.colors.radius.md};
  }

  html {
    font-family: var(--font-family-sans);
    color: var(--foreground);
    background-color: var(--background);
  }

  body {
    font-size: var(--font-size-base);
    line-height: var(--font-lineHeight-normal);
  }

  .disable-transitions * {
    transition: none !important;
  }
}
  `;
}

/**
 * Generate utility classes for the theme
 * @param theme The theme object
 * @returns A string of CSS with utility classes
 */
export function generateUtilityClasses(theme: Theme): string {
  return `
@layer utilities {
  .container {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--spacing-4);
    padding-right: var(--spacing-4);
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    .container {
      max-width: ${theme.breakpoints.sm};
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    .container {
      max-width: ${theme.breakpoints.md};
    }
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    .container {
      max-width: ${theme.breakpoints.lg};
    }
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    .container {
      max-width: ${theme.breakpoints.xl};
    }
  }

  @media (min-width: ${theme.breakpoints['2xl']}) {
    .container {
      max-width: ${theme.breakpoints['2xl']};
    }
  }
}
  `;
}

/**
 * Generate a complete CSS string from the theme
 * @param theme The theme object
 * @returns A string of CSS with all theme-related styles
 */
export function generateCss(theme: Theme): string {
  return [
    generateCssVars(theme),
    generateBaseStyles(theme),
    generateUtilityClasses(theme),
  ].join('\n');
} 