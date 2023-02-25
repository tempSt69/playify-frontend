import axios from 'axios';

const prefix = 'artist/';

export const getAll = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}${prefix}`);
  if (!response.data) {
    throw new Error('Error fetching data');
  }
  const songs = await response.data;
  return songs;
};
