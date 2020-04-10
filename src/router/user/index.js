import signupRoute from "./signup.js";
import listRoute from "./list.js";
import profileRoute from "./profile.js";


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
		signupRoute,
		profileRoute,
		listRoute
	]
};
