import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListItem } from './ListItem';

export default {
  title: 'Components/List/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => (
  <ListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Moto',
  duration: '2:00',
  active: false,
};
