import axios from 'axios'
import store from '../store'
import router from '../router'
import * as types from '../store/mutation-types'
import qs from 'qs'
import { baseUrl } from './env'
// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.baseURL = baseUrl;
// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'http://127.0.0.1/geneerp/api/web/v1/';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// 格式化发送数据
axios.defaults.transformRequest = [function (data) {
    return qs.stringify(data);
}]

axios.defaults.transformResponse = [function (data) {
    return JSON.parse(data);
}]

// 添加请求拦截器
axios.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        return config;

    },
    function (error) {
        return Promise.reject(error);
    }
);

// 添加响应拦截器
axios.interceptors.response.use(
    function (response) {
        // 对响应数据做点什么
        return response;
    },
    function (error) {
        if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else {
            console.log(error);
        }
        return Promise.reject(error);
    }
);

function get(url, params, callFunction) {
    new Promise((resolve, reject) => {
        axios.get(url, params)
            .then((data) => {
                return resolve(callFunction(data.data));
            }).catch(error => {
                console.log(error);
            })
    });
}

function post(url, params, callFunction) {
    new Promise((resolve, reject) => {
        axios.post(url, params)
            .then((data) => {
                return resolve(callFunction(data.data));
            }).catch(error => {
                console.log(error);
            })
    });
}

export { get, post };
