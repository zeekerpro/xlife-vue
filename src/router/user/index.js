import listRoute from "./list.js";
import detailRoute from "./detail.js";

export default {
	path: 'user',
	name: 'user',
	redirect: '/user/list',
	components: {
		default: () => {
			return import(/* webpackChunkName "user" */"@/components/base/renderRouterView") 
		}
		/*
		default: {
			render: h => h("router-view")
		}
		*/
	},
	children: [
		listRoute,
		detailRoute
	]
};
