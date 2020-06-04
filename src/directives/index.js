import focus from './focus.js';
import debounce from './debounce.js';
import throttle from './throttle.js';

const directives = [focus, debounce, throttle];

export default {
	install: function(Vue){
		directives.forEach((directive) => {
			Vue.directive(directive.name, directive.value);
		});
	}
}
