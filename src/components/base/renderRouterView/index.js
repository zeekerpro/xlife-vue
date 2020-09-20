/**
	使用该组件可以在router中将

		default: {
			render: h => h("router-view")
		}


	替换为：

    default: () => {
			return import("@/components/base/renderRouterView") 
		}


*/




import RenderRouterView from './src/RenderRouterView.vue';

RenderRouterView.install = function(Vue){
	Vue.component(RenderRouterView.name, RenderRouterView);
}

export default RenderRouterView;
