/**
 * 事件防抖指令
 * <button v-debounce="{event: 'click', timeout: 1000, handler: Function() }">xxx</button>
 * https://github.com/zeekerpro/mind-note/blob/master/javascript/%E4%B8%89%E5%A4%A7%E6%A1%86%E6%9E%B6/vue/37.%E4%BA%8B%E4%BB%B6%E9%98%B2%E6%8A%96%E5%92%8C%E8%8A%82%E6%B5%81.md
 *
 */

/**
 * handler: 事件处理函数
 * timeout: 防抖等待时间
 */
function debounce(handler, timeout=1000){
	let timer = null;
	return function(){
		let args = arguments;
		if(timer) clearTimeout(timer);
		timer = setTimeout(() => {
			handler.apply(this, args);
			clearTimeout(timer);
		}, timeout);
	}
}

export default {
	name: 'debounce',
	value: {
		inserted: (el, binding, vnode, oldVnode) => {
			let {event, timeout, handler} = binding.value;
			el.addEventListener(event, debounce(handler, timeout));
		}
	}
}
