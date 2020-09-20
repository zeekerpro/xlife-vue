import StringUtil from 'utils/StringUtil';

/**
 * 权限设置工具类
 */
class PermissionUtil {
	/**
	 * 格式化路由数据
	 */
	static resolveRoutes(routerList){
		const routes = [];

		routerList.forEach(e => {
			let newRoute = {
				path: e.url,
				name: e.name
			}

			if(e.components) {
				const compnents = {};
				e.compnents.forEach((item, key) => {
					compnents[key] = () => { return import(`${item}`) }
				});
				newRoute = {...newRoute, compnents: compnents}
			}

			// 递归设置子路由
			if(e.children) {
				const children = PermissionUtil.resolveRoutes(e.children);
				newRoute = {...newRoute, children: children};
			}

			if(StringUtil.isBlank(e.redirect)){
				newRoute = {...newRoute, redirect: e.redirect};
			}

			if(e.menu){
				newRoute = {...newRoute, hidden: true};
			}

			if(StringUtil.isBlank(e.icon)){
				newRoute = {...newRoute, meta: {icon: e.icon}}
			}

			if(StringUtil.isBlank(e.title)){
				newRoute.meta.title = e.title
			}

			routes.push(newRoute);
		})

		return routes;
	}
}

export default PermissionUtil;
