var path = require("path");

module.exports = {
  entry: ["./build/hello.ts", "./build/matrix.js" ],
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".js"]
  },
  module: {
    //use ts-loader for .ts-files
    rules: [{ test: /.ts$/, loader: "ts-loader" }]
  },
  //output of file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
