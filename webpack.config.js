var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = function (env) {
	return {
		mode: env.development ? 'development' : (env.production ? 'production' : 'none'),
		entry: path.resolve(__dirname, 'src/main'),
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'js/bundle.min.js'
		},
		devServer: {
			contentBase: path.resolve(__dirname, 'dist'),
			host: 'localhost',
			port: '7000',
			inline: true,
			open: true
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/i,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['babel-preset-stage-3']
						}
					},
					include: path.resolve(__dirname, 'src'),
					exclude: path.resolve(__dirname, 'node_modules')
				},
				{
					test: /\.css$/i,
					use: ['vue-style-loader', 'css-loader', {
						loader: 'postcss-loader',
						options: {
							plugins: [require('autoprefixer')]
						}
					}],
					include: path.resolve(__dirname, 'src'),
					exclude: path.resolve(__dirname, 'node_modules')
				},
				{
					test: /\.(jpg|png|gif)$/i,
					use: {
						loader: 'file-loader',
						options: {
							outputPath: 'imgs'
						}
					}
				},
				{
					test: /\.vue$/i,
					use: 'vue-loader'
				}
			]
		},
		resolve: {
			extensions: ['.js', '.jsx', '.css', '.json', '.vue'],
			alias: {
				vue: 'vue/dist/vue.esm',
				utils: path.resolve(__dirname, 'src/utils'),
				store: path.resolve(__dirname, 'src/store'),
				views: path.resolve(__dirname, 'src/views'),
				router: path.resolve(__dirname, 'src/router'),
				assets: path.resolve(__dirname, 'src/assets'),
				common: path.resolve(__dirname, 'src/common'),
				components: path.resolve(__dirname, 'src/components')
			}
		},
		performance: {
			hints: false
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'index.html'),
				favicon: path.resolve(__dirname, 'static/favicon.ico'),
				filename: 'index.html',
				inject: true
			}),
			new VueLoaderPlugin()
		]
	}
}