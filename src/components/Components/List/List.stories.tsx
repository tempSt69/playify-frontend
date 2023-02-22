import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List } from './List';

export default {
  title: 'Components/List/List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      _id: '1',
      name: 'Moto',
      duration: '2:00',
      active: false,
      trackUrl: 'try',
    },
    {
      _id: '2',
      name: 'Moto',
      duration: '2:00',
      active: false,
      trackUrl: 'try',
    },
    {
      _id: '3',
      name: 'Moto',
      duration: '2:00',
      active: false,
      trackUrl: 'try',
    },
    {
      _id: '4',
      name: 'Moto',
      duration: '2:00',
      active: false,
      trackUrl: 'try',
    },
  ],
  activeId: '3',
};
