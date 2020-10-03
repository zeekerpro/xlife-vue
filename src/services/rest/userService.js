import RestService from '@/services/rest/RestService.js';
import store from '@/store';
import router from '@/router';
import Token from '@/utils/Token';
import PermissionUtil  from '@/utils/PermissionUtil';
import * as HttpStatusCodes from '@/utils/HttpStatusCodes';

class UserService extends RestService{

	async users(){
		let data = null;
		const url = "/users";
		try {
			let ret = await this.get({from: url});
			data = ret.data;
		} catch(error){}finally {} 
		return data;
	}

	async signin(user){
		let ret = null;
		let url = "/signin";
		try {
			ret = await this.post({data: user, to: url});
			store.commit('user/setUserInfo', ret.data);
		} catch(error){
			ret = error.response;
		}
		return ret;
	}

	async signout(){
		const url = `/signout`;
		let ret = await this.delete({from: url});
		store.commit('user/setToken', null);
		store.commit('user/setUserInfo', null);
		store.commit('layout/showViewer', 'views/user/Signin');
		router.push({name: 'root'});
		return ret;
	}

	async signup(user){
		const url = "/signup";
		let ret = null;
		try {
			ret = await this.post({data: user, to: url});
			store.commit('user/setUserInfo', ret.data);
		}catch(error){
			ret = error.response;
		}
		return ret;
	}

	/**
	 * 初始化用户登录状态
	 */
	async initSignState(){
		const url = "/profile";
		try {
			let ret = await this.get({from: url});
			store.commit('user/setUserInfo', ret.data);
		}catch(error){
			console.log(error);
		}
	}

	/**
	 *	获取用户权限，设置路由
	 */
	async getPermission(){
		const url = "/routes";
		try {
			let ret = await this.get({from: url});
			const asyncRoutes = PermissionUtil.resolveRoutes(ret.data);
			// 1. 后置添加404页面,防止刷新404, 考虑是否直接后端返回? todo
			asyncRoutes.push({ path: "*", name: "NotFound", redirect: "/404", hidden: true })
			// 2. 路由数据存储到vuex
			store.commit('routes/setRoutes');
			// 3.	动态路由添加到路由器
			router.addRoutes(asyncRoutes);
			router.options.routes = asyncRoutes;
		}catch(error){
			console.log(error);
		}
	}
	
}

export default new UserService();
