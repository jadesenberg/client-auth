import axios from 'axios';
const API_URL = 'http://localhost:3090';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types.js';

export function signinUser({ email, password },history) {
    //redux thunk allows to return function instead of object
    return function(dispatch) { //way to connect to dispatch and reducers..
        console.log(email, password);
        axios.post(`${API_URL}/signin`, { email, password })
            .then(response => {
                
                dispatch({ type: AUTH_USER }); // connect to reducer

                localStorage.setItem('token', response.data.token); //save token to localstorage
                
                history.push('/feature');
            })
            .catch(() => {
                
                dispatch(authError('Bad login info')); // auth error messaging
            });
    }
}

export function signupUser({ email, password }, history){
    return function(dispatch) {
        axios.post(`${API_URL}/signup`, {email, password})
            .then(response => {
                dispatch({ type: AUTH_USER });

                localStorage.setItem('token', response.data.token);

                history.push('/feature');
            })
            .catch(({response}) => dispatch(authError(response.data.error)));
    }
}

export function authError(error) {
    
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {
    
    localStorage.removeItem('token');
    return { type: UNAUTH_USER }
}