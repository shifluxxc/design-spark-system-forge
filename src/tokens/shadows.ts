
/**
 * Shadow design tokens
 */

// Box shadow values
export const shadows = {
  xs: 'shadow-xs',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  inner: 'shadow-inner',
  none: 'shadow-none',
};

// Focus ring shadows
export const focusRings = {
  default: 'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  within: 'focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
};

// Shadow utilities for components
export const getElevation = (level: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner') => {
  return shadows[level];
};

// Hover shadow utilities
export const hoverShadows = {
  default: 'hover:shadow-md',
  lg: 'hover:shadow-lg',
  xl: 'hover:shadow-xl',
};
