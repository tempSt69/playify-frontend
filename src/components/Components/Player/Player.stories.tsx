import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Player } from './Player';

export default {
  title: 'Components/Player/Player',
  component: Player,
} as ComponentMeta<typeof Player>;

const Template: ComponentStory<typeof Player> = (args) => <Player {...args} />;

export const Default = Template.bind({});
Default.args = {};
