import { get, post } from './axios'

export const apiUserLogin = function (data, callFunction) {
    return post('user/login', data, callFunction);
};
export const apiUserChangePassword = function (data, callFunction) {
    return post('user/change-password', data, callFunction);
};
export const apiUserRegister = function (data, callFunction) {
    return post('user/register', data, callFunction);
};