# Sablier UI

A comprehensive UI kit with reusable components, utilities, and consistent styling patterns.

## Installation

```bash
npm install sablier-ui
# or
yarn add sablier-ui
```

## Dependencies

Sablier UI requires the following dependencies:

### Peer Dependencies
These are expected to be installed in your project:
- React (^17.0.0 or ^18.0.0)
- React DOM (^17.0.0 or ^18.0.0)

### Required Dependencies
These will be automatically installed with Sablier UI, but you should be aware of them:
- clsx (^1.2.1)
- framer-motion (^10.16.4)
- lucide-react (^0.303.0)
- tailwind-merge (^1.14.0)

To ensure all dependencies are properly installed, you can run:

```bash
# If using npm
npm install sablier-ui react react-dom framer-motion lucide-react

# If using yarn
yarn add sablier-ui react react-dom framer-motion lucide-react
```

## Setup

### Tailwind CSS Configuration

Sablier UI is built with Tailwind CSS. Add the following to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/sablier-ui/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        'destructive-foreground': 'var(--destructive-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: 'var(--border)',
        input: 'var(--input)',
      },
    },
  },
  plugins: [],
}
```

### Theme Provider

Wrap your application with the ThemeProvider:

```jsx
import { ThemeProvider } from 'sablier-ui';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

## Components

### TubelightNavbar

A navigation bar with a tubelight hover effect.

```jsx
import { TubelightNavbar } from 'sablier-ui';
import { Home, Settings, User } from 'lucide-react';

function MyNavbar() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Profile", url: "/profile", icon: User },
    { name: "Settings", url: "/settings", icon: Settings },
  ];

  return <TubelightNavbar items={navItems} />;
}
```

### Button

A customizable button component.

```jsx
import { Button } from 'sablier-ui';

function MyComponent() {
  return (
    <div>
      <Button>Default Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="link">Link Button</Button>
    </div>
  );
}
```

### BentoGrid and BentoCard

Components for creating dashboard-style layouts.

```jsx
import { BentoGrid, BentoCard } from 'sablier-ui';
import { Zap, Shield, Bell } from 'lucide-react';

function MyDashboard() {
  return (
    <BentoGrid columns={3} gap="md">
      <BentoCard
        name="Feature One"
        description="Description of feature one"
        Icon={Zap}
        cta="Learn More"
      />
      <BentoCard
        name="Feature Two"
        description="Description of feature two"
        Icon={Shield}
        cta="Explore"
      />
      <BentoCard
        name="Feature Three"
        description="Description of feature three"
        Icon={Bell}
        cta="Get Started"
      />
    </BentoGrid>
  );
}
```

## Theme System

### Using the Theme Toggle

```jsx
import { useThemeToggle } from 'sablier-ui';

function ThemeToggleButton() {
  const { toggleTheme, isDarkMode } = useThemeToggle();
  
  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
```

## Utility Functions

### Using the `cn` Utility

The `cn` utility function helps combine Tailwind CSS classes.

```jsx
import { cn } from 'sablier-ui';

function MyComponent({ className }) {
  return (
    <div className={cn(
      "base-class another-class",
      className,
      {
        'conditional-class': someCondition,
      }
    )}>
      Content
    </div>
  );
}
```

## Version

Current version: 1.0.2

## License

MIT 