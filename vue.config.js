'use strict';
const path = require('path');
const defaultSettings = require('./src/settings');

function resolve(dir){
	return path.join(__dirname, dir);
}

let svgImgs =  resolve("src/assets/svg/imgs");

const title = defaultSettings.title;

module.exports = {
	lintOnSave: false,  // process.env.NODE_ENV === 'development', 关闭eslint
	publicPath: "/",
	runtimeCompiler: true,
	productionSourceMap: false,
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
	// webpack 基础配置
	configureWebpack: {
		name: title,
		// 解析模块的规则
		resolve: {
			// 配置路径别名
			alias: {
				'components':			resolve('./src/components'),
				'services':				resolve('./src/services'),
				'utils':					resolve('./src/utils'),
				'store':					resolve('./src/store'),
				'plugins':				resolve('./src/plugins'),
				'mixins':					resolve('./src/mixins'),
				'views':					resolve('./src/views'),
				'router':					resolve('./src/router')
			},
			// 配置省略文件的后缀名，可以简写后缀名，默认为js 和json
			extensions: ['js', 'json', 'jsx'],
			// modules: [] 告诉webpack解析模块是去找哪个目录 -> node_modules
		}
	},
	// webpack 高级链式配置，可以更细粒度的配置webpack
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

	  // 修复HMR 失效
    config.resolve.symlinks(true);

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
