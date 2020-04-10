import Vue from "vue";
import Vuex from "vuex";
import user from './user';
import layout from './layout';
import routes from './routes';

Vue.use(Vuex);

const store = new Vuex.Store({
	// 严格模式，防止直接修改 state，由于深度对象比较会影响性能，所以推荐只在开发模式设为 true
	strict: process.env.MODE_ENV != 'production',
  state: {},
  mutations: {},
  actions: {},
  modules: {
		user,
		layout,
		routes
	}
});

export default store;
