
import React, { useRef, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { X } from 'lucide-react';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ModalDialogProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback when modal closes */
  onClose: () => void;
  /** Modal title */
  title: string;
  /** Modal description (optional) */
  description?: string;
  /** Modal content */
  children: React.ReactNode;
  /** Footer with actions (typically buttons) */
  footer?: React.ReactNode;
  /** Size of the modal */
  size?: ModalSize;
  /** Whether clicking the overlay closes the modal */
  closeOnOverlayClick?: boolean;
  /** Whether the modal can be closed by pressing ESC */
  closeOnEsc?: boolean;
  /** Whether to show the close button */
  showCloseButton?: boolean;
  /** Additional class name for the modal */
  className?: string;
  /** ID for the modal dialog */
  id?: string;
}

/**
 * ModalDialog component for displaying content that requires attention or action
 */
const ModalDialog = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEsc = true,
  showCloseButton = true,
  className,
  id,
}: ModalDialogProps) => {
  // Ref for the dialog element to manage focus
  const dialogRef = useRef<HTMLDivElement>(null);
  // Ref to store the element that had focus before the modal opened
  const previousFocusRef = useRef<HTMLElement | null>(null);
  
  // Handle ESC key press
  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, closeOnEsc]);
  
  // Handle scroll lock and focus management
  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element
      previousFocusRef.current = document.activeElement as HTMLElement;
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Focus the dialog or the first focusable element inside
      if (dialogRef.current) {
        dialogRef.current.focus();
      }
      
      return () => {
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Restore focus
        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [isOpen]);
  
  // Focus trap: Ensure focus stays within the modal
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      
      if (!dialogRef.current) return;
      
      const focusableElements = dialogRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
      
      if (e.shiftKey) {
        // If shift + tab and on first element, move to last element
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // If tab and on last element, move to first element
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);
  
  // Don't render anything if not open
  if (!isOpen) return null;
  
  // Size classes for the modal
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-[95vw] max-h-[95vh]',
  };
  
  // Handle overlay click
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  };
  
  const modalId = id || `modal-${Math.random().toString(36).substring(2, 9)}`;
  const descriptionId = description ? `${modalId}-description` : undefined;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center overflow-auto"
      onClick={handleOverlayClick}
      role="presentation"
    >
      {/* The actual modal dialog */}
      <div
        ref={dialogRef}
        className={cn(
          'bg-background border border-border rounded-lg shadow-lg w-full animate-scale-in',
          sizeClasses[size],
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${modalId}-title`}
        aria-describedby={descriptionId}
        tabIndex={-1}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div>
            <h2 id={`${modalId}-title`} className="text-lg font-semibold">
              {title}
            </h2>
            {description && (
              <p id={descriptionId} className="text-sm text-muted-foreground mt-0.5">
                {description}
              </p>
            )}
          </div>
          
          {/* Close button */}
          {showCloseButton && (
            <button
              type="button"
              className="rounded-md p-1 hover:bg-muted focus:outline-none focus:ring-1 focus:ring-ring"
              onClick={onClose}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        
        {/* Content */}
        <div className="p-4 overflow-auto max-h-[70vh]">
          {children}
        </div>
        
        {/* Footer */}
        {footer && (
          <div className="p-4 border-t border-border flex items-center justify-end gap-2">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalDialog;
