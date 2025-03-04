"use client";

import React from "react";
import { cn } from "./utils";

export interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
  columns?: 1 | 2 | 3 | 4 | 6;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function BentoGrid({ 
  className, 
  children, 
  columns = 3,
  gap = 'md'
}: BentoGridProps) {
  const gapClassMap = {
    'xs': 'gap-2',
    'sm': 'gap-3',
    'md': 'gap-4',
    'lg': 'gap-6',
    'xl': 'gap-8',
  };

  const colClassMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  };

  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem]",
        colClassMap[columns], 
        gapClassMap[gap],
        className
      )}
    >
      {children}
    </div>
  );
}

export { BentoCard } from "./bento-card"; 