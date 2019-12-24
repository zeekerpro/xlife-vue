/**
 * 发送http请求及拦截器设置
 */

import axios from 'axios';

// 1. create axios instance
// 每次请求都会创建一个实例，请求之间互不影响
const httpService = () => axios.create({
	baseUrl: process.env.VUE_APP_BASE_API,
	timeout: 5000,
	withCredentials: false // 禁止浏览器发送cookie
});

// 2. request interceptors 
httpService.interceptors.request.use( config => {
	return config;
}, error => {
	console.log(error);
});

// 3. response inspactor
httpService.interceptors.response.use( response => {
	return response;
}, error => {
	console.log(error);
});

export default httpService;
