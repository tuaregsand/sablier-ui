# Sablier UI 

A comprehensive UI kit with reusable components, utilities, and consistent styling patterns for React applications.

[![npm version](https://img.shields.io/npm/v/sablier-ui.svg)](https://www.npmjs.com/package/sablier-ui)
[![license](https://img.shields.io/npm/l/sablier-ui.svg)](https://github.com/tuaregsand/sablier-ui/blob/main/LICENSE)

## Installation

```bash
npm install sablier-ui
```

## Requirements

Sablier UI has the following peer dependencies:

- React 17.0.0+
- React DOM 17.0.0+
- Framer Motion 6.0.0+
- Tailwind CSS 3.0.0+
- class-variance-authority 0.7.0+
- clsx 2.0.0+
- tailwind-merge 2.0.0+

## Quick Start

```jsx
import { Grid, GridItem, Typography, useTheme } from 'sablier-ui';

function MyComponent() {
  const theme = useTheme();
  
  return (
    <Grid columns={2} gap="md">
      <GridItem>
        <Typography variant="h2">Hello World</Typography>
      </GridItem>
      <GridItem>
        <Typography variant="body1">This is using Sablier UI Kit</Typography>
      </GridItem>
    </Grid>
  );
}
```

## Component Documentation

### Grid System

The grid system provides a flexible way to create layouts in your application.

#### GridContainer

Provides a container with optional max-width and padding.

```jsx
<GridContainer maxWidth="lg" padding="md" centered>
  {/* Your content here */}
</GridContainer>
```

Props:
- `fullWidth`: boolean - Whether the container should take full width
- `maxWidth`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' - Maximum width of the container
- `padding`: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' - Padding inside the container
- `centered`: boolean - Whether to center the container

#### Grid

Creates a grid layout with configurable columns and gaps.

```jsx
<Grid columns={3} gap="md" responsive>
  {/* Grid items here */}
</Grid>
```

Props:
- `columns`: 1 | 2 | 3 | 4 | 5 | 6 | 12 - Number of columns
- `gap`: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' - Gap between grid items
- `rowGap`: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' - Gap between rows
- `columnGap`: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' - Gap between columns
- `autoRows`: boolean - Whether to use auto-sized rows
- `autoColumns`: boolean - Whether to use auto-sized columns
- `responsive`: boolean - Whether the grid should be responsive

#### GridItem

An item within a Grid that can span multiple columns.

```jsx
<GridItem span={2} spanMd={4} spanLg={6}>
  {/* Content here */}
</GridItem>
```

Props:
- `span`, `spanSm`, `spanMd`, `spanLg`, `spanXl`: 1-12 - Number of columns to span
- `start`, `startSm`, `startMd`, `startLg`, `startXl`: 1-12 - Starting column
- `order`: number - Order of the item

#### FlexContainer

A container that uses flexbox for layout.

```jsx
<FlexContainer direction="column" align="center" justify="between" gap="md">
  {/* Content here */}
</FlexContainer>
```

Props:
- `direction`: 'row' | 'row-reverse' | 'column' | 'column-reverse'
- `wrap`: 'nowrap' | 'wrap' | 'wrap-reverse'
- `justify`: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
- `align`: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
- `gap`: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- `inline`: boolean - Whether to use inline-flex

#### Spacer

Creates empty space between elements.

```jsx
<Spacer size="md" axis="vertical" />
```

Props:
- `size`: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number
- `axis`: 'horizontal' | 'vertical' | 'both'
- `grow`: boolean - Whether the spacer should grow to fill available space

### Typography

A system for consistent text styling across your application.

#### Typography

The main component for rendering text with various styles.

```jsx
<Typography variant="h1" weight="bold" align="center">
  Hello World
</Typography>
```

Props:
- `variant`: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline' | 'code'
- `weight`: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
- `align`: 'left' | 'center' | 'right' | 'justify'
- `transform`: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
- `muted`: boolean - Whether the text should appear muted
- `truncate`: boolean - Whether to truncate overflow with ellipsis
- `as`: React.ElementType - HTML element to render as
- `gutterBottom`: boolean - Whether to add margin at the bottom

#### Convenience Components

Sablier UI provides convenience components for common typography variants:

```jsx
<Heading1>This is a heading</Heading1>
<Body1>This is body text</Body1>
<Caption>This is a caption</Caption>
```

Available components:
- `Heading1`, `Heading2`, `Heading3`, `Heading4`, `Heading5`, `Heading6`
- `Subtitle1`, `Subtitle2`
- `Body1`, `Body2`
- `Caption`, `Overline`, `Code`

#### Text Formatting

Components for text formatting:

```jsx
<Bold>Bold text</Bold>
<Italic>Italic text</Italic>
<Underline>Underlined text</Underline>
<Highlight>Highlighted text</Highlight>
<KeyboardKey>Ctrl</KeyboardKey>
<InlineCode>const x = 1;</InlineCode>
```

#### TextBlock

A component for blocks of text with spacing between paragraphs.

```jsx
<TextBlock spacing="md">
  <p>First paragraph</p>
  <p>Second paragraph</p>
</TextBlock>
```

Props:
- `spacing`: 'none' | 'sm' | 'md' | 'lg' - Spacing between paragraphs

### Theme

The theming system allows for consistent styling across components.

#### useTheme Hook

```jsx
import { useTheme } from 'sablier-ui';

function MyComponent() {
  const theme = useTheme();
  
  return (
    <div style={{ color: theme.colors.primary }}>
      Themed content
    </div>
  );
}
```

### Utilities

#### cn

A utility function for conditional class merging.

```jsx
import { cn } from 'sablier-ui';

const className = cn(
  'base-class',
  isActive && 'active-class',
  size === 'large' && 'large-class'
);
```

### Navigation Components

#### TubelightNavbar

A beautiful navigation bar with a "tubelight" hover effect that's perfect for modern applications.

```jsx
import { TubelightNavbar } from 'sablier-ui';
import { Home, Settings, User } from 'lucide-react'; // or any icon library

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "Profile", url: "/profile", icon: User },
  { name: "Settings", url: "/settings", icon: Settings },
];

function MyNavigation() {
  return (
    <TubelightNavbar items={navItems} />
  );
}
```

Props:
- `items`: Array of navigation items with `name`, `url`, and `icon` properties
- `className`: Optional CSS class for styling

#### BentoGrid and BentoCard

A modern "bento box" grid layout with expandable cards, perfect for feature showcases or dashboards.

```jsx
import { BentoGrid, BentoCard } from 'sablier-ui';
import { Sparkles, Zap, Globe } from 'lucide-react'; // or any icon library

function MyBentoGrid() {
  return (
    <BentoGrid columns={3} gap="md">
      <BentoCard
        name="Feature One"
        description="This is an amazing feature with multiple capabilities and benefits."
        Icon={Sparkles}
        cta="Learn More"
        className="md:col-span-2"
        content={{
          intro: "Detailed information about Feature One.",
          details: [
            {
              title: "Overview",
              content: "Feature One lets you accomplish tasks efficiently."
            },
            {
              title: "Benefits",
              content: "Save time, increase productivity, and simplify your workflow."
            }
          ],
          metrics: "Used by 87% of our customers with 95% satisfaction."
        }}
      />
      
      <BentoCard
        name="Feature Two"
        description="Another great feature that enhances your experience."
        Icon={Zap}
        cta="Explore"
      />
      
      <BentoCard
        name="Feature Three"
        description="Third feature with global capabilities."
        Icon={Globe}
        cta="Discover"
      />
    </BentoGrid>
  );
}
```

BentoGrid Props:
- `columns`: 1 | 2 | 3 | 4 | 6 - Number of columns in the grid
- `gap`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' - Gap between grid items
- `className`: Optional CSS class for styling

BentoCard Props:
- `name`: Title of the card
- `description`: Description text
- `Icon`: React component for the icon
- `cta`: Call-to-action text
- `className`: Optional CSS class for styling (use 'md:col-span-2' for wider cards)
- `background`: Optional React node for custom background
- `content`: Optional detailed content object for the expanded view with `intro`, `details`, and `metrics` properties

## Creating a Full Documentation Site

For more comprehensive documentation, consider creating a documentation site using one of these tools:

1. **Storybook**: Create interactive examples of your components
2. **Docusaurus**: Build a full documentation site
3. **Next.js**: Create a custom documentation site with MDX

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Sablier UI](https://github.com/tuaregsand/sablier-ui) 