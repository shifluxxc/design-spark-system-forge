import React, { useState } from 'react';
import ModalDialog from './ModalDialog';
import { X } from 'lucide-react';

export default {
  title: 'Design System/Feedback/ModalDialog',
  component: ModalDialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# ModalDialog Component

The ModalDialog component provides a way to present content in a layer above the main page content, typically with a backdrop that blocks interaction with the page until the dialog is closed.

## Accessibility Features

- Proper ARIA attributes (dialog role, aria-modal, aria-labelledby, aria-describedby)
- Focus trap keeps focus inside the modal when open
- Returns focus to the trigger element when closed
- Keyboard navigation with Tab and Shift+Tab
- Close via ESC key
- Body scroll lock when opened
- Focus management

## Usage Guidelines

- Use for content that requires user attention or interaction
- Keep content concise and focused on a single task or topic
- Provide clear actions in the footer
- Use appropriate sizing for the content
- Ensure the title clearly describes the purpose of the modal
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Controls the size of the modal',
    },
    closeOnOverlayClick: {
      control: { type: 'boolean' },
      description: 'Whether clicking the overlay closes the modal',
    },
    closeOnEsc: {
      control: { type: 'boolean' },
      description: 'Whether pressing ESC closes the modal',
    },
    showCloseButton: {
      control: { type: 'boolean' },
      description: 'Whether to show the close button in the header',
    },
  },
};

export const Basic = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button 
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      
      <ModalDialog 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Example Modal"
      >
        <p>This is a basic modal dialog with just content and a close button.</p>
      </ModalDialog>
    </>
  );
};

Basic.parameters = {
  docs: {
    description: {
      story: 'A basic modal with title and content.',
    },
  },
};

export const WithDescription = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button 
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      
      <ModalDialog 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Modal with Description"
        description="This additional text provides more context about the modal's purpose."
      >
        <p>Modal content goes here. The description above helps users understand what this modal is for.</p>
      </ModalDialog>
    </>
  );
};

WithDescription.parameters = {
  docs: {
    description: {
      story: 'A modal with an additional description below the title.',
    },
  },
};

export const WithFooter = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button 
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      
      <ModalDialog 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Confirm Action"
        footer={
          <>
            <button 
              className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
              onClick={() => {
                alert('Action confirmed!');
                setIsOpen(false);
              }}
            >
              Confirm
            </button>
          </>
        }
      >
        <p>Are you sure you want to perform this action? This cannot be undone.</p>
      </ModalDialog>
    </>
  );
};

WithFooter.parameters = {
  docs: {
    description: {
      story: 'A modal with action buttons in the footer.',
    },
  },
};

export const Sizes = () => {
  const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md');
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div className="space-y-4">
        <p className="text-sm">Select a size to preview:</p>
        <div className="flex flex-wrap gap-2">
          <button 
            className={`px-3 py-1.5 rounded-md ${size === 'sm' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
            onClick={() => setSize('sm')}
          >
            Small
          </button>
          <button 
            className={`px-3 py-1.5 rounded-md ${size === 'md' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
            onClick={() => setSize('md')}
          >
            Medium
          </button>
          <button 
            className={`px-3 py-1.5 rounded-md ${size === 'lg' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
            onClick={() => setSize('lg')}
          >
            Large
          </button>
          <button 
            className={`px-3 py-1.5 rounded-md ${size === 'xl' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
            onClick={() => setSize('xl')}
          >
            Extra Large
          </button>
          <button 
            className={`px-3 py-1.5 rounded-md ${size === 'full' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
            onClick={() => setSize('full')}
          >
            Full
          </button>
        </div>
        
        <button 
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md mt-4"
          onClick={() => setIsOpen(true)}
        >
          Open {size.toUpperCase()} Modal
        </button>
      </div>
      
      <ModalDialog 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title={`${size.toUpperCase()} Size Modal`}
        size={size}
        footer={
          <button 
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        }
      >
        <div className="space-y-4">
          <p>This modal is using the <strong>{size}</strong> size variant.</p>
          <p>Different sizes are suitable for different types of content:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>sm</strong>: Simple messages or brief forms</li>
            <li><strong>md</strong>: Standard forms and content (default)</li>
            <li><strong>lg</strong>: More complex forms or content</li>
            <li><strong>xl</strong>: Rich content or multiple sections</li>
            <li><strong>full</strong>: Complex workflows or detailed content</li>
          </ul>
        </div>
      </ModalDialog>
    </>
  );
};

Sizes.parameters = {
  docs: {
    description: {
      story: 'Modals come in different sizes to accommodate various amounts of content.',
    },
  },
};

export const FormExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button 
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        onClick={() => setIsOpen(true)}
      >
        Open Form Modal
      </button>
      
      <ModalDialog 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Create Account"
        description="Fill out the information below to create your account."
        size="lg"
        footer={
          <>
            <button 
              className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
              onClick={() => {
                alert('Form submitted!');
                setIsOpen(false);
              }}
            >
              Create Account
            </button>
          </>
        }
      >
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="first-name">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="w-full border border-input rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="last-name">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                className="w-full border border-input rounded-md px-3 py-2"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-input rounded-md px-3 py-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-input rounded-md px-3 py-2"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Password must be at least 8 characters long.
            </p>
          </div>
          
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="terms" 
              className="h-4 w-4 rounded border-input"
            />
            <label className="text-sm ml-2" htmlFor="terms">
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>
        </form>
      </ModalDialog>
    </>
  );
};

FormExample.parameters = {
  docs: {
    description: {
      story: 'Modals are commonly used for forms that need focused attention.',
    },
  },
};

export const ScrollingContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button 
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        onClick={() => setIsOpen(true)}
      >
        Modal with Long Content
      </button>
      
      <ModalDialog 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Terms and Conditions"
        size="md"
        footer={
          <button 
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
            onClick={() => setIsOpen(false)}
          >
            I Understand
          </button>
        }
      >
        <div className="space-y-4">
          {Array(10).fill(null).map((_, i) => (
            <div key={i}>
              <h3 className="font-medium mb-2">Section {i + 1}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam 
                auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, 
                eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget 
                ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl 
                nisl eget nisl.
              </p>
              <p className="mt-2">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          ))}
        </div>
      </ModalDialog>
    </>
  );
};

ScrollingContent.parameters = {
  docs: {
    description: {
      story: 'Modals automatically handle scrolling when content exceeds the available height.',
    },
  },
};

export const NestedModals = () => {
  const [isPrimaryOpen, setPrimaryOpen] = useState(false);
  const [isSecondaryOpen, setSecondaryOpen] = useState(false);
  
  return (
    <>
      <button 
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        onClick={() => setPrimaryOpen(true)}
      >
        Open Primary Modal
      </button>
      
      <ModalDialog 
        isOpen={isPrimaryOpen} 
        onClose={() => setPrimaryOpen(false)}
        title="Primary Modal"
      >
        <div className="space-y-4">
          <p>This is the primary modal dialog.</p>
          <button 
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md"
            onClick={() => setSecondaryOpen(true)}
          >
            Open Secondary Modal
          </button>
        </div>
      </ModalDialog>
      
      <ModalDialog 
        isOpen={isSecondaryOpen} 
        onClose={() => setSecondaryOpen(false)}
        title="Secondary Modal"
        size="sm"
      >
        <div className="space-y-4">
          <p>This is a secondary modal that appears above the primary modal.</p>
          <div className="flex justify-end">
            <button 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
              onClick={() => setSecondaryOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </ModalDialog>
    </>
  );
};

NestedModals.parameters = {
  docs: {
    description: {
      story: 'Modals can be layered on top of each other for complex workflows.',
    },
  },
};

export const DarkTheme = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="dark bg-background p-6 rounded-lg">
      <button 
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        onClick={() => setIsOpen(true)}
      >
        Open Modal (Dark Mode)
      </button>
      
      <ModalDialog 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Dark Mode Modal"
        description="Modals automatically adapt to dark mode theme"
        footer={
          <>
            <button 
              className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Confirm
            </button>
          </>
        }
      >
        <p>This modal has automatically adapted to the dark color scheme.</p>
      </ModalDialog>
    </div>
  );
};

DarkTheme.parameters = {
  docs: {
    description: {
      story: 'ModalDialog component automatically adapts to dark mode.',
    },
  },
  backgrounds: { default: 'dark' },
};

export const ModalAnatomy = () => (
  <div className="space-y-8 p-4">
    <div className="border border-border p-6 rounded-lg relative">
      <div className="absolute -top-3 left-4 bg-background px-2 text-xs text-muted-foreground">ModalDialog Anatomy</div>
      
      <div className="bg-background border border-border rounded-lg shadow-lg w-full max-w-md relative">
        <div className="relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] text-primary">Modal Container</div>
          
          <div className="flex items-center justify-between p-4 border-b border-border relative">
            <div className="absolute -top-3 left-4 text-[10px] text-primary">Header</div>
            <div>
              <h2 className="text-lg font-semibold">Modal Title</h2>
              <p className="text-sm text-muted-foreground mt-0.5">Optional description text</p>
            </div>
            
            <button className="rounded-md p-1 hover:bg-muted relative">
              <div className="absolute -top-3 right-0 text-[10px] text-primary">Close Button</div>
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-4 relative">
            <div className="absolute -top-3 left-4 text-[10px] text-primary">Content Area</div>
            <p>Modal content goes here. This area can scroll if the content is long.</p>
          </div>
          
          <div className="p-4 border-t border-border flex items-center justify-end gap-2 relative">
            <div className="absolute -top-3 right-4 text-[10px] text-primary">Footer (Actions)</div>
            <button className="px-3 py-1.5 bg-muted rounded-md">Cancel</button>
            <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded-md">Confirm</button>
          </div>
        </div>
      </div>
      
      <div className="mt-10 grid grid-cols-2 gap-4 text-sm border-t pt-4">
        <div>
          <p className="font-medium mb-2">Key Features:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li>Backdrop overlay with click-to-dismiss</li>
            <li>Animated entrance/exit</li>
            <li>Responsive sizing options</li>
            <li>Content scrolling (for long content)</li>
            <li>Distinct header, content, footer areas</li>
            <li>Focus trap for keyboard navigation</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Accessibility Features:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li>role="dialog" and aria-modal="true"</li>
            <li>aria-labelledby points to title</li>
            <li>aria-describedby for description</li>
            <li>Focus management and focus trap</li>
            <li>ESC key to dismiss</li>
            <li>Proper tab sequence</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4 text-sm border-t pt-4">
        <p className="font-medium mb-2">Size Variants:</p>
        <div className="grid grid-cols-5 gap-2 mt-2">
          <div className="text-center">
            <div className="h-20 w-20 border border-dashed border-border rounded mx-auto mb-2"></div>
            <p className="text-xs">sm</p>
          </div>
          <div className="text-center">
            <div className="h-20 w-28 border border-dashed border-border rounded mx-auto mb-2"></div>
            <p className="text-xs">md</p>
          </div>
          <div className="text-center">
            <div className="h-20 w-36 border border-dashed border-border rounded mx-auto mb-2"></div>
            <p className="text-xs">lg</p>
          </div>
          <div className="text-center">
            <div className="h-20 w-44 border border-dashed border-border rounded mx-auto mb-2"></div>
            <p className="text-xs">xl</p>
          </div>
          <div className="text-center">
            <div className="h-20 w-full border border-dashed border-border rounded mx-auto mb-2"></div>
            <p className="text-xs">full</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ModalAnatomy.parameters = {
  docs: {
    description: {
      story: 'Visual breakdown of the ModalDialog component structure and features.',
    },
  },
};

export const DosAndDonts = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-success">Do</h3>
      <div className="border border-border rounded-lg p-4 space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Use clear, action-oriented titles</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <div className="border border-border rounded-lg p-3">
              <div className="flex items-center justify-between border-b pb-2 mb-2">
                <h3 className="font-medium">Delete Account</h3>
                <button className="rounded-full p-0.5 bg-muted">✕</button>
              </div>
              <p className="text-sm">Are you sure you want to delete your account?</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Provide clear actions in the footer</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <div className="border border-border rounded-lg p-3">
              <div className="pb-3 mb-3 border-b">Modal content...</div>
              <div className="flex justify-end gap-2">
                <button className="px-3 py-1 bg-muted rounded">Cancel</button>
                <button className="px-3 py-1 bg-primary text-primary-foreground rounded">Save Changes</button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Choose appropriate size for content</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <div className="border border-border rounded-lg p-3 w-3/4 mx-auto">
              <p className="text-xs text-center text-muted-foreground">Small modal for simple message</p>
            </div>
            <div className="border border-border rounded-lg p-3 w-full mt-3">
              <p className="text-xs text-center text-muted-foreground">Larger modal for forms or complex content</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Focus on a single task or topic</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <div className="border border-border rounded-lg p-3">
              <div className="border-b pb-2 mb-2">
                <h3 className="font-medium">Edit Profile Picture</h3>
              </div>
              <div className="text-center py-3">
                <div className="h-16 w-16 rounded-full bg-muted mx-auto"></div>
                <p className="text-sm mt-2">Upload a new photo or select from gallery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-destructive">Don't</h3>
      <div className="border border-border rounded-lg p-4 space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Use vague or generic titles</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <div className="border border-destructive/40 rounded p-2">
              <div className="flex items-center justify-between border-b pb-2 mb-2">
                <h3 className="font-medium">Alert</h3>
                <button className="rounded-full p-0.5 bg-muted">✕</button>
              </div>
              <p className="text-sm">Are you sure?</p>
              <p className="text-xs text-muted-foreground mt-2">Use specific titles like "Delete Account"</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Overwhelm with too many actions</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <div className="border border-destructive/40 rounded p-2">
              <div className="pb-3 mb-3">Modal content...</div>
              <div className="flex flex-wrap gap-2">
                <button className="px-2 py-1 bg-muted text-xs rounded">Cancel</button>
                <button className="px-2 py-1 bg-muted text-xs rounded">Save Draft</button>
                <button className="px-2 py-1 bg-muted text-xs rounded">Preview</button>
                <button className="px-2 py-1 bg-primary text-xs text-primary-foreground rounded">Save & Continue</button>
                <button className="px-2 py-1 bg-primary text-xs text-primary-foreground rounded">Publish</button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Too many options create confusion</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Nest modals deeply</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <div className="border border-destructive/40 rounded p-2">
              <div className="border border-border p-2 rounded">
                <div className="border border-border p-2 rounded">
                  <div className="border border-border p-2 rounded">
                    <p className="text-xs text-center">Deeply nested modal</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">More than one level of nesting becomes confusing</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Include unrelated content</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <div className="border border-destructive/40 rounded p-2">
              <div className="border-b pb-2 mb-2">
                <h3 className="font-medium">Edit Profile</h3>
              </div>
              <div className="space-y-2">
                <div className="p-2 border border-border rounded">Profile Information</div>
                <div className="p-2 border border-border rounded">Payment Methods</div>
                <div className="p-2 border border-border rounded">Subscription Plans</div>
                <div className="p-2 border border-border rounded">Notification Settings</div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Too many unrelated tasks in one modal</p>
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
      story: 'Recommended practices and patterns to avoid when using ModalDialog components.',
    },
  },
};
