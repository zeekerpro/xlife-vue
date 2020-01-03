export default {
	path: 'signup',
	name: 'signup',
	component: () => {
		return import(/* webpackChunkName */"@/views/user/Signup");
	}
}
