import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';

export default {
  title: 'Core/Forms/Input/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <option value='Alekos'>Alekos</option>
      <option value='Vacra'>Vacra</option>
    </>
  ),
};
