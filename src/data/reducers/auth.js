import axios from 'axios';
import { URLDevelopment } from '../../helpers/URL';

// Types
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAIL = 'REGISTER_FAIL';

// initialState
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}
// Reducers
export default function(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case REGISTER_SUCCESS :
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        case REGISTER_FAIL :
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        default : return state;
    }
}

// Actions
export const register = ({name, email, password}) => async (dispatch) => {
    // config header for axiso
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const body = JSON.stringify({name, email, password});

    try {
        const res = await axios.post(`${URLDevelopment}/api/user/register`, body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch(error) {
        const errors = error.response.data.errors;
        if(errors) {
            errors.forEach(err => console.log(err.msg) );
        }
        dispatch({
            type: REGISTER_FAIL,
        })
    }
}