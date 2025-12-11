// frontend/cypress/e2e/critical_journeys.cy.ts

describe('Critical User Journeys', () => {
  beforeEach(() => {
    cy.visit('/'); // Assuming base URL is configured in cypress.config.ts
  });

  it('should allow a user to read textbook content', () => {
    // Example: Navigate to a book, module, and chapter
    cy.get('a[href*="/docs/intro"]').click(); // Click on 'Start Reading' or similar link
    // Further steps to navigate through content
    cy.contains('Congratulations').should('be.visible'); // Example assertion
  });

  it('should allow a user to login and signup', () => {
    // Example: Navigate to signup page
    cy.visit('/signup');
    cy.get('#name').type('Test User');
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password123');
    cy.get('button[type="submit"]').click();
    cy.contains('User registered successfully').should('be.visible'); // Assuming success message

    // Example: Navigate to login page
    cy.visit('/login');
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password123');
    cy.get('button[type="submit"]').click();
    cy.contains('Login successful').should('be.visible'); // Assuming success message
  });

  it('should allow a user to interact with the chatbot', () => {
    // Example: Open chatbot, send message, receive response
    cy.get('.chatbot-toggle-button').click(); // Assuming a button to open chatbot
    cy.get('.chat-input').type('Hello, chatbot!{enter}');
    cy.get('.chat-message').should('contain', 'Hello, chatbot!'); // Assert sent message
    cy.get('.chat-message-response').should('be.visible'); // Assert chatbot response
  });
});
