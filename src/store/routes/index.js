import constantRoutes from '@/router';

const state = {
	routes: [],
	dynamicRoutes: []
}

const mutations = {
	SET_ROUTES: (state, dynamicRoutes) => {
		state.dynamicRoutes = dynamicRoutes;
		state.routes = constantRoutes.concat(dynamicRoutes);
	}
}

export default {
	namespaced: true,
	state,
	mutations
}
