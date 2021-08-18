module.exports = function(api) {

  if (api.env("production")) {
    return {
      "presets": ["babel-preset-expo"],
      "plugins": [
        "transform-remove-console"
      ]
    }
  }
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
