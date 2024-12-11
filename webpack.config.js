module.exports = (env, argv) => ({
  ...require('@wordpress/scripts/config/webpack.config.js'),
  module: {
    rules: [
      ...require('@wordpress/scripts/config/webpack.config.js').module.rules,
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'], // Add PostCSS loader
      },
    ],
  },
});
