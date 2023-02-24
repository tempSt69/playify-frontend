import axios from 'axios';
import { QueryKey } from 'react-query';
import { Song } from '../types/Song';

const prefix = 'song/';

function assertIsSong(song: any): asserts song is Song {
  if (!('name' in song)) {
    throw new Error('Not song');
  }
}

export const getAll = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}${prefix}`);
  if (!response.data) {
    throw new Error('Error fetching data');
  }
  const songs = await response.data;
  return songs;
};

export const search = async (searchString: string) => {
  let response;
  let songs;
  if (searchString.length > 1) {
    response = await axios.get(
      `${import.meta.env.VITE_API_URL}${prefix}search/${searchString}`
    );
    if (!response.data) {
      throw new Error('Error fetching data');
    }
    songs = await response.data;
  } else {
    songs = await getAll();
  }
  return songs;
};

export const streamUrl = (id: string): string => {
  return `${import.meta.env.VITE_API_URL}${prefix}${id}/stream`;
};