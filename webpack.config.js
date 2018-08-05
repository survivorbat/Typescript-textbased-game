const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const NgrockWebpackPlugin = require('ngrock-webpack-plugin')
const PrettierPlugin = require("prettier-webpack-plugin")

module.exports = {
    entry: "./src/ts/index.ts",
    output: {
        filename: "static/js/[name].[hash].js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    
    mode: 'development',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".css", ".scss", ".html"]
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: ["awesome-typescript-loader"] },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            {
                test: /\.(s*)css$/,
                use: ExtractTextPlugin.extract({ 
                    fallback:'style-loader',
                    use:[
                        {loader: 'css-loader'},
                        {loader: 'sass-loader'}
                    ],
                })
            }
        ]
    },
    devServer: {
        headers: {'Access-Control-Allow-Origin': '*'},
        historyApiFallback: {
            index: 'http://localhost:8080/index.html'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            entry: "./src/index.html"
        }),
        new ExtractTextPlugin({filename:'static/css/[name].[hash].css'}),
        new CleanWebpackPlugin("dist"),
        new UglifyJsPlugin({
            uglifyOptions: {
                ecma: 8,
                output: {
                    comments: false,
                    beautify: false,
                },
                ie8: true,
                safari10: true,
            },
            sourceMap: true
        }),
        new NgrockWebpackPlugin(),
        new PrettierPlugin({
            printWidth: 80,               // Specify the length of line that the printer will wrap on.
            tabWidth: 2,                  // Specify the number of spaces per indentation-level.
            useTabs: false,               // Indent lines with tabs instead of spaces.
            semi: true,                   // Print semicolons at the ends of statements.
            encoding: 'utf-8',            // Which encoding scheme to use on files
            extensions: [ ".ts" ]  // Which file extensions to process
          })
    ]
}