import Token from '@/utils/Token';
import UserService from "@/services/userService" 

const userService = new UserService();
 
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
	signin: async (context, userInfo) => {
		// 1. send request
		let ret = await userService.signin(userInfo);
		return ret;
	},

	// 退出登录
	signout: async ({commit}, userInfo) => {
		/* todo
		let ret = await userService.logout(userInfo);
		*/
		commit('setToken', null);
		Token.remove();
	}
}

const getters = {
	userInfo: (state) => state.userInfo,
	isSigned: (state) => !!state.token
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
