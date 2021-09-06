const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',  // 入口文件
    output: {
        filename: '[name].[chunkhash].bundle.js',  // 定义输出文件名
        path: path.resolve(__dirname, 'dist')    // 定义输出文件夹dist路径
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': path.join(__dirname, './src')
        }
    },
    plugins: [
        new CleanWebpackPlugin({  // 每次打包前删除dist文件夹中的文件
            cleanOnceBeforeBuildPatterns: ['**/*', '!favicon.ico', '!lib/**'],//dist文件夹下的favicon.ico文件和lib文件夹下的东西都忽略不进行删除
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html', //指定html模板文件
            favicon: 'public/favicon.ico', //指定网站图标
            inject: 'head', //js插入的位置，插入head中也会自动补defer="defer"属性以保证在页面加载后执行js，如果考虑兼容性可改成body
            minify: { // 压缩html
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({ //css独立打包
            filename: "[name]-[contenthash].css"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"  //es6+转换es5
                }
            },
            {
                test: /\.(s[ac]ss|css)$/,  //sass/scss转换css
                use: [
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            // css 兼容性配置
                            postcssOptions: {
                                plugins: [
                                    [
                                        require('postcss-preset-env')()
                                    ]
                                ]
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|webp|jfif)$/, //图片打包
                use: [
                    {
                        loader: "url-loader",  //图片base64化
                        options: {
                            limit: 1024 * 100,  //小于100kb的图片会被base64
                            name: "assets/[name]_[hash:10].[ext]"
                        }
                    }
                ]
            },
        ]
    }
};
