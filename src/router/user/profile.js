export default {
	path: 'profile',
	name: 'profile',
	component: () => {
		return import("@/views/user/Profile");
	},
	meta: {
		auth: true
	}
}
