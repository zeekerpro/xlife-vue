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
				path: e.route_path,
				name: e.name
			}

			if(e.components) {
				const components= {};
				e.components.forEach((item) => {
					let viewName = item.view_name;
					let viewPath = item.url;
					let webpackChunkName = item.webpack_chunk_name;
					components[viewName] = () => { 
						return import(`@/${viewPath}`) 
					}
				});
				newRoute = {...newRoute, components: components}
			}

			// redirect
			if(e.redirect){
				newRoute = {...newRoute, redirect: e.redirect.path};
			}

			/*
			if(e.menu){
				newRoute = {...newRoute, hidden: true};
			}
			*/

		 /*
			if(StringUtil.isBlank(e.icon)){
				newRoute = {...newRoute, meta: {icon: e.icon}}
			}
			*/

			// 递归设置子路由
			if(e.children) {
				const children = PermissionUtil.resolveRoutes(e.children);
				newRoute = {...newRoute, children: children};
			}

			routes.push(newRoute);
		})

		return routes;
	}

}

export default PermissionUtil;
