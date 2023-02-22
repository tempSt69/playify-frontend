import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextInput } from './TextInput';

export default {
  title: 'Components/Inputs/Text',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Find your path',
};
