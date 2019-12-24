import Token from '@/utils/Token';
 
const state = {
	token: Token.get(),
	userInfo: {}
}

const mutations = {
	setToken: (state, token) => {
		state.token = token;
	},
	setUserInfo: (state, userInfo) => {
		state.userInfo = userInfo;
	}
}

const actions = {
	// 登录
	login: async (context, userInfo) => {
		// 1. send request
		// 2. set token
		// Token.set(token);
	},

	// 退出登录
	logout: async ({commit}, userInfo) => {
		/* todo
		let ret = await userService.logout(userInfo);
		*/
		commit('setToken', null);
		Token.remove();
	}
}

const getters = {
	userInfo: (state) => state.userInfo
}

export default {
	namespace: true,
	state,
	mutations,
	actions,
	getters
}
