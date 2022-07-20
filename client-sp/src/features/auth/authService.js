import httpStatus from 'http-status';
import axios from 'axios'

const REGISTER_URL = '/users';
const LOGIN_URL = '/users/auth/login';

const registerUser = async (userData) => {
    const response = await axios.post(REGISTER_URL, userData);
    if (response.statusCode === httpStatus.OK && response.data){
       // localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

const login = async (loginRequest) => {
    const response = await axios.post(LOGIN_URL,loginRequest);
    if (response.status === httpStatus.OK && response.data){
        console.log('setting data in local storage')
        localStorage.setItem('authdata', JSON.stringify(response.data));
    }
    return response.data;
}

const authService  = {
    registerUser,login
}
export default authService;

