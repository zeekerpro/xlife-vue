import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// routes
import userRoutes from "./user";
import expenseRoutes from "./expense";
import blogRoutes from "./blog";

// 路由守卫监控路由跳转
import {monitor} from "./monitor.js";

const routerConfig = {
	mode: "history",
	base: process.env.BASE_URL,
	scrollBehavior: () => ({ y: 0 })
}

const staticRoutes = [
	{
		path: "/",
		name: "root",
		component: () => import("@/layouts/default"),
		// children: [ //userRoutes, //expenseRoutes, //blogRoutes ]
	}
];

function createRouter () {
	return new VueRouter({
		...routerConfig,
		routes: staticRoutes
	});
}

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

// 使用全新的路由表更新路由器
function refreshRouterWith(routes){
	const newRouter = new VueRouter(routerConfig) ;
	router.matcher = newRouter.matcher;
	router.addRoutes(routes);
	router.options.routes = routes;
}

const router = createRouter();

// 监视路由跳转
monitor(router);

export default router;
export {resetRouter, refreshRouterWith}
