// Animation utilities for the UI Kit
import { Variants } from 'framer-motion';

// Types
export type Direction = 'up' | 'down' | 'left' | 'right';
export type EasingFunction = 
  | 'easeIn' | 'easeOut' | 'easeInOut' 
  | 'anticipate' | 'backIn' | 'backOut' | 'backInOut'
  | 'circIn' | 'circOut' | 'circInOut';

// Common transitions
export const transitions = {
  fast: { duration: 0.2 },
  medium: { duration: 0.3 },
  slow: { duration: 0.5 },
  springBounce: { type: 'spring', stiffness: 300, damping: 15 },
  springGentle: { type: 'spring', stiffness: 100, damping: 20 },
  staggerChildren: { staggerChildren: 0.05 },
  staggerChildrenFast: { staggerChildren: 0.02 },
  staggerChildrenSlow: { staggerChildren: 0.1 },
};

// Common easings
export const easings = {
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  anticipate: [0.4, 0, 0.6, -0.2],
};

// Fade animation variants
export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Fade in and move animation
export const fadeInVariants = (
  direction: Direction = 'up',
  distance: number = 20
): Variants => {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return {
    hidden: {
      opacity: 0,
      ...directionMap[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: transitions.medium,
    },
  };
};

// Scale animation
export const scaleVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: transitions.medium,
  },
};

// Hover animations for elements like cards and buttons
export const hoverVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: transitions.fast,
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

// Card hover effects
export const cardHoverVariants = {
  initial: { 
    y: 0,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  hover: {
    y: -5,
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    transition: transitions.medium,
  },
};

// List item animations with staggered children
export const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.staggerChildren,
  },
};

export const listItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.medium,
  },
};

// Page transition animations
export const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.4 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  },
};

// Pulse animation
export const pulseVariants = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
};

// Shimmer effect (for loading or highlighting)
export const shimmerVariants = {
  initial: { 
    backgroundPosition: '-500px 0',
  },
  animate: { 
    backgroundPosition: ['-500px 0', '500px 0'],
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 2,
      ease: 'linear',
    },
  },
};

// Rotate animation
export const rotateVariants = {
  initial: { rotate: 0 },
  rotate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 2,
      ease: 'linear',
    },
  },
};

// Helper functions for creating custom animations

// Create a slide animation
export const createSlideAnimation = (
  direction: Direction = 'right',
  distance: number = 100
): Variants => {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return {
    initial: {
      ...directionMap[direction],
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: transitions.medium,
    },
    exit: {
      ...directionMap[direction],
      opacity: 0,
      transition: { ...transitions.medium, ease: easings.easeIn },
    },
  };
};

// Create a staggered animation for lists
export const createStaggeredAnimation = (
  staggerDelay: number = 0.05,
  childAnimationType: 'fade' | 'slide' | 'scale' = 'fade',
  direction?: Direction
): {
  container: Variants;
  item: Variants;
} => {
  let itemVariants: Variants;

  switch (childAnimationType) {
    case 'slide':
      itemVariants = fadeInVariants(direction || 'up', 20);
      break;
    case 'scale':
      itemVariants = scaleVariants;
      break;
    case 'fade':
    default:
      itemVariants = fadeVariants;
  }

  return {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: staggerDelay },
      },
    },
    item: itemVariants,
  };
}; 