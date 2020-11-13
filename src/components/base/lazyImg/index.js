import LazyImg from './src/LazyImg.vue';

LazyImg.install = function(Vue){
	Vue.component(LazyImg.name, LazyImg);
}

export default LazyImg;
