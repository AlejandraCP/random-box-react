const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

var DIST_DIR = path.resolve(__dirname, "public");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
  entry: SRC_DIR + "/index.js",
  output: {
    path: DIST_DIR + "/build/js",
    filename: "bundle.js",
    publicPath: "/build/js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["env", "react", "stage-2"]
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/build/js/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "public/build/js"),
    publicPath: "/build/js",
    host: "127.0.0.1",
    port: 8080
  }
};
