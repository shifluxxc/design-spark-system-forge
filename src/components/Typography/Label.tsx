
import React from 'react';
import { cn } from '../../lib/utils';

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  /** Typography variant */
  variant?: 'label-lg' | 'label-md';
  /** Whether to trim margin-bottom */
  trimBottom?: boolean;
  /** Theme color variant */
  theme?: 'default' | 'muted' | 'accent' | 'required';
  /** Indicates if the label is for a required field */
  required?: boolean;
  /** Indicates if the associated input is disabled */
  disabled?: boolean;
  /** Optional htmlFor attribute to associate with form element */
  htmlFor?: string;
}

/**
 * Label component for form elements with proper styling and accessibility
 */
const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      variant = 'label-md',
      className,
      trimBottom = false,
      theme = 'default',
      required = false,
      disabled = false,
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
      required: 'text-foreground',
    };

    return (
      <label
        ref={ref}
        className={cn(
          // Base styles
          `text-${variant} font-medium block`,
          // Theme styles
          themeClasses[theme],
          disabled && 'opacity-50 cursor-not-allowed',
          // Apply margin trim classes
          !trimBottom && 'mb-1.5',
          className
        )}
        {...props}
      >
        {children}
        {required && (
          <span className="ml-1 text-destructive" aria-hidden="true">
            *
          </span>
        )}
      </label>
    );
  }
);

Label.displayName = 'Label';

export default Label;
