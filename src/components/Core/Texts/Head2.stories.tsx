import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Head2 } from './Head2';

export default {
  title: 'Core/Texts/h2',
  component: Head2,
} as ComponentMeta<typeof Head2>;

const Template: ComponentStory<typeof Head2> = (args) => <Head2 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Hello World title 2 !',
};
