import fetch from './fetch'

/**
 * 登陆
 */

export const userLogin = data => fetch('user/login', data, 'POST');

/**
 * 退出
 */

export const userLogout = () => fetch('user/logout');

/**
 * 获取用户信息
 */

export const getUser = () => fetch('user/profile');