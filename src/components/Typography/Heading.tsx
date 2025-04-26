
import React from 'react';
import { cn } from '../../lib/utils';
import { TypographyVariant, ResponsiveTypography } from '../../tokens/typography';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Heading level from 1-6 */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  /** Variant to override default styling for the heading level */
  variant?: TypographyVariant;
  /** Responsive variants for different screen sizes */
  responsive?: ResponsiveTypography;
  /** Whether to trim margin-top */
  trimTop?: boolean;
  /** Whether to trim margin-bottom */
  trimBottom?: boolean;
  /** Theme color variant */
  theme?: 'default' | 'muted' | 'accent';
  /** Make text weight normal instead of default bold/semibold */
  lightweight?: boolean;
}

/**
 * Heading component for H1-H6 elements with proper styling and accessibility
 */
const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      level,
      variant,
      responsive,
      className,
      trimTop = false,
      trimBottom = false,
      theme = 'default',
      lightweight = false,
      children,
      ...props
    },
    ref
  ) => {
    // Get the correct heading element based on level
    const Component = `h${level}` as keyof JSX.IntrinsicElements;

    // Map level to appropriate default variant if not overridden
    const defaultVariant = `h${level}` as TypographyVariant;
    
    // Theme classes
    const themeClasses = {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
      accent: 'text-primary',
    };

    // Apply responsive classes
    const responsiveClasses = responsive
      ? [
          responsive.base && `text-${responsive.base}`,
          responsive.sm && `sm:text-${responsive.sm}`,
          responsive.md && `md:text-${responsive.md}`,
          responsive.lg && `lg:text-${responsive.lg}`,
          responsive.xl && `xl:text-${responsive.xl}`,
        ].filter(Boolean)
      : [];

    return (
      <Component
        ref={ref}
        className={cn(
          // Apply default styles based on level if variant not specified
          !variant && `text-heading-${defaultVariant}`,
          // Apply variant if specified
          variant && `text-${variant}`,
          // Theme styles
          themeClasses[theme],
          // If lightweight, override font weight
          lightweight && 'font-normal',
          // Apply margin trim classes
          trimTop && 'mt-0',
          trimBottom && 'mb-0',
          // Apply responsive classes
          ...responsiveClasses,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';

export default Heading;
