module.exports = {
  module: {
    rules: [
      {
        exclude: [/[/\\\\]node_modules[/\\\\]/],
        include: /src/,
        test: /\.js$/,
        use: [
          {
            loader: `babel-loader?cacheDirectory=true`,
          },
          'stylelint-custom-processor-loader',
          {
            loader: 'eslint-loader',
            options: {
              quiet: true,
            },
          },
        ],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|svg|webp|ttf|woff|woff2)(\?.*)?$/,
        loader: require.resolve('file-loader'),
        query: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
}
