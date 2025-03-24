import axios from 'axios';

const token = localStorage.getItem('token')
const instance = axios.create({
    baseURL: 'https://student-api.acpt.lk/api',
    // timeout: 1000,
    headers: {Authorization: `Bearer ${token}`}
  });

  export default instance;