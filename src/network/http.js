/**
 * 发送http请求及拦截器设置 
 * */

import axios from 'axios';
import Token from '@/utils/Token';
import store from '@/store';

// 1. create axios instance
const httpService = axios.create({
	baseURL: process.env.VUE_APP_BASE_API,
	timeout: 5000,
	withCredentials: false // 禁止浏览器发送cookie
});

// 2. request interceptors 
httpService.interceptors.request.use( config => {
	// 提交本地登录token
	let auth_token = Token.get();
	config.headers["Authorization"] = auth_token;
	return config;
}, error => {
	return Promise.reject(error);
});

// 3. response inspactor
httpService.interceptors.response.use( response => {
	// 存储服务器端发布的token，每次请求会自动更新
	let authToken = response.headers.authorization;
	Token.set(authToken);
	return response;
}, error => {
	let response = error.response;
	if(response){
		switch(response.status){
			case 401: 
				// 显示登录窗口
				store.commit('layout/showViewer', 'views/user/Signin');
				break;
		}
	}

	return Promise.reject(error);
});

export default httpService;
