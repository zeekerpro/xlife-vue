import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions, mapMutations, mapGetters} = createNamespacedHelpers('user')

export default {

	computed: {
	 ...mapGetters(['isSigned', 'userInfo']),
	},

}
