const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { 
    main: path.resolve(__dirname, "src", "main.js") 
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Curso",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};