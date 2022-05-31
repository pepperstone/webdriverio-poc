const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-optional-chaining'],
    ['@babel/plugin-proposal-nullish-coalescing-operator'],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          react: require.resolve('react', {
            paths: [path.join(__dirname, './')],
          }),
          '^react-native$': require.resolve('react-native', {
            paths: [path.join(__dirname, './')],
          }),
          '^react-native/(.+)': ([, name]) =>
            require.resolve(`react-native/${name}`, {
              paths: [path.join(__dirname, './')],
            }),
          icons: ['./assets/icons'],
          logos: ['./assets/logos'],
          images: ['./assets/images'],
        },
        extensions: [
          '.ios.js',
          '.ios.ts',
          '.ios.tsx',
          '.android.js',
          '.android.ts',
          '.android.tsx',
          '.native.js',
          '.native.ts',
          '.native.tsx',
          '.js',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
