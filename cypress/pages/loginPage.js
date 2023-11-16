import LoginElements from "../elements/login.Elements";
const loginElements = new LoginElements

class LoginPage {
    verificaImageLogin() {
        cy.get(loginElements.imageLogin()).should('be.visible')
    }
    loginSubmit(user, password) {

        if (user === "") {
            cy.get(loginElements.inputName()).clear();
        } else {
            cy.get(loginElements.inputName()).type(user);
        }

        if (password === "") {
            cy.get(loginElements.inputPassword()).clear();
        } else {
            cy.get(loginElements.inputPassword()).type(password);
        }

        cy.get(loginElements.buttonSubmitLogin()).click();
    }
    validateLoginSucessfull() {
        cy.get(loginElements.imageLoginSucessfull()).should('be.visible')
    }

    validateErrorLoginAlert() {
        cy.get(loginElements.errorLoginAlert()).should('have.text', 'Invalid credentials')
    }

    validateSpanErrorRequired() {
        cy.get(loginElements.requiredLabel).contains('Required')
    }
}

export default LoginPage