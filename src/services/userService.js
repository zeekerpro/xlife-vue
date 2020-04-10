import AbstractService from './AbstractService.js';

class UserService extends AbstractService {

	async users(){
		let data = null;
		let ret = await this.send({
			url: '/users',
			method: 'GET'
		});
		if(ret.status === 200){
			data = ret.data;
		}
		return data;
	}

	async signin(user){
		let ret = await this.send({
			url: '/signin',
			method: 'POST',
			data: user
		});

		return ret;
	}

	async signout(user){
		let ret = this.send({
			url: '/signout',
			method: 'POST',
			data: user
		});
		return ret;
	}

	async register(user){
		let ret = this.send({
			url: '/register',
			method: 'POST',
			data: user
		});
		return ret;
	}
	
}

export default UserService;
