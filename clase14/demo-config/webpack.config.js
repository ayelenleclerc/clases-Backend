const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  entry: "./index.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js",
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
    ],
  },
};
