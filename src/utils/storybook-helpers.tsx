
import React from 'react';

/**
 * ColorPalette component for displaying color swatches in Storybook
 */
export const ColorPalette = ({ 
  colors,
  title,
}: {
  colors: { name: string; value: string; textColor?: string }[];
  title?: string;
}) => {
  return (
    <div className="space-y-3">
      {title && <h3 className="text-lg font-medium">{title}</h3>}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {colors.map((color) => (
          <div key={color.name} className="space-y-1.5">
            <div 
              className="h-10 w-full rounded-md border"
              style={{ 
                backgroundColor: color.value,
                color: color.textColor || '#000',
              }}
            />
            <div className="px-0.5">
              <p className="font-medium">{color.name}</p>
              <p className="text-xs text-muted-foreground">{color.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * TypographyScale component for displaying typography samples in Storybook
 */
export const TypographyScale = ({
  samples
}: {
  samples: { name: string; sample: React.ReactNode; description?: string }[];
}) => {
  return (
    <div className="space-y-8">
      {samples.map((item) => (
        <div key={item.name} className="space-y-1.5">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium">{item.name}</h3>
            {item.description && (
              <p className="text-xs text-muted-foreground">{item.description}</p>
            )}
          </div>
          <div className="rounded-md border p-4">
            {item.sample}
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * IconsGrid component for displaying icons in Storybook
 */
export const IconsGrid = ({
  icons,
  title,
}: {
  icons: { name: string; component: React.ReactNode }[];
  title?: string;
}) => {
  return (
    <div className="space-y-3">
      {title && <h3 className="text-lg font-medium">{title}</h3>}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {icons.map((icon) => (
          <div key={icon.name} className="flex flex-col items-center justify-center space-y-2 rounded-md border p-4">
            {icon.component}
            <p className="text-xs">{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * ThemeWrapper component for toggling between light and dark mode in Storybook
 */
export const ThemeWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="bg-background text-foreground p-4 rounded-lg min-h-[200px] transition-colors">
        <div className="flex justify-end mb-4">
          <button
            className="px-3 py-1.5 bg-secondary rounded-md text-sm flex items-center gap-1"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

/**
 * StateWrapper component for cycling through component states in Storybook
 */
export const StateWrapper = <T extends string>({
  states,
  children,
  initialState,
}: {
  states: T[];
  children: (state: T) => React.ReactNode;
  initialState?: T;
}) => {
  const [currentState, setCurrentState] = React.useState<T>(initialState || states[0]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {states.map((state) => (
          <button
            key={state}
            className={`px-3 py-1.5 rounded-md text-sm ${
              currentState === state
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary'
            }`}
            onClick={() => setCurrentState(state)}
          >
            {state}
          </button>
        ))}
      </div>
      <div className="p-4 border rounded-md">
        {children(currentState)}
      </div>
    </div>
  );
};

/**
 * FigureContainer for displaying component examples with captions in Storybook
 */
export const FigureContainer = ({
  children,
  caption,
  className,
}: {
  children: React.ReactNode;
  caption?: React.ReactNode;
  className?: string;
}) => {
  return (
    <figure className={`border rounded-md overflow-hidden ${className || ''}`}>
      <div className="p-4">{children}</div>
      {caption && (
        <figcaption className="bg-muted px-4 py-2 text-sm">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

/**
 * Split view for showing the Do's and Don'ts in Storybook
 */
export const DosAndDonts = ({
  do: doExample,
  dont: dontExample,
  doText,
  dontText,
}: {
  do: React.ReactNode;
  dont: React.ReactNode;
  doText?: string;
  dontText?: string;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <h3 className="text-base font-medium flex items-center gap-1 text-success">
          <span>✓</span> Do
        </h3>
        <div className="border border-success/20 rounded-md p-4 bg-success/5">
          {doExample}
        </div>
        {doText && <p className="text-sm text-muted-foreground">{doText}</p>}
      </div>
      
      <div className="space-y-2">
        <h3 className="text-base font-medium flex items-center gap-1 text-destructive">
          <span>✕</span> Don't
        </h3>
        <div className="border border-destructive/20 rounded-md p-4 bg-destructive/5">
          {dontExample}
        </div>
        {dontText && <p className="text-sm text-muted-foreground">{dontText}</p>}
      </div>
    </div>
  );
};
