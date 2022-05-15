const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const  MiniCssExtractPlugin =require("mini-css-extract-plugin")

module.exports = {                           
  entry: {
      popup:["regenerator-runtime/runtime.js",'./src/popup.jsx'],
      arbbot:["regenerator-runtime/runtime.js","./src/arbbot.jsx"]
    },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'[name].js',
  },
 // mode: 'development',
 plugins: [
  new HtmlWebpackPlugin({
     template:"./src/popup.html",
     filename:"popup.html"
}),
new HtmlWebpackPlugin({
  template:"./src/arbbot.html",
  filename:"arbbot.html"
}),

new MiniCssExtractPlugin({
filename:"[name].css",

}),

new CopyPlugin({
patterns: [
  { from:"public"},
  {from:"src/images/*.png", to:"[name].[ext]"}

]}),
],
  module: {
    rules: [{
     test: /\.(js|jsx)$/, 
     exclude:/node_modules/,
     use: {
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env","@babel/preset-react"]
        }
      }
},
   {
      test:/\.css$/,
      use:[
        MiniCssExtractPlugin.loader,
        {
            loader :"css-loader",
            options:{
              importLoaders:1
            }
        },
        {
          loader :"postcss-loader",
          options:{
           
            postcssOptions: {
              plugins:[
                require("tailwindcss"),
                require("autoprefixer")
             ]
            }
           
          }
        }
    ]
  },
 
  {
     test: /\.(png|svg|jpg|jpeg|gif)$/i,
     type: 'asset/resource',
  },
 
],
  },
 
};