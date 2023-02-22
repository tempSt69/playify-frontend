import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Cover } from './Cover';

export default {
  title: 'Core/Media/Cover',
  component: Cover,
} as ComponentMeta<typeof Cover>;

const Template: ComponentStory<typeof Cover> = (args) => <Cover {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://angartwork.anghcdn.co/webp/?id=1171884882&size=296',
};
