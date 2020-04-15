const focus = function(el, autofocus){
	if(autofocus){
		el.focus();
	}
}

export default {
	name: 'focus',
	value: {
		inserted: function (el, binding) {
			focus(el, binding.value);
		}
	}
}
