const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },
  devServer: {
    allowedHosts: [
      "nas1119c6.4jxmc1dn692myza1.myfritz.net",
      "4jxmc1dn692myza1.myfritz.net",
    ],
  },
};
