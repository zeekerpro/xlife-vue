import AbstractService from './AbstractService.js';
import store from '@/store';
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
			ret = await this.post(user, url);
			store.commit('user/setUserInfo', ret.data);
		} catch(error){
			ret = error.response;
		}
		return ret;
	}

	async signout(user){
		const url = "/signout";
		let ret = await this.post(user, url);
		store.commit('user/setToken', null);
		location.reload();
		return ret;
	}

	async signup(user){
		const url = "/signup";
		let ret = null;
		try {
			ret = await this.post(user, url);
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
