import ColaboradoresElements from "../elements/colaboradores.Elements";
const colaboradoresElements = new ColaboradoresElements
const faker = require('faker-br');

class ColaboradoresPage {
    clickMenuColaboradores() {
        cy.get(colaboradoresElements.menuColaboradoresLink()).contains('PIM').click()
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