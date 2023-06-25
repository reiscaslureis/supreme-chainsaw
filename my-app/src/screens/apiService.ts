import axios, { AxiosResponse } from 'axios';

// Define the API base URL
const BASE_URL = 'http://192.168.0.5:3000';

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: BASE_URL,
});

// Interceptor to handle responses
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      // Handle specific status codes
      switch (status) {
        case 200:
          // Handle bad request
          console.log('Bad Request:', data);
          break;
        case 401:
          // Handle unauthorized
          console.log('Unauthorized:', data);
          break;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
