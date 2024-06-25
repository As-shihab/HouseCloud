import axios from "axios";
export const DB = axios.create({
    baseURL: 'http://localhost:2000/api/',
    timeout:1000,
    headers:{'access_token' : localStorage.getItem('access_token')}
})


// axios.defaults.headers.common['Authorization'] = localStorage.getItem('access_token');