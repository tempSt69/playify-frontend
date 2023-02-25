import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputFile } from './InputFile';

export default {
  title: 'Core/Forms/Input/File',
  component: InputFile,
} as ComponentMeta<typeof InputFile>;

const Template: ComponentStory<typeof InputFile> = (args) => (
  <InputFile {...args} />
);

export const Default = Template.bind({});
Default.args = {};
