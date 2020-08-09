export default {
	path: 'detail/:id',
	name: 'userDetail',
	components: {
		default: () => {
			return import(/* webpackChunkName "user" */"@/views/user/Detail")
		}
	},
	meta: {
		auth: true
	}
}
