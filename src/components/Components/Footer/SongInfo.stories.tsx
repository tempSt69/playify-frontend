import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SongInfo } from './SongInfo';

export default {
  title: 'Components/Footer/SongInfo',
  component: SongInfo,
} as ComponentMeta<typeof SongInfo>;

const Template: ComponentStory<typeof SongInfo> = (args) => (
  <SongInfo {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Playing = Template.bind({});
Playing.args = {
  selectedSong: {
    name: 'Moto',
    cover: 'https://angartwork.anghcdn.co/webp/?id=1171884882&size=296',
  },
};
