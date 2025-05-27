const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');




module.exports = {
  mode : "development",
  entry: './index.web.js',  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
      '@react-navigation/elements/lib/module/MaskedView': '@react-navigation/elements/lib/module/MaskedView.js'
    },
    extensions: ['.web.js', '.js','.json'], 
    fullySpecified: false,
    mainFields: ['browser', 'main'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
  include: [
    path.resolve(__dirname, 'index.web.js'), // your entry
    path.resolve(__dirname, 'src'), // your app code
    path.resolve(__dirname, 'node_modules/react-native-elements'),
    path.resolve(__dirname, 'node_modules/react-native-ratings'),
    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
    path.resolve(__dirname, 'node_modules/react-native-safe-area-context'),
    path.resolve(__dirname, 'node_modules/react-native-status-bar-height'),
    path.resolve(__dirname, 'node_modules/@rneui/base'),
    path.resolve(__dirname, 'node_modules/@rneui/themed'),
    path.resolve(__dirname, 'node_modules/react-native-reanimated/lib/module/component'),
    path.resolve(__dirname, 'node_modules/react-native-reanimated/lib/module/createAnimatedComponent'),
  ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['module:metro-react-native-babel-preset'],
        },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
       test: /\.ttf$/,
       type: 'asset/resource',
         include: [
             path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
       ],
       generator: {
       filename: 'fonts/[name][ext]',
      },
},
      {
        test: /\.ttf$/,
        loader: 'url-loader', // Inline fonts
        type: 'asset/resource',
        include: path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './Public/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      publicPath: '/',
    },   
    compress: true,
    historyApiFallback: true,
    port: 8080,
    hot: true,
  },
};
