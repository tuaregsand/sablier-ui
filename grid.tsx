// Grid system for the UI Kit
import React from 'react';
import { cn } from './utils';

// Types
type GridSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface GridContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: GridGap;
  centered?: boolean;
}

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: GridGap;
  rowGap?: GridGap;
  columnGap?: GridGap;
  autoRows?: boolean;
  autoColumns?: boolean;
  responsive?: boolean;
}

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: GridSpan;
  spanSm?: GridSpan;
  spanMd?: GridSpan;
  spanLg?: GridSpan;
  spanXl?: GridSpan;
  start?: GridSpan;
  startSm?: GridSpan;
  startMd?: GridSpan;
  startLg?: GridSpan;
  startXl?: GridSpan;
  order?: number;
}

// Map gap size to Tailwind classes
const gapMap: Record<GridGap, string> = {
  none: 'gap-0',
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
};

const rowGapMap: Record<GridGap, string> = {
  none: 'gap-y-0',
  xs: 'gap-y-1',
  sm: 'gap-y-2',
  md: 'gap-y-4',
  lg: 'gap-y-6',
  xl: 'gap-y-8',
};

const columnGapMap: Record<GridGap, string> = {
  none: 'gap-x-0',
  xs: 'gap-x-1',
  sm: 'gap-x-2',
  md: 'gap-x-4',
  lg: 'gap-x-6',
  xl: 'gap-x-8',
};

const maxWidthMap: Record<NonNullable<GridContainerProps['maxWidth']>, string> = {
  xs: 'max-w-xl',
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[90rem]',
  full: 'max-w-full',
};

const paddingMap: Record<GridGap, string> = {
  none: 'px-0',
  xs: 'px-1',
  sm: 'px-2',
  md: 'px-4',
  lg: 'px-6',
  xl: 'px-8',
};

// Grid Container Component
export const GridContainer = React.forwardRef<HTMLDivElement, GridContainerProps>(
  (
    { 
      children, 
      className, 
      fullWidth = false, 
      maxWidth = 'lg', 
      padding = 'md',
      centered = true,
      ...props 
    }, 
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-full mx-auto',
          !fullWidth && maxWidthMap[maxWidth],
          paddingMap[padding],
          centered && 'flex flex-col items-center',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GridContainer.displayName = 'GridContainer';

// Grid Component
export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    { 
      children, 
      className, 
      columns = 12, 
      gap = 'md',
      rowGap,
      columnGap,
      autoRows = false,
      autoColumns = false,
      responsive = true,
      ...props 
    }, 
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          // Grid columns configuration
          columns === 1 && 'grid-cols-1',
          columns === 2 && 'grid-cols-2',
          columns === 3 && 'grid-cols-3',
          columns === 4 && 'grid-cols-4',
          columns === 5 && 'grid-cols-5',
          columns === 6 && 'grid-cols-6',
          columns === 12 && 'grid-cols-12',

          // Responsive grid for smaller screens if enabled
          responsive && columns > 1 && 'grid-cols-1 sm:grid-cols-2',
          responsive && columns > 2 && 'md:grid-cols-3',
          responsive && columns > 3 && 'lg:grid-cols-4',
          responsive && columns > 4 && 'xl:grid-cols-6',
          responsive && columns > 6 && '2xl:grid-cols-12',

          // Auto rows and columns
          autoRows && 'auto-rows-min',
          autoColumns && 'auto-cols-min',

          // Gap handling
          !rowGap && !columnGap && gapMap[gap],
          rowGap && rowGapMap[rowGap],
          columnGap && columnGapMap[columnGap],
          
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';

// Grid Item Component
export const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  (
    { 
      children, 
      className, 
      span = 12, 
      spanSm, 
      spanMd, 
      spanLg, 
      spanXl,
      start,
      startSm,
      startMd,
      startLg,
      startXl,
      order,
      ...props 
    }, 
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Span classes
          `col-span-${span}`,
          spanSm && `sm:col-span-${spanSm}`,
          spanMd && `md:col-span-${spanMd}`,
          spanLg && `lg:col-span-${spanLg}`,
          spanXl && `xl:col-span-${spanXl}`,
          
          // Start position classes
          start && `col-start-${start}`,
          startSm && `sm:col-start-${startSm}`,
          startMd && `md:col-start-${startMd}`,
          startLg && `lg:col-start-${startLg}`,
          startXl && `xl:col-start-${startXl}`,
          
          // Order
          order !== undefined && `order-${order}`,
          
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GridItem.displayName = 'GridItem';

// Flex Container for more flexible layouts
export interface FlexContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  gap?: GridGap;
  inline?: boolean;
}

export const Flex = React.forwardRef<HTMLDivElement, FlexContainerProps>(
  (
    { 
      children, 
      className, 
      direction = 'row', 
      wrap = 'nowrap',
      justify = 'start',
      align = 'start',
      gap = 'none',
      inline = false,
      ...props 
    }, 
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          inline ? 'inline-flex' : 'flex',
          
          // Direction
          direction === 'row' && 'flex-row',
          direction === 'row-reverse' && 'flex-row-reverse',
          direction === 'column' && 'flex-col',
          direction === 'column-reverse' && 'flex-col-reverse',
          
          // Wrap
          wrap === 'nowrap' && 'flex-nowrap',
          wrap === 'wrap' && 'flex-wrap',
          wrap === 'wrap-reverse' && 'flex-wrap-reverse',
          
          // Justify
          justify === 'start' && 'justify-start',
          justify === 'end' && 'justify-end',
          justify === 'center' && 'justify-center',
          justify === 'between' && 'justify-between',
          justify === 'around' && 'justify-around',
          justify === 'evenly' && 'justify-evenly',
          
          // Align
          align === 'start' && 'items-start',
          align === 'end' && 'items-end',
          align === 'center' && 'items-center',
          align === 'baseline' && 'items-baseline',
          align === 'stretch' && 'items-stretch',
          
          // Gap
          gapMap[gap],
          
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Flex.displayName = 'Flex';

// Spacer component for adding consistent spacing
export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: GridGap | number;
  axis?: 'horizontal' | 'vertical' | 'both';
  grow?: boolean;
}

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  (
    { 
      className, 
      size = 'md', 
      axis = 'vertical',
      grow = false,
      ...props 
    }, 
    ref
  ) => {
    // Size mapping
    const sizeMap: Record<GridGap, string> = {
      none: '0',
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    };

    const width = axis === 'horizontal' || axis === 'both' 
      ? typeof size === 'string' ? sizeMap[size] : `${size}px`
      : undefined;

    const height = axis === 'vertical' || axis === 'both'
      ? typeof size === 'string' ? sizeMap[size] : `${size}px`
      : undefined;

    return (
      <div
        ref={ref}
        className={cn(grow && 'flex-grow', className)}
        style={{
          width,
          height,
          minWidth: width,
          minHeight: height,
        }}
        {...props}
      />
    );
  }
);

Spacer.displayName = 'Spacer'; 