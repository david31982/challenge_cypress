import { defineConfig } from 'cypress'



module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,  
  chromeWebSecurity: false,  
  retries: 0,
  e2e: {
      
    
    setupNodeEvents(on, config) {        
      
    },
    specPattern:
      ["cypress/integration/**/*.ts"],
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    baseUrl: 'https://demo.casino',  
  },
});
