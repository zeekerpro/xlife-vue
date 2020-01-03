import loginRoute from "./signin.js";
import registerRoute from "./register.js";
import listRoute from "./list.js";
import profileRoute from "./profile.js";

export default {
	path: 'user',
	name: 'user',
	redirect: '/user/list',
	component: {
		render: h => h("router-view")
	},
	children: [
		loginRoute,
		registerRoute,
		profileRoute,
		listRoute
	]
};
