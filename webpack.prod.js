const { merge } = require('webpack-merge'); //引入配置文件合并工具
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 每次打包删除掉dist包
const common = require('./webpack.common.js'); //引入公共配置

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],//css压缩混稀
        minimizer: [new TerserJSPlugin({
            terserOptions: {
                output: {
                    comments: false, // 打包的时候去掉注释
                }
            }
        }), new OptimizeCSSAssetsPlugin({})]//js压缩混稀
    }
});