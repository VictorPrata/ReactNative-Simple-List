import axios from 'axios';

export const client = axios.create({
  baseURL:
    'https://xqwsf2o3ei.execute-api.us-east-1.amazonaws.com/v1/api/bands/details/',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
  },
});

export const getBand = id =>
  client
    .get(`${id}`)
    .then(r => r.data)
    .catch(e => console.log(e, `${id}`));
