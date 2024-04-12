const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl: 'https://www.icecream.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
