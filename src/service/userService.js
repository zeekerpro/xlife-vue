import request from '@/network/http';

let userService = {
	login: (user) => {
		return request({
			url: '/user/login',
			method: 'POST',
			data: user
		});
	},

	logout: (user) => {
		return request({
			url: '/user/logout',
			method: 'POST',
			data: user
		})
	}

}
