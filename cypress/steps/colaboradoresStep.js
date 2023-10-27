import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import ColaboradoresPage from '../pages/colaboradoresPage';
const colaboradoresPage = new ColaboradoresPage


When(/^acesso o menu de colaboradores$/, () => {
	colaboradoresPage.intercepGetList()
	colaboradoresPage.clickMenuColaboradores()
	// colaboradoresPage.mockGetList()

});

Then(/^colaboradores são listados com sucesso$/, () => {
	colaboradoresPage.waitGetList()
	colaboradoresPage.validateLIstColaboradores()
});

When(/^acesso o menu de colaboradores com erro sistêmico genérico$/, () => {
	colaboradoresPage.mockErrorList()
	colaboradoresPage.clickMenuColaboradores()

});

Then(/^mensagem de erro é exibida com sucesso$/, () => {
	colaboradoresPage.validateTableBodyNotExist()
});