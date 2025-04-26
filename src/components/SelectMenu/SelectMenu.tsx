
import React, { forwardRef, useState } from 'react';
import { cn } from '../../lib/utils';
import { Check, ChevronDown, X } from 'lucide-react';

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectSize = 'sm' | 'md' | 'lg';
export type SelectState = 'default' | 'hover' | 'focus' | 'error' | 'disabled';

export interface SelectMenuProps {
  /** Options for the select */
  options: SelectOption[];
  /** Currently selected value */
  value?: string;
  /** Default value when uncontrolled */
  defaultValue?: string;
  /** Callback when selection changes */
  onChange?: (value: string) => void;
  /** Placeholder when no option is selected */
  placeholder?: string;
  /** Select size variant */
  size?: SelectSize;
  /** Select state */
  state?: SelectState;
  /** Error message to display */
  errorMessage?: string;
  /** Helper text to provide additional context */
  helperText?: string;
  /** Full width of container */
  fullWidth?: boolean;
  /** Whether the field is required */
  required?: boolean;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Allow clearing the selection */
  clearable?: boolean;
  /** ID for the select */
  id?: string;
  /** Additional class name */
  className?: string;
}

/**
 * SelectMenu component for selecting from a list of options
 */
const SelectMenu = forwardRef<HTMLDivElement, SelectMenuProps>(
  (
    {
      options,
      value,
      defaultValue,
      onChange,
      placeholder = 'Select an option',
      size = 'md',
      state = 'default',
      errorMessage,
      helperText,
      fullWidth = false,
      required = false,
      disabled = false,
      clearable = false,
      id,
      className,
    },
    ref
  ) => {
    // If component is controlled (value is provided), use it; otherwise use internal state
    const isControlled = value !== undefined;
    const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    
    // The actual value to display - either controlled or internal state
    const currentValue = isControlled ? value : selectedValue;
    
    const uniqueId = id || `select-menu-${Math.random().toString(36).substring(2, 9)}`;
    const listboxId = `${uniqueId}-listbox`;
    const helperId = `${uniqueId}-helper`;
    const errorId = `${uniqueId}-error`;
    
    // Determine if we're showing an error
    const hasError = state === 'error';
    // Consider component disabled if disabled prop is true or state is 'disabled'
    const isDisabled = disabled || state === 'disabled';
    
    // Selected option details
    const selectedOption = options.find(option => option.value === currentValue);
    
    // Size classes for the select container
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
    
    // Handle option selection
    const handleSelect = (option: SelectOption) => {
      if (isDisabled || option.disabled) return;
      
      if (!isControlled) {
        setSelectedValue(option.value);
      }
      
      if (onChange) {
        onChange(option.value);
      }
      
      setIsOpen(false);
    };
    
    // Handle clear selection
    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (isDisabled) return;
      
      if (!isControlled) {
        setSelectedValue(undefined);
      }
      
      if (onChange) {
        onChange('');
      }
    };
    
    // Toggle dropdown
    const toggleDropdown = () => {
      if (isDisabled) return;
      setIsOpen(!isOpen);
    };
    
    // Close dropdown if clicking outside
    React.useEffect(() => {
      if (!isOpen) return;
      
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        const selectElement = document.getElementById(uniqueId);
        
        if (selectElement && !selectElement.contains(target)) {
          setIsOpen(false);
        }
      };
      
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen, uniqueId]);
    
    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (isDisabled) return;
      
      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          toggleDropdown();
          break;
        case 'Escape':
          setIsOpen(false);
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
          } else {
            // Navigate to next option in list
            const currentIndex = currentValue 
              ? options.findIndex(opt => opt.value === currentValue) 
              : -1;
            const nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
            const nextOption = options[nextIndex];
            
            if (nextOption && !nextOption.disabled) {
              if (!isControlled) {
                setSelectedValue(nextOption.value);
              }
              if (onChange) {
                onChange(nextOption.value);
              }
            }
          }
          break;
        case 'ArrowUp':
          e.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
          } else {
            // Navigate to previous option in list
            const currentIndex = currentValue 
              ? options.findIndex(opt => opt.value === currentValue) 
              : options.length;
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
            const prevOption = options[prevIndex];
            
            if (prevOption && !prevOption.disabled) {
              if (!isControlled) {
                setSelectedValue(prevOption.value);
              }
              if (onChange) {
                onChange(prevOption.value);
              }
            }
          }
          break;
        default:
          break;
      }
    };

    return (
      <div 
        ref={ref}
        className={cn('flex flex-col', fullWidth && 'w-full', className)}
      >
        {/* Select button */}
        <div
          id={uniqueId}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-haspopup="listbox"
          aria-disabled={isDisabled}
          aria-required={required}
          aria-invalid={hasError}
          aria-describedby={
            (helperText && !hasError ? helperId : '') +
            (hasError ? (helperText ? ` ${errorId}` : errorId) : '')
          }
          tabIndex={isDisabled ? -1 : 0}
          className={cn(
            'relative flex items-center justify-between rounded-md border bg-background px-3 transition-colors',
            sizeClasses[size],
            stateClasses[state],
            fullWidth && 'w-full',
            isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
          )}
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown}
        >
          {/* Selected value or placeholder */}
          <span className={cn(
            'truncate',
            !currentValue && 'text-muted-foreground'
          )}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          
          {/* Clear button + dropdown indicator */}
          <div className="flex items-center gap-1">
            {clearable && currentValue && (
              <button
                type="button"
                aria-label="Clear selection"
                className={cn(
                  "rounded-full p-0.5 hover:bg-muted focus:outline-none focus:ring-1 focus:ring-ring",
                  isDisabled && "pointer-events-none"
                )}
                onClick={handleClear}
                tabIndex={-1}
                disabled={isDisabled}
              >
                <X className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
              </button>
            )}
            <ChevronDown
              className={cn(
                "h-4 w-4 text-muted-foreground transition-transform",
                isOpen && "rotate-180"
              )}
              aria-hidden="true"
            />
          </div>
        </div>
        
        {/* Dropdown menu */}
        {isOpen && (
          <div
            id={listboxId}
            role="listbox"
            aria-label="Options"
            className={cn(
              "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-border bg-background shadow-md",
              size === 'sm' && 'text-sm',
            )}
            style={{
              width: document.getElementById(uniqueId)?.offsetWidth ?? 'auto',
              top: `${(document.getElementById(uniqueId)?.offsetHeight ?? 0) + (document.getElementById(uniqueId)?.offsetTop ?? 0) + 4}px`,
              left: document.getElementById(uniqueId)?.offsetLeft ?? 'auto',
            }}
          >
            <div className="p-1">
              {options.map((option) => {
                const isSelected = option.value === currentValue;
                
                return (
                  <div
                    key={option.value}
                    role="option"
                    aria-selected={isSelected}
                    aria-disabled={option.disabled}
                    className={cn(
                      "flex items-center justify-between rounded-sm px-3 py-1.5",
                      option.disabled
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer",
                      isSelected
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted focus:bg-muted",
                    )}
                    onClick={() => handleSelect(option)}
                  >
                    <span className="truncate">{option.label}</span>
                    {isSelected && <Check className="h-4 w-4 ml-2" aria-hidden="true" />}
                  </div>
                );
              })}
              
              {options.length === 0 && (
                <div className="text-center py-2 text-muted-foreground">
                  No options available
                </div>
              )}
            </div>
          </div>
        )}
        
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

SelectMenu.displayName = 'SelectMenu';

export default SelectMenu;
