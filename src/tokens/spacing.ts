
/**
 * Spacing design tokens
 */

// Spacing scale (in rem)
export const spacing = {
  px: 'px', // 1px
  0: '0px',
  0.5: 'spacing-0.5', // 0.125rem = 2px
  1: 'spacing-1', // 0.25rem = 4px
  1.5: 'spacing-1.5', // 0.375rem = 6px
  2: 'spacing-2', // 0.5rem = 8px
  2.5: 'spacing-2.5', // 0.625rem = 10px
  3: 'spacing-3', // 0.75rem = 12px
  3.5: 'spacing-3.5', // 0.875rem = 14px
  4: 'spacing-4', // 1rem = 16px
  5: 'spacing-5', // 1.25rem = 20px
  6: 'spacing-6', // 1.5rem = 24px
  7: 'spacing-7', // 1.75rem = 28px
  8: 'spacing-8', // 2rem = 32px
  9: 'spacing-9', // 2.25rem = 36px
  10: 'spacing-10', // 2.5rem = 40px
  11: 'spacing-11', // 2.75rem = 44px
  12: 'spacing-12', // 3rem = 48px
  14: 'spacing-14', // 3.5rem = 56px
  16: 'spacing-16', // 4rem = 64px
  20: 'spacing-20', // 5rem = 80px
  24: 'spacing-24', // 6rem = 96px
  28: 'spacing-28', // 7rem = 112px
  32: 'spacing-32', // 8rem = 128px
  36: 'spacing-36', // 9rem = 144px
  40: 'spacing-40', // 10rem = 160px
  44: 'spacing-44', // 11rem = 176px
  48: 'spacing-48', // 12rem = 192px
  52: 'spacing-52', // 13rem = 208px
  56: 'spacing-56', // 14rem = 224px
  60: 'spacing-60', // 15rem = 240px
  64: 'spacing-64', // 16rem = 256px
  72: 'spacing-72', // 18rem = 288px
  80: 'spacing-80', // 20rem = 320px
  96: 'spacing-96', // 24rem = 384px
};

// Convert to Tailwind classes
export const spacingClasses = {
  // Margin
  m: {
    auto: 'm-auto',
    ...Object.fromEntries(Object.entries(spacing).map(([key, value]) => [key, `m-${value}`])),
  },
  mx: {
    auto: 'mx-auto',
    ...Object.fromEntries(Object.entries(spacing).map(([key, value]) => [key, `mx-${value}`])),
  },
  my: {
    auto: 'my-auto',
    ...Object.fromEntries(Object.entries(spacing).map(([key, value]) => [key, `my-${value}`])),
  },
  mt: {
    auto: 'mt-auto',
    ...Object.fromEntries(Object.entries(spacing).map(([key, value]) => [key, `mt-${value}`])),
  },
  mr: {
    auto: 'mr-auto',
    ...Object.fromEntries(Object.entries(spacing).map(([key, value]) => [key, `mr-${value}`])),
  },
  mb: {
    auto: 'mb-auto',
    ...Object.fromEntries(Object.entries(spacing).map(([key, value]) => [key, `mb-${value}`])),
  },
  ml: {
    auto: 'ml-auto',
    ...Object.fromEntries(Object.entries(spacing).map(([key, value]) => [key, `ml-${value}`])),
  },
  
  // Padding
  p: Object.fromEntries(Object.entries(spacing).map(([key, value]) => [key, `p-${value}`])),
  px: Object.fromEntries(Object.entries(spacing).map(([key, value]) => [key, `px-${value}`])),
  py: Object.fromEntries(Object.entries(spacing).map(([key, value]) => [key, `py-${value}`])),
  pt: Object.fromEntries(Object.entries(spacing).map(([key, value]) => [key, `pt-${value}`])),
  pr: Object.fromEntries(Object.entries(spacing).map(([key, value]) => [key, `pr-${value}`])),
  pb: Object.fromEntries(Object.entries(spacing).map(([key, value]) => [key, `pb-${value}`])),
  pl: Object.fromEntries(Object.entries(spacing).map(([key, value]) => [key, `pl-${value}`])),
  
  // Gap
  gap: Object.fromEntries(Object.entries(spacing).map(([key, value]) => [key, `gap-${value}`])),
  gapX: Object.fromEntries(Object.entries(spacing).map(([key, value]) => [key, `gap-x-${value}`])),
  gapY: Object.fromEntries(Object.entries(spacing).map(([key, value]) => [key, `gap-y-${value}`])),
};

// Component spacings
export const componentSpacing = {
  // Form elements padding
  inputPaddingX: 'px-3',
  inputPaddingY: 'py-2',
  
  // Button padding by size
  buttonPadding: {
    sm: 'px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'px-5 py-2.5',
  },
  
  // Form element sizes
  formElementHeight: {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  },
  
  // Content spacing
  container: 'px-4 sm:px-6 lg:px-8',
  section: 'py-12 sm:py-16 lg:py-20',
  
  // Card spacing
  card: 'p-4 sm:p-6',
};
