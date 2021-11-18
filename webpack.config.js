const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  cache: { 
    type: 'filesystem',
  },
  entry: "./src/index",
  // stat: "verbose",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[chunkhash].js",
  },
  resolve: {
    extensions: [".js", ".css"],
  },
  resolveLoader: {
    // 告诉 webpack 该去那个目录下找 loader 模块
    modules: ['node_modules', path.resolve(__dirname, 'lib')]
  },
  module: {
    rules: [{
      test: /.(js|jsx)$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      use: ["babel-loader", "my-loader"]
    },
    {
      test: /.css$/,
      use: ["new-my-style-loader", "css-loader"]
    }],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: 'index.html' })
  ]
};
