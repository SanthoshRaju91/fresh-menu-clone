/*
* Core utility for ajax requests.
*/
import axios from 'axios';
import config from '../config';

const { endpoint } = config;

const request = (url, method = 'GET', payload = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      method,
      url: `${endpoint}${url}`,
      data: payload
    })
      .then(response => resolve(response))
      .catch(err => reject(err));
  });
};

/* Exposing the default request method. */
export default request;
