import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonIcon } from './ButtonIcon';

export default {
  title: 'Buttons/icons',
  component: ButtonIcon,
  argTypes: {
    size: ['large', 'medium', 'small'],
    icon: ['play', 'pause', 'shuffle', 'forward-step', 'backward-step'],
  },
} as ComponentMeta<typeof ButtonIcon>;

const Template: ComponentStory<typeof ButtonIcon> = (args) => (
  <ButtonIcon {...args} />
);

export const Play = Template.bind({});
Play.args = {
  icon: 'play',
  size: 'medium',
};

export const Pause = Template.bind({});
Pause.args = {
  icon: 'pause',
  size: 'medium',
};

export const Prev = Template.bind({});
Prev.args = {
  icon: 'backward-step',
  size: 'medium',
};

export const Next = Template.bind({});
Next.args = {
  icon: 'forward-step',
  size: 'medium',
};

export const Shuffle = Template.bind({});
Shuffle.args = {
  icon: 'shuffle',
  size: 'medium',
};
