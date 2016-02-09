var path = require("path");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: {
    rplay: "./Videoplayer/App.js",
    ghCard: "./GithubCards/App.js",
    plural01: "./Pluralsight01/App.js",
    reactFlux: "./ReactFlux/js/main.js"
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
          path.join(__dirname, "src")
        ]
      }
    ]
  },
  sassLoader: {
    includePath: [path.join(__dirname, "src/Videoplayer/stylesheets")]
  }
};