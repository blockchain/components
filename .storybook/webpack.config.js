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
    ],
  },
}
