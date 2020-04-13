import Token from '@/utils/Token';
 
const state = {
	token: Token.get(),
	userInfo: {}
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
