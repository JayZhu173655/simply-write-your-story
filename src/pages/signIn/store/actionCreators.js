import {CHANGE_LOGIN_STATUS, CHANGE_SIGNIN_STATUS} from './constants';

export const changeLoginStatus = () => {
    return {
        type: CHANGE_LOGIN_STATUS,
        loginStatus: true
    };
};
export const changeSigninStatus = () => {
    return {
        type: CHANGE_SIGNIN_STATUS,
        loginStatus: false
    };
};