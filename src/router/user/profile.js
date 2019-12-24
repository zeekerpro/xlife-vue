export default {
	path: 'profile',
	name: 'profile',
	component: () => {
		return import(/* webpackChunkName: "user" */"@/views/user/Profile");
	},
	meta: {
		auth: true
	}
}
