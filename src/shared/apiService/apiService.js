import axios from 'axios'; // 導入了 Axios

// Axios 實例: 配置基本設置、基礎url、headers
const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',  // 替換為你的 API 位址
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

// 定義了四個方法get/post/put/delete
// 導出 apiService 物件
export default {

  /**
   * get方法
   * @param {string} endpoint
   * @return Promise<AxiosResponse<any, any>>
   * */
  get(endpoint) {
    //endpoint:API的端點(baseUrl)
    return apiClient.get(endpoint);
  },

  /**
   * post方法
   * @param {string} endpoint
   * @param {object} data
   * @return Promise<AxiosResponse<any, any>>
   * */
  post(endpoint, data) {
    return apiClient.post(endpoint, data);
  },

  /**
   * put方法
   * @param {string} endpoint
   * @param {object} data
   * @return Promise<AxiosResponse<any, any>>
   * */
  put(endpoint,data) {
    return apiClient.post(endpoint, data);
  },

  /**
   * delete方法
   * @param {string} endpoint
   * @return Promise<AxiosResponse<any, any>>
   * */
  delete(endpoint) {
    return apiClient.delete(endpoint);
  }

  //Promise對象用於處理異步操作的結果

};
