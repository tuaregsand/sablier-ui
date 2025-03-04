# World Simulation UI Kit

A comprehensive UI kit for the World Simulation frontend application, providing reusable components, utilities, and consistent styling patterns.

## Table of Contents

- [Getting Started](#getting-started)
- [Core Concepts](#core-concepts)
- [Components](#components)
- [Theme System](#theme-system)
- [Typography](#typography)
- [Grid System](#grid-system)
- [Animations](#animations)
- [Custom Hooks](#custom-hooks)

## Getting Started

To use the UI Kit in your components, import the needed parts from the UI Kit:

```tsx
import { Typography, Grid, GridItem, useTheme } from '@/lib/ui-kit';

function MyComponent() {
  const theme = useTheme();
  
  return (
    <Grid columns={2} gap="md">
      <GridItem>
        <Typography variant="h2">Hello World</Typography>
      </GridItem>
      <GridItem>
        <Typography variant="body1">This is using our UI Kit</Typography>
      </GridItem>
    </Grid>
  );
}
```

## Core Concepts

The UI Kit is built on the following core principles:

1. **Consistency**: Use consistent styling, spacing, and components across the application
2. **Reusability**: Components are designed to be reused in multiple contexts
3. **Flexibility**: Components are configurable while maintaining design consistency
4. **Type Safety**: All components have TypeScript definitions for better developer experience
5. **Theme Aware**: Components use theme variables for consistent styling

## Components

The UI Kit includes a comprehensive catalog of all available components. You can find the catalog in `component-catalog.ts`.

Components are organized into the following categories:

- **Layout**: Components for structuring the page layout
- **Feedback**: Components for providing feedback to users
- **Navigation**: Components for navigating between pages and sections
- **Input**: Components for user input
- **Data Display**: Components for displaying data
- **Typography**: Components for text formatting
- **Overlay**: Components that appear over other content
- **World Components**: Components specific to the world simulation
- **Avatar Components**: Components for avatar-related features

To see all available components, you can use the helper functions provided in the catalog:

```tsx
import { 
  getComponentsByCategory, 
  ComponentCategory 
} from '@/lib/ui-kit';

// Get all layout components
const layoutComponents = getComponentsByCategory(ComponentCategory.LAYOUT);
```

## Theme System

The UI Kit includes a theme system that provides consistent colors, spacing, and styling across the application.

The theme is defined in `theme.ts` and follows the design tokens from the application's global CSS variables.

You can access the theme using the `useTheme` hook:

```tsx
import { useTheme } from '@/lib/ui-kit';

function MyComponent() {
  const theme = useTheme();
  
  // Access theme values
  const backgroundColor = theme.color.background;
  const spacing = theme.spacing.md;
  
  return (
    <div style={{ backgroundColor, padding: spacing }}>
      Theme-aware component
    </div>
  );
}
```

For accessing nested theme properties, you can use the `getThemeValue` helper:

```tsx
import { getThemeValue, useTheme } from '@/lib/ui-kit';

function MyComponent() {
  const theme = useTheme();
  
  // Get a nested theme value
  const sidebarBackground = getThemeValue(theme, 'color.sidebar.background');
  
  return (
    <div style={{ backgroundColor: sidebarBackground }}>
      Sidebar component
    </div>
  );
}
```

## Typography

The Typography system provides consistent text styling across the application. It includes components for headings, body text, captions, and more.

```tsx
import { 
  Typography, 
  Heading1, 
  Body1, 
  TextBlock,
  Bold, 
  Italic 
} from '@/lib/ui-kit';

function MyComponent() {
  return (
    <TextBlock spacing="md">
      <Heading1>Page Title</Heading1>
      <Body1>
        This is a paragraph with <Bold>bold</Bold> and <Italic>italic</Italic> text.
      </Body1>
    </TextBlock>
  );
}
```

The Typography component supports various options:

- **variant**: Text style variant (h1-h6, body1, body2, etc.)
- **weight**: Font weight (light, normal, medium, semibold, bold)
- **align**: Text alignment (left, center, right, justify)
- **transform**: Text transformation (uppercase, lowercase, capitalize)
- **muted**: Makes the text color less prominent
- **truncate**: Truncates text with ellipsis if it overflows
- **as**: HTML element to render (overrides the default element for the variant)
- **gutterBottom**: Adds bottom margin for spacing between text elements

## Grid System

The Grid system provides flexible and responsive layouts. It includes components for grid containers, grid items, and flex containers.

```tsx
import { Grid, GridItem, GridContainer, Flex } from '@/lib/ui-kit';

function MyComponent() {
  return (
    <GridContainer maxWidth="lg" padding="md">
      <Grid columns={3} gap="md" responsive>
        <GridItem span={1}>Column 1</GridItem>
        <GridItem span={1}>Column 2</GridItem>
        <GridItem span={1}>Column 3</GridItem>
      </Grid>
      
      <Flex direction="row" justify="between" align="center">
        <div>Left content</div>
        <div>Right content</div>
      </Flex>
    </GridContainer>
  );
}
```

The Grid components support various options for creating flexible layouts, including responsive behavior, grid spans, and spacing.

## Animations

The UI Kit includes animation utilities for creating consistent animations across the application. These are based on Framer Motion but provide pre-configured animation variants.

```tsx
import { motion } from 'framer-motion';
import { fadeInVariants, transitions } from '@/lib/ui-kit';

function MyComponent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariants('up')}
      transition={transitions.medium}
    >
      This will fade in from below
    </motion.div>
  );
}
```

The animation utilities include:

- Pre-configured animation variants (fade, scale, slide, etc.)
- Common transition presets (fast, medium, slow, etc.)
- Helper functions for creating custom animations

## Custom Hooks

The UI Kit includes several custom hooks for common UI patterns:

- **useOutsideClick**: Detect clicks outside of an element
- **useEscapeKey**: Detect when the escape key is pressed
- **useLocalStorage**: Store and retrieve data from localStorage with type safety
- **useScrollPosition**: Track scroll position
- **useIntersectionObserver**: Detect when an element is in the viewport
- **useWindowSize**: Track window dimensions
- **useDebounce**: Debounce a function call
- **useDebounceValue**: Debounce a value change
- **useMediaQuery**: Check if a media query matches
- **useHover**: Track when an element is hovered
- **useMousePosition**: Track mouse position
- **useElementSize**: Track element dimensions

Example usage:

```tsx
import { useOutsideClick, useLocalStorage } from '@/lib/ui-kit';

function MyComponent() {
  // Close dropdown when clicking outside
  const [ref, isActive, setIsActive] = useOutsideClick<HTMLDivElement>(() => {
    setIsActive(false);
  });
  
  // Store user preferences in localStorage
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');
  
  return (
    <div ref={ref}>
      <button onClick={() => setIsActive(!isActive)}>Toggle Dropdown</button>
      {isActive && <div className="dropdown">Dropdown content</div>}
      
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme ({theme})
      </button>
    </div>
  );
}
``` 