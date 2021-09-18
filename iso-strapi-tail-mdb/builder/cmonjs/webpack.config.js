const webpack = require('webpack');   

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader',
         ]
       }
    ]
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ] 
};