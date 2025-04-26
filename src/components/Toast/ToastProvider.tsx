
import React, { createContext, useContext, useState, useCallback } from 'react';
import Toast, { ToastProps } from './Toast';

interface ToastContextProps {
  showToast: (toast: Omit<ToastProps, 'open' | 'onClose'>) => string;
  hideToast: (id: string) => void;
  hideAllToasts: () => void;
}

interface ToastInstanceProps extends ToastProps {
  id: string;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastInstanceProps[]>([]);

  // Show a new toast and return its ID
  const showToast = useCallback((toast: Omit<ToastProps, 'open' | 'onClose'>) => {
    const id = Math.random().toString(36).substring(2, 11);
    setToasts(prev => [...prev, { ...toast, id, open: true }]);
    return id;
  }, []);

  // Hide a specific toast
  const hideToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  // Hide all toasts
  const hideAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, hideToast, hideAllToasts }}>
      {children}
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => hideToast(toast.id)}
        />
      ))}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
