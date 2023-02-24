import { createContext, RefObject } from 'react';
import { Song } from '../services/types/Song';

export type MusicPlayerContextType = {
  playing: boolean;
  audioRef?: RefObject<HTMLAudioElement>;
  progressBarRef?: RefObject<HTMLInputElement>;
  timeProgress?: number;
  song?: Song;
  pause?(): void;
  play?(): void;
  next?(): void;
  prev?(): void;
  selectSong?(song: Song): void;
};

export const MusicPlayerContext = createContext<MusicPlayerContextType>({
  playing: false,
});
