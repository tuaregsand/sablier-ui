// Component catalog for the World Simulation UI Kit
// This file categorizes all UI components for easy reference

// Component categories
export enum ComponentCategory {
  // Base elements
  LAYOUT = 'Layout',
  FEEDBACK = 'Feedback',
  NAVIGATION = 'Navigation',
  INPUT = 'Input',
  DATA_DISPLAY = 'Data Display',
  TYPOGRAPHY = 'Typography',
  OVERLAY = 'Overlay',
  
  // Domain-specific
  WORLD_COMPONENTS = 'World Components',
  AVATAR_COMPONENTS = 'Avatar Components',
  SIMULATION = 'Simulation',
}

// Component entry type
export type ComponentEntry = {
  name: string;
  path: string;
  category: ComponentCategory;
  description: string;
};

// Catalog of all UI components
export const componentCatalog: ComponentEntry[] = [
  // Layout components
  {
    name: 'Accordion',
    path: '@/components/ui/accordion',
    category: ComponentCategory.LAYOUT,
    description: 'A vertically stacked set of interactive headings that each reveal a section of content.'
  },
  {
    name: 'AspectRatio',
    path: '@/components/ui/aspect-ratio',
    category: ComponentCategory.LAYOUT,
    description: 'Maintains a consistent width-to-height ratio.'
  },
  {
    name: 'Card',
    path: '@/components/ui/card',
    category: ComponentCategory.LAYOUT,
    description: 'Container for grouping related content and actions.'
  },
  {
    name: 'BentoGrid',
    path: '@/components/ui/bento-grid',
    category: ComponentCategory.LAYOUT,
    description: 'Grid layout for dashboard-style components.'
  },
  {
    name: 'BentoCard',
    path: '@/components/ui/bento-card',
    category: ComponentCategory.LAYOUT,
    description: 'Card component designed for bento grid layouts.'
  },
  {
    name: 'CardSpotlight',
    path: '@/components/ui/card-spotlight',
    category: ComponentCategory.LAYOUT,
    description: 'Card with spotlight hover effect.'
  },
  {
    name: 'Collapsible',
    path: '@/components/ui/collapsible',
    category: ComponentCategory.LAYOUT,
    description: 'Component that can be expanded/collapsed.'
  },
  {
    name: 'Drawer',
    path: '@/components/ui/drawer',
    category: ComponentCategory.LAYOUT,
    description: 'Side panel that slides in from the edge of the screen.'
  },
  {
    name: 'ExpandableCard',
    path: '@/components/ui/expandable-card',
    category: ComponentCategory.LAYOUT,
    description: 'Card that can be expanded to show more content.'
  },
  {
    name: 'Resizable',
    path: '@/components/ui/resizable',
    category: ComponentCategory.LAYOUT,
    description: 'Component that can be resized by the user.'
  },
  {
    name: 'ScrollArea',
    path: '@/components/ui/scroll-area',
    category: ComponentCategory.LAYOUT,
    description: 'Custom scrollable area with styled scrollbars.'
  },
  {
    name: 'Separator',
    path: '@/components/ui/separator',
    category: ComponentCategory.LAYOUT,
    description: 'Visual divider between content areas.'
  },
  {
    name: 'Sheet',
    path: '@/components/ui/sheet',
    category: ComponentCategory.LAYOUT,
    description: 'Side sheet/drawer component.'
  },

  // Feedback components
  {
    name: 'Alert',
    path: '@/components/ui/alert',
    category: ComponentCategory.FEEDBACK,
    description: 'Displays important messages to the user.'
  },
  {
    name: 'AlertDialog',
    path: '@/components/ui/alert-dialog',
    category: ComponentCategory.FEEDBACK,
    description: 'Modal dialog for important notifications requiring acknowledgment.'
  },
  {
    name: 'Progress',
    path: '@/components/ui/progress',
    category: ComponentCategory.FEEDBACK,
    description: 'Displays progress completion of a task.'
  },
  {
    name: 'Skeleton',
    path: '@/components/ui/skeleton',
    category: ComponentCategory.FEEDBACK,
    description: 'Placeholder for content that is loading.'
  },
  {
    name: 'Toast',
    path: '@/components/ui/toast',
    category: ComponentCategory.FEEDBACK,
    description: 'Brief notifications that appear temporarily.'
  },
  {
    name: 'Toaster',
    path: '@/components/ui/toaster',
    category: ComponentCategory.FEEDBACK,
    description: 'Container for toast messages.'
  },
  {
    name: 'Sonner',
    path: '@/components/ui/sonner',
    category: ComponentCategory.FEEDBACK,
    description: 'Alternative toast notification system.'
  },

  // Navigation components
  {
    name: 'Breadcrumb',
    path: '@/components/ui/breadcrumb',
    category: ComponentCategory.NAVIGATION,
    description: 'Navigation trail showing the current page location.'
  },
  {
    name: 'NavigationMenu',
    path: '@/components/ui/navigation-menu',
    category: ComponentCategory.NAVIGATION,
    description: 'Navigation component with dropdown menus.'
  },
  {
    name: 'Pagination',
    path: '@/components/ui/pagination',
    category: ComponentCategory.NAVIGATION,
    description: 'Controls for navigating through pages of content.'
  },
  {
    name: 'Sidebar',
    path: '@/components/ui/sidebar',
    category: ComponentCategory.NAVIGATION,
    description: 'Side navigation panel.'
  },
  {
    name: 'Tabs',
    path: '@/components/ui/tabs',
    category: ComponentCategory.NAVIGATION,
    description: 'Organizes content into separate views that can be switched between.'
  },
  {
    name: 'TubelightNavbar',
    path: '@/components/ui/tubelight-navbar',
    category: ComponentCategory.NAVIGATION,
    description: 'Navigation bar with tubelight hover effect.'
  },

  // Input components
  {
    name: 'Button',
    path: '@/components/ui/button',
    category: ComponentCategory.INPUT,
    description: 'Clickable button for user interactions.'
  },
  {
    name: 'Checkbox',
    path: '@/components/ui/checkbox',
    category: ComponentCategory.INPUT,
    description: 'Control that allows selecting multiple options.'
  },
  {
    name: 'Form',
    path: '@/components/ui/form',
    category: ComponentCategory.INPUT,
    description: 'Form component with validation support.'
  },
  {
    name: 'Input',
    path: '@/components/ui/input',
    category: ComponentCategory.INPUT,
    description: 'Text input field.'
  },
  {
    name: 'InputOTP',
    path: '@/components/ui/input-otp',
    category: ComponentCategory.INPUT,
    description: 'One-time password input field.'
  },
  {
    name: 'Label',
    path: '@/components/ui/label',
    category: ComponentCategory.INPUT,
    description: 'Accessible label for form inputs.'
  },
  {
    name: 'RadioGroup',
    path: '@/components/ui/radio-group',
    category: ComponentCategory.INPUT,
    description: 'Group of radio buttons for selecting a single option.'
  },
  {
    name: 'Select',
    path: '@/components/ui/select',
    category: ComponentCategory.INPUT,
    description: 'Dropdown select input.'
  },
  {
    name: 'Slider',
    path: '@/components/ui/slider',
    category: ComponentCategory.INPUT,
    description: 'Control for selecting a value from a range.'
  },
  {
    name: 'Switch',
    path: '@/components/ui/switch',
    category: ComponentCategory.INPUT,
    description: 'Toggle control for binary options.'
  },
  {
    name: 'Textarea',
    path: '@/components/ui/textarea',
    category: ComponentCategory.INPUT,
    description: 'Multi-line text input.'
  },
  {
    name: 'Toggle',
    path: '@/components/ui/toggle',
    category: ComponentCategory.INPUT,
    description: 'Two-state button that can be toggled on or off.'
  },
  {
    name: 'ToggleGroup',
    path: '@/components/ui/toggle-group',
    category: ComponentCategory.INPUT,
    description: 'Group of toggle buttons.'
  },

  // Data display components
  {
    name: 'Avatar',
    path: '@/components/ui/avatar',
    category: ComponentCategory.DATA_DISPLAY,
    description: 'Displays user or entity profile image, initials, or icon.'
  },
  {
    name: 'Badge',
    path: '@/components/ui/badge',
    category: ComponentCategory.DATA_DISPLAY,
    description: 'Small indicator for status, count, or categorization.'
  },
  {
    name: 'Calendar',
    path: '@/components/ui/calendar',
    category: ComponentCategory.DATA_DISPLAY,
    description: 'Calendar for date display and selection.'
  },
  {
    name: 'Chart',
    path: '@/components/ui/chart',
    category: ComponentCategory.DATA_DISPLAY,
    description: 'Displays data in various chart formats.'
  },
  {
    name: 'NumberTicker',
    path: '@/components/ui/number-ticker',
    category: ComponentCategory.DATA_DISPLAY,
    description: 'Animated number display that counts up/down.'
  },
  {
    name: 'Table',
    path: '@/components/ui/table',
    category: ComponentCategory.DATA_DISPLAY,
    description: 'Displays data in rows and columns.'
  },

  // Typography components
  {
    name: 'GooeyText',
    path: '@/components/ui/gooey-text',
    category: ComponentCategory.TYPOGRAPHY,
    description: 'Text with gooey animation effect.'
  },
  {
    name: 'GradualSpacing',
    path: '@/components/ui/gradual-spacing',
    category: ComponentCategory.TYPOGRAPHY,
    description: 'Text with graduated letter spacing.'
  },
  {
    name: 'HyperText',
    path: '@/components/ui/hyper-text',
    category: ComponentCategory.TYPOGRAPHY,
    description: 'Stylized hypertext component.'
  },
  {
    name: 'LetterSwapForward',
    path: '@/components/ui/letter-swap-forward',
    category: ComponentCategory.TYPOGRAPHY,
    description: 'Animated text with letter swapping effect.'
  },
  {
    name: 'TextShimmer',
    path: '@/components/ui/text-shimmer',
    category: ComponentCategory.TYPOGRAPHY,
    description: 'Text with shimmer animation effect.'
  },

  // Overlay components
  {
    name: 'Command',
    path: '@/components/ui/command',
    category: ComponentCategory.OVERLAY,
    description: 'Command palette for keyboard-driven interfaces.'
  },
  {
    name: 'ContextMenu',
    path: '@/components/ui/context-menu',
    category: ComponentCategory.OVERLAY,
    description: 'Right-click context menu.'
  },
  {
    name: 'Dialog',
    path: '@/components/ui/dialog',
    category: ComponentCategory.OVERLAY,
    description: 'Modal dialog for focused user interactions.'
  },
  {
    name: 'DropdownMenu',
    path: '@/components/ui/dropdown-menu',
    category: ComponentCategory.OVERLAY,
    description: 'Menu triggered by a button click.'
  },
  {
    name: 'HoverCard',
    path: '@/components/ui/hover-card',
    category: ComponentCategory.OVERLAY,
    description: 'Card that appears when hovering over a trigger.'
  },
  {
    name: 'Menubar',
    path: '@/components/ui/menubar',
    category: ComponentCategory.OVERLAY,
    description: 'Horizontal menu with dropdown submenus.'
  },
  {
    name: 'Modal',
    path: '@/components/ui/modal',
    category: ComponentCategory.OVERLAY,
    description: 'Generic modal component.'
  },
  {
    name: 'Popover',
    path: '@/components/ui/popover',
    category: ComponentCategory.OVERLAY,
    description: 'Floating content that appears next to a reference element.'
  },
  {
    name: 'Tooltip',
    path: '@/components/ui/tooltip',
    category: ComponentCategory.OVERLAY,
    description: 'Brief helpful text that appears when hovering over an element.'
  },

  // World simulation specific components
  {
    name: 'WorldMap',
    path: '@/components/ui/world-map',
    category: ComponentCategory.WORLD_COMPONENTS,
    description: 'Interactive map displaying the simulation world.'
  },
  {
    name: 'WorldEvents',
    path: '@/components/ui/world-events',
    category: ComponentCategory.WORLD_COMPONENTS,
    description: 'Displays events occurring in the simulation world.'
  },
  {
    name: 'WorldChronicle',
    path: '@/components/ui/world-chronicle',
    category: ComponentCategory.WORLD_COMPONENTS,
    description: 'Historical record of world events.'
  },
  {
    name: 'WorldTimeline',
    path: '@/components/ui/world-timeline',
    category: ComponentCategory.WORLD_COMPONENTS,
    description: 'Timeline of world events.'
  },
  {
    name: 'Globe',
    path: '@/components/ui/globe',
    category: ComponentCategory.WORLD_COMPONENTS,
    description: '3D globe representation of the world.'
  },

  // Avatar-related components
  {
    name: 'AvatarList',
    path: '@/components/avatar-list',
    category: ComponentCategory.AVATAR_COMPONENTS,
    description: 'List display of avatars in the simulation.'
  },
  {
    name: 'AvatarJourney',
    path: '@/components/ui/avatar-journey',
    category: ComponentCategory.AVATAR_COMPONENTS,
    description: 'Visualizes an avatar\'s journey through the world.'
  },
  {
    name: 'WorldAvatarsActivity',
    path: '@/components/ui/world-avatars-activity',
    category: ComponentCategory.AVATAR_COMPONENTS,
    description: 'Activity feed of avatar actions in the world.'
  },
];

// Helper functions to work with the component catalog

// Get all components in a specific category
export const getComponentsByCategory = (category: ComponentCategory): ComponentEntry[] => {
  return componentCatalog.filter(component => component.category === category);
};

// Get a component by name (case insensitive)
export const getComponentByName = (name: string): ComponentEntry | undefined => {
  return componentCatalog.find(
    component => component.name.toLowerCase() === name.toLowerCase()
  );
};

// Search components by name or description
export const searchComponents = (query: string): ComponentEntry[] => {
  const lowerQuery = query.toLowerCase();
  return componentCatalog.filter(
    component => 
      component.name.toLowerCase().includes(lowerQuery) || 
      component.description.toLowerCase().includes(lowerQuery)
  );
}; 