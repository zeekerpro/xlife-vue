export default {
	path: 'list',
	name: 'list',
	components: {
		default: () => {
			return import(/* webpackChunkName: "user" */"@/views/user/List") 
		}
	},
	meta: {
		auth: true
	}
}
