// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      config: path.resolve(__dirname, './config'),
      components: path.resolve(__dirname, './src/components'),
      reducers: path.resolve(__dirname, './src/components/utils/reducers'),
      src: path.resolve(__dirname, './src'),
      typings: path.resolve(__dirname, './typings'),
      utils: path.resolve(__dirname, './src/components/utils'),
    },
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
              libraryName: 'antd',
              libraryDirectory: 'lib',
              style: true,
            })],
          }),
        },
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              modifyVars: {
                'primary-color': '#1DA57A',
              },
              javascriptEnabled: true,
            },
          },
        ],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  plugins: [
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
};
