export default {
	path: 'signin',
	name: 'signin',
	components: {
		default: () => {
			return import(/* webpackChunkName: "user" */"@/views/user/Signin");
		},
		viewer: () => {
			return import(/* webpackChunkName: "user" */"@/views/user/Signin");
		}
	} 
}
