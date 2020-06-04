/**
 *  事件节流指令
 *  <button v-throttle="{event: 'click', timeout: 1000, handler: Function() }"> xxx </button>
 */

function throttle(handler, timeout=1000){
	let firstExecTime = Date.now();
	let preExecTime = firstExecTime;
	return function(){
		if(Date.now()  - preExecTime > timeout || firstExecTime == preExecTime){
			handler.apply(this, arguments);
			preExecTime = Date.now();
		}
	}
}


export default {
	name: 'throttle',
	value: {
		inserted: (el, binding, vnode, oldVnode) => {
			let {event, timeout, handler} = binding.value;
			el.addEventListener(event, throttle(handler, timeout));
		}
	}
}
