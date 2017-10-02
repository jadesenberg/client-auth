import axios from 'axios';
const API_URL = 'http://localhost:3090';
const { AUTH_USER } = './types.js';

export function signinUser({ email, password },history) {
    //redux thunk allows to return function instead of object
    return function(dispatch) { //way to connect to dispatch and reducers..
        console.log(email, password);
        axios.post(`${API_URL}/signin`, { email, password })
            .then(response => {
                console.log("haha");
                dispatch({ type: AUTH_USER });
                history.push('/feature');
            })
            .catch(() => {

            });
    }
}