module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel',['module-resolver', {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.json'],
          alias: {
            '@components': './src/app/components',
            '@globals': './src/app/globals',
            '@assets': './src/app/assets',
            '@utils': './src/app/utils',
            '@pages': './src/app/pages',
            '@http': './src/infra/http',
            '@services': './src/infra/services',
            '@model': './src/model',
            '@tools': './src/tools',
          },
        }]],
      },
    },
  };
};
