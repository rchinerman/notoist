declare const module: {
  exports: any;
};

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/preset-create-react-app', '@storybook/addon-actions', '@storybook/addon-links'],
};
