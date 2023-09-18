import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',  // 替換為你的 API 位址
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  get(endpoint) {
    return apiClient.get(endpoint);
  },
  post(endpoint, data) {
    return apiClient.post(endpoint, data);
  },
  // 可以根據需求添加其他 HTTP 方法（例如 put、delete 等）
};
