import axios from 'axios';


const api  = axios.create({
    baseURL: `http://localhost:3000/`,
    headers: {
    'Content-Type': 'application/json',
  },
});

const getClient = url => api.get(url).then(res => res.data)
const postClient = (url,req) => api.post(url,req).then(res => res.data)
export {getClient,postClient}