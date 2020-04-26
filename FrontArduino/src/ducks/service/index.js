import axios from 'axios';

const Api = axios.create({
    baseURL: "http://0.0.0.0:3333"
});


export {Api as default, Api}