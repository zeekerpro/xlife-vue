import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// routes
import userRoutes from "./user";
import expenseRoutes from "./expense";
import blogRoutes from "./blog";

const routes = [
	{
		path: "/",
		name: "layouts",
		component: () => import("@/layouts/default"),
		children: [
			userRoutes
			/*
			expenseRoutes,
			blogRoutes
			*/
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
  routes
});

export default router;
