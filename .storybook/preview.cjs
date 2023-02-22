import '../src/index.css'; // replace with the name of your tailwind css file
import {
  DEFAULT_THEME,
  withTailwindTheme,
} from './withTailwindTheme.decorator.tsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlay,
  faPause,
  faBackwardStep,
  faForwardStep,
  faShuffle,
} from '@fortawesome/free-solid-svg-icons';

library.add(faPlay, faPause, faBackwardStep, faForwardStep, faShuffle);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: DEFAULT_THEME,
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
      dynamicTitle: true,
    },
  },
};

export const decorators = [withTailwindTheme];
