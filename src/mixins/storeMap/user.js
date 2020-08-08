import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {

	computed: {
		...mapGetters('user', [
			'isSigned',
			'userInfo'
		]),
	},

}
