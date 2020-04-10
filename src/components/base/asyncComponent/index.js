/**
 * 动态异步组件
 */

import AsyncComponent from './src/AsyncComponent';

AsyncComponent.install = function(Vue){
	Vue.component(AsyncComponent.name, AsyncComponent);
}

export default AsyncComponent;
