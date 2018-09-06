const HtmlWebPackPlugin = require("html-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
let FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: "file-loader?name=/dist/icons/[name].[ext]"
      }
    ]
  },
  plugins: [
    htmlPlugin,
    new ErrorOverlayPlugin(),
    new FaviconsWebpackPlugin("./src/favicon.png")
  ]
};
