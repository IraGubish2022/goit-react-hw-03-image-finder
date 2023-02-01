import axios from 'axios';
const API_KEY = '32003539-849ebfc75c29bb32e3b9621c3';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchApiImages = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
