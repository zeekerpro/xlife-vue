import router from "@/router";
import NProgress from "nprogress";

router.beforeEach((to, from ,next) => {
	NProgress.start();	
	console.log(to.path);
	console.log(from.path);
	next();
})
