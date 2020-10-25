import RestService from '@/services/rest/RestService.js';
import store from '@/store';
import router, {refreshRouterWith} from '@/router';
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
		switch(ret.status){
			case HttpStatusCodes.OK:
				break;
			case HttpStatusCodes.UNAUTHORIZED:
				throw Error("认证失败");
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
	async getRoutes(){
		const url = "/routes";
		try {
			let ret = await this.get({from: url});
			const asyncRoutes = PermissionUtil.resolveRoutes(ret.data);
			//后置添加404页面,防止刷新404, 考虑是否直接后端返回? todo
			asyncRoutes.push( { path: "*", name: "NotFound", component: () => import("@/views/404"), hidden: true }); 
			//更新router路由表
			store.dispatch("routes/refreshRouter", asyncRoutes);
		}catch(error){
			console.log(error);
		}
	}
	
}

export default new UserService();
