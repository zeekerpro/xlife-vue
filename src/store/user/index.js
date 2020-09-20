import Token from '@/utils/Token';
 
const state = {
	token: Token.get(),
	userInfo: null
}

const mutations = {
	setToken: (state, token) => {
		if(!token){
			Token.remove();	
			state.token = null;
		}else{
			state.token = token;
			Token.set(token);
		}
	},
	setUserInfo: (state, userInfo) => {
		state.userInfo = userInfo;
	}
}

const actions = {
	resetToken(context, arg){
		return new Promise(resolve => {
			context.commit('setToken', null);
			resolve();
		})
	}
}

const getters = {
	isSigned: (state) => !!state.token,
	userInfo: (state) => state.userInfo,
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
