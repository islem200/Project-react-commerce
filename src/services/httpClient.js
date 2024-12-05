import axios from "axios";


// Base uRL for the backend API
const API_URL = "http://localhost:5000/api";
const httpClient = axios.create({
    baseURL: API_URL
});

//Request Interceptor ti include the token in the 'x-auth-token' header
httpClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if(token){
            config.headers['x-auth-token'] = token;
        }
        return config;
    },
    (error) =>{
        return Promise.reject(error);
    }
    );
    export default httpClient;
