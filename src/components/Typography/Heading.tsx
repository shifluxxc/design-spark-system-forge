
import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { TypographyVariant, ResponsiveTypography } from '../../tokens/typography';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: TypographyVariant;
  responsive?: ResponsiveTypography;
  trimTop?: boolean;
  trimBottom?: boolean;
  theme?: 'default' | 'muted' | 'accent';
  lightweight?: boolean;
  toggleTheme?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      level,
      variant,
      responsive,
      className,
      trimTop = false,
      trimBottom = false,
      theme: initialTheme = 'default',
      toggleTheme = false,
      lightweight = false,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const [currentTheme, setCurrentTheme] = useState(initialTheme);
    
    // Get the correct heading element based on level
    const Component = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

    // Map level to appropriate default variant if not overridden
    const defaultVariant = `h${level}` as TypographyVariant;
    
    // Theme classes
    const themeClasses = {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
      accent: 'text-primary',
    };

    // Font size mapping to ensure consistent sizing
    const fontSizeClasses = {
      h1: 'text-4xl font-bold',
      h2: 'text-3xl font-bold',
      h3: 'text-2xl font-semibold',
      h4: 'text-xl font-semibold',
      h5: 'text-lg font-semibold',
      h6: 'text-base font-semibold',
    };

    // Create responsive classes array
    const responsiveClasses: string[] = [];
    if (responsive) {
      if (responsive.base) responsiveClasses.push(`text-${responsive.base}`);
      if (responsive.sm) responsiveClasses.push(`sm:text-${responsive.sm}`);
      if (responsive.md) responsiveClasses.push(`md:text-${responsive.md}`);
      if (responsive.lg) responsiveClasses.push(`lg:text-${responsive.lg}`);
      if (responsive.xl) responsiveClasses.push(`xl:text-${responsive.xl}`);
    }

    const handleThemeToggle = () => {
      if (toggleTheme) {
        const themes: Array<'default' | 'muted' | 'accent'> = ['default', 'muted', 'accent'];
        const currentIndex = themes.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        setCurrentTheme(themes[nextIndex]);
      }
    };

    return (
      <Component
        ref={ref}
        className={cn(
          // Base sizing
          fontSizeClasses[`h${level}`],
          // Apply default styles based on level if variant not specified
          !variant && `text-heading-${defaultVariant}`,
          // Apply variant if specified
          variant && `text-${variant}`,
          // Theme styles
          themeClasses[currentTheme],
          // If lightweight, override font weight
          lightweight && 'font-normal',
          // Apply margin trim classes
          trimTop && 'mt-0',
          trimBottom && 'mb-0',
          // Apply responsive classes
          ...responsiveClasses,
          // Add cursor-pointer if theme is toggleable
          toggleTheme && 'cursor-pointer',
          className
        )}
        onClick={(e) => {
          handleThemeToggle();
          onClick?.(e);
        }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';

export default Heading;

