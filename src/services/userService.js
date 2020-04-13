import AbstractService from './AbstractService.js';
import store from '@/store';
import Token from '@/utils/Token';
import * as HttpStatusCodes from '@/utils/HttpStatusCodes';

class UserService extends AbstractService {

	async users(){
		let data = null;
		try {
			let ret = await this.send({
				url: '/users',
				method: 'GET'
			});
			if(ret.status === HttpStatusCodes.OK){
				data = ret.data;
			}
		} catch(error){}finally {} 
		return data;
	}

	async signin(user){
		let ret = null;
		try {
			ret = await this.send({
				url: '/signin',
				method: 'POST',
				data: user
			});
		} catch(error){
			ret = error.response;
		}
		return ret;
	}

	async signout(user){
		let ret = this.send({
			url: '/signout',
			method: 'POST',
			data: user
		});
		store.commit('user/setToken', null);
		location.reload();
		return ret;
	}

	async signup(user){
		let ret = null;
		try {
			ret = await this.send({
				url: '/signup',
				method: 'POST',
				data: user
			});
		}catch(error){
			ret = error.response;
		}
		return ret;
	}
	
}

export default new UserService();
