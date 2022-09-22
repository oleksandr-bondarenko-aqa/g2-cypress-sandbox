const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1360,
  viewportHeight: 768,
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
