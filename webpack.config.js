const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");

const template = fs
  .readFileSync("index.html", "utf-8")
  .replace('<script src="main.js"></script>', "");

module.exports = {
  entry: "./main.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.min.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: template,
      hash: true,
    }),
  ],
};
