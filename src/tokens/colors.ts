
/**
 * Color design tokens
 */

// Core colors
export const colors = {
  // Primary blue
  primary: {
    50: 'bg-primary-50 text-neutral-900',
    100: 'bg-primary-100 text-neutral-900',
    200: 'bg-primary-200 text-neutral-900',
    300: 'bg-primary-300 text-neutral-900',
    400: 'bg-primary-400 text-neutral-900',
    500: 'bg-primary-500 text-white',
    600: 'bg-primary-600 text-white',
    700: 'bg-primary-700 text-white',
    800: 'bg-primary-800 text-white',
    900: 'bg-primary-900 text-white',
    950: 'bg-primary-950 text-white',
  },
  
  // Neutral scale
  neutral: {
    50: 'bg-neutral-50 text-neutral-900',
    100: 'bg-neutral-100 text-neutral-900',
    200: 'bg-neutral-200 text-neutral-900',
    300: 'bg-neutral-300 text-neutral-900',
    400: 'bg-neutral-400 text-white',
    500: 'bg-neutral-500 text-white',
    600: 'bg-neutral-600 text-white',
    700: 'bg-neutral-700 text-white',
    800: 'bg-neutral-800 text-white',
    900: 'bg-neutral-900 text-white',
    950: 'bg-neutral-950 text-white',
  },
};

// Semantic colors
export const semanticColors = {
  // Success green
  success: 'bg-success text-success-foreground',
  
  // Warning amber
  warning: 'bg-warning text-warning-foreground',
  
  // Error red
  error: 'bg-destructive text-destructive-foreground',
  
  // Info blue
  info: 'bg-info text-info-foreground',
};

// Text colors
export const textColors = {
  primary: 'text-foreground',
  secondary: 'text-muted-foreground',
  accent: 'text-primary',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-destructive',
  info: 'text-info',
};

// Background colors
export const bgColors = {
  primary: 'bg-background',
  secondary: 'bg-secondary',
  muted: 'bg-muted',
  accent: 'bg-accent',
  success: 'bg-success/10',
  warning: 'bg-warning/10',
  error: 'bg-destructive/10',
  info: 'bg-info/10',
};

// Border colors
export const borderColors = {
  default: 'border-border',
  input: 'border-input',
  primary: 'border-primary',
  muted: 'border-muted',
  accent: 'border-accent',
  success: 'border-success',
  warning: 'border-warning',
  error: 'border-destructive',
  info: 'border-info',
};

// Types for theme support
export type ThemeMode = 'light' | 'dark';
