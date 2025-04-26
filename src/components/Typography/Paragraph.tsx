
import React from 'react';
import { cn } from '../../lib/utils';
import { TypographyVariant, ResponsiveTypography } from '../../tokens/typography';

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Typography variant */
  variant?: 'body-lg' | 'body-md' | 'body-sm';
  /** Responsive variants for different screen sizes */
  responsive?: ResponsiveTypography;
  /** Whether to trim margin-top */
  trimTop?: boolean;
  /** Whether to trim margin-bottom */
  trimBottom?: boolean;
  /** Theme color variant */
  theme?: 'default' | 'muted' | 'accent';
  /** Make text weight medium or bold */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Lead paragraph (larger, more prominent) */
  lead?: boolean;
}

/**
 * Paragraph component for body text with proper styling and accessibility
 */
const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  (
    {
      variant = 'body-md',
      responsive,
      className,
      trimTop = false,
      trimBottom = false,
      theme = 'default',
      weight = 'normal',
      lead = false,
      children,
      ...props
    },
    ref
  ) => {
    // Theme classes
    const themeClasses = {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
      accent: 'text-primary',
    };

    // Weight classes
    const weightClasses = {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
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
      <p
        ref={ref}
        className={cn(
          // Base variant
          lead ? 'text-body-lg leading-relaxed' : `text-${variant}`,
          // Theme styles
          themeClasses[theme],
          // Weight styles
          weightClasses[weight],
          // Apply margin trim classes
          trimTop && 'mt-0',
          trimBottom && 'mb-0',
          // Spacing
          !trimBottom && 'mb-4 last:mb-0',
          // Apply responsive classes
          ...responsiveClasses,
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = 'Paragraph';

export default Paragraph;
