// Component catalog to organize UI components by category

// Component categories
export enum ComponentCategory {
  LAYOUT = 'Layout',
  NAVIGATION = 'Navigation',
  FEEDBACK = 'Feedback',
  DATA_DISPLAY = 'Data Display',
  INPUT = 'Input',
  TYPOGRAPHY = 'Typography',
  OVERLAY = 'Overlay',
  UTILITY = 'Utility'
}

// Component entry type definition
export interface ComponentEntry {
  name: string;
  description: string;
  category: ComponentCategory;
  importPath: string;
}

// Catalog of all UI components
export const componentCatalog: ComponentEntry[] = [
  // Layout components
  {
    name: 'Grid',
    description: 'Responsive grid layout system',
    category: ComponentCategory.LAYOUT,
    importPath: 'sablier-ui'
  },
  {
    name: 'GridItem',
    description: 'Individual grid cell that can span multiple columns',
    category: ComponentCategory.LAYOUT,
    importPath: 'sablier-ui'
  },
  {
    name: 'GridContainer',
    description: 'Container with configurable max-width and padding',
    category: ComponentCategory.LAYOUT,
    importPath: 'sablier-ui'
  },
  {
    name: 'FlexContainer',
    description: 'Flexible container using flexbox for layout',
    category: ComponentCategory.LAYOUT,
    importPath: 'sablier-ui'
  },
  {
    name: 'Spacer',
    description: 'Creates empty space between elements',
    category: ComponentCategory.LAYOUT,
    importPath: 'sablier-ui'
  },
  {
    name: 'BentoGrid',
    description: 'Grid layout for dashboard-style components',
    category: ComponentCategory.LAYOUT,
    importPath: 'sablier-ui'
  },
  {
    name: 'BentoCard',
    description: 'Card component designed for bento grid layouts',
    category: ComponentCategory.LAYOUT,
    importPath: 'sablier-ui'
  },

  // Navigation components
  {
    name: 'TubelightNavbar',
    description: 'Navigation bar with tubelight hover effect',
    category: ComponentCategory.NAVIGATION,
    importPath: 'sablier-ui'
  },

  // Typography components
  {
    name: 'Typography',
    description: 'Text component with configurable styling',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  },
  {
    name: 'Heading1',
    description: 'H1 heading component',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  },
  {
    name: 'Heading2',
    description: 'H2 heading component',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  },
  {
    name: 'Heading3',
    description: 'H3 heading component',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  },
  {
    name: 'Heading4',
    description: 'H4 heading component',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  },
  {
    name: 'Heading5',
    description: 'H5 heading component',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  },
  {
    name: 'Heading6',
    description: 'H6 heading component',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  },
  {
    name: 'Subtitle1',
    description: 'Primary subtitle component',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  },
  {
    name: 'Subtitle2',
    description: 'Secondary subtitle component',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  },
  {
    name: 'Body1',
    description: 'Primary body text component',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  },
  {
    name: 'Body2',
    description: 'Secondary body text component',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  },
  {
    name: 'Caption',
    description: 'Caption text component',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  },
  {
    name: 'Overline',
    description: 'Small text that appears above other content',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  },
  {
    name: 'Code',
    description: 'Inline code component',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  },
  {
    name: 'Bold',
    description: 'Bold text component',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  },
  {
    name: 'Italic',
    description: 'Italic text component',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  },
  {
    name: 'Underline',
    description: 'Underlined text component',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  },
  {
    name: 'Highlight',
    description: 'Highlighted text component',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  },
  {
    name: 'KeyboardKey',
    description: 'Component to represent keyboard keys',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  },
  {
    name: 'InlineCode',
    description: 'Inline code component',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  },
  {
    name: 'TextBlock',
    description: 'Block of text with spacing between paragraphs',
    category: ComponentCategory.TYPOGRAPHY,
    importPath: 'sablier-ui'
  }
];

// Helper function to get components by category
export function getComponentsByCategory(category: ComponentCategory): ComponentEntry[] {
  return componentCatalog.filter(component => component.category === category);
}

// Helper function to get all available categories
export function getAllCategories(): ComponentCategory[] {
  // Use Set to get unique categories
  return Array.from(new Set(componentCatalog.map(component => component.category)));
}

// Helper function to search components by name
export function searchComponents(searchTerm: string): ComponentEntry[] {
  const term = searchTerm.toLowerCase();
  return componentCatalog.filter(component => 
    component.name.toLowerCase().includes(term) || 
    component.description.toLowerCase().includes(term)
  );
}