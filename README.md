# Sablier UI

A modern UI component library for React applications.

## Installation

```bash
npm install sablier-ui
# or
yarn add sablier-ui
```

## Usage

```jsx
import { TubelightNavbar, Button } from 'sablier-ui';
import { Home, Settings, User } from 'lucide-react';

function App() {
  const navItems = [
    {
      name: 'Home',
      url: '/',
      icon: Home
    },
    {
      name: 'Settings',
      url: '/settings',
      icon: Settings
    },
    {
      name: 'Profile',
      url: '/profile',
      icon: User
    }
  ];

  return (
    <div>
      <TubelightNavbar items={navItems} />
      
      <div className="mt-8 p-4">
        <Button>Click Me</Button>
        <Button variant="outline" className="ml-2">Outline</Button>
        <Button variant="destructive" className="ml-2">Danger</Button>
      </div>
    </div>
  );
}
```

## Components

### TubelightNavbar

A dynamic navbar with a glowing indicator that follows the active item.

```jsx
import { TubelightNavbar } from 'sablier-ui';
import { Home, Settings, User } from 'lucide-react';

const navItems = [
  {
    name: 'Home',
    url: '/',
    icon: Home
  },
  {
    name: 'Settings',
    url: '/settings',
    icon: Settings
  },
  {
    name: 'Profile',
    url: '/profile',
    icon: User
  }
];

<TubelightNavbar items={navItems} />
```

### Button

A customizable button component with various styles and sizes.

```jsx
import { Button } from 'sablier-ui';

<Button>Default Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="destructive">Destructive Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="link">Link Button</Button>

<Button size="sm">Small Button</Button>
<Button size="default">Default Size</Button>
<Button size="lg">Large Button</Button>
```

## Theme

Sablier UI comes with a built-in theming system.

```jsx
import { ThemeProvider } from 'sablier-ui';

function App() {
  return (
    <ThemeProvider>
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

## License

MIT 