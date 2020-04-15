<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import userService from '@/services/userService';

export default {
	name: 'App',
	created(){
		// 初始化用户登录状态
		userService.initSignState();
	}
}
</script>

<style>
</style>
