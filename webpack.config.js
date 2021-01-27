const path = require('path');
// const Dotenv = require('dotenv-webpack');
// const dotenv = require('dotenv');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/app.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
	},
	output: {
		filename: '[name].main.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '',
	},
	resolve: {
		fallback: {
			path: false,
			fs: false,

		},
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader', 'sass'],
			},
			{
				test: /\.(html)$/i,
				use: ['html-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new HtmlWebpackPlugin({
			inject: true,
			template: 'src/temp.html',
			title: 'Check today\'s weather..',
			favicon: 'src/img/umbrella.svg',
		}),
		// new Dotenv({
		// 	silent: true, // hide any warnings
		// }),
		// new webpack.DefinePlugin({
		// 	'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
		// }),
		// new webpack.EnvironmentPlugin({
		// 	NODE_ENV: 'development',
		// }),
	],
};
