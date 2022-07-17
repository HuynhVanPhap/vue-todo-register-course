import axios from 'axios'

export const axiosConfig: any = axios.create({
    baseURL: import.meta.env.VITE_API_URL
    // baseURL: process.env.API_URL // Muốn dùng được phải config bên vite.config.js
});

// export default axiosConfig;