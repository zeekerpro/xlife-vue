module.exports = {
	lintOnSave: false, 
	publicPath: "/",
	css: {
		loaderOptions: {
			scss: {
				prependData: `
					@import "@/assets/styles/app.scss";
				`
			}
		}
	},
	devServer: {
		port: 8080,
		/*
		proxy: { // 配置跨域
      '/api': {
        target: 'localhost:3000', // 源地址
        changeOrigin: true, // 改变源
				ws: false, // 是否代理websockets
        pathRewrite: {
          '^/api': ''
        }
      }
    }
		*/

	}
}
