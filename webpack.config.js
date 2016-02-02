var path = require("path");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: {
    rplay: "./App.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },

  devtool: "inline-source-map",

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        include: [
          path.join(__dirname, "src")
        ],
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /main\.scss$/,
        loaders: ["style", "css", "sass"],
        include: [
          path.join(__dirname, "src/stylesheets/main.scss")
        ]
      }
    ]
  },
  sassLoader: {
    includePath: [path.join(__dirname, "src/stylesheets")]
  }
};