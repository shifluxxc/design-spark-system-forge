
import React from 'react';
import TextInput from './TextInput';
import { Search, Mail, Info, Check, X } from 'lucide-react';

export default {
  title: 'Design System/Data Entry/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# TextInput Component

The TextInput component allows users to enter and edit text. It supports various states, sizes, and can include icons for additional context.

## Accessibility Features

- Proper labeling with aria-describedby for helper text and error messages
- Error states are announced to screen readers with role="alert"
- Focus states with visible focus indicators
- Support for all standard input attributes (required, disabled, etc.)
- Keyboard navigable password visibility toggle

## Usage Guidelines

- Always use a visible label above the input (or visually hidden for search fields)
- Provide clear, concise helper text when necessary
- Use appropriate validation and show helpful error messages
- Choose the appropriate input type (text, email, password, etc.)
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Controls the size of the input',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'focus', 'error', 'disabled'],
      description: 'The visual and functional state of the input',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'HTML input type',
    },
    leftIcon: {
      control: false,
      description: 'Icon displayed on the left side of the input',
    },
    rightIcon: {
      control: false,
      description: 'Icon displayed on the right side of the input',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the input should take full width of its container',
    },
    showPasswordToggle: {
      control: { type: 'boolean' },
      description: 'Show password visibility toggle (only for type="password")',
    },
  },
};

export const Default = () => <TextInput placeholder="Enter text here" />;

Default.parameters = {
  docs: {
    description: {
      story: 'The default TextInput with no additional props.',
    },
  },
};

export const Sizes = () => (
  <div className="space-y-4">
    <TextInput size="sm" placeholder="Small input" />
    <TextInput size="md" placeholder="Medium input (default)" />
    <TextInput size="lg" placeholder="Large input" />
  </div>
);

Sizes.parameters = {
  docs: {
    description: {
      story: 'TextInput comes in three sizes: small, medium (default), and large.',
    },
  },
};

export const States = () => (
  <div className="space-y-4">
    <div className="flex items-center gap-2">
      <span className="w-20 text-sm">Default:</span>
      <TextInput state="default" placeholder="Default state" />
    </div>
    <div className="flex items-center gap-2">
      <span className="w-20 text-sm">Hover:</span>
      <TextInput state="hover" placeholder="Hover state" />
    </div>
    <div className="flex items-center gap-2">
      <span className="w-20 text-sm">Focus:</span>
      <TextInput state="focus" placeholder="Focus state" />
    </div>
    <div className="flex items-center gap-2">
      <span className="w-20 text-sm">Error:</span>
      <TextInput 
        state="error" 
        placeholder="Error state" 
        errorMessage="This field has an error" 
      />
    </div>
    <div className="flex items-center gap-2">
      <span className="w-20 text-sm">Disabled:</span>
      <TextInput 
        state="disabled" 
        placeholder="Disabled state" 
        disabled 
      />
    </div>
  </div>
);

States.parameters = {
  docs: {
    description: {
      story: 'TextInput can be in different states: default, hover, focus, error, or disabled.',
    },
  },
};

export const WithIcons = () => (
  <div className="space-y-4">
    <TextInput 
      leftIcon={<Search className="h-4 w-4" />} 
      placeholder="Search..." 
    />
    <TextInput 
      rightIcon={<Mail className="h-4 w-4" />} 
      placeholder="Email address" 
    />
    <TextInput 
      leftIcon={<Info className="h-4 w-4" />}
      rightIcon={<Check className="h-4 w-4" />}
      placeholder="With both icons" 
    />
    <TextInput 
      state="error"
      leftIcon={<Mail className="h-4 w-4" />}
      rightIcon={<X className="h-4 w-4 text-destructive" />}
      placeholder="With error" 
      errorMessage="Invalid email format"
    />
  </div>
);

WithIcons.parameters = {
  docs: {
    description: {
      story: 'TextInput can include icons on the left and/or right sides to provide context or actions.',
    },
  },
};

export const WithHelperText = () => (
  <div className="space-y-4">
    <TextInput 
      placeholder="Username" 
      helperText="Choose a unique username" 
    />
    <TextInput 
      placeholder="Password" 
      type="password"
      helperText="Must be at least 8 characters" 
    />
    <TextInput 
      state="error"
      placeholder="Email" 
      errorMessage="Invalid email address"
      helperText="We'll never share your email"
    />
  </div>
);

WithHelperText.parameters = {
  docs: {
    description: {
      story: 'TextInput can include helper text to provide additional context or guidance.',
    },
  },
};

export const PasswordInput = () => (
  <div className="space-y-4">
    <TextInput 
      type="password"
      placeholder="Password without toggle" 
    />
    <TextInput 
      type="password"
      showPasswordToggle
      placeholder="Password with toggle" 
      helperText="Click the eye icon to show/hide password"
    />
    <TextInput 
      type="password"
      showPasswordToggle
      leftIcon={<Info className="h-4 w-4" />}
      placeholder="Password with icon and toggle" 
    />
  </div>
);

PasswordInput.parameters = {
  docs: {
    description: {
      story: 'Password inputs can include a visibility toggle to allow users to check their input.',
    },
  },
};

export const InputTypes = () => (
  <div className="space-y-4">
    <TextInput 
      type="email"
      placeholder="Email address" 
    />
    <TextInput 
      type="tel"
      placeholder="Phone number" 
    />
    <TextInput 
      type="url"
      placeholder="Website URL" 
    />
    <TextInput 
      type="number"
      placeholder="Age" 
    />
  </div>
);

InputTypes.parameters = {
  docs: {
    description: {
      story: 'TextInput supports various input types to ensure appropriate validation and keyboard on mobile.',
    },
  },
};

export const FullWidth = () => (
  <div className="space-y-4">
    <TextInput 
      fullWidth
      placeholder="Full width input" 
    />
    <TextInput 
      fullWidth
      leftIcon={<Search className="h-4 w-4" />}
      placeholder="Full width with icon" 
    />
  </div>
);

FullWidth.parameters = {
  docs: {
    description: {
      story: 'TextInput can take up the full width of its container.',
    },
  },
};

export const DarkTheme = () => (
  <div className="dark bg-background p-6 rounded-lg space-y-4">
    <TextInput placeholder="Default input" />
    <TextInput 
      leftIcon={<Search className="h-4 w-4" />}
      placeholder="With icon" 
    />
    <TextInput 
      state="error"
      placeholder="Error state" 
      errorMessage="This field is required"
    />
    <TextInput 
      state="disabled"
      placeholder="Disabled state" 
      disabled
    />
    <TextInput 
      type="password"
      showPasswordToggle
      placeholder="Password with toggle" 
    />
  </div>
);

DarkTheme.parameters = {
  docs: {
    description: {
      story: 'TextInput adapts to dark mode automatically.',
    },
  },
  backgrounds: { default: 'dark' },
};

export const Accessibility = () => (
  <div className="space-y-8">
    <div>
      <label htmlFor="name-input" className="block text-sm font-medium mb-1.5">Full Name</label>
      <TextInput 
        id="name-input"
        placeholder="Enter your full name" 
      />
    </div>
    
    <div>
      <label htmlFor="email-input" className="block text-sm font-medium mb-1.5">Email Address</label>
      <TextInput 
        id="email-input"
        type="email"
        placeholder="Enter your email" 
        helperText="We'll never share your email with anyone else."
      />
    </div>
    
    <div>
      <label htmlFor="password-input" className="block text-sm font-medium mb-1.5">Password</label>
      <TextInput 
        id="password-input"
        type="password"
        showPasswordToggle
        placeholder="Enter password" 
        helperText="Password must be at least 8 characters"
      />
    </div>
    
    <div>
      <label htmlFor="error-input" className="block text-sm font-medium mb-1.5">Username</label>
      <TextInput 
        id="error-input"
        state="error"
        placeholder="Choose username" 
        errorMessage="Username is already taken"
      />
    </div>
    
    <div>
      <span className="block text-sm font-medium mb-1.5 opacity-50">Disabled Field</span>
      <TextInput 
        disabled
        placeholder="This field is disabled" 
        helperText="You cannot edit this field"
      />
    </div>
  </div>
);

Accessibility.parameters = {
  docs: {
    description: {
      story: 'Examples of accessible TextInput usage with proper labeling and descriptions.',
    },
  },
};

export const InputAnatomy = () => (
  <div className="space-y-8">
    <div className="border border-border p-6 rounded-lg relative">
      <div className="absolute -top-3 left-4 bg-background px-2 text-xs text-muted-foreground">TextInput Anatomy</div>
      <div className="space-y-6">
        <div>
          <label htmlFor="anatomy-input" className="block text-sm font-medium mb-1.5 relative">
            Label Component
            <span className="absolute -top-4 right-0 text-[10px] text-muted-foreground">Always use an associated label</span>
          </label>
          
          <div className="relative">
            <div className="absolute -top-3 left-10 text-[10px] text-primary">Left Icon (optional)</div>
            <div className="absolute -bottom-3 right-10 text-[10px] text-primary">Right Icon (optional)</div>
            <TextInput 
              id="anatomy-input"
              leftIcon={<Search className="h-4 w-4" />}
              rightIcon={<Info className="h-4 w-4" />}
              placeholder="Input placeholder" 
            />
          </div>
          
          <div className="mt-2 relative">
            <p className="text-xs text-muted-foreground">Helper Text (optional)</p>
            <span className="absolute -top-1 right-0 text-[10px] text-muted-foreground">For context or instructions</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm border-t pt-4">
          <div>
            <p className="font-medium mb-2">Container States:</p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Default: neutral border</li>
              <li>Hover: slightly highlighted border</li>
              <li>Focus: highlighted border + focus ring</li>
              <li>Error: red border + error message</li>
              <li>Disabled: muted appearance, no interaction</li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-2">Accessibility Features:</p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Associated label via htmlFor/id</li>
              <li>aria-describedby for helper/error text</li>
              <li>aria-invalid for error states</li>
              <li>role="alert" for error messages</li>
              <li>Visible focus states</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

InputAnatomy.parameters = {
  docs: {
    description: {
      story: 'Visual breakdown of the TextInput component structure and relationships.',
    },
  },
};

export const DosAndDonts = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-success">Do</h3>
      <div className="border border-border rounded-lg p-4 space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Use clear, descriptive labels</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <label htmlFor="do-email" className="block text-sm font-medium mb-1.5">Email Address</label>
            <TextInput id="do-email" placeholder="name@example.com" />
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Provide helpful validation messages</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <label htmlFor="do-password" className="block text-sm font-medium mb-1.5">Password</label>
            <TextInput 
              id="do-password" 
              type="password" 
              state="error" 
              errorMessage="Password must contain at least 8 characters" 
            />
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Use appropriate input types</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <label htmlFor="do-tel" className="block text-sm font-medium mb-1.5">Phone Number</label>
            <TextInput id="do-tel" type="tel" placeholder="(123) 456-7890" />
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Use icons purposefully</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <label htmlFor="do-search" className="sr-only">Search</label>
            <TextInput 
              id="do-search" 
              leftIcon={<Search className="h-4 w-4" />}
              placeholder="Search..." 
            />
          </div>
        </div>
      </div>
    </div>
    
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-destructive">Don't</h3>
      <div className="border border-border rounded-lg p-4 space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Use vague or no labels</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <div className="border border-destructive/40 rounded p-2">
              <TextInput placeholder="Enter here..." />
              <p className="text-xs text-muted-foreground mt-1">Missing or vague label</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Use unhelpful error messages</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <div className="border border-destructive/40 rounded p-2">
              <label htmlFor="dont-input" className="block text-sm font-medium mb-1.5">Input</label>
              <TextInput 
                id="dont-input" 
                state="error" 
                errorMessage="Invalid input" 
              />
              <p className="text-xs text-muted-foreground mt-1">Message doesn't explain how to fix</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Overuse icons</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <div className="border border-destructive/40 rounded p-2">
              <TextInput 
                leftIcon={<Mail className="h-4 w-4" />}
                rightIcon={<Info className="h-4 w-4" />}
                placeholder="Too many icons" 
              />
              <p className="text-xs text-muted-foreground mt-1">Unnecessary or confusing icons</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Forget to visually indicate required fields</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <div className="border border-destructive/40 rounded p-2">
              <label htmlFor="dont-required" className="block text-sm font-medium mb-1.5">Email</label>
              <TextInput 
                id="dont-required"
                required 
              />
              <p className="text-xs text-muted-foreground mt-1">Required field not indicated</p>
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
      story: 'Recommended practices and patterns to avoid when using TextInput components.',
    },
  },
};
