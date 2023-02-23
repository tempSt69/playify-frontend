import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Player } from './Player';

export default {
  title: 'Components/Player/Player',
  component: Player,
} as ComponentMeta<typeof Player>;

const Template: ComponentStory<typeof Player> = (args) => <Player {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Playing = Template.bind({});
Playing.args = {
  cover: 'https://angartwork.anghcdn.co/webp/?id=1171884882&size=296',
  playing: true,
};
