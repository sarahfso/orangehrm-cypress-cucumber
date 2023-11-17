import ColaboradoresElements from "../elements/colaboradores.Elements";
import { employee } from "../fixtures/employee";

const colaboradoresElements = new ColaboradoresElements

const newColaborador = {
    firstName: employee.firstName,
    middleName: employee.middleName,
    lastName: employee.lastName,
    fullName:`${employee.firstName} ${employee.middleName} ${employee.lastName}`,

    userName: employee.userName,
    password: employee.password
}

let colaboradorId

class ColaboradoresPage {
    clickMenuColaboradores() {
        cy.get(colaboradoresElements.menuColaboradoresLink()).contains('PIM').click()
    }

    clickAddColaborador() {
        cy.contains('button', 'Add').should('be.visible').click()
    }

    novoColaboradorSubmit() {
        cy.get(colaboradoresElements.inputFirstName())
        .should('be.visible').type(newColaborador.firstName);
        cy.get(colaboradoresElements.inputMiddleName())
        .should('be.visible').type(newColaborador.middleName);
        cy.get(colaboradoresElements.inputLastName())
        .should('be.visible').type(newColaborador.lastName);

        // Verifica se o Employee Id já existe
        cy.get(colaboradoresElements.errorAlert())
        .if('contain', colaboradoresElements.errorIdDuplicateMessage())
        .selectInputByLabel('Employee Id')
        .clear()
        .type(Math.floor(Math.random() * 10000));

        // Guarda o valor de Employee Id
        cy.selectInputByLabel('Employee Id').invoke('val').then((value) => {
            colaboradorId = value;
        });

        // Upload da imagem do perfil
        cy.get(colaboradoresElements.inputProfileImage())
        .selectFile(colaboradoresElements.pathToImage(), {force: true})

        // Valida upload
        cy.get(colaboradoresElements.profileImage())
        .should('not.contain', colaboradoresElements.defaultProfileImg())

        // Submete
        cy.get(colaboradoresElements.buttonSubmit())
        .should('be.visible').click()

    }

    novoColaboradorSubmit(firstname,middlename,lastname) {
        if (firstname === "") {
            cy.get(colaboradoresElements.inputFirstName()).clear();
        } else {
            cy.get(colaboradoresElements.inputFirstName())
            .should('be.visible').type(firstname);
        }

        if (middlename === "") {
            cy.get(colaboradoresElements.inputMiddleName()).clear();
        } else {
            cy.get(colaboradoresElements.inputMiddleName())
            .should('be.visible').type(middlename);
        }

        if (middlename === "") {
            cy.get(colaboradoresElements.inputLastName()).clear();
        } else {
            cy.get(colaboradoresElements.inputLastName())
            .should('be.visible').type(lastname);
        }
        

        // Verifica se o Employee Id já existe
        cy.get(colaboradoresElements.errorAlert())
        .if('contain', colaboradoresElements.errorIdDuplicateMessage())
        .selectInputByLabel('Employee Id')
        .clear()
        .type(Math.floor(Math.random() * 10000));

        // Guarda o valor de Employee Id
        cy.selectInputByLabel('Employee Id').invoke('val').then((value) => {
            colaboradorId = value;
        });

        // Upload da imagem do perfil
        cy.get(colaboradoresElements.inputProfileImage())
        .selectFile(colaboradoresElements.pathToImage(), {force: true})

        // Valida upload
        cy.get(colaboradoresElements.profileImage())
        .should('not.contain', colaboradoresElements.defaultProfileImg())

        // Submete
        cy.get(colaboradoresElements.buttonSubmit())
        .should('be.visible').click()

    }

    colaboradorSearchSubmit() {
        // Preenche os campos
        cy.selectInputByLabel('Employee Name').type(newColaborador.fullName);
        cy.selectInputByLabel('Employee Id').type(colaboradorId);
    
        // Submete
        cy.get(colaboradoresElements.buttonSubmit())
        .should('be.visible').click({force:true});
    }

    validateSucessAlert() {
        cy.get(colaboradoresElements.sucessAlert()).should('exist')
    }

    validateCadastroData() {
        cy.get(colaboradoresElements.inputFirstName())
        .should('have.value', newColaborador.firstName);
        cy.get(colaboradoresElements.inputMiddleName())
        .should('have.value', newColaborador.middleName);
        cy.get(colaboradoresElements.inputLastName()).should('have.value', newColaborador.lastName);   
    }

    validateRedirectToAddColaboradorPage() {
        cy.shouldRedirect('/pim/addEmployee');
    }

    validateRedirectToColaboradorPage() {
        cy.shouldRedirect('/pim/viewPersonalDetails');
    }

    validateOneSearchResult() {
        // Valida se há apenas 1 resultado
        cy.get(colaboradoresElements.searchResultsTable()).as('searchResults')
        .children().should('have.length', 1);
    }

    validateNoRecordsFoundAlert() {
        cy.get(colaboradoresElements.noRecordsFoundAlert()).should('exist')
    }

    validateSpanErrorRequired() {
        cy.get(colaboradoresElements.errorAlert()).contains('Required')
    }

    clickEditOnColaboradorCard() {
        cy.get('@searchResults').find('button').last().click()
    }

    clickDeleteOnColaboradorCard() {
        cy.get('@searchResults').find('button').first().click()
    }

    clickConfirmDeleteButton() {
        cy.get(colaboradoresElements.confirmDeleteButton()).click()
    }

    validateLIstColaboradores() {
        cy.get(colaboradoresElements.titleColaboradores()).contains('Employee Information').should('be.visible')
    }

    mockErrorList() {
        cy.intercept('GET', '**/v2/pim/employees?**', { forceNetworkError: true }).as('errorLIstPim')
    }

    validateTableBodyNotExist() {
        cy.get(colaboradoresElements.noRecords())
            .should('be.visible')
            .and('contain.text', 'No Records Found')
    }

    mockGetList() {
        cy.intercept('GET', '**/v2/pim/employees?**', {fixture: 'getList.json'}).as('mockListPim')
    }

    intercepGetList() {
        cy.intercept('GET', '**/v2/pim/employees?**').as('ListPim')
    }

    waitGetList(){
        cy.wait('@ListPim').then((res) => {
            let userData = res.response.body.data
            
            userData.forEach(function(data){
                cy.contains(data.firstName)
            })

            // let dataFilter = userData.filter(user => user.lastName === 'Rusi')
            
            // console.log(dataFilter)
            // dataFilter.forEach(function(data) {
            //     cy.log(data.firstName)
            //     cy.contains(data.firstName)
            // })
            
        })
    }

}

export default ColaboradoresPage