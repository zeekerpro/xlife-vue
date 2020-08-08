import listRoute from "./list.js";

export default {
	path: 'user',
	name: 'user',
	redirect: '/user/list',
	components: {
		default: {
			render: h => h("router-view")
		}
	},
	children: [
		listRoute
	]
};
