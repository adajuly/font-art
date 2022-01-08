const path = require("path");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const TerserPlugin = require("terser-webpack-plugin");
const isDevlopment = process.env.NODE_ENV === "development";

const commConfig = {
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: isDevlopment ? "/dist/" : "./",
    filename: "font-art.js",
    library: "font-art",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.sass$/,
        use: ["vue-style-loader", "css-loader", "sass-loader?indentedSyntax"],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            scss: ["vue-style-loader", "css-loader", "sass-loader"],
            sass: [
              "vue-style-loader",
              "css-loader",
              "sass-loader?indentedSyntax",
            ],
          },
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
    extensions: ["*", ".js", ".vue", ".json"],
  },
  devServer: {
    historyApiFallback: true,
  },
  performance: {
    hints: false,
  },
};
module.exports = merge(
  commConfig,
  isDevlopment
    ? {
      entry: "./src/main.js",
      plugins: [new VueLoaderPlugin()],
      devtool: "eval",
    }
    : {
      entry: "./index.js",
      devtool: "source-map",
      plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
          "process.env": {
            NODE_ENV: '"production"',
          },
        }),
        new webpack.LoaderOptionsPlugin({
          minimize: true,
        }),
      ],
      optimization: {
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              parse: {
                ecma: 8,
              },
              compress: {
                ecma: 5,
                warnings: false,
                comparisons: false,
                inline: 2,
                drop_console: !isDevlopment,
                drop_debugger: !isDevlopment,
                pure_funcs: ["console.log"],
              },
              mangle: {
                safari10: true,
              },
              output: {
                ecma: 5,
                comments: false,
                ascii_only: true,
              },
            },
            parallel: true,
          }),
        ],
      },
    }
);
