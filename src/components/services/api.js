import axios from 'axios';

const carService = axios.create({
  baseURL: 'https://bestbooksbeckend.onrender.com/api',
});

export const getAllBook = async () => {
  const response = await carService.get('/books');
  return response.data;
};
