/**
 * 判断当前页面是否需要登录
 *	1、页面加载进度条 => npm install -S nprogress
 *	2、验证登录信息，需要登录则返回登录页面 => 路由守卫
 */

import NProgress from "nprogress";
import store from "store";
import userService from "services/rest/userService";

// 免登录白名单
const whiteList = []

export function monitor(router){

	router.beforeEach(async (to, from ,next) => {
		if(to.path != from.path){
			NProgress.start();	
			let isSigned = store.getters['user/isSigned'];
			if(!isSigned){
				next("/");
			}else{
				next({...to, replace: true});
			}
		}else{
			// 刷新页面重新获取路由, 后端配置路由后立即生效
			if(!store.getters['routes/isInit']){
				await userService.getRoutes();
			}
		}
		next();
	});

	router.afterEach((to, from ,next) => {
		NProgress.done();
	})

}
