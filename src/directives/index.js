import focus from './focus.js';

const directives = [focus];

export default {
	install: function(Vue){
		directives.forEach((directive) => {
			Vue.directive(directive.name, directive.value);
		});
	}
}
