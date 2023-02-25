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
    },
    {
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
    },
    {
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
    },
    {
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
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const DefaultWithOneActive = Template.bind({});
DefaultWithOneActive.args = {
  items: [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
  ],
};
