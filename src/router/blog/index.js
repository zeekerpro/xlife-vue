export default {
	path: 'blog',
	name: 'blog',
	redirect: '/blog/list',
	component: {
		render: h => h("router-view")
	},
	children: []
}
