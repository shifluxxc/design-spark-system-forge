
import React, { useState } from 'react';
import Toast, { ToastProps } from './Toast';
import { ToastProvider, useToast } from './ToastProvider';
import { X } from 'lucide-react';

export default {
  title: 'Design System/Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Toast Component

The Toast component provides brief feedback messages about app processes or actions. Toasts appear temporarily and automatically disappear after a timeout.

## Accessibility Features

- Uses proper ARIA attributes with role="alert"
- Different aria-live values based on importance (assertive for errors)
- Keyboard accessible close button
- Auto-dismisses with reasonable timeouts
- High contrast UI with clear icons

## Usage Guidelines

- Use toasts for non-critical, informational feedback
- Keep messages short and clear
- Position consistently throughout your application
- Provide appropriate variants based on the message type
- Allow users to dismiss manually
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'The style variant of the toast',
    },
    position: {
      control: { type: 'select' },
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'],
      description: 'Position of the toast on the screen',
    },
    duration: {
      control: { type: 'number', min: 0, step: 1000 },
      description: 'Time in ms before auto-dismissing the toast (0 for no auto-dismiss)',
    },
    icon: {
      control: false,
      description: 'Custom icon to override the default for the variant',
    },
    action: {
      control: false,
      description: 'Action button or element to include in the toast',
    },
  },
};

export const Default = () => (
  <Toast 
    message="This is a default toast message" 
  />
);

Default.parameters = {
  docs: {
    description: {
      story: 'The default Toast with an info variant.',
    },
  },
};

export const Variants = () => (
  <div className="space-y-4 p-4">
    <Toast 
      variant="info" 
      message="Information message"
      description="Additional context about this message"
      position="static"
    />
    <Toast 
      variant="success" 
      message="Success message" 
      description="Operation completed successfully"
      position="static"
    />
    <Toast 
      variant="warning" 
      message="Warning message"
      description="Proceed with caution"
      position="static"
    />
    <Toast 
      variant="error" 
      message="Error message"
      description="An error occurred while processing your request"
      position="static"
    />
  </div>
);

Variants.parameters = {
  docs: {
    description: {
      story: 'Toast comes in four variants: info, success, warning, and error.',
    },
  },
};

export const WithDescription = () => (
  <div className="space-y-4 p-4">
    <Toast 
      message="Profile updated" 
      description="Your profile information has been saved successfully."
      variant="success"
      position="static"
    />
  </div>
);

WithDescription.parameters = {
  docs: {
    description: {
      story: 'Toasts can include additional descriptive text.',
    },
  },
};

export const WithCustomAction = () => (
  <div className="space-y-4 p-4">
    <Toast 
      message="Changes saved" 
      variant="success"
      position="static"
      action={
        <button className="text-sm font-medium underline">
          Undo
        </button>
      }
    />
  </div>
);

WithCustomAction.parameters = {
  docs: {
    description: {
      story: 'Toasts can include custom action elements like buttons.',
    },
  },
};

export const CustomDuration = () => {
  const [showToast, setShowToast] = useState(true);
  
  const handleReset = () => {
    setShowToast(false);
    setTimeout(() => setShowToast(true), 300);
  };
  
  return (
    <div className="p-4">
      <div className="bg-muted/30 p-3 rounded-md mb-4">
        <p className="text-sm">This toast will auto-dismiss after 10 seconds</p>
        <button 
          className="mt-2 px-3 py-1.5 bg-primary text-primary-foreground text-sm rounded"
          onClick={handleReset}
        >
          Reset Toast
        </button>
      </div>
      
      {showToast && (
        <Toast 
          message="Long duration toast" 
          description="This toast will stay visible for 10 seconds"
          duration={10000}
          position="static"
        />
      )}
    </div>
  );
};

CustomDuration.parameters = {
  docs: {
    description: {
      story: 'Toasts can have custom durations before auto-dismissing.',
    },
  },
};

// ToastProvider Demo
const ToastDemo = () => {
  const { showToast } = useToast();
  
  const showInfoToast = () => {
    showToast({
      message: 'Information message',
      variant: 'info',
    });
  };
  
  const showSuccessToast = () => {
    showToast({
      message: 'Operation completed',
      description: 'Your changes have been saved successfully',
      variant: 'success',
    });
  };
  
  const showWarningToast = () => {
    showToast({
      message: 'Warning message',
      description: 'This action cannot be undone',
      variant: 'warning',
      duration: 8000,
    });
  };
  
  const showErrorToast = () => {
    showToast({
      message: 'An error occurred',
      description: 'Could not connect to the server',
      variant: 'error',
      action: <button className="text-xs font-medium underline">Retry</button>,
    });
  };
  
  return (
    <div className="space-y-3 p-4">
      <p className="text-sm mb-4">Click the buttons to trigger different toast types:</p>
      
      <div className="flex flex-wrap gap-2">
        <button 
          className="px-3 py-1.5 bg-info text-info-foreground text-sm rounded"
          onClick={showInfoToast}
        >
          Show Info Toast
        </button>
        
        <button 
          className="px-3 py-1.5 bg-success text-success-foreground text-sm rounded"
          onClick={showSuccessToast}
        >
          Show Success Toast
        </button>
        
        <button 
          className="px-3 py-1.5 bg-warning text-warning-foreground text-sm rounded"
          onClick={showWarningToast}
        >
          Show Warning Toast
        </button>
        
        <button 
          className="px-3 py-1.5 bg-destructive text-destructive-foreground text-sm rounded"
          onClick={showErrorToast}
        >
          Show Error Toast
        </button>
      </div>
      
      <p className="text-xs text-muted-foreground mt-4">
        Toasts will appear in the bottom right corner by default
      </p>
    </div>
  );
};

export const ToastProviderExample = () => (
  <ToastProvider>
    <ToastDemo />
  </ToastProvider>
);

ToastProviderExample.parameters = {
  docs: {
    description: {
      story: 'Example using the ToastProvider to manage multiple toasts.',
    },
  },
};

export const Positioning = () => (
  <div className="p-4 space-y-4">
    <p className="text-sm mb-4">Toasts can be positioned in different areas of the screen:</p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-border p-4 rounded-md relative min-h-[300px]">
      <div className="absolute top-4 left-4">
        <Toast 
          message="Top Left"
          variant="info"
          position="static"
          className="relative max-w-[200px]"
        />
      </div>
      
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <Toast 
          message="Top Center"
          variant="success"
          position="static"
          className="relative max-w-[200px]"
        />
      </div>
      
      <div className="absolute top-4 right-4">
        <Toast 
          message="Top Right"
          variant="warning"
          position="static"
          className="relative max-w-[200px]"
        />
      </div>
      
      <div className="absolute bottom-4 left-4">
        <Toast 
          message="Bottom Left"
          variant="error"
          position="static"
          className="relative max-w-[200px]"
        />
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <Toast 
          message="Bottom Center"
          variant="info"
          position="static"
          className="relative max-w-[200px]"
        />
      </div>
      
      <div className="absolute bottom-4 right-4">
        <Toast 
          message="Bottom Right (default)"
          variant="success"
          position="static"
          className="relative max-w-[200px]"
        />
      </div>
    </div>
  </div>
);

Positioning.parameters = {
  docs: {
    description: {
      story: 'Toasts can be positioned in different areas of the screen.',
    },
  },
};

export const DarkTheme = () => (
  <div className="dark bg-background p-6 space-y-4 rounded-lg">
    <h3 className="text-sm font-medium mb-4">Toast Variants in Dark Mode</h3>
    
    <Toast 
      variant="info" 
      message="Information message"
      position="static"
    />
    
    <Toast 
      variant="success" 
      message="Success message" 
      position="static"
    />
    
    <Toast 
      variant="warning" 
      message="Warning message"
      position="static"
    />
    
    <Toast 
      variant="error" 
      message="Error message"
      position="static"
    />
  </div>
);

DarkTheme.parameters = {
  docs: {
    description: {
      story: 'Toast components adapt to dark mode automatically.',
    },
  },
  backgrounds: { default: 'dark' },
};

export const ToastAnatomy = () => (
  <div className="space-y-8 p-4">
    <div className="border border-border p-6 rounded-lg relative">
      <div className="absolute -top-3 left-4 bg-background px-2 text-xs text-muted-foreground">Toast Anatomy</div>
      
      <div className="flex w-full max-w-sm shadow-md rounded-lg border-l-4 border-success bg-success/10 overflow-hidden">
        <div className="flex w-full items-center gap-3 p-3 relative">
          <div className="absolute -top-1.5 left-1.5 text-[10px] text-primary">Variant Icon</div>
          <div className="flex-shrink-0">
            <Check className="h-4 w-4 text-success" />
          </div>
          
          <div className="flex-1 flex flex-col relative">
            <div className="absolute -top-1.5 left-2 text-[10px] text-primary">Main Message</div>
            <div className="absolute -bottom-1.5 left-2 text-[10px] text-primary">Description</div>
            <div className="font-medium text-sm">File uploaded successfully</div>
            <div className="text-xs text-muted-foreground">Your document has been saved to your account</div>
          </div>
          
          <div className="flex-shrink-0 pr-1 relative">
            <div className="absolute -top-1.5 right-2 text-[10px] text-primary">Action</div>
            <button className="text-xs font-medium underline">View</button>
          </div>
          
          <button className="flex-shrink-0 rounded-md p-1 hover:bg-secondary relative">
            <div className="absolute -top-1.5 right-0 text-[10px] text-primary">Close</div>
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="mt-10 grid grid-cols-2 gap-4 text-sm border-t pt-4">
        <div>
          <p className="font-medium mb-2">Structure:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li>Border accent (left side)</li>
            <li>Variant icon</li>
            <li>Message & description</li>
            <li>Optional action button</li>
            <li>Close button</li>
            <li>Shadow for elevation</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Accessibility Features:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li>role="alert" for screen readers</li>
            <li>aria-live="polite" or "assertive"</li>
            <li>Auto-dismiss timer (configurable)</li>
            <li>Manual dismissal via close button</li>
            <li>Visible focus states</li>
            <li>Color contrast for readability</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4 text-sm border-t pt-4">
        <p className="font-medium mb-2">Animation States:</p>
        <div className="grid grid-cols-3 gap-4 mt-2">
          <div className="text-center">
            <div className="h-16 border border-dashed border-border rounded flex items-center justify-center text-xs text-muted-foreground">
              Enter Animation (slide up/down)
            </div>
            <p className="text-xs mt-1">Initial appearance</p>
          </div>
          <div className="text-center">
            <div className="h-16 border border-dashed border-border rounded flex items-center justify-center text-xs text-muted-foreground">
              Visible State
            </div>
            <p className="text-xs mt-1">Duration: configurable</p>
          </div>
          <div className="text-center">
            <div className="h-16 border border-dashed border-border rounded flex items-center justify-center text-xs text-muted-foreground">
              Exit Animation (fade out)
            </div>
            <p className="text-xs mt-1">On close/timeout</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ToastAnatomy.parameters = {
  docs: {
    description: {
      story: 'Visual breakdown of the Toast component structure and states.',
    },
  },
};

export const DosAndDonts = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-success">Do</h3>
      <div className="border border-border rounded-lg p-4 space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Keep messages concise</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <Toast 
              message="Changes saved successfully" 
              variant="success"
              position="static"
            />
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Use appropriate variants</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <Toast 
              message="Warning: Your session will expire soon" 
              description="Please save your work"
              variant="warning"
              position="static"
            />
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Include actions when helpful</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <Toast 
              message="File deleted" 
              variant="info"
              position="static"
              action={<button className="text-sm font-medium underline">Undo</button>}
            />
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Be specific about errors</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <Toast 
              message="Failed to save document" 
              description="Check your connection and try again"
              variant="error"
              position="static"
            />
          </div>
        </div>
      </div>
    </div>
    
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-destructive">Don't</h3>
      <div className="border border-border rounded-lg p-4 space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Use lengthy messages</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <div className="border border-destructive/40 rounded p-2">
              <Toast 
                message="Your document has been successfully saved to the cloud storage. You can now access it from any device by logging into your account and visiting the documents section." 
                variant="success"
                position="static"
              />
              <p className="text-xs text-muted-foreground mt-1">Too verbose. Keep it short.</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Use inappropriate variants</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <div className="border border-destructive/40 rounded p-2">
              <Toast 
                message="Something happened" 
                variant="success"
                position="static"
              />
              <p className="text-xs text-muted-foreground mt-1">Vague message with wrong variant</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Stack too many toasts</h4>
          <div className="bg-muted/30 p-3 rounded-lg relative h-48">
            <div className="border border-destructive/40 rounded p-2 h-full">
              <div className="absolute bottom-16 right-6">
                <Toast 
                  message="Message 1" 
                  variant="info"
                  className="mb-2"
                  position="static"
                />
                <Toast 
                  message="Message 2" 
                  variant="success"
                  className="mb-2"
                  position="static"
                />
                <Toast 
                  message="Message 3" 
                  variant="warning"
                  className="mb-2"
                  position="static"
                />
                <Toast 
                  message="Message 4" 
                  variant="error"
                  position="static"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Too many toasts at once can overwhelm</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Use for critical messages</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <div className="border border-destructive/40 rounded p-2">
              <Toast 
                message="Account deleted permanently" 
                variant="error"
                position="static"
              />
              <p className="text-xs text-muted-foreground mt-1">Critical actions need confirmation dialogs, not toasts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

DosAndDonts.parameters = {
  docs: {
    description: {
      story: 'Recommended practices and patterns to avoid when using Toast components.',
    },
  },
};
