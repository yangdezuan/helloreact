const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './example/src/index.html'),
  filename: './index.html',
})

module.exports = {
  entry: path.join(__dirname, './example/src/app.js'),
  output: {
    path: path.join(__dirname, 'example/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    // https: true,
    // host: getNetworkIp(), // '0.0.0.0',
    host: '127.0.0.1',
    open: false,
    disableHostCheck: true,
    // compress: true,//是否启用gzip压缩
    port: 9001, //自定义配置端口号
    hot: true,
    // clientLogLevel: 'none', // 不要显示启动服务器日志信息
    // quiet: true, // 除了一些基本启动信息以外，其他内容都不要显示
    overlay: false, // 如果出错了，不要全屏提示~，只需要在日志中打印即可
    // openPage: 'index.html', //启动之后会自动打开/gamewall.html页面
  },
}
