import LoginElements from "../elements/loginElements";
const loginElements = new LoginElements

class LoginPage {
    verificaImageLogin() {
        cy.get(loginElements.imageLogin()).should('be.visible')
    }
    loginSubmit(user, password) {
        cy.get(loginElements.inputName()).type(user)
        cy.get(loginElements.inputPassword()).type(password)
    
        cy.get(loginElements.buttonSubmitLogin()).click()
    }
    validateLoginSucessfull() {
        cy.get(loginElements.imageLoginSucessfull()).should('be.visible')
    }
}

export default LoginPage