
import React from 'react';
import { cn } from '../../lib/utils';

export interface HelperTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Whether to trim margin-top */
  trimTop?: boolean;
  /** Whether to trim margin-bottom */
  trimBottom?: boolean;
  /** Validation state that affects color */
  state?: 'default' | 'error' | 'success' | 'warning';
  /** ID for connecting to form element via aria-describedby */
  id?: string;
}

/**
 * HelperText component for providing additional guidance in forms
 */
const HelperText = React.forwardRef<HTMLParagraphElement, HelperTextProps>(
  (
    {
      className,
      trimTop = false,
      trimBottom = false,
      state = 'default',
      children,
      ...props
    },
    ref
  ) => {
    // State classes for different validation states
    const stateClasses = {
      default: 'text-muted-foreground',
      error: 'text-destructive',
      success: 'text-success',
      warning: 'text-warning',
    };

    return (
      <p
        ref={ref}
        className={cn(
          // Base styles
          'text-helper-text',
          // State styles
          stateClasses[state],
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

HelperText.displayName = 'HelperText';

export default HelperText;
