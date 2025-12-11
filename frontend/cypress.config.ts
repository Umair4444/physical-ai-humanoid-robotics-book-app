import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000', // Assuming Docusaurus runs on port 3000
    specPattern: 'tests/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});
