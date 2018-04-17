/**
 * webpack 4 新用法
 */

var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js', // 输入文件路径
  output: {
    filename: 'app.bundle.js'  // 打包输出文件，不用写“'./dist/app.bundle.js'”，直接写文件就可以自行生成./dist/app.bundle.js,
  },
  plugins: [new HtmlWebpackPlugin({
    title: "hello world",
    collapseWhitespace: true,
    template: './src/index.tmpl.html',
    filename: 'index.html',
    minify: {
      collapseWhitespace: true,
    },
    // hash: true,
  })],
  devServer: {
    //启动热重载
    hot:true,
    port: 9000,
    open: 'Google Chrome'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'a.png',
              outputPath: 'images/'
            }
          }
        ]
      },
    ]
  }
};

