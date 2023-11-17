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

// CADASTRO
When(/^acesso o menu de colaboradores$/, () => {
	colaboradoresPage.clickMenuColaboradores()
});

When(/^clico em adicionar colaborador$/, () => {
	colaboradoresPage.clickAddColaborador()
	colaboradoresPage.validateRedirectToAddColaboradorPage()
});

When(/^cadastro novo colaborador$/, () => {
	colaboradoresPage.novoColaboradorSubmit()
});

Then(/^cadastro é realizado com sucesso$/, () => {
	colaboradoresPage.validateSucessAlert()
	colaboradoresPage.validateRedirectToColaboradorPage()
	colaboradoresPage.validateCadastroData()
});

// BUSCA
When(/^acesso o menu de colaboradores$/, () => {
	colaboradoresPage.clickMenuColaboradores()
});

When(/^pesquiso colaborador$/, () => {
	colaboradoresPage.colaboradorSearchSubmit()
});

Then(/^os resultados da busca são exibidos com sucesso$/, () => {
	colaboradoresPage.validateOneSearchResult()
	colaboradoresPage.clickEditOnColaboradorCard()
	colaboradoresPage.validateRedirectToColaboradorPage()
	colaboradoresPage.validateCadastroData()
});

//EXCLUSAO
When(/^acesso o menu de colaboradores$/, () => {
	colaboradoresPage.clickMenuColaboradores()
});

When(/^pesquiso colaborador$/, () => {
	colaboradoresPage.colaboradorSearchSubmit()
});

When(/^clico no botão de excluir$/, () => {
	colaboradoresPage.validateOneSearchResult()
	colaboradoresPage.clickDeleteOnColaboradorCard()
});

When(/^confirmo que desejo excluir$/, () => {
	colaboradoresPage.clickConfirmDeleteButton()
});

Then(/^o colaborador é excluído com sucesso$/, () => {
	colaboradoresPage.validateSucessAlert()
	colaboradoresPage.colaboradorSearchSubmit()
	colaboradoresPage.validateTableBodyNotExist()
});

// CADASTRO SEM SUCESSO
When(/^acesso o menu de colaboradores$/, () => {
	colaboradoresPage.clickMenuColaboradores()
});

When(/^clico em adicionar colaborador$/, () => {
	colaboradoresPage.clickAddColaborador()
});

When(/^tento cadastrar novo colaborador com "([^"]*)", "([^"]*)" e "([^"]*)"$/, (firstname,middlename,lastname) => {
	colaboradoresPage.novoColaboradorParamsSubmit(firstname,middlename,lastname)
});

Then(/^alerta de "([^"]*)" é exibido com sucesso$/, (test) => {
	colaboradoresPage.validateSpanErrorRequired()
});



