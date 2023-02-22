import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SimpleIcon } from './SimpleIcon';

export default {
  title: 'Core/Media/cover',
  component: SimpleIcon,
} as ComponentMeta<typeof SimpleIcon>;

const Template: ComponentStory<typeof SimpleIcon> = (args) => (
  <SimpleIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: 'play',
};
