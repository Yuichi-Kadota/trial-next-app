import axios from 'axios';

const api  = axios.create({
    baseURL: `http://localhost:3000/`,
    headers: {
    'Content-Type': 'application/json',
  },
});

const fetcher = url => api.get(url).then(res => res.data)
export default fetcher