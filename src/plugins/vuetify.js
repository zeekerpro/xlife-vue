import Vue from 'vue';
import Vuetify, {
	VForm,
	VTextField,
	VSnackbar
} from 'vuetify/lib';

import { Ripple } from 'vuetify/lib/directives';

Vue.use(Vuetify, {
  components: {
		VForm,
		VTextField,
		VSnackbar
  },
  directives: {
    Ripple,
  },
})

const opts = {}

export default new Vuetify(opts)
