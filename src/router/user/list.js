export default {
	path: 'list',
	name: 'list',
	component: () => { 
		return import("@/views/user/List") 
	},
	meta: {
		auth: true
	}
}
