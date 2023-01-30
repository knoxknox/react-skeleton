export default (axios) => {
  axios.defaults.headers.common['X-Client'] = 'axios';
  axios.defaults.headers.common.Accept = 'application/json';
};
