import signinRoute from "./signin.js";
import signupRoute from "./signup.js";
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
		signinRoute,
		signupRoute,
		profileRoute,
		listRoute
	]
};
