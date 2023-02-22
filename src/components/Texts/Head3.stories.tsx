import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Head3 } from './Head3';

export default {
  title: 'Components/Texts/h3',
  component: Head3,
} as ComponentMeta<typeof Head3>;

const Template: ComponentStory<typeof Head3> = (args) => <Head3 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Hello World title 3 !',
};
