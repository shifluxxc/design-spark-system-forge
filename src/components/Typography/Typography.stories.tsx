
import React from 'react';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Label from './Label';
import Caption from './Caption';
import HelperText from './HelperText';

export default {
  title: 'Design System/Typography',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Typography System

The typography system provides consistent text styles across the application.
It includes components for headings, paragraphs, labels, captions, and helper text.

## Accessibility

- All typography components have appropriate semantic HTML elements
- Text colors meet WCAG 2.1 AA contrast requirements (4.5:1 for normal text, 3:1 for large text)
- Typography scales appropriately at different viewport sizes
- Heading hierarchy is maintained for screen readers

## Usage Guidelines

- Use the semantic heading level (h1-h6) that matches the document hierarchy, not for styling
- For styling, use the \`variant\` prop to override the default style
- Use the \`theme\` prop for different color variations
- Use \`responsive\` prop for different styles at different breakpoints
- The \`trim\` props can be used to remove default margins when needed
        `,
      },
    },
  },
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['default', 'muted', 'accent'],
      description: 'Color theme for the text',
    },
  },
};

// Heading Stories

export const Headings = () => {
  return (
    <div className="space-y-6">
      <div>
        <Heading level={1}>Heading 1 (h1)</Heading>
        <Caption>32px (2rem) with font-weight: 700 and line-height: 2.5rem</Caption>
      </div>
      <div>
        <Heading level={2}>Heading 2 (h2)</Heading>
        <Caption>28px (1.75rem) with font-weight: 700 and line-height: 2.25rem</Caption>
      </div>
      <div>
        <Heading level={3}>Heading 3 (h3)</Heading>
        <Caption>24px (1.5rem) with font-weight: 600 and line-height: 2rem</Caption>
      </div>
      <div>
        <Heading level={4}>Heading 4 (h4)</Heading>
        <Caption>20px (1.25rem) with font-weight: 600 and line-height: 1.75rem</Caption>
      </div>
      <div>
        <Heading level={5}>Heading 5 (h5)</Heading>
        <Caption>18px (1.125rem) with font-weight: 600 and line-height: 1.5rem</Caption>
      </div>
      <div>
        <Heading level={6}>Heading 6 (h6)</Heading>
        <Caption>16px (1rem) with font-weight: 600 and line-height: 1.5rem</Caption>
      </div>
    </div>
  );
};

Headings.parameters = {
  docs: {
    description: {
      story: 'All heading variants from h1 to h6 with their default styles.',
    },
  },
};

export const HeadingThemes = () => {
  return (
    <div className="space-y-6">
      <div>
        <Heading level={2} theme="default">Default Heading</Heading>
        <Caption>Uses the default text color</Caption>
      </div>
      <div>
        <Heading level={2} theme="muted">Muted Heading</Heading>
        <Caption>Lower contrast for secondary information</Caption>
      </div>
      <div>
        <Heading level={2} theme="accent">Accent Heading</Heading>
        <Caption>Uses the primary brand color</Caption>
      </div>
    </div>
  );
};

HeadingThemes.parameters = {
  docs: {
    description: {
      story: 'Headings can have different themes applied to change their color.',
    },
  },
};

export const ResponsiveHeadings = () => {
  return (
    <div className="space-y-6">
      <div>
        <Heading 
          level={2} 
          responsive={{
            base: 'h4',
            md: 'h3', 
            lg: 'h2'
          }}
        >
          Responsive Heading
        </Heading>
        <Caption>This heading changes size at different breakpoints</Caption>
        <HelperText>h4 on mobile, h3 on tablet, h2 on desktop</HelperText>
      </div>
    </div>
  );
};

ResponsiveHeadings.parameters = {
  docs: {
    description: {
      story: 'Headings can respond to different viewport sizes by changing their size.',
    },
  },
};

// Paragraph Stories

export const Paragraphs = () => {
  return (
    <div className="space-y-6">
      <div>
        <Paragraph variant="body-lg">
          This is a large paragraph. It's useful for introductory text or when you want to emphasize a paragraph. 
          It uses the 'body-lg' variant which is 18px (1.125rem) with standard line height.
        </Paragraph>
      </div>
      <div>
        <Paragraph variant="body-md">
          This is a medium paragraph, which is the default size. It uses the 'body-md' variant which is 
          16px (1rem) with standard line height. This is the most commonly used paragraph size for 
          general content.
        </Paragraph>
      </div>
      <div>
        <Paragraph variant="body-sm">
          This is a small paragraph. It uses the 'body-sm' variant which is 14px (0.875rem) with standard line height. 
          This size is good for less important content or when space is limited.
        </Paragraph>
      </div>
    </div>
  );
};

Paragraphs.parameters = {
  docs: {
    description: {
      story: 'Paragraphs come in three sizes.',
    },
  },
};

export const ParagraphWeights = () => {
  return (
    <div className="space-y-6">
      <div>
        <Paragraph weight="normal">
          Normal weight paragraph (400). This is the default and most common weight for body text.
        </Paragraph>
      </div>
      <div>
        <Paragraph weight="medium">
          Medium weight paragraph (500). This adds slight emphasis without being too heavy.
        </Paragraph>
      </div>
      <div>
        <Paragraph weight="semibold">
          Semibold paragraph (600). This adds strong emphasis to the text.
        </Paragraph>
      </div>
      <div>
        <Paragraph weight="bold">
          Bold paragraph (700). This is the strongest emphasis for important information.
        </Paragraph>
      </div>
    </div>
  );
};

ParagraphWeights.parameters = {
  docs: {
    description: {
      story: 'Paragraphs can have different font weights for varying degrees of emphasis.',
    },
  },
};

// Label Stories

export const FormLabels = () => {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="input-1" variant="label-lg">Large Label</Label>
        <div className="h-10 bg-muted rounded-md px-3 flex items-center">
          Input placeholder (not functional)
        </div>
        <Caption>14px (0.875rem) with font-weight: 500</Caption>
      </div>
      <div>
        <Label htmlFor="input-2" variant="label-md">Medium Label</Label>
        <div className="h-10 bg-muted rounded-md px-3 flex items-center">
          Input placeholder (not functional)
        </div>
        <Caption>12px (0.75rem) with font-weight: 500</Caption>
      </div>
      <div>
        <Label htmlFor="input-3" variant="label-md" required>Required Label</Label>
        <div className="h-10 bg-muted rounded-md px-3 flex items-center">
          Input placeholder (not functional)
        </div>
        <Caption>Includes required indicator (asterisk)</Caption>
      </div>
      <div>
        <Label htmlFor="input-4" variant="label-md" disabled>Disabled Label</Label>
        <div className="h-10 bg-muted rounded-md px-3 flex items-center opacity-50">
          Input placeholder (not functional)
        </div>
        <Caption>Reduced opacity to indicate disabled state</Caption>
      </div>
    </div>
  );
};

FormLabels.parameters = {
  docs: {
    description: {
      story: 'Labels for form elements with different sizes and states.',
    },
  },
};

// Caption Stories

export const Captions = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start">
        <div className="bg-muted h-32 w-full flex items-center justify-center rounded-md mb-1.5">
          Image placeholder
        </div>
        <Caption variant="caption-lg">Large Caption</Caption>
        <HelperText>14px (0.875rem) with standard line height</HelperText>
      </div>
      
      <div className="flex flex-col items-start">
        <div className="bg-muted h-32 w-full flex items-center justify-center rounded-md mb-1.5">
          Image placeholder
        </div>
        <Caption variant="caption-md">Medium Caption</Caption>
        <HelperText>12px (0.75rem) with standard line height</HelperText>
      </div>
      
      <div className="flex flex-col items-start">
        <div className="bg-muted h-32 w-full flex items-center justify-center rounded-md mb-1.5">
          Image placeholder
        </div>
        <Caption variant="caption-md" theme="muted">Muted Caption</Caption>
        <HelperText>Lower contrast for less emphasis</HelperText>
      </div>
    </div>
  );
};

Captions.parameters = {
  docs: {
    description: {
      story: 'Captions are used to provide additional context for images, figures, or tables.',
    },
  },
};

// Helper Text Stories

export const HelperTexts = () => {
  return (
    <div className="space-y-8">
      <div>
        <Label htmlFor="helper-1">Input with default helper text</Label>
        <div className="h-10 bg-muted rounded-md px-3 flex items-center">
          Input placeholder (not functional)
        </div>
        <HelperText id="helper-1">This is default helper text providing additional guidance.</HelperText>
      </div>
      
      <div>
        <Label htmlFor="helper-2">Input with error helper text</Label>
        <div className="h-10 border border-destructive bg-muted rounded-md px-3 flex items-center">
          Input placeholder (not functional)
        </div>
        <HelperText id="helper-2" state="error">This field is required.</HelperText>
      </div>
      
      <div>
        <Label htmlFor="helper-3">Input with success helper text</Label>
        <div className="h-10 border border-success bg-muted rounded-md px-3 flex items-center">
          Input placeholder (not functional)
        </div>
        <HelperText id="helper-3" state="success">Your entry has been verified.</HelperText>
      </div>
      
      <div>
        <Label htmlFor="helper-4">Input with warning helper text</Label>
        <div className="h-10 border border-warning bg-muted rounded-md px-3 flex items-center">
          Input placeholder (not functional)
        </div>
        <HelperText id="helper-4" state="warning">Your password is about to expire.</HelperText>
      </div>
    </div>
  );
};

HelperTexts.parameters = {
  docs: {
    description: {
      story: 'Helper text provides additional guidance for form fields and can indicate validation states.',
    },
  },
};

// Dark Mode Theme

export const DarkModeTypography = () => {
  return (
    <div className="bg-background text-foreground dark p-6 rounded-lg space-y-6">
      <div>
        <Heading level={2}>Typography in Dark Mode</Heading>
        <Paragraph>
          All typography components adjust their colors automatically when used in dark mode to maintain
          readability and proper contrast ratios.
        </Paragraph>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Form Label in Dark Mode</Label>
          <div className="h-10 bg-muted rounded-md px-3 flex items-center">
            Input placeholder
          </div>
          <HelperText>Helper text in dark mode</HelperText>
        </div>
        
        <div>
          <Label required>Required Field</Label>
          <div className="h-10 bg-muted rounded-md px-3 flex items-center">
            Input placeholder
          </div>
          <HelperText state="error">Error state in dark mode</HelperText>
        </div>
      </div>
      
      <div>
        <Caption theme="muted">Caption in dark mode with muted theme</Caption>
      </div>
    </div>
  );
};

DarkModeTypography.parameters = {
  docs: {
    description: {
      story: 'Typography components automatically adjust for dark mode themes.',
    },
  },
  backgrounds: { default: 'dark' },
};

// Typography Anatomy

export const TypographyAnatomy = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Heading level={4}>Heading Anatomy</Heading>
        <div className="border border-border p-4 rounded-lg relative">
          <div className="absolute -top-3 left-4 bg-background px-2 text-xs text-muted-foreground">Semantic Element (h1-h6)</div>
          <Heading level={2}>Example Heading</Heading>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm border-t pt-4">
            <div>
              <p className="font-medium">Properties:</p>
              <ul className="list-disc pl-5 text-muted-foreground mt-2">
                <li>level: 1-6 (semantic HTML tag)</li>
                <li>variant: override default styling</li>
                <li>theme: color scheme</li>
                <li>responsive: breakpoint-specific styling</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">CSS Properties:</p>
              <ul className="list-disc pl-5 text-muted-foreground mt-2">
                <li>font-size: varies by level</li>
                <li>font-weight: 600-700</li>
                <li>line-height: proportional</li>
                <li>letter-spacing: -0.01em</li>
                <li>color: from theme</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <Heading level={4}>Paragraph Anatomy</Heading>
        <div className="border border-border p-4 rounded-lg relative">
          <div className="absolute -top-3 left-4 bg-background px-2 text-xs text-muted-foreground">p element</div>
          <Paragraph>Example paragraph text demonstrating the default styling for body content.</Paragraph>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm border-t pt-4">
            <div>
              <p className="font-medium">Properties:</p>
              <ul className="list-disc pl-5 text-muted-foreground mt-2">
                <li>variant: body-lg, body-md, body-sm</li>
                <li>theme: color scheme</li>
                <li>weight: font-weight override</li>
                <li>lead: for more prominent text</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">CSS Properties:</p>
              <ul className="list-disc pl-5 text-muted-foreground mt-2">
                <li>font-size: 14-18px</li>
                <li>font-weight: 400 (default)</li>
                <li>line-height: proportional</li>
                <li>margin-bottom: 1rem (16px)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <Heading level={4}>Form Text Anatomy</Heading>
        <div className="border border-border p-4 rounded-lg relative">
          <div className="absolute -top-3 left-4 bg-background px-2 text-xs text-muted-foreground">Label, HelperText</div>
          <div className="space-y-1.5">
            <Label htmlFor="demo">Label Component</Label>
            <div className="h-10 bg-muted rounded-md"></div>
            <HelperText>Helper Text Component</HelperText>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm border-t pt-4">
            <div>
              <p className="font-medium">Label Properties:</p>
              <ul className="list-disc pl-5 text-muted-foreground mt-2">
                <li>variant: label-lg, label-md</li>
                <li>required: adds asterisk</li>
                <li>disabled: reduces opacity</li>
                <li>htmlFor: for accessibility</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">HelperText Properties:</p>
              <ul className="list-disc pl-5 text-muted-foreground mt-2">
                <li>state: default, error, success, warning</li>
                <li>id: for aria-describedby</li>
                <li>Fixed size: 12px (0.75rem)</li>
                <li>role: automatically set for screen readers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TypographyAnatomy.parameters = {
  docs: {
    description: {
      story: 'Visual breakdown of typography component structure and properties.',
    },
  },
};

// Accessibility Guide

export const AccessibilityGuide = () => {
  return (
    <div className="space-y-6">
      <Paragraph>
        This guide outlines accessibility considerations for typography components:
      </Paragraph>
      
      <div className="border border-border rounded-lg overflow-hidden">
        <div className="bg-muted px-4 py-2 border-b border-border">
          <Heading level={4} trimBottom>Color Contrast</Heading>
        </div>
        <div className="p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>Default text meets WCAG 2.1 AA standard (4.5:1 contrast ratio)</li>
            <li>Headings (at 18px+) meet at least 3:1 contrast ratio</li>
            <li>Muted text maintains minimum 3:1 ratio for large text, 4.5:1 for normal text</li>
            <li>Error states use red with sufficient contrast (minimum 4.5:1)</li>
          </ul>
        </div>
      </div>
      
      <div className="border border-border rounded-lg overflow-hidden">
        <div className="bg-muted px-4 py-2 border-b border-border">
          <Heading level={4} trimBottom>Semantic HTML</Heading>
        </div>
        <div className="p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>Headings use proper h1-h6 elements for correct document structure</li>
            <li>Labels use the label element with htmlFor to associate with inputs</li>
            <li>HelperText can be linked to inputs via aria-describedby</li>
            <li>Error messages have appropriate roles for screen readers</li>
          </ul>
        </div>
      </div>
      
      <div className="border border-border rounded-lg overflow-hidden">
        <div className="bg-muted px-4 py-2 border-b border-border">
          <Heading level={4} trimBottom>Text Responsiveness</Heading>
        </div>
        <div className="p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>Text scales appropriately on different screen sizes</li>
            <li>Minimum font size of 14px for general content (except helper text/captions)</li>
            <li>Line heights ensure text is readable at all sizes</li>
            <li>Responsive prop allows typography to adapt to viewport</li>
          </ul>
        </div>
      </div>
      
      <div className="border border-border rounded-lg overflow-hidden">
        <div className="bg-muted px-4 py-2 border-b border-border">
          <Heading level={4} trimBottom>Best Practices</Heading>
        </div>
        <div className="p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>Use heading levels in order (h1, then h2, etc.) without skipping</li>
            <li>Keep line lengths between 50-75 characters for optimal readability</li>
            <li>Avoid using color alone to convey meaning</li>
            <li>Ensure text can be scaled up to 200% without loss of content</li>
            <li>Don't use justified text alignment (reduces readability)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

AccessibilityGuide.parameters = {
  docs: {
    description: {
      story: 'Guidelines for ensuring typography components are accessible.',
    },
  },
};

// Do's & Don'ts

export const DosAndDonts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <Heading level={4} className="text-success">Do</Heading>
        <div className="border border-border rounded-lg p-4 space-y-4">
          <div className="space-y-2">
            <Heading level={5} trimBottom>Use proper heading hierarchy</Heading>
            <div className="bg-muted/30 p-3 rounded-lg">
              <Heading level={2}>Main Title</Heading>
              <Heading level={3}>Section Title</Heading>
              <Heading level={4}>Subsection</Heading>
            </div>
          </div>
          
          <div className="space-y-2">
            <Heading level={5} trimBottom>Use appropriate sizing</Heading>
            <div className="bg-muted/30 p-3 rounded-lg">
              <Heading level={2}>Product Features</Heading>
              <Paragraph variant="body-md">
                Our product has several powerful capabilities that help you.
              </Paragraph>
            </div>
          </div>
          
          <div className="space-y-2">
            <Heading level={5} trimBottom>Link labels to form controls</Heading>
            <div className="bg-muted/30 p-3 rounded-lg">
              <Label htmlFor="example" required>Email Address</Label>
              <div className="h-10 bg-background border rounded-md px-3" id="example"></div>
              <HelperText>We'll never share your email.</HelperText>
            </div>
          </div>
          
          <div className="space-y-2">
            <Heading level={5} trimBottom>Use proper text contrast</Heading>
            <div className="bg-muted/30 p-3 rounded-lg">
              <div className="bg-background p-2 rounded">
                <Paragraph>This text has good contrast (4.5:1 or better).</Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <Heading level={4} className="text-destructive">Don't</Heading>
        <div className="border border-border rounded-lg p-4 space-y-4">
          <div className="space-y-2">
            <Heading level={5} trimBottom>Skip heading levels</Heading>
            <div className="bg-muted/30 p-3 rounded-lg">
              <div className="border border-destructive/40 rounded p-2">
                <Heading level={2}>Main Title</Heading>
                <Heading level={5}>Subsection (skipped h3, h4)</Heading>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Heading level={5} trimBottom>Use inappropriately small text</Heading>
            <div className="bg-muted/30 p-3 rounded-lg">
              <div className="border border-destructive/40 rounded p-2">
                <Paragraph className="text-[10px]">
                  This text is too small to read comfortably.
                </Paragraph>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Heading level={5} trimBottom>Forget associated labels</Heading>
            <div className="bg-muted/30 p-3 rounded-lg">
              <div className="border border-destructive/40 rounded p-2">
                <div>Email Address</div>
                <div className="h-10 bg-background border rounded-md px-3"></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Heading level={5} trimBottom>Use poor contrast</Heading>
            <div className="bg-muted/30 p-3 rounded-lg">
              <div className="border border-destructive/40 rounded p-2 bg-neutral-200">
                <p className="text-neutral-400">
                  This text has poor contrast and is hard to read.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DosAndDonts.parameters = {
  docs: {
    description: {
      story: 'Recommended practices and patterns to avoid when using typography components.',
    },
  },
};
