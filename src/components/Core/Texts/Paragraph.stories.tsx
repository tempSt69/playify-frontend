import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paragraph } from './Paragraph';

export default {
  title: 'Core/Texts/paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'This is a paragraph !',
};
