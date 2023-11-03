Cypress.Commands.add('shouldRedirect', (endpoint) => {
    cy.url().should('include', endpoint);
})

Cypress.Commands.add('selectInputByLabel', (label) => {
    cy.contains('label', label).parent().next().find('input').should('be.visible');
})