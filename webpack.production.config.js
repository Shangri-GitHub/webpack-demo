/**
 * Created by shangri-la on 16/04/2018.
 */
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin'); //引入清除文件插件


module.exports = {
  mode: 'development',
  devtool: "source-map", //配置生成 Source Maps 的选项
  entry: __dirname + "/src/main.js", //入口文件路径
  output: {
    path: __dirname + "/build/", //存放打包后文件的地方路径
    filename: "bundle.js" //打包后的文件名
  },

  devServer: {
    // host:'0.0.0.0',
    contentBase: "./build",
    port: "9000",
    // hot:true,
    // quiet:true, // 第一次编译同,第二次编译什么都不输出
    compress: true,//JS，CSS资源的压缩率
    inline: true, //当源文件改变时会自动刷新页面.
    historyApiFallback: true,//在开发单页应用时非常有用，它依赖于 HTML5 history API，如果设置为 true，所有的跳转将指向 index.html.
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/, //编译打包时需要排除 node_modules 文件夹
      loader: "babel-loader"
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader"
      ]
    }, /* {
     test: /\.css$/,
     loader: 'style-loader!css-loader' //跟前面相比就在后面加上了 !postcss-loader
     },{
     test: /\.css$/,
     use: ExtractTextPlugin.extract({
     fallback: "style-loader",
     use: "css-loader?modules!postcss-loader"
     })
     }*/]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),//实例化，参数为目录
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      // chunkFilename: "[id].css"
    }),
    new webpack.BannerPlugin("Copyright Flying Unicorns inc."),//在这个数组中new一个实例就可以了,版权
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.tmpl.html" //new一个插件的实例，并传入相关的参数
    }),
    new webpack.HotModuleReplacementPlugin(), //热加载插件
    // new webpack.optimize.minimize(),// 压缩文件
    // new ExtractTextPlugin("style.css")
  ]


}