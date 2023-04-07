import { Artist } from './Artist';

export type Song = {
  id: string;
  name: string;
  artist: Artist;
  trackUrl: string;
  duration: number;
};
