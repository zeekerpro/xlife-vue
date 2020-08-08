import { mapState, mapActions, mapMutations } from 'vuex'

export default {
	computed: {

		...mapState('layout', {

			isShowViewer: (state) => {
				return state.isShowViewer;
			},

			viewerComponent: (state) => {
				return state.viewerComponent;
			},

		})

	},

	methods: {

		...mapMutations('layout',[
			'hideViewer',
			'showViewer'
		]),

	}
}
