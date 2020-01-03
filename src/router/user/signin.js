export default {
	path: 'signin',
	name: 'signin',
	component: () => {
		return import(/* webpackChunkName: "user" */"@/views/user/Signin");
	}
}
