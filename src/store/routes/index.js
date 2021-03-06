import {refreshRouterWith} from "router";
 
const state = {
	isInit: false,					// 动态路由是否完成初始化，默认为false
	routes: null,							
}

const mutations = {
	setRoutes: (state, routes) => {
		state.routes = JSON.parse(JSON.stringify(routes)); 
		state.isInit = true;
	}
}

const actions = {
	refreshRouter({commit}, routes){
		commit('setRoutes', routes);
		refreshRouterWith(routes);
	}
}

const getters = {
	isInit: (state) => state.isInit,
	routes: (state) => state.routes,
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
