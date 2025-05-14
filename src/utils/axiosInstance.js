import axios from 'axios';
import { Base_URL } from './apiPath';

const axiosInstance = axios.create({
    baseURL: Base_URL,
    timeout: 10000, // 10 seconds timeout
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    });

    //Request interceptor to add token to headers
    axiosInstance.interceptors.request.use(
        (config) => {
            const accesstoken = localStorage.getItem('token');
            if (accesstoken) {
                config.headers['Authorization'] = `Bearer ${accesstoken}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
        //Response interceptor to handle errors globally
        axiosInstance.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                if (error.response && error.response.status === 401) {
                    // Handle unauthorized access (e.g., redirect to login)
                    localStorage.removeItem('token');
                    window.location.href = '/login'; // Redirect to login page
                }else if(error.response.status===500){
                console.error("Server Error.Please try again later.")
                }
                else if(error.code==="ECONNABORTED"){
                    console.error("Request timed out. Please try again later.")
                }
                return Promise.reject(error);
            }
        );
    export default axiosInstance;