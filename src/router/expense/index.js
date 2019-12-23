export default {
	path: 'expense',
	name: 'expense',
	redirect: '/expense/list',
	component: {
		render: h => h("router-view")
	},
	children: [
	]
}
