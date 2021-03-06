import axios from 'axios'
import store from '../store'
import router from '../router'
import * as types from '../store/mutation-types'
import qs from 'qs'
import { baseUrl } from './env'
// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = baseUrl;
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
        alert('request1');
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
                // 意外错误直接通过回调函数返回，回调函数会判断处理错误结果
                return resolve(callFunction(error));
            })
    });
}

function post(url, params, callFunction) {
    new Promise((resolve, reject) => {
        axios.post(url, params)
            .then((data) => {
                return resolve(callFunction(data.data));
            }).catch(error => {
                // 意外错误直接通过回调函数返回，回调函数会判断处理错误结果
                return resolve(callFunction(error));
            })
    });
}

export { get, post };
