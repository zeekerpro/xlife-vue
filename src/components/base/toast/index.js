/**
 * example :
 * Vue.property.$toast = showToast
 * showToast({
 *	text: '显示文字',
 *	duration: 1500, // 持续时长
 *	mode: 'warning' //  primary, warning
 * })
 *
 */

import Vue from 'vue';
import Toast from './src/Toast';

/**
 * https://cn.vuejs.org/v2/api/#Vue-extend
 * 返回一个实例构造器
 */
const ToastConstructor = Vue.extend(Toast);

/**
 * 定义显示toast函数
 * 参数为： 文本， 时间（默认时间为2s）
 */
function showToast(options = {text: '', duration: 2000, mode: "primary"}){
	// 1. 实例化一个 toast
	let {text, duration, mode} = options;
	const toast = new ToastConstructor({
		data(){
			return {
				text: text,
				show: true,
				fade: true,
				mode: mode || "primary"
			}
		}
	});

	// 2. 渲染到页面中
	toast.$mount();
	document.body.appendChild(toast.$el);

	// 3. 定时消失
	const p = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			toast.fade = false;
			resolve();
		}, duration + 1000);
	});

	// 4. 因为淡出时间持续1s，所以在1s后删除元素
	(async () => {
		await p();
		setTimeout(() => {
			toast.show=false;
		}, 1000);
	})()
}

Toast.install = function(Vue){
	Vue.prototype.$toast = showToast;
}

export default Toast; 
