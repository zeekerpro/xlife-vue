import request from '@/network/http';

let userService = {
	signin: (user) => {
		return request({
			url: '/signin',
			method: 'POST',
			data: user
		});
	},
	signout: (user) => {
		return request({
			url: '/signout',
			method: 'POST',
			data: user
		})
	},
	register: (user) => {
		return request({
			url: 'register',
			method: 'POST',
			data: user
		})
	}
}

export default userService
