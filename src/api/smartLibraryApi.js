import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

const smartLibraryApi = axios.create({
    baseURL: VITE_API_URL
});

smartLibraryApi.interceptors.request.use( config => {

    const token = localStorage.getItem('token');
    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
});

export default smartLibraryApi;