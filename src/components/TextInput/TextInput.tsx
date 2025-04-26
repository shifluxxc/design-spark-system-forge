
import React, { forwardRef, useState } from 'react';
import { cn } from '../../lib/utils';
import { Eye, EyeOff } from 'lucide-react';

export type TextInputSize = 'sm' | 'md' | 'lg';
export type TextInputState = 'default' | 'hover' | 'focus' | 'error' | 'disabled';

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input size variant */
  size?: TextInputSize;
  /** Input state */
  state?: TextInputState;
  /** Left side icon */
  leftIcon?: React.ReactNode;
  /** Right side icon */
  rightIcon?: React.ReactNode;
  /** Error message to display */
  errorMessage?: string;
  /** Helper text to provide additional context */
  helperText?: string;
  /** Full width of container */
  fullWidth?: boolean;
  /** Show password toggle (only for type="password") */
  showPasswordToggle?: boolean;
}

/**
 * TextInput component for collecting user input
 */
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      size = 'md',
      state = 'default',
      leftIcon,
      rightIcon,
      errorMessage,
      helperText,
      fullWidth = false,
      disabled = false,
      showPasswordToggle = false,
      type = 'text',
      id,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const uniqueId = id || `text-input-${Math.random().toString(36).substring(2, 9)}`;
    const helperId = `${uniqueId}-helper`;
    const errorId = `${uniqueId}-error`;
    
    // Determine if we're showing an error
    const hasError = state === 'error';
    // Consider component disabled if disabled prop is true or state is 'disabled'
    const isDisabled = disabled || state === 'disabled';
    // Determine the input type (for password toggle functionality)
    const inputType = type === 'password' && showPassword ? 'text' : type;
    
    // Size classes for the input container
    const sizeClasses = {
      sm: 'h-8 text-sm',
      md: 'h-10 text-base',
      lg: 'h-12 text-lg',
    };
    
    // State classes for styling based on input state
    const stateClasses = {
      default: 'border-input hover:border-primary/50',
      hover: 'border-primary/50',
      focus: 'border-primary ring-2 ring-primary/20',
      error: 'border-destructive hover:border-destructive focus:border-destructive focus:ring-destructive/20',
      disabled: 'border-input bg-muted opacity-50 cursor-not-allowed',
    };
    
    // Padding classes based on icon presence
    const getPaddingClasses = () => {
      if (leftIcon && (rightIcon || (type === 'password' && showPasswordToggle))) {
        return 'pl-9 pr-9'; // Both icons
      } else if (leftIcon) {
        return 'pl-9 pr-3'; // Left icon only
      } else if (rightIcon || (type === 'password' && showPasswordToggle)) {
        return 'pl-3 pr-9'; // Right icon only
      }
      return 'px-3'; // No icons
    };

    // Handle password visibility toggle
    const handleTogglePassword = () => {
      setShowPassword(prev => !prev);
    };

    return (
      <div className={cn('flex flex-col', fullWidth && 'w-full', className)}>
        <div
          className={cn(
            'relative flex items-center rounded-md border bg-background transition-colors',
            sizeClasses[size],
            stateClasses[state],
            fullWidth && 'w-full'
          )}
        >
          {/* Left icon */}
          {leftIcon && (
            <div className="absolute left-3 flex h-full items-center text-muted-foreground">
              {leftIcon}
            </div>
          )}

          {/* Input element */}
          <input
            ref={ref}
            type={inputType}
            className={cn(
              'h-full w-full bg-transparent outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed',
              getPaddingClasses()
            )}
            disabled={isDisabled}
            aria-invalid={hasError}
            aria-describedby={
              (helperText && !hasError ? helperId : '') +
              (hasError ? (helperText ? ` ${errorId}` : errorId) : '')
            }
            id={uniqueId}
            {...props}
          />

          {/* Right icon or password toggle */}
          {type === 'password' && showPasswordToggle ? (
            <button
              type="button"
              className="absolute right-3 flex h-full items-center text-muted-foreground hover:text-foreground focus:outline-none"
              onClick={handleTogglePassword}
              tabIndex={-1}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              disabled={isDisabled}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Eye className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          ) : (
            rightIcon && (
              <div className="absolute right-3 flex h-full items-center text-muted-foreground">
                {rightIcon}
              </div>
            )
          )}
        </div>

        {/* Helper text or error message */}
        {(helperText || errorMessage) && (
          <div className="mt-1.5 text-xs">
            {hasError && errorMessage ? (
              <p className="text-destructive" id={errorId} role="alert">
                {errorMessage}
              </p>
            ) : (
              helperText && (
                <p
                  className={cn(
                    'text-muted-foreground',
                    hasError && 'text-destructive'
                  )}
                  id={helperId}
                >
                  {helperText}
                </p>
              )
            )}
          </div>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
