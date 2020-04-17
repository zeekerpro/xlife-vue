import Validator  from './src/Validator.vue';

Validator.install = (Vue)  => {
	Vue.component(Validator.name, Validator);
}

export default Validator;
