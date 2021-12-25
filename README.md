# 基于 webpack4&react16+ 创建最简版本的版本，适合初学使用

## babelrc

```js
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

## webpack.config.js

```js
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
```

## app 入口

```js
/*** examples/src/app.js ***/
import React from 'react'
import { render } from 'react-dom'
import ReactDemo from '../../src'

const App = () => <ReactDemo />
render(<App />, document.getElementById('root'))
```

## 运行和打包

- 运行：npm run start
- 打包：npm run build

```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --inline --open --mode development",
    "build": "webpack --mode production"
  },
```
