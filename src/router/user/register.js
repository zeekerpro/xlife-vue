export default {
	path: 'register',
	name: 'register',
	component: () => {
		return import(/* webpackChunkName */"@/views/user/Register");
	}
}
