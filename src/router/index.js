import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// routes
import userRoutes from "./user";
import expenseRoutes from "./expense";
import blogRoutes from "./blog";

// 路由守卫监控路由跳转
import {monitor} from "./monitor.js";

const staticRoutes = [
	{
		path: "/",
		name: "root",
		component: () => import("@/layouts/default"),
		children: [
			userRoutes,
			expenseRoutes,
			blogRoutes
		]
	},
	{
		path: "*",
		component: () => import("@/views/404")
	}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
	scrollBehavior: () => ({ y: 0 }),
  routes: staticRoutes
});

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

// 监视路由跳转
monitor(router);

export default router;
