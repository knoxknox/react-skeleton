import axios from 'axios';

export const increment = (counter) => {
  return axios.get('/increment', { params: { counter } });
};

export const decrement = (counter) => {
  return axios.get('/decrement', { params: { counter } });
};
