import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ControlsMenu } from './ControlsMenu';

export default {
  title: 'Components/Player/ControlMenu',
  component: ControlsMenu,
} as ComponentMeta<typeof ControlsMenu>;

const Template: ComponentStory<typeof ControlsMenu> = (args) => (
  <ControlsMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Playing = Template.bind({});
Playing.args = {
  playing: true,
};
