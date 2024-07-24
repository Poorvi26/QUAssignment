// cypress.config.js

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://gorest.co.in/public/v2',
    env: {
      GOREST_API_TOKEN: '8edd1bec3183207a5104c0927109b68b67330b730597867529f75bb22c020fb7', 
    },
  },
});
