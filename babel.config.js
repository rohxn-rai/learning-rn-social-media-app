module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'], // Adjust this to match your project structure
        alias: {
          '@': '.',
        },
      },
    ],
  ],
};
