import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Head1 } from './Head1';

export default {
  title: 'Components/Texts/h1',
  component: Head1,
} as ComponentMeta<typeof Head1>;

const Template: ComponentStory<typeof Head1> = (args) => <Head1 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Hello World !',
};
