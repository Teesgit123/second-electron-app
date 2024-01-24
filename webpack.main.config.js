const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    // 1st - Specify development or production
    mode: 'development',

    // 2nd - Define entry point for the "main process"
    entry: './src/main/main.ts',

    // 3rd - Target the Electron main process
    target: 'electron-main',

    // 4th - Set externals to tell Webpack which modules not to bundle
    externals: [nodeExternals()],

    // 5th - Specify how to resolve modules
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx'],
    },

    // 6th - Add the source map
    devtool: 'source-map',

    // 7th - Define output directory and file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },

    // 8th - Configure rules for how different modules will get treated
    module: {
        rules: [
            // 9th - use ts-loader for TypeScript files
            {
                test: /\.ts$/,
                include: /src/,
                use: [{ loader: 'ts-loader'}],
            },
        ],
    },

    // 10th - Specify any Node.js options
    node: {
        __dirname: false,
        __filename: false,
    },
};