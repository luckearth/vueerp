import { get, post } from './axios'

export const apiUserLogin = function (data, callFunction) {
    return post('user/login', data, callFunction);
};
export const apiUserRegister = function (data, callFunction) {
    return post('user/register', data, callFunction);
};