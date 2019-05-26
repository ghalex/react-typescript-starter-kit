const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const marked = require("marked");
const renderer = new marked.Renderer();

const paths = {
  appBuild: path.resolve(__dirname, "build"),
  appPublic: path.resolve(__dirname, "public"),
  appHtml: path.resolve(__dirname, "public/index.html"),
  appSrc: path.resolve(__dirname, "src"),
  appModules: path.resolve(__dirname, "node_modules"),
  appIndex: path.resolve(__dirname, "src/index.tsx")
};

module.exports = {
  entry: { main: paths.appIndex },
  output: {
    path: paths.appBuild,
    filename: "bundle.js",
    chunkFilename: "bundle.[name].js",
    publicPath: "/"
  },
  devtool: false,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      api: path.resolve(path.join(__dirname, "src/api")),
      components: path.resolve(path.join(__dirname, "src/components")),
      containers: path.resolve(path.join(__dirname, "src/containers")),
      ducks: path.resolve(path.join(__dirname, "src/ducks")),
      models: path.resolve(path.join(__dirname, "src/models")),
      pages: path.resolve(path.join(__dirname, "src/pages")),
      templates: path.resolve(path.join(__dirname, "src/templates")),
      types: path.resolve(path.join(__dirname, "src/types")),
      utils: path.resolve(path.join(__dirname, "src/utils")),
      "react-dom": "@hot-loader/react-dom"
    }
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader", options: { cacheDirectory: true } }]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.md$/,
        use: [
          { loader: "html-loader" },
          {
            loader: "markdown-loader",
            options: {
              pedantic: true,
              renderer
            }
          }
        ]
      }
    ]
  },
  plugins: [new webpack.NamedModulesPlugin(), new HtmlWebpackPlugin({ template: paths.appHtml })],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          enforce: true,
          chunks: "all"
        }
      }
    }
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    host: "localhost",
    stats: "minimal",
    hot: true
  }
};
