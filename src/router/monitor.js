/**
 * 判断当前页面是否需要登录
 *	1、页面加载进度条 => npm install -S nprogress
 *	2、验证登录信息，需要登录则返回登录页面 => 路由守卫
 */

import NProgress from "nprogress";
import store from "store";
import userService from "services/rest/userService";

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// 免登录白名单
const whiteList = ['/'];

export function monitor(router){

	router.beforeEach(async (to, from ,next) => {
		const isSigned = store.getters['user/isSigned'];
		NProgress.start();	
		if(isSigned){
			if(store.getters['routes/isInit']){
				// 已登陆
				next();
			}else{
				//	登录但未获取路由权限信息
				await userService.getRoutes();
				next({...to, replace: true});
			}
		}else{
			if(whiteList.indexOf(to.path) !== -1){
				next();
			}else{
				next('/');
			}
		}
	});

	router.afterEach((to, from ,next) => {
		NProgress.done();
	})

}
