import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './Header';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Components/Header/Header',
  component: Header,
  decorators: [withRouter],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
