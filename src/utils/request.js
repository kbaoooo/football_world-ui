import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, params = {}) => {
    try {
        const response = await request.get(path, params);
        return response;
    } catch(err) {
        console.log(err);
    }
};

export default request;
