module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      development: {
        plugins: ['react-native-paper/babel',['module-resolver', {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.json'],
          alias: {
            '@pages': './src/app/pages',
            '@utils': './src/app/utils',
            '@routes': './src/app/routes',
            '@global': './src/app/global',
            '@assets': './src/app/assets',
            '@components': './src/app/components',
            '@providers': './src/app/providers',
            '@services': './src/infra/services',
            '@http': './src/infra/http',
            '@model': './src/model',
            '@tools': './src/tools',
          },
        }]],
      },
    },
  };
};
