/**
 * 判断当前页面是否需要登录
 *	1、页面加载进度条 => npm install -S nprogress
 *	2、验证登录信息，需要登录则返回登录页面 => 路由守卫
 */

import NProgress from "nprogress";

export function monitor(router){

	router.beforeEach((to, from ,next) => {
		console.log(`from ${from.path} to ${to.path}`);
		if(to.path != from.path){
			NProgress.start();	
		}
		next();
	});

	router.afterEach((to, from ,next) => {
		NProgress.done();
	})

}
