module.exports = {
  webpack: (config, {defaultLoaders}) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: 'scoped',
          },
        },
      ],
    }, {
      test: /\.md$/,
      use: 'raw-loader',
    },
    )

    return config
  },
}
