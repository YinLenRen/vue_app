const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry:'./main.js',
    output:{
        path:__dirname,
        filename:'bundle.js',
    },
    resolve: {			 			        // 其他的配置选项
        alias: {
          'vue': 'vue/dist/vue.js'	// vue.js文件路径配置
        }
      },
      devServer: {
        historyApiFallback: true	  // 开启服务器对history模式支持
      },
      module: {
        rules: [				          	// 模块规则
          {
            test: /\.vue$/,
            use: 'vue-loader'
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
          },
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          },
          {
            test: /\.(jpg|png|gif|bmp|jpeg)$/,
            use: 'url-loader'
          },
          {
            test: /\.(ttf|eot|svg|woff|woff2)$/,
            use: 'url-loader'
          }      
          // 在此处可以添加更多rules
        ]
      }, 
      plugins:[
          new htmlWebpackPlugin({
              template:'index.html' //为index.html自动引入打包好的bundle.js
          }),
          new VueLoaderPlugin()
      ]
}