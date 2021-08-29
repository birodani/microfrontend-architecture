const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "microfe1",
    publicPath: "auto"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "microfe1",
      library: { type: "var", name: "microfe1" },
      filename: "microfe1-remoteEntry.js",
      exposes: {
        './Module': './projects/micro-f1/src/app/app.module.ts',
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true }, 
        "@angular/common": { singleton: true, strictVersion: true }, 
        "@angular/router": { singleton: true, strictVersion: true }
      }
    }),
  ],
};