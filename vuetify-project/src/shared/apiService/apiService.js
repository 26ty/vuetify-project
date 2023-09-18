import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',  // 替換為你的 API 位址
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  // get方法
  get(endpoint) {
    return apiClient.get(endpoint);
  },
  // post方法
  post(endpoint, data) {
    return apiClient.post(endpoint, data);
  },
  // put方法
  put(endpoint,data) {
    return apiClient.post(endpoint, data);
  },
  // delete方法
  delete(endpoint) {
    return apiClient.delete(endpoint);
  }
};
