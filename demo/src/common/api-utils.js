import axios from 'axios';

export const getRandomImageApi = (id) => {
  return axios.get(`https://picsum.photos/id/${id}/info`);
};
