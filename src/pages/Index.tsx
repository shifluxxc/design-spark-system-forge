import React from 'react';
import { ToastProvider, useToast } from '../components/Toast/ToastProvider';
import Heading, { HeadingThemeProvider } from '../components/Typography/Heading';
import Paragraph from '../components/Typography/Paragraph';
import TextInput from '../components/TextInput/TextInput';
import SelectMenu from '../components/SelectMenu/SelectMenu';
import ModalDialog from '../components/ModalDialog/ModalDialog';
import Toast from '../components/Toast/Toast';
import { Search, Info, Check, X, AlertTriangle, AlertCircle } from 'lucide-react';

const DesignSystemShowcase = () => {
  const { showToast } = useToast();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
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
    });
  };
  
  const showErrorToast = () => {
    showToast({
      message: 'An error occurred',
      description: 'Could not connect to the server',
      variant: 'error',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <Heading level={1} className="text-center">Design System</Heading>
          <Paragraph className="text-center mt-2 text-primary-foreground/80">
            A showcase of our design system components
          </Paragraph>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Typography Section */}
        <section className="mb-16">
          <Heading level={2} className="mb-6 pb-2 border-b">Typography</Heading>
          
          <HeadingThemeProvider>
            <div className="grid gap-6 mb-8">
              <div>
                <Heading level={1} toggleTheme>Heading 1</Heading>
                <Paragraph variant="body-sm" theme="muted" className="mt-1">2rem / 32px with font-weight: 700</Paragraph>
              </div>
              
              <div>
                <Heading level={2} toggleTheme>Heading 2</Heading>
                <Paragraph variant="body-sm" theme="muted" className="mt-1">1.75rem / 28px with font-weight: 700</Paragraph>
              </div>
              
              <div>
                <Heading level={3} toggleTheme>Heading 3</Heading>
                <Paragraph variant="body-sm" theme="muted" className="mt-1">1.5rem / 24px with font-weight: 600</Paragraph>
              </div>
              
              <div>
                <Heading level={4} toggleTheme>Heading 4</Heading>
                <Paragraph variant="body-sm" theme="muted" className="mt-1">1.25rem / 20px with font-weight: 600</Paragraph>
              </div>
              
              <div>
                <Heading level={5} toggleTheme>Heading 5</Heading>
                <Paragraph variant="body-sm" theme="muted" className="mt-1">1.125rem / 18px with font-weight: 600</Paragraph>
              </div>
              
              <div>
                <Heading level={6} toggleTheme>Heading 6</Heading>
                <Paragraph variant="body-sm" theme="muted" className="mt-1">1rem / 16px with font-weight: 600</Paragraph>
              </div>
            </div>
          </HeadingThemeProvider>
          
          <div className="grid gap-6">
            <div>
              <Paragraph variant="body-lg">Body Large</Paragraph>
              <Paragraph variant="body-sm" theme="muted" className="mt-1">1.125rem / 18px</Paragraph>
            </div>
            
            <div>
              <Paragraph>Body Medium (Default)</Paragraph>
              <Paragraph variant="body-sm" theme="muted" className="mt-1">1rem / 16px</Paragraph>
            </div>
            
            <div>
              <Paragraph variant="body-sm">Body Small</Paragraph>
              <Paragraph variant="body-sm" theme="muted" className="mt-1">0.875rem / 14px</Paragraph>
            </div>
          </div>
        </section>
        
        {/* Form Components Section */}
        <section className="mb-16">
          <Heading level={2} className="mb-6 pb-2 border-b">Form Components</Heading>
          
          <div className="grid gap-10 md:grid-cols-2">
            {/* TextInput examples */}
            <div className="space-y-6">
              <Heading level={3}>TextInput</Heading>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="default-input" className="block text-sm font-medium mb-1.5">Default Input</label>
                  <TextInput id="default-input" placeholder="Enter text here" />
                </div>
                
                <div>
                  <label htmlFor="icon-input" className="block text-sm font-medium mb-1.5">With Icon</label>
                  <TextInput
                    id="icon-input"
                    placeholder="Search..."
                    leftIcon={<Search className="h-4 w-4" />}
                  />
                </div>
                
                <div>
                  <label htmlFor="helper-input" className="block text-sm font-medium mb-1.5">With Helper Text</label>
                  <TextInput
                    id="helper-input"
                    placeholder="Enter email address"
                    helperText="We'll never share your email with anyone else."
                  />
                </div>
                
                <div>
                  <label htmlFor="error-input" className="block text-sm font-medium mb-1.5">Error State</label>
                  <TextInput
                    id="error-input"
                    placeholder="Enter username"
                    state="error"
                    errorMessage="This username is already taken."
                  />
                </div>
                
                <div>
                  <label htmlFor="password-input" className="block text-sm font-medium mb-1.5">Password Input</label>
                  <TextInput
                    id="password-input"
                    type="password"
                    placeholder="Enter password"
                    showPasswordToggle
                  />
                </div>
              </div>
            </div>
            
            {/* SelectMenu examples */}
            <div className="space-y-6">
              <Heading level={3}>SelectMenu</Heading>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="default-select" className="block text-sm font-medium mb-1.5">Default Select</label>
                  <SelectMenu
                    id="default-select"
                    options={[
                      { value: 'option1', label: 'Option 1' },
                      { value: 'option2', label: 'Option 2' },
                      { value: 'option3', label: 'Option 3' },
                    ]}
                    placeholder="Select an option"
                  />
                </div>
                
                <div>
                  <label htmlFor="selected-select" className="block text-sm font-medium mb-1.5">With Selected Value</label>
                  <SelectMenu
                    id="selected-select"
                    options={[
                      { value: 'apple', label: 'Apple' },
                      { value: 'banana', label: 'Banana' },
                      { value: 'orange', label: 'Orange' },
                    ]}
                    defaultValue="banana"
                  />
                </div>
                
                <div>
                  <label htmlFor="helper-select" className="block text-sm font-medium mb-1.5">With Helper Text</label>
                  <SelectMenu
                    id="helper-select"
                    options={[
                      { value: 'small', label: 'Small' },
                      { value: 'medium', label: 'Medium' },
                      { value: 'large', label: 'Large' },
                    ]}
                    placeholder="Select a size"
                    helperText="Choose the size that fits you best."
                  />
                </div>
                
                <div>
                  <label htmlFor="error-select" className="block text-sm font-medium mb-1.5">Error State</label>
                  <SelectMenu
                    id="error-select"
                    options={[
                      { value: 'option1', label: 'Option 1' },
                      { value: 'option2', label: 'Option 2' },
                    ]}
                    placeholder="Select an option"
                    state="error"
                    errorMessage="This field is required."
                  />
                </div>
                
                <div>
                  <label htmlFor="disabled-select" className="block text-sm font-medium mb-1.5">Disabled State</label>
                  <SelectMenu
                    id="disabled-select"
                    options={[
                      { value: 'option1', label: 'Option 1' },
                      { value: 'option2', label: 'Option 2' },
                    ]}
                    placeholder="Select an option"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Feedback Components Section */}
        <section className="mb-16">
          <Heading level={2} className="mb-6 pb-2 border-b">Feedback Components</Heading>
          
          <div className="grid gap-10 md:grid-cols-2">
            {/* Toast examples */}
            <div className="space-y-6">
              <Heading level={3}>Toast</Heading>
              
              <div className="space-y-4">
                <Paragraph>Click buttons below to trigger different toast variants:</Paragraph>
                
                <div className="flex flex-wrap gap-2">
                  <button 
                    className="px-4 py-2 bg-info text-info-foreground text-sm rounded-md"
                    onClick={showInfoToast}
                  >
                    Info Toast
                  </button>
                  
                  <button 
                    className="px-4 py-2 bg-success text-success-foreground text-sm rounded-md"
                    onClick={showSuccessToast}
                  >
                    Success Toast
                  </button>
                  
                  <button 
                    className="px-4 py-2 bg-warning text-warning-foreground text-sm rounded-md"
                    onClick={showWarningToast}
                  >
                    Warning Toast
                  </button>
                  
                  <button 
                    className="px-4 py-2 bg-destructive text-destructive-foreground text-sm rounded-md"
                    onClick={showErrorToast}
                  >
                    Error Toast
                  </button>
                </div>
                
                <div className="space-y-2">
                  <Paragraph variant="body-sm" theme="muted">Static examples:</Paragraph>
                  
                  <Toast
                    message="Information message"
                    variant="info"
                    position="static"
                  />
                  
                  <Toast
                    message="Success message"
                    description="Operation completed successfully"
                    variant="success"
                    position="static"
                  />
                  
                  <Toast
                    message="Warning message"
                    variant="warning"
                    position="static"
                  />
                  
                  <Toast
                    message="Error message"
                    description="Something went wrong"
                    variant="error"
                    position="static"
                  />
                </div>
              </div>
            </div>
            
            {/* ModalDialog examples */}
            <div className="space-y-6">
              <Heading level={3}>Modal Dialog</Heading>
              
              <div className="space-y-4">
                <Paragraph>Click button below to open a modal dialog:</Paragraph>
                
                <button 
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
                  onClick={() => setIsModalOpen(true)}
                >
                  Open Modal
                </button>
                
                <ModalDialog
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  title="Example Modal"
                  description="This is a description for the modal"
                  footer={
                    <>
                      <button 
                        className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Cancel
                      </button>
                      <button 
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
                        onClick={() => {
                          setIsModalOpen(false);
                          showSuccessToast();
                        }}
                      >
                        Confirm
                      </button>
                    </>
                  }
                >
                  <div className="space-y-4">
                    <Paragraph>
                      This is an example modal dialog with various features:
                    </Paragraph>
                    
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Title and optional description</li>
                      <li>Customizable content area</li>
                      <li>Footer with action buttons</li>
                      <li>Close button and ESC key support</li>
                      <li>Focus trap for accessibility</li>
                      <li>Backdrop click to dismiss</li>
                    </ul>
                    
                    <Paragraph>
                      Modals are perfect for focused tasks that require user attention or interaction.
                    </Paragraph>
                  </div>
                </ModalDialog>
                
                <div className="pt-4 space-y-2">
                  <Paragraph variant="body-sm" theme="muted">Modal variants and features:</Paragraph>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="border border-border p-3 rounded-md">
                      <Paragraph variant="body-sm" weight="medium">Size variants</Paragraph>
                      <Paragraph variant="body-sm" theme="muted">sm, md, lg, xl, full</Paragraph>
                    </div>
                    
                    <div className="border border-border p-3 rounded-md">
                      <Paragraph variant="body-sm" weight="medium">Accessibility</Paragraph>
                      <Paragraph variant="body-sm" theme="muted">Focus trap, ARIA attributes</Paragraph>
                    </div>
                    
                    <div className="border border-border p-3 rounded-md">
                      <Paragraph variant="body-sm" weight="medium">Customization</Paragraph>
                      <Paragraph variant="body-sm" theme="muted">Header, content, footer areas</Paragraph>
                    </div>
                    
                    <div className="border border-border p-3 rounded-md">
                      <Paragraph variant="body-sm" weight="medium">Behaviors</Paragraph>
                      <Paragraph variant="body-sm" theme="muted">ESC key, backdrop click, animations</Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Theme Showcase */}
        <section className="mb-8">
          <Heading level={2} className="mb-6 pb-2 border-b">Theme & Colors</Heading>
          
          <div className="grid gap-4 md:grid-cols-2">
            {/* Light Theme */}
            <div className="rounded-lg border border-border overflow-hidden">
              <div className="bg-muted p-3 border-b border-border">
                <Paragraph weight="medium">Light Theme</Paragraph>
              </div>
              <div className="p-4 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-12 rounded-md bg-primary"></div>
                  <div className="h-12 rounded-md bg-secondary"></div>
                  <div className="h-12 rounded-md bg-accent"></div>
                  <div className="h-12 rounded-md bg-muted"></div>
                  <div className="h-12 rounded-md bg-success"></div>
                  <div className="h-12 rounded-md bg-warning"></div>
                  <div className="h-12 rounded-md bg-destructive"></div>
                  <div className="h-12 rounded-md bg-info"></div>
                </div>
              </div>
            </div>
            
            {/* Dark Theme */}
            <div className="rounded-lg border border-border overflow-hidden dark">
              <div className="bg-muted p-3 border-b border-border">
                <Paragraph weight="medium">Dark Theme</Paragraph>
              </div>
              <div className="bg-background p-4 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-12 rounded-md bg-primary"></div>
                  <div className="h-12 rounded-md bg-secondary"></div>
                  <div className="h-12 rounded-md bg-accent"></div>
                  <div className="h-12 rounded-md bg-muted"></div>
                  <div className="h-12 rounded-md bg-success"></div>
                  <div className="h-12 rounded-md bg-warning"></div>
                  <div className="h-12 rounded-md bg-destructive"></div>
                  <div className="h-12 rounded-md bg-info"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer Section */}
        <Paragraph className="text-center text-muted-foreground border-t pt-4">
          Design System Demo - Created with React, TypeScript, and Tailwind CSS
        </Paragraph>
      </main>
    </div>
  );
};

const Index = () => {
  return (
    <ToastProvider>
      <DesignSystemShowcase />
    </ToastProvider>
  );
};

export default Index;
