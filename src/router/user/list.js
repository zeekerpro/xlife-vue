export default {
	path: 'list',
	name: 'userList',
	components: {
		default: () => {
			return import(/* webpackChunkName: "user" */"@/views/user/List") 
		}
	},
	meta: {
		auth: true
	}
}
