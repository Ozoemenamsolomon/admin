const { action } = require("@storybook/addon-actions")

module.exports = {
  stories: ["../src/**/*.stories.js"],
  addons: [
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-links",
  ],
}
