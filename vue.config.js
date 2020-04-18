const path = require('path');

function resolve(dir){
	return path.join(__dirname, dir);
}

let svgImgs =  resolve("src/assets/svg/imgs");

module.exports = {
	lintOnSave: false, 
	publicPath: "/",
	runtimeCompiler: true,
	parallel: require('os').cpus().length > 1, // 并行构建
	css: {
		extract: true,
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

	},
	chainWebpack: (config) => {

		/*
		// config scss loader with fast-sass-loader
		config.module
      .rule('.scss')
      .use('fast-sass-loader')
      .loader('fast-sass-loader')
      .tap(options => {
        return options
    })
		*/

		// vue inspect --rule svg : vue-cli 项目中默认带了svg的loader，这里排除对指定目录的默认处理
		config.module.rule('svg').
						exclude.
						add(svgImgs).
						end();
				// 使用svg-sprite-loader
				config.module.rule('svgImage').
								test(/\.svg$/).
								include.
								add(svgImgs).
								end().
								use('svg-sprite-loader').
								loader('svg-sprite-loader').
								options({ symbolId: 'svg-[name]' }).
								end();
	}
}
