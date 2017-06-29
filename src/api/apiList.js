import { get, post } from './axios'

export const userLogin = function (data, callFunction) {
    return post('user/login', data, callFunction);
};
export const userLogout = function (callFunction) {
    return post('user/logout', callFunction);
};
export const userRegister = function (data, callFunction) {
    return post('user/register', data, callFunction);
};