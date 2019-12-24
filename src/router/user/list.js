export default {
	path: 'list',
	name: 'list',
	component: () => { 
		return import(/* webpackChunkName: "user" */"@/views/user/List") 
	},
	meta: {
		auth: true
	}
}
