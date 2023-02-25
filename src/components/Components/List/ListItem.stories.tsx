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
  item: {
    _id: '1',
    name: 'Moto',
    duration: 120,
    artist: {
      _id: '1',
      name: 'Alekos',
      cover: 'ok',
    },
    active: false,
    trackUrl: 'try',
  },
};

export const Active = Template.bind({});
Active.args = {
  item: {
    _id: '1',
    name: 'Moto',
    duration: 120,
    artist: {
      _id: '1',
      name: 'Alekos',
      cover: 'ok',
    },
    active: true,
    trackUrl: 'try',
  },
};
