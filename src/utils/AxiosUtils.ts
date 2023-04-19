import axios from 'axios';

export const axiosAdmin = () => {
  axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    'token'
  )}`;
  return axios;
};

export const defaultAxios = () => axios;
