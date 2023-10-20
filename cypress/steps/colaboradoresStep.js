import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


When(/^acesso o menu de colaboradores$/, () => {
	cy.get('span').contains('PIM').click()
});

Then(/^colaboradores são listados com sucesso$/, () => {
	cy.get('h5').contains('Employee Information').should('be.visible')
});
