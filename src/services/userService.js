import AbstractService from './AbstractService.js';
import store from '@/store';
import router from '@/router';
import Token from '@/utils/Token';
import * as HttpStatusCodes from '@/utils/HttpStatusCodes';

class UserService extends AbstractService {

	async users(){
		let data = null;
		const url = "/users";
		try {
			let ret = await this.get(null, url);
			data = ret.data;
		} catch(error){}finally {} 
		return data;
	}

	async signin(user){
		let ret = null;
		let url = "/signin";
		try {
			ret = await this.post({data: user, to: url});
			console.log(ret);
			store.commit('user/setUserInfo', ret.data);
		} catch(error){
			ret = error.response;
		}
		return ret;
	}

	async signout(){
		const url = `/signout`;
		let ret = await this.delete({from: url});
		store.commit('user/setToken', null);
		store.commit('user/setUserInfo', null);
		store.commit('layout/showViewer', 'views/user/Signin');
		router.push({name: 'root'});
		return ret;
	}

	async signup(user){
		const url = "/signup";
		let ret = null;
		try {
			ret = await this.post({data: user, to: url});
			store.commit('user/setUserInfo', ret.data);
		}catch(error){
			ret = error.response;
		}
		return ret;
	}

	/**
	 * 初始化用户登录状态
	 */
	async initSignState(){
		const url = "/users/current";
		try {
			let ret = await this.get(null, url);
			store.commit('user/setUserInfo', ret.data);
		}catch(error){}
	}
	
}

export default new UserService();
