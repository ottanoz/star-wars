import axios from 'axios';

const swapi = axios.create({
  baseURL: 'https://swapi.dev/api/',
  timeout: 10000,
});

export default swapi;
