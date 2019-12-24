export default {
	path: 'login',
	name: 'login',
	component: () => {
		return import(/* webpackChunkName: "user" */"@/views/user/Login");
	}
}
