import constantRoutes from '@/router';

const state = {
	isInit: false,					// 动态路由是否完成初始化，默认为false
	routes: [],							
}

const mutations = {
	setRoutes: (state, routes) => {
		state.routes = routes 
		state.isInit = true;
	}
}

export default {
	namespaced: true,
	state,
	mutations
}
