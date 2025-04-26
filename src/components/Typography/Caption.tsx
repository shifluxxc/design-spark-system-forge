
import React from 'react';
import { cn } from '../../lib/utils';

export interface CaptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Typography variant */
  variant?: 'caption-lg' | 'caption-md';
  /** Whether to trim margin-top */
  trimTop?: boolean;
  /** Whether to trim margin-bottom */
  trimBottom?: boolean;
  /** Theme color variant */
  theme?: 'default' | 'muted' | 'accent';
}

/**
 * Caption component for secondary descriptive text, usually used with figures or media
 */
const Caption = React.forwardRef<HTMLParagraphElement, CaptionProps>(
  (
    {
      variant = 'caption-md',
      className,
      trimTop = false,
      trimBottom = false,
      theme = 'default',
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

    return (
      <p
        ref={ref}
        className={cn(
          // Base styles
          `text-${variant}`,
          // Theme styles
          themeClasses[theme],
          // Apply margin trim classes
          trimTop && 'mt-0',
          trimBottom && 'mb-0',
          // Default spacing
          !trimTop && 'mt-1.5',
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Caption.displayName = 'Caption';

export default Caption;
