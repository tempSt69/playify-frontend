import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonPlayer } from './ButtonPlayer';

export default {
  title: 'Core/Buttons/Player',
  component: ButtonPlayer,
  argTypes: {
    size: ['xlarge', 'large', 'medium', 'small'],
    icon: ['play', 'pause', 'shuffle', 'forward-step', 'backward-step'],
  },
} as ComponentMeta<typeof ButtonPlayer>;

const Template: ComponentStory<typeof ButtonPlayer> = (args) => (
  <ButtonPlayer {...args} />
);

export const Play = Template.bind({});
Play.args = {
  icon: 'play',
  size: 'medium',
  border: true,
};

export const PlayLarge = Template.bind({});
PlayLarge.args = {
  icon: 'play',
  size: 'large',
  border: true,
};

export const PlayXLarge = Template.bind({});
PlayXLarge.args = {
  icon: 'play',
  size: 'xlarge',
  border: true,
};

export const PlaySmall = Template.bind({});
PlaySmall.args = {
  icon: 'play',
  size: 'small',
  border: true,
};

export const Pause = Template.bind({});
Pause.args = {
  icon: 'pause',
  size: 'medium',
  border: true,
};

export const Prev = Template.bind({});
Prev.args = {
  icon: 'backward-step',
  size: 'medium',
  border: false,
};

export const Next = Template.bind({});
Next.args = {
  icon: 'forward-step',
  size: 'medium',
  border: false,
};

export const Shuffle = Template.bind({});
Shuffle.args = {
  icon: 'shuffle',
  size: 'medium',
  border: false,
};
