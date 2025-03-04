// Typography system for the UI Kit
import React from 'react';
import { cn } from './utils';

// Types
export type TextVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'subtitle1' | 'subtitle2'
  | 'body1' | 'body2'
  | 'caption' | 'overline' | 'code';

export type FontWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type TextAlign = 'left' | 'center' | 'right' | 'justify';
export type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  weight?: FontWeight;
  align?: TextAlign;
  transform?: TextTransform;
  muted?: boolean;
  truncate?: boolean;
  as?: React.ElementType;
  gutterBottom?: boolean;
}

// Map variants to Tailwind classes
const variantClassMap: Record<TextVariant, string> = {
  h1: 'text-4xl md:text-5xl font-bold tracking-tight',
  h2: 'text-3xl md:text-4xl font-bold tracking-tight',
  h3: 'text-2xl md:text-3xl font-bold',
  h4: 'text-xl md:text-2xl font-semibold',
  h5: 'text-lg md:text-xl font-semibold',
  h6: 'text-base md:text-lg font-semibold',
  subtitle1: 'text-xl font-medium',
  subtitle2: 'text-lg font-medium',
  body1: 'text-base',
  body2: 'text-sm',
  caption: 'text-xs',
  overline: 'text-xs uppercase tracking-wider',
  code: 'font-mono text-sm',
};

// Map variant to default HTML element
const variantElementMap: Record<TextVariant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
  code: 'code',
};

// Font weight maps
const weightClassMap: Record<FontWeight, string> = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

// Text alignment map
const alignClassMap: Record<TextAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

// Text transform map
const transformClassMap: Record<TextTransform, string> = {
  none: 'normal-case',
  capitalize: 'capitalize',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
};

// Typography component
export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      children,
      className,
      variant = 'body1',
      weight,
      align,
      transform,
      muted = false,
      truncate = false,
      as,
      gutterBottom = false,
      ...props
    },
    ref
  ) => {
    const Component = as || variantElementMap[variant];

    return (
      <Component
        ref={ref}
        className={cn(
          // Base variant styling
          variantClassMap[variant],
          
          // Optional styles
          weight && weightClassMap[weight],
          align && alignClassMap[align],
          transform && transformClassMap[transform],
          muted && 'text-muted-foreground',
          truncate && 'truncate',
          gutterBottom && 'mb-4',
          
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';

// Specialized Typography components for convenience

export const Heading1 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h1" {...props} />
);

export const Heading2 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h2" {...props} />
);

export const Heading3 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h3" {...props} />
);

export const Heading4 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h4" {...props} />
);

export const Heading5 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h5" {...props} />
);

export const Heading6 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h6" {...props} />
);

export const Subtitle1 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="subtitle1" {...props} />
);

export const Subtitle2 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="subtitle2" {...props} />
);

export const Body1 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="body1" {...props} />
);

export const Body2 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="body2" {...props} />
);

export const Caption = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="caption" {...props} />
);

export const Overline = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="overline" {...props} />
);

export const Code = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="code" {...props} />
);

// Text block component for consistent paragraphs
export interface TextBlockProps extends Omit<TypographyProps, 'variant'> {
  spacing?: 'none' | 'sm' | 'md' | 'lg';
}

export const TextBlock = ({
  children,
  className,
  spacing = 'md',
  ...props
}: TextBlockProps) => {
  const spacingClasses = {
    none: '',
    sm: 'space-y-2',
    md: 'space-y-4',
    lg: 'space-y-6',
  };

  return (
    <div className={cn('max-w-prose', spacingClasses[spacing], className)}>
      {children}
    </div>
  );
};

// Inline text formatting components
export const Bold = ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <strong className={cn('font-semibold', className)} {...props}>
    {children}
  </strong>
);

export const Italic = ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <em className={cn('italic', className)} {...props}>
    {children}
  </em>
);

export const Underline = ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <span className={cn('underline underline-offset-4', className)} {...props}>
    {children}
  </span>
);

export const Highlight = ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <mark className={cn('bg-primary/20 rounded px-1', className)} {...props}>
    {children}
  </mark>
);

// Semantic text components
export const KeyboardKey = ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <kbd 
    className={cn(
      'px-1.5 py-0.5 text-xs font-semibold text-muted-foreground bg-muted border border-border rounded',
      className
    )} 
    {...props}
  >
    {children}
  </kbd>
);

export const InlineCode = ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <code 
    className={cn(
      'px-1.5 py-0.5 text-sm font-mono bg-muted rounded border border-border',
      className
    )} 
    {...props}
  >
    {children}
  </code>
); 