import XForm from './src/XForm.vue';
import XTextField from './src/XTextField.vue';

const formComponents = [XForm, XTextField];

formComponents.forEach(component => {
	component.install = (Vue) => {
		Vue.component(component.name, component);
	}
})

export {
	XForm,
	XTextField
};
