import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchInput } from './SearchInput';

export default {
  title: 'Core/Inputs/Search',
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Find your path',
};
