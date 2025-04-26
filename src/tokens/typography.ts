
/**
 * Typography design tokens
 */

// Font sizes (in px, rem conversion handled by Tailwind)
export const fontSize = {
  // Display
  displayLg: 'text-display-lg', // 60px
  displayMd: 'text-display-md', // 48px
  displaySm: 'text-display-sm', // 36px
  
  // Headings
  h1: 'text-heading-h1', // 32px
  h2: 'text-heading-h2', // 28px
  h3: 'text-heading-h3', // 24px
  h4: 'text-heading-h4', // 20px
  h5: 'text-heading-h5', // 18px
  h6: 'text-heading-h6', // 16px
  
  // Body
  bodyLg: 'text-body-lg', // 18px
  bodyMd: 'text-body-md', // 16px
  bodySm: 'text-body-sm', // 14px
  
  // Supporting
  labelLg: 'text-label-lg', // 14px
  labelMd: 'text-label-md', // 12px
  captionLg: 'text-caption-lg', // 14px
  captionMd: 'text-caption-md', // 12px
  helperText: 'text-helper-text', // 12px
};

// Font weights
export const fontWeight = {
  normal: 'font-normal', // 400
  medium: 'font-medium', // 500
  semibold: 'font-semibold', // 600
  bold: 'font-bold', // 700
};

// Line heights
export const lineHeight = {
  none: 'leading-none', // 1
  tight: 'leading-tight', // 1.25
  snug: 'leading-snug', // 1.375
  normal: 'leading-normal', // 1.5
  relaxed: 'leading-relaxed', // 1.625
  loose: 'leading-loose', // 2
};

// Letter spacing
export const letterSpacing = {
  tighter: 'tracking-tighter', // -0.05em
  tight: 'tracking-tight', // -0.025em
  normal: 'tracking-normal', // 0em
  wide: 'tracking-wide', // 0.025em
  wider: 'tracking-wider', // 0.05em
  widest: 'tracking-widest', // 0.1em
};

// Typography variants
export type TypographyVariant =
  | 'display-lg'
  | 'display-md'
  | 'display-sm'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'label-lg'
  | 'label-md'
  | 'caption-lg'
  | 'caption-md'
  | 'helper-text';

// Typography responsive variants
export type ResponsiveTypography = {
  base?: TypographyVariant;
  sm?: TypographyVariant;
  md?: TypographyVariant;
  lg?: TypographyVariant;
  xl?: TypographyVariant;
};
