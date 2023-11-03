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


When(/^acesso a pagina de adicionar colaborador$/, () => {
	colaboradoresPage.clickAddColaborador()
	colaboradoresPage.validateRedirectToAddColaboradorPage()
});

When(/^cadastro novo colaborador$/, () => {
	colaboradoresPage.novoColaboradorSubmit()
});

Then(/^cadastro é realizado com sucesso$/, () => {
	colaboradoresPage.validateCadastroSucessfullMessage()
	colaboradoresPage.validateCadastroSucessfullRedirect()
	colaboradoresPage.validateCadastroData()
});

When(/^acesso o menu de colaboradores$/, () => {
	colaboradoresPage.clickMenuColaboradores()
});

When(/^pesquiso colaborador$/, () => {
	colaboradoresPage.colaboradorSearchSubmit();
});

Then(/^os resultados da busca sao exibidos com sucesso$/, () => {
	colaboradoresPage.validateSearchResults()
	colaboradoresPage.validateCadastroData()
});
