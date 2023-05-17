const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  chromeWebSecurity: false,
  retries: 0,
  e2e: {
      
    
    setupNodeEvents(on, config) {        
      on('file:preprocessor', cucumber())      
    },
    specPattern:
      ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    baseUrl: 'https://comercioqa.novaventa.com.mx',  
  },
});
