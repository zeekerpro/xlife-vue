<template>
  <keep-alive v-if="keepAlive">
    <component
      :is="TargetComponent"
      v-bind="$attrs"
      v-on="$listeners"/>
  </keep-alive>
  <component
    v-else
    :is="TargetComponent"
    v-bind="$attrs"
    v-on="$listeners"/>
</template>


<script>
// 异步组件工厂函数: https://cn.vuejs.org/v2/guide/components-dynamic-async.html
let factory = (path, delay = 2000, timeout = 5000) => {
  return (resolve) => ({
    // 需要加载的组件 (应该是一个 `Promise` 对象)
    component: import(`@/${path}`),
    loading: { template: '<div style="height: 100%; width: 100%; display: table;"><div style="display: table-cell; vertical-align: middle; text-align: center;"><div>加载中</div></div></div>' },
    error: { template: '<div style="height: 100%; width: 100%; display: table;"><div style="display: table-cell; vertical-align: middle; text-align: center;"><div>加载错误</div></div></div>' },
    delay,
    timeout
  });
}

export default {
	name: "AsyncComponent",
	inheritAttrs: false,
	props: {
		path: {
			type: String,
			default: null
		},
		keepAlive: {
			type: Boolean,
			default: false
		},
		delay: {
			type: Number,
			default: 20
		},
		timeout: {
			type: Number,
			default: 2000
		}
	},
	computed: {
		TargetComponent(){
			if(this.path){
				return factory(this.path, this.delay, this.timeout);
			}
		}
	}
}
</script>
