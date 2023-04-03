const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  plugins: [require("@volar-plugins/vetur").default()],
});
