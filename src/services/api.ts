import axios from 'axios';

const api = axios.create({
  baseURL: 'http://copafilmes.azurewebsites.net'
});

export default api;
