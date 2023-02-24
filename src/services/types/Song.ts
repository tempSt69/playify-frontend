import { Artist } from './Artist';

export type Song = {
  _id: string;
  name: string;
  artist: Artist;
  trackUrl: string;
  duration: number;
};
