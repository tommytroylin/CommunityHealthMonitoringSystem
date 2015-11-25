
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';


export function sendLoginRequest(data) {
    return {
        type: LOGIN_REQUEST,
        payload: {
            text: 'Redraw the heat map',
            data
        }
    };
}
export function loginFailed(data) {
    return {
        type: LOGIN_FAILURE,
        payload: {
            text: 'Data fetch failed',
            data
        },
        error:true
    };
}

export function loginSucceed(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            text: 'drawMap',
            data
        }
    };
}