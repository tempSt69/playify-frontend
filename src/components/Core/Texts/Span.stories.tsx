import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Span } from './Span';

export default {
  title: 'Core/Texts/span',
  component: Span,
} as ComponentMeta<typeof Span>;

const Template: ComponentStory<typeof Span> = (args) => <Span {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a span !',
};
