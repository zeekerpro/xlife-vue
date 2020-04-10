import Vue from 'vue';
import Vuetify, {
	VForm,
	VTextField,
	VSnackbar,
	VList
} from 'vuetify/lib';

import { Ripple } from 'vuetify/lib/directives';

Vue.use(Vuetify, {
  components: {
		VForm,
		VTextField,
		VSnackbar,
		VList
  },
  directives: {
    Ripple,
  },
})


const opts = {
	theme: {
    dark: true
  }
}

export default new Vuetify({
  theme: {
    dark: true,
  },
})
