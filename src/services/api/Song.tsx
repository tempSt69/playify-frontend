import axios from 'axios';
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

export const insertSong = async (
  song: Omit<Omit<Song, '_id'>, 'trackUrl'> & { file: File }
) => {
  const formData = new FormData();
  formData.append('name', song.name);
  formData.append('duration', song.duration.toString());
  formData.append('artist[_id]', song.artist._id);
  formData.append('artist[cover]', song.artist.cover);
  formData.append('artist[name]', song.artist.name);
  formData.append('song', song.file);
  console.log(formData);

  const response = await axios({
    method: 'post',
    url: `${import.meta.env.VITE_API_URL}${prefix}`,
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  if (response.status > 300) {
    throw new Error('Error posting data');
  }
  return response.status === 201;
};

export const createStreamUrl = (id: string): string => {
  return `${import.meta.env.VITE_API_URL}${prefix}${id}/stream`;
};
