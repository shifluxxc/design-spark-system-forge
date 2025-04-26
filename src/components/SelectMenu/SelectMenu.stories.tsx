
import React, { useState } from 'react';
import SelectMenu from './SelectMenu';

export default {
  title: 'Design System/Data Entry/SelectMenu',
  component: SelectMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# SelectMenu Component

The SelectMenu component allows users to select a single option from a dropdown list. It supports various states, sizes, and customization options.

## Accessibility Features

- Proper ARIA attributes for combobox pattern
- Keyboard navigation support (arrow keys, Enter, Escape)
- Focus management
- Screen reader announcements for selection changes
- Proper labeling and descriptions

## Usage Guidelines

- Use when selecting from a predefined list of options
- For lists with more than 5 items, a SelectMenu is better than radio buttons
- For fewer than 3 options, consider radio buttons instead
- Always provide clear option labels
- Group related options if the list is long
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Controls the size of the select menu',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'focus', 'error', 'disabled'],
      description: 'The visual and functional state of the select menu',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the select menu should take full width of its container',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the select is required',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the select is disabled',
    },
    clearable: {
      control: { type: 'boolean' },
      description: 'Allow clearing the selection',
    },
  },
};

const fruitOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'durian', label: 'Durian' },
  { value: 'elderberry', label: 'Elderberry' },
];

export const Default = () => {
  return (
    <SelectMenu
      options={fruitOptions}
      placeholder="Select a fruit"
    />
  );
};

Default.parameters = {
  docs: {
    description: {
      story: 'The default SelectMenu with no additional props.',
    },
  },
};

export const ControlledExample = () => {
  const [selected, setSelected] = useState('banana');
  
  return (
    <div className="space-y-4">
      <SelectMenu
        options={fruitOptions}
        value={selected}
        onChange={setSelected}
        placeholder="Select a fruit"
      />
      
      <div className="text-sm p-2 bg-muted/30 rounded-md">
        Selected value: <span className="font-mono">{selected}</span>
      </div>
    </div>
  );
};

ControlledExample.parameters = {
  docs: {
    description: {
      story: 'A controlled SelectMenu where the value is managed externally.',
    },
  },
};

export const Sizes = () => {
  return (
    <div className="space-y-4">
      <SelectMenu
        size="sm"
        options={fruitOptions}
        placeholder="Small select"
      />
      
      <SelectMenu
        size="md"
        options={fruitOptions}
        placeholder="Medium select (default)"
      />
      
      <SelectMenu
        size="lg"
        options={fruitOptions}
        placeholder="Large select"
      />
    </div>
  );
};

Sizes.parameters = {
  docs: {
    description: {
      story: 'SelectMenu comes in three sizes: small, medium (default), and large.',
    },
  },
};

export const States = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="w-20 text-sm">Default:</span>
        <SelectMenu
          state="default"
          options={fruitOptions}
          placeholder="Default state"
        />
      </div>
      
      <div className="flex items-center gap-2">
        <span className="w-20 text-sm">Hover:</span>
        <SelectMenu
          state="hover"
          options={fruitOptions}
          placeholder="Hover state"
        />
      </div>
      
      <div className="flex items-center gap-2">
        <span className="w-20 text-sm">Focus:</span>
        <SelectMenu
          state="focus"
          options={fruitOptions}
          placeholder="Focus state"
        />
      </div>
      
      <div className="flex items-center gap-2">
        <span className="w-20 text-sm">Error:</span>
        <SelectMenu
          state="error"
          options={fruitOptions}
          placeholder="Error state"
          errorMessage="Please select an option"
        />
      </div>
      
      <div className="flex items-center gap-2">
        <span className="w-20 text-sm">Disabled:</span>
        <SelectMenu
          state="disabled"
          options={fruitOptions}
          placeholder="Disabled state"
          disabled
        />
      </div>
    </div>
  );
};

States.parameters = {
  docs: {
    description: {
      story: 'SelectMenu can be in different states: default, hover, focus, error, or disabled.',
    },
  },
};

export const WithHelperText = () => {
  return (
    <div className="space-y-4">
      <SelectMenu
        options={fruitOptions}
        placeholder="Select a fruit"
        helperText="Choose your favorite fruit"
      />
      
      <SelectMenu
        state="error"
        options={fruitOptions}
        placeholder="Select a fruit"
        errorMessage="This field is required"
        helperText="Choose your favorite fruit"
      />
    </div>
  );
};

WithHelperText.parameters = {
  docs: {
    description: {
      story: 'SelectMenu can include helper text to provide additional context or guidance.',
    },
  },
};

export const Clearable = () => {
  const [selected, setSelected] = useState('apple');
  
  return (
    <div className="space-y-4">
      <SelectMenu
        options={fruitOptions}
        value={selected}
        onChange={setSelected}
        clearable
      />
      
      <div className="text-sm p-2 bg-muted/30 rounded-md">
        Selected value: <span className="font-mono">{selected || 'none'}</span>
      </div>
    </div>
  );
};

Clearable.parameters = {
  docs: {
    description: {
      story: 'SelectMenu can include a clear button to reset the selection.',
    },
  },
};

export const WithDisabledOptions = () => {
  const optionsWithDisabled = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana', disabled: true },
    { value: 'cherry', label: 'Cherry' },
    { value: 'durian', label: 'Durian', disabled: true },
    { value: 'elderberry', label: 'Elderberry' },
  ];
  
  return (
    <SelectMenu
      options={optionsWithDisabled}
      placeholder="Select a fruit"
      helperText="Some options are disabled"
    />
  );
};

WithDisabledOptions.parameters = {
  docs: {
    description: {
      story: 'Individual options in the SelectMenu can be disabled.',
    },
  },
};

export const FullWidth = () => {
  return (
    <SelectMenu
      options={fruitOptions}
      placeholder="Select a fruit"
      fullWidth
    />
  );
};

FullWidth.parameters = {
  docs: {
    description: {
      story: 'SelectMenu can take up the full width of its container.',
    },
  },
};

export const DarkTheme = () => {
  return (
    <div className="dark bg-background p-6 rounded-lg space-y-4">
      <SelectMenu
        options={fruitOptions}
        placeholder="Select a fruit"
      />
      
      <SelectMenu
        state="error"
        options={fruitOptions}
        placeholder="Select a fruit"
        errorMessage="This field is required"
      />
      
      <SelectMenu
        options={fruitOptions}
        defaultValue="banana"
        clearable
      />
      
      <SelectMenu
        options={fruitOptions}
        placeholder="Disabled select"
        disabled
      />
    </div>
  );
};

DarkTheme.parameters = {
  docs: {
    description: {
      story: 'SelectMenu adapts to dark mode automatically.',
    },
  },
  backgrounds: { default: 'dark' },
};

export const Accessibility = () => {
  return (
    <div className="space-y-8">
      <div>
        <label htmlFor="fruit-select" className="block text-sm font-medium mb-1.5">Favorite Fruit</label>
        <SelectMenu
          id="fruit-select"
          options={fruitOptions}
          placeholder="Select a fruit"
        />
      </div>
      
      <div>
        <label htmlFor="required-select" className="block text-sm font-medium mb-1.5">
          Required Field <span className="text-destructive">*</span>
        </label>
        <SelectMenu
          id="required-select"
          options={fruitOptions}
          placeholder="Select a fruit"
          required
          helperText="This field is required"
        />
      </div>
      
      <div>
        <label htmlFor="error-select" className="block text-sm font-medium mb-1.5">
          With Error State
        </label>
        <SelectMenu
          id="error-select"
          options={fruitOptions}
          placeholder="Select a fruit"
          state="error"
          errorMessage="Please make a selection"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1.5 opacity-50">Disabled Select</label>
        <SelectMenu
          options={fruitOptions}
          placeholder="Select a fruit"
          disabled
        />
      </div>
    </div>
  );
};

Accessibility.parameters = {
  docs: {
    description: {
      story: 'Examples of accessible SelectMenu usage with proper labeling and descriptions.',
    },
  },
};

export const SelectMenuAnatomy = () => (
  <div className="space-y-8">
    <div className="border border-border p-6 rounded-lg relative">
      <div className="absolute -top-3 left-4 bg-background px-2 text-xs text-muted-foreground">SelectMenu Anatomy</div>
      <div className="space-y-6">
        <div>
          <label htmlFor="anatomy-select" className="block text-sm font-medium mb-1.5 relative">
            Label Component
            <span className="absolute -top-4 right-0 text-[10px] text-muted-foreground">Always use an associated label</span>
          </label>
          
          <div className="relative">
            <div className="absolute -top-3 left-1/4 text-[10px] text-primary">Selected Value / Placeholder</div>
            <div className="absolute -bottom-3 right-12 text-[10px] text-primary">Clear Button</div>
            <div className="absolute -bottom-3 right-2 text-[10px] text-primary">Dropdown Icon</div>
            <SelectMenu 
              id="anatomy-select"
              options={fruitOptions}
              defaultValue="apple"
              clearable
            />
          </div>
          
          <div className="mt-8 relative">
            <div className="absolute -top-3 left-1/4 text-[10px] text-primary">Dropdown Menu</div>
            <div className="border border-border rounded-md w-full mt-1 shadow-sm">
              <div className="p-1 space-y-0.5">
                <div className="bg-muted/30 rounded-sm px-3 py-1.5 flex items-center justify-between">
                  <span>Apple</span>
                </div>
                <div className="rounded-sm px-3 py-1.5 flex items-center justify-between">
                  <span>Banana</span>
                </div>
                <div className="rounded-sm px-3 py-1.5 opacity-50 flex items-center justify-between">
                  <span>Cherry (disabled)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-2 relative">
            <p className="text-xs text-muted-foreground">Helper Text (optional)</p>
            <span className="absolute -top-1 right-0 text-[10px] text-muted-foreground">For context or instructions</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm border-t pt-4">
          <div>
            <p className="font-medium mb-2">Keyboard Navigation:</p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Tab: Focus the select</li>
              <li>Space/Enter: Open dropdown</li>
              <li>Escape: Close dropdown</li>
              <li>Up/Down: Navigate options</li>
              <li>Enter: Select focused option</li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-2">Accessibility Features:</p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>ARIA combobox role</li>
              <li>aria-expanded state</li>
              <li>aria-haspopup attribute</li>
              <li>aria-selected for options</li>
              <li>aria-disabled for options</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SelectMenuAnatomy.parameters = {
  docs: {
    description: {
      story: 'Visual breakdown of the SelectMenu component structure and relationships.',
    },
  },
};

export const DosAndDonts = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-success">Do</h3>
      <div className="border border-border rounded-lg p-4 space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Use clear option labels</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <label htmlFor="do-select-1" className="block text-sm font-medium mb-1.5">Country</label>
            <SelectMenu 
              id="do-select-1" 
              options={[
                { value: 'us', label: 'United States' },
                { value: 'ca', label: 'Canada' },
                { value: 'mx', label: 'Mexico' },
              ]}
              placeholder="Select a country"
            />
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Use appropriate placeholder text</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <label htmlFor="do-select-2" className="block text-sm font-medium mb-1.5">Payment Method</label>
            <SelectMenu 
              id="do-select-2" 
              options={[
                { value: 'cc', label: 'Credit Card' },
                { value: 'paypal', label: 'PayPal' },
                { value: 'bank', label: 'Bank Transfer' },
              ]}
              placeholder="Choose payment method"
            />
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Disable unavailable options</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <label htmlFor="do-select-3" className="block text-sm font-medium mb-1.5">Delivery Options</label>
            <SelectMenu 
              id="do-select-3" 
              options={[
                { value: 'standard', label: 'Standard Shipping' },
                { value: 'express', label: 'Express Shipping' },
                { value: 'overnight', label: 'Overnight Shipping', disabled: true },
              ]}
              helperText="Overnight shipping not available for your location"
            />
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Use helper text for context</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <label htmlFor="do-select-4" className="block text-sm font-medium mb-1.5">Time Zone</label>
            <SelectMenu 
              id="do-select-4" 
              options={[
                { value: 'pst', label: 'Pacific Time (PT)' },
                { value: 'mst', label: 'Mountain Time (MT)' },
                { value: 'cst', label: 'Central Time (CT)' },
                { value: 'est', label: 'Eastern Time (ET)' },
              ]}
              helperText="Determines when notifications will be sent"
            />
          </div>
        </div>
      </div>
    </div>
    
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-destructive">Don't</h3>
      <div className="border border-border rounded-lg p-4 space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Use vague option labels</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <div className="border border-destructive/40 rounded p-2">
              <label htmlFor="dont-select-1" className="block text-sm font-medium mb-1.5">Size</label>
              <SelectMenu 
                id="dont-select-1" 
                options={[
                  { value: 's', label: 'S' },
                  { value: 'm', label: 'M' },
                  { value: 'l', label: 'L' },
                ]}
                placeholder="Select"
              />
              <p className="text-xs text-muted-foreground mt-1">Use descriptive labels like "Small (S)"</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Use generic placeholders</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <div className="border border-destructive/40 rounded p-2">
              <label htmlFor="dont-select-2" className="block text-sm font-medium mb-1.5">Category</label>
              <SelectMenu 
                id="dont-select-2" 
                options={[
                  { value: '1', label: 'Books' },
                  { value: '2', label: 'Electronics' },
                  { value: '3', label: 'Clothing' },
                ]}
                placeholder="Select an option"
              />
              <p className="text-xs text-muted-foreground mt-1">Use specific context: "Select a category"</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Use for binary choices</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <div className="border border-destructive/40 rounded p-2">
              <label htmlFor="dont-select-3" className="block text-sm font-medium mb-1.5">Subscribe to newsletter</label>
              <SelectMenu 
                id="dont-select-3" 
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                ]}
                placeholder="Select"
              />
              <p className="text-xs text-muted-foreground mt-1">Use a checkbox or toggle instead</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Use for very long lists without search</h4>
          <div className="bg-muted/30 p-3 rounded-lg">
            <div className="border border-destructive/40 rounded p-2">
              <label htmlFor="dont-select-4" className="block text-sm font-medium mb-1.5">Select Country (200+ options)</label>
              <SelectMenu 
                id="dont-select-4" 
                options={[
                  { value: 'af', label: 'Afghanistan' },
                  { value: 'al', label: 'Albania' },
                  // ... imagine many more options
                  { value: 'zm', label: 'Zambia' },
                  { value: 'zw', label: 'Zimbabwe' },
                ]}
              />
              <p className="text-xs text-muted-foreground mt-1">Use a searchable select for large option sets</p>
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
      story: 'Recommended practices and patterns to avoid when using SelectMenu components.',
    },
  },
};
