const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	// 1st - define the entry point to the app
	entry: './src/renderer/index.tsx',

	// 2nd - specify the output path and the filename
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},

	// 3rd - define how different file types get processed
	module: {
		// 4th - add rules for typescript and javascript files
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
			// 5th - add rules for CSS
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},

	// 6th - resolve file extensions
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
	},

	// 7th - configure any plugins
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],

	// 8th - add a source map for debugging
	devtool: 'source-map',

	// 9th - other configurations for development server
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
	},
};
