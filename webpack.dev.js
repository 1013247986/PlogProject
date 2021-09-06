const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: "inline-source-map", //控制台提示信息映射
    devServer: { //开发服务器
        port: "8090",
        proxy: { //反向代理，根据需求自行修改
            "/api": {
                target: "http://127.0.0.1:3001",
                pathRewrite: {
                    "^/api": ""
                  }
            }
        },
        //启动gzip压缩，可以让服务器更快，可以更快的看到效果
        compress:true,
        open: true,  //自动打开浏览器
        hot: true, //让webpackDevServer开启热更新功能
    },
    //如需热更新，开启下面代码
    plugins: [
       new webpack.HotModuleReplacementPlugin()
    ]
});