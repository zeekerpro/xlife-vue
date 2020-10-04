<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import userService from '@/services/rest/userService';

export default {
	name: 'App',
	mounted(){
		// 设置用户登录信息
		userService.initSignState();
	},
}
</script>

<style>
</style>
