import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../pages/loginPage';
const loginPage = new LoginPage

let name = 'Admin'
let password = 'admin123'

Given(/^acesso a pagina de login$/, () => {
	cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    loginPage.verificaImageLogin()
});

When(/^realizo o login com dados válidos$/, () => {
    loginPage.loginSubmit(name,password)
});

Then(/^login é realizado com sucesso$/, () => {
	loginPage.validateLoginSucessfull()
});


Given(/^login e realizado com sucesso$/, () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    loginPage.verificaImageLogin()
    loginPage.loginSubmit(name,password)
    loginPage.validateLoginSucessfull()
});

