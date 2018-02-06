const path = require("path");
const include = path.resolve(__dirname, '../');

module.exports = {
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      { test: /\.js$/, loader: "source-map-loader", include, enforce: "pre" },
      { test: /\.css?$/, loaders: ['style', 'raw'], include },
      { test: /\.json?$/, loaders: ['json'], include },
      { test: /\.ts(x?)$/, loader: "babel-loader!ts-loader", include },
    ]
  },
  externals: {
    "jsdom": "window",
    "cheerio": "window",
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": "window",
    "react/addons": true,
  }
};
