// Grid system for the UI Kit
import React from 'react';
import { cn } from '../utils';

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

const paddingMap: Record<GridGap, string> = {
  none: 'p-0',
  xs: 'p-1',
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8',
};

const maxWidthMap: Record<Exclude<GridContainerProps['maxWidth'], undefined>, string> = {
  xs: 'max-w-screen-sm',
  sm: 'max-w-screen-md',
  md: 'max-w-screen-lg',
  lg: 'max-w-screen-xl',
  xl: 'max-w-screen-2xl',
  full: 'max-w-full',
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
          paddingMap[padding],
          !fullWidth && maxWidthMap[maxWidth],
          centered && 'mx-auto',
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
    // Map columns to Tailwind grid-cols classes
    const getColumnsClass = (cols: GridProps['columns']) => {
      switch (cols) {
        case 1:
          return 'grid-cols-1';
        case 2:
          return 'grid-cols-2';
        case 3:
          return 'grid-cols-3';
        case 4:
          return 'grid-cols-4';
        case 5:
          return 'grid-cols-5';
        case 6:
          return 'grid-cols-6';
        case 12:
        default:
          return 'grid-cols-12';
      }
    };

    // Responsive column classes
    const getResponsiveColumnsClass = (cols: GridProps['columns']) => {
      switch (cols) {
        case 1:
          return 'grid-cols-1';
        case 2:
          return 'grid-cols-1 sm:grid-cols-2';
        case 3:
          return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
        case 4:
          return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4';
        case 5:
          return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5';
        case 6:
          return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6';
        case 12:
        default:
          return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12';
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          responsive ? getResponsiveColumnsClass(columns) : getColumnsClass(columns),
          !rowGap && !columnGap && gapMap[gap],
          rowGap && rowGapMap[rowGap],
          columnGap && columnGapMap[columnGap],
          autoRows && 'auto-rows-auto',
          autoColumns && 'auto-cols-auto',
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
      span,
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
    // Generate span classes
    const getSpanClass = (s: GridSpan) => `col-span-${s}`;
    const getStartClass = (s: GridSpan) => `col-start-${s}`;
    
    return (
      <div
        ref={ref}
        className={cn(
          // Column span classes
          span && getSpanClass(span),
          spanSm && `sm:${getSpanClass(spanSm)}`,
          spanMd && `md:${getSpanClass(spanMd)}`,
          spanLg && `lg:${getSpanClass(spanLg)}`,
          spanXl && `xl:${getSpanClass(spanXl)}`,
          
          // Column start classes
          start && getStartClass(start),
          startSm && `sm:${getStartClass(startSm)}`,
          startMd && `md:${getStartClass(startMd)}`,
          startLg && `lg:${getStartClass(startLg)}`,
          startXl && `xl:${getStartClass(startXl)}`,
          
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

// Flex Container Component
export interface FlexContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  gap?: GridGap;
  inline?: boolean;
}

export const FlexContainer = React.forwardRef<HTMLDivElement, FlexContainerProps>(
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
    // Map flex properties to Tailwind classes
    const directionMap: Record<FlexContainerProps['direction'] & string, string> = {
      'row': 'flex-row',
      'row-reverse': 'flex-row-reverse',
      'column': 'flex-col',
      'column-reverse': 'flex-col-reverse',
    };
    
    const wrapMap: Record<FlexContainerProps['wrap'] & string, string> = {
      'nowrap': 'flex-nowrap',
      'wrap': 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse',
    };
    
    const justifyMap: Record<FlexContainerProps['justify'] & string, string> = {
      'start': 'justify-start',
      'end': 'justify-end',
      'center': 'justify-center',
      'between': 'justify-between',
      'around': 'justify-around',
      'evenly': 'justify-evenly',
    };
    
    const alignMap: Record<FlexContainerProps['align'] & string, string> = {
      'start': 'items-start',
      'end': 'items-end',
      'center': 'items-center',
      'baseline': 'items-baseline',
      'stretch': 'items-stretch',
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          inline ? 'inline-flex' : 'flex',
          directionMap[direction],
          wrapMap[wrap],
          justifyMap[justify],
          alignMap[align],
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

FlexContainer.displayName = 'FlexContainer';

// Spacer Component
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
    // Map size to pixel values if it's a string (GridGap)
    const getSizeValue = (s: GridGap | number): number => {
      if (typeof s === 'number') return s;
      
      switch (s) {
        case 'none': return 0;
        case 'xs': return 4;
        case 'sm': return 8;
        case 'md': return 16;
        case 'lg': return 24;
        case 'xl': return 32;
        default: return 16;
      }
    };
    
    const width = axis === 'horizontal' || axis === 'both' 
      ? getSizeValue(size) 
      : undefined;
      
    const height = axis === 'vertical' || axis === 'both' 
      ? getSizeValue(size) 
      : undefined;
    
    return (
      <div
        ref={ref}
        className={cn(
          grow && 'flex-grow',
          className
        )}
        style={{
          width: width !== undefined ? `${width}px` : undefined,
          height: height !== undefined ? `${height}px` : undefined,
          minWidth: width !== undefined ? `${width}px` : undefined,
          minHeight: height !== undefined ? `${height}px` : undefined,
        }}
        {...props}
      />
    );
  }
);

Spacer.displayName = 'Spacer'; 