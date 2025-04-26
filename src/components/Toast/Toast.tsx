
import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { Check, Info, X, AlertCircle, AlertTriangle } from 'lucide-react';

export type ToastVariant = 'info' | 'success' | 'warning' | 'error';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center' | 'static';

export interface ToastProps {
  /** Toast message content */
  message: string;
  /** Additional message details */
  description?: string;
  /** Toast variant type */
  variant?: ToastVariant;
  /** Toast position on screen */
  position?: ToastPosition;
  /** Auto duration in milliseconds (0 for no auto-close) */
  duration?: number;
  /** Whether the toast is visible */
  open?: boolean;
  /** Callback when toast closes */
  onClose?: () => void;
  /** Override the default icon */
  icon?: React.ReactNode;
  /** Additional actions (buttons, etc.) */
  action?: React.ReactNode;
  /** Additional class name */
  className?: string;
}

/**
 * Toast component for displaying brief feedback messages
 */
const Toast = ({
  message,
  description,
  variant = 'info',
  position = 'bottom-right',
  duration = 5000,
  open = true,
  onClose,
  icon,
  action,
  className,
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(open);
  const [isLeaving, setIsLeaving] = useState(false);
  
  // Auto-dismiss timer
  useEffect(() => {
    setIsVisible(open);
    
    if (!open || duration === 0) return;
    
    const timer = setTimeout(() => {
      handleClose();
    }, duration);
    
    return () => clearTimeout(timer);
  }, [open, duration]);
  
  // Close animation handling
  const handleClose = () => {
    setIsLeaving(true);
    const animationDuration = 300; // match the CSS animation duration
    
    setTimeout(() => {
      setIsVisible(false);
      setIsLeaving(false);
      if (onClose) onClose();
    }, animationDuration);
  };
  
  // Don't render if not visible
  if (!isVisible) return null;
  
  // Variant-specific styles
  const variantStyles = {
    info: 'bg-info/10 border-info text-foreground',
    success: 'bg-success/10 border-success text-foreground',
    warning: 'bg-warning/10 border-warning text-foreground',
    error: 'bg-destructive/10 border-destructive text-foreground',
  };
  
  // Default icons for each variant
  const variantIcons = {
    info: <Info className="h-4 w-4 text-info" />,
    success: <Check className="h-4 w-4 text-success" />,
    warning: <AlertTriangle className="h-4 w-4 text-warning" />,
    error: <AlertCircle className="h-4 w-4 text-destructive" />,
  };
  
  // Position styles
  const positionStyles = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
    'static': 'relative',
  };
  
  // Animation styles based on position
  const getAnimationStyle = () => {
    if (position === 'static') {
      return '';
    }
    if (position.startsWith('top')) {
      return isLeaving ? 'animate-fade-out' : 'animate-slide-down';
    }
    return isLeaving ? 'animate-fade-out' : 'animate-slide-up';
  };

  return (
    <div
      role="alert"
      aria-live={variant === 'error' ? 'assertive' : 'polite'}
      className={cn(
        'fixed z-50 flex w-full max-w-sm shadow-md rounded-lg border-l-4 overflow-hidden',
        position !== 'static' ? positionStyles[position] : 'relative',
        variantStyles[variant],
        getAnimationStyle(),
        className
      )}
    >
      <div className="flex w-full items-center gap-3 p-3">
        {/* Icon */}
        <div className="flex-shrink-0">
          {icon || variantIcons[variant]}
        </div>
        
        {/* Content */}
        <div className="flex-1 flex flex-col">
          <div className="font-medium text-sm">{message}</div>
          {description && (
            <div className="text-xs text-muted-foreground">{description}</div>
          )}
        </div>
        
        {/* Action (if provided) */}
        {action && (
          <div className="flex-shrink-0 pr-1">
            {action}
          </div>
        )}
        
        {/* Close button */}
        <button
          type="button"
          className="flex-shrink-0 rounded-md p-1 hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring"
          onClick={handleClose}
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
