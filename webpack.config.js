var path = require('path');

var config = {
  entry: {
    app: [
      path.resolve(__dirname, 'app/index.js')
    ]
  },
  resolve:{
    modules: ['app', 'node_modules'],
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },{
      test: /\.s?css$/,
      loader: 'style-loader!css-loader!sass-loader'
    },
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff"
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }]
  }
};

module.exports = config;
